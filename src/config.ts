/**
 * Site-wide constants. Single source of truth for links, pricing, copy bits
 * that recur across sections. Update APP_STORE_URL when the listing is live.
 */

export const site = {
  name: "PinSeeker",
  tagline: "Camera-based putting coach · iPhone",

  // ┌──────────────────────────────────────────────────────────────────┐
  // │  APP STORE DOWNLOAD LOCATION — PLACEHOLDER                         │
  // │  Replace with the real listing URL once the app is published.     │
  // │  Format: https://apps.apple.com/app/<slug>/id<10-digit-id>        │
  // │  Every "Download on the App Store" badge on the site points here. │
  // └──────────────────────────────────────────────────────────────────┘
  appStoreUrl: "https://apps.apple.com/app/pinseeker/id0000000000",

  // Promo film — YouTube video IDs per locale (facade/click-to-load embed).
  // Fill these once the films are uploaded; the "See it in action" section
  // auto-hides while a locale's ID (and the English fallback) are empty.
  // The ID is the part after v= in youtube.com/watch?v=<ID> or after youtu.be/.
  youtubeIds: { en: "", ko: "", "zh-tw": "", ja: "" } as Record<string, string>,

  // Offer (from App Store ASO metadata): freemium — free daily putts, paid Pro.
  freeDailyPutts: 10,
  pricePerMonth: "$9.99",
  pricePerYear: "$109.99",

  // Contact / legal — office email
  supportEmail: "pinseeker2026@gmail.com",
} as const;
