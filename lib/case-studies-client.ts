// src/lib/case-studies-client.ts

// NOTA: Esta implementación es muy simple. A medida que añadas más casos,
// tendrás que importarlos aquí. Para una V1.0, es perfecto.

import case1 from "@/lib/data/case-studies/case-1.json";
// import case2 from '@/data/case-studies/case-2.json'; // Descomenta cuando lo crees

// Mapeamos los IDs de los casos a los archivos JSON importados
const cases = {
  "case-1": case1,
  // "case-2": case2, // Descomenta cuando lo crees
};

// Tipado para que TypeScript sepa qué IDs son válidos
type CaseId = keyof typeof cases;

export function getCaseStudyById(id: string) {
  return cases[id as CaseId] || null;
}
