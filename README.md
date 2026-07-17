# Agentic Shift

The website for **[agentic-shift.com](https://agentic-shift.com)** — a short manifesto for
_professional agentic product engineering_, and the home of the **Agentic Shift Munich** meetups.

Run by [Alexey Krivitsky](https://www.linkedin.com/in/alexeykrivitsky/) and
[Martin Westphal](https://www.linkedin.com/in/ade-anima/).

## Pages

- **`/`** — the manifesto: the _Agentic Shift_ and five org-design shifts in how product
  engineering work gets done (`public/index.html`).
- **`/munich`** — the Munich meetups: next event, Luma calendar, organizers, community, and
  past events (`public/munich/index.html`).

## Stack

- Plain static site — HTML + CSS in `public/`, **no build step**.
- `server.js` (Node + Express) is a small **local dev** server that adds clean routes
  (`/munich`, and a `/new` → `/` redirect). In production the `public/` folder is served
  statically (see `vercel.json`).

## Run locally

```bash
npm install
node server.js        # → http://localhost:3000
```

(You can also just open `public/index.html` directly in a browser.)

## Deploy

Auto-deploys to [Vercel](https://vercel.com) on push to `main` (serves `public/` statically).

## Design system

Both pages share `public/css/shift.css` — ink `#05090d`, teal `#3ddc9a`, amber `#e8a33d`,
Poppins headings + JetBrains Mono labels. `/munich` layers on `public/css/meetups.css`.

## Contributing

Ideas and fixes are welcome — open an issue or a pull request. This site is meant to spread:
**share it, propose improvements, and put the ideas to work in your own organization.**
