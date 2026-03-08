"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ModeToggle = dynamic(
  () => import("./mode-toggle").then((mod) => mod.ModeToggle),
  { ssr: false },
);
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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

  // Scrollspy and scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      let closestIdx = 0;
      let minDist = Number.POSITIVE_INFINITY;
      navItems.forEach((item, idx) => {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - NAVBAR_HEIGHT - 20);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        }
      });
      setActiveSection(navItems[closestIdx].href);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      window.scrollTo({
        top: el.offsetTop - NAVBAR_HEIGHT,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 pointer-events-none">
        {/* Logo - Glass Protected */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "pointer-events-auto flex items-center gap-2 group cursor-pointer transition-all duration-500 px-6 py-3 rounded-full border border-transparent",
            isScrolled &&
              "glass border-white/5 bg-white/[0.03] backdrop-blur-2xl shadow-2xl",
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-base font-black tracking-tighter text-foreground uppercase">
            Bhathiya<span className="text-primary font-black">.DEV</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden md:flex items-center pointer-events-auto glass px-2 py-1.5 rounded-full border-white/5 bg-white/[0.03] backdrop-blur-2xl shadow-2xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full",
                activeSection === item.href
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <AnimatePresence>
                {activeSection === item.href && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/20"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
              {item.label}
            </Link>
          ))}
        </motion.div>

        {/* Right Actions - Glass Protected */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Desktop Contact Button */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <Button
              className={cn(
                "rounded-full bg-foreground text-background font-black uppercase tracking-widest text-[10px] hover:bg-foreground/90 transition-all shadow-xl shadow-foreground/5 border-0 h-10 px-6 lg:h-12 lg:px-8",
              )}
              asChild
            >
              <a
                href="https://wa.me/94723095865"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact me
              </a>
            </Button>
          </motion.div>

          {/* Mobile & Combined Actions Pill */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={cn(
              "flex items-center gap-0.5 p-1 transition-all duration-500 rounded-full border border-transparent",
              (isScrolled ||
                (typeof window !== "undefined" && window.innerWidth < 768)) &&
                "glass border-white/5 bg-white/[0.03] backdrop-blur-2xl shadow-2xl",
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
              >
                <div className="w-5 h-3 relative flex flex-col justify-between">
                  <span
                    className={cn(
                      "w-full h-0.5 bg-foreground transition-all duration-300 rounded-full",
                      isMobileMenuOpen && "rotate-45 translate-y-[5px]",
                    )}
                  />
                  <span
                    className={cn(
                      "w-full h-0.5 bg-foreground transition-all duration-300 rounded-full",
                      isMobileMenuOpen && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "w-full h-0.5 bg-foreground transition-all duration-300 rounded-full",
                      isMobileMenuOpen && "-rotate-45 -translate-y-[5px]",
                    )}
                  />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden pt-24"
          >
            <div
              className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav className="relative z-10 container flex flex-col items-center gap-6 p-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-3xl font-black uppercase tracking-tighter transition-colors",
                    activeSection === item.href
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-border/40 w-full flex justify-center"
              >
                <div className="flex items-center gap-4 bg-muted/50 px-6 py-3 rounded-full">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                    Theme
                  </span>
                  <ModeToggle />
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Spacer */}
      <div className="h-0" />
    </>
  );
}
