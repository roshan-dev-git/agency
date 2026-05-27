"use client";

import Reveal from "../ui/Reveal";

const footerLinks = ["Work", "Services", "About", "Contact"];
const socialLinks = ["Twitter", "LinkedIn", "Instagram"];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Brand */}
          <Reveal animation="fade-up" delay="delay-0">
            <p
              className="text-sm font-bold tracking-[0.3em] text-[var(--color-text-primary)] mb-4"
              style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
            >
              FORMA
            </p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              A boutique creative studio crafting brand experiences that define
              the next generation of business.
            </p>
          </Reveal>

          {/* Col 2: Nav links */}
          <Reveal animation="fade-up" delay="delay-150" className="md:flex md:justify-center">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 uppercase tracking-widest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          {/* Col 3: Social */}
          <Reveal animation="fade-up" delay="delay-300" className="md:flex md:justify-end">
            <ul className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 tracking-widest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                    style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
                    aria-label={`Follow us on ${social}`}
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
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
