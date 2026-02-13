import { requireAdmin } from "@/lib/helpers-server";
import { listUsers, listGroups } from "@/lib/actions/adminUsers";
import { UsersTable } from "@/components/admin/UsersTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default async function AdminUsersPage() {
  await requireAdmin();

  const [usersResult, groupsResult] = await Promise.all([
    listUsers(),
    listGroups(),
  ]);
  const groups = groupsResult.ok ? groupsResult.data : [];

  if (!usersResult.ok) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>{usersResult.message}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1
          id="usuarios-heading"
          className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2 scroll-mt-6"
        >
          <Users className="h-8 w-8" aria-hidden />
          Gestión de Usuarios
        </h1>
        <p className="text-muted-foreground">
          Administra usuarios, roles y permisos del sistema
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Lista de Usuarios</CardTitle>
            <CardDescription>
              Total: {usersResult.data.length} usuario(s)
            </CardDescription>
          </div>
          <Link href="/admin/agregar-usuario">
            <Button>
              <UserPlus className="h-4 w-4" aria-hidden />
              Agregar usuario
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <UsersTable users={usersResult.data} groups={groups} />
        </CardContent>
      </Card>
    </div>
  );
}
