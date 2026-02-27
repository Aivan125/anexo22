import Header from "@/components/shared/Header";
import { CourseExperienceVideo } from "@/components/shared/CourseExperienceVideo";
import { HeroSection, HERO_IS_DARK } from "@/components/landing/HeroSection";
import { ServiciosSection } from "@/components/landing/ServiciosSection";
import { SimuladoresSection } from "@/components/landing/SimuladoresSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { getPublishedTestimonials } from "@/lib/actions/testimonialActions";
import { MetodologiaSection } from "@/components/landing/MetodologiaSection";
import { InstructorSection } from "@/components/landing/InstructorSection";
import { InscripcionesSection } from "@/components/landing/InscripcionesSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default async function LandingPage() {
  const testimonialsResult = await getPublishedTestimonials();
  const testimonials = testimonialsResult.ok
    ? testimonialsResult.data
    : undefined;

  return (
    <div className="min-h-screen mx-auto bg-background">
      <Header heroDark={HERO_IS_DARK} />
      <main id="main-content">
        <HeroSection />
        <ServiciosSection />
        <SimuladoresSection />
        <TestimonialsSection testimonials={testimonials} />
        <MetodologiaSection />

        {/* Course Experience Video Section */}
        <CourseExperienceVideo />

        <InstructorSection />

        <InscripcionesSection />

        <FinalCTASection />

        <LandingFooter />
      </main>
    </div>
  );
}
