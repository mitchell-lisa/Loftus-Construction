import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import { firm, careers } from "@/lib/site";
import { role } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("Careers", "The Bench Strength Program: a one year training program for recent civil engineering graduates.", "/careers");

export default function Careers() {
  return (
    <>
      <PageHead title={careers.philosophy} lede="Loftus hires graduates and builds its project managers, estimators and leaders from inside the company." photo={role.careersHero} />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="h1">{careers.program}</h2>
            <p className="lede mt-6">{careers.blurb} One year, rotating through the whole business.</p>
          </div>
          <ol className="rotations lg:col-span-6 lg:col-start-7" data-reveal>
            {careers.rotations.map((r) => <li key={r}>{r}</li>)}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6" data-reveal>
            <h2 className="h2">A path that stays in the firm</h2>
            <p className="mt-4 max-w-[46ch]">One of the firm&apos;s directors joined as a Drexel student in 1997 and moved through every field and office role on the way up.</p>
            <ol className="path mt-8">
              {careers.path.map((p) => <li key={p}>{p}</li>)}
            </ol>
          </div>
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <Pic k={role.careersDetail} className="aspect-[4/5]" sizes="(min-width:1024px) 38vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h2 max-w-[22ch]" data-reveal>People stay. In 2019 the company honored crew and staff for these years of service.</h2>
          <ul className="service-years mt-12" data-reveal>
            {careers.service.map((s) => (
              <li key={s.years}>
                <span className="sy-n tnum">{s.years}</span>
                <span className="sy-l">years</span>
                <span className="sy-r">{s.roles}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 className="h1 lg:col-span-6" data-reveal>Apply</h2>
          <div className="lg:col-span-6" data-reveal>
            <p className="lede">Send a resume to {firm.careersContact}.</p>
            <a href={`mailto:${firm.careersEmail}`} className="btn mt-8 break-all">{firm.careersEmail}</a>
            <p className="mt-8 text-[15px] opacity-80">Loftus Construction is an Equal Opportunity Employer.</p>
          </div>
        </div>
      </section>
    </>
  );
}
