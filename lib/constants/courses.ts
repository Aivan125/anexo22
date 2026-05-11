export const COURSES = [
  {
    slug: "anexo22",
    name: "Curso de Llenado de Pedimento del Anexo 22",
    routePrefix: "/anexo22",
  },
  {
    slug: "clasificacion-arancelaria",
    name: "Curso de Clasificación Arancelaria",
    routePrefix: "/clasificacion-arancelaria",
  },
  {
    slug: "simulador-aduanero",
    name: "Simulador aduanero",
    routePrefix: "/simulador-aduanero",
  },
] as const;

export type CourseSlug = (typeof COURSES)[number]["slug"];

export const COURSE_SLUGS: CourseSlug[] = COURSES.map((c) => c.slug);
