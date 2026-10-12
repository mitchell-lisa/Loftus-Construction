import Link from "next/link";
import PageHead from "@/components/PageHead";
import Pic from "@/components/Pic";
import { business, formatUSD } from "@/lib/business";
import type { PhotoKey } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

export const metadata = pageMeta("Projects", "Bridges, walls and heavy civil projects by Loftus Construction.", "/projects");

const cover: Record<string, PhotoKey> = {
  "brownsville-road": "bMixer",
  "university-avenue": "uDeep",
  "st-peters-road": "sWall",
};

export default function ProjectsPage() {
  const record = [...business.projects].sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  return (
    <>
      <PageHead title="Projects" />
      <section className="wrap grid gap-x-8 gap-y-14 pb-20 md:grid-cols-12 lg:pb-32">
        {business.photoProjects.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className={`group block ${["md:col-span-7", "md:col-span-5 md:mt-40", "md:col-span-6 md:col-start-4"][i]}`}>
            <Pic id={cover[p.slug]} sizes="(min-width:768px) 58vw, 100vw" className={i === 1 ? "aspect-[4/3] md:aspect-[3/4]" : "aspect-[4/3]"} />
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <div>
                <h2 className="t-h2 text-[clamp(1.75rem,3vw,2.75rem)]">{p.short}</h2>
                <p className="mt-1 text-[15px] text-steel">{p.structure}</p>
              </div>
              <span aria-hidden className="arrow text-[22px] text-navy">&rarr;</span>
            </div>
          </Link>
        ))}
      </section>

      <section id="record" className="border-t border-line">
        <div className="wrap py-20 lg:py-28">
          <h2 data-reveal className="t-h2">Project record</h2>
          <div role="table" aria-label="Project record" className="mt-10 lg:mt-14">
            <div role="row" className="hidden border-b border-navy pb-3 md:grid md:grid-cols-12 md:gap-6">
              <span role="columnheader" className="label col-span-5">Project</span>
              <span role="columnheader" className="label col-span-3">Owner</span>
              <span role="columnheader" className="label col-span-2">Location</span>
              <span role="columnheader" className="label col-span-2 text-right">Contract</span>
            </div>
            {record.map((r) => (
              <div role="row" key={r.name} className="grid grid-cols-1 gap-1 border-b border-line py-5 transition-colors hover:bg-stone md:grid-cols-12 md:gap-6">
                <span role="cell" className="serif text-[20px] leading-snug text-navy md:col-span-5">{r.name}</span>
                <span role="cell" className="text-[15px] text-steel md:col-span-3 md:text-ink">{r.owner ?? ""}</span>
                <span role="cell" className="text-[15px] text-steel md:col-span-2">{r.location ?? ""}</span>
                <span role="cell" className="text-[15px] tabular-nums text-ink md:col-span-2 md:text-right">{r.value ? formatUSD(r.value) : ""}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
