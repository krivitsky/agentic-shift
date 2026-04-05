const express = require('express');
const path = require('path');
const { handleRegistration } = require('./lib/registration');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/register', async (req, res) => {
  const result = await handleRegistration(req.body || {});
  const status = result.ok ? 200 : (result.error === 'server not configured' ? 500 : 400);
  res.status(status).json(result);
});

app.listen(PORT, () => {
  console.log(`Agentic Shift running at http://localhost:${PORT}`);
  if (!process.env.REG_WEBHOOK_URL) {
    console.warn('  [warn] REG_WEBHOOK_URL not set — /api/register will return 500');
  }
});
