import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const courseMaterials = [
  {
    title: "Anexo 22 - Instructivo de llenado de pedimento",
    description:
      "Documento oficial para la correcta elaboración del pedimento.",
    href: "https://udmvjnhmvzsklplwlcpg.supabase.co/storage/v1/object/sign/course-material/Anexo22delasRGCEpara2025.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYWYyYThhMy1iNmFlLTRjNmYtOGEzNC1hYmNmZjJmMzRkYzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJjb3Vyc2UtbWF0ZXJpYWwvQW5leG8yMmRlbGFzUkdDRXBhcmEyMDI1LnBkZiIsImlhdCI6MTc1OTk1ODc4NiwiZXhwIjoxOTE3NjM4Nzg2fQ.9IQwMBCRGCP9Kuy7y8T5s4ONp1IXS9DVL7FiTqN7-Ss",
  },
  // ... futuros materiales aquí
];

export function CourseMaterial() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Material del Curso</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {courseMaterials.map((material) => (
            <li
              key={material.title}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <FileText className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="font-semibold">{material.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {material.description}
                  </p>
                </div>
              </div>
              <Button asChild>
                <a
                  href={material.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
