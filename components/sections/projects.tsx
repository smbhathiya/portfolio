"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPublicProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { IconArrowUpRight } from "@tabler/icons-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TEASER_COUNT = 3;

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const featuredProjects = getPublicProjects().slice(0, TEASER_COUNT);

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
      className="py-24 md:py-32 relative overflow-hidden"
    >
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
            className="group inline-flex items-center gap-2 text-sm font-semibold glass px-6 py-3 rounded-lg hover:border-primary/30 transition-all duration-200"
          >
            View All Projects
            <IconArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
