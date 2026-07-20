<p align="center">
  <img src="public/images/agentic-shift-banner.png" alt="Agentic Shift — towards professional agentic product engineering" width="900">
</p>

# Agentic Shift

<!-- MANIFESTO:START -->

> _Generated from [`manifesto/content/en.json`](manifesto/content/en.json) — edit the JSON (and its siblings for other languages), then run `node manifesto/build.js`. Do not edit this section by hand._

The industry-wide shift toward **agentic product engineering** is producing radically new organizations. Most leaders haven't yet grasped how deep this goes. The ones who have are already ahead of the curve. And *the gap between the best and the rest widens every day.*

To help these ideas spread, and to set a bar high enough to tell real change from *mediocrity and marketing*, we're defining the **professional agentic product engineering** as a set of noticeable org-design shifts in how product engineering work gets done.

## The shifts towards professional agentic product engineering at org-level

### 1. features → systems
Product engineers stop shipping one-off features and shift to building agentic systems — self-improving loops that turn intent into working solutions.

### 2. gatekeeping → guardrails
Product engineers stop inspecting for quality issues and shift to building quality into the system through well-engineered agentic harnesses.

### 3. specialists → craftspeople
Product engineers shift from narrow, assembly-line specialists to end-to-end craftspeople — with AI filling the specialist gaps in real time and mentoring the product engineers into new domains and skills.

### 4. proxies → users
No more telephone game through manager-proxies, no more sitting in the basement — product engineers shift to zero distance with the customers and users, to empathize, analyze, and synthesize firsthand.

### 5. output → outcomes
Product engineers shift from being measured by output to owning and driving outcomes themselves — sensing drift and correcting course continuously.

**The first two shifts cover the technical aspects** — they draw on the conclusions of the [Agentic Engineer's Field Guide](https://agentic-engineering.guide/).

**The other three shifts create the structural conditions** that put that technology to work and amplify its impact — they draw on the org-design of [10X ORG](https://10xorg.com/).

**Technical and structural shifts form one system**: they enable and reinforce one another, and cannot be managed in isolation.

## What's Next?

> **Towards a new manifesto?**

It is perhaps *too early to write manifestos*, as the ground is still shifting — but we'd like to acknowledge the strong changes we're already observing throughout the industry, most visible among the frontrunners.

> **What does it mean for org leaders?**

While coding is now being automated and routinized, the craft of product engineering is undergoing a major reinvention — one made possible only by distinctly human traits: **the drive for perfection**, **unlimited creativity**, and **rich co-creation**. The task of every organization and every leader is to design environments that **elevate human intelligence** to these new heights.

> **Want to contribute?**

[Propose improvements](https://github.com/krivitsky/agentic-shift). Share this page. Put these ideas to work in your organization.

<!-- MANIFESTO:END -->

Live at **[agentic-shift.com](https://agentic-shift.com)**.

---

## Tech Details

The website for agentic-shift.com — the manifesto above, and the Agentic Shift Munich meetups.

### Pages
- **`/`** — the manifesto (English). Also in
  [German](https://agentic-shift.com/de/), [French](https://agentic-shift.com/fr/),
  [Spanish](https://agentic-shift.com/es/), [Portuguese](https://agentic-shift.com/pt/),
  [Ukrainian](https://agentic-shift.com/uk/), [Chinese](https://agentic-shift.com/zh/), and
  [Japanese](https://agentic-shift.com/ja/) — one directory each under `public/`.
- **`/munich`** — the Munich meetups: next event, Luma calendar, organizers, community, past
  events (`public/munich/index.html`).

### Stack
- Plain static site — HTML + CSS in `public/`, **no dependencies, no deploy-time build**.
- Production serves `public/` statically via Vercel (`vercel.json`), which resolves clean URLs
  like `/munich` on its own.
- The manifesto pages (`public/index.html` + `public/<lang>/index.html`) are **generated** — see
  [Editing the manifesto](#editing-the-manifesto). The generated HTML is committed, so the deploy
  itself still runs no build.

### Run locally

```bash
npx serve public      # → http://localhost:3000
```

### Deploy
Auto-deploys to [Vercel](https://vercel.com) on push to `main`.

### Design system
All manifesto pages share `public/css/shift.css` — ink `#05090d`, teal `#3ddc9a`, amber `#e8a33d`,
Poppins headings + JetBrains Mono labels. `/munich` layers on `public/css/meetups.css`.

### Editing the manifesto
The manifesto text is **not** edited in the HTML — the pages are generated from content files:

- Copy per language: [`manifesto/content/en.json`](manifesto/content/en.json) (canonical),
  [`de`](manifesto/content/de.json), [`fr`](manifesto/content/fr.json),
  [`es`](manifesto/content/es.json), [`pt`](manifesto/content/pt.json),
  [`uk`](manifesto/content/uk.json), [`zh`](manifesto/content/zh.json),
  [`ja`](manifesto/content/ja.json).
- Markup, once: [`manifesto/template.html`](manifesto/template.html).
- Generator (zero-dep, plain Node): [`manifesto/build.js`](manifesto/build.js).

To change wording or fix a translation, edit the relevant `content/*.json`, then regenerate:

```bash
node manifesto/build.js
```

The build regenerates every language page plus `public/sitemap.xml`, and the manifesto sections of
this README and `public/llms.txt` (all between `MANIFESTO` markers) — so the English copy has a
single source: `en.json`.

**Adding a language:** drop a new `content/<lang>.json` (copy `en.json`, translate the values),
add the locale to `LANGS` / `OG_LOCALE` / `LANGBAR_LABEL` in `build.js`, and run it — the switcher,
`hreflang`, and sitemap update automatically. The English `from → to` term pairs render beneath each
translated pair — don't restate them. Never hand-edit generated files (they carry a `GENERATED`
banner or `MANIFESTO` markers).

### Contributing
Open an issue or a pull request. Translations especially welcome — edit the content files above, not
the HTML. This site is meant to spread: **share it, propose improvements, and put the ideas to work
in your own organization.**
