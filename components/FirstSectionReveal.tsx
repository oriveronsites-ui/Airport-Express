"use client";

import { useEffect, useRef, type ReactNode } from "react";

type FirstSectionRevealProps = {
  hero: ReactNode;
  children: ReactNode;
};

export function FirstSectionReveal({ hero, children }: FirstSectionRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    section.dataset.revealed = "false";

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      section.dataset.revealed = "true";
      section.dataset.revealReady = "true";
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          section.dataset.revealed = "true";
          observer?.disconnect();
        },
        { threshold: 0.04, rootMargin: "0px 0px -4% 0px" },
      );
      observer.observe(section);
      section.dataset.revealReady = "true";
    }

    // The homepage header keeps its existing floating-to-surface behavior.
    const header = document.querySelector<HTMLElement>(".site-header.is-home");
    let headerIsScrolled = window.scrollY > 28;
    let frame = 0;
    const syncHeader = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollY = window.scrollY;
        if (headerIsScrolled ? scrollY < 18 : scrollY > 38) {
          headerIsScrolled = !headerIsScrolled;
        }
        const next = String(headerIsScrolled);
        if (header && header.dataset.scrolled !== next) header.dataset.scrolled = next;
      });
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", syncHeader);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hero-section-flow">
      <div className="hero-section-flow__hero">{hero}</div>
      <div className="hero-section-flow__surface" ref={sectionRef}>
        {children}
      </div>
    </div>
  );
}
