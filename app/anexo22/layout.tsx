import { redirect } from "next/navigation";
import { HeaderDashboardServer } from "@/components/shared/HeaderDashboardServer";
import { OfflineBanner } from "@/components/shared/OfflineBanner";
import { requireActiveUser, hasCourseAccess } from "@/lib/helpers-server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await requireActiveUser();
  if (!result || !hasCourseAccess(result.profile, "/anexo22")) {
    redirect("/dashboard");
  }
  return (
    <div>
      <HeaderDashboardServer />
      <OfflineBanner />
      {children}
    </div>
  );
}
