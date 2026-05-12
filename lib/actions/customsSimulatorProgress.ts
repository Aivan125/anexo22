"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getUserWithProfile, hasCourseAccess } from "@/lib/helpers-server";
import { patchProgress, resetSimulatorProgress } from "@/lib/customs-simulator/progress";
import type { SimulatorStepSlug } from "@/lib/customs-simulator/constants";
import { SIMULATOR_STEP_SLUGS } from "@/lib/customs-simulator/constants";
import {
  appendJourneyResolvedIfCorrectAnswer,
  finalizeSimulatorAttempt,
  markStageComplete,
  type MarkableSimulatorStepSlug,
} from "@/lib/customs-simulator/steps";

const ROUTE_PREFIX = "/simulador-aduanero" as const;

const IMPLEMENTED_STEP_SLUGS = [
  "expediente",
  "analisis",
  "decisiones",
  "pedimento",
  "contribuciones",
  "controversia",
  "resumen",
] as const satisfies readonly MarkableSimulatorStepSlug[];

const markStageCompleteSchema = z
  .object({
    caseKey: z.string().trim().min(1).max(200),
    stepSlug: z.enum(IMPLEMENTED_STEP_SLUGS),
    /** Unifica guardado + cierre en la misma acción para pedimento/contribuciones. */
    answersPatch: z
      .record(
        z.string().max(200),
        z.union([z.string(), z.number(), z.boolean()]),
      )
      .optional(),
  })
  .superRefine((data, ctx) => {
    const keys =
      data.answersPatch !== undefined ? Object.keys(data.answersPatch) : [];
    if (!data.answersPatch || keys.length === 0) return;
    if (data.stepSlug !== "pedimento" && data.stepSlug !== "contribuciones") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "answersPatch sólo se usa al cerrar pedimento o contribuciones",
      });
    }
    if (keys.length > 100) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "answersPatch debe tener máximo 100 claves",
      });
    }
  });

const stepSlugSchema = z.enum(
  SIMULATOR_STEP_SLUGS as unknown as readonly [
    SimulatorStepSlug,
    ...SimulatorStepSlug[],
  ],
);

const patchProgressSchema = z.object({
  caseKey: z.string().trim().min(1).max(200),
  answersPatch: z
    .record(
      z.string().max(200),
      z.union([z.string(), z.number(), z.boolean()]),
    )
    .optional(),
  /** §6.9: etapa cuyas respuestas se editan (inferible si se omite) */
  answerEditSourceStage: stepSlugSchema.optional(),
}).superRefine((data, ctx) => {
  if (data.answersPatch && Object.keys(data.answersPatch).length > 100) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "answersPatch debe tener máximo 100 claves",
    });
  }
});

const caseKeySchema = z.object({
  caseKey: z.string().trim().min(1).max(200),
});

const submitJourneyChoiceSchema = z.object({
  caseKey: z.string().trim().min(1).max(200),
  eventId: z.string().trim().min(1).max(128),
  chosenLabel: z.string().trim().min(1).max(1200),
});

export type PatchResult<T = void> =
  | { ok: true; data?: T }
  | {
      ok: false;
      code:
        | "auth_required"
        | "forbidden"
        | "validation_error"
        | "unexpected"
        | "bad_choice"
        | "wrong_order"
        | "expediente_incomplete"
        | "analisis_incomplete"
        | "decisiones_incomplete"
        | "pedimento_incomplete"
        | "contribuciones_incomplete"
        | "controversia_incomplete"
        | "resumen_prereq"
        | "already_finalized";
      message: string;
    };

function assertSimulatorCourseAccess(profile: {
  role: string;
  enrolledCourseSlugs?: string[];
}): boolean {
  return hasCourseAccess(profile, ROUTE_PREFIX);
}

function revalidateCaseSimulatorPaths(caseKey: string) {
  revalidatePath(`${ROUTE_PREFIX}/${caseKey}`, "layout");
  revalidatePath(ROUTE_PREFIX);
}

export async function patchSimulatorProgressAction(
  raw: z.input<typeof patchProgressSchema>,
): Promise<PatchResult> {
  const parsed = patchProgressSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      code: "validation_error",
      message: parsed.error.flatten().fieldErrors
        ? JSON.stringify(parsed.error.flatten().fieldErrors)
        : "Validación incorrecta",
    };
  }

  const result = await getUserWithProfile();
  if (!result) {
    return { ok: false, code: "auth_required", message: "Inicia sesión" };
  }
  const { profile } = result;
  if (!(assertSimulatorCourseAccess(profile))) {
    return { ok: false, code: "forbidden", message: "Sin acceso al curso" };
  }

  try {
    await patchProgress(profile.id, parsed.data.caseKey, {
      answersPatch: parsed.data.answersPatch,
      answerEditSourceStage: parsed.data.answerEditSourceStage,
    });
    revalidateCaseSimulatorPaths(parsed.data.caseKey);
    return { ok: true };
  } catch (e) {
    console.error("[patchSimulatorProgressAction]", e);
    return {
      ok: false,
      code: "unexpected",
      message: "No se pudo guardar el progreso",
    };
  }
}

export async function resetSimulatorProgressAction(
  raw: z.input<typeof caseKeySchema>,
): Promise<void> {
  const parsed = caseKeySchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("VALIDATION");
  }

  const result = await getUserWithProfile();
  if (!result) {
    redirect("/login");
  }
  if (!(assertSimulatorCourseAccess(result.profile))) {
    redirect("/dashboard");
  }

  try {
    await resetSimulatorProgress(result.profile.id, parsed.data.caseKey);
    revalidateCaseSimulatorPaths(parsed.data.caseKey);
  } catch (e) {
    console.error("[resetSimulatorProgressAction]", e);
    throw e;
  }
  redirect(`${ROUTE_PREFIX}/${parsed.data.caseKey}/expediente`);
}

