import { useState } from "react";
import { useSimulator } from "@/lib/simulator-context";
import { GraduationCap, BookOpen, Target, Compass, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WelcomeScreen() {
  const { setStudentInfo, startExam, availableCases, caseKey, setCaseKey } = useSimulator();
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  const canStart = name.trim().length > 1 && group.trim().length > 0;

  const handleStart = () => {
    setStudentInfo(name.trim(), group.trim());
    startExam();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-[hsl(212_85%_16%)] text-primary-foreground">
      <div className="mx-auto grid min-h-screen max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Hero / contexto */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            <Sparkles className="h-3.5 w-3.5" /> ANMINCADISA · Simulador de práctica
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent shadow-lg">
                <GraduationCap className="h-7 w-7 text-accent-foreground" />
              </div>
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Simulador Básico de <br />
                <span className="text-accent">Operación Aduanera</span>
              </h1>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/80">
              Una experiencia práctica para que vivas, paso a paso, el flujo real de una operación
              de comercio exterior en México: desde el expediente del importador hasta el cálculo de
              contribuciones y la validación del pedimento.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Feature icon={Compass} title="Contexto general">
              Practicarás los regímenes aduaneros, valoración, clasificación arancelaria y determinación
              de contribuciones conforme a la Ley Aduanera mexicana.
            </Feature>
            <Feature icon={Target} title="Objetivo">
              Que el alumno integre el conocimiento técnico aduanal en una operación completa y reciba
              retroalimentación inmediata sobre cada decisión.
            </Feature>
            <Feature icon={ShieldCheck} title="Modo libre">
              Sin límite de tiempo ni de intentos. Navega entre pantallas, corrige y vuelve a calificar
              tantas veces como necesites.
            </Feature>
          </div>
        </div>

        {/* Tarjeta de inicio */}
        <div className="animate-fade-in rounded-2xl border border-accent/20 bg-card p-6 text-card-foreground shadow-2xl">
          <div className="mb-5 flex items-center gap-2 text-primary">
            <BookOpen className="h-4 w-4 text-accent" />
            <h2 className="text-base font-semibold">Comencemos tu práctica</h2>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-xs font-medium">Nombre del alumno</Label>
              <Input
                id="name"
                placeholder="Ej. Juan Pérez Hernández"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="group" className="text-xs font-medium">Grupo</Label>
              <Input
                id="group"
                placeholder="Ej. 6A"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="mt-1.5"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label className="text-xs font-medium">Selecciona el caso a practicar</Label>
            <div className="mt-2 grid gap-2">
              {availableCases.map((cb) => {
                const active = cb.key === caseKey;
                return (
                  <button
                    key={cb.key}
                    type="button"
                    onClick={() => setCaseKey(cb.key)}
                    className={
                      "flex items-start justify-between gap-2 rounded-lg border px-3 py-2 text-left text-xs transition-all " +
                      (active
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-card hover:border-accent/50 text-muted-foreground")
                    }
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{cb.shortLabel}</span>
                        {cb.isExample && (
                          <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-foreground">
                            Ejemplo
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {cb.route.from} → {cb.route.to} · {cb.mode}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-accent/20 bg-accent/5 p-3 text-xs leading-relaxed text-foreground/80">
            <strong className="text-primary">Tip:</strong> usa el menú lateral o las pestañas superiores
            para moverte entre pantallas en cualquier momento. Verás retroalimentación inmediata al responder.
          </div>

          <Button
            className="mt-5 w-full bg-accent text-accent-foreground hover:bg-accent/90"
            size="lg"
            disabled={!canStart}
            onClick={handleStart}
          >
            Iniciar simulador →
          </Button>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 backdrop-blur">
      <Icon className="mb-2 h-5 w-5 text-accent" />
      <p className="text-xs font-semibold text-primary-foreground">{title}</p>
      <p className="mt-1 text-[11px] leading-relaxed text-primary-foreground/70">{children}</p>
    </div>
  );
}
