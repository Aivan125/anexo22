// /src/components/ClassVideos.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Video } from "lucide-react";

type VideoProps = {
  id: string;
  title: string;
  description: string | null;
  youtubeId: string;
};

export function ClassVideos({ videos }: { videos: VideoProps[] }) {
  if (!videos || videos.length === 0) {
    return (
      <Alert>
        <Video className="h-4 w-4" />
        <AlertTitle>Sin videos disponibles</AlertTitle>
        <AlertDescription>
          Aún no tienes videos de clase asignados para tu grupo. Vuelve a
          revisar más tarde.
        </AlertDescription>
      </Alert>
    );
  }

  // Caso 2: Hay videos para mostrar.
  // Renderiza una cuadrícula responsiva de tarjetas.
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              {video.title}
            </CardTitle>
            {video.description && (
              <CardDescription className="text-sm text-gray-600">
                {video.description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            {/* Contenedor con aspect-ratio para que el video mantenga su forma */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                // Se usa 'youtube-nocookie.com' para una mejor privacidad del usuario.
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={video.title}
              ></iframe>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
