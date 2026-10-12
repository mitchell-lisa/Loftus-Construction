import Link from "next/link";
import Pic from "@/components/Pic";
import RecordIndex from "@/components/RecordIndex";
import { studies } from "@/lib/site";
import { covers } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("Projects", "Bridges, masonry arches, walls and dams for PennDOT, the Pennsylvania Turnpike, the City of Philadelphia and townships across the region.", "/projects");

export default function Projects() {
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid">
          <h1 className="display page-title" data-reveal>Projects</h1>
          <p className="lede page-lede" data-reveal>Three recent jobs in photographs, and the full record by region.</p>
        </div>
      </section>
      <section className="wrap grid gap-6 pb-20 md:grid-cols-3">
        {studies.map((s) => (
          <Link key={s.slug} href={`/projects/${s.slug}`} className="block" data-reveal>
            <Pic k={covers[s.slug]} className="aspect-[4/5]" sizes="(min-width:768px) 32vw, 100vw" />
            <h2 className="h3 mt-5">{s.name}</h2>
            <p className="muted mt-1 text-[15px]">{s.structure}</p>
          </Link>
        ))}
      </section>
      <section className="section section-alt" id="record">
        <div className="wrap">
          <h2 className="h1" data-reveal>The record</h2>
          <p className="lede mt-5 mb-12 max-w-[50ch]" data-reveal>Every project Loftus or an owner has published, grouped by state. Filter by type, owner or period.</p>
          <RecordIndex variant="regions" />
        </div>
      </section>
    </>
  );
}
