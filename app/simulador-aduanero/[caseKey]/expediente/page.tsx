import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getUserWithProfile } from "@/lib/helpers-server";
import {
  isPublishedCaseKey,
  journeyExpedienteEventsForClient,
  loadCaseBundle,
  loadCaseJourney,
} from "@/lib/data/customs-simulator/load";
import { ExpedienteCompleteBar } from "@/components/customs-simulator/expediente-complete-bar";
import { ExpedienteDocumentGrid } from "@/components/customs-simulator/expediente-document-grid";
import { ExpedienteHeroPanel } from "@/components/customs-simulator/expediente-hero-panel";
import { JourneyExpedientePanel } from "@/components/customs-simulator/journey-expediente-panel";
import { SimulatorRouteBand } from "@/components/customs-simulator/simulator-route-band";
import {
  journeyResolvedAsArray,
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
      title: `${bundle.shortLabel} — Expediente`,
      description: bundle.label,
    };
  } catch {
    return { title: "Caso no encontrado" };
  }
}

export default async function ExpedientePage({ params }: Props) {
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
    "expediente",
  );

  const journeyFull = loadCaseJourney(caseKey);
  const eventsPublic = journeyExpedienteEventsForClient(journeyFull.expediente);
  const resolvedIds = journeyResolvedAsArray(progress.journeyResolved);
  const resolvedInExpedienteCount = resolvedIds.filter((id) =>
    eventsPublic.some((e) => e.id === id),
  ).length;

  const completed = parsedCompletedStages(progress);
  const expedienteMarkedComplete = completed.includes("expediente");

  const allEventsResolved =
    eventsPublic.length > 0 &&
    eventsPublic.every((e) => resolvedIds.includes(e.id));

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-xl sm:text-3xl font-bold text-foreground">
          Expediente del caso
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
          Revisa el relato completo del expediente y las fichas que desglosan
          importador, proveedor, mercancía y tributos; luego resuelve los
          eventos del journey antes del pedimento. La siguiente etapa disponible
          es Análisis.
        </p>
      </header>

      <ExpedienteHeroPanel bundle={bundle} />

      <ExpedienteDocumentGrid caseInfo={bundle.case} />

      <SimulatorRouteBand
        mode={bundle.mode}
        route={bundle.route}
        resolvedCount={resolvedInExpedienteCount}
        totalEvents={eventsPublic.length}
      />

      <JourneyExpedientePanel caseKey={caseKey} events={eventsPublic} resolvedIds={resolvedIds} />

      <ExpedienteCompleteBar
        caseKey={caseKey}
        allEventsResolved={allEventsResolved}
        expedienteMarkedComplete={expedienteMarkedComplete}
      />

      {!expedienteMarkedComplete ? (
        <p className="text-sm text-muted-foreground max-w-2xl">
          Al cerrar expediente desde el servidor se navega automáticamente al
          análisis; el paso a paso permite repasar lo ya alcanzable.
        </p>
      ) : (
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Etapa Expediente completada. Continúa con la etapa{" "}
          <span className="font-medium text-foreground">Análisis</span> desde el paso superior.
        </p>
      )}
    </div>
  );
}
