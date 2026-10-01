"use client";

import { useEffect, useRef, type ReactNode } from "react";

type HeroSectionTransitionProps = {
  hero: ReactNode;
  children: ReactNode;
};

export function HeroSectionTransition({ hero, children }: HeroSectionTransitionProps) {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateProgress = () => {
      stage.dataset.motion = reducedMotion.matches ? "reduced" : "active";
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reducedMotion.matches) {
          stage.style.setProperty("--transition-progress", "1");
          return;
        }

        const heroHeight = (stage.firstElementChild as HTMLElement | null)?.offsetHeight ?? window.innerHeight;
        const distance = Math.max(heroHeight * (window.innerWidth <= 760 ? 0.82 : 1), 1);
        const progress = Math.min(Math.max(-stage.getBoundingClientRect().top / distance, 0), 1);
        const eased = progress * progress * (3 - 2 * progress);
        stage.style.setProperty("--transition-progress", progress.toFixed(4));
        stage.style.setProperty("--transition-shape", eased.toFixed(4));
        const reveal = (start: number, end: number) =>
          Math.min(Math.max((progress - start) / (end - start), 0), 1).toFixed(4);
        stage.style.setProperty("--reveal-eyebrow", reveal(0.34, 0.5));
        stage.style.setProperty("--reveal-heading", reveal(0.4, 0.58));
        stage.style.setProperty("--reveal-copy", reveal(0.48, 0.68));
        for (let index = 0; index < 4; index += 1) {
          const start = 0.56 + index * 0.065;
          stage.style.setProperty(`--reveal-service-${index + 1}`, reveal(start, start + 0.16));
        }
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    reducedMotion.addEventListener("change", updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      reducedMotion.removeEventListener("change", updateProgress);
    };
  }, []);

  return (
    <div className="hero-section-transition" ref={stageRef}>
      <div className="hero-section-transition__hero">{hero}</div>
      <div className="hero-section-transition__surface">{children}</div>
    </div>
  );
}
