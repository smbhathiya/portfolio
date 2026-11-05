"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const blobs = [
  {
    className:
      "top-[-15%] left-[-15%] md:top-[0%] md:left-[5%] w-[420px] md:w-[640px] h-[420px] md:h-[640px] from-foreground/10 dark:from-foreground/8",
    animate: { x: [0, 60, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.1, 0.95, 1] },
    duration: 24,
  },
  {
    className:
      "bottom-[-15%] right-[-15%] md:bottom-[5%] md:right-[5%] w-[420px] md:w-[600px] h-[420px] md:h-[600px] from-foreground/8 dark:from-foreground/6",
    animate: { x: [0, -70, 40, 0], y: [0, 50, -60, 0], scale: [1, 0.9, 1.12, 1] },
    duration: 28,
  },
  {
    className:
      "top-[40%] right-[25%] w-[300px] md:w-[460px] h-[300px] md:h-[460px] from-foreground/6 dark:from-foreground/5",
    animate: { x: [0, 40, -50, 0], y: [0, 60, -30, 0], scale: [1, 1.08, 0.9, 1] },
    duration: 32,
  },
];

export function BackgroundGlow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 -z-50 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          animate={blob.animate}
          transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute rounded-full bg-radial to-transparent to-70% blur-2xl ${blob.className}`}
        />
      ))}
    </div>
  );
}
