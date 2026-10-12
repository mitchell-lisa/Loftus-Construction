import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import RfqForm from "@/components/RfqForm";
import { firm } from "@/lib/site";
import { role } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("Contact and bid requests", "Call (856) 786-6607 or send a bid request to Loftus Construction in Cinnaminson, New Jersey.", "/contact");

export default function Contact() {
  return (
    <>
      <PageHead title="Contact" lede="Bid invitations, design-build inquiries and subcontractor quotes. A phone call is still the fastest way in." />
      <section className="section pt-0">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-10" data-reveal>
            <div>
              <h2 className="h3">Office</h2>
              <a href={firm.phoneHref} className="contact-big block mt-3">{firm.phone}</a>
              <p className="mt-2 muted">Fax {firm.fax}</p>
              <a href={`mailto:${firm.email}`} className="link mt-2 inline-block break-all">{firm.email}</a>
            </div>
            <div>
              <h2 className="h3">Address</h2>
              <address className="not-italic mt-3">{firm.legalName}<br />{firm.street}<br />{firm.city}, {firm.state} {firm.zip}</address>
              <a href={firm.directionsUrl} className="link mt-3 inline-block">Directions</a>
            </div>
            <div>
              <h2 className="h3">Careers</h2>
              <p className="mt-3">{firm.careersContact}<br /><a className="link break-all" href={`mailto:${firm.careersEmail}`}>{firm.careersEmail}</a></p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6" data-reveal>
            <h2 className="h2">Request a bid</h2>
            <p className="mt-3 mb-8 muted">Tell us the structure, the owner and the bid date.</p>
            <RfqForm />
          </div>
        </div>
      </section>
      {role.contact ? (
        <section className="contact-photo" data-reveal>
          <Pic k={role.contact} className="aspect-[16/9] lg:aspect-[3/1]" sizes="100vw" />
        </section>
      ) : null}
    </>
  );
}
