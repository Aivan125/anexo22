// /src/app/actions/pedimentoActions.ts
"use server"; // ¡Muy importante! Define este archivo como un módulo de Server Actions.

import prisma from "@/lib/prisma";
import { getCaseStudyById } from "@/lib/case-studies-server";
import { compareAnswers } from "@/lib/evaluation";
import { getUserWithProfile } from "@/lib/helpers-server";
import { PedimentoFormValues } from "@/types/pedimento";

export async function evaluateAttemptAction(attemptId: string) {
  const result = await getUserWithProfile();

  if (!result) {
    throw new Error("No autorizado");
  }

  const { user } = result;

  // 1. Obtener el intento de la base de datos para asegurar que los datos son correctos
  const attempt = await prisma.userAttempt.findUnique({
    where: {
      id: attemptId,
      profileId: user.id, // Seguridad: Asegurarse de que el intento pertenece al usuario
    },
  });

  if (!attempt) {
    throw new Error("Intento no encontrado");
  }

  // 2. Cargar la clave de respuestas desde el archivo JSON correspondiente
  const caseStudy = await getCaseStudyById(attempt.caseStudyId);
  if (!caseStudy?.answerKey) {
    throw new Error("Respuestas para el caso de estudio no encontradas");
  }

  const userAnswers = attempt.userAnswers as unknown as PedimentoFormValues;
  const correctAnswers = caseStudy.answerKey as unknown as PedimentoFormValues;

  // 3. Ejecutar la lógica de comparación
  const evaluationResult = compareAnswers(userAnswers, correctAnswers);

  // 4. Calcular la puntuación

  // 5. Actualizar el intento en la base de datos con el resultado
  await prisma.userAttempt.update({
    where: {
      id: attemptId,
    },
    data: {
      evaluatedAt: new Date(),
    },
  });

  // Opcional: Revalidar la ruta si tienes una página de historial
  // revalidatePath('/historial');

  // 6. Devolver los resultados al cliente
  return {
    evaluationResult,
    correctAnswers,
  };
}
