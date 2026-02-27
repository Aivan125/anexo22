export type TestimonialStatus = "pending" | "published";

export type TestimonialCourseSlug = "anexo22" | "clasificacion-arancelaria";

export interface TestimonialDisplay {
  id: string;
  text: string;
  rating: number;
  courseSlug: TestimonialCourseSlug;
  courseName: string;
  authorName: string;
  authorInitial: string;
}
