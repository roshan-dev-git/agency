import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import Container from "../ui/Container";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-32">
      <Container className="mb-16">
        <SectionTitle label="What We Do" title="Services Built for Impact" />
      </Container>

      {/* Hairline divider grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)]">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              label={service.label}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
