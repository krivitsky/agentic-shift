# agentic-shift.com

The website for **agentic-shift.com** — a short manifesto for professional agentic product
engineering, plus the Agentic Shift Munich meetups. Run by Alexey Krivitsky and Martin Westphal.

- Production: https://agentic-shift.com/
- GitHub: git@github.com:krivitsky/agentic-shift.git (branch: `main`, public repo)

## Workflow
- Always create a task list (TaskCreate) for any multi-step request and follow it — mark in_progress when starting, completed when done.

## Stack
- Plain static site: HTML + CSS in `public/`, **no dependencies, no deploy-time build** — no `package.json`, nothing to install.
- Production serves `public/` statically (`vercel.json`); Vercel resolves clean URLs (`/munich`) natively. Local dev: `npx serve public` → http://localhost:3000. Keep it dependency-free — a local server that adds routes Vercel doesn't have creates dev/prod drift (that's how a `/new` redirect lived in dev while prod 404'd for months).
- **The manifesto pages are generated** (zero-dep Node generator) — see §Manifesto i18n. Generated HTML is committed, so the *deploy* still runs no build; the generator is only for editing content.

## Deploy
- Vercel, auto-deploys on push to `main`. Commit + push only when asked.
- **When the user says "commit"/"push": commit, push, then run the full deploy check below and report it.** Don't stop at the first status line — report **all** statuses and check-runs, then confirm the change is actually live.
  1. **Poll combined status** until terminal (`pending` → `success`/`failure`/`error`):
     `gh api repos/krivitsky/agentic-shift/commits/<sha>/status --jq '.state, (.statuses[] | "  \(.state)  \(.context)  \(.target_url)")'`
     Report the combined `state` **and every** status context (there's usually one, `Vercel`, but list all — a second context can be red while the first is green).
  2. **List check-runs** (GitHub Actions, if any):
     `gh api repos/krivitsky/agentic-shift/commits/<sha>/check-runs --jq '.check_runs[] | "  \(.name): \(.status)/\(.conclusion)"'`
     Empty output = no Actions configured (currently the case) — say so rather than silently skipping.
  3. **Verify live, don't trust green.** Vercel `success` means the build finished, not that the CDN serves it. `curl` the affected public URL(s) and confirm a `200` **and** an expected content marker (e.g. the new string/CSS value). Only after that is the deploy "done".
- Report the final combined state, each status/check line, the Vercel `target_url`, and the live-verify result.

## Routes
- `/` → manifesto homepage (`public/index.html`): "Agentic Shift" hero + five org-design shifts. Links to `/munich`.
- `/de/ /fr/ /es/ /pt/ /uk/ /zh/ /ja/` → translated manifesto pages (generated; see §Manifesto i18n). Language switcher at the hero bottom-left; hreflang + sitemap wired.
- `/munich` → Munich meetups (`public/munich/index.html`): next meetup, Luma calendar embed, organizers, community, past events.
- `/decks/*` → talk slides linked from `/munich` (Martin's PDF, Nikita's HTML deck).

## Design system (`public/css/shift.css`)
- Ink `#05090d`, teal `#3ddc9a`, amber `#e8a33d`; Poppins headings + JetBrains Mono labels; rounded bordered cards; `>`-prefixed mono section labels. `/munich` layers on `public/css/meetups.css`.

## Content & SEO
- **Manifesto copy is edited in `manifesto/content/*.json`, never in the HTML** (see §Manifesto i18n). `en.json` is canonical. The manifesto sections of `README.md` and `public/llms.txt` are **generated from `en.json`** between `<!-- MANIFESTO:START -->` / `END` markers — so the English copy has one source. Everything *outside* those markers (llms.txt summary/Meetups/Links, README Tech Details) stays hand-written.
- Full `<head>` meta on every page (title, description, OG, Twitter, JSON-LD Organization). **Relative URLs only in the page `<head>`** — no absolute URLs, no `.eu` — **except `hreflang` alternates**, which the spec requires to be absolute (same carve-out as `sitemap.xml`/`robots.txt`). OG images: manifesto pages → `og-shift.png`, `/munich` → `event1-cover.jpg`.
- **Crawler/LLM files** in `public/` (served at site root): `robots.txt`, `sitemap.xml`, `llms.txt`, `ai.txt`, `site.webmanifest`. These use **absolute `https://agentic-shift.com` URLs** (required by their specs — the relative-only rule is `<head>`-meta only). Pages carry `<link rel="alternate" type="text/markdown" href="/llms.txt">` + `<link rel="manifest">`.

## Manifesto i18n
- **Pipeline lives in `manifesto/`:** `content/*.json` (one per language, content only), `template.html` (markup, once), `build.js` (zero-dep Node generator). Languages: en (canonical) · de · fr · es · pt · uk · zh · ja.
- **Edit content → `node manifesto/build.js` → generates** `public/index.html`, `public/<lang>/index.html`, `public/<lang>/manifesto.md` (downloadable per-language Markdown, linked from the language switcher via a Markdown-mark icon + the current lang code in brackets, e.g. `[DE]`), `public/sitemap.xml`, and the `MANIFESTO`-marked regions of `README.md` + `public/llms.txt`. Generated files carry a `GENERATED … do not edit` banner (or `MANIFESTO` markers). **Never hand-edit them** — the next build overwrites.
- Each translated page shows the localized `from → to` pair with the **canonical English pair beneath it**, sourced from `en.json` at build time (can't drift). English page shows no gloss.
- **Adding a language:** add `content/<lang>.json`, then its entry in `LANGS`/`OG_LOCALE`/`LANGBAR_LABEL` in `build.js`, and run the build — switcher, hreflang, and sitemap update automatically. A language with no JSON is simply absent (not half-rendered).

## Analytics
- Google Analytics 4, property `G-SJW53LEJGS`, inline gtag.js snippet at the end of `<head>`. Manifesto pages get it from `manifesto/template.html` (so every language inherits it automatically); `public/munich/index.html` and `public/decks/*.html` are standalone and have the snippet pasted in by hand.

## Luma (for /munich)
- Calendar `cal-MbzaaU1GVYLS8TM` — embed `https://luma.com/embed/calendar/cal-MbzaaU1GVYLS8TM/events`.
