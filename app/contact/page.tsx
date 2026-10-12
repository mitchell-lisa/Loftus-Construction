import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import RfqForm from "@/components/RfqForm";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("Contact", "Phone, email and address for Loftus Construction in Cinnaminson, New Jersey.", "/contact", photos.bLift);

export default function ContactPage() {
  return (
    <>
      <PageHead title="Contact" />
      <section className="wrap grid gap-16 pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="lg:col-span-4">
          <a href={business.phoneHref} className="block text-[clamp(1.8rem,3vw,2.5rem)] font-semibold tracking-tight text-navy">{business.phone}</a>
          {business.fax ? <p className="mt-1 text-[15px] text-steel">Fax {business.fax}</p> : null}
          <a href={`mailto:${business.email}`} className="link mt-4 inline-block break-all text-navy">{business.email}</a>
          <address className="mt-10 border-t border-navy pt-6 not-italic text-[16px] leading-7">
            {business.street}<br />{business.city}, {business.state} {business.zip}
          </address>
          <a href={business.directionsUrl} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block text-[15px] font-semibold text-navy">Directions</a>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)]">Request a bid</h2>
          <div className="mt-8"><RfqForm /></div>
        </div>
      </section>
      <div className="wrap pb-20 lg:pb-28">
        <Pic id="bLift" sizes="100vw" className="aspect-[4/3] md:aspect-[21/9]" />
      </div>
    </>
  );
}
