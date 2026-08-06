# Manifesto rethink — three directions, with drafts

**Not applied.** Nothing here has touched `manifesto/content/en.json` or the live site.

Supersedes `manifesto-proposal-2026-08-06.md`, which Alexey correctly called patchwork.

## The problem, restated

Two faults, and the second is the one that matters.

1. **Grammar.** Every shift reads *"Product engineers stop doing X and shift to Y"* — something happening *to* them. Nobody chooses. A description can't disagree with the labs because it isn't claiming anything.
2. **Everyone already knows the shifts.** Alexey, 2026-08-06: *"people probably already know the shifts."* Naming a trend accurately was valuable in February. In August it's table stakes, and a manifesto whose whole content is an accurate trend list has been overtaken by the trend.

A manifesto earns its name by being **refusable**. A reader has to be able to disagree with it. Right now there is nothing to disagree with.

---

## Direction A — The Wager

**Premise:** you already made calls in February that landed. Cash that. A manifesto that stakes a claim about the future is one people can bet against, which is what makes it a position rather than a summary.

**Strength:** unique to Alexey — nobody else has a dated, published, partly-vindicated prediction record on this. Hard to copy. Invites argument, which is distribution.
**Risk:** prediction-flavoured writing ages badly and can read as chest-beating if the tone slips. Needs the humility to name what was wrong too.

### Draft

> **Agentic Shift**
>
> In February 2026 we wrote that the pendulum was swinging away from human-centricity — that respect for people and the craft of engineering were being quietly overwritten by a return to control, measurement, and mechanization.
>
> Six months later, that argument is being made openly from conference stages, by the companies selling the models. Code is free, so generate more of it. Stop bottlenecking on review. Let go of the craft of software design.
>
> We think they are half right, and that the missing half is the whole job.
>
> **What we expect to be true by 2028:**
>
> The organizations that kept the ability to read, judge, and design their own systems will be compounding. The ones that traded it for throughput will be renting their engineering capability permanently, and will not be able to tell when it stopped working.
>
> Generation speed will be a commodity and nobody will compete on it. What will separate organizations is the quality of the loop around the generation — the harness, the mandate, the distance to the user, the ability to notice drift.
>
> The gap between the best and the rest will be wider than it is now, and it will be a gap in organizational design, not in model access. Everyone will have the same models.
>
> **We could be wrong about the timing. We do not think we are wrong about the direction.**
>
> [five shifts follow]

---

## Direction B — The Stand (recommended)

**Premise:** state what you refuse, then what you hold, then what you build. The shifts survive but stop being the content — they become the *how*, arriving after the reader already knows what's at stake.

**Strength:** directly encodes today's argument. Refusable. Doesn't depend on prediction. Keeps the five shifts, so nothing already published is wasted.
**Risk:** defined partly in opposition to the labs. Mitigate by making the refusal short and the positive claim long.

### Draft

> **Agentic Shift**
>
> Something is being sold to you along with the models. Not just the tools — a set of working habits, arriving as advice. Generate more. Review less. Let the craft go.
>
> We don't think this is a conspiracy. We think it's a very good strategy. Every company chases product-market fit; when your product is a frontier model, one of the available routes is to change the market rather than the product — and habits are part of the market. An engineer who still reads, judges, and holds the design is a harder fit than one who has stopped.
>
> So the advice is real advice, and it is also doing strategic work. Both things are true.
>
> **What we refuse**
>
> We do not treat the loss of judgment as progress.
> We do not accept dependence as a design outcome.
> We do not confuse volume of output with capability.
>
> **What we hold**
>
> A consultancy sells you a contract; it ends, and you still have your organization. This is a different shape. If the reading and the judging quietly stop, there is no contract to end — there is only what your people can still do without the tools.
>
> Which capabilities you grow, and which you rent, is a design decision. It is being made in your organization right now, by default, by whoever adopts fastest. We think it should be made deliberately, at the top, before the tools arrive rather than after.
>
> **What we build**
>
> Professional agentic product engineering is what that decision looks like when it's carried through. Five shifts, technical and structural, each with a half that nobody sells you:
>
> [five shifts, rewritten per Direction D below]

