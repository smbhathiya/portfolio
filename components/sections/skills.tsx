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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 220, damping: 20 },
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">Skills</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Technical Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-baseline gap-3 mb-6"
              >
                <span className="text-[11px] md:text-xs font-bold tracking-widest text-primary/60 uppercase">{cat.label}</span>
                <h3 className="text-base font-semibold tracking-wide uppercase text-muted-foreground">{cat.title}</h3>
              </motion.div>

              <div className="grid grid-cols-2 gap-2.5">
                {cat.skills.map(({ name, Icon }) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 450, damping: 18 }}
                    className="group flex items-center gap-3 p-3.5 rounded-lg border border-border/80 hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_6px_20px_-8px_rgba(255,255,255,0.01)] transition-all duration-300 cursor-default bg-background/20 backdrop-blur-xs"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium tracking-wide group-hover:text-foreground transition-colors duration-200">{name}</span>
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
