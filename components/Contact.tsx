import { Section, SectionHeading } from "./Section";
import { business } from "@/lib/business";

export default function Contact() {
  return (
    <Section id="contact" className="bg-chalk">
      <SectionHeading sub="Call the office to discuss a project or request a proposal.">
        Contact
      </SectionHeading>

      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <p className="text-[17px] font-semibold text-ink">{business.legalName}</p>
          <address className="mt-2 not-italic text-[15.5px] leading-relaxed text-[color:var(--ink-muted)]">
            {business.street}
            <br />
            {business.city}, {business.state} {business.zip}
          </address>
          <p className="mt-4">
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-slate py-1 text-[15.5px] text-slate hover:border-ink hover:text-ink"
            >
              Get directions
            </a>
          </p>
        </div>

        <div>
          <a
            href={business.phoneHref}
            data-primary="true"
            className="inline-flex min-h-11 items-center border-b-2 border-slate pb-1 text-[26px] font-semibold text-ink hover:border-ink"
          >
            {business.phone}
          </a>
          {business.fax ? (
            <p className="mt-3 text-[15px] text-[color:var(--ink-muted)]">
              Fax {business.fax}
            </p>
          ) : null}
          <p className="mt-2 text-[15.5px]">
            <a
              href={`mailto:${business.email}`}
              className="inline-block border-b border-slate py-1 text-slate hover:border-ink hover:text-ink"
            >
              {business.email}
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
