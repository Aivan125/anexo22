// /src/lib/case-studies-server.ts
"use server";

import fs from "fs";
import path from "path";
import { CaseStudy } from "@/types/pedimento";

// Definimos una interfaz para la estructura de nuestros archivos JSON de casos

const casesDirectory = path.join(process.cwd(), "lib", "data", "case-studies");

export async function getCaseStudyById(id: string): Promise<CaseStudy | null> {
  // Construimos la ruta completa al archivo, ej. /path/to/project/src/data/case-studies/case-1.json
  const filePath = path.join(casesDirectory, `${id}.json`);

  try {
    // Verificamos si el archivo existe antes de intentar leerlo
    if (!fs.existsSync(filePath)) {
      console.warn(
        `No se encontró el archivo del caso de estudio: ${filePath}`
      );
      return null;
    }

    // Leemos el contenido del archivo como un string de texto
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parseamos el string de JSON a un objeto de JavaScript
    const caseData = JSON.parse(fileContents);

    // Devolvemos los datos con el tipo correcto
    return caseData as CaseStudy;
  } catch (error) {
    console.error(`Error al leer o parsear el caso de estudio: ${id}`, error);
    return null;
  }
}
