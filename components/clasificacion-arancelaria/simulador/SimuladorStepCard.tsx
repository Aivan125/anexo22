"use client";

import { Lock, CheckCircle2, XCircle, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { SimuladorStep } from "@/types/clasificacion-arancelaria";
import { cn } from "@/lib/utils";

type StepStatus = "pending" | "correct" | "incorrect" | "solution";

interface SimuladorStepCardProps {
  step: SimuladorStep;
  stepNumber: number;
  totalSteps: number;
  status: StepStatus;
  isLocked: boolean;
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
  onVerify: () => void;
  showSolution: boolean;
}

const statusStyles: Record<
  StepStatus,
  { card: string; icon: string; iconComponent: React.ElementType }
> = {
  pending: {
    card: "border-[var(--turquoise)]/15 bg-[var(--turquoise)]/5",
    icon: "text-[var(--turquoise)]/70",
    iconComponent: Lock,
  },
  correct: {
    card: "border-green-500/50 bg-green-500/5",
    icon: "text-green-600 dark:text-green-400",
    iconComponent: CheckCircle2,
  },
  incorrect: {
    card: "border-destructive/50 bg-destructive/5",
    icon: "text-destructive",
    iconComponent: XCircle,
  },
  solution: {
    card: "border-[var(--turquoise)]/30 bg-[var(--turquoise)]/5",
    icon: "text-[var(--turquoise)]",
    iconComponent: BookOpen,
  },
};

export function SimuladorStepCard({
  step,
  stepNumber,
  totalSteps,
  status,
  isLocked,
  selectedValue,
  onSelect,
  onVerify,
  showSolution,
}: SimuladorStepCardProps) {
  const styles = statusStyles[status];
  const Icon = styles.iconComponent;
  const isDisabled = isLocked && !showSolution;
  const canVerify =
    !isLocked &&
    (status === "pending" || status === "incorrect") &&
    !showSolution;
  const showFeedback = status === "correct" || status === "incorrect";

  return (
    <Card
      className={cn(
        "transition-[color,background-color,border-color] duration-200 motion-reduce:transition-none",
        styles.card,
      )}
    >
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
          <Icon
            className={cn("h-4 w-4 sm:h-5 sm:w-5 shrink-0", styles.icon)}
            aria-hidden
          />
          <span>
            Paso {stepNumber}: {step.titulo}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
        <p className="text-sm sm:text-base text-foreground/90">
          {step.instruccion}
        </p>

        <RadioGroup
          value={selectedValue}
          onValueChange={onSelect}
          disabled={isDisabled}
          className="space-y-3"
          aria-label={`Opciones para paso ${stepNumber}`}
        >
          {step.opciones.map((opcion) => (
            <div
              key={opcion.value}
              className="flex items-center space-x-2 rounded-lg border border-[var(--turquoise)]/15 px-3 py-2 hover:bg-[var(--turquoise)]/10 transition-colors has-[:disabled]:opacity-50 has-[:disabled]:cursor-not-allowed"
            >
              <RadioGroupItem
                value={opcion.value}
                id={`${step.id}-${opcion.value}`}
                className="focus-visible:ring-2 focus-visible:ring-[var(--turquoise)]/50 focus-visible:ring-offset-2"
              />
              <Label
                htmlFor={`${step.id}-${opcion.value}`}
                className="flex-1 cursor-pointer text-sm sm:text-base font-normal"
              >
                {opcion.label}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {canVerify && (
          <Button
            onClick={onVerify}
            disabled={!selectedValue}
            className="min-h-[44px] focus-visible:ring-2 focus-visible:ring-[var(--turquoise)]/50 bg-[var(--turquoise)] text-white hover:bg-[var(--turquoise-hover)]"
          >
            Verificar
          </Button>
        )}

        {showFeedback && (
          <div
            aria-live="polite"
            className={cn(
              "rounded-lg p-3 text-sm sm:text-base",
              status === "correct" &&
                "bg-green-500/10 text-green-700 dark:text-green-400",
              status === "incorrect" && "bg-destructive/10 text-destructive",
            )}
          >
            {status === "correct" ? step.explicacion : step.pista}
          </div>
        )}

        {showSolution && status === "solution" && (
          <div
            aria-live="polite"
            className="rounded-lg p-3 text-sm sm:text-base bg-[var(--turquoise)]/10 text-[var(--turquoise)] dark:text-[var(--turquoise)]"
          >
            <span className="font-medium">Solución: </span>
            {step.opciones.find((o) => o.value === step.correcta)?.label ??
              step.correcta}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
