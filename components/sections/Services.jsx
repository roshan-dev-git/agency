"use client";

import { useRef, useEffect, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import Container from "../ui/Container";
import { services } from "../data/services";

export default function Services() {
  const gridRef = useRef(null);
  const [spotlight, setSpotlight] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSpotlight(true);
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32">
      <Container className="mb-16">
        <SectionTitle label="What We Do" title="Services Built for Impact" />
      </Container>

      {/* Hairline divider grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-12" ref={gridRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)]">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              label={service.label}
              title={service.title}
              description={service.description}
              index={i}
              spotlight={spotlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
