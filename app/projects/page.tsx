import Link from "next/link";
import Pic from "@/components/Pic";
import RecordIndex from "@/components/RecordIndex";
import { studies, record } from "@/lib/site";
import { covers } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("Project index", "A sortable index of Loftus Construction projects by type, owner, year and contract value.", "/projects");

export default function Projects() {
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid">
          <h1 className="display page-title" data-reveal>Project index</h1>
          <p className="lede page-lede" data-reveal>{record.length} projects. Sort by year or contract value, filter by type, owner and period.</p>
        </div>
      </section>
      <section className="wrap pb-16" id="record">
        <RecordIndex variant="table" />
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <h2 className="h1" data-reveal>Photographed in the field</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            {studies.map((s) => (
              <Link key={s.slug} href={`/projects/${s.slug}`} className="sheetcard" data-reveal>
                <Pic k={covers[s.slug]} className="aspect-[3/2]" sizes="(min-width:768px) 32vw, 100vw" />
                <dl className="sheetcard-dl">
                  <div><dt>Project</dt><dd>{s.name}</dd></div>
                  <div><dt>Structure</dt><dd>{s.structure}</dd></div>
                </dl>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
