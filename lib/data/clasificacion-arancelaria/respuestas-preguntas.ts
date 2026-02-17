/**
 * Respuestas a las preguntas de análisis por caso.
 * Las respuestas están en el mismo orden que preguntas_analisis en cada caso.
 * Fuente: lib/information/caso_1_arancelaria.md para CASO_SEC2_006.
 */

export const respuestasPorCaso: Record<string, string[]> = {
  CASO_SEC2_006: [
    "Sección II (Productos del reino vegetal), Capítulo 10 (Cereales). La Nota 1 del Capítulo 10 aplica a cereales en grano, incluso partidos o triturados.",
    "Partida 10.05 (Maíz). El texto de la partida comprende el maíz en grano, incluyendo variedades específicas como la utilizada para palomitas.",
    "Entra en «Los demás» (1005.90). No es maíz para siembra; la clasificación se dirige a la subpartida de primer nivel para «Los demás».",
    "Se distingue entre Maíz Blanco (harinero), Maíz amarillo y Maíz Palomero. La Nota Nacional 2 define el grano de maíz palomero como aquel que conserva su forma natural, sin cocción, sin sal ni aditivos, destinado a expansión por calentamiento.",
    "Sí. RGI 6 permite la clasificación en la subpartida específica comparando textos del mismo nivel. La fracción final es 1005.90.99.01 (Maíz Palomero).",
  ],
};

/**
 * Obtiene las respuestas de las preguntas de análisis para un caso dado.
 * @param casoId - ID del caso (ej. CASO_SEC2_006)
 * @returns Array de respuestas en orden, o undefined si no hay respuestas para ese caso
 */
export function getRespuestasByCasoId(casoId: string): string[] | undefined {
  return respuestasPorCaso[casoId];
}
