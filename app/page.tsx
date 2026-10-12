import Link from "next/link";
import Pic from "@/components/Pic";
import { firm, record, studies, award, history, careers } from "@/lib/site";

export default function Home() {
  const [b, u, s] = ["brownsville-road", "university-avenue", "st-peters-road"].map((k) => studies.find((x) => x.slug === k)!);
  const recent = record.filter((r) => r.year && r.year < 2026).slice(0, 6);
  return (
    <>
      <section className="type-hero">
        <div className="wrap type-hero-grid">
          <h1 className="type-hero-title">
            <span className="line"><span>Difficult heavy</span></span>{" "}
            <span className="line"><span>construction, in a safe</span></span>{" "}
            <span className="line"><span>and timely <em>fashion.</em></span></span>
          </h1>
          <div className="type-hero-side">
            <Pic k="st-peters-3" className="aspect-[4/5]" sizes="(min-width:1024px) 26vw, 60vw" priority pos="50% 40%" caption="St. Peters Road and its new wall, May 2026" />
          </div>
          <p className="type-hero-by">Loftus Construction, Inc. Engineers and contractors, Cinnaminson, New Jersey. Since {firm.founded}.</p>
        </div>
      </section>

      <section className="slab">
        <Link href={`/projects/${b.slug}`} className="block" data-reveal>
          <Pic k="brownsville-02" className="aspect-[4/3] md:aspect-[21/9]" sizes="100vw" />
          <div className="wrap slab-text">
            <h2 className="slab-title">{b.name}</h2>
            <div>
              <p className="lede">{b.summary}</p>
              <span className="link mt-5 inline-block">Read the project</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="slab slab-offset">
        <Link href={`/projects/${u.slug}`} className="wrap slab-offset-grid" data-reveal>
          <div className="slab-offset-text">
            <h2 className="slab-title">{u.name}</h2>
            <p className="lede mt-6">{u.summary}</p>
            <span className="link mt-5 inline-block">Read the project</span>
          </div>
          <Pic k="university-avenue-untitled-01" className="aspect-[4/3]" sizes="(min-width:1024px) 58vw, 100vw" />
        </Link>
      </section>

      <section className="slab">
        <Link href={`/projects/${s.slug}`} className="wrap block" data-reveal>
          <div className="pair">
            <Pic k="st-peters-before-3910" className="aspect-[4/3]" sizes="(min-width:768px) 48vw, 100vw" caption="Before, May 2025" />
            <Pic k="st-peters-8" className="aspect-[4/3]" sizes="(min-width:768px) 48vw, 100vw" caption="Completed, May 2026" />
          </div>
          <div className="slab-text px-0">
            <h2 className="slab-title">{s.name}</h2>
            <div>
              <p className="lede">{s.summary}</p>
              <span className="link mt-5 inline-block">Read the project</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="section story">
        <div className="wrap story-grid">
          <p className="story-year tnum" data-reveal>{award.year}</p>
          <div data-reveal>
            <h2 className="story-title">The oldest bridge</h2>
            <p className="story-p dropcap">Under the Group T contract, Loftus rehabilitated the SR 13 masonry arch, a structure the company describes as the oldest bridge in the United States, dating to the late 1600s.</p>
            <p className="story-p">The work was named Project of the Year for contracts of $10 million and under by the {award.body}. Masonry arches run through the record. The Group 7 contract covered eight masonry arch bridges, and the seven span SR 52 arch followed in June 2019.</p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="h1 lg:col-span-7" data-reveal>From the record</h2>
            <Link href="/projects" className="link lg:col-span-5 lg:text-right" data-reveal>All {record.length} projects</Link>
          </div>
          <ul className="ledger mt-10">
            {recent.map((r) => (
              <li key={r.slug} data-reveal>
                <Link href={`/projects/${r.slug}`} className="ledger-row">
                  <span className="ledger-name">{r.name}</span>
                  <span className="ledger-meta"><span>{r.type}</span><span>{r.when}</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6" data-reveal>
            <h2 className="h1">Founded {firm.founded}</h2>
            <p className="story-p mt-6">{history[0].text}</p>
            <p className="story-p">{history[1].text}</p>
            <Link href="/about" className="link mt-4 inline-block">About the firm</Link>
          </div>
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <h2 className="h1">{careers.philosophy}</h2>
            <p className="story-p mt-6">The {careers.program} is a one year training program for recent graduates, rotating through estimating, project engineering, equipment, contracts and safety.</p>
            <Link href="/careers" className="link mt-4 inline-block">Careers</Link>
          </div>
        </div>
      </section>
    </>
  );
}
