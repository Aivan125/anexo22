// src/app/api/attempts/save/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getUserWithProfile } from "@/lib/helpers-server";

export async function POST(request: Request) {
  const result = await getUserWithProfile();

  if (!result) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { user } = result;

  const { attemptId, userAnswers } = await request.json();

  console.log("userAnswers", userAnswers);

  if (!attemptId || !userAnswers) {
    return NextResponse.json(
      { error: "Faltan datos (caseStudyId o userAnswers)" },
      { status: 400 },
    );
  }

  try {
    const attempt = await prisma.userAttempt.update({
      where: {
        // Busca un intento que coincida con este usuario y este caso
        id: attemptId,
        profileId: user.id,
      },
      data: {
        userAnswers: userAnswers,
      },
    });

    return NextResponse.json({ success: true, attemptId: attempt.id });
  } catch (error) {
    console.error("Error al guardar el intento:", error);
    return NextResponse.json(
      { error: "No se pudo guardar el progreso" },
      { status: 500 },
    );
  }
}
