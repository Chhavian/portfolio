# Product

## How I Think About Building

I came to product management through systems — first as an engineer who cared deeply about how things broke, then as an SRE who became obsessed with reliability at scale, then as a PM at an AI-first company where I learned that the hardest problems are rarely technical.

The through-line: I think in systems. I care about how the parts interact, where the failure modes live, and what the user experiences at 2am when something goes wrong. That instinct — shaped by years of being the person who got paged — is what I bring to product.

---

## What I Believe

**The interface is the product.**
Most product failures aren't engineering failures. They're clarity failures — the user didn't understand what they were being asked to do, or why. Getting this right requires obsessing over the words on a button as much as the architecture behind it.

**Reliability is a product feature, not an ops concern.**
I spent years making sure systems stayed up. That shaped how I approach product: uptime, latency, graceful degradation — these aren't backend concerns, they're promises you're making to users. Breaking those promises has compounding costs.

**AI products require a different kind of honesty.**
At an AI-first company, I learned that users forgive a lot — except being misled about what the system can and can't do. The best AI product work I've done has been about surfacing uncertainty honestly, not hiding it behind confident-sounding UI.

**Taste is a tool.**
I pay attention to fashion not as a hobby but as a discipline. Knowing what makes something feel right — proportion, material, context — translates directly into product decisions. The instinct that makes a well-tailored jacket work is the same instinct that makes a well-designed onboarding flow feel inevitable.

**Build for the constraint.**
The best work comes from real constraints, not invented ones. I try to ask: what's the minimum viable version that doesn't accumulate debt?

---

## Work

*Product case studies — the decisions, the tradeoffs, the outcomes.*  
*For things I built myself (code + design), see [`projects.md`](./projects.md).*

*Each case study follows this structure: context → problem → what I did → what happened → what I learned.*

---

### Airbnb — Increasing Experiences Feature Adoption

**Context:** Product management exercise, consumer mobile  
**Role:** Product Manager  
**Domain:** Feature discovery, consumer engagement

**The problem:**
Airbnb's Experiences feature — local activities hosted by people in a destination — had a severe awareness problem. In a survey of frequent travellers who actively used Airbnb, roughly 70% had never heard of Experiences at all. Only 5% had ever booked one. The feature existed; users just never found it. A tab in the navigation, easy to miss, easy to skip. Hosts listing Experiences were taking the hit.

**What I did:**
Started with the user journey, not the UI. The insight that mattered: users are most receptive to discovery at a specific moment — when they're already browsing a listing and the trip is starting to feel real. That's when "what will I actually do there?" kicks in.

I mapped three potential solutions against RICE scores and ruled out the post-booking itinerary builder (high impact, very high effort — not the right first bet) and the interest pop-up flow (too much friction at the top of the funnel). The prioritised solution: surface location-matched Experiences directly on the listing page, as a horizontally scrollable row, visible before a user commits to booking. No new navigation. No opt-in. Just the right content at the right moment.

