import Image from "next/image";
import Link from "next/link";
import type { JobPhoto, PhotoProject } from "@/lib/business";
import { business } from "@/lib/business";
import Divider from "./Divider";

function splitSummary(summary: string) {
  const cut = summary.indexOf(". ");
  if (cut === -1) return { line: summary, rest: "" };
  return { line: summary.slice(0, cut + 1), rest: summary.slice(cut + 2) };
}

function Frame({
  photo,
  className,
  position,
  sizes,
}: {
  photo: JobPhoto;
  className: string;
  position: string;
  sizes: string;
}) {
  return (
    <div className={`relative bg-concrete ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className={`object-cover ${position}`}
      />
    </div>
  );
}

function Spread({
  project,
  pair,
  wide,
}: {
  project: PhotoProject;
  pair: [number, number];
  wide: number;
}) {
  const { line, rest } = splitSummary(project.summary);
  const href = `/projects/${project.slug}`;
  const establishing = project.photos[0];
  const left = project.photos[pair[0]];
  const right = project.photos[pair[1]];
  const bottom = project.photos[wide];

  return (
    <article>
      <div className="relative h-[68vh] min-h-[420px] max-h-[780px] bg-navy">
        <Image
          src={establishing.src}
          alt={establishing.alt}
          fill
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <Divider className="absolute inset-x-0 bottom-0" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16 lg:py-14">
        <h2 className="text-[clamp(3rem,7vw,5.4rem)] leading-[0.88] text-navy">
          <Link href={href} className="hover:text-brand">
            {project.name}
          </Link>
        </h2>
        <div>
          <p className="text-[1.25rem] leading-snug text-navy">{line}</p>
          {rest ? (
            <p className="mt-3 text-[16.5px] leading-relaxed text-[color:var(--ink-muted)]">{rest}</p>
          ) : null}
          <Link
            href={href}
            className="mt-5 inline-flex min-h-11 items-center border-b-2 border-brand text-[17px] font-semibold text-brand"
          >
            Photographs
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-12">
        <Frame
          photo={left}
          className="aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[640px]"
          position="object-[center_50%]"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
        <Frame
          photo={right}
          className="aspect-[4/5] lg:col-span-5 lg:aspect-auto lg:min-h-[640px]"
          position="object-center"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
      <Frame
        photo={bottom}
        className="aspect-[2/1]"
        position="object-[center_42%]"
        sizes="100vw"
      />
    </article>
  );
}

export default function Projects() {
  const [brownsville, university] = business.photoProjects;

  return (
    <section id="projects">
      <Spread project={brownsville} pair={[1, 2]} wide={3} />
      <Spread project={university} pair={[3, 4]} wide={1} />
    </section>
  );
}
