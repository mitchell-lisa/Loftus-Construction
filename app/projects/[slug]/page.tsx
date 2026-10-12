import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Pic from "@/components/Pic";
import SpeedLines from "@/components/SpeedLines";
import { business, projectBySlug } from "@/lib/business";
import { photos } from "@/lib/photos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return business.photoProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  const lead = photos[project.lead];
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${business.legalName}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: lead.src, width: lead.width, height: lead.height, alt: lead.alt }],
    },
  };
}

/** Layout for a run of photos in a chapter. Varies with the count so pages do not repeat one grid. */
function frames(count: number): { cls: string; sizes: string }[] {
  if (count === 1) return [{ cls: "aspect-[4/3] lg:aspect-[16/10]", sizes: "(min-width: 1024px) 62vw, 100vw" }];
  if (count === 2)
    return [
      { cls: "aspect-[4/3]", sizes: "(min-width: 1024px) 31vw, 100vw" },
      { cls: "aspect-[4/3] sm:mt-16", sizes: "(min-width: 1024px) 31vw, 100vw" },
    ];
  if (count === 3)
    return [
      { cls: "aspect-[4/3] sm:col-span-2 sm:aspect-[16/9]", sizes: "(min-width: 1024px) 62vw, 100vw" },
      { cls: "aspect-[4/3]", sizes: "(min-width: 1024px) 31vw, 100vw" },
      { cls: "aspect-[4/3]", sizes: "(min-width: 1024px) 31vw, 100vw" },
    ];
  return Array.from({ length: count }, () => ({
    cls: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 31vw, 100vw",
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const lead = photos[project.lead];
  const index = business.photoProjects.findIndex((p) => p.slug === project.slug);
  const next = business.photoProjects[(index + 1) % business.photoProjects.length];

  return (
    <>
      <section className="on-dark grid-paper bg-navy text-white">
        <div className="wrap grid gap-10 pb-12 pt-12 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-16 lg:pt-20">
          <div className="lg:col-span-7">
            <Link href="/projects" className="inline-flex min-h-11 items-center text-[15px] text-mist hover:text-white">
              Projects
            </Link>
            <h1 className="mt-3 text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[0.92]">{project.name}</h1>
            <p className="mt-6 max-w-[54ch] text-[1.1rem] leading-relaxed text-mist">{project.summary}</p>
          </div>
          <aside aria-label="Job sheet" className="lg:col-span-5">
            <div className="border border-white/50">
              <div className="flex items-center gap-4 border-b border-white/50 px-4 py-3">
                <span className="caps text-white">{business.shortName}</span>
                <SpeedLines weight="fine" from="right" reveal className="flex-1 text-white" />
              </div>
              <dl>
                {project.sheet.map((row) => (
                  <div key={row.label} className="grid grid-cols-[10.5rem_1fr] border-b border-white/25 last:border-b-0">
                    <dt className="caps border-r border-white/25 px-4 py-3 text-mist">{row.label}</dt>
                    <dd className="px-4 py-3 text-[15px] text-white">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <div className="relative h-[52svh] min-h-[300px] overflow-hidden bg-navy lg:h-[78svh] lg:max-h-[900px]">
        <Image
          src={lead.src}
          alt={lead.alt}
          fill
          priority
          quality={82}
          sizes="100vw"
          className="settle object-cover object-center"
        />
      </div>

      {project.story.map((chapter, ci) => {
        const f = frames(chapter.photos.length);
        return (
          <section key={chapter.heading} className={ci % 2 === 1 ? "grid-paper-light bg-white" : "bg-white"}>
            <div className="wrap grid gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
                  <SpeedLines reveal className="w-24 text-brand" />
                  <h2 className="mt-6 text-[clamp(2rem,3.6vw,3rem)] leading-[1] text-navy">{chapter.heading}</h2>
                  <p className="mt-5 max-w-[40ch] text-[1.08rem] leading-relaxed text-ink">{chapter.text}</p>
                </div>
              </div>
              {chapter.photos.length ? (
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-8">
                  {chapter.photos.map((key, i) => (
                    <div
                      key={key}
                      data-rise
                      className={chapter.photos.length === 1 ? "sm:col-span-2" : f[i].cls.includes("col-span-2") ? "sm:col-span-2" : ""}
                    >
                      <Pic
                        id={key}
                        sizes={f[i].sizes}
                        className={f[i].cls.replace("sm:col-span-2 ", "")}
                        position={photos[key].height > photos[key].width ? "object-[center_60%]" : "object-center"}
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      <section className="on-dark bg-navy text-white">
        <Link href={`/projects/${next.slug}`} className="group block">
          <div className="wrap py-14 lg:py-20">
            <p className="text-[15px] text-mist">Next job</p>
            <div className="mt-3 flex items-end gap-8">
              <p className="min-w-0 font-display text-[clamp(2rem,5vw,4.2rem)] leading-[0.98] transition-colors group-hover:text-mist">
                {next.name}
              </p>
              <SpeedLines weight="bold" className="mb-4 hidden flex-1 text-white transition-transform duration-500 group-hover:translate-x-2 md:flex" />
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
