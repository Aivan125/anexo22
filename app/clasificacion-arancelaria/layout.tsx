import { redirect } from "next/navigation";
import { HeaderDashboardServer } from "@/components/shared/HeaderDashboardServer";
import { OfflineBanner } from "@/components/shared/OfflineBanner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { requireActiveUser, hasCourseAccess } from "@/lib/helpers-server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await requireActiveUser();
  if (
    !result ||
    !hasCourseAccess(result.profile, "/clasificacion-arancelaria")
  ) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen">
      <HeaderDashboardServer />
      <OfflineBanner />
      {/* Espacio para compensar el header fijo: h-16 (64px) móvil, h-20 (80px) desktop */}
      {/* El OfflineBanner está en top-20 cuando aparece, así que el padding ya lo cubre */}
      <main className="pt-16 lg:pt-20">
        <TooltipProvider>{children}</TooltipProvider>
      </main>
    </div>
  );
}
