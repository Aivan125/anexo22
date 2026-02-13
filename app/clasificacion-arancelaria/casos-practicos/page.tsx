import type { Metadata } from "next";
import { CasoCard } from "@/components/clasificacion-arancelaria/casos-practicos/caso-card";
import { getAllCasos } from "@/lib/data/clasificacion-arancelaria/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos Prácticos",
  description:
    "Aprende a clasificar productos con casos reales de empresas mexicanas",
};

export default async function CasosPracticosPage() {
  const casos = getAllCasos();

  return (
    <div className="min-h-screen bg-background">
      <header
        className="border-b border-border/50 shadow-md"
        style={{
          background:
            "linear-gradient(to right, rgb(0, 92, 116), rgb(0, 162, 148))",
        }}
      >
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <Button
              asChild
              variant="ghost"
              className="gap-2 mb-6 text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10 min-h-[44px]"
            >
              <Link href="/clasificacion-arancelaria">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-primary-foreground/20">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground" />
                <span className="text-xs sm:text-sm font-medium text-primary-foreground">
                  ANMINCADISA
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground tracking-tight">
                Casos Prácticos
              </h1>
              <p className="text-base sm:text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Aprende a clasificar productos con casos reales de empresas
                mexicanas
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {casos.map((caso) => (
            <CasoCard key={caso.id} caso={caso} />
          ))}
        </div>
      </main>
    </div>
  );
}
