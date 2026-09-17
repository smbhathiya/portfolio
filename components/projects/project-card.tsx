"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  IconBrandGithub,
  IconExternalLink,
  IconArrowUpRight,
} from "@tabler/icons-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <div style={{ perspective: 1200 }} className="project-card h-full">
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="group relative flex flex-col h-full rounded-lg overflow-hidden border border-border bg-background/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_32px_80px_-16px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_32px_80px_-16px_rgba(16,185,129,0.15)] transition-colors duration-300 transform-gpu will-change-transform"
      >
        {/* Dynamic Interactive Glare */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 60%)",
            left: glareX,
            top: glareY,
            transform: "translate(-50%, -50%)",
            width: "200%",
            height: "200%",
          }}
        />

        {/* Subtle top gradient stripe on hover */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

        {/* Image - links to the case study page */}
        <div
          className="relative aspect-[16/10] overflow-hidden bg-muted"
          style={{ transform: "translateZ(30px)" }}
        >
          <Link href={caseStudyHref} className="absolute inset-0 z-0 block">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          </Link>

          {/* Quick action links on image hover */}
          <div
            className="absolute top-3 right-3 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
            style={{ transform: "translateZ(40px)" }}
          >
            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-background/90 backdrop-blur-sm border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Source code"
              >
                <IconBrandGithub className="w-4 h-4" />
              </a>
            )}
            {project.previewUrl && project.previewUrl !== "#" && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-background/90 backdrop-blur-sm border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                aria-label="Live demo"
              >
                <IconExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div
          className="p-5 flex flex-col flex-grow relative z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          <Link href={caseStudyHref}>
            <h3 className="text-base md:text-[17px] font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
            {project.description}
          </p>

          {project.tag && project.tag.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tag.slice(0, 4).map((t: string) => (
                <span
                  key={t}
                  className="text-[11px] font-semibold text-primary/70 bg-primary/8 border border-primary/15 px-2 py-0.5 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Bottom links row */}
          <div className="flex items-center gap-4 pt-3 border-t border-border/50">
            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <IconBrandGithub className="h-3.5 w-3.5" />
                Source
              </a>
            )}
            {project.previewUrl && project.previewUrl !== "#" && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <IconExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            <Link
              href={caseStudyHref}
              className="ml-auto"
              aria-label={`View case study for ${project.title}`}
            >
              <IconArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
