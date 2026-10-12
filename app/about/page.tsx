import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import { firm, history, people, prequalifications, associations, clients, award, careers } from "@/lib/site";
import { role } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("About", "Founded in 1994 by Kevin J. Loftus. Heavy civil engineers and contractors in King of Prussia, Pennsylvania.", "/about");

export default function About() {
  return (
    <>
      <PageHead title={`Since ${firm.founded}`} lede="Founded to take on difficult, heavily engineered projects that call for innovative and aggressive approaches. Based in King of Prussia, Pennsylvania." photo={role.aboutHero} />

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <blockquote className="mission lg:col-span-9" data-reveal>
            <p>{firm.mission}</p>
            <footer className="muted mt-6 text-[15px]">Mission statement, {firm.legalName}</footer>
          </blockquote>
        </div>
      </section>

      <section className="section section-alt" id="history">
        <div className="wrap">
          <h2 className="h1" data-reveal>History</h2>
          <ol className="history mt-12 lg:mt-16">
            {history.map((h) => (
              <li key={h.year} className="history-row" data-reveal>
                <span className="history-year tnum">{h.year}</span>
                <h3 className="h3">{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="leadership">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12">
            <h2 className="h1 lg:col-span-5" data-reveal>Leadership</h2>
            <p className="lede lg:col-span-6 lg:col-start-7" data-reveal>Engineers who build. Two of the three hold PE licenses, and two are certified Design-Build Professionals.</p>
          </div>
          <ul className="people mt-12 lg:mt-16">
            {people.map((p) => (
              <li key={p.name} className="person" data-reveal>
                <h3 className="h3">{p.name}</h3>
                <p className="person-role">{p.role}</p>
                <p className="mt-4">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark" id="safety">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <h2 className="h1">Safety and quality</h2>
            <p className="lede mt-6">Safe and timely is in the first sentence of the company&apos;s purpose.</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-8" data-reveal>
            <div>
              <h3 className="h3">Owned at the top</h3>
              <p className="mt-2">Jobsite safety sits with operations leadership,, together with the equipment fleet.</p>
            </div>
            <div>
              <h3 className="h3">Trained from the first year</h3>
              <p className="mt-2">Safety and risk management are part of the {careers.program} every new graduate goes through.</p>
            </div>
            <div>
              <h3 className="h3">Recognized work</h3>
              <p className="mt-2">{award.year} {award.title}, {award.body}. {award.detail}</p>
            </div>
            <Pic k={role.aboutSafety} className="aspect-[3/2]" sizes="(min-width:1024px) 45vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section" id="prequalifications">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <h2 className="h2">Prequalifications</h2>
            <p className="mt-4 muted">Prequalified to bid public work with these agencies.</p>
          </div>
          <ul className="list-cols lg:col-span-8" data-reveal>
            {prequalifications.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div className="wrap mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <h2 className="h2">Clients</h2>
          </div>
          <ul className="list-cols lg:col-span-8" data-reveal>
            {clients.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div className="wrap mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <h2 className="h2">Associations</h2>
          </div>
          <ul className="list-cols lg:col-span-8" data-reveal>
            {associations.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
