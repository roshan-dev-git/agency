"use client";

import { useState } from "react";
import Button from "../ui/Button";

const navLinks = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-bold tracking-[0.3em] text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
            aria-label="Forma Studio — Home"
          >
            FORMA
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-[var(--color-bg)] flex flex-col items-center justify-center transition-all duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-10" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl uppercase tracking-widest text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                opacity: menuOpen ? 1 : 0,
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease, color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              opacity: menuOpen ? 1 : 0,
              transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
            }}
          >
            <Button
              variant="primary"
              onClick={() => {
                handleLinkClick();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
