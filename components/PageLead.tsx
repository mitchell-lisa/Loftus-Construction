import Image from "next/image";
import type { JobPhoto } from "@/lib/business";
import Divider from "./Divider";

export default function PageLead({
  title,
  line,
  photo,
  position = "object-[center_46%]",
}: {
  title: string;
  line: string;
  photo?: JobPhoto;
  position?: string;
}) {
  if (photo) {
    return (
      <section className="on-dark bg-navy text-white">
        <div className="relative h-[46vh] min-h-[240px] max-h-[520px] overflow-hidden bg-white">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="100vw"
            className={`object-cover ${position}`}
          />
          <Divider tone="white" className="absolute inset-x-0 bottom-0" />
        </div>
        <div className="px-5 py-10 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-6xl">
            <h1 className="max-w-[14ch] text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.92]">
              {title}
            </h1>
            <p className="mt-4 max-w-[46ch] text-[1.15rem] leading-snug text-white">{line}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="on-dark bg-navy text-white">
      <Divider tone="white" />
      <div className="px-5 py-10 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-[14ch] text-[clamp(2.6rem,5.5vw,4.6rem)] leading-[0.92]">{title}</h1>
          <p className="mt-4 max-w-[46ch] text-[1.15rem] leading-snug text-white">{line}</p>
        </div>
      </div>
    </section>
  );
}
