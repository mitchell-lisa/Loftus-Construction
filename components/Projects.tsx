import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import Divider from "./Divider";

export default function Projects() {
  return (
    <section id="projects">
      <Divider />
      <div className="mx-auto max-w-6xl px-5 pb-4 pt-14 lg:pt-16">
        <h2 className="text-[clamp(1.85rem,3.6vw,2.7rem)] leading-none text-navy">Projects</h2>
      </div>

      <div>
        {business.photoProjects.map((project, index) => {
          const photo = project.photos[0];
          const href = `/projects/${project.slug}`;
          const flip = index % 2 === 1;
          return (
            <article key={project.slug} className="grid lg:min-h-[640px] lg:grid-cols-2">
              <a
                href={href}
                className={`relative block aspect-[4/3] bg-concrete lg:aspect-auto lg:h-full lg:min-h-[640px] ${
                  flip ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </a>
              <div className="flex items-center px-5 py-10 lg:px-14">
                <div className="max-w-[38ch]">
                  <h3 className="text-[clamp(2.1rem,4vw,3.4rem)] leading-[0.98] text-navy">
                    <Link href={href} className="hover:text-brand">
                      {project.name}
                    </Link>
                  </h3>
                  <p className="mt-4 text-[17px] leading-relaxed text-[color:var(--ink-muted)]">
                    {project.summary}
                  </p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex min-h-11 items-center border-b-2 border-brand text-[17px] font-semibold text-brand"
                  >
                    Photographs
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
