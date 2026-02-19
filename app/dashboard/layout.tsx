import { requireActiveUser } from "@/lib/helpers-server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireActiveUser();
  return <>{children}</>;
}
