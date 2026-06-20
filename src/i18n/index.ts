import { en, type SiteContent } from "./en";
import { ko } from "./ko";
import { zhTW } from "./zhTW";
import { ja } from "./ja";
import { defaultLocale, isLocale, localePrefix, type Locale } from "./config";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends ReadonlyArray<unknown> ? T[P] : DeepPartial<T[P]>;
};

const overrides: Record<Exclude<Locale, "en">, DeepPartial<SiteContent>> = {
  ko,
  "zh-tw": zhTW,
  ja,
};

/** Deep-merge a locale override onto the English base. Arrays replace wholesale;
 * objects merge key-by-key; any key the locale omits falls back to English. */
function merge<T>(base: T, over: DeepPartial<T> | undefined): T {
  if (over === undefined) return base;
  if (Array.isArray(base)) return (over as unknown as T) ?? base;
  if (typeof base === "object" && base !== null) {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const k of Object.keys(over as Record<string, unknown>)) {
      out[k] = merge((base as Record<string, unknown>)[k], (over as Record<string, unknown>)[k] as never);
    }
    return out as T;
  }
  return (over as unknown as T) ?? base;
}

const cache = new Map<Locale, SiteContent>();

/** Fully-resolved content for a locale (English fallback for missing strings). */
export function getContent(locale: Locale): SiteContent {
  if (locale === defaultLocale) return en;
  if (cache.has(locale)) return cache.get(locale)!;
  const resolved = merge(en, overrides[locale as Exclude<Locale, "en">]);
  cache.set(locale, resolved);
  return resolved;
}

/** Resolve the active locale from an Astro instance (defaults to English). */
export function langFrom(currentLocale: string | undefined): Locale {
  return isLocale(currentLocale) ? currentLocale : defaultLocale;
}

/** Build a locale-prefixed href for an in-site path (e.g. "/", "#pricing"). */
export function localized(path: string, locale: Locale): string {
  if (path.startsWith("#")) return path; // same-page anchor
  const prefix = localePrefix(locale);
  if (path === "/") return prefix || "/";
  return `${prefix}${path}`;
}

export { defaultLocale, localePrefix, locales, localeNames, htmlLang, isLocale } from "./config";
export type { Locale } from "./config";
