import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClassificationDetail } from "@/components/clasificacion-arancelaria/explorador-ligie/classification-detail";
import { BreadcrumbsNav } from "@/components/clasificacion-arancelaria/explorador-ligie/breadcrumbs-nav";
import {
  getClassificationByCode,
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
    fraccion: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { seccion, capitulo, partida, subpartida, fraccion } = await params;
  const classification = getClassificationByCode(
    seccion,
    capitulo,
    partida,
    subpartida,
    fraccion,
  );

  if (!classification) {
    return {
      title: "Fracción no encontrada",
    };
  }

  return {
    title: `Fracción ${classification.code} - ${classification.title}`,
    description: classification.title,
  };
}

export default async function FraccionPage({ params }: PageProps) {
  const { seccion, capitulo, partida, subpartida, fraccion } = await params;
  const section = getSectionByCode(seccion);
  const chapter = getChapterByCode(seccion, capitulo);
  const heading = getHeadingByCode(seccion, capitulo, partida);
  const subheading = getSubheadingByCode(
    seccion,
    capitulo,
    partida,
    subpartida,
  );
  const classification = getClassificationByCode(
    seccion,
    capitulo,
    partida,
    subpartida,
    fraccion,
  );

  if (!section || !chapter || !heading || !subheading || !classification) {
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
      label: subheading.code,
      href: `/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}/${subheading.code}`,
    },
    {
      label: classification.code,
      href: `/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}/${subheading.code}/${classification.code}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        <div className="mb-4 sm:mb-6 space-y-4">
          <Button variant="outline" asChild className="gap-2 min-h-[44px]">
            <Link
              href={`/clasificacion-arancelaria/explorador/${section.code}/${chapter.code}/${heading.code}/${subheading.code}`}
            >
              <ChevronLeft className="h-4 w-4" />
              Volver
            </Link>
          </Button>
          <BreadcrumbsNav items={breadcrumbs} />
        </div>

        <ClassificationDetail classification={classification} />
      </main>
    </div>
  );
}
