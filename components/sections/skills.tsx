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

const categories = [
  {
    label: "01",
    title: "Frontend & Core",
    skills: [
      { name: "TypeScript", Icon: IconBrandTypescript },
      { name: "React", Icon: IconBrandReact },
      { name: "Next.js", Icon: IconBrandNextjs },
      { name: "TailwindCSS", Icon: IconBrandTailwind },
      { name: "JavaScript", Icon: IconBrandJavascript },
      { name: "HTML5", Icon: IconBrandHtml5 },
      { name: "CSS3", Icon: IconBrandCss3 },
      { name: "SASS", Icon: IconBrandSass },
    ],
  },
  {
    label: "02",
    title: "Backend & Systems",
    skills: [
      { name: ".NET / C#", Icon: IconCode },
      { name: "Node.js", Icon: IconBrandNodejs },
      { name: "Python", Icon: IconBrandPython },
      { name: "PostgreSQL", Icon: IconDatabase },
      { name: "MySQL", Icon: IconBrandMysql },
      { name: "MongoDB", Icon: IconBrandMongodb },
      { name: "Firebase", Icon: IconBrandFirebase },
    ],
  },
  {
    label: "03",
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", Icon: IconBrandDocker },
      { name: "AWS", Icon: IconBrandAws },
      { name: "Vercel", Icon: IconBrandVercel },
      { name: "Stripe", Icon: IconBrandStripe },
      { name: "Git", Icon: IconBrandGit },
      { name: "GitHub", Icon: IconBrandGithub },
      { name: "VS Code", Icon: IconBrandVscode },
      { name: "Figma", Icon: IconBrandFigma },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">03 / Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-widest text-primary/60 uppercase">{cat.label}</span>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">{cat.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {cat.skills.map(({ name, Icon }) => (
                  <motion.div
                    key={name}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group flex items-center gap-3 p-3.5 rounded-lg border border-border hover:border-foreground/20 hover:bg-foreground/[0.02] transition-colors duration-200 cursor-default"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="text-xs font-medium tracking-wide">{name}</span>
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
