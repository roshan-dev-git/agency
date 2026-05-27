"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";

// Abstract geometric grid — animates in cell by cell
function GeometricGrid({ animate }) {
  const cells = [
    "surface", "transparent", "accent",
    "transparent", "surface", "transparent",
    "accent", "transparent", "surface",
  ];

  const cellStyle = {
    surface: "bg-[var(--color-surface)] border border-[var(--color-border)]",
    transparent: "bg-transparent border border-[var(--color-border)]",
    accent: "bg-[var(--color-accent)]",
  };

  return (
    <div
      className={`relative w-full max-w-sm mx-auto md:mx-0 md:ml-auto transition-all duration-700 ${
        animate ? "animate-slide-right delay-500" : "anim-hidden"
      }`}
      aria-hidden="true"
    >
      <div className="border border-[var(--color-border)] p-6">
        <div className="grid grid-cols-3 gap-3">
          {cells.map((type, i) => (
            <div
              key={i}
              className={`aspect-square ${cellStyle[type]} ${
                animate ? "animate-grid-cell" : "anim-hidden"
              }`}
              style={{ animationDelay: animate ? `${600 + i * 60}ms` : "0ms" }}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span
            className={`text-xs text-[var(--color-text-muted)] tracking-widest ${
              animate ? "animate-fade-in delay-1100" : "anim-hidden"
            }`}
            style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
          >
            FORMA.STUDIO
          </span>
          <span
            className={`text-[var(--color-accent)] text-xs animate-pulse-dot`}
          >
            ✦
          </span>
        </div>
      </div>

      {/* Offset decorative border */}
      <div
        className={`absolute -bottom-3 -right-3 w-full h-full border border-[var(--color-border)] -z-10 ${
          animate ? "animate-scale-in delay-700" : "anim-hidden"
        }`}
      />
    </div>
  );
}

export default function Hero() {
  // Hero animates on mount (no IntersectionObserver needed — always visible)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Small tick so CSS transitions fire after first paint
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle mesh glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(212,245,0,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full py-24">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 md:gap-24 items-center">

          {/* Left: Text content */}
          <div>
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-10 ${
                mounted ? "animate-fade-in delay-0" : "anim-hidden"
              }`}
            >
              <span
                className={`w-8 h-px bg-[var(--color-accent)] block ${
                  mounted ? "animate-line-grow delay-100" : "anim-hidden"
                }`}
                aria-hidden="true"
              />
              <span
                className="text-xs tracking-widest uppercase text-[var(--color-text-muted)]"
                style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
              >
                Creative Studio — Est. 2018
              </span>
            </div>

            {/* Headline — each line staggers */}
            <h1
              style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight text-[var(--color-text-primary)] mb-8"
            >
              <span
                className={`block pb-2 ${
                  mounted ? "animate-fade-up delay-150" : "anim-hidden"
                }`}
              >
                We Design
              </span>
              <span
                className={`block pb-2 ${
                  mounted ? "animate-fade-up delay-300" : "anim-hidden"
                }`}
              >
                <em className="not-italic italic text-[var(--color-accent)]">
                  Futures.
                </em>
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-base text-[var(--color-text-muted)] max-w-sm mt-6 mb-10 leading-relaxed ${
                mounted ? "animate-fade-up delay-400" : "anim-hidden"
              }`}
            >
              A boutique creative studio crafting brand experiences that define
              the next generation of business.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 ${
                mounted ? "animate-fade-up delay-500" : "anim-hidden"
              }`}
            >
              <Button
                variant="primary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See Our Work
              </Button>
            </div>
          </div>

          {/* Right: Geometric grid */}
          <GeometricGrid animate={mounted} />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-3 ${
          mounted ? "animate-fade-in delay-1000" : "anim-hidden"
        }`}
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-[var(--color-border)] animate-scroll-bounce" />
        <span
          className="text-xs tracking-widest uppercase text-[var(--color-text-muted)] [writing-mode:vertical-rl]"
          style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
