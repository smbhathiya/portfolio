"use client";

import projectsData from "@/data/projects";
import Image from "next/image";
import { IconBrandGithub, IconExternalLink, IconLock } from "@tabler/icons-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ProjectsSection() {
  // Show projects with images as featured, internal ones as professional work
  const featuredProjects = projectsData.filter((p) => !p.isInternal && p.images && p.images.length > 0);
  const internalProjects = projectsData.filter((p) => p.isInternal);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">Work</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Featured Projects</h2>
        </motion.div>

        {/* Featured projects with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative border border-border/80 rounded-xl overflow-hidden hover:border-primary/50 dark:hover:border-primary/35 transition-all duration-300 flex flex-col bg-background/40 backdrop-blur-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.12)]"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.03] dark:to-primary/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

              {/* Image */}
              <div className="aspect-[16/10] relative overflow-hidden bg-muted border-b border-border/80">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 scale-100 group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              <div className="p-5 flex flex-col flex-grow relative z-10">
                <span className="text-[11px] md:text-xs font-bold tracking-widest text-muted-foreground/40 uppercase mb-2">
                  0{index + 1}
                </span>

                <h3 className="text-base md:text-lg font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {project.tag && project.tag.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tag.slice(1, 3).map((t: string) => (
                      <span key={t} className="text-xs font-semibold text-muted-foreground/80 bg-muted/65 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-5">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                  {project.gitUrl && (
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <IconBrandGithub className="h-4 w-4" />
                      Source
                    </a>
                  )}
                  {project.previewUrl && project.previewUrl !== "#" && (
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <IconExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional / Internal work */}
        {internalProjects.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h3 className="text-2xl font-semibold tracking-tight">Professional Work</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                Enterprise systems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {internalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative overflow-hidden flex items-start gap-4 p-5 border border-border/80 rounded-xl hover:border-primary/50 dark:hover:border-primary/35 transition-all duration-300 group bg-background/30 backdrop-blur-xs hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.06)]"
                >
                  {/* Internal Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted border border-border/80 flex items-center justify-center relative z-10 transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                    <IconLock className="h-5 w-5 text-muted-foreground/60 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  </div>
                  
                  <div className="min-w-0 relative z-10">
                    <h4 className="text-base font-semibold tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    {project.tag && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tag.slice(1).map((t: string) => (
                          <span key={t} className="text-xs font-semibold text-muted-foreground bg-muted/80 px-2 py-0.5 rounded">
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
