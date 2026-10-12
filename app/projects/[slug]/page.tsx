import Link from "next/link";
import { notFound } from "next/navigation";
import Pic from "@/components/Pic";
import { business, projectBySlug } from "@/lib/business";
import { photos, type PhotoKey } from "@/lib/photos";
import { pageMeta } from "@/lib/pageMeta";

export function generateStaticParams() {
  return business.photoProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = projectBySlug((await params).slug);
  if (!p) return {};
  return pageMeta(p.short, p.summary, `/projects/${p.slug}`, photos[p.lead]);
}

function Gallery({ ids }: { ids: readonly PhotoKey[] }) {
  const pos = (id: PhotoKey) => (photos[id].height > photos[id].width ? "object-[center_60%]" : "object-center");
  if (ids.length === 1)
    return <div data-reveal><Pic id={ids[0]} sizes="(min-width:1360px) 1250px, 100vw" className="aspect-[4/3] md:aspect-[16/8]" caption /></div>;
  if (ids.length === 3)
    return (
      <div className="grid gap-8 md:grid-cols-12 md:gap-8">
        <div data-reveal className="md:col-span-12"><Pic id={ids[0]} sizes="(min-width:1360px) 1250px, 100vw" className="aspect-[4/3] md:aspect-[16/8]" caption /></div>
        <div data-reveal className="md:col-span-7"><Pic id={ids[1]} sizes="(min-width:768px) 58vw, 100vw" className="aspect-[4/3]" position={pos(ids[1])} caption /></div>
        <div data-reveal style={{ ["--d" as string]: "120ms" }} className="md:col-span-5 md:mt-24"><Pic id={ids[2]} sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/3] md:aspect-[4/5]" position={pos(ids[2])} caption /></div>
      </div>
    );
  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-8">
      {ids.map((id, i) => {
        const wide = i % 4 === 0 || i % 4 === 3;
        return (
          <div key={id} data-reveal style={{ ["--d" as string]: `${(i % 2) * 120}ms` }} className={wide ? "md:col-span-7" : "md:col-span-5"}>
            <Pic id={id} sizes={wide ? "(min-width:768px) 58vw, 100vw" : "(min-width:768px) 40vw, 100vw"} className={wide ? "aspect-[4/3]" : "aspect-[4/3] md:aspect-[4/5]"} position={pos(id)} caption />
          </div>
        );
      })}
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = projectBySlug((await params).slug);
  if (!p) notFound();
  const i = business.photoProjects.indexOf(p);
  const next = business.photoProjects[(i + 1) % business.photoProjects.length];
  return (
    <>
      <div className="wrap pb-10 pt-12 lg:pb-16 lg:pt-24">
        <Link href="/projects" className="group text-[15px] text-steel hover:text-chalk"><span aria-hidden className="mr-2">&larr;</span>Projects</Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h1 className="t-h1 lg:col-span-9">{p.name}</h1>
          <p className="text-[15px] text-steel lg:col-span-3 lg:pb-2 lg:text-right">{p.structure}</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] md:px-10 xl:px-14">
        <Pic id={p.lead} sizes="100vw" priority className="aspect-[4/3] md:aspect-[21/9]" />
      </div>

      <section className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <p data-reveal className="text-[clamp(1.3rem,2.1vw,1.75rem)] leading-[1.4] tracking-[-0.012em] text-chalk lg:col-span-7">{p.summary}</p>
        <dl data-reveal className="self-start border-t border-rule lg:sticky lg:top-[calc(var(--header-h)+32px)] lg:col-span-4 lg:col-start-9">
          {p.sheet.map((row) => (
            <div key={row.label} className="flex justify-between gap-6 border-b border-line py-4 text-[15px]">
              <dt className="text-steel">{row.label}</dt>
              <dd className="text-right font-semibold text-chalk">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {p.story.filter((s) => s.photos.length).map((s) => (
        <section key={s.heading} className="wrap py-16 lg:py-24">
          <div data-reveal className="grid gap-4 border-t border-line pt-8 lg:grid-cols-12 lg:gap-8 lg:pt-10">
            <h2 className="t-h3 text-[clamp(1.6rem,2.6vw,2.25rem)] lg:col-span-4">{s.heading}</h2>
            <p className="max-w-[52ch] text-steel lg:col-span-6 lg:col-start-6">{s.text}</p>
          </div>
          <div className="mt-10 lg:mt-14">
            <Gallery ids={s.photos as PhotoKey[]} />
          </div>
        </section>
      ))}

      <Link href={`/projects/${next.slug}`} className="group block border-t border-line">
        <div className="wrap flex items-center justify-between gap-6 py-14 lg:py-24">
          <span>
            <span className="block t-h2 font-semibold text-chalk">{next.short}</span>
          </span>
          <span aria-hidden className="arrow text-[clamp(1.75rem,3vw,2.75rem)] text-chalk">&rarr;</span>
        </div>
      </Link>
    </>
  );
}
