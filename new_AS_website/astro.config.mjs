// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import sanity from '@sanity/astro';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [sanity({
    projectId: '9ujde8sq',
    dataset: 'production',
    useCdn: false,
    studioBasePath: '/admin'
  }), react()],
});