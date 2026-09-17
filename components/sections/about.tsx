"use client";

import { useRef } from "react";
import { IconSchool, IconBriefcase } from "@tabler/icons-react";
import { workExperience, education } from "@/data/aboutData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface JourneyEntry {
  title: string;
  company?: string;
  institution?: string;
  location?: string;
  duration: string;
  description: string;
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".about-header", { opacity: 0, y: 24 });
      gsap.set(".about-category-title", { opacity: 0, x: -16 });
      gsap.set(".about-row", { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: ".about-header",
        start: "top 82%",
        onEnter: () => {
          gsap.to(".about-header", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
        },
      });

      document.querySelectorAll(".about-category-title").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            gsap.to(el, { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" });
          },
        });
      });

      document.querySelectorAll(".about-row").forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.5, delay: (i % 4) * 0.05, ease: "power3.out" });
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="about-header mb-16 md:mb-20">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-primary uppercase mb-3">About</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Professional Journey</h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          <JourneyGroup icon={IconBriefcase} label="Experience" entries={workExperience} />
          <div className="border-t border-border" />
          <JourneyGroup icon={IconSchool} label="Education" entries={education} />
        </div>
      </div>
    </section>
  );
}

function JourneyGroup({
  icon: Icon,
  label,
  entries,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  entries: JourneyEntry[];
}) {
  return (
    <div>
      <div className="about-category-title flex items-center gap-2.5 mb-8 md:mb-10">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">{label}</h3>
      </div>

      <div className="space-y-4">
        {entries.map((entry, idx) => (
          <JourneyRow key={idx} entry={entry} />
        ))}
      </div>
    </div>
  );
}

function JourneyRow({ entry }: { entry: JourneyEntry }) {
  return (
    <div className="about-row group grid grid-cols-1 md:grid-cols-[160px_1fr] gap-1.5 md:gap-8 rounded-lg border border-border/70 bg-background/40 backdrop-blur-sm p-6 transition-colors duration-300 hover:border-primary/40">
      <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors duration-300 group-hover:text-foreground">
        {entry.duration}
      </span>

      <div>
        <h4 className="text-lg font-semibold tracking-tight mb-1 transition-colors duration-300 group-hover:text-primary">
          {entry.title}
        </h4>
        <p className="text-sm font-medium text-muted-foreground mb-2.5">
          {entry.company || entry.institution}
          {entry.location && <span className="opacity-70"> · {entry.location}</span>}
        </p>
        <p className="text-sm text-muted-foreground/80 leading-relaxed">{entry.description}</p>
      </div>
    </div>
  );
}
