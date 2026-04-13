// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import sanity from '@sanity/astro';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://autoflow-solutions.com',
  trailingSlash: 'never',
  output: 'server',
  adapter: vercel(),
  integrations: [sanity({
    projectId: '9ujde8sq',
    dataset: 'production',
    useCdn: true,
    studioBasePath: '/admin',
    studioRouterHistory: 'hash'
  }), react(), sitemap()],
  vite: {
    build: {
      chunkSizeWarningLimit: 2000
    }
  }
});