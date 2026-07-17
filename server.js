const express = require('express');
const path = require('path');
const { handleRegistration } = require('./lib/registration');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Clean routes for sub-pages (before static so dirs aren't auto-redirected
// to a trailing slash).
app.get('/munich', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'munich', 'index.html'));
});

// The manifesto used to live at /new; it's now the homepage.
app.get('/new', (req, res) => res.redirect(301, '/'));

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/register', async (req, res) => {
  try {
    const result = await handleRegistration(req.body || {});
    const status = result.ok ? 200 : (result.error === 'server not configured' ? 500 : 400);
    res.status(status).json(result);
  } catch (err) {
    console.error('[/api/register] unhandled:', err);
    res.status(500).json({ ok: false, error: 'server_error' });
  }
});

app.listen(PORT, () => {
  console.log(`Agentic Shift running at http://localhost:${PORT}`);
  if (!process.env.REG_WEBHOOK_URL) {
    console.warn('  [warn] REG_WEBHOOK_URL not set — /api/register will return 500');
  }
});
