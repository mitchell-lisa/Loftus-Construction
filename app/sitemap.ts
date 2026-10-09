import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { SITE_URL } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = business.photoProjects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects,
  ];
}
