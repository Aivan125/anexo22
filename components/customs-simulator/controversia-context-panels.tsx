import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";
import { AlertTriangle, Gavel, ShieldAlert } from "lucide-react";

type NarrativePick = Pick<CaseBundle["case"], "risk" | "infraction" | "sanction">;

/**
 * Narrativa jurídica del caso antes del cuestionario (paridad con pantalla controversia del prototipo).
 */
export function ControversiaContextPanels({ narrative }: { narrative: NarrativePick }) {
  const { risk, infraction, sanction } = narrative;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <article
          className="rounded-xl border border-rose-200/90 bg-rose-50/50 dark:bg-rose-950/20 dark:border-rose-800/60 px-4 py-4 shadow-sm flex flex-col gap-3"
          aria-labelledby="controversia-riesgo"
        >
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300">
            <AlertTriangle className="h-5 w-5 shrink-0" aria-hidden />
            <h2 id="controversia-riesgo" className="text-xs font-semibold uppercase tracking-wide">
              Contexto del riesgo
            </h2>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">{risk.description}</p>
          {risk.impact ? (
            <p className="text-xs text-muted-foreground leading-snug border-t border-rose-200/60 dark:border-rose-800/50 pt-2">
              <span className="font-medium text-foreground/80">Impacto:</span> {risk.impact}
            </p>
          ) : null}
        </article>

        <article
          className="rounded-xl border border-amber-200/90 bg-amber-50/50 dark:bg-amber-950/25 dark:border-amber-800/60 px-4 py-4 shadow-sm flex flex-col gap-3"
          aria-labelledby="controversia-infraccion"
        >
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
            <ShieldAlert className="h-5 w-5 shrink-0" aria-hidden />
            <h2 id="controversia-infraccion" className="text-xs font-semibold uppercase tracking-wide">
              Contexto de la infracción
            </h2>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">{infraction.description}</p>
          <p className="text-xs text-muted-foreground border-t border-amber-200/60 dark:border-amber-800/50 pt-2">
            <span className="font-medium text-foreground/80">{infraction.legalBasis}</span>
            {infraction.detectedBy ? (
              <>
                <br />
                <span className="mt-1 inline-block">{infraction.detectedBy}</span>
              </>
            ) : null}
          </p>
        </article>

        <article
          className="rounded-xl border border-sky-200/90 bg-sky-50/40 dark:bg-sky-950/20 dark:border-sky-800/60 px-4 py-4 shadow-sm flex flex-col gap-3"
          aria-labelledby="controversia-sancion"
        >
          <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300">
            <Gavel className="h-5 w-5 shrink-0" aria-hidden />
            <h2 id="controversia-sancion" className="text-xs font-semibold uppercase tracking-wide">
              Contexto de la sanción
            </h2>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            La autoridad aduanera puede imponer consecuencias económicas y administrativas al
            importador derivadas de la irregularidad detectada durante el despacho. Analiza qué tipo
            de sanción corresponde conforme a la Ley Aduanera.
          </p>
          <ul className="text-sm text-foreground/90 space-y-1.5 list-disc pl-5">
            <li>
              <span className="font-medium">Base:</span> {sanction.legalBasis}
            </li>
            <li>{sanction.fineRange}</li>
            <li>{sanction.estimatedFine}</li>
          </ul>
          {sanction.additional.length > 0 ? (
            <ul className="text-xs text-muted-foreground space-y-1 border-t border-sky-200/60 dark:border-sky-800/50 pt-2">
              {sanction.additional.map((line, i) => (
                <li key={i}>• {line}</li>
              ))}
            </ul>
          ) : null}
        </article>
      </div>
    </div>
  );
}
