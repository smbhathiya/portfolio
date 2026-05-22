"use client";

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

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background large text & Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-30" aria-hidden="true">
        <span className="text-[18vw] font-bold text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap transform -translate-y-0">
          TECH STACK
        </span>
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

        {/* Unified Responsive Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto">
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
              <h3 className="text-lg font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
                <span className="text-primary/50 text-xs">0{catIndex + 1}</span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill: any, i: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 + catIndex * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 text-center rounded-2xl glass-card border border-foreground/10 transition-all duration-500 hover:bg-foreground/[0.04] hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_8px_32px_-8px] hover:shadow-primary/25 group"
                  >
                    <div className="text-foreground/50 mb-3 group-hover:text-primary transition-colors duration-500 group-hover:scale-110 transform">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-semibold tracking-wide uppercase">
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
