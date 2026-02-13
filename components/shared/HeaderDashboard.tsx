"use client";

import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Menu, X, BookOpen, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import LoadingButton from "./LoadingButton";
import { logout } from "@/app/login/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface HeaderDashboardProps {
  isAdmin?: boolean;
}

const HeaderDashboard = ({ isAdmin = false }: HeaderDashboardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLogout = async () => {
    startTransition(async () => {
      try {
        await logout();
        router.push("/login");
        toast.success("Sesión cerrada con éxito");
      } catch (error) {
        console.error("Error during logout:", error);
        toast.error("Error al cerrar sesión");
      }
    });
  };

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-sm border-b border-border/20"
      }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl lg:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <Image
                src="/logo/ANMIN-CADISA_sin_fondo.png"
                alt="ANMIN-CADISA"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Navegación Desktop */}
          {/* <nav className="hidden lg:flex items-center space-x-8"></nav> */}

          {/* Botones Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" className="gap-2">
                <BookOpen className="h-4 w-4" />
                Cursos
              </Button>
            </Link>
            {isAdmin && (
              <Link href="/dashboard/admin">
                <Button variant="outline" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Admin
                </Button>
              </Link>
            )}
            <LoadingButton
              onClick={handleLogout}
              loading={isPending}
              className="bg-red-600 hover:bg-red-700"
            >
              {!isPending && (
                <LogOut className="text-primary-foreground mr-2 h-4 w-4" />
              )}
              <span>Cerrar Sesión</span>
            </LoadingButton>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-border/50">
              <div className="pt-4 space-y-2">
                <Link href="/dashboard" className="block">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <BookOpen className="h-4 w-4" />
                    Cursos
                  </Button>
                </Link>
                {isAdmin && (
                  <Link href="/dashboard/admin" className="block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                    >
                      <Shield className="h-4 w-4" />
                      Admin
                    </Button>
                  </Link>
                )}
                <LoadingButton
                  onClick={handleLogout}
                  loading={isPending}
                  size="sm"
                  className="w-full bg-red-600 hover:bg-red-700 gap-2"
                >
                  {!isPending && (
                    <LogOut className="text-primary-foreground h-4 w-4" />
                  )}
                  <span>Cerrar Sesión</span>
                </LoadingButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderDashboard;
