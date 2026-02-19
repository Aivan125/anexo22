import "server-only";

import { cache } from "react";
import { createClient } from "@/utils/supabase/server";
import fs from "fs";
import path from "path";
import { CaseStudy } from "@/types/pedimento";
import prisma from "./prisma";

export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export function getAllCaseStudies(): CaseStudy[] {
  const casesDirectory = path.join(
    process.cwd(),
    "lib",
    "data",
    "case-studies",
  );
  try {
    // Lee todos los nombres de archivo en el directorio
    const fileNames = fs.readdirSync(casesDirectory);

    const allCases = fileNames
      .map((fileName) => {
        // Nos aseguramos de leer solo archivos .json
        if (path.extname(fileName) === ".json") {
          const filePath = path.join(casesDirectory, fileName);
          const fileContents = fs.readFileSync(filePath, "utf8");
          return JSON.parse(fileContents) as CaseStudy;
        }
        return null;
      })
      .filter((caseItem): caseItem is CaseStudy => caseItem !== null);

    return allCases;
  } catch (error) {
    console.error("Error al leer los casos de estudio:", error);
    return []; // Devuelve un array vacío en caso de error
  }
}

export const getUserWithProfile = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const profile = await prisma.profile.findUnique({
    where: { id: user.id },
    select: {
      id: true,
      email: true,
      name: true,
      groupId: true,
      role: true,
      isActive: true,
    },
  });

  if (!profile) return null;

  const isAdmin = profile.role === "admin";
  const hasAccess = profile.isActive || isAdmin;
  if (!hasAccess) return null;

  return { user, profile };
});

export async function requireActiveUser() {
  const result = await getUserWithProfile();
  if (!result) {
    const { redirect } = await import("next/navigation");
    redirect("/cuenta-inactiva");
  }
  return result;
}

export async function requireAdmin() {
  const result = await getUserWithProfile();
  if (!result || result.profile.role !== "admin") {
    const { redirect } = await import("next/navigation");
    redirect("/dashboard");
  }
  return result;
}
