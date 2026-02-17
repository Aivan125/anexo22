"use client";

import { useState, useCallback } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { SimuladorHeader } from "./SimuladorHeader";
import { SimuladorStepCard } from "./SimuladorStepCard";
import type { CasoPractico } from "@/types/clasificacion-arancelaria";
import type { SimuladorCaso } from "@/types/clasificacion-arancelaria";

type StepStatus = "pending" | "correct" | "incorrect" | "solution";

interface SimuladorClasificacionProps {
  caso: CasoPractico;
  simulador: SimuladorCaso;
  showSolution?: boolean;
  onShowSolutionChange?: (show: boolean) => void;
}

export function SimuladorClasificacion({
  caso,
  simulador,
  showSolution: controlledShowSolution,
  onShowSolutionChange,
}: SimuladorClasificacionProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [stepStatus, setStepStatus] = useState<Record<string, StepStatus>>({});
  const [isOpen, setIsOpen] = useState(true);
  const [internalShowSolution, setInternalShowSolution] = useState(false);
  const [showRestartDialog, setShowRestartDialog] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  const isControlled = controlledShowSolution !== undefined;
  const actualShowSolution = isControlled
    ? controlledShowSolution
    : internalShowSolution;

  const handleToggleSolution = useCallback(() => {
    const next = !actualShowSolution;
    if (isControlled && onShowSolutionChange) {
      onShowSolutionChange(next);
    } else {
      setInternalShowSolution(next);
    }
  }, [actualShowSolution, isControlled, onShowSolutionChange]);

  const totalSteps = simulador.pasos.length;

  const completedSteps = simulador.pasos.filter(
    (_, i) => stepStatus[simulador.pasos[i].id] === "correct",
  ).length;

  const handleVerify = useCallback(
    (stepId: string, selectedValue: string) => {
      const step = simulador.pasos.find((p) => p.id === stepId);
      if (!step) return;

      const isCorrect = selectedValue === step.correcta;

      setStepStatus((prev) => ({
        ...prev,
        [stepId]: isCorrect ? "correct" : "incorrect",
      }));

      if (isCorrect) {
        const stepIndex = simulador.pasos.findIndex((p) => p.id === stepId);
        if (stepIndex < totalSteps - 1) {
          setCurrentStep(stepIndex + 2);
        }
      }
    },
    [simulador.pasos, totalSteps],
  );

  const handleRestart = useCallback(() => {
    setCurrentStep(1);
    setAnswers({});
    setStepStatus({});
    setRestartKey((k) => k + 1);
  }, []);

  const getStepStatus = useCallback(
    (stepId: string, stepIndex: number): StepStatus => {
      if (actualShowSolution) return "solution";
      const status = stepStatus[stepId];
      if (status) return status;
      return "pending";
    },
    [actualShowSolution, stepStatus],
  );

  const isStepLocked = useCallback(
    (stepIndex: number): boolean => {
      if (actualShowSolution) return false;
      for (let i = 0; i < stepIndex; i++) {
        const step = simulador.pasos[i];
        if (stepStatus[step.id] !== "correct") return true;
      }
      return false;
    },
    [actualShowSolution, simulador.pasos, stepStatus],
  );

  return (
    <div className="rounded-xl border border-[var(--turquoise)]/20 bg-card shadow-sm overflow-hidden">
      <SimuladorHeader
        completedSteps={actualShowSolution ? totalSteps : completedSteps}
        totalSteps={totalSteps}
        isOpen={isOpen}
        onToggleOpen={setIsOpen}
        onRestartClick={() => setShowRestartDialog(true)}
        showSolution={actualShowSolution}
        onToggleSolution={handleToggleSolution}
      >
        <div className="p-4 sm:p-6 space-y-4">
          {simulador.pasos.map((step, index) => (
            <SimuladorStepCard
              key={`${step.id}-${restartKey}`}
              step={step}
              stepNumber={index + 1}
              totalSteps={totalSteps}
              status={getStepStatus(step.id, index)}
              isLocked={isStepLocked(index)}
              selectedValue={answers[step.id]}
              onSelect={(value) =>
                setAnswers((prev) => ({ ...prev, [step.id]: value }))
              }
              onVerify={() => {
                const value = answers[step.id];
                if (value) handleVerify(step.id, value);
              }}
              showSolution={actualShowSolution}
            />
          ))}
        </div>
      </SimuladorHeader>

      <AlertDialog open={showRestartDialog} onOpenChange={setShowRestartDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Reiniciar simulador?</AlertDialogTitle>
            <AlertDialogDescription>
              Se borrarán todas las respuestas y el progreso. Tendrás que volver
              a responder desde el paso 1.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                handleRestart();
                setShowRestartDialog(false);
              }}
              className="bg-[var(--turquoise)] hover:bg-[var(--turquoise-hover)] text-white border-0"
            >
              Reiniciar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
