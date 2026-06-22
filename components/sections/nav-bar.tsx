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
import {
  IconHome2,
  IconUser,
  IconCode,
  IconLayoutGrid,
  IconMail,
} from "@tabler/icons-react";

const navItems = [
  { href: "#home", label: "Home", icon: IconHome2 },
  { href: "#about", label: "About", icon: IconUser },
  { href: "#skills", label: "Skills", icon: IconCode },
  { href: "#projects", label: "Projects", icon: IconLayoutGrid },
  { href: "#contact", label: "Contact", icon: IconMail },
];

const NAVBAR_HEIGHT = 80;

export function NavBar() {
  const [activeSection, setActiveSection] = useState("#home");
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

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - NAVBAR_HEIGHT, behavior: "smooth" });
  };

  const handleDesktopNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-[oklch(0.82_0.15_145)] origin-left z-55 pointer-events-none"
        style={{ scaleX }}
      />

      {/* ─── Desktop / Mobile top header ─── */}
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
              onClick={(e) => handleDesktopNavClick(e as MouseEvent<HTMLAnchorElement>, item.href)}
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
          {/* Desktop: Contact button */}
          <div className="hidden md:block">
            <Button size="sm" className="h-9 px-5 text-xs font-semibold tracking-wide" asChild>
              <a href="https://wa.me/94758041606" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </Button>
          </div>

          <ModeToggle
            className="h-9 w-9 rounded-lg border border-border bg-background/50 hover:bg-foreground/5 transition-colors"
            iconSize="h-4 w-4"
          />
          {/* No hamburger on mobile — bottom nav handles navigation */}
        </motion.div>
      </header>

      {/* ─── Mobile bottom navigation ─── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        aria-label="Mobile navigation"
      >
        <div className="bg-background/92 backdrop-blur-2xl border-t border-border/80 px-1 pt-2 pb-[calc(10px+env(safe-area-inset-bottom,0px))]">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    "relative flex flex-col items-center gap-[3px] px-3 py-1.5 rounded-xl min-w-[56px] transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                  aria-label={item.label}
                >
                  <Icon
                    className={cn(
                      "relative z-10 transition-all duration-200",
                      isActive ? "w-[22px] h-[22px] scale-110" : "w-5 h-5",
                    )}
                  />
                  <span className="relative z-10 text-[10px] font-semibold tracking-wide">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