**Success metrics I'd track:**
The first layer is awareness — unique users scrolling through the Experiences row, clicks, and depth of exploration. The second layer is adoption — saves and bookings. What I'd watch most closely is the drop-off rate between those two stages, since that's where intent converts (or doesn't). The north star: number of Experiences booked per day.

**What I learned:**
Feature discoverability isn't a navigation problem — it's a timing problem. Putting Experiences in a tab assumed users were in an exploratory mode. Putting it on the listing page met them where intent was already high. The better intervention is almost always contextual, not structural.

---

### CRED — Improving Product Discoverability for Returning Users

**Context:** Product management exercise, consumer fintech  
**Role:** Product Manager  
**Domain:** Re-engagement, conversion, e-commerce within fintech

**The problem:**
CRED's shop — where premium users can redeem coins for discounted products and travel offers — had a drop-off problem that wasn't visible in the obvious places. Users weren't bouncing. They were *leaving to think about it*, then coming back and failing to find what they'd already decided to buy.

The app had no search. No history. No wishlist. So a user who'd seen a product, compared it elsewhere, and come back ready to buy had to scroll the entire catalogue again — only to find the offer had expired, or they just couldn't locate it. The conversion problem was downstream of a memory problem.

A UX study with 20 CRED users confirmed it: all 18 who shopped on the platform said they never bought in their first session. They made the decision elsewhere and returned to complete it. The app wasn't built for that behaviour.

**What I did:**
Two solutions evaluated. A wishlist/like button feature (user-initiated, explicit save) versus an "Explore Again" widget on the homepage (passive, automatic, zero friction). Both had merit — the wishlist gives users control; the homepage widget requires nothing from them.

RICE scoring favoured the homepage widget: higher reach (it surfaces on landing, no action required), slightly lower effort, and critically — it captures intent that users wouldn't have thought to save. The insight from the data was that the problem wasn't that users forgot to wishlist things. It's that they didn't expect to have to.

The implementation is lightweight: track clicked listings per user, surface them in a horizontally scrollable "Explore Again" row on the homepage, placed above the fold whenever there are no mandatory actions pending. A thumbs feedback nudge to validate usefulness post-launch.

**What I'd track:**
CTR on the Explore Again widget and conversion rate of returning users who used it. Primary success: if conversion rate climbs as exposure scales. Secondary: products bought per user over time.

**Launch approach:**
Phase one to high-intent users (2+ app opens per day) — the most likely to be mid-decision and benefit immediately. Phase two scales to daily actives. One month between phases, same metric tracking throughout.

**What I learned:**
Users will adapt their behaviour to match an app's constraints — and not always in ways that show up as obvious churn. CRED users weren't abandoning the app; they were working around it. The fix was removing the workaround, not adding a new feature. Sometimes the most valuable product decision is making something that already happens invisible.

### American Express — Co-Brand Partner Data Portal

**Context:** American Express, [year range — fill in]
**Role:** Sole Product Manager
**Domain:** B2B, financial data, compliance, partner-facing products

**The problem:**
Amex runs co-brand credit cards with airlines, hotel chains, and other partners — the kind of cards where both logos sit on the front. Each of those partners has a legitimate need to see how their card is performing: spend data, transaction volumes, cardholder behaviour tied to their brand. The portal I inherited was supposed to give them that. It didn't work well enough to be trusted.

The product had two distinct user groups with competing needs: external partners (analysts and compliance teams at airlines and hotel chains) who needed clean, accurate data they could act on — and internal Amex stakeholders who needed to control precisely what left the building. Compliance wasn't a feature; it was the load-bearing wall. What data could be shown, to whom, under what conditions — these weren't product decisions, they were legal and regulatory ones. The product had to enforce them without ever making the external user feel like they were being managed.

**What I did:**
Took over a product that was incomplete and, in places, wrong. The first job was understanding the damage — what partners had been promised, what the system was actually delivering, and where the gaps were creating compliance exposure.

The hardest design problem was data access controls. Each partner should only ever see data scoped to their co-brand relationship with Amex — not aggregate Amex data, not another partner's numbers. Sounds obvious; the implementation was not. Getting the data model right, and then making sure the UI never accidentally surfaced something it shouldn't, required working closely with legal, engineering, and Amex's data governance teams simultaneously. Most of my stakeholder work was internal — aligning people who had strong opinions and real authority before a single line of partner-facing UI changed.

For external partners, the goal was different: make a compliance-heavy product feel like a professional tool, not a bureaucratic obstacle. The data they needed had to be findable, understandable, and downloadable without requiring them to call Amex every time something was unclear.

**What happened:**
Rebuilt and automated the partner onboarding flow — previously a manual, support-heavy process — and took it from broken to reliable enough that we onboarded 40+ partners through it, including renewing Amazon's integration. Partner support requests dropped significantly as onboarding stopped generating friction that needed human intervention to resolve.

**What I learned:**
In regulated environments, the PM's job is partly to be the translator — between what legal requires, what engineering can build, and what users actually need to do their jobs. Those three things rarely align naturally. The product that works is the one that holds all three in tension without collapsing any of them.

Owning a B2B product with external partners as users also taught me that trust is the real product. Data accuracy, access controls, consistent behaviour — these aren't features. They're the reason a partner logs in at all. When those things work invisibly, you've done it right. When onboarding breaks, nothing else matters.

---

## How I Work

**Discovery before solutions.**
I spend longer in the problem space than most people are comfortable with. I interview users not to validate assumptions but to have mine challenged.

**Write it down.**
I believe in written artifacts — PRDs, decision logs, postmortems. Not because process requires it, but because the act of writing forces clarity. If I can't explain a decision in a document, I don't fully understand it.

**Engineering is a first language.**
I can read code, write simple scripts, and have an informed conversation about system architecture. I don't use this to micromanage engineers — I use it to ask better questions and earn trust.

**Small teams, high trust.**
I work best in environments where ownership is clear and autonomy is real. I don't need a meeting to make a decision. I need context, a clear problem, and the latitude to solve it.

---

## Skills & Stack

**Product:** Discovery, roadmapping, PRD writing, metrics frameworks, OKR design, user research, A/B testing, go-to-market

**Technical:** Python, SQL, basic infra (k8s, GCP/AWS), incident management, observability tooling, API design patterns

**AI/ML:** Prompt engineering, LLM product integration, RAG architecture tradeoffs, model evaluation, responsible AI practices

**Design:** Figma (proficient), design systems thinking, typography and visual hierarchy, brand development

**Domain:** AI-first SaaS, developer tools, consumer fintech, consumer mobile

---

## Things I'm Currently Thinking About

- How AI products should handle epistemic humility in the UI — when should a model say "I don't know"?
- What makes a brand feel considered vs. constructed
- Whether the product manager role as we've defined it will survive the next five years of AI tooling

---

*Want to talk about any of this? [Get in touch →](/contact)*
