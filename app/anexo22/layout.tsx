import { HeaderDashboardServer } from "@/components/shared/HeaderDashboardServer";
import { OfflineBanner } from "@/components/shared/OfflineBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderDashboardServer />
      <OfflineBanner />
      {children}
    </div>
  );
}
