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
      title: `${bundle.shortLabel} — Pedimento`,
      description: bundle.label,
    };
  } catch {
    return { title: "Caso no encontrado" };
  }
}

export default async function PedimentoPage({ params }: Props) {
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

  const progress = await assertStepAccessible(session.profile.id, caseKey, "pedimento");

  const completed = parsedCompletedStages(progress);
  const stageComplete = completed.includes("pedimento");

  const initialAnswers = answersAsPlainObject(progress.answers);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-xl sm:text-3xl font-bold text-foreground">Pedimento</h1>
        <p className="max-w-xl text-sm sm:text-base text-muted-foreground">
          Captura de datos declarativos. Los valores se validan contra el caso al cerrar etapa (sin
          exponer respuestas esperadas al cliente más allá de la lista de opciones).
        </p>
      </header>

      <SimulatorFormFieldsSection
        caseKey={caseKey}
        fields={bundle.pedimentoFields}
        initialAnswers={initialAnswers}
        stageComplete={stageComplete}
        answerEditSourceStage="pedimento"
        markCompleteSlug="pedimento"
        heading="Campos del pedimento"
        lead="Selecciona o escribe según cada campo. Cada cambio puede invalidar §6.9 las etapas posteriores."
        completeCta="Cerrar etapa de pedimento"
      />
    </div>
  );
}
