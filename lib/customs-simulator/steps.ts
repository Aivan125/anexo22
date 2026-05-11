import "server-only";

import { redirect } from "next/navigation";
import {
  LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX,
  SIMULATOR_STEP_SLUGS,
  type SimulatorStepSlug,
} from "@/lib/customs-simulator/constants";
import {
  loadCaseBundle,
  loadCaseJourney,
} from "@/lib/data/customs-simulator/load";
import type { JourneyEvent } from "@/lib/data/customs-simulator/schemas";
import {
  fieldMatchesExpected,
  scoreSimulatorBundleAgainstAnswers,
} from "@/lib/customs-simulator/simulator-scoring";
import {
  answersAsPlainObject,
  appendJourneyResolved,
  getOrCreateProgress,
  journeyResolvedAsArray,
  parsedCompletedStages,
  patchProgress,
  type CustomsProgressRow,
} from "@/lib/customs-simulator/progress";

/** Se cierra desde `markStageComplete`. `resultado` se marca vía calificación §6.10. */
export type MarkableSimulatorStepSlug =
  | "expediente"
  | "analisis"
  | "decisiones"
  | "pedimento"
  | "contribuciones"
  | "controversia"
  | "resumen";

/** @deprecated use MarkableSimulatorStepSlug */
export type MarkableSimulatorStepPhase4 = "expediente" | "analisis";

/** Primeros `throughIndexInclusive + 1` slugs coinciden con el orden oficial §6.4 */
export function contiguousPrefixMatchesStages(
  completed: SimulatorStepSlug[],
  throughIndexInclusive: number,
): boolean {
  if (completed.length !== throughIndexInclusive + 1) return false;
  for (let i = 0; i <= throughIndexInclusive; i++) {
    if (completed[i] !== SIMULATOR_STEP_SLUGS[i]) return false;
  }
  return true;
}

const RESULTADO_IDX = SIMULATOR_STEP_SLUGS.indexOf("resultado");
const RESUMEN_IDX = SIMULATOR_STEP_SLUGS.indexOf("resumen");

/**
 * §6.1 / §6.10: acceso a ruta por `stepSlug`. `resumen` exige evaluación válida:
 * `evaluatedAt` y etapa `resultado` en `completedStages` (refleja `finalizeAttempt` §11.3).
 */
export function canAccessStep(
  progress: CustomsProgressRow,
  stepSlug: SimulatorStepSlug,
): boolean {
  const idx = SIMULATOR_STEP_SLUGS.indexOf(stepSlug);
  if (idx < 0) return false;
  if (idx > LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX) return false;
  const completed = parsedCompletedStages(progress);
  const k = completed.length;
  if (idx > k) return false;
  if (stepSlug === "resumen") {
    return (
      progress.evaluatedAt != null && completed.includes("resultado")
    );
  }
  return true;
}

export function getRedirectSlugFor(
  progress: CustomsProgressRow,
): SimulatorStepSlug {
  const completed = parsedCompletedStages(progress);
  const k = completed.length;
  const bound = Math.min(k, LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX);
  const candidate = SIMULATOR_STEP_SLUGS[bound]!;
  if (
    candidate === "resumen" &&
    RESUMEN_IDX >= 0 &&
    progress.evaluatedAt == null
  ) {
    return SIMULATOR_STEP_SLUGS[RESULTADO_IDX]!;
  }
  return candidate;
}

export async function assertStepAccessible(
  profileId: string,
  caseKey: string,
  stepSlug: SimulatorStepSlug,
): Promise<CustomsProgressRow> {
  const progress = await getOrCreateProgress(profileId, caseKey);
  if (!canAccessStep(progress, stepSlug)) {
    const target = getRedirectSlugFor(progress);
    redirect(`/simulador-aduanero/${caseKey}/${target}`);
  }
  return progress;
}

function correctChoiceLabel(ev: JourneyEvent): string | undefined {
  return ev.options.find((o) => o.correct)?.label;
}

