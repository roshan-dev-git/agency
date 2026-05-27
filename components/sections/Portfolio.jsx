import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32">
      <Container>
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionTitle
            label="Selected Work"
            title="Projects We're Proud Of"
            align="left"
          />
          <Reveal animation="fade-in" delay="delay-400">
            <a
              href="#"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 tracking-widest whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              style={{ fontFamily: "var(--font-jetbrains), 'JetBrains Mono', monospace" }}
            >
              View All Work →
            </a>
          </Reveal>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              year={project.year}
              image={project.image}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
