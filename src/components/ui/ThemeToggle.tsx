"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const STORAGE_KEY = "wolf-den-theme";
type ThemeMode = "light" | "dark";

function resolveInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeToggle() {
  const t = useTranslations("ThemeToggle");
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const initial = resolveInitialTheme();
    setMode(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      console.warn("Unable to persist theme", error);
    }
  }, [mode]);

  const toggle = () => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex h-12 items-center rounded-full border border-[#d1d7eb] bg-white px-2 transition hover:border-[#447bff]"
      aria-pressed={mode === "dark"}
    >
      <span
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all
          ${mode === "light" ? "bg-[#447bff] text-white shadow-[0_12px_30px_-18px_rgba(68,123,255,0.8)]" : "text-[#0f1621]"}`}
      >
        {t("light")}
      </span>
      <span
        className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-all
          ${mode === "dark" ? "bg-[#0b1320] text-white shadow-[0_12px_30px_-18px_rgba(11,19,32,0.9)]" : "text-[#0f1621]"}`}
      >
        {t("dark")}
      </span>
    </button>
  );
}

export default ThemeToggle;
