import Image from "next/image";
import { Section, SectionHeading } from "./Section";
import { business } from "@/lib/business";

export default function Careers() {
  if (!business.careers) return null;
  const { program, blurb, philosophy } = business.careers;

  return (
    <>
      <div className="mx-auto w-full max-w-[1140px]">
        <Image
          src="/images/bridge-deck-pour.webp"
          alt="Loftus crews finishing a bridge deck pour"
          width={1140}
          height={355}
          sizes="(min-width: 1140px) 1140px, 100vw"
          className="h-auto w-full"
        />
      </div>

      <Section id="careers" className="bg-white">
        <SectionHeading sub="Loftus Construction is always looking for motivated, creative and dedicated professionals with a strong focus on the future.">
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
                className="inline-block border-b border-slate py-1 text-slate hover:border-ink hover:text-ink"
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
