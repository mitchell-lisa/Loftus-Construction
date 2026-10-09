import { Section } from "./Section";
import { business } from "@/lib/business";

export default function Careers() {
  if (!business.careers) return null;
  const { program, blurb, philosophy } = business.careers;

  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-[clamp(1.8rem,2.4vw,2.3rem)] leading-none text-navy">{program}</h2>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-ink">{blurb}</p>
          <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-ink">
            The firm describes its hiring approach as {philosophy}.
          </p>
        </div>
        <div>
          <h2 className="text-[clamp(1.8rem,2.4vw,2.3rem)] leading-none text-navy">
            Sending a resume
          </h2>
          <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-ink">
            Resumes go to {business.careersContact} by mail, fax or email.
          </p>
          <p className="mt-4">
            <a
              href={`mailto:${business.careersEmail}`}
              className="inline-flex min-h-11 items-center border-b-2 border-brand text-brand"
            >
              {business.careersEmail}
            </a>
          </p>
          {business.fax ? (
            <p className="mt-2 text-[16px] text-[color:var(--ink-muted)]">Fax {business.fax}</p>
          ) : null}
          <p className="mt-4 text-[15px] text-[color:var(--ink-muted)]">An equal opportunity employer.</p>
        </div>
      </div>
    </Section>
  );
}
