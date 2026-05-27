"use client";

import { useState } from "react";

export default function Button({
  variant = "primary",
  children,
  type = "button",
  onClick,
  className = "",
  ...rest
}) {
  const [pressing, setPressing] = useState(false);

  const handleClick = (e) => {
    // Trigger press animation
    setPressing(false);
    // Force reflow so re-adding the class restarts the animation
    void e.currentTarget.offsetWidth;
    setPressing(true);
    setTimeout(() => setPressing(false), 300);
    onClick?.(e);
  };

  const base =
    "inline-flex items-center justify-center px-8 py-3 text-sm tracking-widest uppercase font-medium rounded-none transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] active:scale-95";

  const variants = {
    primary:
      "bg-[var(--color-accent)] text-black hover:opacity-90 hover:shadow-[0_0_24px_rgba(212,245,0,0.25)]",
    outline:
      "bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_0_16px_rgba(212,245,0,0.1)]",
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${pressing ? "animate-btn-press" : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
