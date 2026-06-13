import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yrzheng0419.github.io',
  base: '/cibi_test',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets',
  },
});
