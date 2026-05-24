"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconArrowRight,
  IconWorld,
} from "@tabler/icons-react";

const socials = [
  { icon: IconBrandGithub, href: "https://github.com/smbhathiya", label: "GitHub" },
  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/", label: "LinkedIn" },
  { icon: IconBrandTwitter, href: "https://x.com/smbhathiya", label: "X (Twitter)" },
  { icon: IconBrandFacebook, href: "https://www.facebook.com/smbhathiya/", label: "Facebook" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen pt-24 pb-20 md:pt-32 flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Minimal subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Text block */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex items-center gap-2.5 w-fit"
            >
              {/* <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Available for new opportunities
              </span> */}
            </motion.div>

            {/* Name */}
            <div className="text-center lg:text-left overflow-hidden">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-[0.95] flex flex-col gap-2">
                <span className="block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    Bhathiya
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="block bg-gradient-to-r from-red-600 via-rose-500 to-red-500 bg-clip-text text-transparent dark:from-primary dark:via-rose-500 dark:to-red-500"
                  >
                    Lakshan
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg text-center lg:text-left"
            >
              Lead Software Engineer architecting scalable web applications and managing robust cloud ecosystems. Currently driving digital innovation at IMOS and Digi Pro Solutions.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-sm font-semibold tracking-wide group cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                }}
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
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image block */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[380px] lg:max-w-none group cursor-pointer"
            >
              {/* Pulse glowing backdrop */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-red-500/30 to-rose-600/25 dark:from-primary/25 dark:to-red-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-all duration-500 scale-95 group-hover:scale-105" />
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                className="relative aspect-square rounded-2xl overflow-hidden border border-border/80 bg-muted shadow-2xl transition-colors duration-300"
              >
                <Image
                  src="/bhathiya-lakshan-2.png"
                  alt="Bhathiya Lakshan"
                  fill
                  className="object-cover object-center transition-all duration-500 group-hover:scale-103"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent transition-opacity duration-300" />

                {/* Info overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-2 z-10">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border/80 shadow-sm text-foreground">
                    Software Engineer
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border/80 shadow-sm flex items-center gap-1.5 text-foreground">
                    <IconWorld className="w-3 h-3 text-primary animate-pulse" /> Sri Lanka
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] font-medium tracking-widest text-muted-foreground/50 uppercase">Scroll</span>
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
