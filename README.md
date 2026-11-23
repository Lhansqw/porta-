# Portafolio · Nicolas Ramos López

Next.js 14 (App Router) + TypeScript + Tailwind CSS, listo para publicar en Vercel.

## Secciones (un componente por sección, en el orden de `app/page.tsx`)
1. `Navbar`: fijo arriba, anclas, menú hamburguesa en celular y scroll suave
2. `Hero`: bienvenida con botón de descarga del CV (`public/cv.pdf`)
3. `About`: acerca de mí y datos personales
4. `Projects`: galería de proyectos con filtros
5. `Testimonials`: tres testimonios fijos
6. `Experience`: educación y experiencia académica y laboral
7. `Contact`: contacto con botón para copiar el correo
8. `Skills`: sección adicional de habilidades técnicas
9. `Footer`: pie de página

Los textos viven en `data/` (perfil, proyectos, experiencia, habilidades, testimonios), tipados con TypeScript.

## Ejecutar
    npm install
    npm run dev        # http://localhost:3000

## Personalizar
- Tu foto: copia el archivo a `public/images/foto.jpg` y pon `foto: "/images/foto.jpg"` en `data/perfil.ts`.
- Tu CV: `public/cv.pdf` se genera desde `cv/hoja-de-vida.html` (el comando está al principio de ese archivo).
- Universidad: edita `data/experience.ts`.

- Testimonios: edita `data/testimonials.ts` y pon las fotos en `public/images/testimonios`.

## Publicar en Vercel
    git init && git add . && git commit -m "Portafolio"
    git remote add origin https://github.com/Lhansqw/portafolio.git
    git push -u origin main
Luego en vercel.com: Add New > Project > importa el repositorio. Cada `git push` despliega de nuevo.
