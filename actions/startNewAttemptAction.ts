"use server";

import prisma from "@/lib/prisma";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function startNewAttemptAction(caseId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("No autorizado");
  }

  try {
    // Simplemente crea un nuevo registro UserAttempt vacío.
    // La lógica en 'page.tsx' se encargará de encontrar este nuevo borrador al recargar.
    await prisma.userAttempt.create({
      data: {
        profileId: user.id,
        caseStudyId: caseId,
        userAnswers: {}, // Inicia con un JSON vacío
        // 'score' y 'evaluatedAt' quedan como null por defecto
      },
    });

    revalidatePath(`/anexo22/${caseId}`);
  } catch (error) {
    console.error("Error al crear un nuevo intento:", error);
    // Lanza el error para que el cliente pueda manejarlo
    throw new Error("No se pudo iniciar un nuevo intento.");
  }
}
