"use client";

import Link from "next/link";
import { ScrollToTopButton } from "../ui/scroll-to-top-button";
import { WhatsAppMessageButton } from "../ui/whatsapp-message-button";
import { motion } from "framer-motion";
import { Card } from "../ui/card";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 md:py-32 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-foreground/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <Card className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10 bg-transparent">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-20 border border-foreground/5 bg-foreground/[0.01] mb-12 md:mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 max-w-sm"
            >
              <h3 className="text-3xl font-black tracking-tighter uppercase">
                Bhathiya<span className="text-primary">.DEV</span>
              </h3>
              <p className="text-muted-foreground text-sm md:text-lg font-medium leading-relaxed uppercase tracking-tight opacity-60">
                Software Engineer building modern web applications with clean
                code and scalable architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-12 md:gap-32 w-full lg:w-auto"
            >
              <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
                  Sitemap
                </h4>
                <nav className="flex flex-col space-y-5">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "About", href: "#about" },
                    { name: "Skills", href: "#skills" },
                    { name: "Projects", href: "#projects" },
                    { name: "Contact", href: "#contact" },
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-all duration-300 font-black uppercase tracking-[0.2em] w-fit group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">
                  Contact
                </h4>
                <div className="flex flex-col space-y-5">
                  <a
                    href="mailto:info@bhathiya.dev"
                    className="text-xs text-muted-foreground hover:text-foreground transition-all duration-300 font-black uppercase tracking-[0.2em] w-fit group"
                  >
                    <span className="relative">
                      Email
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                  <a
                    href="https://wa.me/94723095865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-all duration-300 font-black uppercase tracking-[0.2em] w-fit group"
                  >
                    <span className="relative">
                      WhatsApp
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                  <p className="text-xs text-foreground font-black uppercase tracking-[0.2em]">
                    Kadawatha, Sri Lanka
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 opacity-30">
          <p className="text-[9px] font-black uppercase tracking-[0.6em] text-center md:text-left">
            © {currentYear} Bhathiya Lakshan
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center md:justify-end">
            <a
              href="https://github.com/smbhathiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-black uppercase tracking-[0.4em] hover:text-foreground transition-colors"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/bhathiya-lakshan-91579722a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-black uppercase tracking-[0.4em] hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/smbhathiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-black uppercase tracking-[0.4em] hover:text-foreground transition-colors"
            >
              Twitter (X)
            </a>
            <a
              href="https://www.facebook.com/smbhathiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-black uppercase tracking-[0.4em] hover:text-foreground transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </Card>

      <ScrollToTopButton />
      <WhatsAppMessageButton />
    </footer>
  );
}
