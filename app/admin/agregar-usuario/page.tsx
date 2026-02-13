import { requireAdmin } from "@/lib/helpers-server";
import { listGroups } from "@/lib/actions/adminUsers";
import { CreateUserForm } from "@/components/admin/CreateUserForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserPlus } from "lucide-react";

export default async function AdminAgregarUsuarioPage() {
  await requireAdmin();

  const groupsResult = await listGroups();
  const groups = groupsResult.ok ? groupsResult.data : [];

  return (
    <div className="space-y-6">
      <div>
        <h1
          id="agregar-usuario-heading"
          className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2 scroll-mt-6"
        >
          <UserPlus className="h-8 w-8" aria-hidden />
          Agregar usuario
        </h1>
        <p className="text-muted-foreground">
          Crea un nuevo usuario en el sistema
        </p>
      </div>

      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Datos del usuario</CardTitle>
          <CardDescription>
            Completa los campos para registrar un nuevo usuario
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateUserForm groups={groups} />
        </CardContent>
      </Card>
    </div>
  );
}
