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
      <section className="wrap grid gap-x-8 gap-y-14 pb-20 md:grid-cols-3 lg:pb-32">
        {business.photoProjects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
            <Pic id={cover[p.slug]} sizes="(min-width:768px) 32vw, 100vw" className="aspect-[4/5]" />
            <h2 className="mt-5 text-[22px] group-hover:underline">{p.short}</h2>
            <p className="mt-1 text-[15px] text-steel">{p.structure}</p>
          </Link>
        ))}
      </section>

      <section id="record" className="border-t border-line">
        <div className="wrap py-20 lg:py-28">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)]">Project record</h2>
          <div role="table" aria-label="Project record" className="mt-10 lg:mt-14">
            <div role="row" className="hidden border-b border-navy pb-3 md:grid md:grid-cols-12 md:gap-6">
              <span role="columnheader" className="label col-span-5">Project</span>
              <span role="columnheader" className="label col-span-3">Owner</span>
              <span role="columnheader" className="label col-span-2">Location</span>
              <span role="columnheader" className="label col-span-2 text-right">Contract</span>
            </div>
            {record.map((r) => (
              <div role="row" key={r.name} className="grid grid-cols-1 gap-1 border-b border-line py-5 md:grid-cols-12 md:gap-6">
                <span role="cell" className="text-[17px] font-semibold text-navy md:col-span-5">{r.name}</span>
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
