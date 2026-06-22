"use client";

import { useRef, useState } from "react";
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
} from "@tabler/icons-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const contactInfo = [
  { icon: IconMail, label: "Email", value: "info@bhathiya.dev", href: "mailto:info@bhathiya.dev" },
  { icon: IconBrandWhatsapp, label: "WhatsApp", value: "+94 75 804 1606", href: "https://wa.me/94758041606" },
  { icon: IconMapPin, label: "Location", value: "Kadawatha, Sri Lanka", href: "#" },
];

const socials = [
  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/", label: "LinkedIn" },
  { icon: IconBrandGithub, href: "https://github.com/smbhathiya", label: "GitHub" },
  { icon: IconBrandTwitter, href: "https://x.com/smbhathiya", label: "X (Twitter)" },
  { icon: IconBrandFacebook, href: "https://www.facebook.com/smbhathiya/", label: "Facebook" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useGSAP(
    () => {
      gsap.set(".contact-header", { opacity: 0, y: 24 });
      gsap.set(".contact-info-col", { opacity: 0, x: -32 });
      gsap.set(".contact-form-col", { opacity: 0, x: 32 });
      gsap.set(".contact-info-item", { opacity: 0, x: -20 });
      gsap.set(".contact-social", { opacity: 0, y: 12 });

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
          gsap.to(".contact-info-col", { opacity: 1, x: 0, duration: 0.65, ease: "power3.out" });
          gsap.to(".contact-info-item", { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.2, ease: "power3.out" });
          gsap.to(".contact-social", { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, delay: 0.45, ease: "power3.out" });
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
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="contact-header mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">Contact</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Let&apos;s Connect</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info column */}
          <div className="contact-info-col space-y-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Let&apos;s Build Something Beautiful
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                I&apos;m always interested in hearing about new projects and innovative ideas. Whether you have a question or just want to say hi, my inbox is open.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <a key={i} href={href} className="contact-info-item flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-0.5">{label}</p>
                    <p className="text-sm md:text-base font-medium group-hover:text-primary transition-colors">{value}</p>
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
                  className="contact-social w-10 h-10 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-col">
            <div className="border border-border/80 rounded-xl p-8 bg-background/40 backdrop-blur-sm shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.015] pointer-events-none" />

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <IconCheck className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Message Sent!</h4>
                    <p className="text-sm text-muted-foreground">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus("idle")}
                    className="mt-2"
                  >
                    Send another
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        required
                        name="name"
                        placeholder="John Doe"
                        className="w-full h-12 px-4 rounded-lg bg-background/50 border border-border/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm md:text-base placeholder:text-muted-foreground/40 shadow-inner"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        required
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full h-12 px-4 rounded-lg bg-background/50 border border-border/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm md:text-base placeholder:text-muted-foreground/40 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      required
                      name="subject"
                      placeholder="Project Inquiry"
                      className="w-full h-12 px-4 rounded-lg bg-background/50 border border-border/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm md:text-base placeholder:text-muted-foreground/40 shadow-inner"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/80 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm md:text-base placeholder:text-muted-foreground/40 resize-none shadow-inner"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                      <IconAlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full h-12 text-sm md:text-base font-semibold tracking-wide cursor-pointer group hover:opacity-95 transition-all active:scale-98 disabled:opacity-60"
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
    </section>
  );
}
