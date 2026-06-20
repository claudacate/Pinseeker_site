/**
 * Site-wide constants. Single source of truth for links, pricing, copy bits
 * that recur across sections. Update APP_STORE_URL when the listing is live.
 */

export const site = {
  name: "TempoSeeker",
  tagline: "Camera-based putting coach · iPhone",

  // ┌──────────────────────────────────────────────────────────────────┐
  // │  APP STORE DOWNLOAD LOCATION — PLACEHOLDER                         │
  // │  Replace with the real listing URL once the app is published.     │
  // │  Format: https://apps.apple.com/app/<slug>/id<10-digit-id>        │
  // │  Every "Download on the App Store" badge on the site points here. │
  // └──────────────────────────────────────────────────────────────────┘
  appStoreUrl: "https://apps.apple.com/app/temposeeker/id0000000000",

  // Social channels — paste full URLs once the channels exist. Each footer
  // link auto-hides while its URL is empty.
  social: {
    // Channel-ID URL (permanent — survives handle/name changes). Swap to a
    // pretty @handle URL only once a stable TempoSeeker handle is set.
    youtube: "https://www.youtube.com/channel/UCfp_ohIV6-VapiH1J4SKz6Q",
    instagram: "",
  },

  // Offer (from App Store ASO metadata): freemium — free daily putts, paid Pro.
  freeDailyPutts: 10,
  pricePerMonth: "$9.99",
  pricePerYear: "$109.99",

  // Contact / legal — office email
  supportEmail: "pinseeker2026@gmail.com",
} as const;
