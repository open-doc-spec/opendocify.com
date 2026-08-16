import type { APIRoute } from 'astro';

const SITE_URL = 'https://opendocify.com';
const pages = ['/', '/features', '/examples', '/pricing', '/download', '/changelog', '/privacy', '/docs', '/docs/quickstart', '/docs/adoption', '/docs/tooling', '/docs/profiles', '/docs/advanced', '/spec', '/spec/ods/intro', '/spec/ods/keys', '/spec/ods/core', '/spec/ods/profiles', '/spec/ods/graph', '/spec/ods/context', '/spec/ods/indexes', '/spec/ods/assets', '/spec/ods/validation', '/spec/ods/scope', '/spec/ods/glossary', '/spec/okf/intro', '/spec/okf/keys', '/spec/skills/intro', '/spec/skills/keys'];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = pages.map((url) => `  <url><loc>${SITE_URL}${url}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
