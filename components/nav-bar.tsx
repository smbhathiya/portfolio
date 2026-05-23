"use client";

import { useEffect, useState, type MouseEvent } from "react";
import dynamic from "next/dynamic";
const ModeToggle = dynamic(
  () => import("./mode-toggle").then((mod) => mod.ModeToggle),
  { ssr: false },
);
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 80;

export function NavBar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let closestIdx = 0;
      let minDist = Number.POSITIVE_INFINITY;
      navItems.forEach((item, idx) => {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const dist = Math.abs(el.getBoundingClientRect().top - NAVBAR_HEIGHT - 20);
          if (dist < minDist) { minDist = dist; closestIdx = idx; }
        }
      });
      setActiveSection(navItems[closestIdx].href);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      window.scrollTo({ top: el.offsetTop - NAVBAR_HEIGHT, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 pointer-events-none">
        {/* Logo */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className={cn(
            "pointer-events-auto flex items-center cursor-pointer transition-all duration-500 px-6 py-3 rounded-full border border-transparent",
            isScrolled && "glass border-white/5 shadow-2xl",
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-base font-black tracking-tighter text-foreground uppercase">
            Bhathiya<span className="text-primary font-black">.DEV</span>
          </span>
        </motion.div>

        {/* Desktop nav pill */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="hidden md:flex items-center pointer-events-auto glass px-2 py-1.5 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Top accent line matching contact/footer style */}
          <div className="absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />
          <nav aria-label="Main navigation" className="flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => scrollTo(e as MouseEvent<HTMLAnchorElement>, item.href)}
                className={cn(
                  "relative px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl",
                  activeSection === item.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <AnimatePresence>
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-lg shadow-primary/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* Right: Contact + Mode toggle */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="hidden md:block"
          >
            <Button
              className="font-black uppercase tracking-widest text-[10px] h-10 px-6 lg:px-8 shadow-lg shadow-primary/20"
              asChild
            >
              <a href="https://wa.me/94758041606" target="_blank" rel="noopener noreferrer">
                Contact me
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className={cn(
              "flex items-center gap-0.5 p-1 transition-all duration-500 rounded-full border border-transparent",
              isScrolled && "glass border-white/5 shadow-2xl",
            )}
          >
            <ModeToggle
              className="h-9 w-9 bg-transparent hover:bg-white/10 border-0 flex items-center justify-center"
              iconSize="h-4 w-4"
            />
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-5 h-3 relative flex flex-col justify-between">
                  <span className={cn("w-full h-0.5 bg-foreground transition-all duration-300 rounded-full", isMobileMenuOpen && "rotate-45 translate-y-[5px]")} />
                  <span className={cn("w-full h-0.5 bg-foreground transition-all duration-300 rounded-full", isMobileMenuOpen && "opacity-0")} />
                  <span className={cn("w-full h-0.5 bg-foreground transition-all duration-300 rounded-full", isMobileMenuOpen && "-rotate-45 -translate-y-[5px]")} />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden pt-24"
          >
            <div
              className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav aria-label="Mobile navigation" className="relative z-10 container flex flex-col items-center gap-3 p-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={cn(
                    "text-3xl font-black uppercase tracking-tighter transition-all duration-300 px-8 py-3 rounded-2xl w-full text-center border",
                    activeSection === item.href
                      ? "text-primary bg-primary/10 border-primary/20 shadow-lg shadow-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5 border-transparent",
                  )}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 pt-6 border-t border-foreground/10 w-full flex justify-center"
              >
                <div className="flex items-center gap-4 glass-card px-6 py-3 rounded-full border border-foreground/10">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Theme</span>
                  <ModeToggle />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-0" />
    </>
  );
}
