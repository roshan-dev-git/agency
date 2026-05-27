"use client";

import { useInView } from "../hooks/useInView";

export default function SectionTitle({ label, title, align = "left" }) {
  const [ref, inView] = useInView(0.2);
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div ref={ref} className={`flex flex-col gap-4 ${alignClass}`}>
      <span
        className={`text-xs tracking-widest uppercase text-[var(--color-accent)] ${
          inView ? "animate-fade-in delay-0" : "anim-hidden"
        }`}
        style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
      >
        {label}
      </span>
      <h2
        className={`text-4xl md:text-5xl text-[var(--color-text-primary)] leading-tight ${
          inView ? "animate-fade-up delay-150" : "anim-hidden"
        }`}
        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
      >
        {title}
      </h2>
    </div>
  );
}
