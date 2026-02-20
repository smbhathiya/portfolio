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
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-primary/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30vw] h-[30vw] bg-primary/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          <h2 className="font-black text-5xl md:text-8xl tracking-tighter uppercase text-center leading-none">
            Professional Journey
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl relative">
          {/* Work Experience Section */}
          <div className="mb-40">
            <div className="flex items-center gap-4 mb-16 px-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <IconBriefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">
                Experience
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
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <IconSchool className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">
                Education
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
      <div className="group relative backdrop-blur-3xl border border-black/10 bg-black/[0.02] dark:border-white/[0.08] dark:bg-white/[0.03] p-1 items-center rounded-[3rem] transition-all duration-700 hover:scale-[1.01] hover:bg-primary/[0.03] dark:hover:bg-white/[0.04] shadow-sm dark:shadow-none">
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* Year Tag */}
          <div className="flex-shrink-0 w-full md:w-48">
            <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">
              {exp.duration}
            </span>
          </div>

          {/* Content */}
          <div className="flex-grow space-y-3">
            <div className="flex flex-wrap items-center gap-4">
              <h4 className="text-2xl md:text-3xl font-black tracking-tight uppercase group-hover:text-primary transition-colors">
                {exp.title}
              </h4>
              {exp.badge && (
                <Badge className="bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border-0">
                  {exp.badge}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/80 font-bold uppercase tracking-widest text-xs">
              <span className="text-primary/60">
                {exp.company || exp.institution}
              </span>
              {exp.location && <span>• {exp.location}</span>}
            </div>
            <p className="max-w-2xl text-muted-foreground font-medium leading-relaxed">
              {exp.description}
            </p>
          </div>

          {/* Icon/Arrow */}
          <div className="flex-shrink-0 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
            <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
              <IconBriefcase className="w-6 h-6 rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
