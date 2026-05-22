"use client";

import projectsData from "@/data/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const mainProjects = projectsData.slice(0, 5);
  const otherProjects = projectsData.slice(5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background large text & Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-[70%] right-[-10%] w-[40vw] h-[40vw] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-30" aria-hidden="true">
        <span className="text-[16vw] font-bold text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap transform -translate-y-80">
          MY WORKS
        </span>
      </div>

      <div className="container px-4 md:px-6 max-w-8xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          <h2 className="font-bold text-4xl md:text-6xl tracking-widest text-center leading-tight uppercase">
            FEATURED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              PROJECTS
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-48"
        >
          {mainProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full"
            >
              {/* Index & Metadata Header */}
              <div className="flex items-center gap-4 mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold tracking-wider leading-none">
                  0{index + 1}
                </span>
                <div className="h-px flex-grow bg-foreground/10" />
                <div className="flex gap-2.5">
                  {project.tag?.slice(1, 3).map((t: string) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold uppercase tracking-wider bg-foreground/5 px-2.5 py-1 rounded-full border border-foreground/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col h-full w-full p-4 md:p-6 rounded-xl glass-card border border-foreground/10 bg-foreground/[0.02] shadow-sm dark:shadow-none transition-all duration-700 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Image Section */}
                {!project.isInternal &&
                  project.images &&
                  project.images.length > 0 && (
                    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-8 border border-foreground/5 relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover grayscale brightness-[0.8] transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                <div className="px-2 md:px-4 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground/90 font-light text-lg leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 pt-6 border-t border-foreground/5 mt-auto">
                    {project.gitUrl && (
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wide hover:text-primary transition-colors group/link"
                      >
                        <IconBrandGithub className="h-5 w-5 transition-transform group-hover/link:-translate-y-1" />
                        Source
                      </a>
                    )}
                    {project.previewUrl && project.previewUrl !== "#" && (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wide px-6 py-3 bg-foreground text-background rounded-full hover:bg-primary transition-all shadow-lg"
                      >
                        <IconExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.isInternal && (
                      <span className="text-xs font-semibold uppercase tracking-wide opacity-50">
                        Internal System
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Projects Section */}
        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <h3 className="text-2xl md:text-4xl font-bold tracking-widest uppercase">
              PERSONAL PROJECTS
            </h3>
            <p className="text-muted-foreground font-medium tracking-wide text-sm">
              Selected previous works and experiments
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="h-full"
              >
                <div className="group glass-card transition-all duration-700 flex flex-col h-full overflow-hidden rounded-2xl border border-foreground/5 bg-foreground/[0.01] hover:border-foreground/20 p-4 shadow-sm dark:shadow-none hover:scale-[1.02]">
                  {!project.isInternal &&
                    project.images &&
                    project.images.length > 0 && (
                      <div className="aspect-[16/10] relative overflow-hidden rounded-xl mb-6">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                      </div>
                    )}

                  <div className="px-2 flex flex-col flex-grow">
                    <h4 className="text-lg font-bold tracking-tight uppercase mb-2 transition-colors">
                      {project.title}
                    </h4>
                    <p className="line-clamp-3 text-muted-foreground/90 font-light text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="pt-6 border-t border-foreground/5 flex items-center gap-4 transition-opacity mt-auto">
                      {project.gitUrl && (
                        <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/50 hover:text-primary transition-colors"
                        >
                          <IconBrandGithub className="h-5 w-5" />
                        </a>
                      )}
                      {project.previewUrl && project.previewUrl !== "#" && (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/50 hover:text-primary transition-colors"
                        >
                          <IconExternalLink className="h-5 w-5" />
                        </a>
                      )}
                      {project.isInternal && (
                        <span className="text-[10px] uppercase font-semibold tracking-wider opacity-40 ml-auto">
                          INTERNAL
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
