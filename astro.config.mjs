import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import react from '@astrojs/react';

import node from '@astrojs/node';

const DEV_PORT = 4321;

export default defineConfig({
	site: process.env.CI
	? 'https://www.north-livermore-cares.com'
	: `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/' : undefined,
  integrations: [sitemap(), icon(), react()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
	experimental: {
    reactChildren: true,
  },
});
