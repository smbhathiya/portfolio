"use client";

import Link from "next/link";
import { ScrollToTopButton } from "../ui/scroll-to-top-button";
import { WhatsAppMessageButton } from "../ui/whatsapp-message-button";
import { motion } from "framer-motion";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

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
  { label: "Twitter (X)", href: "https://x.com/smbhathiya" },
  { label: "Facebook", href: "https://www.facebook.com/smbhathiya/" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/[0.04] blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="glass-card rounded-2xl p-8 md:p-20 border border-foreground/10 mb-12 md:mb-20 relative overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            {/* Brand column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="space-y-6 md:space-y-8 max-w-sm"
            >
              <h3 className="text-3xl font-black tracking-tighter uppercase [text-shadow:0_0_30px_color-mix(in_oklch,var(--color-primary)_20%,transparent)]">
                Bhathiya<span className="text-primary">.DEV</span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed uppercase tracking-tight opacity-60">
                Software Engineer building modern web applications with clean
                code and scalable architecture.
              </p>
            </motion.div>

            {/* Links columns */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-12 md:gap-32 w-full lg:w-auto"
            >
              <div className="space-y-8">
                <motion.h4 variants={fadeUp} className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
                  Sitemap
                </motion.h4>
                <nav className="flex flex-col space-y-5">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={fadeUp}>
                      <Link
                        href={link.href}
                        className="text-xs text-muted-foreground hover:text-foreground transition-all duration-300 font-black uppercase tracking-[0.2em] w-fit group"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="space-y-8">
                <motion.h4 variants={fadeUp} className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
                  Contact
                </motion.h4>
                <div className="flex flex-col space-y-5">
                  {contactLinks.map((item) => (
                    <motion.div key={item.label} variants={fadeUp}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-xs text-muted-foreground hover:text-foreground transition-all duration-300 font-black uppercase tracking-[0.2em] w-fit group"
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </motion.div>
                  ))}
                  <motion.p variants={fadeUp} className="text-xs text-foreground/60 font-black uppercase tracking-[0.2em]">
                    Kadawatha, Sri Lanka
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 opacity-50"
        >
          <p className="text-[9px] font-black uppercase tracking-[0.6em] text-center md:text-left">
            &copy; {currentYear} Bhathiya Lakshan
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center md:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] font-black uppercase tracking-[0.4em] hover:text-foreground hover:opacity-100 transition-all duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <ScrollToTopButton />
      <WhatsAppMessageButton />
    </footer>
  );
}
