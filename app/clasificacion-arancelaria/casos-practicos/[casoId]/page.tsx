import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasoDetail } from "@/components/clasificacion-arancelaria/casos-practicos/caso-detail";
import { getCasoById } from "@/lib/data/clasificacion-arancelaria/helpers";

interface PageProps {
  params: Promise<{ casoId: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { casoId } = await params;
  const caso = getCasoById(casoId);

  if (!caso) {
    return {
      title: "Caso práctico no encontrado",
    };
  }

  return {
    title: `${caso.titulo} - Caso Práctico`,
    description: caso.contexto_empresarial.substring(0, 160),
  };
}

export default async function CasoDetailPage({ params }: PageProps) {
  const { casoId } = await params;
  const caso = getCasoById(casoId);

  if (!caso) {
    notFound();
  }

  return <CasoDetail caso={caso} />;
}
