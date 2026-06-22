"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { IconSchool, IconBriefcase } from "@tabler/icons-react";
import { workExperience, education } from "@/data/aboutData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".about-header", { opacity: 0, y: 24 });
      gsap.set(".about-category-title", { opacity: 0, x: -20 });
      gsap.set(".about-card", { opacity: 0, y: 36, scale: 0.97 });

      ScrollTrigger.create({
        trigger: ".about-header",
        start: "top 82%",
        onEnter: () => {
          gsap.to(".about-header", {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          });
        },
      });

      document.querySelectorAll(".about-category-title").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              x: 0,
              duration: 0.55,
              ease: "power3.out",
            });
          },
        });
      });

      document.querySelectorAll(".about-card").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: (i % 3) * 0.07,
              ease: "power3.out",
            });
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="about-header mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">About</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Professional Journey</h2>
        </div>

        <div className="space-y-20">
          {/* Work Experience */}
          <div>
            <div className="about-category-title flex items-center gap-3 mb-10">
              <IconBriefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold tracking-wide">Experience</h3>
            </div>
            <div className="space-y-4">
              {workExperience.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} index={idx} />
              ))}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Education */}
          <div>
            <div className="about-category-title flex items-center gap-3 mb-10">
              <IconSchool className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold tracking-wide">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <ExperienceCard key={idx} exp={edu} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: any; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="about-card relative overflow-hidden group border border-border/80 rounded-xl p-6 md:p-8 hover:border-primary/50 dark:hover:border-primary/35 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.08)] transition-all duration-300 bg-background/40 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.02] dark:to-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 relative z-10">
        <div className="flex-shrink-0 md:w-44">
          <span className="text-xs md:text-sm font-semibold tracking-wide text-primary uppercase">
            {exp.duration}
          </span>
          {exp.badge && (
            <div className="mt-2">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase border border-primary/30 text-primary px-2 py-0.5 rounded bg-primary/5">
                {exp.badge}
              </span>
            </div>
          )}
        </div>

        <div className="flex-grow min-w-0">
          <h4 className="text-lg md:text-xl font-semibold tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
            {exp.title}
          </h4>
          <p className="text-sm md:text-base font-medium text-muted-foreground mb-3">
            {exp.company || exp.institution}
            {exp.location && <span className="opacity-80"> &middot; {exp.location}</span>}
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {exp.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
