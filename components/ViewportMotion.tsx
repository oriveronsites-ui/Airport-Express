"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/** One observer reveals only explicitly marked, non-hero content once per visit. */
export function ViewportMotion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]"));

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      root.removeAttribute("data-motion-ready");
      targets.forEach((target) => target.removeAttribute("data-motion-state"));
      return;
    }

    targets.forEach((target) => {
      target.dataset.motionState = "hidden";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.motionState = "visible";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    root.dataset.motionReady = "true";

    return () => {
      observer.disconnect();
      root.removeAttribute("data-motion-ready");
      targets.forEach((target) => target.removeAttribute("data-motion-state"));
    };
  }, [pathname]);

  return null;
}
