"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAME = "Bhathiya";

export function PageLoader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!loaderRef.current || !contentRef.current || !barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".loader-char", { opacity: 0, y: 22 });
      gsap.set(".loader-dot", { opacity: 0, scale: 0.5 });
      gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({
        onComplete: () => {
          setVisible(false);
          onComplete?.();
        },
      });

      tl.to(".loader-char", {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.055,
        ease: "power2.out",
      })
        .to(".loader-dot", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)" }, "-=0.05")
        .to(barRef.current, { scaleX: 1, duration: 0.45, ease: "power2.inOut" }, "-=0.15")
        .to(contentRef.current, {
          opacity: 0,
          y: -12,
          duration: 0.25,
          ease: "power2.in",
          delay: 0.1,
        })
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 0.65,
          ease: "expo.inOut",
        }, "-=0.05");
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div ref={contentRef} className="flex flex-col items-center gap-4 select-none">
        <div className="text-5xl sm:text-6xl font-black tracking-tighter uppercase flex items-baseline">
          {NAME.split("").map((char, i) => (
            <span key={i} className="loader-char inline-block">
              {char}
            </span>
          ))}
          <span className="loader-dot text-primary ml-[2px]">.</span>
        </div>
        <div className="w-20 h-[1.5px] bg-border/40 overflow-hidden rounded-full">
          <div ref={barRef} className="w-full h-full bg-primary rounded-full" />
        </div>
      </div>
    </div>
  );
}
