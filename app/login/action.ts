"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AuthApiError } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";
import { loginFormSchema, LoginFormValues } from "@/lib/validation";
import prisma from "@/lib/prisma";

export async function login(values: LoginFormValues): Promise<{
  success?: boolean;
  error?: string;
}> {
  const supabase = await createClient();

  const data = loginFormSchema.parse(values);

  const { data: signInData, error: signInUserError } =
    await supabase.auth.signInWithPassword(data);

  if (signInUserError) {
    if (
      signInUserError instanceof AuthApiError &&
      signInUserError.message === "Email not confirmed"
    ) {
      return {
        success: false,
        error:
          "Tu correo electrónico no ha sido confirmado. Por favor, revisa tu bandeja de entrada.",
      };
    }

    return {
      success: false,
      error:
        "Correo o contraseña incorrectos. Por favor, verifica tus credenciales.",
    };
  }

  const user = signInData?.user;
  if (!user) {
    return {
      success: false,
      error: "Error al iniciar sesión. Intenta de nuevo.",
    };
  }

  const profile = await prisma.profile.findUnique({
    where: { id: user.id },
    select: { isActive: true, role: true },
  });

  const isAdmin = profile?.role === "admin";
  const hasAccess = profile && (profile.isActive || isAdmin);

  if (!hasAccess) {
    await supabase.auth.signOut();
    redirect("/cuenta-inactiva?reason=inactiva");
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export const logout = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out:", error);
    return;
  }
};
