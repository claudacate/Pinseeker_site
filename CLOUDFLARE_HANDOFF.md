# Handoff — Deploy PinSeeker website to Cloudflare Pages

*Paste this whole file as the first message in a new Claude Code session (opened in
`/Volumes/external/Xcode projects/Pinseeker related items`), or follow it yourself.*

---

## Context
- **Project:** PinSeeker marketing website (Astro, static). Folder: `pinseeker-website/`.
- **Repo:** https://github.com/claudacate/Pinseeker_site (branch `main`, already pushed).
- **Build:** command `npm run build`, output `dist/`. Node available locally.
- **Goal:** get the site live on **Cloudflare Pages** (free), then point the site's
  canonical/OG/hreflang/sitemap at the real URL.

## The task
Deploy to Cloudflare Pages. The user could not find the dashboard "Connect to Git"
path (Cloudflare reorganized the nav). Prefer the **Wrangler CLI** route below — it
does not depend on the dashboard UI.

---

## Method A — Wrangler CLI (recommended, reliable)

Run from the website folder:

```bash
cd "/Volumes/external/Xcode projects/Pinseeker related items/pinseeker-website"
npm run build
npx wrangler login                 # opens browser → user authorizes Cloudflare (one time)
npx wrangler pages project create pinseeker-site --production-branch main   # first time only
npx wrangler pages deploy dist --project-name pinseeker-site
```

- Output gives a live URL like `https://pinseeker-site.pages.dev`.
- This is a **direct upload** deploy (no Git auto-deploy). To redeploy after changes:
  `npm run build && npx wrangler pages deploy dist --project-name pinseeker-site`.
- To add **auto-deploy on git push**, connect the repo later in the dashboard
  (Method B) — direct-upload and Git can coexist on the same project.

### If using an API token instead of browser login
User supplies a Cloudflare **API token** (permission: *Account → Cloudflare Pages → Edit*)
and **Account ID** (dashboard → right sidebar, or `npx wrangler whoami`):

```bash
export CLOUDFLARE_API_TOKEN=<token>
export CLOUDFLARE_ACCOUNT_ID=<account_id>
npx wrangler pages deploy dist --project-name pinseeker-site
```
*(Treat the token as a secret.)*

---

## Method B — Dashboard (Git connect, gives auto-deploy)

Cloudflare's new nav (late 2025) — paths vary, try in order:
1. https://dash.cloudflare.com → **select your account** first (you may be on the
   wrong level if the left nav looks sparse).
2. Left sidebar: **Workers & Pages** (may be grouped under **Compute**).
   → **Create** → **Pages** tab → **Connect to Git** (a.k.a. "Import an existing Git repository").
3. Authorize GitHub → pick `claudacate/Pinseeker_site`.
4. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Production branch: `main`
5. **Save and Deploy.** Future `git push` to `main` auto-deploys.

If "Connect to Git" truly isn't present, use Method A — it's equivalent for going live.

---

## After it's live (do this once there's a real URL)

1. Update the site URL in **`astro.config.mjs`** — replace
   `site: 'https://pinseeker.pages.dev'` with the real deployed URL.
2. Update the Sitemap line in **`public/robots.txt`** to the real URL.
3. Commit + push:
   ```bash
   git add -A
   git commit -m "chore: set production site URL"
   git push origin main
   ```
   (If on a custom domain later, repeat with that domain.)

## Still-open content placeholders (not blockers for deploy)
- **App Store URL** — `src/config.ts` `appStoreUrl` (real listing at launch).
- **Social links** — `src/config.ts` `social.youtube` / `social.instagram` (footer
  links auto-hide until set).
- **Local prices** — localized pages show USD + a "local currency" note; swap in
  real ¥/₩/NT$ once App Store price is set.
- Promo films go on YouTube/Instagram (not embedded on the site, by design).
