// /src/context/FormModeContext.tsx
"use client";

import { createContext, useContext, ReactNode } from "react";
import { PedimentoFormValues } from "@/types/pedimento";

// Define la forma de los resultados de la evaluación.
// Será un objeto con la misma estructura que el formulario, pero con valores booleanos.
export type EvaluationResult = {
  [K in keyof PedimentoFormValues]?: boolean | undefined;
};

// Define la forma de los datos que nuestro contexto proveerá.
interface FormModeContextType {
  mode: "editing" | "reviewing";
  evaluationResult: EvaluationResult | null;
  correctAnswers: PedimentoFormValues | null;
}

// Crea el contexto con valores por defecto.
const FormModeContext = createContext<FormModeContextType>({
  mode: "editing",
  evaluationResult: null,
  correctAnswers: null,
});

// Crea un Provider personalizado para envolver nuestro formulario.
export const FormModeProvider = ({
  children,
  mode,
  evaluationResult,
  correctAnswers,
}: {
  children: ReactNode;
  mode: "editing" | "reviewing";
  evaluationResult: EvaluationResult | null;
  correctAnswers: PedimentoFormValues | null;
}) => {
  return (
    <FormModeContext.Provider
      value={{ mode, evaluationResult, correctAnswers }}
    >
      {children}
    </FormModeContext.Provider>
  );
};

// Crea un hook personalizado para consumir el contexto fácilmente.
export const useFormMode = () => {
  const context = useContext(FormModeContext);
  if (context === undefined) {
    throw new Error("useFormMode must be used within a FormModeProvider");
  }
  return context;
};
