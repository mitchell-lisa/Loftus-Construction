import Image from "next/image";
import { photo } from "@/lib/photos";

export default function Pic({
  k,
  className = "aspect-[3/2]",
  sizes,
  priority = false,
  caption,
  pos = "50% 50%",
  imgClass = "",
}: {
  k: string | null | undefined;
  className?: string;
  sizes: string;
  priority?: boolean;
  caption?: string | null;
  pos?: string;
  imgClass?: string;
}) {
  if (!k) return null;
  const p = photo(k);
  return (
    <figure className="pic min-w-0">
      <div className={`pic-frame relative overflow-hidden ${className}`}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} quality={82} className={`object-cover ${imgClass}`} style={{ objectPosition: pos }} />
      </div>
      {caption ? <figcaption className="figcap">{caption}</figcaption> : null}
    </figure>
  );
}
