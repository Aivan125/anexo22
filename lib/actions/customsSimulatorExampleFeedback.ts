"use server";

import { z } from "zod";
import { getUserWithProfile, hasCourseAccess } from "@/lib/helpers-server";
import { loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { fieldMatchesExpected } from "@/lib/customs-simulator/simulator-scoring";

const quizPayloadSchema = z.object({
  kind: z.literal("quiz"),
  caseKey: z.string().trim().min(1).max(200),
  section: z.enum(["analysis", "decision", "controversy"]),
  questionId: z.string().trim().min(1).max(200),
  value: z.string(),
});

const formPayloadSchema = z.object({
  kind: z.literal("form"),
  caseKey: z.string().trim().min(1).max(200),
  section: z.enum(["pedimento", "tax"]),
  fieldId: z.string().trim().min(1).max(200),
  value: z.union([z.string(), z.number()]),
});

const payloadSchema = z.discriminatedUnion("kind", [quizPayloadSchema, formPayloadSchema]);

export type ExampleFeedbackOk = {
  ok: true;
  correct: boolean;
  wrongHint?: string;
  correctNote?: string;
  /** Sólo si `correct` es false: texto de la opción modelo en MCQ. */
  modelAnswer?: string;
};

export type VerifyExampleSimulatorAnswerResult =
  | ExampleFeedbackOk
  | { ok: false; message: string };

export async function verifyExampleSimulatorAnswerAction(
  raw: unknown,
): Promise<VerifyExampleSimulatorAnswerResult> {
  const session = await getUserWithProfile();
  if (!session) {
    return { ok: false, message: "Inicia sesión para continuar." };
  }
  if (!hasCourseAccess(session.profile, "/simulador-aduanero")) {
    return {
      ok: false,
      message: "Sin acceso al simulador aduanero para este perfil.",
    };
  }

  const parsed = payloadSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, message: "Solicitud inválida." };
  }

  const data = parsed.data;

  let bundle;
  try {
    bundle = loadCaseBundle(data.caseKey);
  } catch {
    return { ok: false, message: "Caso no encontrado." };
  }

  if (!bundle.isExample) {
    return {
      ok: false,
      message: "La retroalimentación inmediata sólo está disponible en casos demostrativos.",
    };
  }

  if (data.kind === "quiz") {
    const list =
      data.section === "analysis"
        ? bundle.analysisQuestions
        : data.section === "decision"
          ? bundle.decisionQuestions
          : bundle.controversyQuestions;

    const q = list.find((x) => x.id === data.questionId);
    if (!q) {
      return { ok: false, message: "Pregunta no encontrada." };
    }

    const trimmed = data.value.trim();
    const correct = trimmed === q.correctAnswer.trim();

    return {
      ok: true,
      correct,
      wrongHint: !correct ? q.exampleWrongHint : undefined,
      correctNote: correct ? q.exampleCorrectNote : undefined,
      modelAnswer: !correct ? q.correctAnswer : undefined,
    };
  }

  const fields =
    data.section === "pedimento" ? bundle.pedimentoFields : bundle.taxFields;
  const f = fields.find((x) => x.id === data.fieldId);
  if (!f) {
    return { ok: false, message: "Campo no encontrado." };
  }

  const correct = fieldMatchesExpected(f, data.value);

  return {
    ok: true,
    correct,
    wrongHint: !correct ? f.exampleWrongHint : undefined,
    correctNote: correct ? f.exampleCorrectNote : undefined,
  };
}
