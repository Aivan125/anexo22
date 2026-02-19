import { HeaderDashboardServer } from "@/components/shared/HeaderDashboardServer";
import { OfflineBanner } from "@/components/shared/OfflineBanner";
import { requireActiveUser } from "@/lib/helpers-server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireActiveUser();
  return (
    <div>
      <HeaderDashboardServer />
      <OfflineBanner />
      {children}
    </div>
  );
}