export async function appendJourneyResolvedIfCorrectAnswer(
  profileId: string,
  caseKey: string,
  eventId: string,
  chosenLabel: string,
): Promise<
  | { ok: true; progress: CustomsProgressRow }
  | { ok: false; code: "bad_choice"; message: string }
> {
  const journey = loadCaseJourney(caseKey);
  const ev = journey.expediente.find((e) => e.id === eventId.trim());
  if (!ev) {
    return {
      ok: false,
      code: "bad_choice",
      message: "Evento no encontrado en el caso",
    };
  }
  const expected = correctChoiceLabel(ev);
  if (
    typeof chosenLabel !== "string" ||
    !chosenLabel.trim() ||
    expected !== chosenLabel.trim()
  ) {
    return {
      ok: false,
      code: "bad_choice",
      message:
        "La opción no es correcta para continuar — revisa el escenario narrado.",
    };
  }
  const updated = await appendJourneyResolved(profileId, caseKey, ev.id);
  return { ok: true, progress: updated };
}

function nextCurrentStepSlugAfterComplete(
  newCompletedStages: SimulatorStepSlug[],
): SimulatorStepSlug {
  const idx = Math.min(
    newCompletedStages.length,
    LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX,
  );
  return SIMULATOR_STEP_SLUGS[idx]!;
}

function quizStageComplete(
  answers: Record<string, unknown>,
  questions: { id: string; options: string[] }[],
): boolean {
  return questions.every((q) => {
    const v = answers[q.id];
    return typeof v === "string" && v.trim() !== "" && q.options.includes(v);
  });
}

export async function markStageComplete(
  profileId: string,
  caseKey: string,
  stepSlug: MarkableSimulatorStepSlug,
): Promise<
  | { ok: true; progress: CustomsProgressRow }
  | {
      ok: false;
      code:
        | "wrong_order"
        | "expediente_incomplete"
        | "analisis_incomplete"
        | "decisiones_incomplete"
        | "pedimento_incomplete"
        | "contribuciones_incomplete"
        | "controversia_incomplete"
        | "resumen_prereq"
        | "unexpected";
      message: string;
    }
> {
  try {
    const progress = await getOrCreateProgress(profileId, caseKey);
    const completed = parsedCompletedStages(progress);
    const expectedNext = SIMULATOR_STEP_SLUGS[completed.length];
    if (!expectedNext || expectedNext !== stepSlug) {
      return {
        ok: false,
        code: "wrong_order",
        message: "No puedes cerrar esta etapa todavía o ya fue completada.",
      };
    }

    const bundle = loadCaseBundle(caseKey);
    const answers = answersAsPlainObject(progress.answers);

    if (stepSlug === "expediente") {
      const journey = loadCaseJourney(caseKey);
      const expectedIds = new Set(journey.expediente.map((e) => e.id));
      const resolved = journeyResolvedAsArray(progress.journeyResolved);
      const resolvedSet = new Set(resolved);
      let expedienteIncomplete =
        journey.expediente.length === 0 ||
        resolvedSet.size !== expectedIds.size;
      if (!expedienteIncomplete) {
        for (const id of expectedIds) {
          if (!resolvedSet.has(id)) {
            expedienteIncomplete = true;
            break;
          }
        }
      }
      if (expedienteIncomplete) {
        return {
          ok: false,
          code: "expediente_incomplete",
          message:
            "Resuelve todos los eventos del expediente antes de cerrarlo.",
        };
      }
    }

    if (stepSlug === "analisis") {
      for (const q of bundle.analysisQuestions) {
        const v = answers[q.id];
        if (
          typeof v !== "string" ||
          v.trim() === "" ||
          !q.options.includes(v)
        ) {
          return {
            ok: false,
            code: "analisis_incomplete",
            message:
              "Responde todas las preguntas de análisis con una opción válida.",
          };
        }
      }
    }

    if (stepSlug === "decisiones") {
      if (!quizStageComplete(answers, bundle.decisionQuestions)) {
        return {
          ok: false,
          code: "decisiones_incomplete",
          message: "Completa todas las preguntas de decisiones antes de cerrar.",
        };
      }
    }

    if (stepSlug === "pedimento") {
      for (const f of bundle.pedimentoFields) {
        if (!fieldMatchesExpected(f, answers[f.id])) {
          return {
            ok: false,
            code: "pedimento_incomplete",
            message:
              "Revisa todos los campos del pedimento: valor inválido o incompleto.",
          };
        }
      }
    }

    if (stepSlug === "contribuciones") {
      for (const f of bundle.taxFields) {
        if (!fieldMatchesExpected(f, answers[f.id])) {
          return {
            ok: false,
            code: "contribuciones_incomplete",
            message:
              "Completa contribuciones con valores que cumplan los criterios del caso.",
          };
        }
      }
    }

    if (stepSlug === "controversia") {
      if (!quizStageComplete(answers, bundle.controversyQuestions)) {
        return {
          ok: false,
          code: "controversia_incomplete",
          message:
            "Responde todas las preguntas de controversia antes de cerrar.",
        };
      }
    }

    if (stepSlug === "resumen") {
      if (progress.evaluatedAt == null) {
        return {
          ok: false,
          code: "resumen_prereq",
          message: "Debes calificar el caso en Resultado antes del resumen.",
        };
      }
    }

    const newCompleted = [...completed, stepSlug] as SimulatorStepSlug[];
    const currentStepSlug = nextCurrentStepSlugAfterComplete(newCompleted);
    const updated = await patchProgress(profileId, caseKey, {
      skipCompletionQueueInvalidation: true,
      completedStages: newCompleted,
      currentStepSlug,
    });
    return { ok: true, progress: updated };
  } catch (e) {
    console.error("[markStageComplete]", e);
    return {
      ok: false,
      code: "unexpected",
      message: "No se pudo actualizar la etapa",
    };
  }
}

