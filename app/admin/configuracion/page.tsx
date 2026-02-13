import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminConfiguracionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1
          id="configuracion-heading"
          className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2 scroll-mt-6"
        >
          <Settings className="h-8 w-8" aria-hidden />
          Configuración
        </h1>
        <p className="text-muted-foreground">
          Ajustes y configuración del sistema
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Configuración del sistema</CardTitle>
          <CardDescription>
            Esta sección estará disponible próximamente
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button disabled>Próximamente</Button>
        </CardContent>
      </Card>
    </div>
  );
}
