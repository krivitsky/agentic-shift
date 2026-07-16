# shift happens — source text

Original text as written by Alexey, verbatim. Captured 2026-07-16.
This is the source of record for `/new` (`public/new/index.html`). The page copy is an
English-polished rendering of this; when the two disagree, **this file wins** — re-derive the page.

Visual direction: [`new-design-idea.md`](./new-design-idea.md) / `new-design-idea.png`.

---

## Original (verbatim, unedited)

> Agentic Shift motivates creation of radically new product engineering organizations. though not every leader has yet grasped the level of the change. though the ones who did are embarking on a completely new journey. and the gap between the best and rest is only growing daily.
>
> to motivate broader adoption of the novel emergent ideas and to keep the bar high enough to fight common mediocrity and fake change, we are establishing a definition of a "Professional Agentic Product Engineering Organizations" with the following unique capabilities:
>
> 1. product engineers shift from working on routine tasks and features to operating systems that solve those
> 2. product engineers shift from being shadowed by proxies (i.e. managers) to working in zero proximity with the customers and users
> 3. product engineers shift from controlling quality with inspection to ensuring quality in with guardrails built into the system
> 4. product engineers shift from being treated as narrow single-skill experts to complete craftsmen broadening and deepening as work demands
> 5. product engineers shift from being measured by output to managing outcomes themselves through loops of exploration, delivery, observability and adaptation

---

## Simplified draft (verbatim, as written by Alexey)

Second authored version — the single-word contrast pairs, before the discussion edits
(item 2 `managers → users`, item 4 one-liner, etc.). Kept as-written for the record; the
**Page copy** section below is what actually shipped and where the edits are logged.

> Simplified to single-word/short-phrase contrasts (more slide-punchy), plus a one-line explanation each:
> 1. FROM features TO systems
> Engineers stop shipping individual features and start building the specs, agents, and guardrails that generate them — the factory, not the widget.
> 2. FROM managers TO users
> The coordination layer between engineer and customer disappears — direct contact replaces relayed requirements.
> 3. FROM inspection TO guardrails
> Quality gets built into the pipeline (specs, evals, automated checks) instead of caught by reading every line after the fact.
> 4. FROM specialists TO craftspeople
> Work reclaims the breadth narrow roles stripped away — depth where it's needed, range everywhere else.
> 5. FROM output TO outcomes
> Engineers own the full loop — explore, ship, observe, adapt — and answer for the result, not the ticket count.

---

## Page copy — the condensed rewrite (current)

The five capabilities were **rewritten from prose into single-word contrast pairs** for the
hero/manifesto layout: a `from → to` pair per shift plus one explaining line. The prose sentences
above are the source intent; the pairs below are what's live on `/new`. Lead-in on the page:
**"product engineers shift:"**.

Card order is a **deliberate inside-out arc** (craft → self → world), not the original manifesto
sequence. See "Card order" below.

| # | pair | one-liner | derived from original item |
|---|---|---|---|
| 1 | features → systems | Product engineers stop shipping individual features and shift to designing agentic systems that turn intent into working, tested solutions. | orig #1 — "routine tasks and features" → "operating systems that solve those" |
| 2 | control → assurance | Product engineers stop inspecting for defects and shift to building quality into the system through well-engineered agentic harnesses. | orig #3 — "controlling quality with inspection" → "guardrails built into the system" |
| 3 | specialists → craftspeople | Product engineers shift from narrow, assembly-line specialists to end-to-end craftspeople — broadening and deepening as the work demands, with AI both filling the specialist gaps in real time and mentoring them into new skills along the way. | orig #4 — "narrow single-skill experts" → "complete craftspeople" |
| 4 | proxies → users | No more telephone game through manager-proxies, no more sitting in the basement — product engineers shift to zero distance with the customers and users, to empathize, analyze, and synthesize firsthand. | orig #2 — "shadowed by proxies (i.e. managers)" → "zero proximity with the customers" |
| 5 | output → outcomes | Product engineers shift from being measured by output to owning and driving outcomes themselves — sensing drift and adjusting course in a continuous pulse. | orig #5 — "measured by output" → "managing outcomes through loops" |

### Card order

