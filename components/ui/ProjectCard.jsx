"use client";

import Image from "next/image";
import { useInView } from "../hooks/useInView";

export default function ProjectCard({ title, category, year, image, index = 0 }) {
  const [ref, inView] = useInView(0.1);
  const delay = `delay-${Math.min(index * 100, 500)}`;

  return (
    <div
      ref={ref}
      className={`group relative rounded-none overflow-hidden aspect-[4/3] cursor-pointer
        ${inView ? `animate-scale-in ${delay}` : "anim-hidden"}`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out [@media(hover:hover)]:group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 transition-all duration-300 [@media(hover:hover)]:bg-black/0 [@media(hover:hover)]:group-hover:bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100">
        <span
          className="text-xs text-[var(--color-accent)] tracking-widest uppercase mb-2"
          style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
        >
          {category} — {year}
        </span>
        <h3
          className="text-xl text-[var(--color-text-primary)]"
          style={{ fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
