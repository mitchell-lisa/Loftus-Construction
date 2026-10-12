import Link from "next/link";
import Pic from "@/components/Pic";
import { firm, record, studies, capabilities, prequalifications, associations, careers, usdShort } from "@/lib/site";

const film: Record<string, string> = { "brownsville-road": "brownsville-19", "university-avenue": "university-avenue-13", "st-peters-road": "st-peters-6" };

export default function Home() {
  const largest = Math.max(...record.map((r) => (r.approx ? 0 : r.value ?? 0)));
  const picks = ["41st-street", "country-lakes-dam", "sr-13-group-t", "db-155"].map((s) => record.find((r) => r.slug === s)!);
  return (
    <>
      <section className="mosaic">
        <div className="mosaic-grid">
          <div className="m-title">
            <h1 className="m-h1">Bridges. Walls. Dams.</h1>
            <p className="m-sub">Heavy civil engineers and contractors since {firm.founded}.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-white">The work</Link>
              <a href={firm.phoneHref} className="btn btn-outline">{firm.phone}</a>
            </div>
          </div>
          <div className="m-a"><Pic k="brownsville-16" className="h-full" sizes="(min-width:1024px) 42vw, 100vw" priority /></div>
          <div className="m-b"><Pic k="university-avenue-untitled-01" className="h-full" sizes="(min-width:1024px) 28vw, 50vw" priority /></div>
          <div className="m-c"><Pic k="st-peters-12" className="h-full" sizes="(min-width:1024px) 28vw, 50vw" /></div>
          <div className="m-d"><Pic k="brownsville-start-3454" className="h-full" sizes="(min-width:1024px) 21vw, 50vw" /></div>
          <div className="m-e"><Pic k="brownsville-04" className="h-full" sizes="(min-width:1024px) 21vw, 50vw" /></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="h1" data-reveal>On the job</h2>
          <p className="muted" data-reveal>Scroll sideways</p>
        </div>
        <div className="film mt-10" data-reveal>
          <ul className="film-track">
            {studies.map((s) => (
              <li key={s.slug} className="film-cell film-photo">
                <Link href={`/projects/${s.slug}`} className="block">
                  <Pic k={film[s.slug]} className="aspect-[4/5]" sizes="(min-width:1024px) 30vw, 80vw" />
                  <h3 className="film-h">{s.short}</h3>
                  <p className="muted text-[15px]">{s.structure}</p>
                </Link>
              </li>
            ))}
            {picks.map((r) => (
              <li key={r.slug} className="film-cell">
                <Link href={`/projects/${r.slug}`} className="film-card">
                  <span className="rcard-type">{r.type}</span>
                  <span className="film-card-h">{r.name}</span>
                  <span className="film-card-n">{r.note ?? r.owner}</span>
                  <span className="film-card-v tnum">{r.value ? usdShort(r.value) : r.when}</span>
                </Link>
              </li>
            ))}
            <li className="film-cell">
              <Link href="/projects" className="film-card film-all">
                <span className="film-card-h">All {record.length} projects</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2 className="h1" data-reveal>What we build</h2>
          <div className="tiles mt-12">
            {capabilities.map((c) => (
              <Link key={c.key} href={`/capabilities#${c.key}`} className="tile" data-reveal>
                <span className="tile-h">{c.name}</span>
                <span className="tile-items">{c.items.join(", ")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap band-grid">
          {[
            [String(firm.founded), "Founded in Cinnaminson, NJ"],
            [String(prequalifications.length), "Agencies prequalified with"],
            [String(associations.length), "Industry associations"],
            [usdShort(largest), "Largest published contract"],
          ].map(([n, l]) => (
            <div key={l} className="band-cell" data-reveal>
              <span className="band-n tnum">{n}</span>
              <span className="band-l">{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7" data-reveal>
            <h2 className="h1">{careers.philosophy}</h2>
            <p className="lede mt-6 max-w-[44ch]">The {careers.program}: one year for recent graduates across estimating, project engineering, equipment, contracts and safety.</p>
            <Link href="/careers" className="btn mt-8">Careers</Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="h1 lg:col-span-7" data-reveal>Out for bid?</h2>
          <div className="lg:col-span-5" data-reveal>
            <a href={firm.phoneHref} className="contact-big block">{firm.phone}</a>
            <a href={`mailto:${firm.email}`} className="mt-2 inline-block break-all underline underline-offset-4">{firm.email}</a>
            <div className="mt-8"><Link href="/contact" className="btn">Request a bid</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
