import { sectionMap, allSections } from "./sections";
import { casosData } from "./casos-data";
import type {
  Section,
  Chapter,
  Heading,
  Subheading,
  Classification,
  CasoPractico,
} from "@/types/clasificacion-arancelaria";

/**
 * Obtiene una sección por su código
 */
export function getSectionByCode(code: string): Section | undefined {
  return sectionMap[code];
}

/**
 * Obtiene un capítulo por código de sección y capítulo
 */
export function getChapterByCode(
  sectionCode: string,
  chapterCode: string,
): Chapter | undefined {
  const section = getSectionByCode(sectionCode);
  if (!section) return undefined;
  return section.chapters.find((chapter) => chapter.code === chapterCode);
}

/**
 * Obtiene una partida (heading) por códigos de sección, capítulo y partida
 */
export function getHeadingByCode(
  sectionCode: string,
  chapterCode: string,
  headingCode: string,
): Heading | undefined {
  const chapter = getChapterByCode(sectionCode, chapterCode);
  if (!chapter) return undefined;
  return chapter.headings.find((heading) => heading.code === headingCode);
}

/**
 * Obtiene una subpartida por códigos completos
 */
export function getSubheadingByCode(
  sectionCode: string,
  chapterCode: string,
  headingCode: string,
  subheadingCode: string,
): Subheading | undefined {
  const heading = getHeadingByCode(sectionCode, chapterCode, headingCode);
  if (!heading || !heading.subheadings) return undefined;
  return heading.subheadings.find(
    (subheading) => subheading.code === subheadingCode,
  );
}

/**
 * Obtiene una clasificación (fracción) por códigos completos
 */
export function getClassificationByCode(
  sectionCode: string,
  chapterCode: string,
  headingCode: string,
  subheadingCode: string,
  classificationCode: string,
): Classification | undefined {
  const subheading = getSubheadingByCode(
    sectionCode,
    chapterCode,
    headingCode,
    subheadingCode,
  );
  if (!subheading || !subheading.classifications) return undefined;
  return subheading.classifications.find(
    (classification) => classification.code === classificationCode,
  );
}

/**
 * Busca clasificaciones por código o título
 */
export function searchClassifications(query: string): Array<{
  type: "classification";
  data: Classification;
  context: string;
}> {
  const results: Array<{
    type: "classification";
    data: Classification;
    context: string;
  }> = [];
  const lowerQuery = query.toLowerCase();

  allSections.forEach((section) => {
    section.chapters.forEach((chapter) => {
      chapter.headings.forEach((heading) => {
        heading.subheadings?.forEach((subheading) => {
          subheading.classifications?.forEach((classification) => {
            const matchesCode = classification.code
              .toLowerCase()
              .includes(lowerQuery);
            const matchesTitle = classification.title
              .toLowerCase()
              .includes(lowerQuery);

            if (matchesCode || matchesTitle) {
              results.push({
                type: "classification",
                data: classification,
                context: `${section.title} > ${chapter.title} > ${heading.title}`,
              });
            }
          });
        });
      });
    });
  });

  return results;
}

/**
 * Obtiene todos los casos prácticos
 */
export function getAllCasos(): CasoPractico[] {
  return casosData.casos;
}

/**
 * Obtiene un caso práctico por ID
 */
export function getCasoById(id: string): CasoPractico | undefined {
  return casosData.casos.find((caso) => caso.id === id);
}

/**
 * Obtiene todas las secciones
 */
export function getAllSections(): Section[] {
  return allSections;
}
