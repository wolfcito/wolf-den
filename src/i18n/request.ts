import { notFound } from "next/navigation";
import { getRequestConfig, setRequestLocale } from "next-intl/server";
import { type Locale, routing } from "@/i18n/routing";

export default getRequestConfig(async (params) => {
  const requestedLocale =
    (await params.requestLocale) ?? routing.defaultLocale;
  const normalizedLocale = routing.locales.includes(requestedLocale as Locale)
    ? (requestedLocale as Locale)
    : routing.defaultLocale;

  setRequestLocale(normalizedLocale);

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
