import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhathiya Lakshan | Software Engineer & Full Stack Developer",
  description:
    "Bhathiya Lakshan is a Software Engineer from Sri Lanka specialising in React, Next.js, TypeScript and Node.js — building scalable web applications and cloud systems.",
  keywords: [
    "Bhathiya Lakshan",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AWS Engineer",
    "Docker DevOps",
    "JavaScript Developer",
    "Web Developer Sri Lanka",
    "Full Stack Developer Portfolio 2025",
    "Bhathiya Lakshan Portfolio",
    "IMOS Engineer",
    "Digi Pro Solutions",
    "LMS Developer",
    "Frontend Developer",
    "Backend Developer",
    "Cloud Engineer",
    "Sri Lanka Developer",
  ],
  openGraph: {
    title: "Bhathiya Lakshan | Software Engineer & Full Stack Developer",
    description:
      "Bhathiya Lakshan is a Software Engineer from Sri Lanka specialising in React, Next.js, TypeScript and Node.js — building scalable web applications and cloud systems.",
    url: "https://bhathiya.dev",
    siteName: "Bhathiya Lakshan",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Bhathiya Lakshan — Software Engineer & Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhathiya Lakshan | Software Engineer & Full Stack Developer",
    description:
      "Software Engineer from Sri Lanka. React, Next.js, TypeScript & Node.js. Building scalable web applications and cloud systems.",
    site: "@smbhathiya",
    creator: "@smbhathiya",
    images: ["/cover.png"],
  },
  alternates: {
    canonical: "https://bhathiya.dev",
  },
};

import { NavBar } from "@/components/sections/nav-bar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer hidden on mobile — bottom nav is the primary navigation */}
      <div className="hidden md:block">
        <Footer />
      </div>
      {/* Mobile footer — minimal, above bottom nav */}
      <div className="md:hidden pb-24 pt-8 px-5 border-t border-border text-center">
        <p className="text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Bhathiya Lakshan
        </p>
      </div>
    </div>
  );
}
