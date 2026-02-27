"use client";

import { useState } from "react";
import { MessageSquarePlus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { TestimonialForm } from "./TestimonialForm";
import { TestimonialPreview } from "./TestimonialPreview";
import { COURSES } from "@/lib/constants/courses";
import type { TestimonialFormValues } from "@/lib/validation";
import {
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "@/lib/actions/testimonialActions";

interface TestimonialData {
  id: string;
  text: string;
  rating: number;
  courseSlug: string;
  status: "pending" | "published";
}

interface TestimonialManagerProps {
  testimonials: TestimonialData[];
  enrolledCourseSlugs: string[];
}

export function TestimonialManager({
  testimonials,
  enrolledCourseSlugs,
}: TestimonialManagerProps) {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const testimonialByCourse = new Map(
    testimonials.map((t) => [t.courseSlug, t]),
  );

  const availableCourses = enrolledCourseSlugs
    .filter((slug) => !testimonialByCourse.has(slug))
    .map((slug) => COURSES.find((c) => c.slug === slug))
    .filter((c): c is (typeof COURSES)[number] => c != null)
    .map((c) => ({ slug: c.slug, name: c.name }));

  const handleCreate = async (data: TestimonialFormValues) => {
    setIsSubmitting(true);
    try {
      const result = await createTestimonial(data);
      if (result.ok) {
        setExpandedCourse(null);
        toast.success("Testimonio enviado. Será revisado antes de publicarse.");
      } else {
        toast.error(result.message);
        throw new Error(result.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async (id: string, data: TestimonialFormValues) => {
    const result = await updateTestimonial(id, data);
    if (result.ok) {
      toast.success("Testimonio actualizado.");
    } else {
      toast.error(result.message);
      throw new Error(result.message);
    }
  };

  const handleDelete = async (id: string) => {
    const result = await deleteTestimonial(id);
    if (result.ok) {
      toast.success("Testimonio eliminado.");
    } else {
      toast.error(result.message);
      throw new Error(result.message);
    }
  };

  return (
    <div className="space-y-4">
      {/* Existing testimonials */}
      {testimonials.map((t) => {
        const course = COURSES.find((c) => c.slug === t.courseSlug);
        const courseName = course?.name ?? t.courseSlug;
        return (
          <TestimonialPreview
            key={t.id}
            id={t.id}
            text={t.text}
            rating={t.rating}
            courseSlug={t.courseSlug}
            courseName={courseName}
            status={t.status}
            onEdit={(data) => handleUpdate(t.id, data)}
            onDelete={() => handleDelete(t.id)}
          />
        );
      })}

      {/* Add new testimonial - one form per available course */}
      {availableCourses.length > 0 && (
        <div className="space-y-4">
          {expandedCourse ? (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <TestimonialForm
                mode="create"
                availableCourses={availableCourses}
                initialData={
                  expandedCourse
                    ? {
                        text: "",
                        rating: 0,
                        courseSlug: expandedCourse,
                      }
                    : undefined
                }
                onSubmit={handleCreate}
                onCancel={() => setExpandedCourse(null)}
                isSubmitting={isSubmitting}
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {availableCourses.map((c) => (
                <Button
                  key={c.slug}
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setExpandedCourse(c.slug)}
                  className="border-amber-500/50 bg-gradient-to-br from-amber-500/90 to-amber-600/90 text-slate-900 hover:from-amber-400 hover:to-amber-500 hover:border-amber-400 shadow-[0_0_20px_-5px_rgba(245,158,11,0.35)] hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.5)] transition-all duration-300"
                >
                  <MessageSquarePlus className="h-4 w-4 mr-2" aria-hidden />
                  Añadir reseña para {c.name}
                </Button>
              ))}
            </div>
          )}
        </div>
      )}

      {testimonials.length === 0 && availableCourses.length === 0 && (
        <p className="text-slate-400 text-sm">
          No tienes cursos inscritos para dejar una reseña.
        </p>
      )}
    </div>
  );
}
