import Link from "next/link";
import Pic from "@/components/Pic";
import Sequence from "@/components/Sequence";
import { firm, record, studies, services, careers } from "@/lib/site";

const byYear = [2026, 2025, 2019, 2018, 2017, 2016, 2015];

export default function Home() {
  const ua = studies.find((s) => s.slug === "university-avenue")!;
  const sp = studies.find((s) => s.slug === "st-peters-road")!;
  return (
    <>
      <Sequence />

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <blockquote className="mission lg:col-span-10" data-reveal>
            <p>&ldquo;{firm.mission}&rdquo;</p>
          </blockquote>
          <p className="muted lg:col-span-6" data-reveal>From the company&apos;s statement of purpose. Founded by Kevin J. Loftus in Cinnaminson, New Jersey.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2 className="h1 max-w-[16ch]" data-reveal>From first price to final pour</h2>
          <div className="flow mt-14 lg:mt-20">
            {[
              { t: "Preconstruction", d: services[1].text, items: services[1].items.slice(0, 4), href: "/capabilities#preconstruction" },
              { t: "Design-build", d: services[0].text, items: services[0].items.slice(0, 4), href: "/capabilities#design-build" },
              { t: "Construction", d: "Bridges, rehabilitation, retaining walls, foundations, culverts and dams.", items: ["Steel girder and concrete bridges", "Masonry arch rehabilitation", "Retaining walls", "Dam reconstruction"], href: "/capabilities#bridges" },
            ].map((s) => (
              <Link key={s.t} href={s.href} className="flow-step" data-reveal>
                <h3 className="h2">{s.t}</h3>
                <p className="mt-4 muted">{s.d}</p>
                <ul className="mt-6 flow-list">{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <h2 className="h1 lg:col-span-5" data-reveal>Year by year</h2>
          <p className="lede lg:col-span-6 lg:col-start-7" data-reveal>The published record, newest first. Contracts named by Loftus or by the owners who awarded them.</p>
        </div>
        <ol className="wrap years mt-12 lg:mt-16">
          {byYear.map((y) => {
            const list = record.filter((r) => r.year === y);
            return (
              <li key={y} className="years-row" data-reveal>
                <span className="years-y tnum">{y}</span>
                <ul className="years-list">
                  {list.map((r) => <li key={r.slug}><Link href={`/projects/${r.slug}`} className="years-link">{r.name}</Link></li>)}
                </ul>
              </li>
            );
          })}
        </ol>
        <div className="wrap mt-10"><Link href="/projects" className="link">The full timeline</Link></div>
      </section>

      <section className="section pt-0">
        <div className="wrap grid gap-16 md:grid-cols-2 md:gap-8">
          {[[ua, "university-avenue-untitled-03"], [sp, "st-peters-12"]].map(([s, k]) => {
            const st = s as typeof ua;
            return (
              <Link key={st.slug} href={`/projects/${st.slug}`} className="tall" data-reveal>
                <Pic k={k as string} className="aspect-[4/5]" sizes="(min-width:768px) 48vw, 100vw" />
                <p className="muted mt-6">{st.facts.find((f) => f.label === "Photographed" || f.label === "Completed")?.value}</p>
                <h3 className="h2 mt-2">{st.name}</h3>
                <p className="mt-3 max-w-[44ch] muted">{st.summary}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7" data-reveal>
            <h2 className="h1">{careers.philosophy}</h2>
            <p className="lede mt-6 max-w-[42ch]">The {careers.program} puts recent graduates through a year in every part of the business.</p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9" data-reveal>
            <Link href="/careers" className="btn">Careers</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 className="h1 lg:col-span-6" data-reveal>Call the office</h2>
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <a href={firm.phoneHref} className="contact-big block">{firm.phone}</a>
            <a href={`mailto:${firm.email}`} className="link mt-3 inline-block break-all">{firm.email}</a>
            <div className="mt-8"><Link href="/contact" className="btn">Request a bid</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
