"use client";

import projectsData from "@/data/projects";
import Image from "next/image";
import { IconBrandGithub, IconExternalLink, IconLock } from "@tabler/icons-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function ProjectsSection() {
  // Show projects with images as featured, internal ones as professional work
  const featuredProjects = projectsData.filter((p) => !p.isInternal && p.images && p.images.length > 0);
  const internalProjects = projectsData.filter((p) => p.isInternal);

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">04 / Work</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
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
              className="group border border-border rounded-xl overflow-hidden hover:border-foreground/20 transition-colors duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-[16/10] relative overflow-hidden bg-muted border-b border-border">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground/40 uppercase mb-2">
                  0{index + 1}
                </span>

                <h3 className="text-sm font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {project.tag && project.tag.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tag.slice(1, 3).map((t: string) => (
                      <span key={t} className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-xs text-muted-foreground leading-relaxed flex-grow mb-5">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  {project.gitUrl && (
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
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
                      className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <IconExternalLink className="h-3.5 w-3.5" />
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
              <h3 className="text-xl font-semibold tracking-tight">Professional Work</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Enterprise systems built under NDA — details available on request
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
                  className="flex items-start gap-4 p-5 border border-border rounded-xl hover:border-foreground/20 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center">
                    <IconLock className="h-4 w-4 text-muted-foreground/50" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    {project.tag && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tag.slice(1).map((t: string) => (
                          <span key={t} className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
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
