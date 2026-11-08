/* Animaciones con GSAP + ScrollTrigger. Recibe las librerías como parámetros
   para poder usarse tanto desde React como desde una página estática. */
export function initAnimations(gsap: any, ScrollTrigger: any): () => void {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Entrada del hero
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from("[data-nav]", { yPercent: -100, duration: 0.6 })
      .from("[data-hero-title]", { yPercent: 40, opacity: 0, duration: 1, rotate: -1.5 }, "-=0.2")
      .from("[data-hero-info]", { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.6")
      .from("[data-hero-block]", { y: 60, opacity: 0, duration: 0.8 }, "-=0.6")
      .from("[data-sparkle]", { scale: 0, rotate: -90, duration: 0.7, ease: "back.out(2)" }, "-=0.4");

    // Barra de progreso de lectura
    gsap.to("[data-progress]", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.2 },
    });

    // Los títulos de sección y los proyectos aparecen al llegar a ellos
    ScrollTrigger.batch("[data-reveal]", {
      start: "top 92%",
      once: true,
      onEnter: (batch: any) =>
        gsap.from(batch, { y: 48, opacity: 0.15, duration: 0.8, stagger: 0.12, ease: "power3.out", clearProps: "transform,opacity" }),
    });
  });

  return () => {
    mm.revert();
    ScrollTrigger.getAll().forEach((t: any) => t.kill());
  };
}
