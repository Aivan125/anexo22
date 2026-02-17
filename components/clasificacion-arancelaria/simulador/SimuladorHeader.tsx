"use client";

import {
  Trophy,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  BookOpen,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SimuladorHeaderProps {
  completedSteps: number;
  totalSteps: number;
  isOpen: boolean;
  onToggleOpen: (open: boolean) => void;
  onRestartClick: () => void;
  showSolution: boolean;
  onToggleSolution: () => void;
  children: React.ReactNode;
}

export function SimuladorHeader({
  completedSteps,
  totalSteps,
  isOpen,
  onToggleOpen,
  onRestartClick,
  showSolution,
  onToggleSolution,
  children,
}: SimuladorHeaderProps) {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggleOpen}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 border-b border-border/60">
        <div className="flex items-center gap-3 min-w-0">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 h-9 w-9 focus-visible:ring-2 focus-visible:ring-[var(--turquoise)]/50"
              aria-label={isOpen ? "Colapsar simulador" : "Expandir simulador"}
            >
              {isOpen ? (
                <ChevronUp className="h-4 w-4" aria-hidden />
              ) : (
                <ChevronDown className="h-4 w-4" aria-hidden />
              )}
            </Button>
          </CollapsibleTrigger>
          <div className="flex items-center gap-2 min-w-0">
            <Trophy
              className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500 shrink-0"
              aria-hidden
            />
            <h2 className="text-lg sm:text-xl font-bold truncate">
              Simulador Paso a Paso
            </h2>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 font-mono tabular-nums bg-[var(--turquoise)] hover:bg-[var(--turquoise-hover)] text-white"
          >
            {completedSteps}/{totalSteps} pasos
          </Badge>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onRestartClick}
            className="gap-1.5 min-h-[44px] sm:min-h-0 focus-visible:ring-2 focus-visible:ring-[var(--turquoise)]/50"
            aria-label="Reiniciar simulador"
          >
            <RotateCcw className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            Reiniciar
          </Button>
          <Button
            variant={showSolution ? "secondary" : "default"}
            size="sm"
            onClick={onToggleSolution}
            className={cn(
              "gap-1.5 min-h-[44px] sm:min-h-0",
              !showSolution &&
                "bg-[var(--turquoise)] hover:bg-[var(--turquoise-hover)] text-white border-0 focus-visible:ring-2 focus-visible:ring-[var(--turquoise)]/50",
            )}
          >
            <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
            {showSolution ? "Ocultar solución" : "Ver solución"}
          </Button>
        </div>
      </div>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
}
