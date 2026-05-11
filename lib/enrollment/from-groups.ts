import prisma from "@/lib/prisma";
import {
  COURSE_SLUGS,
  type CourseSlug,
} from "@/lib/constants/courses";

const VALID_SLUG_SET = new Set<string>(COURSE_SLUGS);

/**
 * Curso efectivo derivado del grupo para matrícula y dashboard.
 * Grupos con `courseSlug: null` (legado) equivalen al curso Anexo 22,
 * igual que en `getPermittedVideos`.
 */
export function enrollmentSlugFromGroup(courseSlug: string | null): CourseSlug | null {
  if (
    courseSlug != null &&
    courseSlug !== "" &&
    VALID_SLUG_SET.has(courseSlug)
  ) {
    return courseSlug as CourseSlug;
  }
  if (courseSlug === null) {
    return "anexo22";
  }
  return null;
}

/** Slugs de curso implícitos en los grupos asignados (sin duplicados). */
export async function courseSlugsFromGroupIds(
  groupIds: string[],
): Promise<CourseSlug[]> {
  const ids = [...new Set(groupIds.filter((id) => id?.trim()))];
  if (ids.length === 0) return [];
  const groups = await prisma.group.findMany({
    where: { id: { in: ids } },
    select: { courseSlug: true },
  });
  const out = new Set<CourseSlug>();
  for (const g of groups) {
    const s = enrollmentSlugFromGroup(g.courseSlug);
    if (s) out.add(s);
  }
  return [...out];
}

/** Une matrículas ya guardadas con las que corresponden a los grupos. */
export function mergeEnrolledCourseSlugs(
  existing: string[] | undefined,
  fromGroups: CourseSlug[],
): CourseSlug[] {
  const merged = new Set<string>();
  for (const s of existing ?? []) {
    if (VALID_SLUG_SET.has(s)) merged.add(s);
  }
  for (const s of fromGroups) merged.add(s);
  return COURSE_SLUGS.filter((slug) => merged.has(slug));
}
