// Shared registration validation + forwarder.
// Used by both the Vercel serverless function (api/register.js) and the
// local Express dev server (server.js) so behavior stays in sync.

const PAYMENT_METHODS = ['card', 'invoice'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data) {
  if (!data || typeof data !== 'object') return 'invalid body';
  for (const f of ['name', 'email', 'payment_method']) {
    if (!data[f] || typeof data[f] !== 'string' || !data[f].trim()) {
      return `missing ${f}`;
    }
  }
  if (!EMAIL_RE.test(data.email)) return 'invalid email';
  if (!PAYMENT_METHODS.includes(data.payment_method)) return 'invalid payment_method';
  return null;
}

async function handleRegistration(body) {
  // Honeypot: bots fill hidden fields. Silently accept without forwarding.
  if (body && body.website) return { ok: true };

  const err = validate(body);
  if (err) return { ok: false, error: err };

  const url = process.env.REG_WEBHOOK_URL;
  if (!url) return { ok: false, error: 'server not configured' };

  const payload = {
    name: body.name.trim(),
    email: body.email.trim(),
    role: (body.role || '').trim(),
    company: (body.company || '').trim(),
    payment_method: body.payment_method,
    linkedin: (body.linkedin || '').trim(),
    comment: (body.comment || '').trim(),
  };

  try {
    // Apps Script 302-redirects POST responses to a googleusercontent.com URL
    // where the JSON body actually lives. fetch follows redirects by default.
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return { ok: false, error: 'upstream_bad_response' };
    }
  } catch (e) {
    return { ok: false, error: 'upstream_error' };
  }
}

module.exports = { handleRegistration, validate, PAYMENT_METHODS };
