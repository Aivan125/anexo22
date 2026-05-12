import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getUserWithProfile } from "@/lib/helpers-server";
import { isPublishedCaseKey, loadCaseBundle } from "@/lib/data/customs-simulator/load";
import { SimulatorCalibratedSummary } from "@/components/customs-simulator/simulator-calibrated-summary";
import { FinalizeResultButton } from "@/components/customs-simulator/finalize-result-button";
import { answersAsPlainObject } from "@/lib/customs-simulator/progress";
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
      title: `${bundle.shortLabel} — Resultado`,
      description: bundle.label,
    };
  } catch {
    return { title: "Caso no encontrado" };
  }
}

export default async function ResultadoPage({ params }: Props) {
  const { caseKey } = await params;

  if (!isPublishedCaseKey(caseKey)) {
    notFound();
  }

  try {
    loadCaseBundle(caseKey);
  } catch {
    notFound();
  }

  const session = await getUserWithProfile();
  if (!session) {
    redirect("/login");
  }

  const progress = await assertStepAccessible(session.profile.id, caseKey, "resultado");

  const alumnoNombre =
    session.profile.name?.trim() || session.profile.email || "Alumno";

  const calibrated = progress.evaluatedAt != null;
  const bundle = loadCaseBundle(caseKey);
  const answersPlain = answersAsPlainObject(progress.answers);

  return (
    <div className="space-y-10">
      <header className="space-y-5">
        <h1 className="text-xl sm:text-3xl font-bold text-foreground">Resultado</h1>
        <div className="max-w-xl rounded-xl border-2 border-primary/25 bg-primary/5 px-5 py-4 sm:px-6 sm:py-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Nombre del alumno
          </p>
          <p className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-foreground leading-tight">
            {alumnoNombre}
          </p>
        </div>
        <p className="max-w-xl text-sm sm:text-base text-muted-foreground">
          Calificación agregada del intento contra el caso (preguntas, pedimento y contribuciones).
          Tras confirmar podrás abrir{" "}
          <span className="font-medium text-foreground">Resumen</span>. Si editas etapas anteriores
          (§6.9), deberás volver a cerrarlas y a calificar.
        </p>
      </header>

      {calibrated ? (
        <div className="space-y-8">
          <div className="rounded-xl border bg-card px-6 py-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Este intento ya fue calificado. Puntuación global:{" "}
              <span className="font-mono font-semibold text-foreground">
                {progress.scorePercent != null ? `${progress.scorePercent}%` : "—"}
              </span>
              . Puedes abrir el cierre pedagógico en{" "}
              <Link
                href={`/simulador-aduanero/${caseKey}/resumen`}
                className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                Resumen
              </Link>
              .
            </p>
          </div>
          <SimulatorCalibratedSummary
            bundle={bundle}
            answers={answersPlain}
            scorePercent={
              typeof progress.scorePercent === "number" &&
              Number.isFinite(progress.scorePercent)
                ? progress.scorePercent
                : null
            }
          />
        </div>
      ) : (
        <div className="rounded-xl border bg-muted/30 px-6 py-6 space-y-4 max-w-xl">
          <p className="text-sm text-foreground leading-relaxed">
            Al pulsar <strong className="font-semibold">Calificar intento</strong> el servidor
            aplicará las reglas del caso sobre tus respuestas acumuladas, registrará el porcentaje y
            te llevará al resumen.
          </p>
          <FinalizeResultButton caseKey={caseKey} />
        </div>
      )}
    </div>
  );
}
