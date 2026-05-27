"use client";

import { useInView } from "../hooks/useInView";

/**
 * Wraps children in a scroll-triggered animation.
 * animation: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in"
 * delay: tailwind delay class e.g. "delay-200"
 */
export default function Reveal({
  children,
  animation = "fade-up",
  delay = "delay-0",
  threshold = 0.12,
  className = "",
  as: Tag = "div",
}) {
  const [ref, inView] = useInView(threshold);

  const animClass = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
    "scale-in": "animate-scale-in",
  }[animation] ?? "animate-fade-up";

  return (
    <Tag
      ref={ref}
      className={`${inView ? `${animClass} ${delay}` : "anim-hidden"} ${className}`}
    >
      {children}
    </Tag>
  );
}
