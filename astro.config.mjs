// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const port = Number(process.env.PORT) || 3001;

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bradweimert.com',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
  server: {
    port,
    host: true,
  },
  devToolbar: {
    enabled: false,
  },
});
