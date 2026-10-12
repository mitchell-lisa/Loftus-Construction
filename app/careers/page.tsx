import PageLead from "@/components/PageLead";
import Pic from "@/components/Pic";
import SpeedLines from "@/components/SpeedLines";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

const description = `The Bench Strength Program is a one-year training program for recent graduates. Resumes go to ${business.careersContact} at Loftus Construction in Cinnaminson, New Jersey.`;

export const metadata = pageMeta("Careers", description, "/careers", photos.bCrew);

export default function CareersPage() {
  const careers = business.careers;
  return (
    <>
      <PageLead
        title="Careers"
        line={`The firm hires young engineers and trains them on real jobs. Resumes go to ${business.careersContact}.`}
      />

      <div className="relative bg-navy">
        <Pic
          id="bCrew"
          sizes="100vw"
          className="h-[42svh] min-h-[260px] lg:h-[60svh]"
          position="object-[center_40%]"
          caption={false}
          zoom={false}
        />
      </div>

      {careers ? (
        <section className="bg-white">
          <div className="wrap grid gap-14 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
            <div className="lg:col-span-7">
              <h2 className="text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[0.98] text-navy">{careers.program}</h2>
              <SpeedLines reveal className="mt-6 w-full max-w-md text-brand" />
              <p className="mt-6 max-w-[56ch] text-[1.1rem] leading-relaxed text-ink">{careers.blurb}</p>
              <p className="mt-5 max-w-[56ch] text-[1.1rem] leading-relaxed text-ink">
                The company calls its approach to hiring{" "}
                <span className="font-display italic text-navy">{careers.philosophy}</span>.
              </p>
            </div>
            <aside className="lg:col-span-5">
              <div className="border border-navy p-6 sm:p-8">
                <h2 className="text-[clamp(1.8rem,2.6vw,2.3rem)] leading-[1.05] text-navy">Sending a resume</h2>
                <p className="mt-4 text-[1.05rem] text-ink">
                  Send it to {business.careersContact} by email, fax or mail.
                </p>
                <a
                  href={`mailto:${business.careersEmail}`}
                  className="mt-5 inline-flex min-h-11 items-center break-all border-b-2 border-brand font-semibold text-brand"
                >
                  {business.careersEmail}
                </a>
                {business.fax ? <p className="mt-3 text-[15px] text-muted">Fax {business.fax}</p> : null}
                <p className="mt-1 text-[15px] text-muted">
                  {business.street}, {business.city}, {business.state} {business.zip}
                </p>
                <p className="mt-6 border-t border-rule pt-4 text-[14px] text-muted">An equal opportunity employer.</p>
              </div>
            </aside>
          </div>
        </section>
      ) : null}
    </>
  );
}
