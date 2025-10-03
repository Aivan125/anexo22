// /src/components/pedimento/PedimentoWrapper.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState, useTransition } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { evaluateAttemptAction } from "@/actions/pedimentoActions";
import { EvaluationResult, FormModeProvider } from "@/context/FormModeContext";
import { useAutosave } from "@/hooks/useAutoSave";
import {
  CaseStudy,
  PedimentoFormValues,
  pedimentoDefaultValues,
} from "@/types/pedimento";
import { startNewAttemptAction } from "@/actions/startNewAttemptAction";
import EncabezadoPedimento from "@/components/pedimento/EncabezadoPedimento";
import { TransporteSection } from "@/components/pedimento/TransporteSection";
import { getCaseStudyById } from "@/lib/case-studies-client";
import { compareAnswers } from "@/lib/evaluation";
import { CertificacionesSection } from "./certificaciones/CertificacionesSection";
import { ProveedorCompradorSection } from "./comprador-proveedor-section/ProveedorCompradorSection";
import { CuadroLiquidacionSection } from "./cuadro-liquidacion/CuadroLiquidacionSection";
import { FechasTasasSection } from "./fechas-tasa-nivel-pedimento/FechasTasasSection";
import { DatosImportadorExportadorSection } from "./importador-exportador/ImportadorExportadorSection";
import { IncrementablesSection } from "./incrementables/IncrementablesSection";
import { PartidasSection } from "./partidas/PartidasSection";
import { Card, CardContent } from "./ui/card";
import ReactMarkdown from "react-markdown";
import AduanalSection from "./aduanal/AduanalSection";

type PedimentoWrapperProps = {
  initialMode: "editing" | "reviewing";
  attemptId: string;
  caseId: string;
  initialData?: PedimentoFormValues;
  caseStudy: CaseStudy;
};

export default function PedimentoWrapper({
  initialMode,
  attemptId,
  caseId,
  initialData,
  caseStudy,
}: PedimentoWrapperProps) {
  const [mode, setMode] = useState<"editing" | "reviewing">(initialMode);
  const [evaluationResult, setEvaluationResult] =
    useState<EvaluationResult | null>(null);
  const [correctAnswers, setCorrectAnswers] =
    useState<PedimentoFormValues | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNewAttemptDialogOpen, setIsNewAttemptDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (initialMode === "reviewing" && initialData) {
      const caseStudy = getCaseStudyById(caseId);
      if (caseStudy) {
        const answers = caseStudy.answerKey as PedimentoFormValues;
        const result = compareAnswers(initialData, answers);
        setCorrectAnswers(answers);
        setEvaluationResult(result);
      }
    }
  }, [initialMode, initialData, caseId]);

  const form = useForm<PedimentoFormValues>({
    defaultValues: { ...pedimentoDefaultValues, ...initialData },
  });

  const { watch, handleSubmit } = form;

  const handleSave = useCallback(
    async (data: PedimentoFormValues) => {
      // (Esta función no cambia)
      console.log("Autoguardando datos...", data);
      try {
        await fetch("/api/attempts/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            attemptId: attemptId,
            userAnswers: data,
          }),
        });
      } catch (error) {
        console.error("Error en el autoguardado:", error);
      }
    },
    [attemptId]
  );

  useAutosave({ watch, onSave: handleSave });

  // MODIFICADO: onSubmit ya no evalúa, solo previene el 'Enter'
  const onFormSubmit = () => {
    // Esta función se puede dejar vacía para deshabilitar el submit con 'Enter'.
    // Opcionalmente, podría abrir el diálogo de confirmación.
    console.log("Submit con Enter deshabilitado.");
  };

  // Lógica para confirmar y ejecutar la evaluación
  const handleConfirmEvaluation = () => {
    startTransition(async () => {
      try {
        await handleSave(form.getValues());
        const result = await evaluateAttemptAction(attemptId);
        if (result) {
          setCorrectAnswers(result.correctAnswers as PedimentoFormValues);
          setEvaluationResult(result.evaluationResult);
          setMode("reviewing");
        }
      } catch (error) {
        console.error("Error al evaluar el intento:", error);
        alert("Ocurrió un error al evaluar. Por favor, intenta de nuevo.");
      } finally {
        setIsDialogOpen(false);
      }
    });
  };

  const handleStartNewAttempt = () => {
    startTransition(async () => {
      try {
        await startNewAttemptAction(caseId);
      } catch (error) {
        console.error("Error al iniciar nuevo intento:", error);
        alert(
          "No se pudo iniciar un nuevo intento. Por favor, intenta de nuevo."
        );
      } finally {
        setIsNewAttemptDialogOpen(false);
        window.location.href = `/anexo22/${caseId}`;
      }
    });
  };

  return (
    <div className="">
      <FormModeProvider
        mode={mode}
        evaluationResult={evaluationResult}
        correctAnswers={correctAnswers}
      >
        <Form {...form}>
          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 p-4">
            <h1 className="text-2xl font-bold">Formulario de Anexo 22</h1>
            <h2 className="text-lg font-bold">{caseStudy.title}</h2>
            <p className="text-base text-muted-foreground">
              {caseStudy.description}
            </p>
            <Card className="bg-sky-100/50">
              <CardContent className="pt-6">
                <article className="prose prose-sm max-w-none">
                  <ReactMarkdown>{caseStudy.narrative}</ReactMarkdown>
                </article>
              </CardContent>
            </Card>
            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-9">
                <div className="border-2 border-r-0 border-black flex flex-col">
                  <EncabezadoPedimento />
                  <TransporteSection />
                  <DatosImportadorExportadorSection />
                  <IncrementablesSection />
                  <FechasTasasSection />
                  <CuadroLiquidacionSection />
                </div>
              </div>
              <div className="col-span-3">
                <div className="border-2 border-l-0 border-black h-full">
                  <CertificacionesSection />
                </div>
              </div>
            </div>
            <ProveedorCompradorSection />
            <PartidasSection />
            <AduanalSection />

            {/* MODIFICADO: Lógica de botones actualizada */}
            <div className="flex justify-end pt-4 gap-4">
              {mode === "reviewing" && (
                <Dialog
                  open={isNewAttemptDialogOpen}
                  onOpenChange={setIsNewAttemptDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      disabled={isPending}
                    >
                      {isPending ? "Iniciando..." : "Empezar Nuevo Intento"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>¿Empezar un nuevo intento?</DialogTitle>
                      <DialogDescription>
                        Tu intento actual quedará guardado en tu historial. Se
                        creará un nuevo formulario en blanco.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="ghost" disabled={isPending}>
                          Cancelar
                        </Button>
                      </DialogClose>
                      <Button
                        onClick={handleStartNewAttempt}
                        disabled={isPending}
                      >
                        {isPending ? "Cargando nuevo intento..." : "Continuar"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}

              {mode === "editing" ? (
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button type="button" size="lg" disabled={isPending}>
                      {isPending ? "Evaluando..." : "Evaluar Pedimento"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirmar Evaluación</DialogTitle>
                      <DialogDescription>
                        ¿Deseas continuar con la evaluación?
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="ghost">Cancelar</Button>
                      </DialogClose>
                      <Button
                        onClick={handleConfirmEvaluation}
                        disabled={isPending}
                      >
                        {isPending ? "Confirmando..." : "Confirmar y Evaluar"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button
                  type="button"
                  size="lg"
                  onClick={() => setMode("editing")}
                >
                  Corregir Pedimento
                </Button>
              )}
            </div>
          </form>
        </Form>
      </FormModeProvider>
    </div>
  );
}
