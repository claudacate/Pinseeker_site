/** i18n configuration. English is the default and lives at the site root (no
 * prefix); other locales are prefixed (/ko, /zh-tw, /ja). */

export const defaultLocale = "en" as const;
export const locales = ["en", "ko", "zh-tw", "ja"] as const;
export type Locale = (typeof locales)[number];

/** Native names shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  "zh-tw": "繁體中文",
  ja: "日本語",
};

/** `<html lang>` / hreflang codes per locale. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  ko: "ko",
  "zh-tw": "zh-Hant",
  ja: "ja",
};

export function isLocale(v: string | undefined): v is Locale {
  return !!v && (locales as readonly string[]).includes(v);
}

/** Path prefix for a locale ("" for the default). */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}
