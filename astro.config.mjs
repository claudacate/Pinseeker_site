// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// `site` is a placeholder until a custom domain is bought; used for canonical
// URLs, Open Graph absolute paths, and the sitemap. Update when the domain is live.
export default defineConfig({
  site: 'https://pinseeker-site.pages.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'zh-tw', 'ja'],
    routing: {
      prefixDefaultLocale: false, // English at root; others at /ko, /zh-tw, /ja
    },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', ko: 'ko', 'zh-tw': 'zh-Hant', ja: 'ja' } } })],
});
