import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";
import Dim from "./Dim";

/**
 * One photograph from the registry, filling its frame.
 * The frame size comes from className (aspect or height). Caption sits under it as a dimension line.
 */
export default function Pic({
  id,
  className = "",
  sizes,
  position = "object-center",
  priority = false,
  caption,
  captionClass = "text-muted",
  zoom = true,
}: {
  id: PhotoKey;
  className?: string;
  sizes: string;
  position?: string;
  priority?: boolean;
  caption?: string | false;
  captionClass?: string;
  zoom?: boolean;
}) {
  const photo = photos[id];
  const text = caption === false ? null : (caption ?? photo.caption ?? null);
  return (
    <figure className="min-w-0">
      <div className={`group relative overflow-hidden bg-navy ${className}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={80}
          className={`object-cover ${position} ${
            zoom ? "transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]" : ""
          }`}
        />
      </div>
      {text ? (
        <figcaption className="mt-3">
          <Dim start className={captionClass}>
            {text}
          </Dim>
        </figcaption>
      ) : null}
    </figure>
  );
}
