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
}: {
  caseKey: string;
  questions: AnalysisQuestionStub[];
  initialAnswers: Record<string, unknown>;
  analisisComplete: boolean;
}) {
  const stubQuestions: StageQuizQuestionStub[] = questions;

  return (
    <SimulatorStageQuiz
      caseKey={caseKey}
      questions={stubQuestions}
      initialAnswers={initialAnswers}
      stageComplete={analisisComplete}
      answerEditSourceStage="analisis"
      markCompleteSlug="analisis"
      heading="Quiz de análisis"
      lead="Las respuestas se guardan de forma incremental (§6.9: editar aquí trunca etapas posteriores hasta volver a cerrarlas). El cierre de etapa lo valida el servidor contra el caso."
      completeCta="Marcar análisis completo y continuar"
    />
  );
}