---

## Direction D — Rewrite the shifts as decisions with a cost

**Not a standalone direction — the body for A or B.** This is what fixes "people already know the shifts."

The insight from today: for each shift, the labs ship the *stop* and skip the *build*. Make that structure explicit and the shifts stop being observations and become something an organization can fail at.

Each shift gets three parts: **the move**, **the half nobody sells you**, **what it costs to skip it**.

### 2. gatekeeping → guardrails (worked example)

> **The move.** Stop inspecting for quality at the end.
> **The half nobody sells you.** Build quality into the system — the tests, the gherkin, the mutation coverage, the harness that makes output trustworthy before anyone looks at it.
> **The cost of skipping it.** You get the first half free from every vendor. Taken alone, it is simply the removal of review. Teams who stop inspecting without building the harness ship faster for two quarters and then cannot explain their own incidents.

Same treatment for the other four:

- **1. features → systems** — *move:* stop shipping one-off features. *Half nobody sells:* the self-improving loop that turns intent into working solutions, and someone accountable for the loop itself. *Cost of skipping:* more output, same product.
- **3. specialists → craftspeople** — *move:* stop assembly-line specialization. *Half nobody sells:* the craftsperson **pulls in** specialist depth on demand and grows from it — the human is the one acting. *Cost of skipping:* you replace narrow humans with narrow humans who no longer know what they don't know.
- **4. proxies → users** — *move:* stop the telephone game through manager-proxies. *Half nobody sells:* the org structure that permits zero distance — mandate, not encouragement. *Cost of skipping:* faster delivery of the wrong thing.
- **5. output → outcomes** — *move:* stop measuring people by output. *Half nobody sells:* teams that can sense drift and correct course themselves, which requires the mandate to change direction. *Cost of skipping:* outcome language over output management; nothing changes but the vocabulary.

---

## Alexey's addition (2026-08-06, driving) — the missing piece is the **telos**

> *"It's not actually clear what the manifesto is helping to optimize for… leaders need to know their direction… owning your organization and knowing where it should go… better products and better service for customers… and health of the organization."*

He's right, and this is bigger than the refusal framing. A stance without a stated goal is still just a mood. **Every one of the five shifts is a means, and the manifesto never says to what end.** That is why it reads as trend-following: a means-only document inherits whatever ends are in the air, and right now the ends in the air are the labs'.

**The sharpest available move: name both optimization targets side by side.** It is non-accusatory and it settles the whole argument in three lines.

> Everyone is optimizing for something.
> The labs optimize for adoption and throughput. That is legitimate, and it is their business, not yours.
> We optimize for two things: **value delivered to customers**, and the **health of the organization that delivers it** — its ability to keep learning, keep judging, and keep changing direction.
> Those are not the same target. Where they diverge, we follow ours.

Then ownership, which is **Principle 1 of *10X ORG*, Own Not Rent** — the same idea, arriving honestly rather than as a plug:

> Direction is not something you receive. An organization that doesn't know what it's trying to become will adopt whatever is being promoted, and will call that a strategy.

**Revised structure for Direction B:**

1. **What we optimize for** — customer value + organizational health. (the end)
2. **Who sets direction** — you do; a borrowed direction is a rented one. (ownership)
3. **What we refuse** — the three refusals. (the teeth)
4. **What we build** — the five shifts, each with the half nobody sells you. (the means)

Order matters: the end first, so the shifts arrive as instruments of something rather than as news.

---

## Recommendation

**B for the frame, D for the body.** A's prediction material is strong but belongs in the talk, not the manifesto — it dates the document and invites a scoring argument.

B works because the refusals are the part nobody else will print. "We do not accept dependence as a design outcome" is a sentence the labs cannot say back, and it's the whole reason the five shifts exist.

## To apply

Edit `manifesto/content/en.json` and its language siblings, then `node manifesto/build.js`. Never hand-edit the generated block in README.md or the site.
