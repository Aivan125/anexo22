import { requireAdmin } from "@/lib/helpers-server";
import { listGroupsWithCounts } from "@/lib/actions/adminGroups";
import { GroupsTable } from "@/components/admin/GroupsTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";

export default async function AdminGruposPage() {
  await requireAdmin();

  const groupsResult = await listGroupsWithCounts();

  if (!groupsResult.ok) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>{groupsResult.message}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1
          id="grupos-heading"
          className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2 scroll-mt-6"
        >
          <Users className="h-8 w-8" aria-hidden />
          Gestión de Grupos
        </h1>
        <p className="text-muted-foreground">
          Crea y administra grupos para asignar usuarios y videos
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Grupos</CardTitle>
          <CardDescription>
            Total: {groupsResult.data.length} grupo(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <GroupsTable groups={groupsResult.data} />
        </CardContent>
      </Card>
    </div>
  );
}
