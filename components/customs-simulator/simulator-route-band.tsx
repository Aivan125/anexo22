import type { CaseBundle } from "@/lib/data/customs-simulator/schemas";
import { cn } from "@/lib/utils";

export function SimulatorRouteBand({
  mode,
  route,
  resolvedCount,
  totalEvents,
}: {
  mode: CaseBundle["mode"];
  route: CaseBundle["route"];
  resolvedCount: number;
  totalEvents: number;
}) {
  const bgClass =
    mode === "Marítimo"
      ? "from-[#0f172a] via-[#0c4a6e] to-[#155e75]"
      : mode === "Aéreo"
        ? "from-sky-950 via-sky-800 to-blue-950"
        : "from-neutral-950 via-emerald-950 to-neutral-900";

  const k = resolvedCount;

  return (
    <section
      className={cn(
        "relative rounded-xl overflow-hidden mt-8 mb-6 text-[#eaf6ff]",
        "[@media(prefers-reduced-motion:reduce)]:transition-none motion-safe:animate-none",
      )}
      aria-labelledby="route-band-heading"
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-[0.95]",
          bgClass,
        )}
        aria-hidden
      />
      <div className="relative px-6 py-5 sm:px-8 flex flex-col gap-4 border border-white/15 rounded-xl bg-black/25 backdrop-blur-sm">
        <p className="text-xs tracking-[0.2em] uppercase text-white/60">
          Operación en tiempo real
        </p>
        <h2
          id="route-band-heading"
          className="text-xl sm:text-2xl font-semibold"
        >
          {route.from} → {route.to}
        </h2>

        <div className="flex flex-wrap gap-3 justify-between items-end text-sm">
          <p className="text-white/80">
            Trayecto segmentado — eventos decisivos antes del pedimento
          </p>
          <p className="font-mono bg-black/35 px-2 py-1 rounded-md text-white shrink-0">
            Eventos {k}/{Math.max(totalEvents, 1)}
          </p>
        </div>

        <svg
          className={cn(
            "w-full h-10 sm:h-14",
            "[@media(prefers-reduced-motion:reduce)]:motion-safe:animate-none",
          )}
          viewBox={`0 0 ${Math.max(totalEvents * 80, 80)} 32`}
          preserveAspectRatio="none"
          role="img"
          aria-label={`Progreso de eventos ${k} de ${totalEvents}`}
        >
          <title>{`Eventos ${k} de ${totalEvents}`}</title>
          <line
            x1="16"
            y1="24"
            x2={Math.max(totalEvents * 80 - 16, 16)}
            y2="24"
            stroke="currentColor"
            strokeWidth="4"
            className="text-white/30"
          />
          {Array.from({ length: Math.max(totalEvents, 1) }).map((_, i) => {
            const cx = i * 80 + (totalEvents <= 4 ? 30 : 20);
            const done = i < k;
            return (
              <g key={`route-mark-${String(i)}`}>
                <circle
                  cx={cx}
                  cy="24"
                  r={done ? "7" : "5"}
                  className={
                    done
                      ? "fill-teal-400 stroke-teal-200"
                      : "fill-white/20 stroke-white/40"
                  }
                  strokeWidth="2"
                  aria-hidden
                />
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
