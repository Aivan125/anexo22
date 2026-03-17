"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { createUser } from "@/lib/actions/adminUsers";
import { createUserSchema, type CreateUserFormValues } from "@/lib/validation";
import { COURSES } from "@/lib/constants/courses";
import { GroupsMultiSelect } from "@/components/admin/GroupsMultiSelect";

interface CreateUserFormProps {
  groups: Array<{ id: string; name: string; courseSlug: string | null }>;
}

export function CreateUserForm({ groups }: CreateUserFormProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      role: "user",
      groupIds: [],
      courseSlugs: [],
    },
  });

  const onSubmit = (data: CreateUserFormValues) => {
    const payload = {
      ...data,
      groupIds: (data.groupIds ?? []).filter((id) => id?.trim()),
    };
    startTransition(async () => {
      const result = await createUser(payload);
      if (result.ok) {
        toast.success(result.message);
        form.reset();
        router.push("/admin/usuarios");
      } else {
        toast.error(result.message);
        if (result.code === "email_taken") {
          form.setError("email", { message: result.message });
        }
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        noValidate
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@ejemplo.com…"
                  autoComplete="email"
                  spellCheck={false}
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Nombre (opcional)</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nombre del usuario…"
                  autoComplete="name"
                  disabled={isPending}
                  {...field}
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
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormControl>
                <Input
                  id="password"
                  placeholder="Mínimo 8 caracteres…"
                  autoComplete="new-password"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="role">Rol</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={isPending}
              >
                <FormControl>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Selecciona un rol…" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="user">Usuario</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="courseSlugs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cursos</FormLabel>
              <div className="flex flex-col gap-3 rounded-md border p-4">
                {COURSES.map((course) => (
                  <div
                    key={course.slug}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={`course-${course.slug}`}
                      checked={field.value.includes(course.slug)}
                      onCheckedChange={(checked) => {
                        const newValue =
                          checked === true
                            ? [...field.value, course.slug]
                            : field.value.filter((s) => s !== course.slug);
                        field.onChange(newValue);
                      }}
                      disabled={isPending}
                    />
                    <label
                      htmlFor={`course-${course.slug}`}
                      className="text-sm font-normal cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {course.name}
                    </label>
                  </div>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="groupIds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grupos (opcional)</FormLabel>
              {groups.length > 0 ? (
                <FormControl>
                  <GroupsMultiSelect
                    groups={groups}
                    value={field.value ?? []}
                    onChange={field.onChange}
                    disabled={isPending}
                    placeholder="Seleccionar grupos…"
                  />
                </FormControl>
              ) : (
                <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
                  No hay grupos.{" "}
                  <Link
                    href="/admin/grupos"
                    className="font-medium text-primary underline underline-offset-4 hover:no-underline"
                  >
                    Crea uno en la sección Grupos
                  </Link>
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creando…" : "Crear usuario"}
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={isPending}
            onClick={() => router.push("/admin/usuarios")}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Form>
  );
}
