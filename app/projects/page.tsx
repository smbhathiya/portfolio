import type { Metadata } from "next";
import { IconLock } from "@tabler/icons-react";
import projectsData, { getPublicProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { JsonLd } from "@/components/json-ld";
import { OG_IMAGE, SITE_URL, absoluteUrl } from "@/lib/site";

const TITLE = "Projects & Case Studies";
const DESCRIPTION =
  "Web apps, business websites and open-source templates by Bhathiya Lakshan, built with React, Next.js and TypeScript - plus enterprise systems for clients.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${TITLE} | Bhathiya Lakshan`,
    description: DESCRIPTION,
    url: "/projects",
    type: "website",
    images: [{ ...OG_IMAGE, alt: "Projects by Bhathiya Lakshan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Bhathiya Lakshan`,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function ProjectsPage() {
  const featuredProjects = getPublicProjects();
  const internalProjects = projectsData.filter((p) => p.isInternal);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects#page`,
        url: `${SITE_URL}/projects`,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: { "@id": `${SITE_URL}/#person` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: featuredProjects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(`/projects/${p.slug}`),
            name: p.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
        ],
      },
    ],
  };

  return (
    <main className="py-28 md:py-36 relative overflow-hidden">
      <JsonLd data={jsonLd} />
      <div className="absolute top-0 right-0 w-96 h-96 from-primary/[0.03] rounded-full bg-radial to-transparent to-70% pointer-events-none" />

      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">
            Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            All Projects
          </h1>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-xl">
            Every project I&apos;ve designed and built - from solo experiments
            to production systems for real businesses.
          </p>
        </div>

        {/* Featured project cards */}
        <h2 className="sr-only">Featured projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Professional / internal work */}
        {internalProjects.length > 0 && (
          <div>
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">
                  Enterprise
                </p>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Professional Work
                </h2>
                <p className="text-sm text-muted-foreground mt-1.5">
                  Confidential systems built for production environments.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 shrink-0">
                <IconLock className="w-4 h-4 text-muted-foreground/40" />
                <span className="text-xs text-muted-foreground/40 font-medium">
                  NDA Protected
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {internalProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden flex items-start gap-5 p-5 md:p-6 rounded-lg glass hover:border-primary/30 transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.06)]"
                >
                  {/* Left accent line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/50 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                  <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-primary/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />

                  {/* Index number */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-muted/80 border border-border/80 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/8">
                    <span className="text-xs font-black text-muted-foreground group-hover:text-primary transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="min-w-0 relative z-10 flex-1">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-base font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <IconLock className="w-3.5 h-3.5 text-muted-foreground/30 shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    {project.tag && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tag.filter((t) => t !== "All").slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-semibold text-muted-foreground bg-muted/70 px-2 py-0.5 rounded-md border border-border/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
