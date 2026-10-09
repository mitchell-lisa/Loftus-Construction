import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main>
      <figure>
        <div className="relative aspect-[16/9] max-h-[760px] w-full bg-navy">
          <Image
            src={lead.src}
            alt={lead.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <figcaption
          aria-hidden="true"
          className="mx-auto max-w-6xl px-5 pt-3 text-[15px] text-[color:var(--ink-muted)]"
        >
          {lead.alt}
        </figcaption>
      </figure>

      <header className="mx-auto max-w-6xl px-5 py-10 lg:py-14">
        <h1 className="max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.95] text-navy">
          {project.name}
        </h1>
        <p className="mt-5 max-w-[62ch] text-[18px] leading-relaxed text-[color:var(--ink-muted)]">
          {project.summary}
        </p>
        <p className="mt-6">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center border-b-2 border-brand text-brand"
          >
            All projects
          </Link>
        </p>
      </header>

      <div className="flex flex-col gap-10 pb-16">
        {rest.map((photo) => (
          <figure key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="100vw"
              className="h-auto w-full"
            />
            <figcaption
              aria-hidden="true"
              className="mx-auto max-w-6xl px-5 pt-3 text-[15px] text-[color:var(--ink-muted)]"
            >
              {photo.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
