// Vercel serverless function: POST /api/register
// Forwards validated registration payloads to the Google Apps Script webhook
// whose URL lives in the REG_WEBHOOK_URL env var.

const { handleRegistration } = require('../lib/registration');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method not allowed' });
  }

  // Vercel parses JSON bodies automatically when Content-Type is application/json,
  // but fall back to manual parsing just in case.
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }

  try {
    const result = await handleRegistration(body || {});
    const status = result.ok ? 200 : (result.error === 'server not configured' ? 500 : 400);
    return res.status(status).json(result);
  } catch (err) {
    console.error('[/api/register] unhandled:', err);
    return res.status(500).json({ ok: false, error: 'server_error' });
  }
};
