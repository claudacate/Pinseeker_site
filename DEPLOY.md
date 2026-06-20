# Deploying PinSeeker website

Static Astro site. Builds to `dist/`.

## Local
```
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview  # serve the built dist/ locally
```

## Cloudflare Pages (recommended, free)
1. Push this folder to a Git repo (GitHub/GitLab), or use Cloudflare's "Direct Upload".
2. In Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. You get a free `*.pages.dev` URL.

### Custom domain (later)
Cloudflare Pages → your project → Custom domains → add the domain and follow the DNS steps.
Then update `site` in `astro.config.mjs` (and the URL in `public/robots.txt`) to the real domain so canonical URLs, Open Graph, and the sitemap point at it.

## When the app goes live on the App Store
In `src/config.ts`, replace the `appStoreUrl` placeholder
(`https://apps.apple.com/app/pinseeker/id0000000000`) with the real listing URL.
That's the single download location — every "Download on the App Store" badge
on the site points to it.

## Notes
- `sitemap-index.xml` is generated at build time (only present in `dist/`, not the dev server).
- Privacy Policy (`/privacy`) and Terms (`/terms`) are first drafts — have them reviewed before launch.
- Hero video, demo screenshots, OG image and favicons are pre-optimized in `public/`.
