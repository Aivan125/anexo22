"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormValues } from "@/lib/validation";
import { Mail, Lock, MessageCircle, Eye, EyeOff } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants/constants";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import LoadingButton from "./LoadingButton";
import { login } from "@/app/login/action";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

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

  const inputBaseClass =
    "w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* Mitad Izquierda: Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
        <div className="max-w-md w-full flex flex-col">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Volver a la página de inicio"
            className="flex items-center gap-2 w-fit"
          >
            <div className="relative w-10 h-12 shrink-0">
              <Image
                src="/logos/logo oficial.png"
                alt="ANMIN-CADISA"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-extrabold text-lg tracking-tight leading-none text-slate-900">
                ANMIN
              </span>
              <span className="font-bold text-sm tracking-widest leading-none text-accent-foreground">
                CADISA
              </span>
            </div>
          </Link>

          {/* Título y subtítulo */}
          <h2 className="mt-10 text-3xl font-extrabold text-slate-900 tracking-tight">
            Bienvenido de nuevo
          </h2>
          <p className="mt-2 text-slate-500">
            Accede al simulador del Anexo 22
          </p>

          {/* Formulario */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <div className="flex flex-col gap-5 mt-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-700">
                        Correo electrónico
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                          <Input
                            placeholder="ejemplo@correo.com"
                            type="email"
                            disabled={form.formState.isSubmitting}
                            className={inputBaseClass}
                            {...field}
                          />
                        </div>
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
                      <FormLabel className="text-sm font-medium text-slate-700">
                        Contraseña
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            disabled={form.formState.isSubmitting}
                            className={`${inputBaseClass} pr-11`}
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            tabIndex={-1}
                            aria-label={
                              showPassword
                                ? "Ocultar contraseña"
                                : "Mostrar contraseña"
                            }
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {error && (
                <p className="mt-4 text-destructive text-sm">{error}</p>
              )}

              <LoadingButton
                type="submit"
                loading={form.formState.isSubmitting}
                className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
              >
                Iniciar sesión
              </LoadingButton>

              {/* Ayuda */}
              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500">
                  ¿Problemas para acceder?
                </p>
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 mt-1 text-primary font-semibold hover:underline"
                >
                  Contáctanos por WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Mitad Derecha: Imagen tratada */}
      <div className="hidden lg:flex relative w-1/2 items-end justify-center bg-slate-950 overflow-hidden">
        {/* Capa 1: Imagen */}
        <img
          src="/puerto.jpg"
          alt="Vista aérea de contenedores de carga en puerto"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale-[20%]"
        />
        {/* Capa 2: Overlay oscurecedor */}
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply" />
        {/* Capa 3: Gradiente de piso */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Tarjeta testimonial */}
        <div className="relative z-10 w-full max-w-lg mb-20 mx-12 p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          <p className="text-white font-medium text-2xl leading-snug">
            &ldquo;El éxito es la suma de pequeños esfuerzos repetidos día tras
            día.&rdquo;
          </p>
          <p className="mt-6 text-slate-300 text-sm font-semibold tracking-wide uppercase">
            - Robert Collier
          </p>
        </div>
      </div>
    </div>
  );
}
