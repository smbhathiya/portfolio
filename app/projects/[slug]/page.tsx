import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandGithub,
  IconExternalLink,
  IconArrowLeft,
} from "@tabler/icons-react";
import projectsData from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

function getPublicProjects() {
  return projectsData.filter((p) => !p.isInternal && p.images && p.images.length > 0);
}

function getProject(slug: string) {
  return getPublicProjects().find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return getPublicProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const image = project.images[0];

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Bhathiya Lakshan`,
      description: project.description,
      url: `https://bhathiya.dev/projects/${project.slug}`,
      type: "article",
      images: image
        ? [{ url: image, width: 1200, height: 750, alt: project.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Bhathiya Lakshan`,
      description: project.description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const publicProjects = getPublicProjects();
  const currentIndex = publicProjects.findIndex((p) => p.slug === slug);
  const related = publicProjects
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `https://bhathiya.dev/projects/${project.slug}`,
    image: project.images[0] ? `https://bhathiya.dev${project.images[0]}` : undefined,
    author: { "@type": "Person", name: "Bhathiya Lakshan", url: "https://bhathiya.dev" },
    keywords: project.tag?.join(", "),
  };

  return (
    <main className="py-28 md:py-36 bg-background relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-8 max-w-4xl mx-auto relative z-10">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors duration-200 mb-10"
        >
          <IconArrowLeft className="w-3.5 h-3.5" />
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          {project.tag && project.tag.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tag.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold text-primary/70 bg-primary/8 border border-primary/15 px-2 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-border/70 bg-muted mb-10">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            priority
            className="object-cover"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {project.previewUrl && project.previewUrl !== "#" && (
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              <IconExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.gitUrl && (
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold border border-border px-5 py-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            >
              <IconBrandGithub className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>

        {/* Overview */}
        <div className="prose-none">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40 mb-3">
            Overview
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* More projects */}
        {related.length > 0 && (
          <div className="mt-24 pt-10 border-t border-border/60">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40 mb-6">
              More Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col rounded-xl overflow-hidden border border-border/70 bg-background/50 hover:border-primary/40 transition-colors duration-200"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={p.images[0]}
                      alt={p.title}
                      fill
                      sizes="(max-width: 639px) 100vw, 280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors duration-200 line-clamp-1">
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
