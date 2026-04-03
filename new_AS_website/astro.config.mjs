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
    studioBasePath: '/admin'
  }), react(), sitemap()],
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('sanity') || id.includes('@sanity')) {
                return 'vendor-sanity';
              }
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              return 'vendor';
            }
          }
        }
      }
    }
  }
});