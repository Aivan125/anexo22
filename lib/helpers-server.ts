import "server-only";

import { createClient } from "@/utils/supabase/server";
import fs from "fs";
import path from "path";
import { CaseStudy } from "@/types/pedimento";

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
    "case-studies"
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
