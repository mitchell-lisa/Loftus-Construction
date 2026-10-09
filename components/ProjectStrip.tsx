import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import Divider from "./Divider";

function firstSentence(summary: string) {
  const cut = summary.indexOf(". ");
  return cut === -1 ? summary : summary.slice(0, cut + 1);
}

const cards = [
  {
    project: business.photoProjects[0],
    photo: business.photoProjects[0].photos[0],
    position: "object-[center_40%]",
  },
  {
    project: business.photoProjects[1],
    photo: business.photoProjects[1].photos[0],
    position: "object-[center_55%]",
  },
];

export default function ProjectStrip({
  tall = false,
  order = [0, 1],
}: {
  tall?: boolean;
  order?: number[];
}) {
  const frame = tall
    ? "h-[62vh] min-h-[420px] max-h-[760px]"
    : "h-[42vh] min-h-[260px] max-h-[480px]";

  return (
    <div>
      {order.map((index) => cards[index]).map(({ project, photo, position }) => (
        <article key={project.slug} className="group bg-white">
          <Link href={`/projects/${project.slug}`} className="block">
            <div className={`relative overflow-hidden bg-white ${frame}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="100vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-[1.02] ${position}`}
              />
              <Divider className="absolute inset-x-0 bottom-0" />
            </div>
          </Link>
          <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16 lg:py-10">
            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.9] text-navy">
              <Link href={`/projects/${project.slug}`} className="hover:text-brand">
                {project.name}
              </Link>
            </h2>
            <div>
              <p className="text-[1.15rem] leading-snug text-ink">{firstSentence(project.summary)}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-4 inline-flex min-h-11 items-center border-b-2 border-brand font-semibold text-brand"
              >
                View the photographs
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
