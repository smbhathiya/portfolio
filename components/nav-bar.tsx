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
          className="text-sm font-bold tracking-tight cursor-pointer"
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
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav
              aria-label="Mobile navigation"
              className="relative z-10 flex flex-col items-center justify-center h-full gap-2 px-6"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={cn(
                    "text-2xl font-semibold tracking-tight w-full text-center py-3 rounded-xl transition-colors duration-200",
                    activeSection === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex items-center gap-3"
              >
                <Button size="sm" className="h-9 px-6 text-xs font-semibold" asChild>
                  <a href="https://wa.me/94758041606" target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </Button>
                <ModeToggle className="h-9 w-9 rounded-lg border border-border" iconSize="h-4 w-4" />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-0" />
    </>
  );
}
