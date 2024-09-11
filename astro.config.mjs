import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import react from '@astrojs/react';

const DEV_PORT = 4321;

export default defineConfig({
	output: 'server',
  site: process.env.CI
  ? 'https://www.north-livermore-cares.com'
  : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/' : undefined,

    integrations: [sitemap(), icon(), react()],
});
