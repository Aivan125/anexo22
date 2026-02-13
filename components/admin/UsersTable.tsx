"use client";

import { useState, useTransition, useMemo } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateUserRole, updateUserGroup } from "@/lib/actions/adminUsers";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Search, X } from "lucide-react";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { normalizeForSearch } from "@/lib/search-utils";

interface User {
  id: string;
  email: string | null;
  name: string | null;
  role: string;
  groupId: string | null;
  createdAt: Date;
}

interface UsersTableProps {
  users: User[];
  groups: Array<{ id: string; name: string }>;
}

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const NO_GROUP_VALUE = "__none__";

export function UsersTable({ users, groups }: UsersTableProps) {
  const [isPending, startTransition] = useTransition();
  const [updatingUserId, setUpdatingUserId] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebouncedValue(searchInput, 300);

  const filteredUsers = useMemo(() => {
    const term = debouncedSearch.trim();
    if (!term) return users;
    const normalizedTerm = normalizeForSearch(term);
    return users.filter((user) => {
      const email = normalizeForSearch(user.email ?? "");
      const name = normalizeForSearch(user.name ?? "");
      return email.includes(normalizedTerm) || name.includes(normalizedTerm);
    });
  }, [users, debouncedSearch]);

  const handleRoleChange = (userId: string, newRole: "user" | "admin") => {
    setUpdatingUserId(userId);
    startTransition(async () => {
      const result = await updateUserRole({ userId, role: newRole });
      setUpdatingUserId(null);
      if (result.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  const handleGroupChange = (userId: string, groupId: string | null) => {
    const value = groupId === NO_GROUP_VALUE ? null : groupId;
    setUpdatingUserId(userId);
    startTransition(async () => {
      const result = await updateUserGroup({ userId, groupId: value });
      setUpdatingUserId(null);
      if (result.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          placeholder="Buscar por correo o nombre…"
          aria-label="Buscar usuarios por correo o nombre"
          autoComplete="off"
          spellCheck={false}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={searchInput.length > 0 ? "pl-9 pr-10" : "pl-9 pr-3"}
        />
        {searchInput.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 size-7 -translate-y-1/2"
            aria-label="Limpiar búsqueda"
            onClick={() => setSearchInput("")}
          >
            <X className="size-4" />
          </Button>
        )}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-100/50 hover:bg-blue-100/50">
              <TableHead className="px-4 text-left">Email</TableHead>
              <TableHead className="px-4 text-left">Nombre</TableHead>
              <TableHead className="px-4 text-left">Rol</TableHead>
              <TableHead className="px-4 text-left">Grupo</TableHead>
              <TableHead className="px-4 text-left tabular-nums">
                Fecha de Registro
              </TableHead>
              <TableHead className="px-4 text-left">
                Modificar Rol de Usuario
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center text-muted-foreground py-12"
                >
                  <div className="flex flex-col items-center gap-4">
                    <p>No hay usuarios registrados</p>
                    <Link href="/admin/agregar-usuario">
                      <Button>
                        <UserPlus className="h-4 w-4" aria-hidden />
                        Agregar usuario
                      </Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ) : filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-left text-muted-foreground py-12"
                >
                  <p>
                    No se encontraron usuarios para &quot;
                    {debouncedSearch.trim()}
                    &quot;
                  </p>
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow
                  key={user.id}
                  className="[content-visibility:auto] [contain-intrinsic-size:0_57px] hover:bg-blue-100/50"
                >
                  <TableCell className="px-4 text-left font-medium min-w-0 max-w-[200px]">
                    <span
                      className="truncate block"
                      title={user.email ?? undefined}
                    >
                      {user.email ?? "Sin email"}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 text-left min-w-0 max-w-[180px]">
                    <span
                      className="truncate block"
                      title={user.name ?? undefined}
                    >
                      {user.name ?? "Sin nombre"}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 text-left">
                    <Badge
                      variant={user.role === "admin" ? "default" : "secondary"}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 text-left">
                    <Select
                      value={user.groupId ?? NO_GROUP_VALUE}
                      onValueChange={(v) =>
                        handleGroupChange(
                          user.id,
                          v === NO_GROUP_VALUE ? null : v,
                        )
                      }
                      disabled={isPending && updatingUserId === user.id}
                    >
                      <SelectTrigger
                        className="w-[140px]"
                        aria-label={`Grupo de ${user.email ?? "usuario"}`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={NO_GROUP_VALUE}>
                          Sin grupo
                        </SelectItem>
                        {groups.map((g) => (
                          <SelectItem key={g.id} value={g.id}>
                            {g.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell
                    className="px-4 text-left tabular-nums"
                    suppressHydrationWarning
                  >
                    {dateFormatter.format(new Date(user.createdAt))}
                  </TableCell>
                  <TableCell className="px-4 text-left">
                    <div className="flex justify-start">
                      <Select
                        value={user.role}
                        onValueChange={(value) =>
                          handleRoleChange(user.id, value as "user" | "admin")
                        }
                        disabled={isPending && updatingUserId === user.id}
                      >
                        <SelectTrigger
                          className="w-[120px]"
                          aria-label={`Cambiar rol de ${user.email ?? "usuario"}`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="user">Usuario</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
