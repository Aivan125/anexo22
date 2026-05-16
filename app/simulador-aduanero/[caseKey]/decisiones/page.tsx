import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getUserWithProfile } from "@/lib/helpers-server";
import { isPublishedCaseKey, loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { SimulatorStageQuiz } from "@/components/customs-simulator/simulator-stage-quiz";
import {
  answersAsPlainObject,
  parsedCompletedStages,
} from "@/lib/customs-simulator/progress";
import { assertStepAccessible } from "@/lib/customs-simulator/steps";

type Props = {
  params: Promise<{ caseKey: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { caseKey } = await params;
  if (!isPublishedCaseKey(caseKey)) {
    return { title: "Caso no encontrado" };
  }
  try {
    const bundle = loadCaseBundle(caseKey);
    return {
      title: `${bundle.shortLabel} — Decisiones`,
      description: bundle.label,
    };
  } catch {
    return { title: "Caso no encontrado" };
  }
}

export default async function DecisionesPage({ params }: Props) {
  const { caseKey } = await params;

  if (!isPublishedCaseKey(caseKey)) {
    notFound();
  }

  let bundle;
  try {
    bundle = loadCaseBundle(caseKey);
  } catch {
    notFound();
  }

  const session = await getUserWithProfile();
  if (!session) {
    redirect("/login");
  }

  const progress = await assertStepAccessible(
    session.profile.id,
    caseKey,
    "decisiones",
  );

  const completed = parsedCompletedStages(progress);
  const stageComplete = completed.includes("decisiones");

  const questions = bundle.decisionQuestions.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options,
  }));

  const initialAnswers = answersAsPlainObject(progress.answers);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-xl sm:text-3xl font-bold text-foreground">Decisiones</h1>
        {bundle.isExample ? (
          <p className="max-w-xl text-sm sm:text-base text-muted-foreground">
            Ejercicio de método de valoración e incrementables.{" "}
            <span className="text-foreground font-medium">
              Recibirás pistas inmediatas en cada opción marcada incorrecta.
            </span>
          </p>
        ) : null}
      </header>

      <SimulatorStageQuiz
        caseKey={caseKey}
        questions={questions}
        initialAnswers={initialAnswers}
        stageComplete={stageComplete}
        answerEditSourceStage="decisiones"
        markCompleteSlug="decisiones"
        heading="Cuestionario de decisiones"
        lead={
          bundle.isExample
            ? "Comprueba tus criterios: en este caso ejemplo verás retroalimentación al elegir opción."
            : undefined
        }
        completeCta="Cerrar etapa de decisiones"
        exampleMode={bundle.isExample}
        exampleQuizSection="decision"
      />
    </div>
  );
}
