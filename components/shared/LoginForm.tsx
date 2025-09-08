"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormValues } from "@/lib/validation";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import LoadingButton from "./LoadingButton";
import { login } from "@/app/login/action";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    const response = await login(data);
    if (!response?.success) {
      setError(response.error || null);
    }
  };

  return (
    <div className="bg-primary flex min-h-screen w-full items-center justify-center lg:grid lg:grid-cols-2 lg:items-stretch lg:justify-normal  ">
      {/* --- Columna Izquierda: Formulario --- */}
      <div className="flex items-center justify-center px-4 py-12 sm:px-6  lg:px-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          {/* Encabezado del Formulario */}
          <div className="flex flex-col items-center justify-center">
            <Link
              href="/"
              aria-label="Volver a la página de inicio"
              className="inline-block"
            >
              <div className="flex items-center gap-2 rounded-full overflow-hidden">
                <Image
                  src="/logo/ANMIN-CADISA.png"
                  alt="ANMIN-CADISA"
                  priority
                  height={120}
                  width={200}
                />
              </div>
            </Link>

            <h2 className="text-primary-foreground mt-6 text-3xl font-bold tracking-tight">
              Bienvenido de nuevo
            </h2>
            <p className="text-muted-foreground mt-2">
              Accede al simulador del anexo 22
            </p>
          </div>

          {/* Formulario dentro de una Card para mantener el estilo */}
          <Card className="border-0 bg-transparent shadow-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <CardContent className="space-y-4 p-0 text-primary-foreground">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="ejemplo@correo.com"
                            type="email"
                            {...field}
                            disabled={form.formState.isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••"
                            {...field}
                            disabled={form.formState.isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>

                <CardFooter className="flex flex-col gap-4 p-0">
                  {error && <p className="text-destructive text-sm">{error}</p>}
                  <LoadingButton
                    type="submit"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    loading={form.formState.isSubmitting}
                  >
                    Iniciar sesión
                  </LoadingButton>
                  <p className="text-muted-foreground text-center text-sm">
                    ¿Problemas para acceder?{" "}
                    <Link
                      href={""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary font-semibold underline-offset-4 hover:underline"
                    >
                      Contáctanos por WhatsApp
                    </Link>
                  </p>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
      </div>

      {/* --- Columna Derecha: Imagen --- */}
      <div className="relative hidden lg:block">
        <Image
          src="/photo5.jpg"
          alt="Profesionales colaborando en un espacio de trabajo moderno"
          fill
          className="object-cover"
          priority
        />
        {/* Capa oscura para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Cita inspiradora */}
        <div className="absolute bottom-0 left-0 p-12">
          <blockquote className="text-2xl leading-snug font-semibold text-white">
            &ldquo;El éxito es la suma de pequeños esfuerzos repetidos día tras
            día.&rdquo;
          </blockquote>
          <p className="mt-4 text-lg text-white/80">- Robert Collier</p>
        </div>
      </div>
    </div>
  );
}
