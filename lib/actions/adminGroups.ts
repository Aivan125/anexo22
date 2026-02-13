"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/helpers-server";
import { createGroupSchema, updateGroupSchema } from "@/lib/validation";

type CreateGroupResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code: "auth_required" | "validation_error" | "name_taken" | "unexpected";
      message: string;
    };

export async function createGroup(
  rawInput: unknown,
): Promise<CreateGroupResult> {
  try {
    await requireAdmin();
    const input = createGroupSchema.parse(rawInput);
    const name = input.name.trim();

    const existing = await prisma.group.findUnique({
      where: { name },
    });
    if (existing) {
      return {
        ok: false,
        code: "name_taken",
        message: "Ya existe un grupo con ese nombre",
      };
    }

    await prisma.group.create({
      data: { name },
    });

    revalidatePath("/admin/grupos");
    revalidatePath("/admin/agregar-usuario");
    revalidatePath("/admin/usuarios");
    return { ok: true, message: "Grupo creado correctamente" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const first = error.issues[0];
      return {
        ok: false,
        code: "validation_error",
        message: first?.message ?? "Datos inválidos",
      };
    }
    console.error("[createGroup] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al crear el grupo",
    };
  }
}

type UpdateGroupResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code:
        | "auth_required"
        | "validation_error"
        | "not_found"
        | "name_taken"
        | "unexpected";
      message: string;
    };

export async function updateGroup(
  rawInput: unknown,
): Promise<UpdateGroupResult> {
  try {
    await requireAdmin();
    const input = updateGroupSchema.parse(rawInput);
    const name = input.name.trim();

    const existing = await prisma.group.findUnique({
      where: { id: input.id },
    });
    if (!existing) {
      return {
        ok: false,
        code: "not_found",
        message: "Grupo no encontrado",
      };
    }

    const nameTaken = await prisma.group.findFirst({
      where: { name, NOT: { id: input.id } },
    });
    if (nameTaken) {
      return {
        ok: false,
        code: "name_taken",
        message: "Ya existe un grupo con ese nombre",
      };
    }

    await prisma.group.update({
      where: { id: input.id },
      data: { name },
    });

    revalidatePath("/admin/grupos");
    revalidatePath("/admin/agregar-usuario");
    revalidatePath("/admin/usuarios");
    return { ok: true, message: "Grupo actualizado correctamente" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const first = error.issues[0];
      return {
        ok: false,
        code: "validation_error",
        message: first?.message ?? "Datos inválidos",
      };
    }
    console.error("[updateGroup] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al actualizar el grupo",
    };
  }
}

type DeleteGroupResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code:
        | "auth_required"
        | "not_found"
        | "has_profiles"
        | "has_videos"
        | "unexpected";
      message: string;
    };

export async function deleteGroup(id: string): Promise<DeleteGroupResult> {
  try {
    await requireAdmin();

    const group = await prisma.group.findUnique({
      where: { id },
      include: {
        _count: { select: { profiles: true, videos: true } },
      },
    });

    if (!group) {
      return {
        ok: false,
        code: "not_found",
        message: "Grupo no encontrado",
      };
    }

    if (group._count.profiles > 0) {
      return {
        ok: false,
        code: "has_profiles",
        message:
          "No se puede eliminar el grupo porque tiene alumnos asignados. Reasigna los alumnos a otro grupo primero.",
      };
    }

    if (group._count.videos > 0) {
      return {
        ok: false,
        code: "has_videos",
        message:
          "No se puede eliminar el grupo porque tiene videos asignados. Elimina o reasigna los videos primero.",
      };
    }

    await prisma.group.delete({
      where: { id },
    });

    revalidatePath("/admin/grupos");
    revalidatePath("/admin/agregar-usuario");
    revalidatePath("/admin/usuarios");
    return { ok: true, message: "Grupo eliminado correctamente" };
  } catch (error) {
    console.error("[deleteGroup] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al eliminar el grupo",
    };
  }
}

type ListGroupsResult =
  | { ok: true; data: Array<{ id: string; name: string }> }
  | { ok: false; code: "auth_required" | "unexpected"; message: string };

export async function listGroups(): Promise<ListGroupsResult> {
  try {
    await requireAdmin();
    const groups = await prisma.group.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
    return { ok: true, data: groups };
  } catch {
    return {
      ok: false,
      code: "unexpected",
      message: "Error al obtener los grupos",
    };
  }
}

type ListGroupsWithCountsResult =
  | {
      ok: true;
      data: Array<{
        id: string;
        name: string;
        _count: { profiles: number; videos: number };
      }>;
    }
  | { ok: false; code: "auth_required" | "unexpected"; message: string };

export async function listGroupsWithCounts(): Promise<ListGroupsWithCountsResult> {
  try {
    await requireAdmin();
    const groups = await prisma.group.findMany({
      select: {
        id: true,
        name: true,
        _count: { select: { profiles: true, videos: true } },
      },
      orderBy: { name: "asc" },
    });
    return { ok: true, data: groups };
  } catch {
    return {
      ok: false,
      code: "unexpected",
      message: "Error al obtener los grupos",
    };
  }
}
