"use client";

import { useEffect } from "react";

export function MotionObserver() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.body;
    if (!root || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
    );
    const processed = new WeakSet<Element>();

    const revealAll = () => {
      observer.disconnect();
      root.querySelectorAll<HTMLElement>("[data-motion]").forEach((element) => {
        element.dataset.revealed = "true";
        processed.add(element);
      });
    };

    const scan = (parent: ParentNode) => {
      if (reducedMotion.matches) {
        revealAll();
        return;
      }

      const elements: HTMLElement[] = [];
      if (parent instanceof HTMLElement && parent.matches("[data-motion]")) elements.push(parent);
      elements.push(...parent.querySelectorAll<HTMLElement>("[data-motion]"));

      const pending = elements.filter((element) => !processed.has(element));
      const measured = pending.map((element) => {
        const bounds = element.getBoundingClientRect();
        return {
          element,
          isInView: bounds.top < window.innerHeight * 0.93 && bounds.bottom > 0,
        };
      });

      for (const { element, isInView } of measured) {
        processed.add(element);
        element.dataset.revealed = String(isInView);
        if (!isInView) observer.observe(element);
      }
    };

    scan(root);
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) scan(node);
        });
      }
    });
    mutations.observe(root, { childList: true, subtree: true });

    const handlePreferenceChange = () => {
      if (reducedMotion.matches) revealAll();
    };
    reducedMotion.addEventListener("change", handlePreferenceChange);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      reducedMotion.removeEventListener("change", handlePreferenceChange);
    };
  }, []);

  return null;
}
