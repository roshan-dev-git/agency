"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isInView].
 * Once the element enters the viewport it stays "in view" (one-shot).
 * threshold: 0–1, how much of the element must be visible to trigger.
 * rootMargin: CSS margin string to expand/shrink the viewport box.
 */
export function useInView(threshold = 0.15, rootMargin = "0px 0px -60px 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion — show immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // one-shot
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
