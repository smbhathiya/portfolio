import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const profilePage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: "Bhathiya Lakshan - Full Stack Software Engineer",
  mainEntity: { "@id": `${SITE_URL}/#person` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
  inLanguage: "en",
};

export default function Home() {
  return (
    <main>
      <JsonLd data={profilePage} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
