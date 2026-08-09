# Manifesto v2 — copy for the hidden `/v2` page

**Draft for review.** `/v2` is `noindex`, absent from `sitemap.xml` and `llms.txt`.
**No translation file has been touched and `build.js` has not been run.** The live
manifesto and `/v12` are both untouched.

Source: Alexey's own rewrite — Google Doc *"manifesto"*, exported 2026-08-09 11:20.
Structure agreed the same morning: **Where we stand → What we refuse → What we shift.**

---

## What changed from his doc, and nothing else

Every stylistic choice is his. The only departures are unambiguous grammar repairs:

| His text | On the page | Why |
|---|---|---|
| "What we know, though, it is not about tooling" | "What we know, though, **is that it is** not about tooling" | Sentence had no main verb. |
| "in the way it is build" | "in the way it **was built**" | |
| "in the way it is aspired by" | "in **what it aspires to**" | Not English as written. |
| "it is a invariant" | "it is **an** invariant" | Article. *invariant* itself kept — his choice, twice deliberate. |
| "a strategical organizational capability" | "a **strategic** organizational capability" | |
| "dependence on AI-vendors, their models and tooling as progress" | "dependence on AI vendors, their models and tooling**,** as progress" | The comma stops "tooling as progress" reading as one phrase. |
| "changing how we think about the work and workers" | "the work and **the** workers" | Parallel article. |

**Left alone on purpose**, both flagged and both his call:

- **"FOMO is their fastest lever."** He questioned *fastest* himself; the suggestion was
  to drop the comparative — *"FOMO is the lever they pull"* — since a comparative invites
  "faster than what?" and implies the other levers nearly work too. He did not take it, so
  his wording stands. One-word swap whenever he wants it.
- **"Product engineering organizations may decide to amplify these shifts…"** — hedges twice
  in the sentence that hinges into the shifts, right after a page of *we claim / we act*.
  Direct version available: *"So we amplify three shifts in our product engineering
  organizations, and we use AI as a lever to get there."*

## Structure

| Section | Content |
|---|---|
| Hero | *Agentic Shift* — subtitle is his: "From tokenmaxxing and other nonsense towards healthy organizations with great products and services." |
| **Where we stand** | Four paragraphs: the shift is real · not tooling or tokens · everyone optimizes for something, the labs optimize for adoption · we run our organizations, so the shift happens on our terms. |
| **What we refuse** | "By practicing critical thinking, we claim:" + three `≠` cards, rose, same card grammar as the shifts, each keeping its full sentence. Then the fad line, then **"Org design, then AI."** as a standalone creed, then the act-strategically paragraph. |
| **What we shift** | Three organizational shifts, teal: specialists → craftspeople · proxies → users · output → outcomes. |
| Foot of the shifts | One line handing the technical craft to the Agentic Product Engineering Guide — see below. |
| What's Next? / Q&A / footer | Verbatim from live. |

## The technical shifts are gone — and the bill is paid in one line

`features → systems` and `gatekeeping → guardrails` are not on this page. Two reasons this
is right: they sit at the wrong altitude for a document whose spine is *"Org design, then
AI"*, and they were the part of the old manifesto the frontier labs would happily co-sign,
i.e. the part nobody could disagree with — the exact defect this rewrite set out to fix.

But they were also the only thing on the front page addressed to engineers, and they carried
the sole link to the PAPE guide, while `/munich` runs a meetup series for those same people.
So the foot of *What we shift* now reads:

> The engineering craft these shifts depend on is its own body of work — see the
> [Agentic Product Engineering Guide](https://agentic-engineering.guide/).

Altitude stays clean, the guide link survives, engineers still have a door.

## "Org design, then AI."

Given its own line, sized between body copy and a section head (`.lede.creed`, page-scoped).
Deliberately **not** a heading: headings on this page are navigation, and this is a sentence
meant to be quotable. It is the strongest line in the document and the only slogan in it.

## On "tokenmaxxing" — objection withdrawn

It was argued against here as in-group slang that a CTO would not parse. **That was wrong,
and Alexey was right to push back.** By August 2026 *tokenmaxxing* is an established term
with mainstream business coverage — [Inc.](https://www.inc.com/ben-sherry/what-is-tokenmaxxing-ai-productivity-hack/91328999),
[Trending Topics](https://www.trendingtopics.eu/tokenmaxxing-is-ai-token-consumption-a-productivity-metric-or-vanity-trap/),
and glossary entries — attached to a concrete episode leaders lived through: Meta's
*Claudeonomics* and Amazon's *Kirorank* leaderboards ranked staff by tokens burned and were
pulled around mid-2026 when the incentive backfired.

That makes the subtitle stronger than the alternatives offered, not weaker:

- The term is **already pejorative in mainstream usage** — the whole controversy is that
  token volume is not productivity. The subtitle borrows a verdict the business press has
  already reached rather than picking a fight.
- It **names the concrete instance of the third refusal**. `output volume ≠ capability` is
  abstract; *tokenmaxxing* is the leaderboard that got switched off.

Subtitle stands as his.

## Cost if this is ever applied to the live site

`en.json` is canonical and **every string here is rewritten, not added**. All 11 translations
need a full pass plus the back-translation check, and the native-reviewed Portuguese
corrections must be re-applied by hand — the `proxies → users` note survives in edited form,
so that review is partly stale. `build.js` prints `✗ TRANSLATION DRIFT` and exits 1 until
every language is done. Two shifts also disappear from every language.
