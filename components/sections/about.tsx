"use client";

import { motion } from "framer-motion";
import { IconSchool, IconBriefcase } from "@tabler/icons-react";
import { workExperience, education } from "@/data/aboutData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">02 / About</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Journey</h2>
        </motion.div>

        <div className="space-y-20">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <IconBriefcase className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold tracking-wide">Experience</h3>
            </div>
            <div className="space-y-4">
              {workExperience.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <IconSchool className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold tracking-wide">Education</h3>
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
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="group border border-border rounded-xl p-6 md:p-8 hover:border-foreground/20 transition-colors duration-300 bg-background"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        {/* Date */}
        <div className="flex-shrink-0 md:w-44">
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">
            {exp.duration}
          </span>
          {exp.badge && (
            <div className="mt-2">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase border border-primary/30 text-primary px-2 py-0.5 rounded">
                {exp.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow min-w-0">
          <h4 className="text-base md:text-lg font-semibold tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
            {exp.title}
          </h4>
          <p className="text-sm font-medium text-muted-foreground mb-3">
            {exp.company || exp.institution}
            {exp.location && <span> &middot; {exp.location}</span>}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {exp.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
