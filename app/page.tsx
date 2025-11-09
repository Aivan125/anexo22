import CallToAction from "@/components/shared/CallToAction";
import Header from "@/components/shared/Header";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle,
  Clock,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/photo1.jpg";

export default function AnexoLandingPage() {
  return (
    <div className="min-h-screen  mx-auto bg-background">
      <Header />
      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary/5 to-card/50 pt-32 pb-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="secondary"
                className="bg-primary text-primary-foreground"
              >
                ANMIN-CADISA
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Curso de Llenado de Pedimento en México
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Domina el{" "}
                  <span className="font-semibold text-primary">Anexo 22</span> y
                  presenta tus operaciones aduanales con total confianza.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CallToAction showIcon />
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-card rounded-2xl shadow-2xl max-w-2xl mx-auto aspect-video overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Curso de Llenado de Pedimento en México"
                  fill
                  className="rounded-lg object-cover"
                  placeholder="blur"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              ¿La complejidad del Anexo 22 te genera inseguridad?
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty">
              La falta de dominio del pedimento causa confusión, miedo a cometer
              errores y, en el peor de los casos, pérdidas económicas y
              operativas. Este curso resuelve esos problemas de raíz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardHeader>
                <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
                <CardTitle className="text-2xl">
                  Evita Errores Costosos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un campo mal llenado puede derivar en multas, sanciones y
                  auditorías que afectan la rentabilidad.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">
                  Agiliza tus Operaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La documentación incorrecta es la principal causa de retrasos
                  en el despacho aduanero.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Impulsa tu Carrera</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  La falta de experiencia práctica en el llenado es una barrera
                  para tu crecimiento profesional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
              ¿Qué Lograrás con Este Curso?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4 p-6">
              <CheckCircle className="w-10 h-10 text-primary mb-2" />
              <h3 className="text-2xl font-bold">Llenar Pedimentos Reales</h3>
              <p className="text-muted-foreground text-lg">
                Aprenderás a llenar pedimentos válidos para operaciones de
                importación y exportación, comprendiendo el fundamento de cada
                campo.
              </p>
            </div>
            <div className="space-y-4 p-6">
              <Briefcase className="w-10 h-10 text-primary mb-2" />
              <h3 className="text-2xl font-bold">Aumentar tu Empleabilidad</h3>
              <p className="text-muted-foreground text-lg">
                Te convertirás en un candidato más competitivo para agencias
                aduanales y empresas IMMEX que valoran el conocimiento práctico.
              </p>
            </div>
            <div className="space-y-4 p-6">
              <Target className="w-10 h-10 text-primary mb-2" />
              <h3 className="text-2xl font-bold">Presentar Operaciones</h3>
              <p className="text-muted-foreground text-lg">
                Obtendrás la confianza y la capacidad para gestionar y presentar
                operaciones por tu cuenta (si aplica a tu rol).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Temario Section */}
      <section id="temario" className="py-20 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
              Nuestro Temario: De la Teoría a la Práctica Real
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <Card className="text-sm lg:text-lg">
              <CardHeader className="text-center">
                <Badge className="mx-auto w-fit text-lg lg:text-xl">
                  Módulo 1
                </Badge>
                <CardTitle className="pt-2">
                  Introducción al Pedimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Estructura general, campos obligatorios y normativa vigente.
                </p>
                <p className="mt-4 font-semibold text-lg text-primary">
                  Entregable: Infografía + Video resumen.
                </p>
              </CardContent>
            </Card>
            <Card className="text-sm lg:text-lg">
              <CardHeader className="text-center">
                <Badge className="mx-auto w-fit text-lg lg:text-xl">
                  Módulo 2
                </Badge>
                <CardTitle className="pt-2">Anexo 22 y Catálogos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Identificadores, claves y cómo consultar el Anexo 22
                  actualizado.
                </p>
                <p className="mt-4 font-semibold text-lg text-primary">
                  Entregable: Catálogo interactivo + Checklist legal.
                </p>
              </CardContent>
            </Card>
            <Card className="text-sm lg:text-lg">
              <CardHeader className="text-center">
                <Badge className="mx-auto w-fit text-lg lg:text-xl">
                  Módulo 3
                </Badge>
                <CardTitle className="pt-2">Casos Prácticos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ejercicios de exportación e importación definitiva con
                  incrementables.
                </p>
                <p className="mt-4 font-semibold text-lg text-primary">
                  Entregable: Plantillas de práctica.
                </p>
              </CardContent>
            </Card>
            <Card className="text-sm lg:text-lg">
              <CardHeader className="text-center">
                <Badge className="mx-auto w-fit text-lg lg:text-xl">
                  Módulo 4
                </Badge>
                <CardTitle className="pt-2">Validación y Errores</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Simulación de captura, validación en VUCEM y PECA.</p>
                <p className="mt-4 font-semibold text-lg text-primary">
                  Entregable: Guía de errores comunes + Simulación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <Image
                src="/foto-perfil.jpeg"
                alt="Dr. Luis Alejandro Rodríguez Cruz"
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square mx-auto shadow-2xl"
              />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <Badge
                variant="secondary"
                className="text-lg bg-primary text-primary-foreground font-bold"
              >
                Conoce a tu Instructor
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Dr. Luis Alejandro Rodríguez Cruz
              </h2>
              <p className="text-lg xl:text-xl text-muted-foreground">
                Fundador de <strong>ANMIN-CADISA</strong> y diseñador académico
                apasionado por el comercio exterior. Con una sólida trayectoria
                desde la Licenciatura hasta el Doctorado en Relaciones
                Internacionales, el Dr. Rodríguez ha dedicado su carrera a
                dominar y enseñar las complejidades de la legislación aduanera
                con un enfoque 100% práctico.
              </p>
              <ul className="space-y-4 text-lg xl:text-xl">
                <li className="flex items-start gap-4">
                  <GraduationCap className="h-8 w-8 flex-shrink-0 mt-1 text-foreground" />
                  <div>
                    <h4 className="font-semibold">
                      Formación Académica de Alto Nivel
                    </h4>
                    <p className="text-muted-foreground">
                      Doctorado, Maestría y Licenciatura en Relaciones
                      Internacionales, con especialización en Comercio Exterior.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Award className="h-8 w-8 flex-shrink-0 mt-1 text-foreground" />
                  <div>
                    <h4 className="font-semibold">Certificaciones Clave</h4>
                    <p className="text-muted-foreground">
                      Certificado en Normativa Aduanera, VUCEM y estándar
                      CONOCER para impartición de cursos y consultoría.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Briefcase className="h-8 w-8 flex-shrink-0 mt-1 text-foreground" />
                  <div>
                    <h4 className="font-semibold">Experiencia Práctica</h4>
                    <p className="text-muted-foreground">
                      Experto en clasificación arancelaria, legislación aduanera
                      y estratega de operaciones de comercio exterior.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 
        // TODO: Testimonials Section - Descomentar cuando haya testimonios disponibles
        <section id="testimonios" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-6">
                Lo que Dicen <span className="text-primary">Nuestros Alumnos</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg italic">
                    &ldquo;Aquí va el testimonio de un alumno feliz. Debe ser específico y enfocado en los resultados.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Nombre del Alumno</p>
                      <p className="text-sm text-muted-foreground">
                        Puesto del Alumno
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      */}

      {/* Pricing Section */}
      <section id="inscripciones" className="py-20 px-4 ">
        <div className="max-w-4xl mx-auto ">
          <Card className="p-8 lg:p-12 shadow-2xl border-2 border-primary/20 bg-primary/90">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl lg:text-4xl font-bold mb-4 text-primary-foreground">
                Inscríbete a la Próxima Generación
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 gap-6 text-lg text-primary-foreground md:grid-cols-2 md:gap-x-8 xl:text-xl">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                  <p>
                    <strong>Modalidad:</strong> Híbrido
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                  <p>
                    <strong>Duración:</strong> 8 horas (2 sesiones)
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                  <p>
                    <strong>Generaciones:</strong> Cada 6 semanas
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
                  <Award className="h-6 w-6 text-primary-foreground" />
                  <p>
                    <strong>Acceso:</strong> 1 mes a grabaciones
                  </p>
                </div>
              </div>
              <p className="text-center text-primary-foreground/90 text-xl">
                Los detalles de precio y fechas exactas se publicarán pronto.
                ¡Asegura tu lugar!
              </p>
              <div className="text-center space-y-4 w-full ">
                <CallToAction
                  showIcon={false}
                  className=" w-full lg:w-1/2 mx-auto p-6"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lead Magnet Section */}
      {/* <section id="lead-magnet" className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
            Empieza a Aprender Hoy (Gratis)
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Obtén una plantilla editable del pedimento y un checklist de
            documentos previos a la validación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Button size="lg" className="text-lg flex-1">
              <Download className="w-5 h-5 mr-2" />
              Descargar Recursos Gratuitos
            </Button>
          </div>
        </div>
      </section> */}

      {/* Final CTA & Support Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance mb-8">
            ¿Listo para ser el experto en pedimentos que tu empresa necesita?
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/90 text-pretty">
            Gana la seguridad y el conocimiento para optimizar cada operación.
          </p>
          <div className="text-center space-y-4 w-full">
            <CallToAction
              showIcon={false}
              className="w-full md:w-1/2 mx-auto p-6"
              text="Sí, Quiero Inscribirme Ahora"
            />
          </div>
        </div>
      </section>

      <footer className="bg-background border-t py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4">ANMIN-CADISA</h3>
            <p className="text-muted-foreground">
              Formación práctica para profesionales del comercio exterior.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-muted-foreground">
              <a
                href="mailto:anmincadisa@gmail.com"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>anmincadisa@gmail.com</span>
              </a>
              <a
                href="https://wa.me/8119842416"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>811-984-2416</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/anmin_cadisa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/anmincadisa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              {/* <a
                href="https://www.linkedin.com/in/alejandro-rodriguez-cruz-b440aa7b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a> */}
              <a
                href="https://www.tiktok.com/@anmincadisaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 50 50"
                  className="size-6"
                >
                  <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z"></path>
                </svg>
              </a>
              <a
                href="https://wa.me/8119842416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} ANMIN-CADISA. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
