import PedimentoWrapper from "@/components/PedimentoWrapper";
import { getCaseStudyById } from "@/lib/case-studies-server";
import { getUser } from "@/lib/helpers-server";
import prisma from "@/lib/prisma";
import { PedimentoFormValues } from "@/types/pedimento";
import { notFound, redirect } from "next/navigation";

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
    <PedimentoWrapper
      initialMode={isEvaluated ? "reviewing" : "editing"}
      attemptId={attempt.id}
      caseId={caseId}
      initialData={
        attempt?.userAnswers as unknown as PedimentoFormValues | undefined
      }
      caseStudy={caseStudy}
    />
  );
}
