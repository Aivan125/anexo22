"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/helpers-server";
import { createVideoSchema, updateVideoSchema } from "@/lib/validation";

type CreateVideoResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code:
        | "auth_required"
        | "validation_error"
        | "youtube_id_taken"
        | "unexpected";
      message: string;
    };

export async function createVideo(
  rawInput: unknown,
): Promise<CreateVideoResult> {
  try {
    await requireAdmin();
    const input = createVideoSchema.parse(rawInput);

    const existing = await prisma.video.findUnique({
      where: { youtubeId: input.youtubeId.trim() },
    });
    if (existing) {
      return {
        ok: false,
        code: "youtube_id_taken",
        message: "Ya existe un video con ese ID de YouTube",
      };
    }

    await prisma.video.create({
      data: {
        title: input.title.trim(),
        description: input.description?.trim() || null,
        youtubeId: input.youtubeId.trim(),
        groupId: input.groupId,
      },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/anexo22");
    return { ok: true, message: "Video creado correctamente" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const first = error.issues[0];
      return {
        ok: false,
        code: "validation_error",
        message: first?.message ?? "Datos inválidos",
      };
    }
    console.error("[createVideo] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al crear el video",
    };
  }
}

type UpdateVideoResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code:
        | "auth_required"
        | "validation_error"
        | "not_found"
        | "youtube_id_taken"
        | "unexpected";
      message: string;
    };

export async function updateVideo(
  rawInput: unknown,
): Promise<UpdateVideoResult> {
  try {
    await requireAdmin();
    const input = updateVideoSchema.parse(rawInput);

    const existing = await prisma.video.findUnique({
      where: { id: input.id },
    });
    if (!existing) {
      return {
        ok: false,
        code: "not_found",
        message: "Video no encontrado",
      };
    }

    const youtubeIdTaken = await prisma.video.findFirst({
      where: {
        youtubeId: input.youtubeId.trim(),
        NOT: { id: input.id },
      },
    });
    if (youtubeIdTaken) {
      return {
        ok: false,
        code: "youtube_id_taken",
        message: "Ya existe un video con ese ID de YouTube",
      };
    }

    await prisma.video.update({
      where: { id: input.id },
      data: {
        title: input.title.trim(),
        description: input.description?.trim() || null,
        youtubeId: input.youtubeId.trim(),
        groupId: input.groupId,
      },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/anexo22");
    return { ok: true, message: "Video actualizado correctamente" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const first = error.issues[0];
      return {
        ok: false,
        code: "validation_error",
        message: first?.message ?? "Datos inválidos",
      };
    }
    console.error("[updateVideo] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al actualizar el video",
    };
  }
}

type DeleteVideoResult =
  | { ok: true; message: string }
  | {
      ok: false;
      code: "auth_required" | "not_found" | "unexpected";
      message: string;
    };

export async function deleteVideo(id: string): Promise<DeleteVideoResult> {
  try {
    await requireAdmin();

    const video = await prisma.video.findUnique({
      where: { id },
    });

    if (!video) {
      return {
        ok: false,
        code: "not_found",
        message: "Video no encontrado",
      };
    }

    await prisma.video.delete({
      where: { id },
    });

    revalidatePath("/admin/videos");
    revalidatePath("/anexo22");
    return { ok: true, message: "Video eliminado correctamente" };
  } catch (error) {
    console.error("[deleteVideo] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al eliminar el video",
    };
  }
}

type ListVideosResult =
  | {
      ok: true;
      data: Array<{
        id: string;
        title: string;
        description: string | null;
        youtubeId: string;
        groupId: string;
        group: { id: string; name: string };
      }>;
    }
  | { ok: false; code: "auth_required" | "unexpected"; message: string };

export async function listVideos(): Promise<ListVideosResult> {
  try {
    await requireAdmin();
    const videos = await prisma.video.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        youtubeId: true,
        groupId: true,
        group: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return { ok: true, data: videos };
  } catch {
    return {
      ok: false,
      code: "unexpected",
      message: "Error al obtener los videos",
    };
  }
}
