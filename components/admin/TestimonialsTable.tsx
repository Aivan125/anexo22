"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  approveTestimonial,
  rejectTestimonial,
  adminDeleteTestimonial,
} from "@/lib/actions/testimonialActions";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Trash2 } from "lucide-react";

interface TestimonialRow {
  id: string;
  text: string;
  rating: number;
  courseSlug: string;
  courseName: string;
  status: string;
  authorName: string;
  authorEmail: string | null;
  createdAt: Date;
}

interface TestimonialsTableProps {
  testimonials: TestimonialRow[];
  statusFilter: "pending" | "published" | "all";
}

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function TestimonialsTable({
  testimonials,
  statusFilter,
}: TestimonialsTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (filter: "pending" | "published" | "all") => {
    const params = new URLSearchParams();
    if (filter !== "all") params.set("filter", filter);
    router.push(
      `/admin/testimoniales${params.toString() ? `?${params.toString()}` : ""}`,
    );
  };
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [showRejectDialog, setShowRejectDialog] =
    useState<TestimonialRow | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] =
    useState<TestimonialRow | null>(null);
  const [viewTestimonial, setViewTestimonial] = useState<TestimonialRow | null>(
    null,
  );

  const handleApprove = (id: string) => {
    startTransition(async () => {
      const result = await approveTestimonial(id);
      if (result.ok) {
        toast.success("Testimonio aprobado y publicado.");
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  };

  const handleRejectConfirm = (id: string) => {
    setRejectingId(id);
    startTransition(async () => {
      const result = await rejectTestimonial(id);
      setRejectingId(null);
      setShowRejectDialog(null);
      if (result.ok) {
        toast.success("Testimonio rechazado y eliminado.");
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  };

  const handleDeleteConfirm = (id: string) => {
    setDeletingId(id);
    startTransition(async () => {
      const result = await adminDeleteTestimonial(id);
      setDeletingId(null);
      setShowDeleteDialog(null);
      if (result.ok) {
        toast.success("Testimonio eliminado.");
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Filtrar por estado:
        </span>
        <Select
          value={statusFilter}
          onValueChange={(v) =>
            handleFilterChange(v as "pending" | "published" | "all")
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="pending">Pendientes</SelectItem>
            <SelectItem value="published">Publicados</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {testimonials.length === 0 ? (
        <p className="text-muted-foreground py-8 text-center">
          No hay testimonios con el filtro seleccionado.
        </p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Autor</TableHead>
              <TableHead>Curso</TableHead>
              <TableHead>Calificación</TableHead>
              <TableHead>Reseña</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map((t) => (
              <TableRow key={t.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{t.authorName}</p>
                    {t.authorEmail && (
                      <p className="text-xs text-muted-foreground">
                        {t.authorEmail}
                      </p>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{t.courseName}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span>{t.rating}/5</span>
                  </div>
                </TableCell>
                <TableCell className="max-w-[300px]">
                  <button
                    type="button"
                    onClick={() => setViewTestimonial(t)}
                    className="w-full text-left text-sm line-clamp-1 truncate cursor-pointer hover:text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-1 -mx-1"
                  >
                    {t.text}
                  </button>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={t.status === "published" ? "default" : "secondary"}
                    className={
                      t.status === "published"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-amber-600 hover:bg-amber-700"
                    }
                  >
                    {t.status === "published" ? "Publicado" : "Pendiente"}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {dateFormatter.format(t.createdAt)}
                </TableCell>
                <TableCell className="text-right">
                  {t.status === "pending" ? (
                    <div className="flex justify-end gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleApprove(t.id)}
                        disabled={isPending}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="h-4 w-4 mr-1" aria-hidden />
                        Aprobar
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => setShowRejectDialog(t)}
                        disabled={isPending}
                      >
                        <X className="h-4 w-4 mr-1" aria-hidden />
                        Rechazar
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setShowDeleteDialog(t)}
                      disabled={isPending}
                    >
                      <Trash2 className="h-4 w-4 mr-1" aria-hidden />
                      Eliminar
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <AlertDialog
        open={!!showRejectDialog}
        onOpenChange={(open) => !open && setShowRejectDialog(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Rechazar testimonio?</AlertDialogTitle>
            <AlertDialogDescription>
              El testimonio será eliminado permanentemente. Esta acción no se
              puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={!!rejectingId}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                if (showRejectDialog) {
                  handleRejectConfirm(showRejectDialog.id);
                }
              }}
              disabled={!!rejectingId}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {rejectingId ? "Eliminando..." : "Rechazar y eliminar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog
        open={!!showDeleteDialog}
        onOpenChange={(open) => !open && setShowDeleteDialog(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar testimonio?</AlertDialogTitle>
            <AlertDialogDescription>
              El testimonio publicado será eliminado permanentemente y dejará de
              mostrarse en la landing. Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={!!deletingId}>
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                if (showDeleteDialog) {
                  handleDeleteConfirm(showDeleteDialog.id);
                }
              }}
              disabled={!!deletingId}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deletingId ? "Eliminando..." : "Eliminar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog
        open={!!viewTestimonial}
        onOpenChange={(open) => !open && setViewTestimonial(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reseña completa</DialogTitle>
          </DialogHeader>
          {viewTestimonial && (
            <div className="space-y-3">
              <div>
                <p className="font-medium">{viewTestimonial.authorName}</p>
                {viewTestimonial.authorEmail && (
                  <p className="text-xs text-muted-foreground">
                    {viewTestimonial.authorEmail}
                  </p>
                )}
              </div>
              <Badge variant="secondary">{viewTestimonial.courseName}</Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>{viewTestimonial.rating}/5</span>
              </div>
              <p className="text-sm whitespace-pre-wrap border rounded-md p-3 bg-muted/50">
                {viewTestimonial.text}
              </p>
              <p className="text-xs text-muted-foreground">
                {dateFormatter.format(viewTestimonial.createdAt)}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
