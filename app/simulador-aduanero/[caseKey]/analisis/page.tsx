import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getUserWithProfile } from "@/lib/helpers-server";
import { isPublishedCaseKey, loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { AnalisisQuiz } from "@/components/customs-simulator/analisis-quiz";
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
      title: `${bundle.shortLabel} — Análisis`,
      description: bundle.label,
    };
  } catch {
    return { title: "Caso no encontrado" };
  }
}

export default async function AnalisisPage({ params }: Props) {
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
    "analisis",
  );

  const completed = parsedCompletedStages(progress);
  const analisisComplete = completed.includes("analisis");

  const stubQuestions = bundle.analysisQuestions.map((q) => ({
    id: q.id,
    text: q.text,
    options: q.options,
  }));

  const initialAnswers = answersAsPlainObject(progress.answers);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-xl sm:text-3xl font-bold text-foreground">
          Análisis del caso
        </h1>
        {bundle.isExample ? (
          <p className="max-w-xl text-sm sm:text-base text-muted-foreground">
            Expediente ejemplo ANMINCADISA/tabletas para practicar análisis.{" "}
            <span className="text-foreground font-medium">
              En este modo demostrativo la interfaz muestra retroalimentación por pregunta.
            </span>
          </p>
        ) : null}
      </header>

      <AnalisisQuiz
        caseKey={caseKey}
        questions={stubQuestions}
        initialAnswers={initialAnswers}
        analisisComplete={analisisComplete}
        exampleMode={bundle.isExample}
      />
    </div>
  );
}
