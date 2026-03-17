import type { Metadata } from "next";
import { HomeContent } from "@/components/clasificacion-arancelaria/shared/home-content";
import { ClassVideos } from "@/components/shared/ClassVideos";
import { getPermittedVideos, getUserWithProfile } from "@/lib/helpers-server";

export const metadata: Metadata = {
  title: "Clasificación Arancelaria",
  description:
    "Explora la LIGIE y aprende clasificación arancelaria con casos prácticos de ANMINCADISA",
};

export default async function ClasificacionArancelariaPage() {
  const userWithProfile = await getUserWithProfile();
  const permittedVideos = userWithProfile
    ? await getPermittedVideos(
        userWithProfile.user.id,
        "clasificacion-arancelaria",
      )
    : [];

  return (
    <>
      <HomeContent />
      {userWithProfile && (
        <section className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
          <div className="text-center mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold text-foreground"
              style={{ color: "var(--turquoise)" }}
            >
              Videos de la Clase
            </h2>
          </div>
          <ClassVideos videos={permittedVideos} />
        </section>
      )}
      <footer className="border-t border-border mt-12 sm:mt-16 py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-muted-foreground space-y-2">
          <p className="font-semibold text-foreground">ANMINCADISA</p>
          <p>Simulador de Clasificación Arancelaria</p>
        </div>
      </footer>
    </>
  );
}
