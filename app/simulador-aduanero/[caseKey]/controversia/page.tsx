import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getUserWithProfile } from "@/lib/helpers-server";
import { isPublishedCaseKey, loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { ControversiaContextPanels } from "@/components/customs-simulator/controversia-context-panels";
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
      title: `${bundle.shortLabel} — Controversia`,
      description: bundle.label,
    };
  } catch {
    return { title: "Caso no encontrado" };
  }
}

export default async function ControversiaPage({ params }: Props) {
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

  const progress = await assertStepAccessible(session.profile.id, caseKey, "controversia");

  const completed = parsedCompletedStages(progress);
  const stageComplete = completed.includes("controversia");

  const questions = bundle.controversyQuestions.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options,
  }));

  const initialAnswers = answersAsPlainObject(progress.answers);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-xl sm:text-3xl font-bold text-foreground">Controversia aduanera</h1>
        <p className="max-w-3xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          {bundle.isExample ? (
            <>
              Relaciona los hechos documentales del expediente en el formato académico.{" "}
              <span className="text-foreground font-medium">
                Cada opción muestra retroinmediata en este caso ejemplo.
              </span>
            </>
          ) : (
            <>
              Durante el reconocimiento aduanero se detectó una irregularidad. Analiza el riesgo, la
              infracción y la sanción, y responde las preguntas para evaluar tu criterio jurídico.
            </>
          )}
        </p>
      </header>

      <ControversiaContextPanels
        narrative={{
          risk: bundle.case.risk,
          infraction: bundle.case.infraction,
          sanction: bundle.case.sanction,
        }}
      />

      <SimulatorStageQuiz
        caseKey={caseKey}
        questions={questions}
        initialAnswers={initialAnswers}
        stageComplete={stageComplete}
        answerEditSourceStage="controversia"
        markCompleteSlug="controversia"
        heading="Evaluación de la controversia"
        lead={
          bundle.isExample
            ? "Trabaja caso por caso contra la tarjeta de riesgos; recibirás pistas rápidas al elegir."
            : undefined
        }
        completeCta="Cerrar etapa de controversia"
        exampleMode={bundle.isExample}
        exampleQuizSection="controversy"
      />
    </div>
  );
}
