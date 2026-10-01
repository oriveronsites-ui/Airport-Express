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
    const header = document.querySelector<HTMLElement>(".site-header.is-home");
    let frame = 0;
    let headerIsScrolled: boolean | null = null;
    let motionMode: string | null = null;
    const renderedStyles = new Map<string, string>();

    const setStyleIfChanged = (name: string, value: string) => {
      if (renderedStyles.get(name) === value) return;
      renderedStyles.set(name, value);
      stage.style.setProperty(name, value);
    };

    const renderProgress = () => {
      frame = 0;
      const nextMotionMode = reducedMotion.matches ? "reduced" : "active";
      if (motionMode !== nextMotionMode) {
        motionMode = nextMotionMode;
        stage.dataset.motion = nextMotionMode;
      }
      const scrollY = window.scrollY;

      if (headerIsScrolled === null) {
        headerIsScrolled = scrollY > 28;
      } else if (headerIsScrolled ? scrollY < 18 : scrollY > 38) {
        headerIsScrolled = !headerIsScrolled;
      }
      const nextHeaderState = String(headerIsScrolled);
      if (header && header.dataset.scrolled !== nextHeaderState) {
        header.setAttribute("data-scrolled", nextHeaderState);
      }

      if (reducedMotion.matches) {
        setStyleIfChanged("--transition-progress", "1");
        return;
      }

      const rect = stage.getBoundingClientRect();
      const heroHeight = (stage.firstElementChild as HTMLElement | null)?.offsetHeight ?? window.innerHeight;
      const distance = Math.max(heroHeight * (window.innerWidth <= 760 ? 0.82 : 1), 1);
      const progress = Math.min(Math.max(-rect.top / distance, 0), 1);
      const eased = progress * progress * (3 - 2 * progress);
      setStyleIfChanged("--transition-progress", progress.toFixed(5));
      setStyleIfChanged("--transition-shape", eased.toFixed(5));
      const reveal = (start: number, end: number) =>
        Math.min(Math.max((progress - start) / (end - start), 0), 1).toFixed(5);
      setStyleIfChanged("--reveal-eyebrow", reveal(0.34, 0.5));
      setStyleIfChanged("--reveal-heading", reveal(0.4, 0.58));
      setStyleIfChanged("--reveal-copy", reveal(0.48, 0.68));
      for (let index = 0; index < 4; index += 1) {
        const start = 0.56 + index * 0.065;
        setStyleIfChanged(`--reveal-service-${index + 1}`, reveal(start, start + 0.16));
      }
    };

    const scheduleProgress = () => {
      if (frame !== 0) return;
      frame = requestAnimationFrame(renderProgress);
    };

    scheduleProgress();
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress, { passive: true });
    window.visualViewport?.addEventListener("resize", scheduleProgress, { passive: true });
    reducedMotion.addEventListener("change", scheduleProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
      window.visualViewport?.removeEventListener("resize", scheduleProgress);
      reducedMotion.removeEventListener("change", scheduleProgress);
    };
  }, []);

  return (
    <div className="hero-section-transition" ref={stageRef}>
      <div className="hero-section-transition__hero">{hero}</div>
      <div className="hero-section-transition__surface">{children}</div>
    </div>
  );
}
