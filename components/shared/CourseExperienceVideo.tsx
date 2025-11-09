"use client";

export function CourseExperienceVideo() {
  const videoId = "K0dY1qxZaqs";
  const videoTitle =
    "Experiencia del Curso de Llenado de Pedimento de Anexo 22";

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
            {videoTitle}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo vivieron nuestros estudiantes esta experiencia
            formativa única en el llenado de pedimentos aduaneros.
          </p>
        </div>

        <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/50 hover:shadow-3xl transition-all duration-300 group">
          {/* Contenedor del video con aspect ratio 16:9 estándar */}
          <div className="relative w-full aspect-video bg-black/5">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              width="100%"
              height="100%"
              className="absolute inset-0 rounded-2xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title={videoTitle}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
