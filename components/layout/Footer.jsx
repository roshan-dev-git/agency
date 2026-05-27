"use client";

import Reveal from "../ui/Reveal";

const footerLinks = [
  { label: "Work", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Brand */}
          <Reveal animation="fade-up" delay="delay-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-bold tracking-[0.3em] text-[var(--color-text-primary)] mb-4 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
            >
              FORMA
            </button>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              A boutique creative studio crafting brand experiences that define
              the next generation of business.
            </p>
          </Reveal>

          {/* Col 2: Nav links */}
          <Reveal animation="fade-up" delay="delay-150" className="md:flex md:justify-center">
            <nav aria-label="Footer navigation">
              <p
                className="text-xs tracking-widest uppercase text-[var(--color-text-primary)] mb-5"
                style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
              >
                Navigate
              </p>
              <ul className="flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 uppercase tracking-widest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          {/* Col 3: Social */}
          <Reveal animation="fade-up" delay="delay-300" className="md:flex md:justify-end">
            <div>
              <p
                className="text-xs tracking-widest uppercase text-[var(--color-text-primary)] mb-5"
                style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
              >
                Follow Us
              </p>
              <ul className="flex flex-col gap-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 tracking-widest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
                      aria-label={`Follow us on ${social.label}`}
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <Reveal animation="fade-in" delay="delay-400">
          <div
            className="border-t border-[var(--color-border)] mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[var(--color-text-muted)]"
            style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
          >
            <span>© 2026 Forma Studio. All rights reserved.</span>
            <span>Crafted with precision.</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
