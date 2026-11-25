import { defineConfig } from 'astro/config';

// Set SITE_URL (for example https://example.com) once the production domain is known.
// It switches on canonical URLs and absolute Open Graph image URLs.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  output: 'static',
  compressHTML: true,
});
