import type { CourseSlug } from "@/lib/constants/courses";

export type TestimonialStatus = "pending" | "published";

/** Alineado a [COURSES](lib/constants/courses.ts) — incluye `simulador-aduanero` §12.7. */
export type TestimonialCourseSlug = CourseSlug;

export interface TestimonialDisplay {
  id: string;
  text: string;
  rating: number;
  courseSlug: TestimonialCourseSlug;
  courseName: string;
  authorName: string;
  authorInitial: string;
}
