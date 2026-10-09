import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Divider from "@/components/Divider";
import { business, projectBySlug } from "@/lib/business";

type Props = { params: Promise<{ slug: string }> };

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

  const [lead, ...rest] = project.photos;
  const split = project.summary.indexOf(". ");
  const line = split === -1 ? project.summary : project.summary.slice(0, split + 1);
  const restCopy = split === -1 ? "" : project.summary.slice(split + 2);
  const crop =
    project.slug === "brownsville"
      ? "object-cover object-[center_58%] lg:object-[center_48%]"
      : "object-cover object-center";

  return (
    <main>
      <section className="grid h-[calc(100svh-var(--header-h)-var(--banner-h))] min-h-[460px] grid-rows-[auto_auto_minmax(0,1fr)] bg-navy text-white lg:grid-cols-2 lg:grid-rows-1">
        <div className="px-5 pb-5 pt-5 lg:flex lg:flex-col lg:justify-center lg:px-12 lg:py-12">
          <h1 className="max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92]">
            {project.name}
          </h1>
          <p className="mt-4 max-w-[34ch] text-[1.2rem] leading-snug text-white">{line}</p>
          <p className="mt-6">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center border-b-2 border-white text-white"
            >
              All projects
            </Link>
          </p>
          <Divider tone="white" className="mt-6 hidden lg:flex" />
        </div>
        <Divider tone="white" className="lg:hidden" />
        <div className="relative min-h-[160px] bg-navy lg:min-h-0">
          <Image
            src={lead.src}
            alt={lead.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={crop}
          />
        </div>
      </section>

      {restCopy ? (
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="max-w-[62ch] text-[17px] leading-relaxed text-[color:var(--ink-muted)]">
            {restCopy}
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-10 pb-16">
        {rest.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="100vw"
            className="h-auto w-full"
          />
        ))}
      </div>
    </main>
  );
}
