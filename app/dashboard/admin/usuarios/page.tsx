import { requireAdmin } from "@/lib/helpers-server";
import { listUsers } from "@/lib/actions/adminUsers";
import { UsersTable } from "@/components/admin/UsersTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";

export default async function AdminUsersPage() {
  // Verificar que el usuario es admin
  await requireAdmin();

  // Obtener lista de usuarios
  const usersResult = await listUsers();

  if (!usersResult.ok) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardHeader>
              <CardTitle>Error</CardTitle>
              <CardDescription>{usersResult.message}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
            <Users className="h-8 w-8" />
            Gestión de Usuarios
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Administra usuarios, roles y permisos del sistema
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Usuarios</CardTitle>
            <CardDescription>
              Total: {usersResult.data.length} usuario(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UsersTable users={usersResult.data} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
