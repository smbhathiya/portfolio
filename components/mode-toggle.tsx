"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle({
  className,
  iconSize = "h-[1.2rem] w-[1.2rem]",
}: {
  className?: string;
  iconSize?: string;
}) {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`rounded-full bg-background hover:bg-background ${
        className || ""
      }`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className={`${iconSize} text-white/60`} />
      ) : (
        <Moon className={`${iconSize} text-black/60`} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
