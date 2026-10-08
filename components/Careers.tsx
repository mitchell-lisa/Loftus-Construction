import { Section, SectionHeading } from "./Section";
import { business } from "@/lib/business";

export default function Careers() {
  if (!business.careers) return null;
  const { program, blurb, philosophy } = business.careers;

  return (
    <>
      <Section id="careers" className="bg-chalk">
        <SectionHeading sub="A one-year program for recent graduates, preferably in civil engineering.">
          Careers
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-[18px] text-ink">{program}</h3>
            <p className="mt-2 max-w-[56ch] text-[15.5px] text-[color:var(--ink-muted)]">
              {blurb}
            </p>
            <p className="mt-4 max-w-[56ch] text-[15.5px] text-[color:var(--ink-muted)]">
              The firm describes its hiring approach as {philosophy}. Its director of
              procurement joined as a Drexel student in 1997 and has held every
              engineering role in the company since.
            </p>
          </div>
          <div>
            <h3 className="text-[18px] text-ink">Sending a resume</h3>
            <p className="mt-2 max-w-[52ch] text-[15.5px] text-[color:var(--ink-muted)]">
              Resumes go to {business.careersContact} by mail, fax or email.
            </p>
            <p className="mt-3 text-[15.5px]">
              <a
                href={`mailto:${business.careersEmail}`}
                className="inline-block border-b border-brand py-1 text-brand hover:border-ink hover:text-ink"
              >
                {business.careersEmail}
              </a>
            </p>
            {business.fax ? (
              <p className="mt-1 text-[15px] text-[color:var(--ink-muted)]">
                Fax {business.fax}
              </p>
            ) : null}
            <p className="mt-4 text-[14px] text-[color:var(--ink-muted)]">
              An equal opportunity employer.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
