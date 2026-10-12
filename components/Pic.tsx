import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

export default function Pic({
  id,
  className = "aspect-[3/2]",
  sizes,
  position = "object-center",
  priority = false,
  caption = false,
}: {
  id: PhotoKey;
  className?: string;
  sizes: string;
  position?: string;
  priority?: boolean;
  caption?: boolean | string;
}) {
  const photo = photos[id];
  const text = typeof caption === "string" ? caption : caption ? (photo as { caption?: string }).caption : null;
  return (
    <figure className="min-w-0">
      <div className={`relative overflow-hidden bg-stone ${className}`}>
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} quality={82} className={`zoom object-cover ${position}`} />
      </div>
      {text ? <figcaption className="mt-3 text-[14px] text-steel">{text}</figcaption> : null}
    </figure>
  );
}
