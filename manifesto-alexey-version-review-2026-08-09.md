# Review — Alexey's manifesto rewrite (2026-08-09)

Source: [Google Doc](https://docs.google.com/document/d/1wNPJmK0w4O3XaXZy5gYn0QsfUfnSrkxyYCDxNivnl4Y/edit), ~430 words.

> **Doc damage, mine, 2026-08-09 09:16.** Asked to append "and services" to the subtitle, I used `gog docs insert --index`. `--dry-run` on that command is **not** a dry run — it performed the insert and reported it identically to a real run. The real run then inserted a second copy, on top of the edit Alexey had already made himself. The subtitle read "…great products and services and services and services." `gog docs` has no delete or replace, and he was editing the document live, so writing to it again would have clobbered his in-flight changes. Left for him to delete. **Never use `gog docs insert` on a document that matters — its `--dry-run` writes.**
Nothing applied. `/v12` and the live manifesto are untouched.

---

## Verdict on his four claims

| His claim | Holds? |
|---|---|
| It is opinionated | **Yes.** "Org design, then AI" is a position someone can lose an argument to. |
| Not just describing what's there | **Yes** — and this is the real repair. Every shift moved from *"Product engineers stop X and shift to Y"* (weather report) to *"We enable / We want to stop / We elevate"*. He fixed the passivity diagnosed Aug 6, and more thoroughly than the fix I proposed. |
| Possible to agree/disagree | **Yes.** Three ≠ claims plus a stated priority order. All refutable. |
| No technical shifts | **Correct to cut — see below.** |

## "tokenmaxxing" — I argued against it and I was wrong

Recorded because the reasoning failed in an instructive way.

The argument made here was that *tokenmaxxing* is in-group slang formed like *looksmaxxing*,
that a CTO would not parse it, and that the subtitle is the worst place to lose half the room.
Alexey pushed back with two words — "it is a term, check" — and he was right.

By August 2026 it is established vocabulary with mainstream business coverage
([Inc.](https://www.inc.com/ben-sherry/what-is-tokenmaxxing-ai-productivity-hack/91328999),
[Trending Topics](https://www.trendingtopics.eu/tokenmaxxing-is-ai-token-consumption-a-productivity-metric-or-vanity-trap/),
glossary entries), attached to an episode leaders lived through: Meta's *Claudeonomics* and
Amazon's *Kirorank* ranked staff by tokens burned and were pulled around mid-2026 when the
incentive backfired.

That inverts the conclusion. The term is **already pejorative in mainstream usage**, so the
subtitle borrows a verdict rather than picking a fight; and it **names the concrete instance
of the third refusal** — `output volume ≠ capability` is abstract, *tokenmaxxing* is the
leaderboard that got switched off. Subtitle stands as his.

**The lesson:** the objection was built on an assumption about a word's currency, asserted
without checking. One search would have killed it before it cost him a round trip. Check the
currency of a term before arguing it is too obscure — especially in a fast-moving field where
vocabulary goes mainstream in months.

## The technical shifts — cut them, but do not delete them

**Cutting is right for this document.** Two reasons:

1. **Altitude.** The new spine is *"Org design, then AI"* — a leadership claim about sequencing. `features → systems` and `gatekeeping → guardrails` are practitioner craft. Mixing them makes the document address two rooms at once and commit to neither.
2. **They were the weakest part of the argument.** Per the Aug 6 diagnosis: shifts 1–3 were close cousins of the frontier-lab messaging ("stop shipping features, build agentic systems" / "stop inspecting for quality"). Those are exactly the lines the labs would happily co-sign. Removing them removes the part of the manifesto nobody could disagree with — which is what he set out to fix.

**But the cut has a real cost that has to be paid somewhere.** agentic-shift.com is not only the manifesto; `/munich` hosts a meetup series for **engineers**. The technical group was the only thing on the front page speaking to practitioners, and it carried the sole link to the Agentic Product Engineering Guide. Remove it with nothing in its place and the site's engineering half loses its anchor from the front door.

Cheapest fix: one line at the foot of the manifesto pointing to the technical work as a companion, e.g. *"The engineering craft this depends on is its own body of work — see the Agentic Product Engineering Guide."* Keeps the guide link, keeps the altitude clean.

## Softening that undoes the opinionated turn

> "Product engineering organizations **may decide to** amplify these shifts and AI **can be** a great lever along the way"

Every sentence above this is *we claim / we act / we define*. This one hedges twice in one line and hands the commitment back to a hypothetical third party. It is also the hinge into the three shifts, so it sets the register for everything after it.

Direct version: *"So we amplify three shifts in our product engineering organizations, and we use AI as a lever to get there."*

## Line edits — English

Standing rule: proofread before anything ships. Alexey fixed the FOMO double-subject himself at 09:16 while this was being written; the rest stand.

| Line | Fix |
|---|---|
| "What we know, though, it is not about tooling" | "What we know, though, **is that it is** not about tooling" |
| "in the way it is build" | "**built**" |
| "in the way it is aspired by" | not English — intended sense is "**in what it aspires to**" |
| "it is a invariant for us" | "**an** invariant" — and *invariant* is maths/CS jargon here; "**non-negotiable**" is plainer |
| "a strategical organizational capability" | "**strategic**" |
| "Every organization is unique … So it is an invariant that the shift happens on our terms" | The *so* does not follow. Uniqueness alone does not entail self-determination; the missing middle is that each org answers to its own stakeholders. That clause sits in the next sentence — after the conclusion it supports. Reorder. |

### Rewrite of that paragraph (requested 2026-08-09 09:16)

> Every organization is different — in how it was built, and in what it is trying to become. We run *our* organizations, and we answer to *our* customers, our people, and everyone else with a stake in them. That is why the shift has to happen on our terms.

Three fixes in one pass: the two grammar errors go, *invariant* is dropped for plain language, and the cause now precedes the conclusion — we answer to our own stakeholders, **therefore** our terms. A harder ending is available if he wants the edge: *"So the shift happens on our terms, or it is not ours."*

## Structural note

Three refusals (`≠`) and three shifts (`→`). That symmetry is doing real work — *what we will not accept* against *what we will pursue* — and nothing in the copy points at it. One clause naming it would make the shape legible.

## Not in this draft — confirm intentional

The live manifesto's strongest paragraph is absent: *"the craft of product engineering is undergoing a major reinvention — one made possible only by distinctly human traits… design environments that elevate human intelligence."* It currently sits buried in the *What does it mean for org leaders?* FAQ. If the document is being rebuilt anyway, that paragraph earns a place in the body rather than being dropped with the rest of the Q&A.

## Cost if applied

`en.json` is canonical and every string here is **rewritten**, not added. All 11 translations need a full pass plus back-translation, and the native-reviewed Portuguese corrections (guardrails + proxies notes) must be re-applied by hand — the `proxies → users` note survives in edited form, so its review is partly stale. `build.js` will print `✗ TRANSLATION DRIFT` and exit 1 until every language is done.
