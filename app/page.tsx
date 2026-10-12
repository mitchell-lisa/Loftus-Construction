import Link from "next/link";
import Image from "next/image";
import Pic from "@/components/Pic";
import { photo } from "@/lib/photos";
import { firm, record, studies, capabilities, prequalifications, award, usdShort } from "@/lib/site";

const feature: Record<string, string> = { "brownsville-road": "brownsville-10", "university-avenue": "university-avenue-untitled-04", "st-peters-road": "st-peters-17" };

export default function Home() {
  const hero = photo("brownsville-05");
  const phl = record.filter((r) => r.location === "Philadelphia, PA");
  const pa = record.filter((r) => r.state === "PA" && r.location !== "Philadelphia, PA");
  const nj = record.filter((r) => r.state === "NJ");
  return (
    <>
      <section className="hero-pan">
        <div className="hero-pan-media" aria-hidden={false}>
          <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" quality={85} className="hero-pan-img object-cover" />
        </div>
        <div className="hero-pan-shade" />
        <div className="wrap hero-pan-copy">
          <h1 className="hero-pan-title">Bridges and heavy civil work across Pennsylvania and New Jersey.</h1>
          <div className="hero-pan-foot">
            <p>Engineers and contractors since {firm.founded}. Brownsville Road over Neshaminy Creek, deck pour, April 2026.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn btn-light">See the work</Link>
              <a href={firm.phoneHref} className="btn btn-ghost">{firm.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <p className="intro lg:col-span-8" data-reveal>
            Loftus Construction was founded in Cinnaminson, New Jersey to complete difficult heavy construction projects in a safe and timely fashion. Three decades on, the work is still bridges, walls and dams for the agencies that own them.
          </p>
          <dl className="keyfacts lg:col-span-4" data-reveal>
            <div><dt>Founded</dt><dd className="tnum">{firm.founded}</dd></div>
            <div><dt>Prequalified agencies</dt><dd className="tnum">{prequalifications.length}</dd></div>
            <div><dt>Projects on the record</dt><dd className="tnum">{record.length}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="h1 lg:col-span-7" data-reveal>Where the work is</h2>
            <p className="lede lg:col-span-5" data-reveal>Most of the published record is in southeastern Pennsylvania, from Philadelphia out to Easton and Gap. The office is across the river in Cinnaminson.</p>
          </div>
          <div className="atlas mt-14 lg:mt-20">
            {[["Philadelphia", phl], ["Pennsylvania", pa], ["New Jersey", nj]].map(([label, list]) => (
              <div key={label as string} className="atlas-col" data-reveal>
                <h3 className="atlas-h"><span>{label as string}</span><span className="atlas-n tnum">{(list as typeof pa).length}</span></h3>
                <ul>
                  {(list as typeof pa).slice(0, 9).map((r) => (
                    <li key={r.slug}>
                      <Link href={`/projects/${r.slug}`} className="atlas-row">
                        <span>{r.name}</span>
                        <span className="muted tnum">{r.location ?? (r.value ? usdShort(r.value, r.approx) : "")}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/projects" className="link mt-10 inline-block" data-reveal>The full record, by region</Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h1 max-w-[14ch]" data-reveal>Three jobs, start to finish</h2>
        </div>
        <div className="wrap mt-14 grid gap-20 lg:mt-20 lg:gap-32">
          {studies.map((s, i) => (
            <Link key={s.slug} href={`/projects/${s.slug}`} className={`feature ${i % 2 ? "feature-r" : ""}`} data-reveal>
              <Pic k={feature[s.slug]} className="aspect-[4/3] lg:aspect-[16/10]" sizes="(min-width:1024px) 62vw, 100vw" />
              <div className="feature-text">
                <p className="muted">{s.type}</p>
                <h3 className="h2 mt-3">{s.name}</h3>
                <p className="mt-4 max-w-[38ch]">{s.summary}</p>
                <span className="link mt-6 inline-block">Read the project</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <h2 className="h1">What we build</h2>
            <Link href="/capabilities" className="link mt-6 inline-block">Capabilities</Link>
          </div>
          <ul className="capgrid lg:col-span-8" data-reveal>
            {capabilities.map((c) => (
              <li key={c.key}>
                <Link href={`/capabilities#${c.key}`} className="capgrid-item">
                  <span className="h3">{c.name}</span>
                  <span className="muted text-[15px]">{c.items.slice(0, 3).join(", ")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <p className="award-year tnum lg:col-span-3" data-reveal>{award.year}</p>
          <div className="lg:col-span-8 lg:col-start-5" data-reveal>
            <h2 className="h2">{award.title}</h2>
            <p className="mt-4 lede">{award.body}, for the SR 13 masonry arch rehabilitation. Loftus describes the bridge as the oldest in the United States, dating to the late 1600s.</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="h1 lg:col-span-7" data-reveal>Bidding a bridge, wall or dam?</h2>
          <div className="lg:col-span-5" data-reveal>
            <a href={firm.phoneHref} className="cta-phone tnum">{firm.phone}</a>
            <Link href="/contact" className="btn mt-8">Request a bid</Link>
          </div>
        </div>
      </section>
    </>
  );
}
