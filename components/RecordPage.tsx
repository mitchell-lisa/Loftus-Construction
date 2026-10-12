import Link from "next/link";
import { capabilities, record, usd, type Rec } from "@/lib/site";

export default function RecordPage({ r }: { r: Rec }) {
  const rows: [string, string | null][] = [
    ["Type", r.type],
    ["Owner", r.owner],
    ["Location", r.location],
    ["Structure", r.structure],
    ["Dates", r.when],
    ["Contract", r.value ? usd(r.value, r.approx) : null],
  ];
  const related = record.filter((x) => x.slug !== r.slug && x.type === r.type).slice(0, 4);
  const caps = capabilities.filter((c) => r.caps.includes(c.key));
  return (
    <article className="recpage">
      <div className="wrap grid gap-10 pb-16 pt-14 lg:grid-cols-12 lg:pb-24 lg:pt-24">
        <div className="lg:col-span-8">
          <Link href="/projects" className="link text-[15px]">Project record</Link>
          <h1 className="display rec-title mt-6" data-reveal>{r.name}</h1>
          {r.note ? <p className="lede mt-8 max-w-[38ch]" data-reveal>{r.note}</p> : null}
        </div>
        <dl className="facts lg:col-span-4 lg:pt-16">
          {rows.map(([k, v]) => (
            <div key={k} className="fact">
              <dt>{k}</dt>
              <dd className={v ? "" : "muted"}>{v ?? "Not published"}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="wrap rec-foot grid gap-10 pb-20 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-4">
          <p className="muted text-[15px]">No photographs of this project are on file yet. Facts are as published by Loftus or the owner.</p>
        </div>
        {caps.length ? (
          <div className="lg:col-span-3">
            <h2 className="h3">Capabilities</h2>
            <ul className="mt-3 space-y-1">{caps.map((c) => <li key={c.key}><Link className="link" href={`/capabilities#${c.key}`}>{c.name}</Link></li>)}</ul>
          </div>
        ) : null}
        {related.length ? (
          <div className="lg:col-span-5">
            <h2 className="h3">More {r.type.toLowerCase()} work</h2>
            <ul className="mt-3 space-y-1">{related.map((x) => <li key={x.slug}><Link className="link" href={`/projects/${x.slug}`}>{x.name}</Link></li>)}</ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
