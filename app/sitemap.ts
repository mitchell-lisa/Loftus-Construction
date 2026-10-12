import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { SITE_URL } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/capabilities", "/record", "/about", "/careers", "/contact"];
  const projects = business.photoProjects.map((project) => `/projects/${project.slug}`);

  return [...pages, ...projects].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/projects/") ? 0.8 : 0.7,
  }));
}
