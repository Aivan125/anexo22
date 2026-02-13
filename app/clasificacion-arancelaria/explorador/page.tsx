import type { Metadata } from "next";
import { TariffCard } from "@/components/clasificacion-arancelaria/explorador-ligie/tariff-card";
import { getAllSections } from "@/lib/data/clasificacion-arancelaria/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Explorador LIGIE",
  description:
    "Navega por las secciones de la Ley de los Impuestos Generales de Importación y Exportación",
};

export default async function ExploradorPage() {
  const sections = getAllSections();

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        <div className="mb-4 sm:mb-6">
          <Button variant="outline" asChild className="gap-2 min-h-[44px]">
            <Link href="/clasificacion-arancelaria">
              <ChevronLeft className="h-4 w-4" />
              Volver
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          {sections.map((section) => (
            <TariffCard
              key={section.code}
              code={`Sección ${section.code}`}
              title={section.title}
              href={`/clasificacion-arancelaria/explorador/${section.code}`}
              badges={[`${section.chapters.length} capítulos`]}
              notes={section.notes}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
