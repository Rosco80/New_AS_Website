import type { APIRoute } from 'astro';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  const webhookUrl = import.meta.env.N8N_NEWSLETTER_WEBHOOK_URL || process.env.N8N_NEWSLETTER_WEBHOOK_URL;

  if (!webhookUrl) {
    return Response.json({ error: 'N8N_NEWSLETTER_WEBHOOK_URL is not configured.' }, { status: 503 });
  }

  let payload: {
    email?: string;
    source_page?: string;
    locale?: string;
    submitted_at?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const email = payload.email?.trim().toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return Response.json({ error: 'A valid email address is required.' }, { status: 400 });
  }

  const newsletterPayload = {
    email,
    source_page: payload.source_page || '/',
    locale: payload.locale || 'en',
    submitted_at: payload.submitted_at || new Date().toISOString()
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newsletterPayload)
  });

  if (!response.ok) {
    return Response.json({ error: 'Newsletter webhook rejected the submission.' }, { status: 502 });
  }

  return Response.json({ ok: true });
};
