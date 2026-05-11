import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PublishedCaseSummary } from "@/lib/data/customs-simulator/load";
import { cn } from "@/lib/utils";

export function CasePickerGrid({ cases }: { cases: PublishedCaseSummary[] }) {
  if (cases.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-12">
        No hay casos publicados en este momento.
      </p>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
      {cases.map((c) => (
        <li key={c.caseKey}>
          <Link
            href={`/simulador-aduanero/${encodeURIComponent(c.caseKey)}/expediente`}
            className={cn(
              "group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition",
              "hover:border-primary/40 hover:shadow-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            )}
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {c.mode}
              </span>
              {c.isExample ? (
                <Badge className="border-amber-500/60 bg-amber-500/15 text-amber-900 dark:text-amber-100">
                  Ejemplo
                </Badge>
              ) : null}
            </div>
            <h2 className="text-lg font-semibold text-foreground group-hover:text-primary">
              {c.shortLabel}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {c.route.from} → {c.route.to}
            </p>
            <p className="mt-2 line-clamp-2 flex-1 text-sm text-foreground/80">
              {c.label}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Abrir expediente
              <ArrowRight
                className="size-4 transition group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
