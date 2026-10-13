// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://artemk.dev',
  image: {
    // Remote hosts Astro is allowed to optimize images from
    domains: ['avatars.githubusercontent.com', 'picsum.photos', 'fastly.picsum.photos'],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});