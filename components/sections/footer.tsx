"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollToTopButton } from "../ui/scroll-to-top-button";
import { WhatsAppMessageButton } from "../ui/whatsapp-message-button";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
  IconMail,
  IconHeart,
} from "@tabler/icons-react";
import { ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: IconBrandGithub,
    href: "https://github.com/smbhathiya",
    label: "GitHub",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://linkedin.com/in/bhathiya-lakshan-91579722a/",
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-primary/[0.025] blur-[80px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        {/* Main footer body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="pt-14 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand column */}
          <div className="space-y-5 md:col-span-1">
            <div>
              <h3 className="text-2xl font-black tracking-tight">
                Bhathiya<span className="text-primary">.</span>dev
              </h3>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary/60 mt-1">
                Software Engineer
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px]">
              Building modern web applications with clean code, scalable
              architecture, and a passion for great UX.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border/70 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
              Sitemap
            </h4>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit group flex items-center gap-1"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-200 overflow-hidden" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
              Get in Touch
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:info@bhathiya.dev"
                className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <IconMail className="w-4 h-4 flex-shrink-0 group-hover:text-primary transition-colors" />
                info@bhathiya.dev
              </a>
              <a
                href="https://wa.me/94758041606"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                +94 75 804 1606
              </a>
              <span className="text-sm text-muted-foreground/60">
                Kadawatha, Sri Lanka
              </span>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary border border-primary/25 bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 hover:border-primary/40 transition-all duration-200 mt-2"
            >
              Start a project
              <ChevronRight />  
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border/60 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50">
            &copy; {currentYear} Bhathiya Lakshan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 flex items-center gap-1.5">
            Developed by Bhathiya.dev
          </p>
        </div>
      </div>

      <ScrollToTopButton />
      <WhatsAppMessageButton />
    </footer>
  );
}
