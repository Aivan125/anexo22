// // src/app/api/attempts/save/route.ts

// import { NextResponse } from "next/server";
// import { createClient } from "@/utils/supabase/server";
// import prisma from "@/lib/prisma";

// export async function POST(request: Request) {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   console.log("user de Supabase", user);

//   if (!user) {
//     return NextResponse.json({ error: "No autorizado" }, { status: 401 });
//   }

//   const { caseStudyId, userAnswers } = await request.json();

//   console.log("caseStudyId", caseStudyId);
//   console.log("userAnswers", userAnswers);

//   if (!caseStudyId || !userAnswers) {
//     return NextResponse.json(
//       { error: "Faltan datos (caseStudyId o userAnswers)" },
//       { status: 400 }
//     );
//   }

//   try {
//     const attempt = await prisma.userAttempt.upsert({
//       where: {
//         // Busca un intento que coincida con este usuario y este caso
//         profileId_caseStudyId: {
//           profileId: user.id,
//           caseStudyId: caseStudyId,
//         },
//       },
//       update: {
//         // Si lo encuentra, actualiza las respuestas
//         userAnswers: userAnswers,
//       },
//       create: {
//         // Si no lo encuentra, crea un nuevo registro
//         profileId: user.id,
//         caseStudyId: caseStudyId,
//         userAnswers: userAnswers,
//       },
//     });

//     return NextResponse.json({ success: true, attemptId: attempt.id });
//   } catch (error) {
//     console.error("Error al guardar el intento:", error);
//     return NextResponse.json(
//       { error: "No se pudo guardar el progreso" },
//       { status: 500 }
//     );
//   }
// }
