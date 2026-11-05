import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconExternalLink,
  IconChevronRight,
  IconCheck,
} from "@tabler/icons-react";
import { getProject, getPublicProjects, type Project } from "@/data/projects";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, absoluteUrl, truncate } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

// "Bliss Café - Coffee Shop" + tagline -> "Bliss Café - Coffee Shop Website" (no repeated subtitle)
const pageTitle = (p: Project) =>
  p.tagline ? `${p.title.split(" - ")[0]} - ${p.tagline}` : p.title;
const displayTags = (p: Project) => p.tag.filter((t) => t !== "All");
const hasLiveDemo = (p: Project) => Boolean(p.previewUrl && p.previewUrl !== "#");

export function generateStaticParams() {
  return getPublicProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = pageTitle(project);
  const description = truncate(project.description);
  const image = project.images[0];

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${title} | Bhathiya Lakshan`,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [{ url: image, alt: `${project.title} screenshot` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Bhathiya Lakshan`,
      description,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getPublicProjects()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
  const url = absoluteUrl(`/projects/${project.slug}`);
  const tags = displayTags(project);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: project.title,
        headline: pageTitle(project),
        description: project.description,
        url,
        image: absoluteUrl(project.images[0]),
        creator: { "@id": `${SITE_URL}/#person` },
        author: { "@id": `${SITE_URL}/#person` },
        keywords: [...tags, ...(project.stack ?? [])].join(", ") || undefined,
        sameAs: [
          hasLiveDemo(project) ? project.previewUrl : undefined,
          project.gitUrl,
        ].filter(Boolean),
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="py-28 md:py-36 relative overflow-hidden">
      <JsonLd data={jsonLd} />
      <div className="absolute top-0 right-0 w-96 h-96 from-primary/[0.03] rounded-full bg-radial to-transparent to-70% pointer-events-none" />

      <article className="container px-4 md:px-8 max-w-4xl mx-auto relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <IconChevronRight className="w-3 h-3 opacity-50" aria-hidden="true" />
            <li>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <IconChevronRight className="w-3 h-3 opacity-50" aria-hidden="true" />
            <li aria-current="page" className="text-foreground/70">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold text-foreground/70 bg-foreground/5 border border-foreground/10 px-2 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
          {project.tagline && (
            <p className="mt-3 text-lg md:text-xl text-muted-foreground">{project.tagline}</p>
          )}
        </header>

        {/* Hero image */}
        <div className="rounded-lg glass p-1.5 mb-10">
          <div className="relative aspect-[16/10] rounded-md overflow-hidden bg-muted">
            <Image
              src={project.images[0]}
              alt={`${project.title} - ${project.tagline ?? "project"} homepage screenshot`}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              loading="eager"
              fetchPriority="high"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {hasLiveDemo(project) && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              <IconExternalLink className="w-4 h-4" />
              Visit {project.title}
            </a>
          )}
          {project.gitUrl && (
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-sm font-semibold glass px-5 py-2.5 rounded-lg hover:border-primary/30 transition-colors duration-200"
            >
              <IconBrandGithub className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>

        <div className="space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Overview
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </section>

          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Key Features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-lg glass-subtle p-4 text-sm">
                    <IconCheck className="w-4 h-4 mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.stack && project.stack.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Built With
              </h2>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="text-sm font-medium glass-subtle px-3 py-1.5 rounded-lg">
                    {s}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* More projects - internal links help crawling and keep visitors on site */}
        {related.length > 0 && (
          <section className="mt-24 pt-10 border-t border-border/60">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              More Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden glass hover:border-primary/30 transition-colors duration-200"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={p.images[0]}
                      alt={`${p.title} screenshot`}
                      fill
                      sizes="(max-width: 639px) 100vw, 280px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors duration-200 line-clamp-1">
                      {p.title}
                    </p>
                    {p.tagline && (
                      <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{p.tagline}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
