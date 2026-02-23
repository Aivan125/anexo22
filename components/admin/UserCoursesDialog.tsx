"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { updateUserCourses } from "@/lib/actions/adminUsers";
import {
  updateUserCoursesSchema,
  type UpdateUserCoursesFormValues,
} from "@/lib/validation";
import { COURSES } from "@/lib/constants/courses";

interface UserCoursesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  userEmail: string | null;
  enrolledCourseSlugs: string[];
  onSuccess?: () => void;
  isPending?: boolean;
  setUpdatingUserId?: (id: string | null) => void;
}

export function UserCoursesDialog({
  open,
  onOpenChange,
  userId,
  userEmail,
  enrolledCourseSlugs,
  onSuccess,
  isPending = false,
  setUpdatingUserId,
}: UserCoursesDialogProps) {
  const [transitionPending, startTransition] = useTransition();
  const pending = isPending || transitionPending;

  const form = useForm<UpdateUserCoursesFormValues>({
    resolver: zodResolver(updateUserCoursesSchema),
    defaultValues: {
      userId,
      courseSlugs: enrolledCourseSlugs,
    },
  });

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      form.reset({ userId, courseSlugs: enrolledCourseSlugs });
    }
    onOpenChange(nextOpen);
  };

  const handleSubmit = (data: UpdateUserCoursesFormValues) => {
    setUpdatingUserId?.(userId);
    startTransition(async () => {
      const result = await updateUserCourses(data);
      setUpdatingUserId?.(null);
      if (result.ok) {
        toast.success(result.message);
        onOpenChange(false);
        onSuccess?.();
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cursos inscritos</DialogTitle>
          <DialogDescription>
            Selecciona los cursos para {userEmail ?? "el usuario"}. Debe tener
            al menos uno.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => <input type="hidden" {...field} />}
            />
            <FormField
              control={form.control}
              name="courseSlugs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cursos</FormLabel>
                  <div className="flex flex-col gap-3 rounded-md border p-4">
                    {COURSES.map((course) => (
                      <div
                        key={course.slug}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`dialog-course-${course.slug}`}
                          checked={field.value.includes(course.slug)}
                          onCheckedChange={(checked) => {
                            const newValue =
                              checked === true
                                ? [...field.value, course.slug]
                                : field.value.filter((s) => s !== course.slug);
                            field.onChange(newValue);
                          }}
                          disabled={pending}
                        />
                        <label
                          htmlFor={`dialog-course-${course.slug}`}
                          className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {course.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={pending}>
                {pending ? "Guardando…" : "Guardar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
