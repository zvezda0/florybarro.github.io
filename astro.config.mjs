
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  site: 'https://zvezda0.github.io',
  base: '/',
  prefetch: { defaultStrategy: 'viewport' },
  vite: { plugins: [tailwindcss()] },
  image: { remotePatterns: [{ protocol: 'https' }] },
});

