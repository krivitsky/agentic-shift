# agentic-shift.com

The website for **agentic-shift.com** — a short manifesto for organizations going through the
agentic shift on their own terms, plus the Agentic Shift Munich meetups. Run by Alexey Krivitsky
and Martin Westphal.

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
- `/` → manifesto homepage (`public/index.html`): "Agentic Shift" hero + three sections — What we stand for · What we refuse to accept · What we shift towards. Links to `/munich`.
- `/v1` (previous manifesto) and `/v12` (a review draft) are **frozen, hand-written archives** — `noindex`, no analytics, out of `sitemap.xml`, not generated. `build.js` never touches them; they are the only manifesto-shaped pages that keep the old markup (`.group-tech`, `.shift .n`, `.group-head`, `.system-note`, `.section-head .tick`), which is why those rules must stay in `public/css/shift.css`.
- `/de/ /nl/ /fr/ /it/ /es/ /pt/ /cs/ /uk/ /ru/ /zh/ /ja/` → translated manifesto pages (11 languages; generated; see §Manifesto i18n). Language switcher at the hero bottom; hreflang + sitemap wired.
- `/munich` → Munich meetups (`public/munich/index.html`): next meetup, Luma calendar embed, organizers, community, past events.
- `/decks/*` → talk slides linked from `/munich` (Martin's PDF, Nikita's HTML deck).

## Design system (`public/css/shift.css`)
- Ink `#05090d`, teal `#3ddc9a`, amber `#e8a33d`; Poppins headings + JetBrains Mono labels; rounded bordered cards; `>`-prefixed mono section labels. `/munich` layers on `public/css/meetups.css`.

## Content & SEO
- **Manifesto copy is edited in `manifesto/content/*.json`, never in the HTML** (see §Manifesto i18n). `en.json` is canonical. The `MANIFESTO`-marked regions are generated: `README.md` gets the **English** manifesto (from `en.json`); `public/llms.txt` gets **all languages** (English first, then every translation, each with the English gloss on shift pairs). Everything *outside* the markers (llms.txt summary/Meetups/Links, README Tech Details) stays hand-written.
- Full `<head>` meta on every page (title, description, OG, Twitter, JSON-LD Organization). **Relative URLs only in the page `<head>`** — no absolute URLs, no `.eu` — **except `hreflang` alternates**, which the spec requires to be absolute (same carve-out as `sitemap.xml`/`robots.txt`). OG images: manifesto pages → `og-shift.png`, `/munich` → `event1-cover.jpg`.
- **Crawler/LLM files** in `public/` (served at site root): `robots.txt`, `sitemap.xml`, `llms.txt`, `ai.txt`, `site.webmanifest`. These use **absolute `https://agentic-shift.com` URLs** (required by their specs — the relative-only rule is `<head>`-meta only). Pages carry `<link rel="alternate" type="text/markdown" href="/llms.txt">` + `<link rel="manifest">`.

## Manifesto i18n
- **Pipeline lives in `manifesto/`:** `content/*.json` (one per language, content only), `template.html` (markup, once), `build.js` (zero-dep Node generator). Languages: en (canonical) · de · nl · fr · it · es · pt · cs · uk · ru · zh · ja.
- **Edit content → `node manifesto/build.js` → generates** `public/index.html`, `public/<lang>/index.html`, `public/<lang>/agentic-shift-<lang>.md` (downloadable per-language Markdown — locale in the filename so mobile Safari saves it right even when it ignores the `download` attr; linked from the language switcher via a Markdown-mark icon + the current lang code in brackets, e.g. `[DE]`), `public/sitemap.xml`, and the `MANIFESTO`-marked regions of `README.md` + `public/llms.txt`. Generated files carry a `GENERATED … do not edit` banner (or `MANIFESTO` markers). **Never hand-edit them** — the next build overwrites.
- **`en.json` is canonical — every change to it propagates to all 11 translations in the same session.** Adding or editing a lede paragraph, shift, Q&A, or meta field on the homepage is **not done** until each `content/<lang>.json` carries it; a partly-translated set means those pages silently serve an older manifesto. `build.js` enforces this: it prints `✗ TRANSLATION DRIFT` naming each language and exactly what it lacks, and **exits 1** (files are still written, so you can iterate). A green run ends with `✓ all 11 translations match en.json` — never commit a red one. (Added 2026-07-30, after the `/community` Q&A ran English-only for weeks.)
- **Page shape (rewritten 2026-08-09):** hero kicker + headline + subtitle, then `standHead` + `stand[]` (4 paragraphs) · `refuseHead` + `refuseIntro` + `refusals[]` (3 `≠` cards, rose) + `refuseOutro` (carries the "Org design, then AI." creed inline) · `shiftHead` + `shiftIntro` + `shifts[]` (3 `→` cards, teal) + `shiftOutro` · `qaHead` + `qa[]` (2). **No groups, no numbers, no `systemNote`** — the cards are a set, not a sequence, because the closing line says which shifts you take on is yours to decide. Every key is top-level in the JSON so the parity check catches a missing one for free; `parityDrift()` also asserts each card has `from`/`to`/`note` and each Q&A has `q`/`a`, so a blank field can't pass as present.
- **Page-scoped CSS lives in `manifesto/template.html`**, not in `shift.css` — that way all 12 pages inherit it. Anything shared with `/munich` or the archives belongs in `shift.css` instead.
- **Brand phrases stay English in every language:** `senior builders & leaders` (as `&amp;` in the JSON) matches the untranslated community banner on all 12 pages. Don't localize it.
- **New/re-done translations get a back-translation pass:** render the language back to literal English and diff against `en.json` before shipping. First-pass drafts reliably flatten precise words — the Czech pass lost *one-off*, *well-engineered*, *mentoring*, *empathize*, *reinvention*, and *acknowledge*. Log native corrections in `manifesto/reviews/<lang>.md`.
- Each translated page shows the localized `from → to` pair with the **canonical English pair beneath it**, sourced from `en.json` at build time (can't drift). English page shows no gloss.
- **Adding a language:** add `content/<lang>.json`, then its entry in `ALL_LANGS`/`OG_LOCALE`/`LANGBAR_LABEL` in `build.js`, and run the build — switcher, hreflang, and sitemap update automatically. A language with no JSON is simply absent (not half-rendered).
- **Language code ≠ URL path.** The filename/`lang` key is the **ISO 639-1 code** and drives `lang=`, `hreflang=`, and the `[XX]` Markdown badge — never a country code there (`hreflang="cz"` is invalid and Google drops the alternate). The **`dir` field is the public path** and is free-form: Czech is `cs` internally but ships at **`/cz/`**, the code people recognise. `build.js` derives the output directory from `dir`, so the two can differ per language.
- **Native-reviewer corrections:** translations are first-pass drafts except where a native has reviewed. Their exact corrections are logged in `manifesto/reviews/<lang>.md` — **re-apply these if a language is ever re-translated**, and record in that file what carried over and what lapsed. So far: `pt` (the `proxies → utilizadores` wording carried into the 2026-08-09 rewrite; the `guardrails` correction lapsed with the shift it belonged to).

## Analytics
- Google Analytics 4, property `G-SJW53LEJGS`, inline gtag.js snippet at the end of `<head>`. Manifesto pages get it from `manifesto/template.html` (so every language inherits it automatically); `public/munich/index.html` and `public/decks/*.html` are standalone and have the snippet pasted in by hand.

## Luma (for /munich)
- Calendar `cal-MbzaaU1GVYLS8TM` — embed `https://luma.com/embed/calendar/cal-MbzaaU1GVYLS8TM/events`.
