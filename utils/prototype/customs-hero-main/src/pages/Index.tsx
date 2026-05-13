import { SimulatorProvider, useSimulator } from "@/lib/simulator-context";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import SimulatorHeader from "@/components/SimulatorHeader";
import WelcomeScreen from "@/components/screens/WelcomeScreen";
import CaseFileScreen from "@/components/screens/CaseFileScreen";
import QuizScreen from "@/components/screens/QuizScreen";
import FormScreen from "@/components/screens/FormScreen";
import ResultScreen from "@/components/screens/ResultScreen";
import ControversyScreen from "@/components/screens/ControversyScreen";
import SummaryScreen from "@/components/screens/SummaryScreen";
import MaritimeJourney from "@/components/MaritimeJourney";

function SimulatorContent() {
  const { currentScreen, started, goNext, goBack, caseData } = useSimulator();

  // Pantalla de bienvenida ocupa todo: sin sidebar/header
  if (!started) return <WelcomeScreen />;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <SimulatorHeader />
          <main className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6">
            {currentScreen !== "validation" && currentScreen !== "summary" && (
              <MaritimeJourney variant={currentScreen === "case_file" ? "full" : "compact"} />
            )}
            {currentScreen === "case_file" && <CaseFileScreen />}
            {currentScreen === "analysis" && (
              <QuizScreen
                title="Análisis documental"
                subtitle="Repasa los conceptos clave del expediente. Pasa el cursor sobre los términos subrayados para ver su definición."
                questions={caseData.analysisQuestions}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {currentScreen === "decisions" && (
              <QuizScreen
                title="Toma de decisiones aduaneras"
                subtitle="Selecciona el método y los conceptos correctos para integrar el valor en aduana."
                questions={caseData.decisionQuestions}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {currentScreen === "pedimento_capture" && (
              <FormScreen
                title="Captura del pedimento"
                fields={caseData.pedimentoFields}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {currentScreen === "taxes" && (
              <FormScreen
                title="Cálculo de contribuciones"
                fields={caseData.taxFields}
                onNext={goNext}
                onBack={goBack}
              />
            )}
            {currentScreen === "controversy" && <ControversyScreen />}
            {currentScreen === "validation" && <ResultScreen />}
            {currentScreen === "summary" && <SummaryScreen />}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default function Index() {
  return (
    <SimulatorProvider>
      <SimulatorContent />
    </SimulatorProvider>
  );
}
