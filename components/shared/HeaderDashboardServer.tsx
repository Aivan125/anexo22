import { getUserWithProfile } from "@/lib/helpers-server";
import HeaderDashboard from "./HeaderDashboard";

export async function HeaderDashboardServer() {
  const result = await getUserWithProfile();
  const isAdmin = result?.profile.role === "admin";

  return <HeaderDashboard isAdmin={isAdmin} />;
}
