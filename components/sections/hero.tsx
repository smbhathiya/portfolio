"use client";

import Image from "next/image";
// Static import: hashed URL with a 1-year immutable cache + auto blur placeholder.
import heroPhoto from "@/public/bhathiya-lakshan.jpg";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
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

const badgeClass =
  "hero-badge text-[9px] md:text-[10px] font-bold tracking-widest uppercase glass px-2 md:px-3 py-1.5 rounded-lg text-foreground flex items-center gap-1 md:gap-1.5";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useGSAP(
    () => {
      // The photo is the LCP element: never hide it (no opacity: 0),
      // only give it a subtle settle-in motion so it paints immediately.
      gsap.set(".hero-image", { y: 16, scale: 0.98 });
      gsap.set(".hero-char", { opacity: 0, y: 38 });
      gsap.set(".hero-name-2", { opacity: 0, y: 38 });
      gsap.set(".hero-desc", { opacity: 0, y: 20 });
      gsap.set(".hero-cta", { opacity: 0, y: 20 });
      gsap.set(".hero-social", { opacity: 0, y: 14 });
      gsap.set(".hero-badge", { opacity: 0, y: 10 });

      gsap
        .timeline({ delay: 0.05 })
        .to(".hero-image", { y: 0, scale: 1, duration: 0.8, ease: "power3.out" }, 0)
        .to(
          ".hero-char",
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.04, ease: "power3.out" },
          0,
        )
        .to(".hero-name-2", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.3)
        .to(".hero-desc", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.45)
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 0.6)
        .to(
          ".hero-social",
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: "power3.out" },
          0.7,
        )
        .to(
          ".hero-badge",
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "back.out(1.5)" },
          0.5,
        );
    },
    { scope: sectionRef },
  );

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("contact");
    if (!el) return;
    e.preventDefault();
    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 mask-fade opacity-[0.06] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="flex items-center justify-center min-h-screen pt-[88px] pb-24 md:pt-32 md:pb-20 relative z-10">
        <div className="container px-5 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Text block - below the photo on mobile, left on desktop */}
            <div className="order-2 md:order-1 md:col-span-7 flex flex-col gap-5 md:gap-7">
              <div className="hero-badge glass flex items-center gap-2 md:gap-2.5 w-fit rounded-lg px-3.5 md:px-4 py-1.5 md:py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Available for new opportunities
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,14vw,5rem)] md:text-[clamp(4.5rem,8vw,7.5rem)] font-black uppercase tracking-tight leading-[0.9]">
                <span className="sr-only">
                  Bhathiya Lakshan - Full Stack Software Engineer in Sri Lanka
                </span>
                <span aria-hidden="true" className="block">
                  {"Bhathiya".split("").map((char, i) => (
                    <span key={i} className="hero-char inline-block">
                      {char}
                    </span>
                  ))}
                </span>
                <span aria-hidden="true" className="hero-name-2 block">
                  Lakshan
                </span>
              </h1>

              <p className="hero-desc flex items-center gap-4">
                <span className="h-px w-12 bg-border" aria-hidden="true" />
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground/60">
                  Full Stack Software Engineer &nbsp;·&nbsp; Sri Lanka
                </span>
              </p>

              <p className="hero-desc text-muted-foreground text-sm md:text-lg leading-relaxed max-w-lg">
                Architecting scalable web applications and managing robust cloud
                ecosystems. Currently driving digital innovation at IMOS and
                Digi Pro Solutions.
              </p>

              <div className="hero-cta flex flex-row gap-3 md:gap-4 items-center">
                <Button
                  size="lg"
                  className="flex-1 md:flex-none h-12 md:px-8 text-sm font-semibold tracking-wide group cursor-pointer"
                  asChild
                >
                  <a href="#contact" onClick={scrollToContact}>
                    Let&apos;s Talk
                    <IconArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <div className="flex items-center gap-1.5 md:gap-2">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={label}
                      className="hero-social w-11 h-11 md:w-10 md:h-10 flex items-center justify-center rounded-xl md:rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                      whileHover={{ y: -3, scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo - first on mobile, right on desktop */}
            <div className="order-1 md:order-2 md:col-span-5 flex justify-center">
              <div className="hero-image relative w-full max-w-[320px] md:max-w-[440px]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden"
                >
                  <Image
                    src={heroPhoto}
                    alt="Bhathiya Lakshan, Full Stack Software Engineer in Sri Lanka"
                    fill
                    sizes="(max-width: 767px) 320px, 440px"
                    placeholder="blur"
                    preload
                    className="object-cover object-top"
                  />
                </motion.div>

                <div className="flex items-center justify-center gap-2 md:gap-3 mt-3 md:mt-5">
                  <span className={badgeClass}>
                    <IconBriefcase className="w-3 h-3 text-primary shrink-0" />
                    Software Engineer
                  </span>
                  <span className={badgeClass}>
                    <IconMapPin className="w-3 h-3 text-primary shrink-0" />
                    Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-20"
        aria-hidden="true"
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
