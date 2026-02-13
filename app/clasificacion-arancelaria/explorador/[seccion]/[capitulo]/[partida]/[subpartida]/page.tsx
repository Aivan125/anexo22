import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClassificationDetail } from "@/components/clasificacion-arancelaria/explorador-ligie/classification-detail";
import { BreadcrumbsNav } from "@/components/clasificacion-arancelaria/explorador-ligie/breadcrumbs-nav";
import {
  getSubheadingByCode,
  getHeadingByCode,
  getChapterByCode,
  getSectionByCode,
} from "@/lib/data/clasificacion-arancelaria/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{
    seccion: string;
    capitulo: string;
    partida: string;
    subpartida: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { seccion, capitulo, partida, subpartida } = await params;
  const subheading = getSubheadingByCode(
    seccion,
    capitulo,
    partida,
    subpartida,
  );

  if (!subheading) {
    return {
      title: "Subpartida no encontrada",
    };
  }

  return {
    title: `Subpartida ${subheading.code} - ${subheading.title}`,
    description: subheading.title,
  };
}

export default async function SubpartidaPage({ params }: PageProps) {
  const { seccion, capitulo, partida, subpartida } = await params;
  const section = getSectionByCode(seccion);
  const chapter = getChapterByCode(seccion, capitulo);
  const heading = getHeadingByCode(seccion, capitulo, partida);
  const subheadingData = getSubheadingByCode(
    seccion,
    capitulo,
    partida,
    subpartida,
  );

  if (!section || !chapter || !heading || !subheadingData) {
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
    {
      label: subheadingData.code,
      href: `/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}/${subheadingData.code}`,
    },
  ];

  if (
    !subheadingData.classifications ||
    subheadingData.classifications.length === 0
  ) {
    return (
      <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
          <div className="mb-4 sm:mb-6 space-y-4">
            <Button variant="outline" asChild className="gap-2 min-h-[44px]">
              <Link
                href={`/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}`}
              >
                <ChevronLeft className="h-4 w-4" />
                Volver
              </Link>
            </Button>
            <BreadcrumbsNav items={breadcrumbs} />
          </div>
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Esta subpartida no tiene fracciones.
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
              href={`/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}`}
            >
              <ChevronLeft className="h-4 w-4" />
              Volver
            </Link>
          </Button>
          <BreadcrumbsNav items={breadcrumbs} />
        </div>

        <div className="space-y-4 sm:space-y-6">
          {subheadingData.classifications.map((classification) => (
            <ClassificationDetail
              key={classification.code}
              classification={classification}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
