import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bhathiya Lakshan | Full Stack Engineer & Infrastructure Specialist",
  description:
    "Professional portfolio of Bhathiya Lakshan - Full Stack Engineer specializing in scalable web architectures, infrastructure management, and technical leadership at IMOS.",
  keywords: [
    "Senior Full Stack Engineer",
    "Software Architect",
    "Technical Lead",
    "Infrastructure Specialist",
    "Scalable Web Architecture",
    "React Next.js Specialist",
    "Node.js Backend Developer",
    "AWS Cloud Architect",
    "DevOps Engineer",
    "TypeScript Developer",
    "Sri Lanka Software Engineer",
    "System Design Expert",
    "Enterprise Solutions Architect",
    "Full Stack Developer Portfolio 2025",
    "Bhathiya",
    "Bhathiya Lakshan",
    "Bhathiya Lakshan Portfolio",
    "IMOS",
    "Ishara Madhushan Online School",
    "ishara madhushan",
    "IMOS Lead Engineer",
    "LMS Developer",
    "Online Academy Platform Architect",
    "Educational Technology Specialist",
    "E-learning Solutions for Teachers",
    "Student Management System Developer",
    "Web Applications for Online Schools",
    "Custom Learning Management Systems",
    "Online Education Platform Specialist",
    "Teacher Portal Development",
    "who is bhathiya lakshan",
    "what does bhathiya lakshan do",
    "bhathiya lakshan software engineer",
    "bhathiya lakshan full stack developer",
    "bhathiya lakshan sri lanka",
    "bhathiya lakshan projects",
  ],
  openGraph: {
    title:
      "Bhathiya Lakshan | Full Stack Developer & Software Engineer Portfolio",
    description:
      "Welcome to Bhathiya Lakshan's portfolio - Full Stack Developer and Software Engineer. Explore innovative projects including AI Image Generator, Weather App, Bliss Café, and more.",
    url: "https://bhathiya.dev",
    siteName: "Bhathiya Lakshan",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Bhathiya Lakshan - Full Stack Developer and Software Engineer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
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
      <Footer />
    </div>
  );
}
