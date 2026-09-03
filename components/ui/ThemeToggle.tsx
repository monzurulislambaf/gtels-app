"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ignore any pre-reset theme value, then follow the user's saved choice
    // only if they set it explicitly; otherwise follow the system preference.
    localStorage.removeItem("gtels-theme");
    const saved = localStorage.getItem("gtels-theme-v2");
    if (saved === "cupcake" || saved === "night") {
      setIsDark(saved === "night");
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      localStorage.removeItem("gtels-theme-v2");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.setAttribute("data-theme", prefersDark ? "night" : "cupcake");
    }
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? "cupcake" : "night";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("gtels-theme-v2", newTheme);
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
