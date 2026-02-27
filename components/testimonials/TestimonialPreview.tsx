"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { StarRating } from "./StarRating";
import { TestimonialForm } from "./TestimonialForm";
import type { TestimonialFormValues } from "@/lib/validation";
import { cn } from "@/lib/utils";

interface TestimonialPreviewProps {
  id: string;
  text: string;
  rating: number;
  courseSlug: string;
  courseName: string;
  status: "pending" | "published";
  onEdit: (data: TestimonialFormValues) => Promise<void>;
  onDelete: () => Promise<void>;
}

export function TestimonialPreview({
  id,
  text,
  rating,
  courseSlug,
  courseName,
  status,
  onEdit,
  onDelete,
}: TestimonialPreviewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEditSubmit = async (data: TestimonialFormValues) => {
    setIsSubmitting(true);
    try {
      await onEdit(data);
      setIsEditing(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      await onDelete();
      setShowDeleteDialog(false);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isEditing) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <TestimonialForm
          mode="edit"
          availableCourses={[{ slug: courseSlug, name: courseName }]}
          initialData={{ id, text, rating, courseSlug }}
          onSubmit={handleEditSubmit}
          onCancel={() => setIsEditing(false)}
          isSubmitting={isSubmitting}
        />
      </div>
    );
  }

  return (
    <>
      <div
        className={cn(
          "rounded-xl border border-white/10 bg-white/5 p-4 transition-all",
          "hover:border-white/20",
        )}
      >
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className={cn(
              "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ring-1",
              status === "published"
                ? "bg-teal-500/20 text-teal-300 ring-teal-500/30"
                : "bg-amber-500/20 text-amber-300 ring-amber-500/30",
            )}
          >
            {status === "published" ? "Publicado" : "En revisión"}
          </span>
          <span className="inline-flex items-center rounded-md bg-slate-900/50 px-2 py-0.5 text-xs font-medium text-teal-300 ring-1 ring-teal-500/20">
            {courseName}
          </span>
        </div>

        <StarRating value={rating} readOnly />
        <p className="text-slate-300 text-sm mt-2 mb-4">{text}</p>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setIsEditing(true)}
            className="text-white hover:bg-white/10"
          >
            <Pencil className="h-4 w-4 mr-1" aria-hidden />
            Editar
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowDeleteDialog(true)}
            className="text-red-400 hover:bg-red-500/10 hover:text-red-300"
          >
            <Trash2 className="h-4 w-4 mr-1" aria-hidden />
            Eliminar
          </Button>
        </div>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar tu testimonio?</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro de que deseas eliminar tu testimonio? Esta acción no
              se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                handleDeleteConfirm();
              }}
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? "Eliminando..." : "Eliminar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
