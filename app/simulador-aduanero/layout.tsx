import { redirect } from "next/navigation";
import { HeaderDashboardServer } from "@/components/shared/HeaderDashboardServer";
import { OfflineBanner } from "@/components/shared/OfflineBanner";
import { requireActiveUser, hasCourseAccess } from "@/lib/helpers-server";

export default async function SimuladorAduaneroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await requireActiveUser();
  if (
    !result ||
    !hasCourseAccess(result.profile, "/simulador-aduanero")
  ) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen">
      <HeaderDashboardServer />
      <OfflineBanner />
      <main className="pt-16 lg:pt-20">{children}</main>
    </div>
  );
}
