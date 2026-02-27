"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  testimonialFormSchema,
  type TestimonialFormValues,
} from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "./StarRating";
import { COURSES } from "@/lib/constants/courses";

const MAX_CHARS = 150;

interface TestimonialFormProps {
  mode: "create" | "edit";
  availableCourses: { slug: string; name: string }[];
  initialData?: {
    id?: string;
    text: string;
    rating: number;
    courseSlug: string;
  };
  onSubmit: (data: TestimonialFormValues) => Promise<void>;
  onCancel?: () => void;
  isSubmitting?: boolean;
}

export function TestimonialForm({
  mode,
  availableCourses,
  initialData,
  onSubmit,
  onCancel,
  isSubmitting = false,
}: TestimonialFormProps) {
  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      courseSlug: initialData?.courseSlug ?? availableCourses[0]?.slug ?? "",
      text: initialData?.text ?? "",
      rating: initialData?.rating ?? 0,
    },
  });

  const textValue = form.watch("text");
  const charCount = textValue?.length ?? 0;

  const handleSubmit = form.handleSubmit(async (data) => {
    await onSubmit(data);
    if (mode === "create") {
      form.reset({ courseSlug: "", text: "", rating: 0 });
    }
  });

  const courseOptions =
    mode === "edit" && initialData
      ? COURSES.filter((c) => c.slug === initialData.courseSlug)
      : availableCourses;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          control={form.control}
          name="courseSlug"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Curso</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={mode === "edit"}
              >
                <FormControl>
                  <SelectTrigger className="w-full bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Selecciona el curso" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {courseOptions.map((c) => (
                    <SelectItem key={c.slug} value={c.slug}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Calificación</FormLabel>
              <FormControl>
                <StarRating
                  value={field.value}
                  onChange={field.onChange}
                  readOnly={false}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Tu reseña</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Comparte tu experiencia con el curso..."
                  className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-slate-400"
                  maxLength={MAX_CHARS}
                />
              </FormControl>
              <div className="flex justify-between items-center">
                <FormMessage />
                <span className="text-xs text-white/80" aria-live="polite">
                  {charCount}/{MAX_CHARS}
                </span>
              </div>
            </FormItem>
          )}
        />

        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-teal-600 hover:bg-teal-500 text-white"
          >
            {isSubmitting
              ? "Enviando..."
              : mode === "create"
                ? "Enviar Testimonio"
                : "Guardar cambios"}
          </Button>
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
              className={
                mode === "create"
                  ? "border-white/20 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/30 hover:text-white"
                  : "border-red-700/40 bg-red-800/20 text-white hover:border-red-600/60 hover:bg-red-700/50 hover:text-white"
              }
            >
              Cancelar
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
