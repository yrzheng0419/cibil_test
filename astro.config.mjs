import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yrzheng0419.github.io',   // ← 加這行
  base: '/cibi_test',                     // ← 如果 repo 名稱不是根路徑才需要
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: '_assets',
  },
});