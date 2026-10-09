import { Section, SectionHeading } from "./Section";
import { business } from "@/lib/business";

export default function Careers() {
  if (!business.careers) return null;
  const { program, blurb, philosophy } = business.careers;

  return (
    <Section id="careers" className="bg-white">
      <SectionHeading>Careers</SectionHeading>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-[1.45rem] text-navy">{program}</h3>
          <p className="mt-3 max-w-[52ch] text-[17px] text-[color:var(--ink-muted)]">{blurb}</p>
          <p className="mt-4 max-w-[52ch] text-[17px] text-[color:var(--ink-muted)]">
            The firm describes its hiring approach as {philosophy}.
          </p>
        </div>
        <div>
          <h3 className="text-[1.45rem] text-navy">Sending a resume</h3>
          <p className="mt-3 max-w-[46ch] text-[17px] text-[color:var(--ink-muted)]">
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
          <p className="mt-4 text-[15px] text-[color:var(--ink-muted)]">
            An equal opportunity employer.
          </p>
        </div>
      </div>
    </Section>
  );
}