/**
 * §11.3 `finalizeAttempt` — Calificar en servidor: recalcula puntaje, persiste
 * `scorePercent` (0–100) y `evaluatedAt`, añade `resultado` a `completedStages` y
 * sitúa `currentStepSlug` en `resumen`. Idempotente: si ya hay `evaluatedAt`, error
 * `already_finalized` (la acción puede redirigir a resumen).
 */
export async function finalizeSimulatorAttempt(
  profileId: string,
  caseKey: string,
): Promise<
  | { ok: true; progress: CustomsProgressRow; percent: number }
  | {
      ok: false;
      code: "wrong_order" | "already_finalized" | "unexpected";
      message: string;
    }
> {
  try {
    const progress = await getOrCreateProgress(profileId, caseKey);
    if (progress.evaluatedAt != null) {
      return {
        ok: false,
        code: "already_finalized",
        message: "El intento ya fue calificado.",
      };
    }

    const completed = parsedCompletedStages(progress);
    const expectedNext = SIMULATOR_STEP_SLUGS[completed.length];
    if (expectedNext !== "resultado") {
      return {
        ok: false,
        code: "wrong_order",
        message: "Completa la controversia antes de calificar.",
      };
    }

    if (!contiguousPrefixMatchesStages(completed, RESULTADO_IDX - 1)) {
      return {
        ok: false,
        code: "wrong_order",
        message: "Las etapas completadas no son un prefijo válido del pipeline.",
      };
    }

    const bundle = loadCaseBundle(caseKey);
    const answers = answersAsPlainObject(progress.answers);
    const { percent: rawPercent } =
      scoreSimulatorBundleAgainstAnswers(bundle, answers);
    const percent = Math.min(100, Math.max(0, Math.round(rawPercent)));

    const newCompleted = [
      ...completed,
      "resultado" as const,
    ] as SimulatorStepSlug[];

    const updated = await patchProgress(profileId, caseKey, {
      skipCompletionQueueInvalidation: true,
      completedStages: newCompleted,
      currentStepSlug: "resumen",
      scorePercent: percent,
      evaluatedAt: new Date(),
    });
    return { ok: true, progress: updated, percent };
  } catch (e) {
    console.error("[finalizeSimulatorAttempt]", e);
    return {
      ok: false,
      code: "unexpected",
      message: "No se pudo calificar el intento",
    };
  }
}
