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

  const leadExample =
    "Comprueba tu razonamiento: al elegir una opción sabrás al instante si coincide con el criterio del caso.";

  return (
    <SimulatorStageQuiz
      caseKey={caseKey}
      questions={stubQuestions}
      initialAnswers={initialAnswers}
      stageComplete={analisisComplete}
      answerEditSourceStage="analisis"
      markCompleteSlug="analisis"
      heading="Quiz de análisis"
      lead={exampleMode ? leadExample : undefined}
      completeCta="Marcar análisis completo y continuar"
      exampleMode={exampleMode}
      exampleQuizSection="analysis"
    />
  );
}
