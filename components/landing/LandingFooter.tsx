"use client";

import Link from "next/link";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/anmin_cadisa/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/anmincadisa",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.tiktok.com/@anmincadisaa",
    label: "TikTok",
    icon: TikTokIcon,
  },
  {
    href: "https://wa.me/528119842416",
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
] as const;

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      className={className}
      aria-hidden
    >
      <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z" />
    </svg>
  );
}

export function LandingFooter() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 lg:pt-24 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 text-center md:text-left">
        {/* Columna 1: Marca */}
        <div>
          <h3 className="text-white font-extrabold text-2xl tracking-tight mb-4">
            ANMIN-CADISA
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Formación práctica y herramientas avanzadas para profesionales del
            comercio exterior y aduanas.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-6">Contacto</h3>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <a
              href="mailto:anmincadisa@gmail.com"
              className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
            >
              <Mail className="w-5 h-5 shrink-0 transition-colors group-hover:text-primary" />
              <span>anmincadisa@gmail.com</span>
            </a>
            <a
              href="https://wa.me/528119842416"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
            >
              <Phone className="w-5 h-5 shrink-0 transition-colors group-hover:text-primary" />
              <span>811-984-2416</span>
            </a>
          </div>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <h3 className="text-white font-semibold mb-6">Síguenos</h3>
          <div className="flex items-center justify-center md:justify-start gap-4">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-primary hover:text-slate-950 hover:border-primary transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                aria-label={item.label}
              >
                {item.icon === WhatsAppIcon ? (
                  <WhatsAppIcon />
                ) : (
                  <item.icon className="w-5 h-5" aria-hidden />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} ANMIN-CADISA. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-6 text-sm">
          <Link
            href="#"
            className="text-slate-500 hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
          >
            Aviso de Privacidad
          </Link>
          <Link
            href="#"
            className="text-slate-500 hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded"
          >
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
