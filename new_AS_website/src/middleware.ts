import { defineMiddleware } from "astro:middleware";

const BOT_REGEX = /bot|crawl|spider|googlebot|bingbot|baiduspider|yandex|duckduck|slurp|facebookexternalhit/i;

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, redirect } = context;
  const pathname = url.pathname;

  // Ignore static assets, internal Astro files, API routes, and Sanity Studio admin
  if (
    pathname.startsWith('/_astro') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/self-audit') ||
    pathname.includes('.')
  ) {
    return next();
  }

  // If already on a localized route, proceed normally
  if (pathname.startsWith('/my') || pathname.startsWith('/ms') || pathname.startsWith('/uk')) {
    return next();
  }

  // Never redirect search engine bots (preserves SEO indexing)
  const userAgent = request.headers.get('user-agent') || '';
  if (BOT_REGEX.test(userAgent)) {
    return next();
  }

  // Respect user preference if they explicitly chose the international / global version
  const cookieHeader = request.headers.get('cookie') || '';
  if (cookieHeader.includes('preferred_locale=global')) {
    return next();
  }

  // If visitor arrives with an explicit ?locale=global query, honor it
  if (url.searchParams.get('locale') === 'global') {
    return next();
  }

  // Determine country: Primary from Vercel edge IP header, fallback to browser Accept-Language
  let country = (request.headers.get('x-vercel-ip-country') || '').toUpperCase();
  if (!country) {
    const acceptLang = request.headers.get('accept-language') || '';
    if (/-MY\b/i.test(acceptLang) || /\bms\b/i.test(acceptLang)) {
      country = 'MY';
    } else if (/-GB\b/i.test(acceptLang)) {
      country = 'GB';
    }
  }

  if (country === 'MY') {
    const target = pathname === '/' || pathname === '' ? '/my' : `/my${pathname}`;
    return redirect(target, 302);
  }

  if (country === 'GB') {
    const target = pathname === '/' || pathname === '' ? '/uk' : `/uk${pathname}`;
    return redirect(target, 302);
  }

  // All other countries stay on the default global (USD) version
  return next();
});
