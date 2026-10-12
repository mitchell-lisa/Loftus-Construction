import type { Metadata } from "next";
import { business, type JobPhoto } from "@/lib/business";

export function pageMeta(
  title: string,
  description: string,
  path: string,
  image?: JobPhoto,
): Metadata {
  const photo = image ?? business.hero;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${business.legalName}`,
      description,
      url: path,
      images: [
        {
          url: photo.src,
          width: photo.width,
          height: photo.height,
          alt: photo.alt,
        },
      ],
    },
  };
}
