import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Divider from "@/components/Divider";
import { business, projectBySlug } from "@/lib/business";

type Props = { params: Promise<{ slug: string }> };

const frames: Record<string, { index: number; className: string; position: string; sizes: string }[]> = {
  brownsville: [
    {
      index: 1,
      className: "col-span-full aspect-[16/9]",
      position: "object-[center_55%]",
      sizes: "100vw",
    },
    {
      index: 2,
      className: "col-span-full aspect-[4/5] lg:col-span-5 lg:aspect-auto lg:min-h-[680px]",
      position: "object-center",
      sizes: "(min-width: 1024px) 42vw, 100vw",
    },
    {
      index: 3,
      className: "col-span-full aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[680px]",
      position: "object-[center_40%]",
      sizes: "(min-width: 1024px) 58vw, 100vw",
    },
    {
      index: 4,
      className: "col-span-full aspect-[2/1]",
      position: "object-[center_48%]",
      sizes: "100vw",
    },
  ],
  "university-avenue": [
    {
      index: 1,
      className: "col-span-full aspect-[16/9]",
      position: "object-center",
      sizes: "100vw",
    },
    {
      index: 2,
      className: "col-span-full aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[680px]",
      position: "object-center",
      sizes: "(min-width: 1024px) 58vw, 100vw",
    },
    {
      index: 4,
      className: "col-span-full aspect-square lg:col-span-5 lg:aspect-auto lg:min-h-[680px]",
      position: "object-center",
      sizes: "(min-width: 1024px) 42vw, 100vw",
    },
    {
      index: 3,
      className: "col-span-full aspect-[2/1]",
      position: "object-[center_60%]",
      sizes: "100vw",
    },
  ],
};

export function generateStaticParams() {
  return business.photoProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  const lead = project.photos[0];
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${business.legalName}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [
        {
          url: lead.src,
          width: lead.width,
          height: lead.height,
          alt: lead.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const lead = project.photos[0];
  const cut = project.summary.indexOf(". ");
  const line = cut === -1 ? project.summary : project.summary.slice(0, cut + 1);
  const rest = cut === -1 ? "" : project.summary.slice(cut + 2);
  const sequence = frames[project.slug] ?? [];

  return (
    <>
      <section className="on-dark grid h-[calc(100svh-var(--header-h)-var(--banner-h))] min-h-[520px] grid-rows-[minmax(180px,1fr)_auto] bg-navy text-white">
        <div className="relative min-h-0 bg-navy">
          <Image
            src={lead.src}
            alt={lead.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_46%]"
          />
          <Divider tone="white" className="absolute inset-x-0 bottom-0" />
        </div>
        <div className="bg-navy px-5 pb-20 pt-10 lg:px-8 lg:py-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-[14ch] text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.92]">
              {project.name}
            </h1>
            <div className="max-w-md lg:pb-1">
              <p className="text-[1.2rem] leading-snug text-white">{line}</p>
              <p className="mt-4">
                <Link
                  href="/projects"
                  className="inline-flex min-h-11 items-center border-b-2 border-white text-white"
                >
                  All projects
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {rest ? (
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="max-w-[46ch] text-[1.15rem] leading-relaxed text-navy">{rest}</p>
        </div>
      ) : null}

      <div className="grid lg:grid-cols-12">
        {sequence.map((frame) => {
          const photo = project.photos[frame.index];
          if (!photo) return null;
          return (
            <div key={photo.src} className={`relative bg-white ${frame.className}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={frame.sizes}
                className={`object-cover ${frame.position}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
