"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconArrowRight,
  IconMapPin,
  IconBriefcase,
} from "@tabler/icons-react";

gsap.registerPlugin(useGSAP);

const socials = [
  {
    icon: IconBrandGithub,
    href: "https://github.com/smbhathiya",
    label: "GitHub",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
    label: "LinkedIn",
  },
  {
    icon: IconBrandTwitter,
    href: "https://x.com/smbhathiya",
    label: "X (Twitter)",
  },
  {
    icon: IconBrandFacebook,
    href: "https://www.facebook.com/smbhathiya/",
    label: "Facebook",
  },
];

const HERO_START_DELAY = 0.3;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useGSAP(
    () => {
      gsap.set(".hero-char", { opacity: 0, y: 38 });
      gsap.set(".hero-name-2", { opacity: 0, y: 38 });
      gsap.set(".hero-desc", { opacity: 0, y: 20 });
      gsap.set(".hero-cta", { opacity: 0, y: 20 });
      gsap.set(".hero-social", { opacity: 0, y: 14 });
      gsap.set(".hero-image", { opacity: 0, y: 28, scale: 0.96 });
      gsap.set(".hero-badge", { opacity: 0, y: 10 });

      const tl = gsap.timeline({ delay: HERO_START_DELAY });

      tl.to(
        ".hero-char",
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.04, ease: "power3.out" },
        0,
      )
        .to(
          ".hero-name-2",
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          0.3,
        )
        .to(
          ".hero-desc",
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          0.5,
        )
        .to(
          ".hero-cta",
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          0.7,
        )
        .to(
          ".hero-social",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: "power3.out",
          },
          0.8,
        )
        .to(
          ".hero-image",
          { opacity: 1, y: 0, scale: 1, duration: 0.75, ease: "power3.out" },
          0.2,
        )
        .to(
          ".hero-badge",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: "back.out(1.5)",
          },
          0.6,
        );
    },
    { scope: sectionRef },
  );

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen bg-background relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] bg-primary/3 blur-[100px] rounded-full" />
        {/* Animated accent ring (desktop only) */}
        <motion.div
          className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-[520px] h-[520px] rounded-full border border-primary/[0.06] border-dashed" />
        </motion.div>
        <motion.div
          className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-[620px] h-[620px] rounded-full border border-border/30 border-dashed" />
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (below md)
      ═══════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col min-h-screen pt-[72px] pb-24 relative z-10">
        {/* Profile image — plain photo, no card frame */}
        <div className="hero-image relative w-full px-3 pt-6 pb-2">
          <div className="w-full max-w-[320px] mx-auto">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[3/2] rounded-2xl overflow-hidden"
            >
              <Image
                src="/bhathiya_1.png"
                alt="Bhathiya Lakshan"
                fill
                sizes="320px"
                quality={90}
                className="object-cover object-center"
                priority
              />
            </motion.div>

            {/* Badges below the image */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="hero-badge text-[9px] font-bold tracking-widest uppercase bg-background/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-border/80 shadow-sm text-foreground flex items-center gap-1">
                <IconBriefcase className="w-3 h-3 text-primary flex-shrink-0" />{" "}
                Software Engineer
              </span>
              <span className="hero-badge text-[9px] font-bold tracking-widest uppercase bg-background/90 backdrop-blur-sm px-2 py-1.5 rounded-lg border border-border/80 shadow-sm text-foreground flex items-center gap-1">
                <IconMapPin className="w-3 h-3 text-primary flex-shrink-0" />{" "}
                Sri Lanka
              </span>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-5 px-5 pt-7">
          <div className="hero-badge flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,14vw,5rem)] font-black uppercase tracking-tight leading-[0.9]">
            <span className="sr-only">
              Bhathiya Lakshan | Software Engineer & Full Stack Developer Sri
              Lanka
            </span>
            <span aria-hidden="true" className="block">
              {"Bhathiya".split("").map((char, i) => (
                <span key={i} className="hero-char inline-block">
                  {char}
                </span>
              ))}
            </span>
            <span
              aria-hidden="true"
              className="hero-name-2 block "
            >
              Lakshan
            </span>
          </h1>

          <p className="hero-desc text-muted-foreground text-sm leading-relaxed">
            Lead Software Engineer architecting scalable web applications.
            Currently driving digital innovation at IMOS and Digi Pro Solutions.
          </p>

          <div className="hero-cta flex items-center gap-3">
            <Button
              size="lg"
              className="flex-1 h-12 text-sm font-semibold tracking-wide group cursor-pointer"
              onClick={scrollToContact}
            >
              Let&apos;s Talk
              <IconArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-1.5">
              {socials.slice(0, 3).map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hero-social w-11 h-11 flex items-center justify-center rounded-xl border border-border/60 text-muted-foreground active:bg-primary/5 transition-all duration-200"
                  whileTap={{ scale: 0.88 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (md and above)
      ═══════════════════════════════════════════ */}
      <div className="hidden md:flex items-center justify-center min-h-screen pt-32 pb-20 relative z-10">
        <div className="container px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Text block */}
            <div className="col-span-7 flex flex-col gap-7">
              <div className="hero-badge flex items-center gap-2.5 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="text-[clamp(4.5rem,8vw,7.5rem)] font-black uppercase tracking-tight leading-[0.9]">
                <span className="sr-only">
                  Bhathiya Lakshan | Software Engineer & Full Stack Developer
                  Sri Lanka
                </span>
                <span aria-hidden="true" className="block">
                  {"Bhathiya".split("").map((char, i) => (
                    <span key={i} className="hero-char inline-block">
                      {char}
                    </span>
                  ))}
                </span>
                <span aria-hidden="true" className="hero-name-2 block ">
                  Lakshan
                </span>
              </h1>

              <h2 className="hero-desc flex items-center gap-4">
                <div className="h-px w-12 bg-border" />
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60">
                  Lead Software Engineer &nbsp;·&nbsp; Sri Lanka
                </span>
              </h2>

              <p className="hero-desc text-muted-foreground text-lg leading-relaxed max-w-lg">
                Architecting scalable web applications and managing robust cloud
                ecosystems. Currently driving digital innovation at IMOS and
                Digi Pro Solutions.
              </p>

              <div className="hero-cta flex flex-row gap-4 items-center">
                <Button
                  size="lg"
                  className="h-12 px-8 text-sm font-semibold tracking-wide group cursor-pointer"
                  onClick={scrollToContact}
                >
                  Let&apos;s Talk
                  <IconArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex items-center gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="hero-social w-10 h-10 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                      whileHover={{ y: -3, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Image block — plain photo, no card frame */}
            <div className="col-span-5 flex justify-center">
              <div className="hero-image relative w-full max-w-[440px]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative aspect-[3/2] rounded-2xl overflow-hidden"
                  >
                    <Image
                      src="/bhathiya_1.png"
                      alt="Bhathiya Lakshan"
                      fill
                      sizes="440px"
                      quality={90}
                      className="object-cover object-center transition-transform duration-700"
                      priority
                    />
                  </motion.div>
                </motion.div>

                {/* Badges below the image */}
                <div className="flex items-center justify-center gap-3 mt-5">
                  <span className="hero-badge text-[10px] font-bold tracking-widest uppercase bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border/80 shadow-sm text-foreground flex items-center gap-1.5">
                    <IconBriefcase className="w-3 h-3 text-primary" />{" "}
                    Software Engineer
                  </span>
                  <span className="hero-badge text-[10px] font-bold tracking-widest uppercase bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border/80 shadow-sm flex items-center gap-1.5 text-foreground">
                    <IconMapPin className="w-3 h-3 text-primary" /> Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] font-medium tracking-widest text-muted-foreground/50 uppercase">
          Scroll
        </span>
        <div className="w-5 h-8 border border-border rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
