import type { MetadataRoute } from "next";
import { internalPages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return internalPages.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
