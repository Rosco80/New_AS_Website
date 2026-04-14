import type { APIRoute } from 'astro';
import { sanityClient } from "sanity:client";

export const GET: APIRoute = async () => {
  const posts = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt }`
  ).catch(() => []);

  const urls = posts.map((post: { slug: string; publishedAt?: string }) => {
    const lastmod = post.publishedAt
      ? new Date(post.publishedAt).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0];
    return `  <url>
    <loc>https://autoflow-solutions.com/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
