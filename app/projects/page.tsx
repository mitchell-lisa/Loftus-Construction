import Link from "next/link";
import Pic from "@/components/Pic";
import RecordIndex from "@/components/RecordIndex";
import { studies, record } from "@/lib/site";
import { covers } from "@/lib/alloc";
import { meta } from "@/lib/meta";

export const metadata = meta("Projects", "Recent jobs in photographs and the full Loftus Construction project record.", "/projects");

export default function Projects() {
  return (
    <>
      <section className="page-head">
        <div className="wrap page-head-grid">
          <h1 className="display page-title" data-reveal>Projects</h1>
          <p className="lede page-lede" data-reveal>Recent jobs on film, and {record.length} projects on the record.</p>
        </div>
      </section>
      <div className="film pb-16" data-reveal>
        <ul className="film-track">
          {studies.map((s) => (
            <li key={s.slug} className="film-cell film-wide">
              <Link href={`/projects/${s.slug}`} className="block">
                <Pic k={covers[s.slug]} className="aspect-[3/2]" sizes="(min-width:1024px) 46vw, 85vw" />
                <h2 className="film-h">{s.name}</h2>
                <p className="muted text-[15px]">{s.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <section className="section section-alt" id="record">
        <div className="wrap">
          <h2 className="h1" data-reveal>The record</h2>
          <RecordIndex variant="cards" />
        </div>
      </section>
    </>
  );
}
