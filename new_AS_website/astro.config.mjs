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
  output: 'static',
  adapter: vercel(),
  integrations: [sanity({
    projectId: '9ujde8sq',
    dataset: 'production',
    useCdn: false,
    studioBasePath: '/admin',
    studioRouterHistory: 'hash'
  }), react(), sitemap()],
  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('sanity') || id.includes('@sanity')) {
                return 'vendor-sanity';
              }
              // Keep other things (including React) together to avoid circular dependencies
              return 'vendor';
            }
          }
        }
      }
    }
  }
});