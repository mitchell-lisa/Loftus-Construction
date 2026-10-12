import Link from "next/link";
import Pic from "@/components/Pic";
import RecordIndex from "@/components/RecordIndex";
import { studies, record } from "@/lib/site";
import { covers } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("Projects", "Case studies and the complete project record of Loftus Construction.", "/projects");

export default function Projects() {
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid">
          <h1 className="display page-title" data-reveal>The work</h1>
          <p className="lede page-lede" data-reveal>Three projects told in full, and every project on the record.</p>
        </div>
      </section>
      {studies.map((s, i) => (
        <section key={s.slug} className={`slab ${i % 2 ? "slab-offset" : ""}`}>
          <Link href={`/projects/${s.slug}`} className="wrap slab-offset-grid" data-reveal>
            <div className="slab-offset-text">
              <p className="muted">{s.structure}</p>
              <h2 className="slab-title mt-3">{s.name}</h2>
              <p className="lede mt-6">{s.summary}</p>
            </div>
            <Pic k={covers[s.slug]} className="aspect-[4/3]" sizes="(min-width:1024px) 58vw, 100vw" />
          </Link>
        </section>
      ))}
      <section className="section section-alt" id="record">
        <div className="wrap">
          <h2 className="h1" data-reveal>The record</h2>
          <p className="lede mt-5 mb-12 max-w-[50ch]" data-reveal>{record.length} projects named by Loftus or by their owners.</p>
          <RecordIndex variant="ledger" />
        </div>
      </section>
    </>
  );
}
