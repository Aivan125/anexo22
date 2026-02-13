import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TariffCard } from "@/components/clasificacion-arancelaria/explorador-ligie/tariff-card";
import { BreadcrumbsNav } from "@/components/clasificacion-arancelaria/explorador-ligie/breadcrumbs-nav";
import {
  getHeadingByCode,
  getChapterByCode,
  getSectionByCode,
} from "@/lib/data/clasificacion-arancelaria/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ seccion: string; capitulo: string; partida: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { seccion, capitulo, partida } = await params;
  const heading = getHeadingByCode(seccion, capitulo, partida);

  if (!heading) {
    return {
      title: "Partida no encontrada",
    };
  }

  return {
    title: `Partida ${heading.code} - ${heading.title}`,
    description: heading.title,
  };
}

export default async function PartidaPage({ params }: PageProps) {
  const { seccion, capitulo, partida } = await params;
  const section = getSectionByCode(seccion);
  const chapter = getChapterByCode(seccion, capitulo);
  const heading = getHeadingByCode(seccion, capitulo, partida);

  if (!section || !chapter || !heading) {
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
    {
      label: heading.code,
      href: `/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}`,
    },
  ];

  if (!heading.subheadings || heading.subheadings.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
          <div className="mb-4 sm:mb-6 space-y-4">
            <Button variant="outline" asChild className="gap-2 min-h-[44px]">
              <Link
                href={`/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}`}
              >
                <ChevronLeft className="h-4 w-4" />
                Volver
              </Link>
            </Button>
            <BreadcrumbsNav items={breadcrumbs} />
          </div>
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Esta partida no tiene subpartidas.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        <div className="mb-4 sm:mb-6 space-y-4">
          <Button variant="outline" asChild className="gap-2 min-h-[44px]">
            <Link
              href={`/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}`}
            >
              <ChevronLeft className="h-4 w-4" />
              Volver
            </Link>
          </Button>
          <BreadcrumbsNav items={breadcrumbs} />
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          {heading.subheadings.map((subheading) => (
            <TariffCard
              key={subheading.code}
              code={subheading.code}
              title={subheading.title}
              href={
                subheading.classifications &&
                subheading.classifications.length > 0
                  ? `/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}/${subheading.code}`
                  : undefined
              }
              badges={
                subheading.classifications &&
                subheading.classifications.length > 0
                  ? [`${subheading.classifications.length} fracciones`]
                  : []
              }
              showArrow={
                !!(
                  subheading.classifications &&
                  subheading.classifications.length > 0
                )
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}
