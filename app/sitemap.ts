import type { MetadataRoute } from "next";
import { getPublicProjects } from "@/data/projects";
import { OG_IMAGE, PERSON, absoluteUrl } from "@/lib/site";

// lastModified is intentionally omitted: a fake "now" date on every build
// teaches search engines to ignore it. Add real dates here if you track them.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      images: [absoluteUrl(PERSON.image), absoluteUrl(OG_IMAGE.url)],
    },
    {
      url: absoluteUrl("/projects"),
    },
    ...getPublicProjects().map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      images: p.images.map((img) => absoluteUrl(img)),
    })),
  ];
}
