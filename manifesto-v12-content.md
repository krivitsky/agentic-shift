# Manifesto v1.2 — copy for the hidden `/v12` page

**Draft for review.** Not applied to the live manifesto. `/v12` is `noindex` and carries no GA.

Three departures from live:

1. **A rewritten opening** — replaces the old two-paragraph lede entirely.
2. **A "What we refuse" section** — three lines, new.
3. **A third technical shift** — `02 code → context`, which renumbers the organizational shifts to 04–06.

Everything else (shifts 01 / 03–06, system note, Q&A, foot) is the live English text, untouched.

---

## Hero — unchanged from live

**Agentic Shift**
*towards professional agentic product engineering*

---

## Opening — NEW (replaces the live lede)

The **agentic shift** is real — we are living it inside our own organizations. It runs deeper than tooling, and it is not measured in tokens.

Everyone is optimizing for something. The frontier labs optimize for adoption: their product wins when your habits change, and the fastest way to change a habit is to make standing still feel like falling behind. That is a legitimate business, and it is theirs, not ours.

We are running organizations, and we are judged on other things — **the value that reaches our customers**, and **the health of the organization that keeps producing it**: its capacity to keep learning, keep judging, keep changing direction. Where that diverges from adoption and throughput, *we follow ours.*

So the shift happens on our terms. Every organization starts somewhere different and owns its path through it. What follows is what we think **professional** has to mean along the way.

### What the old lede did, and where it went

The live lede did two jobs. The first — *"the gap between the best and the rest widens every day"* — was the FOMO framing the new opening now argues against, so it is gone deliberately. The second — *"we're defining professional agentic product engineering as a set of noticeable org-design shifts"* — survives, compressed, in the closing paragraph.

---

## What we refuse — NEW

We do not treat the loss of judgment as efficiency.

We do not accept vendor dependence as progress.

We do not confuse volume of output with capability.

**Styling:** same `.section-head` as *The shifts…* (same family, size, weight, rule); only the word colour differs — `#e8617f`, a rose-red built off amber's red channel. This is a fourth hue in a three-colour system (ink / teal / amber); the rule is page-scoped in `/v12`'s own `<style>` and can be dropped to revert.

---

## The shifts — one added, the rest unchanged

### Major technical shifts (amber, sourced to the Agentic Product Engineering Guide)

**01 features → systems** — unchanged from live.

**02 code → context** — **NEW.**
> Product engineers stop treating hand-written code as the durable asset and shift to authoring the context that produces it — specs, evals, tools, and the rules agents work under. Code gets cheap to regenerate; the context is what compounds.

**03 gatekeeping → guardrails** — unchanged from live (was 02).

### Major organizational shifts (teal, sourced to 10X ORG)

**04 specialists → craftspeople** · **05 proxies → users** · **06 output → outcomes** — unchanged from live (were 03–05).

### Why `code → context` and not `testing → evals`

`testing → evals` is the obvious third, and it is the weaker one. It overlaps `gatekeeping → guardrails` — both answer *how do you know it's good* — and evals are now consensus frontier-lab talk, which is the exact trap this draft is trying to climb out of. `code → context` is the claim the labs do not make: that the durable engineering asset moved, and the professionals are the ones who noticed.

---

## System note, Q&A, foot — unchanged from live

Verbatim from `en.json`.

---

## Cost, if applied

The old lede's strings are **rewritten**, not merely added to — so all 11 translations need a real pass, not an append. New translatable strings: opening (4), refusals (3 + heading), shift 02 pair + note (2). Native-reviewed corrections at risk: `pt` (guardrails + proxies note) — both survive, neither string is touched.
