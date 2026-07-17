const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Clean routes for sub-pages (before static so dirs aren't auto-redirected
// to a trailing slash).
app.get('/munich', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'munich', 'index.html'));
});

// The manifesto used to live at /new; it's now the homepage.
app.get('/new', (req, res) => res.redirect(301, '/'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Agentic Shift running at http://localhost:${PORT}`);
});
