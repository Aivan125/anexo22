"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, UserPlus, Settings, UsersRound, Video } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin/agregar-usuario", label: "Agregar usuario", icon: UserPlus },
  { href: "/admin/usuarios", label: "Usuarios", icon: Users },
  { href: "/admin/grupos", label: "Grupos", icon: UsersRound },
  { href: "/admin/videos", label: "Videos", icon: Video },
  { href: "/admin/configuracion", label: "Configuración", icon: Settings },
] as const;

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="flex min-h-full w-56 flex-col border-r border-border bg-background"
      aria-label="Navegación del panel de administración"
    >
      <nav
        className="flex flex-1 flex-col gap-1 p-2"
        aria-label="Menú principal"
      >
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="size-4 shrink-0" aria-hidden />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
