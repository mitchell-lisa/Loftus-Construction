import Link from "next/link";
import Pic from "@/components/Pic";
import { firm, record, studies, capabilities, prequalifications, associations, usd, usdShort } from "@/lib/site";

const cards: Record<string, [string, string]> = {
  "brownsville-road": ["brownsville-09", "April 2026"],
  "university-avenue": ["university-avenue-06", "August 2026"],
  "st-peters-road": ["st-peters-before-3883", "Before, May 2025"],
};

export default function Home() {
  const top = [...record].filter((r) => r.value && !r.approx).sort((a, b) => (b.value ?? 0) - (a.value ?? 0)).slice(0, 8);
  const largest = top[0];
  return (
    <>
      <section className="split">
        <div className="split-copy">
          <div className="split-inner">
            <h1 className="split-title">Engineers and contractors for difficult structures.</h1>
            <p className="lede mt-6 max-w-[34ch]">Bridges, masonry arches, retaining walls, foundations and dams for public owners in Pennsylvania, New Jersey and Delaware.</p>
            <dl className="spec mt-10">
              <div><dt>Founded</dt><dd>{firm.founded}, Cinnaminson, NJ</dd></div>
              <div><dt>Prequalified</dt><dd>{prequalifications.length} agencies</dd></div>
              <div><dt>Record</dt><dd>{record.length} published projects</dd></div>
              <div><dt>Largest</dt><dd>{usd(largest.value!)}</dd></div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/projects" className="btn">Project index</Link>
              <Link href="/contact" className="btn btn-line">Request a bid</Link>
            </div>
          </div>
        </div>
        <div className="split-media">
          <Pic k="university-avenue-untitled-02" className="h-full min-h-[340px]" sizes="(min-width:1024px) 50vw, 100vw" priority caption="University Avenue Bridge over the Schuylkill River, Philadelphia" />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="h1 lg:col-span-7" data-reveal>Largest published contracts</h2>
            <p className="lede lg:col-span-5" data-reveal>Contract amounts as stated by Loftus.</p>
          </div>
          <div className="table-scroll mt-12" data-reveal>
            <table className="rtable">
              <thead><tr><th>Project</th><th className="hide-sm">Owner</th><th className="hide-md">Location</th><th className="num">Contract</th></tr></thead>
              <tbody>
                {top.map((r) => (
                  <tr key={r.slug}>
                    <td><Link href={`/projects/${r.slug}`} className="rlink">{r.name}</Link><span className="show-sm">{r.owner ?? r.type}</span></td>
                    <td className="hide-sm">{r.owner ?? <span className="muted">Not published</span>}</td>
                    <td className="hide-md">{r.location ?? <span className="muted">Not published</span>}</td>
                    <td className="num tnum">{usdShort(r.value!)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/projects" className="link mt-8 inline-block">All {record.length} projects, sortable</Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <h2 className="h1" data-reveal>Capability matrix</h2>
          <div className="matrix mt-12" data-reveal>
            {capabilities.map((c) => {
              const jobs = record.filter((r) => r.caps.includes(c.key));
              return (
                <Link key={c.key} href={`/capabilities#${c.key}`} className="matrix-cell">
                  <span className="matrix-h">{c.name}</span>
                  <span className="matrix-items">{c.items.join(" / ")}</span>
                  <span className="matrix-n tnum">{jobs.length ? `${jobs.length} on the record` : "Capability listed"}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h1" data-reveal>Field record</h2>
          <p className="lede mt-5 max-w-[46ch]" data-reveal>Three recent jobs, documented from first site visit to completion.</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            {studies.map((s) => (
              <Link key={s.slug} href={`/projects/${s.slug}`} className="sheetcard" data-reveal>
                <Pic k={cards[s.slug][0]} className="aspect-[4/3]" sizes="(min-width:768px) 32vw, 100vw" />
                <dl className="sheetcard-dl">
                  <div><dt>Project</dt><dd>{s.short}</dd></div>
                  <div><dt>Structure</dt><dd>{s.structure}</dd></div>
                  <div><dt>Frame</dt><dd>{cards[s.slug][1]}</dd></div>
                </dl>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <h2 className="h1">Qualified</h2>
            <p className="mt-5 muted">Prequalified to bid with {prequalifications.length} public agencies. Member of {associations.length} industry associations.</p>
            <Link href="/about#prequalifications" className="link mt-6 inline-block">Credentials</Link>
          </div>
          <ul className="pq lg:col-span-8" data-reveal>
            {prequalifications.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 className="h1 lg:col-span-5" data-reveal>Bid documents and inquiries</h2>
          <dl className="spec lg:col-span-6 lg:col-start-7" data-reveal>
            <div><dt>Phone</dt><dd><a href={firm.phoneHref}>{firm.phone}</a></dd></div>
            <div><dt>Fax</dt><dd>{firm.fax}</dd></div>
            <div><dt>Email</dt><dd><a className="break-all" href={`mailto:${firm.email}`}>{firm.email}</a></dd></div>
            <div><dt>Office</dt><dd>{firm.street}, {firm.city}, {firm.state} {firm.zip}</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
