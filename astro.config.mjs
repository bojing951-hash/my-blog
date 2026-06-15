// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES_URL || 'https://example.com',
  vite: {
    plugins: [tailwindcss({ config: './tailwind.config.js' })]
  }
});