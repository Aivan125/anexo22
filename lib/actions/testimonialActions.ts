"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { getUserWithProfile, requireAdmin } from "@/lib/helpers-server";
import { testimonialFormSchema } from "@/lib/validation";
import { COURSES } from "@/lib/constants/courses";
import type { TestimonialCourseSlug } from "@/lib/types/testimonial";

type TestimonialResult<T = void> =
  | { ok: true; data: T }
  | {
      ok: false;
      code:
        | "auth_required"
        | "validation_error"
        | "not_found"
        | "forbidden"
        | "unexpected";
      message: string;
    };

function getCourseName(slug: string): string {
  return COURSES.find((c) => c.slug === slug)?.name ?? slug;
}

export async function getPublishedTestimonials(): Promise<
  TestimonialResult<
    Array<{
      id: string;
      text: string;
      rating: number;
      courseSlug: TestimonialCourseSlug;
      courseName: string;
      authorName: string;
      authorInitial: string;
    }>
  >
> {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { status: "published" },
      include: { profile: true },
      orderBy: { createdAt: "desc" },
    });

    const data = testimonials.map((t) => ({
      id: t.id,
      text: t.text,
      rating: t.rating,
      courseSlug: t.courseSlug as TestimonialCourseSlug,
      courseName: getCourseName(t.courseSlug),
      authorName: t.profile.name ?? t.profile.email ?? "Alumno",
      authorInitial: (
        t.profile.name?.[0] ??
        t.profile.email?.[0] ??
        "A"
      ).toUpperCase(),
    }));

    return { ok: true, data };
  } catch (error) {
    console.error("[getPublishedTestimonials] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al obtener testimonios",
    };
  }
}

export async function getMyTestimonials(): Promise<
  TestimonialResult<
    Array<{
      id: string;
      text: string;
      rating: number;
      courseSlug: string;
      status: "pending" | "published";
    }>
  >
> {
  try {
    const result = await getUserWithProfile();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "Debes iniciar sesión",
      };
    }

    const testimonials = await prisma.testimonial.findMany({
      where: { profileId: result.user.id },
      orderBy: { createdAt: "desc" },
    });

    const data = testimonials.map((t) => ({
      id: t.id,
      text: t.text,
      rating: t.rating,
      courseSlug: t.courseSlug,
      status: t.status as "pending" | "published",
    }));

    return { ok: true, data };
  } catch (error) {
    console.error("[getMyTestimonials] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al obtener tus testimonios",
    };
  }
}

export async function createTestimonial(
  rawInput: unknown,
): Promise<TestimonialResult> {
  try {
    const result = await getUserWithProfile();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "Debes iniciar sesión",
      };
    }

    const input = testimonialFormSchema.parse(rawInput);

    const enrolledSet = new Set(result.profile.enrolledCourseSlugs ?? []);
    if (!enrolledSet.has(input.courseSlug)) {
      return {
        ok: false,
        code: "forbidden",
        message: "No estás inscrito en este curso",
      };
    }

    await prisma.testimonial.create({
      data: {
        profileId: result.user.id,
        text: input.text,
        rating: input.rating,
        courseSlug: input.courseSlug,
        status: "pending",
      },
    });

    revalidatePath("/dashboard");
    return { ok: true, data: undefined };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        ok: false,
        code: "validation_error",
        message: error.issues[0]?.message ?? "Datos inválidos",
      };
    }
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return {
        ok: false,
        code: "validation_error",
        message: "Ya tienes un testimonio para este curso",
      };
    }
    console.error("[createTestimonial] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al crear el testimonio",
    };
  }
}

export async function updateTestimonial(
  id: string,
  rawInput: unknown,
): Promise<TestimonialResult> {
  try {
    const result = await getUserWithProfile();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "Debes iniciar sesión",
      };
    }

    const input = testimonialFormSchema.parse(rawInput);

    const existing = await prisma.testimonial.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        ok: false,
        code: "not_found",
        message: "Testimonio no encontrado",
      };
    }

    if (existing.profileId !== result.user.id) {
      return { ok: false, code: "forbidden", message: "No autorizado" };
    }

    await prisma.testimonial.update({
      where: { id },
      data: {
        text: input.text,
        rating: input.rating,
        status: "pending",
      },
    });

    revalidatePath("/dashboard");
    revalidatePath("/");
    revalidatePath("/admin/testimoniales");
    return { ok: true, data: undefined };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        ok: false,
        code: "validation_error",
        message: error.issues[0]?.message ?? "Datos inválidos",
      };
    }
    console.error("[updateTestimonial] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al actualizar el testimonio",
    };
  }
}

