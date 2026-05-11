import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";
import {
  evaluateBundleValidationRules,
  getSimulatorScoreSectionBreakdown,
} from "@/lib/customs-simulator/simulator-scoring";

/**
 * §6.5: tras Calificar, muestra desglose agregado y alertas de `validationRules`
 * (sin exponer `correctAnswer` por ítem).
 */
export function SimulatorCalibratedSummary({
  bundle,
  answers,
  scorePercent,
}: {
  bundle: CaseBundle;
  answers: Record<string, unknown>;
  scorePercent: number | null;
}) {
  const sections = getSimulatorScoreSectionBreakdown(bundle, answers);
  const alerts = evaluateBundleValidationRules(bundle, answers);

  return (
    <div className="space-y-8">
      <div className="rounded-xl border bg-card px-6 py-6 space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Desglose del puntaje</h2>
        {typeof scorePercent === "number" ? (
          <p className="text-sm text-muted-foreground">
            Resultado global:{" "}
            <span className="font-mono font-semibold text-foreground">{scorePercent}%</span>
          </p>
        ) : null}
        <ul className="space-y-2 text-sm">
          {sections.map((s) => (
            <li
              key={s.id}
              className="flex flex-wrap justify-between gap-2 border-b border-border/60 pb-2 last:border-0"
            >
              <span className="text-foreground">{s.label}</span>
              <span className="font-mono text-muted-foreground tabular-nums">
                {s.earned} / {s.max} pts
              </span>
            </li>
          ))}
        </ul>
      </div>

      {alerts.length > 0 ? (
        <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 dark:bg-amber-950/30 dark:border-amber-800 px-6 py-6 space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Observaciones del caso</h2>
          <ul className="space-y-2 text-sm list-disc pl-5">
            {alerts.map((a, i) => (
              <li key={i} className="text-foreground/90">
                <span className="sr-only">
                  Severidad {a.severity}.{" "}
                </span>
                {a.message}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
