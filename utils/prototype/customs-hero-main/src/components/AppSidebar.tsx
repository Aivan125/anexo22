import { useSimulator } from "@/lib/simulator-context";
import { SCREEN_IDS, SCREEN_TITLES } from "@/lib/simulator-data";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, FileText, Search, Scale, ClipboardList, Calculator, CheckCircle2, GraduationCap, Gavel, BookOpenCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ElementType> = {
  welcome: Home,
  case_file: FileText,
  analysis: Search,
  decisions: Scale,
  pedimento_capture: ClipboardList,
  taxes: Calculator,
  controversy: Gavel,
  validation: CheckCircle2,
  summary: BookOpenCheck,
};

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { currentScreen, goToScreen, finished } = useSimulator();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sidebar-primary">
            <GraduationCap className="h-4 w-4 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold tracking-wider text-sidebar-primary">ANMINCADISA</span>
              <span className="text-[10px] text-sidebar-foreground/70">Simulador aduanal</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pantallas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SCREEN_IDS.map((id) => {
                const Icon = ICONS[id] ?? FileText;
                const isActive = id === currentScreen;
                const isResult = id === "validation" || id === "summary";
                const enabled = !isResult || finished;
                return (
                  <SidebarMenuItem key={id}>
                    <SidebarMenuButton
                      onClick={() => enabled && goToScreen(id)}
                      isActive={isActive}
                      className={cn(!enabled && "opacity-40 cursor-not-allowed")}
                      tooltip={SCREEN_TITLES[id]}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{SCREEN_TITLES[id]}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="border-t border-sidebar-border p-3">
          <p className="text-[10px] leading-relaxed text-sidebar-foreground/60">
            Modo práctica · Puedes navegar libremente y reiniciar cuando quieras.
          </p>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
