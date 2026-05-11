import type { Metadata } from "next";
import { CasePickerGrid } from "@/components/customs-simulator/case-picker-grid";
import { listPublishedCaseSummaries } from "@/lib/data/customs-simulator/load";

export const metadata: Metadata = {
  title: "Simulador aduanero - ANMIN-CADISA",
  description:
    "Practica expedientes aduaneros con casos guiados por modalidad de transporte.",
};

export default function SimuladorAduaneroPage() {
  const cases = listPublishedCaseSummaries();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
        Simulador aduanero
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl">
        Elige un caso práctico para trabajar el expediente, los cuestionarios y
        el cierre del simulador. Cada tarjeta enlaza al expediente del caso.
      </p>
      <CasePickerGrid cases={cases} />
    </div>
  );
}
