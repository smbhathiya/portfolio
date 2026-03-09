"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
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

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const mailtoLink = `mailto:info@bhathiya.dev?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background Section Title & Glows */}
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[16vw] font-black text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap transform -translate-y-1">
          CONNECT
        </h2>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          <h2 className="font-bold text-4xl md:text-6xl tracking-widest uppercase text-center leading-tight">
            LET&apos;S{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              CONNECT
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch max-w-6xl mx-auto">
          {/* Contact Info Column */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-black tracking-widest uppercase leading-tight">
                  AVAILABLE FOR NEW <br />
                  <span className="opacity-40 italic">OPPORTUNITIES</span>
                </h3>
                <p className="text-muted-foreground text-xl font-medium max-w-md uppercase tracking-tight opacity-70">
                  I&apos;m always interested in hearing about new projects and
                  innovative ideas.
                </p>
              </div>

              <div className="space-y-10">
                {[
                  {
                    icon: <IconMail className="h-6 w-6" />,
                    label: "Email",
                    value: "info@bhathiya.dev",
                    href: "mailto:info@bhathiya.dev",
                  },
                  {
                    icon: <IconBrandWhatsapp className="h-6 w-6" />,
                    label: "WhatsApp",
                    value: "+94 75 804 1606",
                    href: "https://wa.me/94758041606",
                  },
                  {
                    icon: <IconMapPin className="h-6 w-6" />,
                    label: "Location",
                    value: "Kadawatha, Sri Lanka",
                    href: "#",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1] as any,
                    }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-[1.2rem] glass-card border border-foreground/10 bg-foreground/[0.02] flex items-center justify-center text-foreground/60 group-hover:text-foreground group-hover:border-foreground/30 transition-all duration-500 shadow-sm dark:shadow-none">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 mb-1">
                        {item.label}
                      </p>
                      <p className="text-xl font-black uppercase tracking-tight group-hover:translate-x-1 transition-all">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-16 flex gap-4">
              {[
                {
                  icon: <IconBrandLinkedin className="h-6 w-6" />,
                  href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                },
                {
                  icon: <IconBrandGithub className="h-6 w-6" />,
                  href: "https://github.com/smbhathiya",
                },
                {
                  icon: <IconBrandTwitter className="h-6 w-6" />,
                  href: "https://x.com/smbhathiya",
                },
                {
                  icon: <IconBrandFacebook className="h-6 w-6" />,
                  href: "https://www.facebook.com/smbhathiya/",
                },
              ].map((social, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full w-14 h-14 border-foreground/10 bg-foreground/[0.02] hover:bg-foreground hover:text-background dark:hover:bg-white/10 dark:hover:text-white transition-all duration-500"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <div className="p-8 md:p-14 glass-card rounded-[3rem] border border-foreground/10 bg-foreground/[0.01] shadow-2xl shadow-foreground/5 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground/40">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full h-16 px-8 rounded-[1.2rem] bg-foreground/[0.03] border border-foreground/5 focus:border-foreground/20 outline-none transition-all placeholder:text-muted-foreground/20 font-black uppercase text-[11px] tracking-wider"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground/40">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="e.g. john@example.com"
                      className="w-full h-16 px-8 rounded-[1.2rem] bg-foreground/[0.03] border border-foreground/5 focus:border-foreground/20 outline-none transition-all placeholder:text-muted-foreground/20 font-black uppercase text-[11px] tracking-wider"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground/40">
                    Subject
                  </label>
                  <input
                    required
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full h-16 px-8 rounded-[1.2rem] bg-foreground/[0.03] border border-foreground/5 focus:border-foreground/20 outline-none transition-all placeholder:text-muted-foreground/20 font-black uppercase text-[11px] tracking-wider"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] ml-1 text-muted-foreground/40">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full p-8 rounded-[1.5rem] bg-foreground/[0.03] border border-foreground/5 focus:border-foreground/20 outline-none transition-all placeholder:text-muted-foreground/20 font-black uppercase text-[11px] tracking-wider resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-20 rounded-[1.5rem]  uppercase tracking-[0.4em] text-xs shadow-2xl cursor-pointer font-bold active:scale-[0.98] transition-all"
                >
                  <span className="flex items-center gap-4">
                    Send Message <IconSend className="h-5 w-5" />
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
