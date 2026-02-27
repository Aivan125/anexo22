# Propuesta de Feature: UI/UX Sistema de Testimoniales

## 1. Visión General (Contexto para Cursor)

**Objetivo:** Implementar la interfaz de usuario para un sistema de testimoniales de la plataforma educativa "ANMIN-CADISA" (Comercio Exterior).
La experiencia visual consta de dos partes principales:

1. **Área Privada (Dashboard del Alumno):** Interfaz para escribir, previsualizar, editar y eliminar su reseña.
2. **Área Pública (Landing Page):** Una sección de UI altamente atractiva y animada ("Infinite Marquee") que muestra los testimoniales para generar "Social Proof".

**Estilo UI/UX del Proyecto:**

- **Tema:** Dark mode (`bg-slate-900`, `bg-slate-800`, `bg-slate-950`).
- **Acentos:** Colores Teal (`teal-500`, `teal-400`) y Cyan (`cyan-400`).
- **Efectos:** Glassmorphism (fondos semi-transparentes, blur, bordes sutiles `border-white/10`), glows e iluminación sutil.
- **Tipografía:** Sans-serif moderna con títulos pesados (`font-display` gruesa).
- **Iconografía:** `lucide-react`.

---

## 2. Experiencia de Usuario: Área Privada (Panel del Alumno)

**Objetivo:** Una interfaz limpia e intuitiva dentro del panel del estudiante para gestionar su reseña.

- **Estado 1: Creación (Empty State):**
  - Formulario UI minimalista.
  - **Selector de estrellas interactivo:** 5 estrellas vacías que se llenan al hacer `hover` o `click` (usando iconos de Lucide-react con color `teal-400`).
  - `Textarea` para la reseña con contador de caracteres.
  - Botón principal con estilo de la marca ("Enviar Testimonio").
- **Estado 2: Previsualización (Testimonio Enviado):**
  - Si el usuario ya dejó un testimonio, en lugar del formulario, debe ver una tarjeta o contenedor mostrando su texto y calificación.
  - **Badges de Estado:** Etiquetas visuales para indicar si el testimonio está "En revisión" (amarillo/naranja) o "Publicado" (verde/teal).
- **Estado 3: Edición y Eliminación:**
  - Botones secundarios o de icono (Editar/Eliminar) junto a la previsualización.
  - **Modal de Confirmación:** Un Dialog/Alert (preferiblemente estilo Radix/Shadcn) animado y limpio para confirmar la eliminación ("¿Estás seguro de que deseas eliminar tu testimonio?").

---

## 3. Experiencia de Usuario: Área Pública (Landing Page)

**Componente:** `<TestimonialsSection />`
**Objetivo:** Una sección "súper llamativa, divertida y con animaciones" que encaje con el Hero y la sección de Simuladores.

- **Fondo y Cabecera:**
  - Contenedor Dark (`bg-slate-900`) con un brillo radial de fondo para dar profundidad (`bg-teal-600/10 blur-[120px]`).
  - Título llamativo: "Nuestros alumnos ya están dominando la aduana" (con degradados de texto).
- **Animación Carrusel Infinito (Marquee):**
  - Dos filas de tarjetas (Cards) moviéndose de forma continua e infinita.
  - La Fila 1 se mueve hacia la izquierda (`animate-marquee`).
  - La Fila 2 se mueve hacia la derecha (`animate-marquee-reverse`).
  - **Micro-interacción:** Al hacer `hover` en el área del carrusel, la animación de toda la fila se pausa fluidamente (`hover:[animation-play-state:paused]`).
  - Gradientes laterales (de `slate-900` a transparente) en los bordes del contenedor para que las tarjetas parezca que "aparecen" y "desaparecen" de la nada.
- **Testimonial Card (Glassmorphism):**
  - Fondo semi-transparente (`bg-slate-800/40 backdrop-blur-md`).
  - **Efecto Hover en Card:** Al pasar el ratón, la tarjeta individual se eleva ligeramente (`-translate-y-2`), su fondo se oscurece un poco y el borde emite un brillo (`hover:border-teal-500/30 shadow-[0_8px_30px_rgba(20,184,166,0.15)]`).
  - **Elementos Internos:**
    1. Icono de `<Quote />` grande y con baja opacidad de fondo (decorativo, rotado levemente).
    2. Calificación (5 estrellas llenas o vacías según la data).
    3. Texto del testimonio (tipografía legible, text-slate-300).
    4. Avatar generado dinámicamente con la inicial del usuario en un círculo con gradiente (`bg-gradient-to-br from-teal-500 to-cyan-600`).
    5. Nombre y Rol del usuario.
    6. **Badge del curso:** Una etiqueta pequeña (ej. `bg-slate-900/50 text-teal-300 ring-1 ring-teal-500/20`) que indica si el testimonio es del "Simulador de Pedimento" o de "Clasificación Arancelaria".

---

## 4. Instrucciones de Ejecución Frontend (Para Cursor)

Por favor, implementa esta interfaz siguiendo este orden:

1.  **Tailwind Config:** Añade los `keyframes` para las animaciones `marquee` y `marquee-reverse` en el archivo de configuración de Tailwind.
2.  **Mock Data:** Crea un array constante con al menos 6-8 testimoniales de prueba (incluyendo nombre, rol, curso, texto, calificación inicial) para poder visualizar el diseño de inmediato.
3.  **UI Landing Page:** Construye el componente `<TestimonialsSection />` y `<TestimonialCard />` implementando la animación de doble carrusel y los efectos de "glassmorphism" y glows solicitados.
4.  **UI Dashboard del Alumno:** Crea los componentes del cliente (`"use client"`) para el formulario interactivo de reseñas. Asegúrate de implementar la lógica visual de las estrellas interactivas (hover/click para seleccionar calificación) y los modales/estados de previsualización.
