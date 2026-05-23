"use client";

import Link from "next/link";
import { ScrollToTopButton } from "../ui/scroll-to-top-button";
import { WhatsAppMessageButton } from "../ui/whatsapp-message-button";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const contactLinks = [
  { label: "Email", href: "mailto:info@bhathiya.dev", external: false },
  { label: "WhatsApp", href: "https://wa.me/94758041606", external: true },
  { label: "GitHub", href: "https://github.com/smbhathiya", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/bhathiya-lakshan-91579722a/", external: true },
];

const socialLinks = [
  { label: "Github", href: "https://github.com/smbhathiya" },
  { label: "LinkedIn", href: "https://linkedin.com/in/bhathiya-lakshan-91579722a/" },
  { label: "Twitter", href: "https://x.com/smbhathiya" },
  { label: "Facebook", href: "https://www.facebook.com/smbhathiya/" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row justify-between gap-12 mb-16"
        >
          {/* Brand */}
          <div className="max-w-xs space-y-4">
            <h3 className="text-xl font-bold tracking-tight">
              Bhathiya<span className="text-primary">.dev</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software Engineer building modern web applications with clean code and scalable architecture.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Sitemap</h4>
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">Contact</h4>
              <div className="flex flex-col space-y-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            &copy; {currentYear} Bhathiya Lakshan. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <ScrollToTopButton />
      <WhatsAppMessageButton />
    </footer>
  );
}
