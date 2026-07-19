"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { IconSchool, IconBriefcase, IconArrowUpRight } from "@tabler/icons-react";
import { workExperience, education } from "@/data/aboutData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track scroll for the glowing timeline line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });
  
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useGSAP(
    () => {
      gsap.set(".about-header", { opacity: 0, y: 24 });
      gsap.set(".about-category-title", { opacity: 0, x: -20 });
      gsap.set(".about-card", { opacity: 0, y: 36, scale: 0.97 });

      ScrollTrigger.create({
        trigger: ".about-header",
        start: "top 82%",
        onEnter: () => {
          gsap.to(".about-header", { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" });
        },
      });

      document.querySelectorAll(".about-category-title").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            gsap.to(el, { opacity: 1, x: 0, duration: 0.55, ease: "power3.out" });
          },
        });
      });

      document.querySelectorAll(".about-card").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1, y: 0, scale: 1,
              duration: 0.6, delay: (i % 3) * 0.07, ease: "power3.out",
            });
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* ── Decorative shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Rotating dashed ring — top right */}
        <motion.div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-primary/[0.07] border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-border/25"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        {/* Floating tilted square — bottom left */}
        <motion.div
          className="absolute bottom-24 -left-8 w-20 h-20 rounded-2xl border border-primary/10"
          animate={{ rotate: [12, 28, 12], y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Dot grid cluster — mid right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 grid grid-cols-4 gap-[10px] hidden md:grid">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[3px] h-[3px] rounded-full bg-primary/20"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
            />
          ))}
        </div>
        {/* Small pulsing orb — bottom right */}
        <motion.div
          className="absolute bottom-12 right-1/4 w-32 h-32 rounded-full bg-primary/[0.04] blur-2xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="about-header mb-16 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">About</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Professional Journey</h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {/* Work Experience */}
          <div>
            <div className="about-category-title flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <IconBriefcase className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold tracking-wide">Experience</h3>
            </div>

            {/* Mobile: stacked cards */}
            <div className="space-y-4 md:hidden">
              {workExperience.map((exp, idx) => (
                <MobileCard key={idx} exp={exp} />
              ))}
            </div>

            {/* Desktop: timeline layout */}
            <div className="hidden md:block relative">
              {/* Background faded line */}
              <div className="absolute left-[10.5rem] top-0 bottom-0 w-[2px] bg-border/40" />
              {/* Animated glowing scroll line */}
              <motion.div 
                className="absolute left-[10.5rem] top-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary to-primary/80 shadow-[0_0_15px_var(--color-primary)] opacity-80 z-0" 
                style={{ height: lineHeight }} 
              />
              
              {workExperience.map((exp, idx) => (
                <DesktopTimelineCard key={idx} exp={exp} index={idx} />
              ))}
            </div>
          </div>

          <div className="border-t border-border" />

          {/* Education */}
          <div>
            <div className="about-category-title flex items-center gap-3 mb-8 md:mb-10">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <IconSchool className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold tracking-wide">Education</h3>
            </div>

            <div className="space-y-4 md:hidden">
              {education.map((edu, idx) => (
                <MobileCard key={idx} exp={edu} />
              ))}
            </div>

            <div className="hidden md:block relative">
              {/* Background faded line */}
              <div className="absolute left-[10.5rem] top-0 bottom-0 w-[2px] bg-border/40" />
              {/* Animated glowing scroll line continues */}
              <motion.div 
                className="absolute left-[10.5rem] top-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary to-primary/80 shadow-[0_0_15px_var(--color-primary)] opacity-80 z-0" 
                style={{ height: lineHeight }} 
              />
              {education.map((edu, idx) => (
                <DesktopTimelineCard key={idx} exp={edu} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile card: compact, touch-friendly ─── */
function MobileCard({ exp }: { exp: any }) {
  return (
    <motion.div
      whileTap={{ scale: 0.99 }}
      className="about-card relative overflow-hidden rounded-2xl border border-border/80 bg-background/40 backdrop-blur-sm p-5 active:border-primary/30 transition-colors duration-200"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
            {exp.duration}
          </span>
          {exp.badge && (
            <span className="ml-2 text-[9px] font-bold tracking-widest uppercase border border-primary/30 text-primary px-1.5 py-0.5 rounded bg-primary/5">
              {exp.badge}
            </span>
          )}
        </div>
        <IconArrowUpRight className="w-4 h-4 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
      </div>
      <h4 className="text-base font-semibold tracking-tight mb-0.5">{exp.title}</h4>
      <p className="text-sm font-medium text-muted-foreground mb-2">
        {exp.company || exp.institution}
        {exp.location && <span className="opacity-70"> · {exp.location}</span>}
      </p>
      <p className="text-sm text-muted-foreground/80 leading-relaxed line-clamp-3">{exp.description}</p>
    </motion.div>
  );
}

/* ─── Desktop timeline card ─── */
function DesktopTimelineCard({ exp, index }: { exp: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="about-card relative flex gap-8 mb-8 pl-[12rem] group">
      {/* Date in left column */}
      <div className="absolute left-0 top-8 w-[10rem] text-right">
        <span className="text-xs font-black tracking-widest text-primary uppercase leading-relaxed group-hover:text-primary transition-colors duration-300">
          {exp.duration}
        </span>
        {exp.badge && (
          <div className="mt-2">
            <span className="text-[9px] font-bold tracking-widest uppercase border border-primary/30 text-primary px-2 py-1 rounded bg-primary/5">
              {exp.badge}
            </span>
          </div>
        )}
      </div>

      {/* Timeline dot with glowing aura on hover */}
      <div className="absolute left-[10.22rem] top-[2rem] w-3 h-3 rounded-full bg-background border-2 border-border/80 group-hover:border-primary group-hover:bg-primary group-hover:scale-125 group-hover:shadow-[0_0_20px_var(--color-primary)] transition-all duration-300 z-10" />

      {/* Card with Mouse Spotlight Effect */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="flex-1 relative overflow-hidden rounded-2xl bg-background/20 backdrop-blur-md p-[1px] group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20"
      >
        {/* Spotlight Gradient inside border */}
        <div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 40%)`
          }}
        />

        {/* Inner Card Content */}
        <div className="relative z-10 h-full w-full rounded-2xl border border-border/60 bg-background/60 p-7 group-hover:border-transparent transition-colors duration-500">
          <h4 className="text-xl font-bold tracking-tight mb-1.5 group-hover:text-primary transition-colors duration-300">
            {exp.title}
          </h4>
          <p className="text-sm font-semibold text-muted-foreground mb-4">
            {exp.company || exp.institution}
            {exp.location && <span className="opacity-70 font-normal"> &middot; {exp.location}</span>}
          </p>
          <p className="text-sm text-muted-foreground/90 leading-relaxed font-medium">{exp.description}</p>
        </div>
      </div>
    </div>
  );
}
