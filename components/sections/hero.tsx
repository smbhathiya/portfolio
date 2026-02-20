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
      {/* 2030 Architectural Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <motion.div
          style={{ y: y1, opacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none"
        >
          <h2 className="text-[20vw] font-black text-foreground/[0.02] tracking-tighter leading-none whitespace-nowrap uppercase italic">
            BHATHIYA
          </h2>
        </motion.div>

        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-foreground/[0.05] to-transparent mr-12 hidden lg:block" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-foreground/[0.05] to-transparent mb-12 hidden lg:block" />
      </div>

      <div className="container px-4 md:px-8 max-w-8xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 items-center justify-items-center lg:justify-items-start"
        >
          {/* MOBILE STATUS HUD (Order 1 on mobile) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start gap-2 lg:hidden order-1 w-full"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse shadow-[0_0_10px_#00FF85]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                System Active
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-[7px] font-mono opacity-20 tracking-[0.2em] leading-tight text-left">
                01000010 01001000 01000001 01010100
                <br />
                01001000 01001001 01011001 01000001
              </span>
            </div>
          </motion.div>

          {/* TITLE BLOCK (Order 2 on mobile, Top-Left on desktop) */}
          <div className="lg:col-span-7 order-2 flex flex-col space-y-6 lg:space-y-8 w-full">
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center gap-6 mb-4"
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse shadow-[0_0_10px_#00FF85]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
                    System Online
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
                  <span className="text-[8px] font-mono opacity-20 tracking-[0.3em]">
                    01000010 01001000 01000001 01010100 01001000 01001001
                    01011001 01000001
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-3 text-center lg:text-left"
            >
              <h1 className="text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[9rem] font-black tracking-[-0.05em] leading-[0.85] uppercase flex flex-col">
                <span>Full Stack</span>
                <span className="text-highlight italic">Engineer</span>
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
                <div className="absolute inset-0 grayscale contrast-125 opacity-100 mix-blend-normal transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105">
                  <Image
                    src="/bhathiya-lakshan-2.png"
                    alt="Bhathiya Lakshan"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 z-20 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/40">
                      BL-ARCH-26
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#00FF85]">
                      Verified
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter leading-none border-t border-foreground/10 pt-4">
                    Bhathiya Lakshan
                  </h3>
                </div>

                <div className="absolute top-6 left-6 lg:top-8 lg:left-8 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
              </div>
            </motion.div>
          </div>

          {/* DESCRIPTION BLOCK (Order 4 on mobile, Bottom-Left on desktop) */}
          <div className="lg:col-span-7 order-4 flex flex-col space-y-8 lg:space-y-12 items-center lg:items-start text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg sm:text-xl lg:text-2xl font-medium max-w-xl mx-auto lg:mx-0 uppercase tracking-tighter opacity-80 leading-tight"
            >
              Engineering high-performance software and architecting resilient
              digital ecosystems for the next generation of global innovation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center flex-wrap justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="w-[90vw] sm:w-auto min-w-[200px] lg:min-w-[280px] rounded-full h-14 md:h-16 px-8 md:px-12 text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl group border-none"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el)
                    window.scrollTo({
                      top: el.offsetTop - 80,
                      behavior: "smooth",
                    });
                }}
              >
                Initiate Project{" "}
                <IconArrowRight className="ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-foreground/5 bg-foreground/[0.02] backdrop-blur-xl">
                {[
                  {
                    icon: <IconBrandGithub className="w-5 h-5" />,
                    href: "https://github.com/smbhathiya",
                  },
                  {
                    icon: <IconBrandLinkedin className="w-5 h-5" />,
                    href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                  },
                  {
                    icon: <IconBrandTwitter className="w-5 h-5" />,
                    href: "https://x.com/smbhathiya",
                  },
                  {
                    icon: <IconBrandFacebook className="w-5 h-5" />,
                    href: "https://www.facebook.com/smbhathiya/",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full text-foreground/40 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-black uppercase tracking-[0.5em] opacity-20">
            System Scroll
          </span>
          <div className="w-8 h-px bg-foreground/10" />
        </div>
        <div className="w-5 h-8 border border-foreground/10 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
