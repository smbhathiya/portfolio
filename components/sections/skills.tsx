"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandTailwind,
  IconBrandNodejs, IconBrandPython, IconCode, IconBrandMongodb, IconBrandMysql,
  IconDatabase, IconBrandDocker, IconBrandAws, IconBrandVercel, IconBrandFigma,
  IconBrandGit, IconBrandGithub, IconBrandVscode, IconBrandJavascript,
  IconBrandHtml5, IconBrandCss3, IconBrandSass, IconBrandFirebase, IconBrandStripe,
} from "@tabler/icons-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const categories = [
  {
    label: "01",
    title: "Frontend",
    fullTitle: "Frontend & Core",
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
    title: "Backend",
    fullTitle: "Backend & Systems",
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
    title: "DevOps",
    fullTitle: "DevOps & Tools",
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

function SkillItem({ name, Icon }: { name: string; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 450, damping: 18 }}
      className="group flex items-center gap-3 p-3.5 rounded-xl border border-border/80 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default bg-background/20 backdrop-blur-xs"
    >
      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110 flex-shrink-0" />
      <span className="text-xs md:text-sm font-medium tracking-wide group-hover:text-foreground transition-colors duration-200 truncate">{name}</span>
    </motion.div>
  );
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCat, setActiveCat] = useState(0);

  useGSAP(
    () => {
      gsap.set(".skills-header", { opacity: 0, y: 24 });
      gsap.set(".skills-desktop-content", { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: ".skills-header",
        start: "top 82%",
        onEnter: () => {
          gsap.to(".skills-header", { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" });
        },
      });

      ScrollTrigger.create({
        trigger: ".skills-desktop-content",
        start: "top 80%",
        onEnter: () => {
          gsap.to(".skills-desktop-content", { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
          gsap.fromTo(
            ".skill-item-desktop",
            { opacity: 0, y: 18, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.04, ease: "back.out(1.4)", delay: 0.1 },
          );
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* ── Decorative shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large faded code brackets — desktop right */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-6 select-none">
          <span className="text-[160px] font-black text-border/[0.06] leading-none">{"{"}</span>
          <span className="text-[160px] font-black text-border/[0.06] leading-none">{"}"}</span>
        </div>
        {/* Rotating square — top left */}
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-2xl border border-primary/[0.07] border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        {/* Small floating diamond */}
        <motion.div
          className="absolute top-1/3 left-8 w-8 h-8 border border-primary/20 rounded-lg"
          animate={{ rotate: [45, 90, 45], y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pulsing dot trio — bottom left */}
        <div className="absolute bottom-16 left-8 flex gap-3">
          {[0, 0.4, 0.8].map((delay, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/25"
              animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          ))}
        </div>
        {/* Gradient orb — bottom right */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/[0.04] blur-[80px] rounded-full" />
      </div>

      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="skills-header mb-12 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">Skills</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Technical Stack</h2>
        </div>

        {/* ─── MOBILE: Tab switcher ─── */}
        <div className="md:hidden">
          {/* Category tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveCat(i)}
                className={cn(
                  "flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border",
                  activeCat === i
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                    : "bg-background/50 text-muted-foreground border-border/60 hover:border-primary/30 hover:text-foreground",
                )}
              >
                <span className="text-[10px] font-bold tracking-widest opacity-60">{cat.label}</span>
                {cat.title}
              </button>
            ))}
          </div>

          {/* Animated skill grid for active tab */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-2 gap-2.5"
            >
              {categories[activeCat].skills.map(({ name, Icon }) => (
                <SkillItem key={name} name={name} Icon={Icon} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── DESKTOP: 3-column grid ─── */}
        <div className="hidden md:grid md:grid-cols-3 gap-12 skills-desktop-content">
          {categories.map((cat) => (
            <div key={cat.title} className="flex flex-col">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-xs font-bold tracking-widest text-primary/60 uppercase">{cat.label}</span>
                <h3 className="text-base font-semibold tracking-wide uppercase text-muted-foreground">{cat.fullTitle}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {cat.skills.map(({ name, Icon }) => (
                  <div key={name} className="skill-item-desktop">
                    <SkillItem name={name} Icon={Icon} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
