import type { Metadata } from "next";
import { HomeContent } from "@/components/clasificacion-arancelaria/shared/home-content";

export const metadata: Metadata = {
  title: "Clasificación Arancelaria",
  description:
    "Explora la LIGIE y aprende clasificación arancelaria con casos prácticos de ANMINCADISA",
};

export default function ClasificacionArancelariaPage() {
  return (
    <>
      <HomeContent />
      <footer className="border-t border-border mt-12 sm:mt-16 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-muted-foreground space-y-2">
          <p className="font-semibold text-foreground">ANMINCADISA</p>
          <p>Simulador de Clasificación Arancelaria</p>
        </div>
      </footer>
    </>
  );
}
