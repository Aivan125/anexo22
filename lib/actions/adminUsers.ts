"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/helpers-server";
import { createAdminClient } from "@/utils/supabase/admin";
import { createUserSchema, updateUserNameSchema } from "@/lib/validation";
import { listGroups } from "@/lib/actions/adminGroups";

export { listGroups };

const updateUserRoleSchema = z.object({
  userId: z.string(),
  role: z.enum(["user", "admin"]),
});

const updateUserGroupSchema = z.object({
  userId: z.string(),
  groupId: z.string().nullable(),
});

const updateUserActiveSchema = z.object({
  userId: z.string(),
  isActive: z.boolean(),
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

    revalidatePath("/admin/usuarios");
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

type UpdateUserGroupResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code: "auth_required" | "validation_error" | "not_found" | "unexpected";
      message: string;
    };

export async function updateUserGroup(
  rawInput: unknown,
): Promise<UpdateUserGroupResult> {
  try {
    const result = await requireAdmin();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "No autorizado",
      };
    }

    const input = updateUserGroupSchema.parse(rawInput);
    const groupId = input.groupId?.trim() || null;

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

    await prisma.profile.update({
      where: { id: input.userId },
      data: { groupId },
    });

    revalidatePath("/admin/usuarios");
    return {
      ok: true,
      message: "Grupo actualizado",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        ok: false,
        code: "validation_error",
        message: "Datos inválidos",
      };
    }
    console.error("[updateUserGroup] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al actualizar el grupo",
    };
  }
}

type UpdateUserActiveResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code:
        | "auth_required"
        | "validation_error"
        | "not_found"
        | "self_deactivate"
        | "unexpected";
      message: string;
    };

export async function updateUserActive(
  rawInput: unknown,
): Promise<UpdateUserActiveResult> {
  try {
    const result = await requireAdmin();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "No autorizado",
      };
    }

    const input = updateUserActiveSchema.parse(rawInput);

    if (result.profile.id === input.userId) {
      return {
        ok: false,
        code: "self_deactivate",
        message: "No puedes desactivarte a ti mismo",
      };
    }

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

    await prisma.profile.update({
      where: { id: input.userId },
      data: { isActive: input.isActive },
    });

    revalidatePath("/admin/usuarios");
    return {
      ok: true,
      message: input.isActive ? "Usuario activado" : "Usuario desactivado",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        ok: false,
        code: "validation_error",
        message: "Datos inválidos",
      };
    }
    console.error("[updateUserActive] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al actualizar el estado del usuario",
    };
  }
}

type UpdateUserNameResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code: "auth_required" | "validation_error" | "not_found" | "unexpected";
      message: string;
    };

export async function updateUserName(
  rawInput: unknown,
): Promise<UpdateUserNameResult> {
  try {
    const result = await requireAdmin();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "No autorizado",
      };
    }

    const input = updateUserNameSchema.parse(rawInput);
    const name = input.name?.trim() || null;

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

    await prisma.profile.update({
      where: { id: input.userId },
      data: { name },
    });

    revalidatePath("/admin/usuarios");
    return {
      ok: true,
      message: "Nombre actualizado",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        ok: false,
        code: "validation_error",
        message: "Datos inválidos",
      };
    }
    console.error("[updateUserName] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al actualizar el nombre",
    };
  }
}

type DeleteUserResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code: "auth_required" | "not_found" | "self_delete" | "unexpected";
      message: string;
    };

export async function deleteUser(userId: string): Promise<DeleteUserResult> {
  try {
    const result = await requireAdmin();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "No autorizado",
      };
    }

    if (result.profile.id === userId) {
      return {
        ok: false,
        code: "self_delete",
        message: "No puedes eliminarte a ti mismo",
      };
    }

    const profile = await prisma.profile.findUnique({
      where: { id: userId },
    });

    if (!profile) {
      return {
        ok: false,
        code: "not_found",
        message: "Usuario no encontrado",
      };
    }

    const supabase = createAdminClient();
    const { error: authError } = await supabase.auth.admin.deleteUser(userId);

    if (authError) {
      console.error("[deleteUser] Supabase error:", authError.message);
      return {
        ok: false,
        code: "unexpected",
        message: authError.message || "Error al eliminar el usuario",
      };
    }

    await prisma.profile.delete({
      where: { id: userId },
    });

    revalidatePath("/admin/usuarios");
    return {
      ok: true,
      message: "Usuario eliminado correctamente",
    };
  } catch (error) {
    console.error("[deleteUser] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al eliminar el usuario",
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
        isActive: boolean;
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
        isActive: true,
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

type CreateUserResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code: "auth_required" | "validation_error" | "email_taken" | "unexpected";
      message: string;
    };

export async function createUser(rawInput: unknown): Promise<CreateUserResult> {
  try {
    const result = await requireAdmin();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "No autorizado",
      };
    }

    const input = createUserSchema.parse(rawInput);
    const email = input.email.trim().toLowerCase();
    const name = input.name?.trim() || null;
    const groupId = input.groupId?.trim() || null;

    // Verificar email único en Profile
    const existingProfile = await prisma.profile.findUnique({
      where: { email },
    });

    if (existingProfile) {
      return {
        ok: false,
        code: "email_taken",
        message: "El correo ya está registrado",
      };
    }

    const supabase = createAdminClient();
    const { data: authUser, error: authError } =
      await supabase.auth.admin.createUser({
        email,
        password: input.password,
        email_confirm: true,
        user_metadata: { name: name || undefined },
      });

    if (authError) {
      const msg = authError.message.toLowerCase();
      if (
        msg.includes("already") ||
        msg.includes("already registered") ||
        msg.includes("duplicate")
      ) {
        return {
          ok: false,
          code: "email_taken",
          message: "El correo ya está registrado",
        };
      }
      console.error("[createUser] Supabase error:", authError.message);
      return {
        ok: false,
        code: "unexpected",
        message: authError.message || "Error al crear el usuario",
      };
    }

    if (!authUser.user?.id) {
      return {
        ok: false,
        code: "unexpected",
        message: "Error al crear el usuario",
      };
    }

    try {
      await prisma.profile.create({
        data: {
          id: authUser.user.id,
          email,
          name,
          role: input.role,
          groupId: groupId || undefined,
        },
      });
    } catch (profileError) {
      const prismaError = profileError as { code?: string };
      if (prismaError.code === "P2002") {
        return {
          ok: false,
          code: "email_taken",
          message: "El correo ya está registrado",
        };
      }
      throw profileError;
    }

    revalidatePath("/admin/usuarios");
    revalidatePath("/admin/agregar-usuario");
    return {
      ok: true,
      message: "Usuario creado correctamente",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const first = error.issues[0];
      return {
        ok: false,
        code: "validation_error",
        message: first?.message ?? "Datos inválidos",
      };
    }
    console.error("[createUser] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al crear el usuario",
    };
  }
}
