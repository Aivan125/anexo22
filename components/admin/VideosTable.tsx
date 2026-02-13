"use client";

import { useState, useTransition } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Pencil, Plus, Trash2, Video } from "lucide-react";
import {
  createVideo,
  updateVideo,
  deleteVideo,
} from "@/lib/actions/adminVideos";
import {
  createVideoSchema,
  updateVideoSchema,
  type CreateVideoFormValues,
  type UpdateVideoFormValues,
} from "@/lib/validation";

interface VideoWithGroup {
  id: string;
  title: string;
  description: string | null;
  youtubeId: string;
  groupId: string;
  group: { id: string; name: string };
}

interface VideosTableProps {
  videos: VideoWithGroup[];
  groups: Array<{ id: string; name: string }>;
}

export function VideosTable({ videos, groups }: VideosTableProps) {
  const [isPending, startTransition] = useTransition();
  const [createOpen, setCreateOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<VideoWithGroup | null>(null);
  const [deletingVideo, setDeletingVideo] = useState<VideoWithGroup | null>(
    null,
  );

  const createForm = useForm<CreateVideoFormValues>({
    resolver: zodResolver(createVideoSchema),
    defaultValues: {
      title: "",
      description: "",
      youtubeId: "",
      groupId: "",
    },
  });

  const editForm = useForm<UpdateVideoFormValues>({
    resolver: zodResolver(updateVideoSchema),
    defaultValues: {
      id: "",
      title: "",
      description: "",
      youtubeId: "",
      groupId: "",
    },
  });

  const handleCreateSubmit = (data: CreateVideoFormValues) => {
    startTransition(async () => {
      const result = await createVideo(data);
      if (result.ok) {
        toast.success(result.message);
        setCreateOpen(false);
        createForm.reset({
          title: "",
          description: "",
          youtubeId: "",
          groupId: "",
        });
      } else {
        toast.error(result.message);
        if (result.code === "youtube_id_taken") {
          createForm.setError("youtubeId", { message: result.message });
        }
      }
    });
  };

  const handleEditOpen = (video: VideoWithGroup) => {
    setEditingVideo(video);
    editForm.reset({
      id: video.id,
      title: video.title,
      description: video.description ?? "",
      youtubeId: video.youtubeId,
      groupId: video.groupId,
    });
  };

  const handleEditSubmit = (data: UpdateVideoFormValues) => {
    startTransition(async () => {
      const result = await updateVideo(data);
      if (result.ok) {
        toast.success(result.message);
        setEditingVideo(null);
      } else {
        toast.error(result.message);
        if (result.code === "youtube_id_taken") {
          editForm.setError("youtubeId", { message: result.message });
        }
      }
    });
  };

  const handleDeleteConfirm = (video: VideoWithGroup) => {
    startTransition(async () => {
      const result = await deleteVideo(video.id);
      if (result.ok) {
        toast.success(result.message);
        setDeletingVideo(null);
      } else {
        toast.error(result.message);
      }
    });
  };

  const CreateButton = () => (
    <Dialog open={createOpen} onOpenChange={setCreateOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="sm">
          <Plus className="h-4 w-4" aria-hidden />
          Crear video
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Crear video</DialogTitle>
          <DialogDescription>
            Agrega un video de YouTube asignándolo a un grupo
          </DialogDescription>
        </DialogHeader>
        <Form {...createForm}>
          <form
            onSubmit={createForm.handleSubmit(handleCreateSubmit)}
            className="space-y-4"
          >
            <FormField
              control={createForm.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="create-title">Título</FormLabel>
                  <FormControl>
                    <Input
                      id="create-title"
                      placeholder="Título del video…"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={createForm.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="create-description">
                    Descripción (opcional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="create-description"
                      placeholder="Descripción…"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={createForm.control}
              name="youtubeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="create-youtubeId">
                    ID de YouTube
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="create-youtubeId"
                      placeholder="Ej: dQw4w9WgXcQ…"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={createForm.control}
              name="groupId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="create-groupId">Grupo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger id="create-groupId">
                        <SelectValue placeholder="Selecciona un grupo…" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {groups.map((g) => (
                        <SelectItem key={g.id} value={g.id}>
                          {g.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setCreateOpen(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Creando…" : "Crear"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      {videos.length > 0 && (
        <div className="mb-4">
          <CreateButton />
        </div>
      )}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 text-left">Título</TableHead>
              <TableHead className="px-4 text-left">Grupo</TableHead>
              <TableHead className="px-4 text-left">YouTube ID</TableHead>
              <TableHead className="px-4 text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-muted-foreground py-12"
                >
                  <div className="flex flex-col items-center gap-4">
                    <Video className="h-12 w-12 opacity-50" aria-hidden />
                    <p>No hay videos. Crea el primero y asígnalo a un grupo.</p>
                    {groups.length > 0 ? (
                      <CreateButton />
                    ) : (
                      <p className="text-sm">
                        Crea un grupo primero en la sección Grupos.
                      </p>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              videos.map((video) => (
                <TableRow key={video.id} className="hover:bg-blue-100/50">
                  <TableCell className="px-4 text-left font-medium max-w-[200px]">
                    <span className="truncate block" title={video.title}>
                      {video.title}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 text-left">
                    {video.group.name}
                  </TableCell>
                  <TableCell className="px-4 text-left font-mono text-sm">
                    {video.youtubeId}
                  </TableCell>
                  <TableCell className="px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Editar ${video.title}`}
                        onClick={() => handleEditOpen(video)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Eliminar ${video.title}`}
                        onClick={() => setDeletingVideo(video)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit Dialog */}
      <Dialog
        open={!!editingVideo}
        onOpenChange={(open) => !open && setEditingVideo(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Editar video</DialogTitle>
            <DialogDescription>Modifica los datos del video</DialogDescription>
          </DialogHeader>
          {editingVideo && (
            <Form {...editForm}>
              <form
                onSubmit={editForm.handleSubmit(handleEditSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={editForm.control}
                  name="id"
                  render={({ field }) => <input type="hidden" {...field} />}
                />
                <FormField
                  control={editForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="edit-title">Título</FormLabel>
                      <FormControl>
                        <Input
                          id="edit-title"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="edit-description">
                        Descripción (opcional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="edit-description"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="youtubeId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="edit-youtubeId">
                        ID de YouTube
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="edit-youtubeId"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={editForm.control}
                  name="groupId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="edit-groupId">Grupo</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={isPending}
                      >
                        <FormControl>
                          <SelectTrigger id="edit-groupId">
                            <SelectValue placeholder="Selecciona un grupo…" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {groups.map((g) => (
                            <SelectItem key={g.id} value={g.id}>
                              {g.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setEditingVideo(null)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={isPending}>
                    {isPending ? "Guardando…" : "Guardar"}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete AlertDialog */}
      <AlertDialog
        open={!!deletingVideo}
        onOpenChange={(open) => !open && setDeletingVideo(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar video?</AlertDialogTitle>
            <AlertDialogDescription>
              {deletingVideo && (
                <>
                  Se eliminará el video &quot;{deletingVideo.title}&quot;. Esta
                  acción no se puede deshacer.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                deletingVideo && handleDeleteConfirm(deletingVideo)
              }
              disabled={isPending}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isPending ? "Eliminando…" : "Eliminar"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
