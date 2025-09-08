import HeaderDashboard from "@/components/shared/HeaderDashboard";
import { OfflineBanner } from "@/components/shared/OfflineBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderDashboard />
      <OfflineBanner />
      {children}
    </div>
  );
}
