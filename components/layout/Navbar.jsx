"use client";

import { useState } from "react";
import Button from "../ui/Button";

const navLinks = [
  { label: "Work", href: "portfolio" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    // slight delay so mobile overlay starts closing before scroll
    setTimeout(() => scrollTo(id), 50);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-bold tracking-[0.3em] text-[var(--color-text-primary)] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
            aria-label="Forma Studio — Back to top"
          >
            FORMA
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center justify-end gap-6">
            {/* Helpline */}
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              aria-label="Call our helpline at +1 800 555 0199"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M3 11a9 9 0 1 1 18 0" />
                <rect x="2" y="11" width="4" height="6" rx="1" />
                <rect x="18" y="11" width="4" height="6" rx="1" />
                <path d="M22 17v1a2 2 0 0 1-2 2h-3" />
              </svg>
              <span
                className="text-xs tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
              >
                +1 800 555 0199
              </span>
            </a>

            <Button variant="outline" onClick={() => scrollTo("contact")}>
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 justify-self-end focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[var(--color-bg)] flex flex-col items-center justify-center transition-all duration-400 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-10" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-2xl uppercase tracking-widest text-[var(--color-text-primary)] hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                opacity: menuOpen ? 1 : 0,
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease, color 0.2s",
              }}
            >
              {link.label}
            </button>
          ))}
          <div
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              opacity: menuOpen ? 1 : 0,
              transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
            }}
          >
            <Button variant="primary" onClick={() => handleLinkClick("contact")}>
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
