# Manifesto revision proposal — 2026-08-06

**Not applied.** Proposed only. The live manifesto is generated from `manifesto/content/en.json`; nothing here has been written to it.

**Why:** Alexey, driving, 2026-08-06: *"I'm missing something in the Agentic Shift manifesto… it sounds like the manifesto just playing along with the Frontier Labs messaging more than stating its own direction."*

## The diagnosis

Every shift uses the same grammar: *"Product engineers stop doing X and shift to Y."* That describes something happening **to** them. Nobody chooses anything anywhere in the document. It reads as a well-informed weather report — and a weather report cannot disagree with the labs, because it isn't making a claim.

Shifts 1–3 are close cousins of the lab messaging ("stop shipping features, build agentic systems" / "stop inspecting for quality" / "let AI fill the specialist gaps"). Only 4 and 5 are unmistakably Alexey's, because those are the two the labs never discuss.

The intent **is** already in the manifesto — "design environments that elevate human intelligence" — but it sits at the bottom, inside the *What does it mean for org leaders?* FAQ.

## Proposed change 1 — add a shift **before** the others

Not a sixth at the end; a zeroth at the front, because it reframes everything after it.

### 0. adoption → intent

> Organizations stop adopting what the wave prescribes and shift to deciding what they want to become — which capabilities to grow, which to rent, and what must not be lost. Only then do they choose the tools that serve that decision.

With this first, the remaining five stop describing a wave and start reading as choices someone made. Same five shifts, opposite posture.

## Proposed change 2 — flip the subject of shift 3

Current: *"…with AI filling the specialist gaps in real time and mentoring the product engineers into new domains and skills."*
AI is the subject; the humans receive.

Proposed: *"…with craftspeople pulling in specialist depth on demand, and using it to grow into new domains and skills."*
Same fact; the human acts.

## Proposed change 3 — state one non-goal

The manifesto only says what to move toward, which always reads as enthusiasm. A single refusal makes it a position:

> We do not treat the loss of judgment as progress, and we do not accept dependence as a design outcome.

That is the sentence the labs cannot say back.

## Proposed change 4 — promote the leaders' paragraph

Move *"the craft of product engineering is undergoing a major reinvention — one made possible only by distinctly human traits… design environments that elevate human intelligence"* out of the FAQ and up near the top. It's the strongest paragraph in the document and it's currently answering a question most readers never scroll to.

## To apply

Edit `manifesto/content/en.json` (and the other language files), then `node manifesto/build.js` to regenerate README + site. Do not hand-edit the generated block.
