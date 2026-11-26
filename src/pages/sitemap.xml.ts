import type { APIRoute } from 'astro';
import { navLinks } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  // Trailing slashes match the canonical URL of each page.
  const urls = navLinks.map((l) => `  <url><loc>${new URL(l.href.replace(/\/?$/, '/'), site).href}</loc></url>`);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
