// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://happystarhotelnhatrang.com',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en', 'ko', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'vi',
        locales: { vi: 'vi-VN', en: 'en', ko: 'ko-KR', ru: 'ru-RU' },
      },
    }),
  ],
});
