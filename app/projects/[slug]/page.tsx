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
  if (ids.length === 1) return <Pic id={ids[0]} sizes="100vw" className="aspect-[4/3] md:aspect-[2/1]" caption />;
  if (ids.length === 3)
    return (
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="md:col-span-2"><Pic id={ids[0]} sizes="100vw" className="aspect-[4/3] md:aspect-[2/1]" caption /></div>
        {ids.slice(1).map((id) => <Pic key={id} id={id} sizes="(min-width:768px) 48vw, 100vw" className="aspect-[4/3]" caption />)}
      </div>
    );
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
      {ids.map((id) => (
        <Pic key={id} id={id} sizes="(min-width:768px) 48vw, 100vw" className="aspect-[4/3]" position={photos[id].height > photos[id].width ? "object-[center_60%]" : "object-center"} caption />
      ))}
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
      <div className="wrap pb-10 pt-12 lg:pb-14 lg:pt-20">
        <Link href="/projects" className="text-[15px] text-steel hover:text-navy">Projects</Link>
        <h1 className="mt-4 max-w-[18ch] text-[clamp(2.3rem,5.5vw,4.5rem)]">{p.name}</h1>
      </div>
      <div className="wrap">
        <Pic id={p.lead} sizes="100vw" priority className="aspect-[4/3] md:aspect-[21/9]" />
      </div>

      <section className="wrap grid gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <p className="text-[clamp(1.15rem,1.6vw,1.35rem)] leading-relaxed text-ink lg:col-span-7">{p.summary}</p>
        <dl className="border-t border-navy lg:col-span-4 lg:col-start-9">
          {p.sheet.map((row) => (
            <div key={row.label} className="flex justify-between gap-6 border-b border-line py-3 text-[15px]">
              <dt className="text-steel">{row.label}</dt>
              <dd className="text-right font-semibold text-navy">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {p.story.filter((s) => s.photos.length).map((s) => (
        <section key={s.heading} className="wrap border-t border-line py-14 lg:py-20">
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-8">
            <h2 className="text-[clamp(1.6rem,2.6vw,2.25rem)] lg:col-span-4">{s.heading}</h2>
            <p className="max-w-[52ch] text-steel lg:col-span-6 lg:col-start-6">{s.text}</p>
          </div>
          <div className="mt-10">
            <Gallery ids={s.photos as PhotoKey[]} />
          </div>
        </section>
      ))}

      <Link href={`/projects/${next.slug}`} className="group block border-t border-line">
        <div className="wrap flex items-center justify-between gap-6 py-12 lg:py-16">
          <span>
            <span className="block text-[clamp(1.6rem,3vw,2.5rem)] font-semibold tracking-tight text-navy group-hover:underline">{next.short}</span>
          </span>
          <span aria-hidden className="text-[28px] text-navy">&rarr;</span>
        </div>
      </Link>
    </>
  );
}
