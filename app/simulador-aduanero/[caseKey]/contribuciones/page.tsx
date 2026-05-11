import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getUserWithProfile } from "@/lib/helpers-server";
import { isPublishedCaseKey, loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { SimulatorFormFieldsSection } from "@/components/customs-simulator/simulator-form-fields";
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
      title: `${bundle.shortLabel} — Contribuciones`,
      description: bundle.label,
    };
  } catch {
    return { title: "Caso no encontrado" };
  }
}

export default async function ContribucionesPage({ params }: Props) {
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
    "contribuciones",
  );

  const completed = parsedCompletedStages(progress);
  const stageComplete = completed.includes("contribuciones");

  const initialAnswers = answersAsPlainObject(progress.answers);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-xl sm:text-3xl font-bold text-foreground">Contribuciones</h1>
        <p className="max-w-xl text-sm sm:text-base text-muted-foreground">
          IGI, DTA, IVA y demás según el bundle del caso. El servidor verifica coherencia al cerrar.
        </p>
      </header>

      <SimulatorFormFieldsSection
        caseKey={caseKey}
        fields={bundle.taxFields}
        initialAnswers={initialAnswers}
        stageComplete={stageComplete}
        answerEditSourceStage="contribuciones"
        markCompleteSlug="contribuciones"
        heading="Contribuciones"
        lead="Completa los importes o selecciones indicadas. Las fórmulas del caso son orientativas."
        completeCta="Cerrar etapa de contribuciones"
      />
    </div>
  );
}
