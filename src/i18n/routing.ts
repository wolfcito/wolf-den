import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = {
  locales: ["en", "es"] as const,
  defaultLocale: "en",
};

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
