import { Section } from "./Section";
import RfqForm from "./RfqForm";
import { business } from "@/lib/business";

export default function Contact() {
  return (
    <Section className="bg-white">
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <p className="text-[17px] font-semibold text-navy">{business.legalName}</p>
          <address className="mt-3 not-italic text-[17px] leading-relaxed text-ink">
            {business.street}
            <br />
            {business.city}, {business.state} {business.zip}
          </address>
          <p className="mt-6">
            <a
              href={business.phoneHref}
              data-primary="true"
              className="inline-flex min-h-11 items-center border-b-2 border-brand text-[clamp(1.6rem,3vw,2rem)] font-semibold leading-none text-brand"
            >
              {business.phone}
            </a>
          </p>
          {business.fax ? (
            <p className="mt-3 text-[16px] text-[color:var(--ink-muted)]">Fax {business.fax}</p>
          ) : null}
          <p className="mt-2">
            <a
              href={`mailto:${business.email}`}
              className="inline-flex min-h-11 items-center border-b-2 border-brand text-brand"
            >
              {business.email}
            </a>
          </p>
          <p className="mt-4">
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center border-b-2 border-brand text-brand"
            >
              Get directions
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-[clamp(1.8rem,2.4vw,2.3rem)] leading-none text-navy">Request a bid</h2>
          <div className="mt-4">
            <RfqForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
