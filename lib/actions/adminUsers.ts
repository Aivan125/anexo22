"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/helpers-server";

const updateUserRoleSchema = z.object({
  userId: z.string(),
  role: z.enum(["user", "admin"]),
});

type UpdateUserRoleResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code: "auth_required" | "validation_error" | "not_found" | "unexpected";
      message: string;
    };

export async function updateUserRole(
  rawInput: unknown,
): Promise<UpdateUserRoleResult> {
  try {
    // Verificar que el usuario es admin
    const result = await requireAdmin();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "No autorizado",
      };
    }

    // Validar input
    const input = updateUserRoleSchema.parse(rawInput);

    // Verificar que el usuario existe
    const user = await prisma.profile.findUnique({
      where: { id: input.userId },
    });

    if (!user) {
      return {
        ok: false,
        code: "not_found",
        message: "Usuario no encontrado",
      };
    }

    // Actualizar rol
    await prisma.profile.update({
      where: { id: input.userId },
      data: { role: input.role },
    });

    revalidatePath("/dashboard/admin/usuarios");
    return {
      ok: true,
      message: `Rol actualizado a ${input.role}`,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        ok: false,
        code: "validation_error",
        message: "Datos inválidos",
      };
    }
    console.error("[updateUserRole] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al actualizar el rol",
    };
  }
}

type ListUsersResult =
  | {
      ok: true;
      data: Array<{
        id: string;
        email: string | null;
        name: string | null;
        role: string;
        groupId: string | null;
        createdAt: Date;
      }>;
    }
  | { ok: false; code: "auth_required" | "unexpected"; message: string };

export async function listUsers(): Promise<ListUsersResult> {
  try {
    // Verificar que el usuario es admin
    await requireAdmin();

    const users = await prisma.profile.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        groupId: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      ok: true,
      data: users,
    };
  } catch (error) {
    console.error("[listUsers] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al obtener la lista de usuarios",
    };
  }
}
