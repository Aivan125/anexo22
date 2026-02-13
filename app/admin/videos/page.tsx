import { requireAdmin } from "@/lib/helpers-server";
import { listVideos } from "@/lib/actions/adminVideos";
import { listGroups } from "@/lib/actions/adminGroups";
import { VideosTable } from "@/components/admin/VideosTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Video } from "lucide-react";

export default async function AdminVideosPage() {
  await requireAdmin();

  const [videosResult, groupsResult] = await Promise.all([
    listVideos(),
    listGroups(),
  ]);

  if (!videosResult.ok) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>{videosResult.message}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const groups = groupsResult.ok ? groupsResult.data : [];

  return (
    <div className="space-y-6">
      <div>
        <h1
          id="videos-heading"
          className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2 scroll-mt-6"
        >
          <Video className="h-8 w-8" aria-hidden />
          Gestión de Videos
        </h1>
        <p className="text-muted-foreground">
          Administra los videos de clase por grupo
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Videos</CardTitle>
          <CardDescription>
            Total: {videosResult.data.length} video(s). Los usuarios ven solo
            los videos de su grupo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <VideosTable videos={videosResult.data} groups={groups} />
        </CardContent>
      </Card>
    </div>
  );
}
