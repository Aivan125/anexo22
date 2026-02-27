import { redirect } from "next/navigation";
import { PortalCard } from "@/components/dashboard/portal-card";
import { TestimonialManager } from "@/components/testimonials/TestimonialManager";
import type { Metadata } from "next";
import { getUserWithProfile } from "@/lib/helpers-server";
import { getMyTestimonials } from "@/lib/actions/testimonialActions";

export const metadata: Metadata = {
  title: "Dashboard - Plataforma ANMIN-CADISA",
  description:
    "Portal de acceso a las herramientas de formación y clasificación arancelaria",
};

const ANEXO22_CARD = {
  slug: "anexo22" as const,
  title: "Curso Anexo 22",
  description:
    "Domina el llenado correcto de pedimentos aduanales con nuestra plataforma interactiva. Aprende paso a paso y evita errores costosos.",
  features: [
    "Guía paso a paso del proceso completo",
    "Validación de campos en tiempo real",
    "Prevención de multas y sanciones",
    "Casos prácticos reales y actualizados",
  ],
  href: "/anexo22",
  iconName: "FileText" as const,
  gradientFrom: "#3b82f6",
  gradientTo: "#6366f1",
  glowColor: "#3b82f6",
  delay: 100,
};

const CLASIFICACION_CARD = {
  slug: "clasificacion-arancelaria" as const,
  title: "Explorador LIGIE",
  description:
    "Navega y explora la Ley de Impuestos Generales de Importación y Exportación. Encuentra clasificaciones, notas legales y casos prácticos.",
  features: [
    "Buscador inteligente de clasificaciones",
    "Notas legales y explicativas completas",
    "Casos prácticos de clasificación real",
    "Navegación jerárquica intuitiva",
  ],
  href: "/clasificacion-arancelaria",
  iconName: "Search" as const,
  gradientFrom: "oklch(0.63 0.13 180)",
  gradientTo: "oklch(0.5 0.15 200)",
  glowColor: "oklch(0.63 0.13 180)",
  delay: 200,
};

const COURSE_CARDS = [ANEXO22_CARD, CLASIFICACION_CARD];

export default async function DashboardPage() {
  const result = await getUserWithProfile();
  if (!result) {
    redirect("/login");
  }

  const enrolledSet = new Set(result.profile.enrolledCourseSlugs ?? []);
  const isAdmin = result.profile.role === "admin";
  const enrolledCards = isAdmin
    ? COURSE_CARDS
    : COURSE_CARDS.filter((card) => enrolledSet.has(card.slug));

  const testimonialsResult = await getMyTestimonials();
  const testimonials = testimonialsResult.ok ? testimonialsResult.data : [];
  const enrolledCourseSlugs = result.profile.enrolledCourseSlugs ?? [];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dark background with ambient gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Ambient light effects */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--turquoise)]/20 via-transparent to-transparent" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <main
        id="main-content"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
      >
        <div className="w-full max-w-7xl">
          {/* Welcome Header */}
          <header className="text-center mb-8 sm:mb-12 animate-in fade-in slide-in-from-top-4 duration-700 motion-reduce:animate-none">
            <h1
              id="portal-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4"
            >
              Bienvenido a la Plataforma
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Accede a las herramientas de formación y clasificación arancelaria
              diseñadas para tu éxito profesional
            </p>
          </header>

          {/* Portal Cards Grid or No Courses Message */}
          {enrolledCards.length > 0 ? (
            <section
              aria-labelledby="portal-heading"
              className="space-y-6 sm:space-y-8 lg:space-y-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {enrolledCards.map((card) => (
                  <PortalCard
                    key={card.slug}
                    title={card.title}
                    description={card.description}
                    features={card.features}
                    href={card.href}
                    iconName={card.iconName}
                    gradientFrom={card.gradientFrom}
                    gradientTo={card.gradientTo}
                    glowColor={card.glowColor}
                    delay={card.delay}
                  />
                ))}
              </div>

              {/* Tus reseñas card */}
              <div
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 transition-[border-color,box-shadow] duration-500 hover:border-white/20"
                aria-labelledby="testimonios-heading"
              >
                <h2
                  id="testimonios-heading"
                  className="text-xl sm:text-2xl font-bold text-white mb-4"
                >
                  Tus reseñas
                </h2>
                <p className="text-sm text-white/60 mb-6">
                  Comparte tu experiencia con los cursos. Tu reseña será
                  revisada antes de publicarse.
                </p>
                <TestimonialManager
                  testimonials={testimonials}
                  enrolledCourseSlugs={enrolledCourseSlugs}
                />
              </div>
            </section>
          ) : (
            <section
              aria-labelledby="portal-heading"
              className="space-y-6 sm:space-y-8"
            >
              <div className="text-center rounded-xl border border-white/10 bg-white/5 p-8 sm:p-12">
                <p className="text-lg sm:text-xl text-white/80 mb-2">
                  No tienes cursos asignados.
                </p>
                <p className="text-base text-white/60">
                  Contacta al administrador para que te asigne acceso a los
                  cursos disponibles.
                </p>
              </div>
              <div
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8"
                aria-labelledby="testimonios-heading"
              >
                <h2
                  id="testimonios-heading"
                  className="text-xl sm:text-2xl font-bold text-white mb-4"
                >
                  Tus reseñas
                </h2>
                <TestimonialManager
                  testimonials={testimonials}
                  enrolledCourseSlugs={enrolledCourseSlugs}
                />
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
