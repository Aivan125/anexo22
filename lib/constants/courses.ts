export const COURSES = [
  { slug: "anexo22", name: "Anexo 22", routePrefix: "/anexo22" },
  {
    slug: "clasificacion-arancelaria",
    name: "Clasificación Arancelaria",
    routePrefix: "/clasificacion-arancelaria",
  },
] as const;

export type CourseSlug = (typeof COURSES)[number]["slug"];

export const COURSE_SLUGS: CourseSlug[] = COURSES.map((c) => c.slug);