Reordered from the original manifesto sequence (1·features 2·proxies 3·control 4·specialists
5·output) to an **inside-out arc**: what you build (1) → how you assure it (2) → who you become
(3) → who you serve (4) → what you own (5). Rationale: keeps the two technical-craft shifts
together up front, uses the identity shift (3, end-to-end craftspeople) as the hinge that enables
the two outward shifts, and lands on outcomes as the closer. Openers/closer (features, outcomes)
are unchanged from the original.

### Decisions folded in

- **"zero distance" (item 2) — resolved.** Went through "zero proximity" (reads backwards) →
  Alexey settled on **"zero distance"**, which says the intended thing (engineers *close to*
  customers). Pair stays `proxies → users`.
- **item 3 pair changed** from `inspection → guardrails` to **`control → assurance`** — reframes
  the axis as controlling-quality-in vs. assuring-it-in. One-liner keeps "building quality into
  the system," now via "well-engineered agentic harnesses."
- **item 2 pair** was going to be `managers → users`, changed to **`proxies → users`** — the shift
  is proxied vs. direct contact (same axis), not "swap managers for users." The one-liner names
  managers so "proxies" is decoded.
- **build quality in** (item 3) kept from the earlier polish — `build quality in` is the
  established term; "ensuring quality in" was not idiomatic.
- **craftspeople** (item 4) — gender-neutral, kept from earlier polish.

### The intro paragraphs (rewritten by Alexey — current)

The two lead paragraphs were replaced with a punchier, present-tense version:

> The industry-wide shift toward **agentic product engineering** _(teal)_ is producing radically
> new organizations. Most leaders haven't yet grasped how deep this goes. The ones who have are
> already ahead of the curve. And _the gap between the best and the rest widens every day._
> _(white em)_
>
> To help these ideas spread, and to set a bar high enough to tell real change from
> **mediocrity and marketing** _(amber)_, we're defining the **Professional Agentic Product
> Engineering Organization** _(teal, singular)_ as noticeable org-design shifts in how its product
> engineers work.

- Verbatim from Alexey's final paste (an earlier paste was truncated; this is the complete text).
- Colour accents: teal on "agentic product engineering" and the org name, white `em` on the closing
  line, amber on "mediocrity and marketing".
- **Singular/plural:** the intro says "the ... Organization" (singular); the section heading says
  "... Organizations:" (plural). Both as written by Alexey — flagged in case it should match.

### Section heading

Changed from `product engineers shift:` to **`Professional Agentic Product Engineering
Organizations:`** (mono, enlarged, teal colon, trailing rule). The intro's last line ("…org-design
shifts in how its product engineers work") now leads into it, and the five shift cards follow.

## Hero copy

- Headline `Agentic Shift` (glitch on "Shift").
- Subtitle: **`agentic product engineering`** (renamed from "defining professional agentic product
  engineering organizations", which itself replaced "Product Engineering / in the AI Age").
- Footnote (bottom-left, small mono, leading `*`): **"it is perhaps too early to write manifestos,
  as the ground is still shifting — but we'd like to acknowledge the strong changes we're already
  observing throughout the industry."** English-polished from Alexey's draft (typos:
  chnages/throught/indusrtry).
- **Eyebrow removed.** The "a manifesto*" label is gone; the footnote stays (its leading `*` is now
  decorative, no longer keyed to an eyebrow marker).
- **CTA buttons removed.** The Learn / Share / Co-Create trio (Co-Create → Luma) is gone; the
  footer still links to meetups.
- Section heading: see "Section heading" under the intro paragraphs below.

## Visuals of note

- **Dot-field** (top-right of hero): the rising dot motif from the CTO-book cover
  (`cover-dark-green.svg`), recoloured to the page palette. Grid-locked — dot pitch = the hero's
  68px grid, rendered at 2× so every dot lands on a grid intersection. Each live dot blinks by
  growing/fading around its own centre. Fixed 612px at `left:748px`; hidden below 1360px viewport.
- **Body dot-texture**: a faint 34px dot-grid echo carries the motif down through the manifesto so
  the page doesn't drop into flat black below the hero.

## Naming

The file name **shift-happens** is an internal label, not a phrase used on the page — change freely.