export async function deleteTestimonial(
  id: string,
): Promise<TestimonialResult> {
  try {
    const result = await getUserWithProfile();
    if (!result) {
      return {
        ok: false,
        code: "auth_required",
        message: "Debes iniciar sesión",
      };
    }

    const existing = await prisma.testimonial.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        ok: false,
        code: "not_found",
        message: "Testimonio no encontrado",
      };
    }

    if (existing.profileId !== result.user.id) {
      return { ok: false, code: "forbidden", message: "No autorizado" };
    }

    await prisma.testimonial.delete({
      where: { id },
    });

    revalidatePath("/dashboard");
    revalidatePath("/");
    revalidatePath("/admin/testimoniales");
    return { ok: true, data: undefined };
  } catch (error) {
    console.error("[deleteTestimonial] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al eliminar el testimonio",
    };
  }
}

export async function approveTestimonial(
  id: string,
): Promise<TestimonialResult> {
  try {
    await requireAdmin();

    const existing = await prisma.testimonial.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        ok: false,
        code: "not_found",
        message: "Testimonio no encontrado",
      };
    }

    await prisma.testimonial.update({
      where: { id },
      data: { status: "published" },
    });

    revalidatePath("/admin/testimoniales");
    revalidatePath("/");
    return { ok: true, data: undefined };
  } catch (error) {
    console.error("[approveTestimonial] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al aprobar el testimonio",
    };
  }
}

export async function listAdminTestimonials(
  filter?: "pending" | "published" | "all",
): Promise<
  TestimonialResult<
    Array<{
      id: string;
      text: string;
      rating: number;
      courseSlug: string;
      courseName: string;
      status: string;
      authorName: string;
      authorEmail: string | null;
      createdAt: Date;
    }>
  >
> {
  try {
    await requireAdmin();

    const where = filter && filter !== "all" ? { status: filter } : {};

    const testimonials = await prisma.testimonial.findMany({
      where,
      include: { profile: true },
      orderBy: { createdAt: "desc" },
    });

    const data = testimonials.map((t) => ({
      id: t.id,
      text: t.text,
      rating: t.rating,
      courseSlug: t.courseSlug,
      courseName: getCourseName(t.courseSlug),
      status: t.status,
      authorName: t.profile.name ?? t.profile.email ?? "Alumno",
      authorEmail: t.profile.email,
      createdAt: t.createdAt,
    }));

    return { ok: true, data };
  } catch (error) {
    console.error("[listAdminTestimonials] Error:", error);
    return {
      ok: false,
      code: "unexpected",
      message: "Error al obtener testimonios",
    };
  }
}

async function adminDeleteTestimonialById(
  id: string,
  options: { logPrefix: string; errorMessage: string },
): Promise<TestimonialResult> {
  try {
    await requireAdmin();

    const existing = await prisma.testimonial.findUnique({
      where: { id },
    });

    if (!existing) {
      return {
        ok: false,
        code: "not_found",
        message: "Testimonio no encontrado",
      };
    }

    await prisma.testimonial.delete({
      where: { id },
    });

    revalidatePath("/admin/testimoniales");
    revalidatePath("/");
    return { ok: true, data: undefined };
  } catch (error) {
    console.error(`[${options.logPrefix}] Error:`, error);
    return {
      ok: false,
      code: "unexpected",
      message: options.errorMessage,
    };
  }
}

export async function rejectTestimonial(
  id: string,
): Promise<TestimonialResult> {
  return adminDeleteTestimonialById(id, {
    logPrefix: "rejectTestimonial",
    errorMessage: "Error al rechazar el testimonio",
  });
}

export async function adminDeleteTestimonial(
  id: string,
): Promise<TestimonialResult> {
  return adminDeleteTestimonialById(id, {
    logPrefix: "adminDeleteTestimonial",
    errorMessage: "Error al eliminar el testimonio",
  });
}
