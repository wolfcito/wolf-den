import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { type Locale, routing } from "@/i18n/routing";

export default getRequestConfig(async ({ locale }) => {
  const normalizedLocale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  try {
    return {
      locale: normalizedLocale,
      messages: (await import(`@/i18n/messages/${normalizedLocale}.json`))
        .default,
    };
  } catch (error) {
    console.error(`Missing messages for locale "${normalizedLocale}"`, error);
    notFound();
  }
});
