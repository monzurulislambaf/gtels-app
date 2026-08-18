"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check saved preference or system preference
    const saved = localStorage.getItem("gtels-theme");
    if (saved) {
      setIsDark(saved === "night");
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.setAttribute("data-theme", prefersDark ? "night" : "cupcake");
    }
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? "cupcake" : "night";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("gtels-theme", newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="btn btn-ghost btn-circle btn-sm w-10 h-10" aria-label="Toggle theme" />
    );
  }

  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm w-10 h-10" aria-label="Toggle day/night mode">
      {/* Hidden checkbox controls the theme */}
      <input
        type="checkbox"
        className="theme-controller"
        value="night"
        checked={isDark}
        onChange={handleToggle}
      />
      {/* Sun icon (shown when light = unchecked) */}
      <Sun className="swap-off w-5 h-5 text-amber-500" />
      {/* Moon icon (shown when dark = checked) */}
      <Moon className="swap-on w-5 h-5 text-blue-400" />
    </label>
  );
}
