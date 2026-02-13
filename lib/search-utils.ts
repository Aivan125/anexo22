/**
 * Normaliza texto para búsqueda: minúsculas, sin acentos/diacríticos.
 * "María José" -> "maria jose"
 */
export function normalizeForSearch(str: string): string {
  if (!str || typeof str !== "string") return "";
  return str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}
