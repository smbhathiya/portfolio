"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandTwitter,
  IconBrandGithub,
  IconSend,
} from "@tabler/icons-react";

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: "info@bhathiya.dev",
    href: "mailto:info@bhathiya.dev",
  },
  {
    icon: IconBrandWhatsapp,
    label: "WhatsApp",
    value: "+94 75 804 1606",
    href: "https://wa.me/94758041606",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "Kadawatha, Sri Lanka",
    href: "#",
  },
];

const socials = [
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
    label: "LinkedIn",
  },
  {
    icon: IconBrandGithub,
    href: "https://github.com/smbhathiya",
    label: "GitHub",
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

export function ContactSection() {
  const handleSubmit = (e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement;
  }) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:info@bhathiya.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            05 / Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s Connect
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">
                Let&apos;s Build Something Beautiful
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always interested in hearing about new projects and
                innovative ideas. Whether you have a question or just want to
                say hi, my inbox is open.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50 mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-2 pt-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="border border-border/80 rounded-xl p-8 bg-background/40 backdrop-blur-sm shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.015] pointer-events-none" />
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      required
                      name="name"
                      placeholder="John Doe"
                      className="w-full h-11 px-4 rounded-lg bg-background/50 border border-border/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm placeholder:text-muted-foreground/40 shadow-inner"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full h-11 px-4 rounded-lg bg-background/50 border border-border/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm placeholder:text-muted-foreground/40 shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    required
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full h-11 px-4 rounded-lg bg-background/50 border border-border/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm placeholder:text-muted-foreground/40 shadow-inner"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm placeholder:text-muted-foreground/40 resize-none shadow-inner"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-sm font-semibold tracking-wide cursor-pointer group hover:opacity-95 transition-all active:scale-98"
                >
                  Send Message
                  <IconSend className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
