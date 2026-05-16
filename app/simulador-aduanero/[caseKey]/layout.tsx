import Link from "next/link";
import { redirect } from "next/navigation";
import { getUserWithProfile } from "@/lib/helpers-server";
import { isPublishedCaseKey, loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { ExpedienteProgressSmoke } from "@/components/customs-simulator/expediente-progress-smoke";
import { SimulatorRestartControls } from "@/components/customs-simulator/simulator-restart-controls";
import { SimulatorStepper } from "@/components/customs-simulator/simulator-stepper";
import {
  deleteSimulatorProgressIfExists,
  getOrCreateProgress,
  parsedCompletedStages,
  progressSnapshot,
} from "@/lib/customs-simulator/progress";

type Props = {
  children: React.ReactNode;
  params: Promise<{ caseKey: string }>;
};

export default async function CaseSimulatorLayout({
  children,
  params,
}: Props) {
  const { caseKey } = await params;

  const session = await getUserWithProfile();
  if (!session) {
    redirect("/login");
  }

  if (!isPublishedCaseKey(caseKey)) {
    await deleteSimulatorProgressIfExists(session.profile.id, caseKey);
    redirect("/simulador-aduanero");
  }

  let bundle;
  try {
    bundle = loadCaseBundle(caseKey);
  } catch {
    await deleteSimulatorProgressIfExists(session.profile.id, caseKey);
    redirect("/simulador-aduanero");
  }

  const progress = await getOrCreateProgress(session.profile.id, caseKey);
  const frontierLength = parsedCompletedStages(progress).length;
  const completedStages = parsedCompletedStages(progress);
  const summaryGate =
    progress.evaluatedAt != null && completedStages.includes("resultado");
  const snapshot = progressSnapshot(progress);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-muted/30">
        <div className="max-w-4xl xl:max-w-[65rem] mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-5">
          <nav className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
            <Link
              href="/simulador-aduanero"
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Simulador aduanero
            </Link>
            <span className="text-muted-foreground" aria-hidden>
              /
            </span>
            <span className="text-foreground font-medium truncate max-w-[52ch]">
              {bundle.shortLabel}
            </span>
          </nav>
          {bundle.isExample ? (
            <div
              role="note"
              className="rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground leading-relaxed"
            >
              <span className="font-semibold text-primary">Modo demostración.</span> Verás si cada respuesta coincide con el criterio del caso al momento de seleccionar o al salir de cada campo de captura. En los demás casos la calificación completa aparece sólo al final.
            </div>
          ) : null}
          <SimulatorStepper
            caseKey={caseKey}
            frontierStepsCompleted={frontierLength}
            summaryEvaluatedUnlocked={summaryGate}
          />
        </div>
      </header>

      <div className="max-w-4xl xl:max-w-[65rem] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        {children}

        <SimulatorRestartControls
          caseKey={caseKey}
          hasEvaluation={snapshot.hasEvaluation}
        />

        {process.env.NODE_ENV === "development" ? (
          <div className="mt-12 rounded-xl border border-dashed border-border bg-muted/30 p-5">
            <ExpedienteProgressSmoke caseKey={caseKey} snapshot={snapshot} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
