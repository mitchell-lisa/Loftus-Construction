import { Section, SectionHeading } from "./Section";
import { business } from "@/lib/business";

export default function About() {
  return (
    <Section id="about" className="bg-chalk">
      <SectionHeading sub={`Heavy civil contractor in ${business.city}, New Jersey, building for public agencies across Pennsylvania, New Jersey and Delaware since ${business.foundedYear}.`}>
        About the firm
      </SectionHeading>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <blockquote className="border-l-2 border-slate pl-4 text-[16.5px] leading-relaxed text-ink">
            {business.mission}
          </blockquote>
          <div className="mt-6 space-y-4 text-[15.5px] text-[color:var(--ink-muted)]">
            {business.history.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="max-w-[62ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-7">
          {business.team.map((person) => (
            <div key={person.name}>
              <h3 className="text-[17px] text-ink">{person.name}</h3>
              <p className="text-[14px] text-slate">{person.title}</p>
              <p className="mt-2 max-w-[52ch] text-[15px] text-[color:var(--ink-muted)]">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-10 border-t border-[color:var(--hairline)] pt-10 sm:grid-cols-2">
        <div>
          <h3 className="text-[17px] text-ink">Prequalified with</h3>
          <ul className="mt-3 space-y-1 text-[15px] text-[color:var(--ink-muted)]">
            {business.prequalifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[17px] text-ink">Member of</h3>
          <ul className="mt-3 space-y-1 text-[15px] text-[color:var(--ink-muted)]">
            {business.associations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
