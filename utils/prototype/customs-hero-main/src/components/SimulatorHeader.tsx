import { useSimulator } from "@/lib/simulator-context";
import { SCREEN_IDS, SCREEN_TITLES } from "@/lib/simulator-data";
import { RotateCcw, Send, FolderOpen, Undo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export default function SimulatorHeader() {
  const { studentName, group, currentScreen, started, finished, resetSimulator, submitExam, goToScreen, resumeScreen, resumeToLast } = useSimulator();

  if (!started) return null;

  const currentIdx = SCREEN_IDS.indexOf(currentScreen);
  const progress = finished ? 100 : Math.round((currentIdx / (SCREEN_IDS.length - 1)) * 100);
  const visibleSteps = SCREEN_IDS.slice(1);

  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <div className="hidden flex-col sm:flex">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">ANMINCADISA</span>
            <span className="text-[11px] text-muted-foreground">
              {studentName} {group && `· ${group}`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {currentScreen !== "case_file" && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToScreen("case_file")}
              className="border-accent/40 text-accent hover:bg-accent/10 hover:text-accent"
            >
              <FolderOpen className="mr-1.5 h-3.5 w-3.5" />
              <span className="hidden sm:inline">Ver expediente</span>
              <span className="sm:hidden">Expediente</span>
            </Button>
          )}
          {currentScreen === "case_file" && resumeScreen && (
            <Button
              variant="outline"
              size="sm"
              onClick={resumeToLast}
              className="border-primary/40 text-primary hover:bg-primary/10"
            >
              <Undo2 className="mr-1.5 h-3.5 w-3.5" />
              <span className="hidden sm:inline">Volver donde me quedé</span>
              <span className="sm:hidden">Continuar</span>
            </Button>
          )}
          <Button variant="ghost" size="sm" onClick={resetSimulator}>
            <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Reiniciar
          </Button>
          {!finished && (
            <Button
              size="sm"
              onClick={submitExam}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Send className="mr-1.5 h-3.5 w-3.5" /> Calificar
            </Button>
          )}
        </div>
      </div>

      <div className="h-1 bg-muted">
        <div className="h-full bg-accent transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <nav className="flex items-center gap-1 overflow-x-auto px-3 py-2">
        {visibleSteps.map((id) => {
          const isActive = id === currentScreen;
          const isDone = SCREEN_IDS.indexOf(id) < currentIdx;
          return (
            <button
              key={id}
              onClick={() => goToScreen(id)}
              className={cn(
                "whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-medium transition-all",
                isActive && "border-primary bg-primary text-primary-foreground",
                isDone && !isActive && "border-accent/40 bg-accent/10 text-foreground hover:bg-accent/20",
                !isActive && !isDone && "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {SCREEN_TITLES[id]}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
