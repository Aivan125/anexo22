import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TariffCard } from "@/components/clasificacion-arancelaria/explorador-ligie/tariff-card";
import { BreadcrumbsNav } from "@/components/clasificacion-arancelaria/explorador-ligie/breadcrumbs-nav";
import {
  getChapterByCode,
  getSectionByCode,
} from "@/lib/data/clasificacion-arancelaria/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ seccion: string; capitulo: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { seccion, capitulo } = await params;
  const chapter = getChapterByCode(seccion, capitulo);

  if (!chapter) {
    return {
      title: "Capítulo no encontrado",
    };
  }

  return {
    title: `Capítulo ${chapter.code} - ${chapter.title}`,
    description: `Partidas del Capítulo ${chapter.code}: ${chapter.title}`,
  };
}

export default async function CapituloPage({ params }: PageProps) {
  const { seccion, capitulo } = await params;
  const section = getSectionByCode(seccion);
  const chapter = getChapterByCode(seccion, capitulo);

  if (!section || !chapter) {
    notFound();
  }

  const breadcrumbs = [
    {
      label: `Sección ${section.code}`,
      href: `/clasificacion-arancelaria/explorador/${section.code}`,
    },
    {
      label: `Capítulo ${chapter.code}`,
      href: `/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        <div className="mb-4 sm:mb-6 space-y-4">
          <Button variant="outline" asChild className="gap-2 min-h-[44px]">
            <Link
              href={`/clasificacion-arancelaria/explorador/${section.code}`}
            >
              <ChevronLeft className="h-4 w-4" />
              Volver
            </Link>
          </Button>
          <BreadcrumbsNav items={breadcrumbs} />
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          {chapter.headings.map((heading) => (
            <TariffCard
              key={heading.code}
              code={heading.code}
              title={heading.title}
              href={
                heading.subheadings && heading.subheadings.length > 0
                  ? `/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}`
                  : undefined
              }
              badges={
                heading.subheadings && heading.subheadings.length > 0
                  ? [`${heading.subheadings.length} subpartidas`]
                  : ["Sin subpartidas"]
              }
              showArrow={
                !!(heading.subheadings && heading.subheadings.length > 0)
              }
              notes={heading.notes}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
