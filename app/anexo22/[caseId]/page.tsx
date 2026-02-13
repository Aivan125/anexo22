import PedimentoWrapper from "@/components/PedimentoWrapper";
import { getCaseStudyById } from "@/lib/case-studies-server";
import { getUser } from "@/lib/helpers-server";
import prisma from "@/lib/prisma";
import { PedimentoFormValues } from "@/types/pedimento";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    caseId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { caseId } = (await params) || "case-1";

  // todo: implementar la lógica para que se pueda acceder a los casos de estudio
  if (caseId !== "case-1" && caseId !== "case-2" && caseId !== "case-3") {
    notFound();
  }

  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  const caseStudy = await getCaseStudyById(caseId);
  if (!caseStudy) {
    return <div>Caso de estudio no encontrado.</div>;
  }

  // 1. Intenta encontrar un intento en borrador (no evaluado)
  let attempt = await prisma.userAttempt.findFirst({
    where: {
      profileId: user.id,
      caseStudyId: caseId,
      evaluatedAt: null,
    },
    orderBy: { createdAt: "desc" },
  });

  // 2. Si no hay borrador, intenta encontrar el último intento evaluado
  if (!attempt) {
    attempt = await prisma.userAttempt.findFirst({
      where: {
        profileId: user.id,
        caseStudyId: caseId,
        evaluatedAt: { not: null }, // Busca uno que SÍ esté evaluado
      },
      orderBy: { evaluatedAt: "desc" }, // Coge el evaluado más reciente
    });
  }

  // 3. Si AÚN no hay ningún intento (ni borrador ni evaluado), crea uno nuevo.
  if (!attempt) {
    attempt = await prisma.userAttempt.create({
      data: {
        profileId: user.id,
        caseStudyId: caseId,
        userAnswers: {}, // Inicia vacío
      },
    });
  }

  console.log(attempt);

  const isEvaluated = !!attempt.evaluatedAt;

  return (
    <div className="pt-24 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl pb-4 font-semibold text-right ">
        Bienvenido,{" "}
        <span className="font-bold text-blue-700">{user.email}</span>
      </h2>
      <div className="flex justify-start pb-8 ps-4">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="group border-primary/30 bg-white/80 hover:bg-primary/5 hover:border-primary/50 hover:shadow-lg transition-[box-shadow,background-color,border-color] duration-300 rounded-xl px-5 py-3 font-medium"
        >
          <Link href="/anexo22">
            Ver Más Casos
            <ArrowRight
              aria-hidden="true"
              className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </Link>
        </Button>
      </div>
      <PedimentoWrapper
        initialMode={isEvaluated ? "reviewing" : "editing"}
        attemptId={attempt.id}
        caseId={caseId}
        initialData={
          attempt?.userAnswers as unknown as PedimentoFormValues | undefined
        }
        caseStudy={caseStudy}
      />
    </div>
  );
}
