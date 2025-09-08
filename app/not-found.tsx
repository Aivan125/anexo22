import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Finance-themed background image using Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src="/not-found-background.jpg"
          alt="Fondo página no encontrada"
          fill
          priority
          className="object-cover object-center"
          style={{
            filter: "brightness(0.7) saturate(0.8)",
          }}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-md">
          <p className="rounded-sm bg-pink-400 px-3 py-1 text-xl font-medium text-white/80">
            404
          </p>

          <h1 className="mt-6 text-6xl font-bold tracking-tight sm:text-7xl">
            Página no encontrada
          </h1>

          <p className="mt-6 text-xl text-white/80">
            Lo sentimos, no pudimos encontrar la página que estabas buscando.
          </p>

          <Button asChild className="mt-10">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Ir a Inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
