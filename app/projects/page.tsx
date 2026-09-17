import type { Metadata } from "next";
import { IconLock } from "@tabler/icons-react";
import projectsData from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A complete showcase of software projects by Bhathiya Lakshan - full-stack web apps, LMS platforms, dashboards, and open-source templates built with React, Next.js, and TypeScript.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Bhathiya Lakshan",
    description:
      "A complete showcase of software projects by Bhathiya Lakshan - full-stack web apps, LMS platforms, dashboards, and open-source templates.",
    url: "https://bhathiya.dev/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  const featuredProjects = projectsData.filter(
    (p) => !p.isInternal && p.images && p.images.length > 0,
  );
  const internalProjects = projectsData.filter((p) => p.isInternal);

  return (
    <main className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.03] blur-[100px] rounded-full pointer-events-none" />

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
              <div className="hidden md:flex items-center gap-2 flex-shrink-0">
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
                  className="group relative overflow-hidden flex items-start gap-5 p-5 md:p-6 border border-border rounded-lg bg-background/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_-8px_rgba(16,185,129,0.07)]"
                >
                  {/* Left accent line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/50 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />

                  {/* Index number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-muted/80 border border-border/80 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/8">
                    <span className="text-xs font-black text-muted-foreground/50 group-hover:text-primary/60 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="min-w-0 relative z-10 flex-1">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-base font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <IconLock className="w-3.5 h-3.5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    {project.tag && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tag.slice(0, 4).map((t: string) => (
                          <span
                            key={t}
                            className="text-[11px] font-semibold text-muted-foreground/60 bg-muted/70 px-2 py-0.5 rounded-md border border-border/50"
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
