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
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", Icon: IconBrandDocker },
      { name: "AWS", Icon: IconBrandAws },
      { name: "Vercel", Icon: IconBrandVercel },
      { name: "Stripe", Icon: IconBrandStripe },
      { name: "GIT", Icon: IconBrandGit },
      { name: "GitHub", Icon: IconBrandGithub },
      { name: "VS Code", Icon: IconBrandVscode },
      { name: "Figma", Icon: IconBrandFigma },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span className="text-[18vw] font-bold text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap">
          TECH STACK
        </span>
      </div>

      <div className="px-4 md:px-6 max-w-8xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col items-center mb-32"
        >
          <h2 className="font-bold text-4xl md:text-6xl tracking-widest text-center leading-tight uppercase">
            TECHNICAL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              STACK
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIdx * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="space-y-6"
            >
              <h3 className="text-lg font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
                <span className="text-primary/50 text-xs">{cat.label}</span>
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cat.skills.map(({ name, Icon }, i) => (
                  <motion.div
                    key={name}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ y: -4, scale: 1.03 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-6 text-center rounded-2xl glass-card border border-foreground/10 transition-colors duration-300 hover:border-primary/30 hover:shadow-[0_8px_32px_-8px] hover:shadow-primary/25 group cursor-default"
                  >
                    <div className="text-foreground/50 mb-3 group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {name}
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
