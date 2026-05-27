"use client";

import { useInView } from "../hooks/useInView";

export default function ServiceCard({ icon, label, title, description, index = 0, spotlight = false }) {
  const [ref, inView] = useInView(0.1);
  const delay = `delay-${Math.min(index * 100, 400)}`;

  // Spotlight fires once per card, staggered by index (0→1.2s, 1→2s, 2→2.8s, 3→3.6s)
  // Each card's flash lasts ~0.8s, total sequence ≈ 4.4s → well within 5s
  const spotlightDelay = `${800 + index * 800}ms`;

  return (
    <div
      ref={ref}
      className={`group relative bg-[var(--color-surface)] border border-[var(--color-border)] p-8
        transition-all duration-300 hover:-translate-y-1 cursor-default
        ${inView ? `animate-fade-up ${delay}` : "anim-hidden"}
        ${spotlight ? "animate-card-spotlight" : ""}`}
      style={spotlight ? { animationDelay: spotlightDelay } : {}}
    >
      {/* Top: monospace label */}
      <div className="flex justify-end mb-8">
        <span
          className="text-xs text-[var(--color-text-muted)] tracking-widest"
          style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
        >
          {label}
        </span>
      </div>

      {/* Icon */}
      <div
        className="text-4xl text-[var(--color-accent)] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-xl text-[var(--color-text-primary)] mb-4 transition-colors duration-300 group-hover:text-[var(--color-accent)]"
        style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-8 transition-colors duration-300 group-hover:text-[var(--color-text-primary)]">
        {description}
      </p>

      {/* Bottom border animates to accent on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-border)] transition-all duration-500 group-hover:bg-[var(--color-accent)] group-hover:shadow-[0_0_8px_rgba(212,245,0,0.4)]" />
    </div>
  );
}
