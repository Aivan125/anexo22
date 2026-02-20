"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DynamicClientButton from "./DynamicClientButton";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para scroll suave a las secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false); // Cerrar menú móvil después del click
  };

  const navigationItems = [
    { label: "Qué hacemos", sectionId: "servicios" },
    { label: "Simuladores", sectionId: "simuladores" },
    { label: "Metodología", sectionId: "metodologia" },
    { label: "Instructor", sectionId: "instructor" },
    { label: "Inscripciones", sectionId: "inscripciones" },
  ];

  const buttonClassName =
    "bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-12 shrink-0">
              <Image
                src="/logos/logo oficial.png"
                alt="ANMIN-CADISA"
                fill
                sizes="40px"
                className={cn(
                  "object-contain transition-all duration-300",
                  !isScrolled && "brightness-0 invert",
                )}
              />
            </div>
            <div className="flex flex-col items-start">
              <span
                className={cn(
                  "font-extrabold text-lg tracking-tight leading-none",
                  isScrolled ? "text-slate-900" : "text-white",
                )}
              >
                ANMIN
              </span>
              <span
                className={cn(
                  "font-bold text-sm tracking-widest leading-none",
                  isScrolled ? "text-accent-foreground" : "text-primary",
                )}
              >
                CADISA
              </span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={cn(
                  "font-medium text-sm transition-colors",
                  isScrolled
                    ? "text-slate-600 hover:text-primary hover:underline underline-offset-4 decoration-2 decoration-primary/50"
                    : "text-slate-300 hover:text-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden sm:flex items-center">
            <DynamicClientButton
              TextWhenUser="Entrar"
              TextWhenNotUser="Iniciar Sesión"
              buttonClassName={buttonClassName}
            />
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <X
                className={cn(
                  "h-6 w-6 transition-colors",
                  isScrolled ? "text-slate-900" : "text-white",
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6 transition-colors",
                  isScrolled ? "text-slate-900" : "text-white",
                )}
              />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-slate-200/50">
              {navigationItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <DynamicClientButton
                  TextWhenUser="Entrar"
                  TextWhenNotUser="Iniciar Sesión"
                  buttonClassName="w-full justify-center"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
