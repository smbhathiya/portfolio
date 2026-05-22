"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconArrowRight,
  IconCircleFilled,
  IconWorld,
  IconClock,
  IconSearch,
} from "@tabler/icons-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen pt-24 pb-20 md:pt-32 flex items-center justify-center relative overflow-hidden bg-background selection:bg-primary selection:text-primary-foreground"
    >
      {/* Soft, Modern Gradient Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[150px] rounded-full mix-blend-normal opacity-50 dark:opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[150px] rounded-full mix-blend-normal opacity-50 dark:opacity-30" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="container px-4 md:px-8 max-w-8xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 items-center justify-items-center lg:justify-items-start"
        >
          {/* MOBILE STATUS HUD (Order 1 on mobile) */}
          {/* <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start gap-3 lg:hidden order-1 w-full mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-background/50 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-foreground/80">
                AVAILABLE FOR WORK
              </span>
            </div>
          </motion.div> */}

          {/* TITLE BLOCK (Order 2 on mobile, Top-Left on desktop) */}
          <div className="lg:col-span-7 order-2 flex flex-col space-y-6 lg:space-y-8 w-full z-10">
            {/* <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center mb-6"
            >
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-background/50 backdrop-blur-xl shadow-lg shadow-primary/5 hover:bg-background/80 transition-all cursor-default group">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 group-hover:opacity-100 transition-opacity"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-sm uppercase font-semibold tracking-[0.2em] text-foreground/80">
                  AVAILABLE FOR NEW OPPORTUNITIES
                </span>
              </div>
            </motion.div> */}

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-center lg:text-left"
            >
              <h1 className="text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[1.1] flex flex-col">
                <span className="text-primary">BHATHIYA</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 drop-shadow-sm pb-2">
                  LAKSHAN
                </span>
              </h1>
            </motion.div>
          </div>

          {/* IMAGE BLOCK (Order 3 on mobile, Right side on desktop) */}
          <div className="lg:col-span-5 order-3 lg:row-span-2 relative w-full max-w-[450px] lg:max-w-none px-4 lg:px-0 my-8 lg:my-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative aspect-square sm:aspect-[4/5] lg:aspect-square"
            >
              <div className="absolute inset-0 rounded-[2.5rem] lg:rounded-[3rem] border border-foreground/10 bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden group shadow-2xl shadow-black/20">
                <div className="absolute inset-0 bg-transparent opacity-100 transition-all duration-1000 group-hover:scale-[1.03]">
                  <Image
                    src="/bhathiya-lakshan-2.png"
                    alt="Bhathiya Lakshan"
                    fill
                    className="object-cover object-center transform transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-8 lg:right-8 z-20 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground md:text-background bg-background/20 md:bg-foreground backdrop-blur-md md:backdrop-blur-none border border-foreground/10 md:border-transparent px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      SOFTWARE ENGINEER
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-foreground bg-background/20 md:bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap border border-foreground/10 md:border-transparent">
                      <IconWorld className="w-4 h-4 text-primary flex-shrink-0" />{" "}
                      SRI LANKA
                    </span>
                  </div>
                  <p className="text-2xl lg:text-3xl uppercase font-black tracking-tight text-foreground pt-2" aria-hidden="true">
                    BHATHIYA LAKSHAN
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* DESCRIPTION BLOCK (Order 4 on mobile, Bottom-Left on desktop) */}
          <div className="lg:col-span-7 order-4 flex flex-col space-y-8 lg:space-y-12 items-center lg:items-start text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 lg:p-0 rounded-2xl lg:rounded-none border border-foreground/10 lg:border-transparent bg-foreground/[0.02] lg:bg-transparent shadow-sm lg:shadow-none dark:shadow-none w-full max-w-xl mx-auto lg:mx-0 backdrop-blur-3xl lg:backdrop-blur-none"
            >
              <p className="text-muted-foreground uppercase text-justify lg:text-left text-xs md:text-sm lg:text-lg font-light tracking-wide opacity-90 leading-relaxed">
                Lead Software Engineer architecting scalable web applications
                and managing robust cloud ecosystems. Currently driving digital
                innovation at IMOS and building high-performance enterprise
                solutions at Digi Pro Solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center flex-wrap justify-center lg:justify-start pt-4"
            >
              <Button
                size="lg"
                className="w-[90vw] sm:w-auto min-w-[200px] lg:min-w-[240px] h-14 md:h-16 px-8 md:px-10 text-xs md:text-sm uppercase font-bold tracking-[0.2em]  text-background hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl shadow-primary/10 group border-none"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el)
                    window.scrollTo({
                      top: el.offsetTop - 80,
                      behavior: "smooth",
                    });
                }}
              >
                LET&apos;S TALK
                <IconArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1.5 transition-transform" />
              </Button>

              <div className="flex items-center gap-1.5 w-[90vw] sm:w-auto min-w-[200px] lg:min-w-[240px] justify-center lg:justify-start p-1.5 h-14 md:h-16 px-8 md:px-10 rounded-xl border border-foreground/5 bg-primary/[0.02] backdrop-blur-xl">
                {[
                  {
                    icon: <IconBrandGithub className="w-5 h-5" />,
                    href: "https://github.com/smbhathiya",
                    label: "GitHub profile",
                  },
                  {
                    icon: <IconBrandLinkedin className="w-5 h-5" />,
                    href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                    label: "LinkedIn profile",
                  },
                  {
                    icon: <IconBrandTwitter className="w-5 h-5" />,
                    href: "https://x.com/smbhathiya",
                    label: "X (Twitter) profile",
                  },
                  {
                    icon: <IconBrandFacebook className="w-5 h-5" />,
                    href: "https://www.facebook.com/smbhathiya/",
                    label: "Facebook profile",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full text-foreground/40 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 z-20"
      >
        <span className="text-xs font-medium tracking-widest text-muted-foreground/60 uppercase">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center p-1.5 bg-background shadow-lg shadow-background/50">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)] opacity-80"
          />
        </div>
      </motion.div>
    </section>
  );
}
