// ─────────────────────────────────────────────
//  PORTFOLIO CONTENT
//  Edit this file to update the site.
//  No HTML or CSS knowledge needed.
// ─────────────────────────────────────────────

const PORTFOLIO = {

  // ── IDENTITY ──────────────────────────────
  name: "Chhavi Chauhan",

  // ── HERO ──────────────────────────────────
  hero: {
    status: "Product Manager — Open to new roles",
    // Three lines of the large display headline.
    // The middle line gets the accent-colour highlight.
    headlineTop:    "Product",
    headlineMiddle: "thinking.",
    headlineBottom: "Built.",
    tagline: `Engineer. SRE. PM. The arc is a straight line — compounding systems thinking.
I care about how the parts interact, where the failure modes live, and what the user
experiences when something goes wrong.`,
  },

  // ── WORK — CASE STUDY CARDS ───────────────
  // Each entry = one card on the page + one modal when clicked.
  // Set noModal: true for cards with no modal (cursor stays default).
  // pdfUrl: path to the full case study PDF (relative to portfolio.html).
  work: [
    {
      // Card
      tags:       ["FinTech", "0→1", "UK Market"],
      title:      "First PM — Saturn",
      desc:       "Joined as the first product hire at a UK fintech serving financial advisers. Built the product function from scratch — discovery, prioritisation, roadmap, and shipping — across a platform used by 650+ client firms.",
      metaLabel1: "Company",  metaValue1: "Saturn",
      metaLabel2: "Period",   metaValue2: "Aug 2025 – Present",

      // Modal
      modal: {
        problem:  `Saturn is a UK fintech platform built for financial advisers. When I joined as the first PM, the product function didn't exist — there was no discovery process, no roadmap discipline, no structured way to decide what to build next. The platform was already live and serving real client firms, but growing without a clear product strategy. The challenge: build the PM function from scratch without slowing down a fast-moving team.`,
        approach: `Started with discovery — deeply understanding the advisers using the platform, where they were spending time, where the friction was. Established a prioritisation framework the team could actually use. Built the roadmap collaboratively so engineering and leadership were aligned before a single sprint started. Focused early effort on the workflows that consumed the most adviser time, since that was where the pain was clearest and the upside most measurable.`,
        outcome:  `Platform now contributes £120K+ in annual recurring revenue. 2,000+ monthly active users. Adviser admin time reduced by 60% on key workflows. Serving 650+ client firms across the UK.`,
        stats: [
          { num: "£120K+", label: "Annual revenue contributed" },
          { num: "2,000+", label: "Monthly active users" },
          { num: "60%",    label: "Reduction in adviser admin time" },
          { num: "650+",   label: "Client firms" },
        ],
      },
    },

    {
      // Card
      tags:       ["Enterprise", "B2B", "Financial Services"],
      title:      "Product Manager — American Express",
      desc:       "Sole PM on the co-brand partner data portal — a compliance-critical product serving airline and hotel partners across Amex's global card network. Rebuilt onboarding, automated manual workflows, and renewed Amazon's integration.",
      metaLabel1: "Company",  metaValue1: "American Express",
      metaLabel2: "Period",   metaValue2: "Jan 2024 – Jul 2025",

      // Modal
      modal: {
        problem:  `Amex runs co-brand credit cards with airlines, hotel chains, and other global partners. Each partner has a legitimate need to see how their card is performing: spend data, transaction volumes, cardholder behaviour tied to their brand. The portal I inherited was supposed to give them that. It didn't work well enough to be trusted. Two user groups with competing needs: external partners who needed clean, accurate data they could act on, and internal Amex stakeholders who needed to control precisely what left the building. Compliance wasn't a feature — it was the load-bearing wall.`,
        approach: `First job: understand the damage — what partners had been promised, what the system was delivering, and where the gaps were creating compliance exposure. The hardest design problem was data access controls: each partner should only ever see data scoped to their co-brand relationship, never another partner's numbers or aggregate Amex data. Getting the data model right required working closely with legal, engineering, and Amex's data governance teams simultaneously. Most stakeholder work was internal — aligning people with strong opinions and real authority before a single line of partner-facing UI changed.`,
        outcome:  `Rebuilt and automated the partner onboarding flow — previously a manual, support-heavy process — and took it from broken to reliable. Onboarded 40+ partners through it, including renewing Amazon's integration. Manual workflows reduced by 40%. Partner support requests dropped significantly as onboarding stopped generating friction that needed human intervention to resolve.`,
        stats: [
          { num: "40%",    label: "Reduction in manual workflows" },
          { num: "40+",    label: "Partners onboarded" },
          { num: "Amazon", label: "Integration renewed" },
          { num: "18mo",   label: "Tenure" },
        ],
      },
    },

    {
      // Card
      tags:       ["Engineering", "Site Reliability", "American Express"],
      title:      "Engineer & SRE — American Express",
      desc:       "Five years building and keeping systems alive. Wrote code that processed millions of transactions, ran incident response for critical financial infrastructure, and developed the instinct for reliability that now shapes how I think about product.",
      metaLabel1: "Company",  metaValue1: "American Express",
      metaLabel2: "Period",   metaValue2: "Jul 2019 – Dec 2023",

      // Modal — split by role progression
      modal: {
        sections: [
          {
            label: "SRE",
            body:  `Owned monitoring and alerting across critical payment processing infrastructure — the systems that kept millions of daily transactions running. Designed the alerting architecture that reduced incident response time by 22%. Maintained 99.9% uptime on payment processing — not as a target, as an operational standard. Incident response at this level means understanding failure modes before they propagate, not reacting after the fact.`,
          },
          {
            label: "Cloud Engineer — SRE I & II",
            body:  `Built and maintained RESTful APIs integrating HR systems with analytics platforms — real-time data access across enterprise-scale org infrastructure. These APIs handled 10,000+ daily requests at sub-200ms response times with 99.8% reliability. Introduced to distributed systems at the level that matters: not textbook CAP theorem, but actual decisions about what degrades gracefully and what doesn't.`,
          },
          {
            label: "Engineer III",
            body:  `Joined as a graduate engineer and built internal tooling from first principles. Delivered the employee onboarding system that improved user satisfaction scores by 30%. Built system health metrics into user-facing dashboards — an early version of the instinct that would later define the product work: making complexity legible to the people who depend on it.`,
          },
        ],
        stats: [
          { num: "22%",    label: "Reduction in incident response time" },
          { num: "99.9%",  label: "Uptime on payment processing" },
          { num: "10K+",   label: "Daily API requests at sub-200ms" },
          { num: "5 yrs",  label: "Engineering tenure" },
        ],
      },
    },
  ],

  // ── PM EXERCISES ──────────────────────────
  // These appear as a separate row below the main work section.
  // Full case study PDFs available for each.
  exercises: [
    {
      tags:    ["Consumer", "Mobile", "Growth"],
      title:   "Increasing Experiences feature awareness — Airbnb",
      desc:    "70% of 100 frequent travellers had never heard of Airbnb Experiences. 5% had ever booked one. A RICE-scored analysis of three solutions led to a single recommendation: surface location-matched Experiences on the listing page, before the booking decision.",
      pdfUrl:  "content/Airbnb_ Increasing Experiences Feature Awareness.pdf",
      date:    "Aug 2025",
    },
    {
      tags:    ["Consumer", "Fintech", "Re-engagement"],
      title:   "Improving product discoverability for returning users — CRED",
      desc:    "18 of 20 users studied never bought in their first session. There was no way to re-find a product without repeating 8 steps from scratch. A passive 'Explore Again' homepage rail reduced the return journey to 2 steps.",
      pdfUrl:  "content/CRED_ Improving Product Discoverability.pdf",
      date:    "Aug 2025",
    },
  ],

  // ── ABOUT ─────────────────────────────────
  // Each string = one paragraph.
  about: {
    paragraphs: [
      `Chhavi Chauhan. Product manager with a technical foundation spanning software engineering, site reliability, and product — most recently at Saturn and American Express.`,
      `The arc from engineer to SRE to PM isn't a pivot — it's compounding. Five years building and keeping Amex systems alive gave me a specific kind of instinct: uptime, latency, and graceful degradation aren't ops concerns, they're product promises. Breaking those promises has costs that compound quietly until they don't. <strong>That instinct shapes every product decision I make.</strong>`,
      `At Saturn I built the product function from scratch — no playbook, no predecessor, just a fast-moving team and real advisers with real problems. At Amex as PM, the work was translation: between what legal required, what engineering could build, and what partners actually needed to do their jobs. Neither aligned naturally. That's where the interesting work lives.`,
      `Sharp eye for fashion. Not as a hobby — as a discipline. The instinct that makes a well-cut garment work is the same instinct that makes a well-designed onboarding flow feel inevitable. Proportion, texture, context. These aren't soft skills.`,
    ],
    sidebar: [
      {
        label: "Currently",
        items: ["Open to new roles", "FinTech · B2B · AI-first", "Bangalore, India"],
      },
      {
        label: "Craft Areas",
        items: ["0→1 product", "Discovery &amp; user research", "B2B platforms", "AI/ML product integration", "Activation &amp; growth"],
      },
      {
        label: "Stack",
        items: ["Python, SQL", "k8s, GCP / AWS", "Figma", "LLM product &amp; RAG"],
      },
      {
        label: "Previously At",
        items: ["Saturn", "American Express"],
      },
    ],
  },

  // ── PULL QUOTE ────────────────────────────
  // `before` + highlighted `accent` + `after` form the full quote.
  pullQuote: {
    before: "The interface is the product. Most failures aren't engineering failures — they're ",
    accent: "clarity failures.",
    after:  "",
    attr:   "How I think about product craft",
  },

  // ── WRITING ───────────────────────────────
  // Set href to a real URL when published. Leave as "#" to open in modal.
  writing: [
    {
      title: "The user isn't the only one in the room",
      date: "2025",
      href: "#",
      body: `Pure user-centricity is the default setting in most product teams. It's taught in courses, repeated in interviews, and treated as the moral anchor of the discipline. The user always comes first.

The problem is that "the user" is rarely the only one in the room when a product decision gets made.

Legal is in the room. Compliance is in the room. The enterprise partner who controls your distribution is in the room. The engineering team that has to live with the decision for three years is in the room. The financial model that determines whether the company exists in eighteen months is in the room.

None of this makes the user less important. But it does make product management significantly harder than "what does the user want?"

The job is to understand what the user needs, hold that clearly, and then navigate the real constraints — without using those constraints as excuses to build the wrong thing.

At Amex, the hardest design problems weren't about what partners wanted to see. That part was easy — they wanted everything. The hard part was determining what they could legitimately see, given data governance rules that existed for real reasons. The user-centred answer and the compliant answer had to be the same answer. That required actual thinking, not a framework.

"The user isn't the only one in the room" isn't a pessimistic statement. It's a description of the job. Pretending otherwise doesn't make you more user-centred. It makes you less useful.`,
    },
    {
      title: "Care is not a soft skill",
      date: "2025",
      href: "#",
      body: `Somewhere along the way, care got filed under "soft skills" — the category that means important but not really measurable, and therefore not really serious.

This is wrong, and it matters that it's wrong.

Care is what separates work that's technically correct from work that's actually good. A spec can be complete and still miss the point. A flow can pass usability testing and still feel like it was built by someone who never intended to use it. The gap between those two states is care.

Care shows up in the things that don't have to be right. The edge case nobody will hit for six months. The error message that most users will never read. The loading state that lasts half a second. These are the places where care is optional — where time pressure and ticket count make it easy to ship the expedient version and move on.

The thing about care is that it compounds. Users don't experience individual features in isolation. They experience the accumulation of every decision — the polished ones and the ones where nobody bothered. The overall quality of a product is the average of those decisions over time, weighted toward the low end.

Care is not soft. Care is a multiplier on every other skill you have.`,
    },
    {
      title: "Say it plainly",
      date: "2025",
      href: "#",
      body: `Most communication in product teams fails for the same reason: the person writing it hasn't finished thinking about what they actually want to say.

Jargon is one symptom. Long sentences are another. Passive voice. Hedge words. The construction that sounds decisive but commits to nothing. These aren't style choices — they're signals that the thinking isn't done.

Clarity requires more work than vagueness, not less. A crisp paragraph takes longer to write than a rambling one because it requires you to decide what matters. That's the uncomfortable part. Deciding that something matters is also deciding that something else doesn't. That's a real decision with real consequences, and it's easier to leave it ambiguous.

But ambiguity doesn't resolve itself. It migrates. A vague requirement becomes a misaligned build. A hedged stakeholder update becomes a surprised executive. A meeting without a clear outcome becomes two more meetings. The fog gets distributed.

Say it plainly. Write the hard thing directly. If the sentence can be cut without losing meaning, cut it.

Plain language isn't a tone of voice. It's an act of respect for the person reading — the assertion that their time matters more than your comfort.`,
    },
    {
      title: "Actions over words, always",
      date: "2025",
      href: "#",
      body: `People are better at describing their intentions than predicting their behaviour. This isn't a character flaw — it's a cognitive one. When you ask someone what they would do in a hypothetical, they tell you who they'd like to be. What they actually do under real conditions, with real tradeoffs, is a different dataset entirely.

This matters for product, but it matters more generally.

In product research, it means that self-reported behaviour is a starting point, not evidence. The user who tells you they'd pay for a feature is not lying — they genuinely believe it. They also won't pay. The gap between stated preference and revealed preference is where most product bets go wrong.

In teams, it means that culture is what people do when no one is watching, not what gets written in the values doc. The team that says it prioritises quality ships technical debt under deadline pressure. The team that actually prioritises quality pushes back on the deadline.

In leadership, credibility is built through behaviour over time. A single inconsistency between what someone says matters and what they actually do creates a hole that takes years to fill.

Pay attention to what people do. Take what people say as one input, weighted accordingly. The signal is in the action.`,
    },
  ],

  // ── CONTACT ───────────────────────────────
  contact: {
    email:        "chhavi0697@gmail.com",
    availability: "Open to conversations about the right role.",
    links: [
      { label: "LinkedIn", text: "/in/chhavian",    href: "https://www.linkedin.com/in/chhavian/" },
      { label: "Resume",   text: "Download PDF",    href: "resume.pdf" },
    ],
  },

  // ── FOOTER ────────────────────────────────
  footer: {
    copy:    "© 2026 Chhavi Chauhan",
    tagline: "Made with intention. Co-authored with Claude.",
  },

};
