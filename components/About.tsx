import Divider from "./Divider";
import { Section } from "./Section";
import { business } from "@/lib/business";

/**
 * currentTeam, testimonials, license, and insurance are null in lib/business.ts.
 * The 2019 team.php bios stay in `business.team` and are not rendered.
 */
export default function About() {
  return (
    <Section className="bg-white">
      <blockquote className="max-w-[28ch] text-[clamp(1.55rem,2.6vw,2.05rem)] leading-snug text-navy">
        {business.mission}
      </blockquote>
      <Divider className="mt-10" />
      <div className="mt-8 max-w-[66ch] space-y-4 text-[17px] leading-relaxed text-ink">
        {business.history.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
