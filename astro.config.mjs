import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
 const DEV_PORT = 4321;
// https://astro.build/config
export default defineConfig({
  site: process.env.CI
  ? 'https://www.north-livermore-cares.com'
  : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/' : undefined,

	integrations: [
		//
		sitemap(),
		// tailwind(),
	],
});
