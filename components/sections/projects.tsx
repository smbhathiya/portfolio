"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectsData from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { IconArrowUpRight } from "@tabler/icons-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TEASER_COUNT = 3;

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const featuredProjects = projectsData
    .filter((p) => !p.isInternal && p.images && p.images.length > 0)
    .slice(0, TEASER_COUNT);

  useGSAP(
    () => {
      gsap.set(".projects-header", { opacity: 0, y: 24 });
      gsap.set(".project-card", { opacity: 0, y: 40, scale: 0.97 });
      gsap.set(".projects-cta", { opacity: 0, y: 16 });

      ScrollTrigger.create({
        trigger: ".projects-header",
        start: "top 82%",
        onEnter: () => {
          gsap.to(".projects-header", {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          });
        },
      });

      document.querySelectorAll(".project-card").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: (i % 3) * 0.1,
              ease: "power3.out",
            });
          },
        });
      });

      ScrollTrigger.create({
        trigger: ".projects-cta",
        start: "top 90%",
        onEnter: () => {
          gsap.to(".projects-cta", {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          });
        },
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
          <span className="text-[130px] font-black text-border/[0.05] leading-none">
            {"</>"}
          </span>
        </div>
        <motion.div
          className="absolute bottom-16 -right-6 w-24 h-24 rounded-lg border border-primary/[0.1]"
          animate={{ rotate: [20, 40, 20], y: [0, -16, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-20 left-6 grid grid-cols-3 gap-[10px] hidden md:grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3px] h-[3px] rounded-full bg-primary/20"
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="projects-header mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">
              Work
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-xl">
              A selection of projects I&apos;ve designed and built - from solo
              experiments to production systems.
            </p>
          </div>
        </div>

        {/* Featured project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="projects-cta mt-14 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/25 bg-primary/5 px-6 py-3 rounded-lg hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
          >
            View All Projects
            <IconArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
