"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundGlow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Ambient Blob 1 - Sunset Red Primary Accent */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.12, 0.92, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] md:top-[5%] md:left-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-emerald-500/6 dark:bg-primary/4 blur-[80px] md:blur-[140px]"
      />

      {/* Ambient Blob 2 - Deep Rose Accent */}
      <motion.div
        animate={{
          x: [0, -80, 50, 0],
          y: [0, 60, -70, 0],
          scale: [1, 0.88, 1.15, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] md:bottom-[10%] md:right-[15%] w-[350px] md:w-[550px] h-[350px] md:h-[550px] rounded-full bg-teal-500/6 dark:bg-teal-500/3 blur-[80px] md:blur-[130px]"
      />

      {/* Ambient Blob 3 - Light Scarlet Accent */}
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 70, -30, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] right-[20%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-green-600/4 dark:bg-green-600/2 blur-[85px] md:blur-[120px]"
      />
    </div>
  );
}
