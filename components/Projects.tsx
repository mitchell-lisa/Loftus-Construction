import { Section, SectionHeading } from "./Section";
import PhotoGrid from "./PhotoGrid";
import { business } from "@/lib/business";

export default function Projects() {
  return (
    <Section id="projects" className="bg-white">
      <SectionHeading>Projects</SectionHeading>

      <div className="space-y-16">
        {business.photoProjects.map((project) => (
          <article key={project.name}>
            <h3 className="text-[clamp(1.2rem,2.6vw,1.45rem)] text-ink">{project.name}</h3>
            <p className="mt-3 max-w-[62ch] text-[15.5px] leading-relaxed text-[color:var(--ink-muted)]">
              {project.summary}
            </p>
            <PhotoGrid photos={project.photos} />
          </article>
        ))}
      </div>
    </Section>
  );
}