export async function submitJourneyChoiceAction(
  raw: z.input<typeof submitJourneyChoiceSchema>,
): Promise<PatchResult> {
  const parsed = submitJourneyChoiceSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      code: "validation_error",
      message:
        parsed.error.flatten().fieldErrors
          ? JSON.stringify(parsed.error.flatten().fieldErrors)
          : "Validación incorrecta",
    };
  }

  const auth = await getUserWithProfile();
  if (!auth) {
    return { ok: false, code: "auth_required", message: "Inicia sesión" };
  }
  if (!assertSimulatorCourseAccess(auth.profile)) {
    return { ok: false, code: "forbidden", message: "Sin acceso al curso" };
  }

  try {
    const outcome = await appendJourneyResolvedIfCorrectAnswer(
      auth.profile.id,
      parsed.data.caseKey,
      parsed.data.eventId,
      parsed.data.chosenLabel,
    );
    if (!outcome.ok) {
      return {
        ok: false,
        code: "bad_choice",
        message: outcome.message,
      };
    }
    revalidateCaseSimulatorPaths(parsed.data.caseKey);
    return { ok: true };
  } catch (e) {
    console.error("[submitJourneyChoiceAction]", e);
    return {
      ok: false,
      code: "unexpected",
      message: "No se pudo registrar el evento",
    };
  }
}

export async function markStageCompleteAction(
  raw: z.input<typeof markStageCompleteSchema>,
): Promise<PatchResult> {
  const parsed = markStageCompleteSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      code: "validation_error",
      message:
        parsed.error.flatten().fieldErrors
          ? JSON.stringify(parsed.error.flatten().fieldErrors)
          : "Validación incorrecta",
    };
  }

  const auth = await getUserWithProfile();
  if (!auth) {
    return { ok: false, code: "auth_required", message: "Inicia sesión" };
  }
  if (!assertSimulatorCourseAccess(auth.profile)) {
    return { ok: false, code: "forbidden", message: "Sin acceso al curso" };
  }

  const { caseKey, stepSlug } = parsed.data;
  try {
    if (
      parsed.data.answersPatch &&
      Object.keys(parsed.data.answersPatch).length > 0 &&
      (stepSlug === "pedimento" || stepSlug === "contribuciones")
    ) {
      await patchProgress(auth.profile.id, caseKey, {
        answersPatch: parsed.data.answersPatch,
        answerEditSourceStage: stepSlug as SimulatorStepSlug,
      });
    }
  } catch (e) {
    console.error("[markStageCompleteAction] pre-patch", e);
    return {
      ok: false,
      code: "unexpected",
      message: "No se pudo guardar las respuestas antes de cerrar la etapa",
    };
  }

  const outcome = await markStageComplete(auth.profile.id, caseKey, stepSlug);

  if (!outcome.ok) {
    const code =
      outcome.code === "unexpected"
        ? "unexpected"
        : outcome.code === "wrong_order"
          ? "wrong_order"
          : outcome.code === "analisis_incomplete"
            ? "analisis_incomplete"
            : outcome.code === "decisiones_incomplete"
              ? "decisiones_incomplete"
              : outcome.code === "pedimento_incomplete"
                ? "pedimento_incomplete"
                : outcome.code === "contribuciones_incomplete"
                  ? "contribuciones_incomplete"
                  : outcome.code === "controversia_incomplete"
                    ? "controversia_incomplete"
                    : outcome.code === "resumen_prereq"
                      ? "resumen_prereq"
                      : "expediente_incomplete";
    return {
      ok: false,
      code,
      message: outcome.message,
    };
  }

  revalidateCaseSimulatorPaths(caseKey);

  const nextHref: Partial<Record<MarkableSimulatorStepSlug, string>> = {
    expediente: `${ROUTE_PREFIX}/${caseKey}/analisis`,
    analisis: `${ROUTE_PREFIX}/${caseKey}/decisiones`,
    decisiones: `${ROUTE_PREFIX}/${caseKey}/pedimento`,
    pedimento: `${ROUTE_PREFIX}/${caseKey}/contribuciones`,
    contribuciones: `${ROUTE_PREFIX}/${caseKey}/controversia`,
    controversia: `${ROUTE_PREFIX}/${caseKey}/resultado`,
  };

  const href = nextHref[stepSlug];
  if (href) redirect(href);

  return { ok: true };
}

export async function finalizeSimulatorAttemptAction(
  raw: z.input<typeof caseKeySchema>,
): Promise<void | PatchResult> {
  const parsed = caseKeySchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      code: "validation_error",
      message: "Validación incorrecta",
    };
  }

  const auth = await getUserWithProfile();
  if (!auth) {
    return { ok: false, code: "auth_required", message: "Inicia sesión" };
  }
  if (!assertSimulatorCourseAccess(auth.profile)) {
    return { ok: false, code: "forbidden", message: "Sin acceso al curso" };
  }

  const outcome = await finalizeSimulatorAttempt(
    auth.profile.id,
    parsed.data.caseKey,
  );
  if (!outcome.ok) {
    if (outcome.code === "already_finalized") {
      revalidateCaseSimulatorPaths(parsed.data.caseKey);
      redirect(`${ROUTE_PREFIX}/${parsed.data.caseKey}/resumen`);
    }
    const code =
      outcome.code === "wrong_order"
        ? "wrong_order"
        : "unexpected";
    return { ok: false, code, message: outcome.message };
  }
  revalidateCaseSimulatorPaths(parsed.data.caseKey);
  redirect(`${ROUTE_PREFIX}/${parsed.data.caseKey}/resumen`);
}
