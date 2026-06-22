"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectsData from "@/data/projects";
import Image from "next/image";
import { IconBrandGithub, IconExternalLink, IconLock, IconArrowUpRight } from "@tabler/icons-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const featuredProjects = projectsData.filter((p) => !p.isInternal && p.images && p.images.length > 0);
  const internalProjects = projectsData.filter((p) => p.isInternal);

  useGSAP(
    () => {
      gsap.set(".projects-header", { opacity: 0, y: 24 });
      gsap.set(".project-card", { opacity: 0, y: 40, scale: 0.97 });
      gsap.set(".professional-header", { opacity: 0, y: 20 });
      gsap.set(".internal-card", { opacity: 0, x: -24 });

      ScrollTrigger.create({
        trigger: ".projects-header",
        start: "top 82%",
        onEnter: () => {
          gsap.to(".projects-header", { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" });
        },
      });

      document.querySelectorAll(".project-card").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1, y: 0, scale: 1,
              duration: 0.6, delay: (i % 3) * 0.1, ease: "power3.out",
            });
          },
        });
      });

      ScrollTrigger.create({
        trigger: ".professional-header",
        start: "top 85%",
        onEnter: () => {
          gsap.to(".professional-header", { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" });
        },
      });

      document.querySelectorAll(".internal-card").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1, x: 0, duration: 0.55,
              delay: (i % 2) * 0.08, ease: "power3.out",
            });
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* ── Decorative shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-primary/[0.07] border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -top-8 -left-8 w-40 h-40 rounded-full border border-border/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block select-none">
          <span className="text-[130px] font-black text-border/[0.05] leading-none">{"</>"}</span>
        </div>
        <motion.div
          className="absolute bottom-16 -right-6 w-24 h-24 rounded-2xl border border-primary/[0.1]"
          animate={{ rotate: [20, 40, 20], y: [0, -16, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-20 left-6 grid grid-cols-3 gap-[10px] hidden md:grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3px] h-[3px] rounded-full bg-primary/20"
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
            />
          ))}
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="projects-header mb-16 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">Work</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-xl">
            A selection of projects I&apos;ve designed and built — from solo experiments to production systems.
          </p>
        </div>

        {/* Featured project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="project-card group relative flex flex-col rounded-2xl overflow-hidden border border-border/70 bg-background/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_28px_60px_-16px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_28px_60px_-16px_rgba(16,185,129,0.12)] transition-all duration-300"
            >
              {/* Subtle top gradient stripe on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Project number badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-black tracking-widest text-foreground/70 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-border/60">
                    0{index + 1}
                  </span>
                </div>

                {/* Quick action links on image hover */}
                <div className="absolute top-3 right-3 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
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
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base md:text-[17px] font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4 line-clamp-2">
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
                  <span className="ml-auto">
                    <IconArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary/50 transition-colors duration-300" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional / internal work */}
        {internalProjects.length > 0 && (
          <div>
            <div className="professional-header mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Enterprise</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Professional Work</h3>
                <p className="text-sm text-muted-foreground mt-1.5">
                  Confidential systems built for production environments.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                <IconLock className="w-4 h-4 text-muted-foreground/40" />
                <span className="text-xs text-muted-foreground/40 font-medium">NDA Protected</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {internalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="internal-card group relative overflow-hidden flex items-start gap-5 p-5 md:p-6 border border-border/70 rounded-2xl bg-background/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_-8px_rgba(16,185,129,0.07)]"
                >
                  {/* Left accent line on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary/50 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                  {/* Index number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-muted/80 border border-border/80 flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/8">
                    <span className="text-xs font-black text-muted-foreground/50 group-hover:text-primary/60 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="min-w-0 relative z-10 flex-1">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-base font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                      <IconLock className="w-3.5 h-3.5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    {project.tag && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tag.slice(0, 4).map((t: string) => (
                          <span key={t} className="text-[11px] font-semibold text-muted-foreground/60 bg-muted/70 px-2 py-0.5 rounded-md border border-border/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
