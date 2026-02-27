import { requireAdmin } from "@/lib/helpers-server";
import { listAdminTestimonials } from "@/lib/actions/testimonialActions";
import { TestimonialsTable } from "@/components/admin/TestimonialsTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

interface PageProps {
  searchParams: Promise<{ filter?: string }>;
}

export default async function AdminTestimonialesPage({
  searchParams,
}: PageProps) {
  await requireAdmin();

  const params = await searchParams;
  const filterParam = params.filter;
  const filter: "pending" | "published" | "all" =
    filterParam === "pending" || filterParam === "published"
      ? filterParam
      : "all";

  const result = await listAdminTestimonials(filter);

  if (!result.ok) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>{result.message}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1
          id="testimoniales-heading"
          className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2 scroll-mt-6"
        >
          <MessageSquare className="h-8 w-8" aria-hidden />
          Gestión de Testimoniales
        </h1>
        <p className="text-muted-foreground">
          Aprobar o rechazar las reseñas de los alumnos antes de publicarlas en
          la landing
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Testimoniales</CardTitle>
          <CardDescription>
            Total: {result.data.length} testimonio(s)
            {filter !== "all" &&
              ` (filtro: ${filter === "pending" ? "Pendientes" : "Publicados"})`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TestimonialsTable testimonials={result.data} statusFilter={filter} />
        </CardContent>
      </Card>
    </div>
  );
}
