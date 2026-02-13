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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Pencil, Plus, Trash2, Users } from "lucide-react";
import {
  createGroup,
  updateGroup,
  deleteGroup,
} from "@/lib/actions/adminGroups";
import {
  createGroupSchema,
  updateGroupSchema,
  type CreateGroupFormValues,
  type UpdateGroupFormValues,
} from "@/lib/validation";

interface GroupWithCounts {
  id: string;
  name: string;
  _count: { profiles: number; videos: number };
}

interface GroupsTableProps {
  groups: GroupWithCounts[];
}

export function GroupsTable({ groups }: GroupsTableProps) {
  const [isPending, startTransition] = useTransition();
  const [createOpen, setCreateOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<GroupWithCounts | null>(
    null,
  );
  const [deletingGroup, setDeletingGroup] = useState<GroupWithCounts | null>(
    null,
  );

  const createForm = useForm<CreateGroupFormValues>({
    resolver: zodResolver(createGroupSchema),
    defaultValues: { name: "" },
  });

  const editForm = useForm<UpdateGroupFormValues>({
    resolver: zodResolver(updateGroupSchema),
    defaultValues: { id: "", name: "" },
  });

  const handleCreateSubmit = (data: CreateGroupFormValues) => {
    startTransition(async () => {
      const result = await createGroup(data);
      if (result.ok) {
        toast.success(result.message);
        setCreateOpen(false);
        createForm.reset({ name: "" });
      } else {
        toast.error(result.message);
        if (result.code === "name_taken") {
          createForm.setError("name", { message: result.message });
        }
      }
    });
  };

  const handleEditOpen = (group: GroupWithCounts) => {
    setEditingGroup(group);
    editForm.reset({ id: group.id, name: group.name });
  };

  const handleEditSubmit = (data: UpdateGroupFormValues) => {
    startTransition(async () => {
      const result = await updateGroup(data);
      if (result.ok) {
        toast.success(result.message);
        setEditingGroup(null);
      } else {
        toast.error(result.message);
        if (result.code === "name_taken") {
          editForm.setError("name", { message: result.message });
        }
      }
    });
  };

  const handleDeleteConfirm = (group: GroupWithCounts) => {
    startTransition(async () => {
      const result = await deleteGroup(group.id);
      if (result.ok) {
        toast.success(result.message);
        setDeletingGroup(null);
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
          Crear grupo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear grupo</DialogTitle>
          <DialogDescription>
            Ingresa el nombre del nuevo grupo
          </DialogDescription>
        </DialogHeader>
        <Form {...createForm}>
          <form
            onSubmit={createForm.handleSubmit(handleCreateSubmit)}
            className="space-y-4"
          >
            <FormField
              control={createForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="create-name">Nombre</FormLabel>
                  <FormControl>
                    <Input
                      id="create-name"
                      placeholder="Ej: Generación 2025-1…"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
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
      {groups.length > 0 && (
        <div className="mb-4">
          <CreateButton />
        </div>
      )}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="px-4 text-left">Nombre</TableHead>
              <TableHead className="px-4 text-center tabular-nums">
                Usuarios
              </TableHead>
              <TableHead className="px-4 text-center tabular-nums">
                Videos
              </TableHead>
              <TableHead className="px-4 text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-muted-foreground py-12"
                >
                  <div className="flex flex-col items-center gap-4">
                    <Users className="h-12 w-12 opacity-50" aria-hidden />
                    <p>No hay grupos. Crea el primero para asignar usuarios.</p>
                    <CreateButton />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              groups.map((group) => (
                <TableRow key={group.id} className="hover:bg-blue-100/50">
                  <TableCell className="px-4 text-left font-medium">
                    {group.name}
                  </TableCell>
                  <TableCell className="px-4 text-center tabular-nums">
                    {group._count.profiles}
                  </TableCell>
                  <TableCell className="px-4 text-center tabular-nums">
                    {group._count.videos}
                  </TableCell>
                  <TableCell className="px-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Editar ${group.name}`}
                        onClick={() => handleEditOpen(group)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Eliminar ${group.name}`}
                        onClick={() => setDeletingGroup(group)}
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
        open={!!editingGroup}
        onOpenChange={(open) => !open && setEditingGroup(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar grupo</DialogTitle>
            <DialogDescription>Modifica el nombre del grupo</DialogDescription>
          </DialogHeader>
          {editingGroup && (
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
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="edit-name">Nombre</FormLabel>
                      <FormControl>
                        <Input
                          id="edit-name"
                          placeholder="Ej: Generación 2025-1…"
                          disabled={isPending}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setEditingGroup(null)}
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
        open={!!deletingGroup}
        onOpenChange={(open) => !open && setDeletingGroup(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar grupo?</AlertDialogTitle>
            <AlertDialogDescription>
              {deletingGroup && (
                <>
                  Se eliminará el grupo &quot;{deletingGroup.name}&quot;. Solo
                  se puede eliminar si no tiene alumnos ni videos asignados.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                deletingGroup && handleDeleteConfirm(deletingGroup)
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
