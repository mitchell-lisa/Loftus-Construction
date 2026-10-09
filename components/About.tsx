import Divider from "./Divider";
import { Section, SectionHeading } from "./Section";
import { business } from "@/lib/business";

/**
 * currentTeam, testimonials, license, and insurance are null in lib/business.ts.
 * The 2019 team.php bios stay in `business.team` and are not rendered.
 */
export default function About() {
  return (
    <Section id="about" className="bg-chalk">
      <SectionHeading>About the firm</SectionHeading>
      <p className="mt-4 max-w-[54ch] text-[17px] text-[color:var(--ink-muted)]">
        Heavy civil contractor in {business.city}, New Jersey, building for public
        agencies across Pennsylvania, New Jersey and Delaware since {business.foundedYear}.
      </p>

      <Divider className="mt-10" />
      <blockquote className="mt-6 max-w-[28ch] text-[clamp(1.45rem,2.4vw,1.85rem)] leading-snug text-navy">
        {business.mission}
      </blockquote>

      <div className="mt-8 max-w-[66ch] space-y-4 text-[17px] text-[color:var(--ink-muted)]">
        {business.history.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
