import type { MetadataRoute } from "next";
import { projects } from "@/src/data/projects";

const BASE_URL = "https://gtels.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/wash",
    "/projects",
    "/capacity",
    "/locations",
    "/equipment",
    "/team",
    "/clients",
    "/gallery",
    "/logistics",
    "/quality-hse",
    "/financial-capacity",
    "/resources",
    "/company-profile",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
