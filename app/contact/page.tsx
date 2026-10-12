import PageLead from "@/components/PageLead";
import Pic from "@/components/Pic";
import RfqForm from "@/components/RfqForm";
import { business } from "@/lib/business";
import { pageMeta } from "@/lib/pageMeta";

const description =
  "Phone, email and fax for Loftus Construction in Cinnaminson, New Jersey. The bid request form on this preview is a demo and does not send.";

export const metadata = pageMeta("Contact", description, "/contact");

export default function ContactPage() {
  return (
    <>
      <PageLead title="Contact" line="Call the office, send an email, or send the details of a job you want priced." />

      <section className="bg-white">
        <div className="wrap grid gap-14 py-16 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <div className="lg:col-span-5">
            <a
              href={business.phoneHref}
              data-primary="true"
              className="inline-flex min-h-11 items-center font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-brand"
            >
              {business.phone}
            </a>
            {business.fax ? <p className="mt-3 text-[16px] text-muted">Fax {business.fax}</p> : null}
            <p className="mt-4">
              <a
                href={`mailto:${business.email}`}
                className="inline-flex min-h-11 items-center break-all border-b-2 border-brand text-[17px] text-brand"
              >
                {business.email}
              </a>
            </p>
            <div className="mt-10 border-t border-navy pt-6">
              <p className="caps text-navy">{business.legalName}</p>
              <address className="mt-3 not-italic text-[17px] leading-relaxed text-ink">
                {business.street}
                <br />
                {business.city}, {business.state} {business.zip}
              </address>
              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand"
              >
                Get directions
              </a>
            </div>
            <div className="mt-12">
              <Pic id="bContext" sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[4/3]" caption={false} />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-navy p-6 sm:p-10">
              <h2 className="text-[clamp(2rem,3.4vw,2.9rem)] leading-[1] text-navy">Request a bid</h2>
              <div className="mt-6">
                <RfqForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
