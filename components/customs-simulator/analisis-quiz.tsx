"use client";

import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";
import { SimulatorStageQuiz, type StageQuizQuestionStub } from "./simulator-stage-quiz";

export type AnalysisQuestionStub = Pick<
  CaseBundle["analysisQuestions"][number],
  "id" | "text" | "options"
>;

export function AnalisisQuiz({
  caseKey,
  questions,
  initialAnswers,
  analisisComplete,
  exampleMode = false,
}: {
  caseKey: string;
  questions: AnalysisQuestionStub[];
  initialAnswers: Record<string, unknown>;
  analisisComplete: boolean;
  exampleMode?: boolean;
}) {
  const stubQuestions: StageQuizQuestionStub[] = questions;

  const leadStandard =
    "Las respuestas se guardan de forma incremental (§6.9: editar aquí trunca etapas posteriores hasta volver a cerrarlas). El cierre valida en servidor contra el caso.";
  const leadExample =
    "Comprueba tu razonamiento: al elegir una opción sabrás al instante si coincide con el criterio del caso. Tus respuestas se siguen guardando en servidor; editar puede invalidar etapas posteriores (§6.9).";

  return (
    <SimulatorStageQuiz
      caseKey={caseKey}
      questions={stubQuestions}
      initialAnswers={initialAnswers}
      stageComplete={analisisComplete}
      answerEditSourceStage="analisis"
      markCompleteSlug="analisis"
      heading="Quiz de análisis"
      lead={exampleMode ? leadExample : leadStandard}
      completeCta="Marcar análisis completo y continuar"
      exampleMode={exampleMode}
      exampleQuizSection="analysis"
    />
  );
}
