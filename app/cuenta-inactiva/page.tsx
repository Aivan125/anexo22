import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function CuentaInactivaPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const params = await searchParams;
  const reason = params.reason;

  async function handleLogout() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-muted/30 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link
            href="/"
            aria-label="Volver a la página de inicio"
            className="mx-auto inline-block"
          >
            <Image
              src="/logo/ANMIN-CADISA.png"
              alt="ANMIN-CADISA"
              priority
              height={80}
              width={140}
            />
          </Link>
          <CardTitle className="text-xl">Cuenta sin acceso</CardTitle>
          <CardDescription>
            {reason === "inactiva"
              ? "Tu cuenta no tiene acceso activo al curso en este momento."
              : "Tu cuenta no tiene acceso activo."}{" "}
            Contacta al administrador para solicitar la activación.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-sm text-muted-foreground">
          Si crees que esto es un error, por favor comunícate con el
          administrador del sistema.
        </CardContent>
        <CardFooter className="flex justify-center">
          <form action={handleLogout}>
            <Button type="submit" variant="default">
              Cerrar sesión
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
