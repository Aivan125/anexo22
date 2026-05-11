import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";
import { Calendar, DollarSign, MapPin } from "lucide-react";
import { ExpedienteHighlightedNarrative } from "./expediente-highlighted-narrative";
import { cn } from "@/lib/utils";

function SummaryStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 min-w-[10rem]">
      <Icon
        className="h-5 w-5 text-sky-200/85 shrink-0 mt-0.5"
        aria-hidden
      />
      <div>
        <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
          {label}
        </p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

export function ExpedienteHeroPanel({
  bundle,
}: {
  bundle: CaseBundle;
}) {
  const { case: caseInfo } = bundle;
  const paragraphs =
    caseInfo.expedienteNarrativeParagraphs?.length &&
    caseInfo.expedienteNarrativeParagraphs.length > 0
      ? caseInfo.expedienteNarrativeParagraphs
      : [caseInfo.context];

  const accentTerms = caseInfo.expedienteAccentTerms;

  const modeUpper = bundle.mode.toUpperCase();
  const routePill = `${modeUpper} · ${bundle.route.from.toUpperCase()} → ${bundle.route.to.toUpperCase()}`;
  const year = new Date().getFullYear();
  const valorUsd = Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(caseInfo.goods.invoiceValueUsd);

  const bgGradient =
    bundle.mode === "Marítimo"
      ? "from-[#050c18] via-[#0a192f] to-[#092c45]"
      : bundle.mode === "Aéreo"
        ? "from-sky-950 via-[#0a1f44] to-slate-950"
        : "from-neutral-950 via-emerald-950/85 to-neutral-900";

  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/12 shadow-xl",
      )}
      aria-labelledby="expediente-hero-title"
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", bgGradient)} />
      <div
        className="absolute inset-x-8 top-0 h-40 bg-orange-400/14 blur-[64px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="relative px-6 py-8 sm:px-10 sm:py-10 space-y-6">
        <div className="flex flex-wrap items-center gap-2 gap-y-2">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Expediente del caso · {caseInfo.id}
          </p>
          {bundle.isExample ? (
            <span className="inline-flex rounded-full bg-amber-500/25 border border-amber-400/50 px-3 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] text-amber-200">
              Ejemplo demostrativo
            </span>
          ) : null}
          <span className="inline-flex rounded-full bg-white/10 border border-white/15 px-3 py-0.5 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-slate-200">
            {routePill}
          </span>
        </div>

        <div className="space-y-5">
          <h2
            id="expediente-hero-title"
            className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight"
          >
            {caseInfo.title}
          </h2>

          <ExpedienteHighlightedNarrative
            paragraphs={paragraphs}
            accentTerms={accentTerms}
          />
        </div>

        <div
          className="flex flex-col sm:flex-row sm:flex-wrap gap-6 pt-4 border-t border-white/12"
          role="list"
          aria-label="Resumen rápido del expediente"
        >
          <div role="listitem">
            <SummaryStat
              icon={Calendar}
              label="Operación"
              value={`Importación · ${year}`}
            />
          </div>
          <div role="listitem">
            <SummaryStat
              icon={MapPin}
              label="Aduana destino"
              value={caseInfo.terms.customsOffice}
            />
          </div>
          <div role="listitem">
            <SummaryStat
              icon={DollarSign}
              label="Valor comercial"
              value={`${valorUsd} USD`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
