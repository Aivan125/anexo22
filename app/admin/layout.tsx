import { HeaderDashboardServer } from "@/components/shared/HeaderDashboardServer";
import { OfflineBanner } from "@/components/shared/OfflineBanner";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { requireAdmin } from "@/lib/helpers-server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-blue-100/50">
      <HeaderDashboardServer />
      <OfflineBanner />
      <div className="flex min-h-screen pt-16 lg:pt-20">
        <AdminSidebar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
