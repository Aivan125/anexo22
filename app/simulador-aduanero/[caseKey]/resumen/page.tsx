import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getUserWithProfile } from "@/lib/helpers-server";
import { isPublishedCaseKey, loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { ResumenCompleteSection } from "@/components/customs-simulator/resumen-complete-section";
import { SimulatorCalibratedSummary } from "@/components/customs-simulator/simulator-calibrated-summary";
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
      title: `${bundle.shortLabel} — Resumen`,
      description: bundle.label,
    };
  } catch {
    return { title: "Caso no encontrado" };
  }
}

export default async function ResumenPage({ params }: Props) {
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

  const progress = await assertStepAccessible(session.profile.id, caseKey, "resumen");

  const alumnoNombre =
    session.profile.name?.trim() || session.profile.email || "Alumno";

  const completed = parsedCompletedStages(progress);
  const resumenMarkedComplete = completed.includes("resumen");
  const answers = answersAsPlainObject(progress.answers);

  return (
    <div className="space-y-10">
      <header className="space-y-5">
        <h1 className="text-xl sm:text-3xl font-bold text-foreground">Resumen</h1>
        <div className="max-w-xl rounded-xl border-2 border-primary/25 bg-primary/5 px-5 py-4 sm:px-6 sm:py-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Nombre del alumno
          </p>
          <p className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            {alumnoNombre}
          </p>
        </div>
      </header>

      <div className="rounded-xl border bg-card px-6 py-6 space-y-3 text-sm text-muted-foreground">
        <p>
          Importador: <span className="text-foreground">{bundle.case.importer.name}</span> ({bundle.case.importer.rfc}).
        </p>
        <p>
          Régimen / contexto esperado por el caso:{" "}
          <span className="text-foreground">{bundle.case.terms.regimeExpected}</span>.
        </p>
        <p className="pt-2 text-xs leading-relaxed">
          Respuestas capturadas:{" "}
          <span className="font-mono text-foreground">{Object.keys(answers).length}</span> claves en{" "}
          <span className="font-mono">answers</span>.
        </p>
      </div>

      <SimulatorCalibratedSummary
        bundle={bundle}
        answers={answers}
        scorePercent={
          typeof progress.scorePercent === "number" &&
          Number.isFinite(progress.scorePercent)
            ? Math.round(progress.scorePercent)
            : null
        }
      />

      <ResumenCompleteSection
        caseKey={caseKey}
        resumenMarkedComplete={resumenMarkedComplete}
        scorePercent={
          typeof progress.scorePercent === "number" &&
          Number.isFinite(progress.scorePercent)
            ? Math.round(progress.scorePercent)
            : null
        }
      />
    </div>
  );
}
