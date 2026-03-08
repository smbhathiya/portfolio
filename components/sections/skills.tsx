"use client";

import * as React from "react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
  IconCode,
  IconBrandMongodb,
  IconBrandMysql,
  IconDatabase,
  IconBrandDocker,
  IconBrandAws,
  IconBrandVercel,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandSass,
  IconBrandFirebase,
  IconBrandStripe,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function SkillsSection() {
  // Row 1: Frontend & Core
  const row1 = [
    { name: "TypeScript", icon: <IconBrandTypescript className="h-6 w-6" /> },
    { name: "React", icon: <IconBrandReact className="h-6 w-6" /> },
    { name: "Next.js", icon: <IconBrandNextjs className="h-6 w-6" /> },
    { name: "TailwindCSS", icon: <IconBrandTailwind className="h-6 w-6" /> },
    { name: "JavaScript", icon: <IconBrandJavascript className="h-6 w-6" /> },
    { name: "HTML5", icon: <IconBrandHtml5 className="h-6 w-6" /> },
    { name: "CSS3", icon: <IconBrandCss3 className="h-6 w-6" /> },
    { name: "SASS", icon: <IconBrandSass className="h-6 w-6" /> },
  ];

  // Row 2: Backend & Systems
  const row2 = [
    { name: ".NET / C#", icon: <IconCode className="h-6 w-6" /> },
    { name: "Node.js", icon: <IconBrandNodejs className="h-6 w-6" /> },
    { name: "Python", icon: <IconBrandPython className="h-6 w-6" /> },
    { name: "PostgreSQL", icon: <IconDatabase className="h-6 w-6" /> },
    { name: "MySQL", icon: <IconBrandMysql className="h-6 w-6" /> },
    { name: "MongoDB", icon: <IconBrandMongodb className="h-6 w-6" /> },
    { name: "Firebase", icon: <IconBrandFirebase className="h-6 w-6" /> },
  ];

  // Row 3: DevOps & Infrastructure
  const row3 = [
    { name: "Docker", icon: <IconBrandDocker className="h-6 w-6" /> },
    { name: "AWS", icon: <IconBrandAws className="h-6 w-6" /> },
    { name: "Vercel", icon: <IconBrandVercel className="h-6 w-6" /> },
    { name: "Stripe", icon: <IconBrandStripe className="h-6 w-6" /> },
    { name: "GIT", icon: <IconBrandGit className="h-6 w-6" /> },
    { name: "GitHub", icon: <IconBrandGithub className="h-6 w-6" /> },
    { name: "VS Code", icon: <IconBrandVscode className="h-6 w-6" /> },
    { name: "Figma", icon: <IconBrandFigma className="h-6 w-6" /> },
  ];

  const MarqueeRow = ({
    skills,
    direction = "normal",
  }: {
    skills: any[];
    direction?: "normal" | "reverse";
  }) => {
    return (
      <div className="relative w-full overflow-hidden py-4">
        <div
          className={`flex items-center gap-6 px-4 whitespace-nowrap ${
            direction === "normal"
              ? "animate-marquee-infinite"
              : "animate-marquee-infinite-reverse"
          }`}
        >
          {/* Double the items for seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-4 px-8 py-5 rounded-[2rem] glass-card border border-foreground/20 bg-foreground/[0.03] shadow-sm dark:shadow-none transition-all duration-300 hover:scale-105"
            >
              <span className="text-foreground/70">{skill.icon}</span>
              <span className="text-sm font-semibold tracking-normal text-foreground/80">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background large text & Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-30">
        <h2 className="text-[18vw] font-bold text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap transform -translate-y-0">
          TEC STACK
        </h2>
      </div>

      <div className=" px-4 md:px-6 max-w-8xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          <h2 className="font-bold text-4xl md:text-6xl tracking-widest text-center leading-tight uppercase">
            TECHNICAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              STACK
            </span>
          </h2>
        </motion.div>

        {/* Desktop View: Infinite scrolling marquee rows */}
        <div className="hidden lg:block relative">
          {/* Gradient masks for smooth fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-20 h-full w-40 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

          <div className="space-y-10">
            <MarqueeRow skills={row1} direction="normal" />
            <MarqueeRow skills={row2} direction="reverse" />
            <MarqueeRow skills={row3} direction="normal" />
          </div>
        </div>

        {/* Mobile View: Organized Grid */}
        <div className="lg:hidden space-y-12">
          {[
            { title: "Frontend & Core", skills: row1 },
            { title: "Backend & Systems", skills: row2 },
            { title: "DevOps & Cloud", skills: row3 },
          ].map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-sm font-medium tracking-wider text-muted-foreground/60 ml-2 mb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill: any, i: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-2xl glass-card border border-foreground/10 bg-foreground/[0.02] shadow-sm dark:shadow-none transition-colors hover:bg-foreground/[0.04]"
                  >
                    <span className="text-foreground/60 scale-90">
                      {skill.icon}
                    </span>
                    <span className="text-xs font-semibold tracking-wide truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
