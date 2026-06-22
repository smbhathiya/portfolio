"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandTwitter,
  IconBrandGithub,
  IconSend,
  IconCheck,
  IconAlertCircle,
  IconArrowUpRight,
} from "@tabler/icons-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const contactInfo = [
  { icon: IconMail,          label: "Email",     value: "info@bhathiya.dev",    href: "mailto:info@bhathiya.dev" },
  { icon: IconBrandWhatsapp, label: "WhatsApp",  value: "+94 75 804 1606",      href: "https://wa.me/94758041606" },
  { icon: IconMapPin,        label: "Location",  value: "Kadawatha, Sri Lanka", href: "#" },
];

const socials = [
  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/", label: "LinkedIn" },
  { icon: IconBrandGithub,   href: "https://github.com/smbhathiya",                          label: "GitHub" },
  { icon: IconBrandTwitter,  href: "https://x.com/smbhathiya",                               label: "X" },
  { icon: IconBrandFacebook, href: "https://www.facebook.com/smbhathiya/",                   label: "Facebook" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef   = useRef<HTMLFormElement>(null);
  const [status,   setStatus]   = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useGSAP(
    () => {
      gsap.set(".contact-header",   { opacity: 0, y: 24 });
      gsap.set(".contact-info-col", { opacity: 0, x: -32 });
      gsap.set(".contact-form-col", { opacity: 0, x: 32 });
      gsap.set(".contact-info-item", { opacity: 0, x: -20 });
      gsap.set(".contact-social",    { opacity: 0, y: 12 });

      ScrollTrigger.create({
        trigger: ".contact-header",
        start: "top 82%",
        onEnter: () => {
          gsap.to(".contact-header", { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" });
        },
      });

      ScrollTrigger.create({
        trigger: ".contact-info-col",
        start: "top 80%",
        onEnter: () => {
          gsap.to(".contact-info-col",  { opacity: 1, x: 0, duration: 0.65, ease: "power3.out" });
          gsap.to(".contact-info-item", { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power3.out" });
          gsap.to(".contact-social",    { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, delay: 0.45, ease: "power3.out" });
        },
      });

      ScrollTrigger.create({
        trigger: ".contact-form-col",
        start: "top 80%",
        onEnter: () => {
          gsap.to(".contact-form-col", { opacity: 1, x: 0, duration: 0.7, delay: 0.15, ease: "power3.out" });
        },
      });
    },
    { scope: sectionRef },
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    const formData = new FormData(e.currentTarget);
    const body = {
      name:    formData.get("name")    as string,
      email:   formData.get("email")   as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    setStatus("loading");
    setErrorMsg("");

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      formRef.current?.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">

      {/* ── Decorative shapes ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-primary/[0.08] border-dashed"
          animate={{ rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -top-4 -right-4 w-36 h-36 rounded-full border border-border/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block select-none">
          <span className="text-[120px] font-black text-border/[0.05] leading-none">@</span>
        </div>
        <motion.div
          className="absolute bottom-20 -left-4 w-16 h-16 rounded-xl border border-primary/[0.12]"
          animate={{ rotate: [30, 55, 30], y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-primary/[0.03] blur-[80px] rounded-full" />
      </div>

      <div className="container px-4 md:px-8 max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="contact-header mb-16 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">Contact</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Let&apos;s Connect</h2>
          <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-lg">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Info column (2/5) ── */}
          <div className="contact-info-col lg:col-span-2 space-y-10">

            {/* Contact info items */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="contact-info-item group flex items-center gap-4 p-4 rounded-xl border border-border/70 bg-background/40 hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg border border-border/80 bg-background flex items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300 flex-shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-muted-foreground/40 mb-0.5">{label}</p>
                    <p className="text-sm md:text-[15px] font-medium group-hover:text-primary transition-colors truncate">{value}</p>
                  </div>
                  <IconArrowUpRight className="w-4 h-4 text-muted-foreground/20 group-hover:text-primary/50 transition-colors ml-auto flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/40 mb-4">Find me on</p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="contact-social w-11 h-11 flex items-center justify-center rounded-xl border border-border/70 bg-background/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status blurb */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-primary/[0.02]">
              <span className="relative flex h-2 w-2 mt-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <div>
                <p className="text-sm font-semibold mb-0.5">Available for opportunities</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Open to freelance projects, full-time roles, and interesting collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* ── Form column (3/5) ── */}
          <div className="contact-form-col lg:col-span-3">
            <div className="relative rounded-2xl border border-border/70 bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden">

              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.02] pointer-events-none" />

              <div className="p-6 md:p-8">

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center gap-5 py-16 text-center relative z-10">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className="w-16 h-16 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center"
                    >
                      <IconCheck className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold mb-1.5">Message Sent!</h4>
                      <p className="text-sm text-muted-foreground max-w-xs">
                        Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                      </p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setStatus("idle")} className="mt-1">
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold tracking-tight">Send a message</h3>
                      <p className="text-sm text-muted-foreground mt-1">I&apos;ll respond within 24 hours.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wide text-muted-foreground/60">
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          required
                          name="name"
                          placeholder="John Doe"
                          className="w-full h-11 px-4 rounded-xl bg-background/70 border border-border/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/15 outline-none transition-all duration-200 text-sm placeholder:text-muted-foreground/35"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wide text-muted-foreground/60">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          required
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full h-11 px-4 rounded-xl bg-background/70 border border-border/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/15 outline-none transition-all duration-200 text-sm placeholder:text-muted-foreground/35"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wide text-muted-foreground/60">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        required
                        name="subject"
                        placeholder="Project Inquiry"
                        className="w-full h-11 px-4 rounded-xl bg-background/70 border border-border/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/15 outline-none transition-all duration-200 text-sm placeholder:text-muted-foreground/35"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wide text-muted-foreground/60">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        name="message"
                        placeholder="Tell me about your project or idea..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-background/70 border border-border/70 focus:border-primary/50 focus:ring-2 focus:ring-primary/15 outline-none transition-all duration-200 text-sm placeholder:text-muted-foreground/35 resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2.5 text-sm text-destructive bg-destructive/8 border border-destructive/20 rounded-xl px-4 py-3">
                        <IconAlertCircle className="h-4 w-4 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-12 text-sm font-semibold tracking-wide group cursor-pointer hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <>
                          Send Message
                          <IconSend className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
