// "use client";
// import { useForm } from "react-hook-form";
// import { Form } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { useCallback, useState } from "react";
// import EncabezadoPedimento from "@/components/pedimento/EncabezadoPedimento";
// import { PedimentoFormValues, pedimentoDefaultValues } from "@/types/pedimento";
// import { useAutosave } from "@/hooks/useAutoSave";
// import { getCaseStudyById } from "@/lib/case-studies-client";
// import { FormModeProvider, EvaluationResult } from "@/context/FormModeContext";
// import { PartidasSection } from "./partidas/PartidasSection";
// import { TransporteSection } from "./pedimento/TransporteSection";
// import { DatosImportadorExportadorSection } from "./importador-exportador/ImportadorExportadorSection";
// import { IncrementablesSection } from "./incrementables/IncrementablesSection";
// import { FechasTasasSection } from "./fechas-tasa-nivel-pedimento/FechasTasasSection";
// import { CuadroLiquidacionSection } from "./cuadro-liquidacion/CuadroLiquidacionSection";
// import { ProveedorCompradorSection } from "./comprador-proveedor-section/ProveedorCompradorSection";
// import { CertificacionesSection } from "./certificaciones/CertificacionesSection";
// import { compareAnswers } from "@/lib/evaluation";

// type PedimentoWrapperProps = {
//   attemptId: string;
//   caseId: string;
//   initialData?: PedimentoFormValues;
// };

// export default function PedimentoWrapper({
//   attemptId,
//   caseId,
//   initialData,
// }: PedimentoWrapperProps) {
//   const [mode, setMode] = useState<"editing" | "reviewing">("editing");
//   const [evaluationResult, setEvaluationResult] =
//     useState<EvaluationResult | null>(null);
//   const [correctAnswers, setCorrectAnswers] =
//     useState<PedimentoFormValues | null>(null);

//   const form = useForm<PedimentoFormValues>({
//     defaultValues: initialData || pedimentoDefaultValues,
//   });

//   const { watch, handleSubmit, reset } = form;

//   const handleSave = useCallback(
//     async (data: PedimentoFormValues) => {
//       console.log("Autoguardando datos...", data);
//       try {
//         await fetch("/api/attempts/save", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             attemptId: attemptId,
//             userAnswers: data,
//           }),
//         });
//         console.log("¡Datos guardados con éxito!");
//       } catch (error) {
//         console.error("Error en el autoguardado:", error);
//       }
//     },
//     [attemptId]
//   );

//   useAutosave({
//     watch,
//     onSave: handleSave,
//   });

//   function onSubmit(values: PedimentoFormValues) {
//     console.log("--- INICIANDO EVALUACIÓN ---");
//     console.log("values", values);
//     // 1. Obtener las respuestas correctas desde el archivo JSON local
//     const caseStudy = getCaseStudyById(caseId);
//     if (!caseStudy) {
//       alert("Error: No se encontró el caso de estudio para evaluar.");
//       return;
//     }
//     const answers = caseStudy.answerKey as PedimentoFormValues;

//     console.log("answers", answers);

//     // 2. Comparar las respuestas usando nuestra función robusta
//     const result = compareAnswers(values, answers);

//     // 3. Actualizar el estado para entrar en modo de revisión
//     setCorrectAnswers(answers);
//     setEvaluationResult(result);
//     setMode("reviewing");
//   }

//   // --- LÓGICA PARA LOS BOTONES POST-EVALUACIÓN ---
//   const handleEditAgain = () => {
//     setMode("editing");
//     setEvaluationResult(null);
//     setCorrectAnswers(null);
//   };

//   const handleResetCase = () => {
//     if (
//       window.confirm(
//         "¿Estás seguro de que quieres reiniciar? Se borrará todo tu progreso para este caso."
//       )
//     ) {
//       // TODO: Llamar a una API/Server Action para borrar el UserAttempt de la DB
//       reset(pedimentoDefaultValues); // Resetea el formulario a su estado vacío
//       handleEditAgain();
//     }
//   };

//   return (
//     <div className="pt-24 max-w-screen-2xl  mx-auto">
//       <FormModeProvider
//         mode={mode}
//         evaluationResult={evaluationResult}
//         correctAnswers={correctAnswers}
//       >
//         <Form {...form}>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
//             {/* --- INICIO DEL NUEVO LAYOUT GRID --- */}
//             <div className="grid grid-cols-12 gap-0">
//               {/* --- Columna Principal (Izquierda) --- */}
//               <div className="col-span-9">
//                 <div className="border-2 border-r-0 border-black flex flex-col">
//                   {/* Agrupamos todas las secciones del encabezado en este div */}
//                   <EncabezadoPedimento />
//                   <TransporteSection />
//                   <DatosImportadorExportadorSection />
//                   <IncrementablesSection />
//                   <FechasTasasSection />
//                   <CuadroLiquidacionSection />
//                 </div>
//               </div>

//               {/* --- Columna Lateral (Derecha) --- */}
//               <div className="col-span-3">
//                 <div className="border-2 border-l-0 border-black h-full">
//                   <CertificacionesSection />
//                 </div>
//               </div>
//             </div>
//             <ProveedorCompradorSection />
//             <PartidasSection />
//             <div className="flex justify-end pt-4 gap-4">
//               {mode === "reviewing" && (
//                 <Button
//                   type="button"
//                   variant="outline"
//                   size="lg"
//                   onClick={handleResetCase}
//                 >
//                   Reiniciar Caso
//                 </Button>
//               )}

//               {mode === "editing" ? (
//                 <Button type="submit" size="lg">
//                   Evaluar Pedimento
//                 </Button>
//               ) : (
//                 <Button type="button" size="lg" onClick={handleEditAgain}>
//                   Seguir Editando
//                 </Button>
//               )}
//             </div>
//           </form>
//         </Form>
//       </FormModeProvider>
//     </div>
//   );
// }
