import Link from "next/link";
import Pic from "@/components/Pic";
import RecordIndex from "@/components/RecordIndex";
import { studies } from "@/lib/site";
import { covers } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("Projects", "Bridges, masonry arches, walls and dams, year by year since 2015, plus three recent jobs in photographs.", "/projects");

export default function Projects() {
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid">
          <h1 className="display page-title" data-reveal>Projects</h1>
          <p className="lede page-lede" data-reveal>Three recent jobs told in photographs, then the record year by year.</p>
        </div>
      </section>
      <section className="wrap pb-20">
        <ul className="studyrows">
          {studies.map((s) => (
            <li key={s.slug} data-reveal>
              <Link href={`/projects/${s.slug}`} className="studyrow">
                <Pic k={covers[s.slug]} className="aspect-[3/2]" sizes="(min-width:1024px) 34vw, 100vw" />
                <div>
                  <p className="muted">{s.type}</p>
                  <h2 className="h2 mt-2">{s.name}</h2>
                  <p className="mt-4 max-w-[46ch]">{s.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="section section-alt" id="record">
        <div className="wrap">
          <h2 className="h1" data-reveal>Timeline</h2>
          <p className="lede mt-5 mb-12 max-w-[50ch]" data-reveal>Twenty three projects named by Loftus or by their owners. Filter by type, owner or period.</p>
          <RecordIndex variant="timeline" />
        </div>
      </section>
    </>
  );
}
