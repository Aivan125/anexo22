import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TariffCard } from "@/components/clasificacion-arancelaria/explorador-ligie/tariff-card";
import { BreadcrumbsNav } from "@/components/clasificacion-arancelaria/explorador-ligie/breadcrumbs-nav";
import { getSectionByCode } from "@/lib/data/clasificacion-arancelaria/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ seccion: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { seccion } = await params;
  const section = getSectionByCode(seccion);

  if (!section) {
    return {
      title: "Sección no encontrada",
    };
  }

  return {
    title: `Sección ${section.code} - ${section.title}`,
    description: `Capítulos de la Sección ${section.code}: ${section.title}`,
  };
}

export default async function SeccionPage({ params }: PageProps) {
  const { seccion } = await params;
  const section = getSectionByCode(seccion);

  if (!section) {
    notFound();
  }

  const breadcrumbs = [
    {
      label: `Sección ${section.code}`,
      href: `/clasificacion-arancelaria/explorador/${section.code}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        <div className="mb-4 sm:mb-6 space-y-4">
          <Button variant="outline" asChild className="gap-2 min-h-[44px]">
            <Link href="/clasificacion-arancelaria/explorador">
              <ChevronLeft className="h-4 w-4" />
              Volver
            </Link>
          </Button>
          <BreadcrumbsNav items={breadcrumbs} />
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          {section.chapters.map((chapter) => (
            <TariffCard
              key={chapter.code}
              code={`Capítulo ${chapter.code}`}
              title={chapter.title}
              href={`/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}`}
              badges={[`${chapter.headings.length} partidas`]}
              notes={chapter.notes}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
