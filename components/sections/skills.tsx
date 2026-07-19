"use client";

import { useRef, useState, useEffect } from "react";
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
import { useTheme } from "next-themes";

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
      className="group flex items-center gap-3 p-3.5 rounded-xl border border-border/80 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default bg-background/20 backdrop-blur-xs relative z-10"
    >
      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110 flex-shrink-0 relative z-10" />
      <span className="text-xs md:text-sm font-medium tracking-wide group-hover:text-foreground transition-colors duration-200 truncate relative z-10">{name}</span>
    </motion.div>
  );
}

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const [rgbColor, setRgbColor] = useState("20, 184, 166"); // Default teal

  useEffect(() => {
    // Extract theme color
    const el = document.createElement("div");
    el.className = "text-primary absolute opacity-0 pointer-events-none";
    document.body.appendChild(el);
    const cssColor = getComputedStyle(el).color;
    
    const c = document.createElement("canvas");
    c.width = 1; c.height = 1;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    if (ctx) {
      ctx.fillStyle = cssColor;
      ctx.fillRect(0, 0, 1, 1);
      const data = ctx.getImageData(0, 0, 1, 1).data;
      setRgbColor(`${data[0]}, ${data[1]}, ${data[2]}`);
    }
    document.body.removeChild(el);
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let w = canvas.width = window.innerWidth;
    
    // We only want the canvas to cover the section, so we use parent height if possible,
    // but window.innerHeight is a safe fallback for viewport-based coordinate mapping.
    // For absolute positioning in a relative container, we use offsetWidth/Height.
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        w = canvas.width = parent.offsetWidth;
        let h = canvas.height = parent.offsetHeight;
      }
    };
    resizeCanvas();
    let h = canvas.height;

    class Particle {
      x: number; y: number; vx: number; vy: number; radius: number;
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgbColor}, 0.4)`;
        ctx.fill();
      }
    }

    // Init
    for (let i = 0; i < 70; i++) particles.push(new Particle());

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };
    
    // Attach to window to track mouse globally, but calculate relative to canvas
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        p.draw();
        
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgbColor}, ${0.15 - dist/120 * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
        if (distMouse < 180) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${rgbColor}, ${0.4 - distMouse/180 * 0.4})`;
          ctx.lineWidth = 1.2;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Gentle repel
          p.x += dxMouse * 0.01;
          p.y += dyMouse * 0.01;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [rgbColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70" 
    />
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
      {/* ── Decorative Background ── */}
      <ParticleNetwork />
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] blur-[120px] rounded-full" />
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
