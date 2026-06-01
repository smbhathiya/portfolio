"use client";

import { useEffect, useState, type MouseEvent } from "react";
import dynamic from "next/dynamic";
const ModeToggle = dynamic(
  () => import("../mode-toggle").then((mod) => mod.ModeToggle),
  { ssr: false },
);
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

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

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

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
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-[oklch(0.82_0.15_145)] origin-left z-55 pointer-events-none"
        style={{ scaleX }}
      />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 h-[72px] transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent",
        )}
      >
        {/* Logo */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-bold tracking-tight uppercase cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Bhathiya<span className="text-primary">.dev</span>
        </motion.button>

        {/* Desktop nav */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e as MouseEvent<HTMLAnchorElement>, item.href)}
              className={cn(
                "relative px-3 py-2 text-xs font-semibold tracking-wide transition-colors duration-200",
                activeSection === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span>{item.label}</span>
              {activeSection === item.href && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </motion.nav>

        {/* Right controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2"
        >
          <div className="hidden md:block">
            <Button
              size="sm"
              className="h-9 px-5 text-xs font-semibold tracking-wide"
              asChild
            >
              <a href="https://wa.me/94758041606" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </Button>
          </div>

          <ModeToggle
            className="h-9 w-9 rounded-lg border border-border bg-background/50 hover:bg-foreground/5 transition-colors"
            iconSize="h-4 w-4"
          />

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg border border-border hover:bg-foreground/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-4 h-3 relative flex flex-col justify-between">
              <span className={cn("w-full h-0.5 bg-foreground transition-all duration-200 rounded-full", isMobileMenuOpen && "rotate-45 translate-y-[5px]")} />
              <span className={cn("w-full h-0.5 bg-foreground transition-all duration-200 rounded-full", isMobileMenuOpen && "opacity-0")} />
              <span className={cn("w-full h-0.5 bg-foreground transition-all duration-200 rounded-full", isMobileMenuOpen && "-rotate-45 -translate-y-[5px]")} />
            </div>
          </button>
        </motion.div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Dark glass backdrop overlay */}
            <div
              className="absolute inset-0 bg-background/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Sliding Drawer Content */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              aria-label="Mobile navigation"
              className="absolute top-0 right-0 w-[280px] sm:w-[320px] h-full bg-background/95 backdrop-blur-2xl border-l border-border flex flex-col justify-center gap-2 px-6 shadow-2xl z-10"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ delay: i * 0.04 + 0.1, duration: 0.3 }}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={cn(
                    "text-xl font-bold tracking-tight w-full py-3 rounded-xl transition-all duration-200 flex items-center px-3 border border-transparent hover:border-border hover:bg-foreground/[0.02]",
                    activeSection === item.href
                      ? "text-primary bg-primary/5 border-primary/10"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.04 + 0.15 }}
                className="mt-8 pt-6 border-t border-border flex items-center justify-between gap-3 px-3"
              >
                <Button size="sm" className="h-9 px-6 text-xs font-semibold flex-grow cursor-pointer" asChild>
                  <a href="https://wa.me/94758041606" target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </Button>
                <ModeToggle className="h-9 w-9 rounded-lg border border-border" iconSize="h-4 w-4" />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-0" />
    </>
  );
}
