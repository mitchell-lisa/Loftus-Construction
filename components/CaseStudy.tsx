import Link from "next/link";
import Pic from "./Pic";
import { studies, type Study } from "@/lib/site";
import { studyPhotos } from "@/lib/alloc";
import { theme } from "@/lib/theme";
import { photo } from "@/lib/photos";

function Facts({ s }: { s: Study }) {
  return (
    <dl className="facts">
      {s.facts.map((f) => (
        <div key={f.label} className="fact">
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Scope({ s }: { s: Study }) {
  return (
    <div className="scope">
      <h2 className="h3">Scope</h2>
      <ul className="scope-list">{s.scope.map((x) => <li key={x}>{x}</li>)}</ul>
    </div>
  );
}

function Next({ s }: { s: Study }) {
  const i = studies.findIndex((x) => x.slug === s.slug);
  const n = studies[(i + 1) % studies.length];
  return (
    <section className="next-case">
      <div className="wrap flex flex-col gap-6 py-16 sm:flex-row sm:items-end sm:justify-between lg:py-24">
        <div>
          <p className="muted">Next project</p>
          <Link href={`/projects/${n.slug}`} className="display next-title">{n.name}</Link>
        </div>
        <Link href="/projects" className="link">All 23 projects</Link>
      </div>
    </section>
  );
}

export default function CaseStudy({ s }: { s: Study }) {
  const ph = studyPhotos[s.slug];
  const style: string = theme.caseStyle;
  const chapters = s.chapters.filter((c) => ph.chapters[c.key]?.length);

  return (
    <article className={`case case-${style}`}>
      <header className="case-head">
        <div className="wrap case-head-grid">
          <div>
            <p className="case-type">{s.type}{s.place ? `, ${s.place}` : ""}</p>
            <h1 className="display case-title" data-reveal>{s.name}</h1>
          </div>
          <p className="lede case-summary" data-reveal>{s.summary}</p>
        </div>
        <div className="case-lead" data-reveal>
          <Pic k={ph.lead} className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.2/1]" sizes="100vw" priority />
        </div>
      </header>

      <section className="wrap case-brief">
        <Facts s={s} />
        <Scope s={s} />
      </section>

      <section className="case-chapters">
        {chapters.map((c, i) => {
          const keys = ph.chapters[c.key];
          const portrait = (k: string) => photo(k).height > photo(k).width;
          return (
            <div key={c.key} className={`chapter chapter-${i % 2 ? "odd" : "even"} n-${keys.length}`} data-reveal>
              <div className="wrap chapter-grid">
                <div className="chapter-text">
                  <p className="chapter-date tnum">{c.date}</p>
                  <h2 className="h2">{c.title}</h2>
                  <p className="chapter-p">{c.text}</p>
                </div>
                <div className="chapter-photos">
                  {keys.map((k, j) => {
                    const anyPortrait = keys.some(portrait);
                    const solo = keys.length === 1;
                    const lead = !solo && keys.length % 2 === 1 && j === 0 && !portrait(k);
                    const cls = solo ? (portrait(k) ? "aspect-[4/5]" : "aspect-[16/9]") : lead ? "aspect-[16/9]" : anyPortrait ? "aspect-[4/5]" : "aspect-[4/3]";
                    return (
                      <div key={k} className={solo ? (portrait(k) ? "solo-portrait" : "span-all") : lead ? "span-all" : ""}>
                        <Pic
                          k={k}
                          className={cls}
                          sizes={style === "strip" ? "(min-width:1024px) 50vw, 85vw" : "(min-width:1024px) 60vw, 100vw"}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <Next s={s} />
    </article>
  );
}
