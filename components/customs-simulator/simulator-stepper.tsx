"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX,
  SIMULATOR_STEP_LABELS,
  SIMULATOR_STEP_SLUGS,
  type SimulatorStepSlug,
} from "@/lib/customs-simulator/constants";
import { cn } from "@/lib/utils";
import { Check, Circle, Lock } from "lucide-react";

export function SimulatorStepper({
  caseKey,
  frontierStepsCompleted,
  summaryEvaluatedUnlocked,
}: {
  caseKey: string;
  /** Longitud contigua de etapas completadas (orden §6.4); calificar puede dejar resultado sin `resumen` en URL aún no visitada */
  frontierStepsCompleted: number;
  /** §6.10: `resumen` sólo si hubo Calificar (`evaluatedAt`) y etapa `resultado` en progreso */
  summaryEvaluatedUnlocked: boolean;
}) {
  const pathname = usePathname();

  /** Rutas hasta Fase 5 (inclusive `resultado`/`resumen` con restricciones) */
  const maxClickableIdx = Math.min(
    frontierStepsCompleted,
    LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX,
  );

  function active(slug: SimulatorStepSlug): boolean {
    const expectedSuffix = `/simulador-aduanero/${caseKey}/${slug}`;
    return pathname === expectedSuffix;
  }

  return (
    <nav
      className="w-full overflow-x-auto pb-1"
      aria-label="Etapas del simulador"
    >
      <ol className="flex gap-2 min-w-max items-stretch px-1">
        {SIMULATOR_STEP_SLUGS.map((slug, idx) => {
          const label = SIMULATOR_STEP_LABELS[slug];
          const resumenLocked = slug === "resumen" && !summaryEvaluatedUnlocked;
          const clickable =
            idx <= maxClickableIdx && !resumenLocked;
          const isFutureRoute = idx > LAST_IMPLEMENTED_SIMULATOR_ROUTE_INDEX;
          const done = idx < frontierStepsCompleted;
          const isCurrent = active(slug);
          const href = `/simulador-aduanero/${caseKey}/${slug}`;

          if (clickable && !isFutureRoute) {
            return (
              <li key={slug} className="flex items-center shrink-0">
                <Link
                  href={href}
                  prefetch={false}
                  className={cn(
                    "group flex flex-col rounded-lg px-4 py-2 min-w-[7.5rem] border transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isCurrent
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card hover:bg-muted/50 text-foreground",
                  )}
                >
                  <span className="flex items-center gap-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {done ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
                    ) : isCurrent ? (
                      <Circle className="h-3 w-3 fill-primary/30" aria-hidden />
                    ) : (
                      <Circle className="h-3 w-3 opacity-50" aria-hidden />
                    )}
                    Paso {idx + 1}
                  </span>
                  <span className="text-sm font-medium leading-tight mt-0.5">
                    {label}
                  </span>
                </Link>
              </li>
            );
          }

          return (
            <li key={slug} className="flex items-center shrink-0">
              <span
                aria-disabled="true"
                className={cn(
                  "flex flex-col rounded-lg px-4 py-2 min-w-[7.5rem] border opacity-55",
                  "border-dashed border-border bg-muted/20 text-muted-foreground",
                  isFutureRoute && "cursor-default",
                )}
              >
                <span className="flex items-center gap-1 text-xs uppercase tracking-wide">
                  <Lock className="h-3 w-3" aria-hidden /> Paso {idx + 1}
                </span>
                <span className="text-sm font-medium leading-tight mt-0.5">
                  {label}
                  {isFutureRoute ? (
                    <span className="sr-only"> ({`próximo`})</span>
                  ) : null}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
