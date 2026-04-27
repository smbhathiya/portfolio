"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  IconSchool,
  IconBriefcase,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";
import { workExperience, education } from "@/data/aboutData";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      className="py-24 md:py-48 relative overflow-hidden bg-background"
      id="about"
      ref={containerRef}
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-[-10%] w-[40vw] h-[40vw] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          <h2 className="font-bold text-4xl md:text-6xl tracking-widest text-center leading-tight uppercase">
            PROFESSIONAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              JOURNEY
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl relative">
          {/* Work Experience Section */}
          <div className="mb-40">
            <div className="flex items-center gap-4 mb-16 px-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm shadow-primary/5">
                <IconBriefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
                EXPERIENCE
              </h3>
            </div>

            <div className="grid gap-8">
              {workExperience.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-16 px-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm shadow-primary/5">
                <IconSchool className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase">
                EDUCATION
              </h3>
            </div>

            <div className="grid gap-8">
              {education.map((edu, idx) => (
                <ExperienceItem key={idx} exp={edu} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] as any,
      }}
    >
      <div className="group relative glass-card rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-700 hover:scale-[1.01] shadow-2xl shadow-primary/20 dark:shadow-primary/5 mb-6 overflow-hidden">
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center bg-background/20 backdrop-blur-2xl transition-colors group-hover:bg-background/30">
          <div className="flex-shrink-0 w-full md:w-48">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              {exp.duration}
            </span>
          </div>

          {/* Content */}
          <div className="flex-grow space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-xl md:text-2xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors">
                {exp.title}
              </h4>
              {exp.badge && (
                <Badge className="bg-primary/10 text-primary text-xs font-semibold tracking-wide px-3 py-1 rounded-full border border-primary/20">
                  {exp.badge}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground font-medium text-sm">
              <span className="text-foreground/80 font-semibold uppercase">
                {exp.company || exp.institution}
              </span>
              {exp.location && <span>• {exp.location}</span>}
            </div>
            <p className="max-w-2xl text-muted-foreground font-light leading-relaxed">
              {exp.description}
            </p>
          </div>

          {/* Icon */}
          {/* <div className="flex-shrink-0 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
            <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <IconBriefcase className="w-6 h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
