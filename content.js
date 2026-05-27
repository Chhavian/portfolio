// ─────────────────────────────────────────────
//  PORTFOLIO CONTENT
//  Edit this file to update the site.
//  No HTML or CSS knowledge needed.
//
//  Usage:
//    import { portfolioContent } from './content.js';
//    portfolioContent.header.name        // "Chhavi Chauhan"
//    portfolioContent.work.cases[0].role // "First PM, Saturn"
// ─────────────────────────────────────────────

export const portfolioContent = {

  // ── HEADER ────────────────────────────────
  header: {
    name:   "Chhavi Chauhan",
    volume: "Vol. I / 2026",
    nav: [
      { label: "Work",      href: "#work" },
      { label: "Manifesto", href: "#manifesto" },
      { label: "About",     href: "#about" },
      { label: "Beliefs",   href: "#writing" },
      { label: "Contact",   href: "#contact" },
    ],
  },

  // ── HERO ──────────────────────────────────
  hero: {
    eyebrow:    "Portfolio, Vol. I / 2026",
    nameThin:   "Chhavi",
    nameAccent: "Chauhan",
    // "compounding" is rendered in italic accent — mark with *word*
    line: "Engineer. SRE. PM. The arc is a straight line: *compounding* systems thinking. I care about how the parts interact, where the failure modes live, and what the user experiences when something goes wrong.",
    meta: [
      { label: "Now",    value: "Open to new roles\nFinTech · B2B · AI-first", dot: true },
      { label: "Recent", value: "First PM, Saturn\nAug 2025–Apr 2026" },
      { label: "Based",  value: "Bangalore, India" },
    ],
    footRight: "Three roles · Two case studies",
  },

  // ── WORK ──────────────────────────────────
  work: {

    // Main role case studies — appear as index rows + inline articles
    cases: [
      {
        num:       "001",
        role:      "First PM, Saturn",       // shown in index row title
        roleThin:  "First PM,",              // thin-weight prefix
        roleStrong:"Saturn",                 // heavy-weight suffix
        company:   "Saturn",
        period:    "2025–26",
        anchor:    "case-1",
        tags:      ["FinTech", "0→1", "UK Market", "B2B"],
        caseLabel: "Case 001 / Saturn",
        caseMeta:  "Aug 2025–Apr 2026 · First PM",
        // dropcap applied to first letter of problem automatically
        problem: `Saturn is a UK fintech platform built for financial advisers. When I joined as the first PM, the product function didn't exist. No discovery process, no roadmap discipline, no structured way to decide what to build next. The platform was already live and serving real client firms, but growing without a clear product strategy.

The challenge: build the PM function from scratch without slowing down a fast-moving team.`,
        approach: `Started with discovery: deeply understanding the advisers using the platform, where they were spending time, where the friction was. Established a prioritisation framework the team could actually use. Built the roadmap collaboratively so engineering and leadership were aligned before a single sprint started. Focused early effort on the workflows that consumed the most adviser time, since that was where the pain was clearest and the upside most measurable.`,
        outcome: `Platform now contributes £120K+ in annual recurring revenue. 2,000+ monthly active users. Adviser admin time reduced by 60% on key workflows. Serving 650+ client firms across the UK.`,
        stats: [
          { num: "£120K+", label: "Annual recurring revenue",       red: true },
          { num: "60%",    label: "Reduction in adviser admin time" },
          { num: "650+",   label: "Client firms served" },
        ],
        statsLabel: "Numbers\nthat shifted",
      },

      {
        num:       "002",
        role:      "Product Manager, American Express",
        roleThin:  "PM,",
        roleStrong:"American Express",
        company:   "American Express",
        period:    "2024–25",
        anchor:    "case-2",
        tags:      ["Enterprise", "B2B", "Financial Services", "Compliance"],
        caseLabel: "Case 002 / American Express",
        caseMeta:  "Jan 2024–Jul 2025 · Product Manager",
        problem: `Amex runs co-brand credit cards with airlines, hotel chains, and other global partners. Each partner has a legitimate need to see how their card is performing: spend data, transaction volumes, cardholder behaviour tied to their brand. The portal I inherited was supposed to give them that. It didn't work well enough to be trusted.

Two user groups with competing needs: external partners who needed clean, accurate data they could act on, and internal Amex stakeholders who needed to control precisely what left the building. Compliance wasn't a feature. It was the load-bearing wall.`,
        approach: `First job: understand the damage. What partners had been promised, what the system was delivering, and where the gaps were creating compliance exposure. The hardest design problem was data access controls: each partner should only ever see data scoped to their co-brand relationship, never another partner's numbers or aggregate Amex data.

Getting the data model right required working closely with legal, engineering, and Amex's data governance teams simultaneously. Most stakeholder work was internal: aligning people with strong opinions and real authority before a single line of partner-facing UI changed.`,
        outcome: `Rebuilt and automated the partner onboarding flow (previously a manual, support-heavy process) and took it from broken to reliable. Onboarded 40+ partners through it, including renewing Amazon's integration. Manual workflows reduced by 40%.`,
        stats: [
          { num: "40%",    label: "Reduction in manual workflows", red: true },
          { num: "40+",    label: "Partners onboarded" },
          { num: "Amazon", label: "Integration renewed" },
        ],
        statsLabel: "Numbers\nthat shifted",
      },

      {
        num:       "003",
        role:      "Engineer & SRE, American Express",
        roleThin:  "Engineer & SRE,",
        roleStrong:"Amex",
        company:   "American Express",
        period:    "2019–23",
        anchor:    "case-3",
        tags:      ["Engineering", "Site Reliability", "Payments", "5 Years"],
        caseLabel: "Case 003 / American Express",
        caseMeta:  "Jul 2019–Dec 2023 · Engineer & SRE",
        // sections[] replaces problem/approach/outcome for this case
        sections: [
          {
            label: "SRE",
            body:  `Owned monitoring and alerting across critical payment processing infrastructure: the systems that kept millions of daily transactions running. Designed the alerting architecture that reduced incident response time by 22%. Maintained 99.9% uptime on payment processing. Not as a target. An operational standard.

Incident response at this level means understanding failure modes before they propagate, not reacting after the fact.`,
          },
          {
            label: "Cloud Engineer / SRE",
            body:  `Built and maintained RESTful APIs integrating HR systems with analytics platforms for real-time data access across enterprise-scale org infrastructure. These APIs handled 10,000+ daily requests at sub-200ms response times with 99.8% reliability. Introduced to distributed systems at the level that matters: not textbook theory, but actual decisions about what degrades gracefully and what doesn't.`,
          },
          {
            label: "Engineer III",
            body:  `Joined as a graduate engineer and built internal tooling from first principles. Delivered the employee onboarding system that improved user satisfaction scores by 30%. Built system health metrics into user-facing dashboards, an early version of the instinct that would later define the product work: making complexity legible to the people who depend on it.`,
          },
        ],
        stats: [
          { num: "22%",   label: "Reduction in incident response time", red: true },
          { num: "99.9%", label: "Uptime on payment processing" },
          { num: "10K+",  label: "Daily API requests at sub-200ms" },
        ],
        statsLabel: "Numbers\nthat held",
      },
    ],

    // Practice case studies — appear as PDF rows in the work index
    exercises: [
      {
        num:     "CS 01",
        role:    "Experiences Awareness, Airbnb",
        roleThin:  "Experiences Awareness,",
        roleStrong:"Airbnb",
        company: "Airbnb",
        period:  "Aug 2025",
        pdfUrl:  "content/Airbnb_ Increasing Experiences Feature Awareness.pdf",
      },
      {
        num:     "CS 02",
        role:    "Improving Discoverability, CRED",
        roleThin:  "Improving Discoverability,",
        roleStrong:"CRED",
        company: "CRED",
        period:  "Aug 2025",
        pdfUrl:  "content/CRED_ Improving Product Discoverability.pdf",
      },
    ],
  },

  // ── MANIFESTO ─────────────────────────────
  manifesto: {
    // Rendered in full-bleed deep navy section
    principles: [
      `"Find the real problem before you solve a smaller one. Most product work is mis-naming."`,
      `"Taste isn't decoration. It's the willingness to remove what doesn't belong."`,
    ],
  },

  // ── ABOUT ─────────────────────────────────
  about: {
    // Each string = one paragraph.
    // Wrap text in <ink-mark>…</ink-mark> for the red highlight treatment.
    paragraphs: [
      `Chhavi Chauhan. Product manager with a technical foundation spanning software engineering, site reliability, and product, most recently at Saturn and American Express.`,
      `The arc from engineer to SRE to PM isn't a pivot. It's compounding. Five years building and keeping Amex systems alive gave me a specific kind of instinct: uptime, latency, and graceful degradation aren't ops concerns, they're product promises. Breaking those promises has costs that compound quietly until they don't. <ink-mark>That instinct shapes every product decision I make.</ink-mark>`,
      `At Saturn I built the product function from scratch. No playbook, no predecessor. Just a fast-moving team and real advisers with real problems. At Amex as PM, the work was translation: between what legal required, what engineering could build, and what partners actually needed to do their jobs. Neither aligned naturally. That's where the interesting work lives.`,
      `Sharp eye for fashion. Not as a hobby. As a discipline. The instinct that makes a well-cut garment work is the same instinct that makes a well-designed onboarding flow feel inevitable. Proportion, texture, context. These aren't soft skills.`,
    ],

    // Sidebar key-value blocks
    side: [
      {
        label: "Currently",
        items: [
          { key: "Status", value: "Open to new roles" },
          { key: "Focus",  value: "FinTech · B2B · AI-first" },
          { key: "Based",  value: "Bangalore, India" },
        ],
      },
      {
        label: "Craft Areas",
        items: [
          { key: "01", value: "0→1 product" },
          { key: "02", value: "Discovery & user research" },
          { key: "03", value: "B2B platforms" },
          { key: "04", value: "AI/ML product integration" },
          { key: "05", value: "Activation & growth" },
        ],
      },
      {
        label: "Stack",
        items: [
          { key: "Lang",   value: "Python, SQL" },
          { key: "Infra",  value: "Kubernetes, GCP / AWS" },
          { key: "Design", value: "Figma" },
          { key: "AI",     value: "LLM product & RAG" },
        ],
      },
      {
        label: "Previously At",
        items: [
          { key: "'25–26", value: "Saturn" },
          { key: "'19–25", value: "American Express" },
        ],
      },
    ],
  },

  // ── PULL QUOTE ────────────────────────────
  // `before` + highlighted `accent` form the full quote.
  // Opening " and accent colour are applied automatically.
  pullQuote: {
    tag:    "How I think\nabout product craft",
    before: "The interface is the product. Most failures aren't engineering failures. They're ",
    accent: "clarity failures.",
    end:    "CC\n2026",
  },

  // ── WRITING / BELIEFS ─────────────────────
  // href: "#" opens the essay in a modal.
  // href: "https://…" links out to a published piece.
  writing: [
    {
      num:   "→ 001",
      title: "The user isn't the only one in the room",
      date:  "2025",
      href:  "#",
      tag:   "Principles",
      lede:  "User-centricity is real. But treating it as the end of the conversation is lazy thinking.",
      body:  `Pure user-centricity is the default setting in most product teams. It's taught in courses, repeated in interviews, and treated as the moral anchor of the discipline. The user always comes first.

The problem is that "the user" is rarely the only one in the room when a product decision gets made.

Legal is in the room. Compliance is in the room. The enterprise partner who controls your distribution is in the room. The engineering team that has to live with the decision for three years is in the room. The financial model that determines whether the company exists in eighteen months is in the room.

None of this makes the user less important. But it does make product management significantly harder than "what does the user want?"

The job is to understand what the user needs, hold that clearly, and then navigate the real constraints, without using them as excuses to build the wrong thing.

At Amex, the hardest design problems weren't about what partners wanted to see. That part was easy: they wanted everything. The hard part was determining what they could legitimately see, given data governance rules that existed for real reasons. The user-centred answer and the compliant answer had to be the same answer. That required actual thinking, not a framework.

"The user isn't the only one in the room" isn't a pessimistic statement. It's a description of the job. Pretending otherwise doesn't make you more user-centred. It makes you less useful.`,
    },
    {
      num:   "→ 002",
      title: "Care is not a soft skill",
      date:  "2025",
      href:  "#",
      tag:   "How I Work",
      lede:  "Most skills can be hired. The thing that can't be replaced is the person who genuinely gives a damn.",
      body:  `Somewhere along the way, care got filed under "soft skills," the category that means important but not really measurable, and therefore not really serious.

This is wrong, and it matters that it's wrong.

Care is what separates work that's technically correct from work that's actually good. A spec can be complete and still miss the point. A flow can pass usability testing and still feel like it was built by someone who never intended to use it. The gap between those two states is care.

Care shows up in the things that don't have to be right. The edge case nobody will hit for six months. The error message that most users will never read. The loading state that lasts half a second. These are the places where care is optional: where time pressure and ticket count make it easy to ship the expedient version and move on.

The thing about care is that it compounds. Users don't experience individual features in isolation. They experience the accumulation of every decision, the polished ones and the ones where nobody bothered. The overall quality of a product is the average of those decisions over time, weighted toward the low end.

Care is not soft. Care is a multiplier on every other skill you have.`,
    },
    {
      num:   "→ 003",
      title: "Say it plainly",
      date:  "2025",
      href:  "#",
      tag:   "Communication",
      lede:  "Clarity is not just a communication style. It's a form of respect.",
      body:  `Most communication in product teams fails for the same reason: the person writing it hasn't finished thinking about what they actually want to say.

Jargon is one symptom. Long sentences are another. Passive voice. Hedge words. The construction that sounds decisive but commits to nothing. These aren't style choices. They're signals that the thinking isn't done.

Clarity requires more work than vagueness, not less. A crisp paragraph takes longer to write than a rambling one because it requires you to decide what matters. That's the uncomfortable part. Deciding that something matters is also deciding that something else doesn't. That's a real decision with real consequences, and it's easier to leave it ambiguous.

But ambiguity doesn't resolve itself. It migrates. A vague requirement becomes a misaligned build. A hedged stakeholder update becomes a surprised executive. A meeting without a clear outcome becomes two more meetings. The fog gets distributed.

Say it plainly. Write the hard thing directly. If the sentence can be cut without losing meaning, cut it.

Plain language isn't a tone of voice. It's an act of respect for the person reading: the assertion that their time matters more than your comfort.`,
    },
    {
      num:   "→ 004",
      title: "Actions over words, always",
      date:  "2025",
      href:  "#",
      tag:   "Principles",
      lede:  "What people say tells you what they want you to think. What they do tells you everything else.",
      body:  `People are better at describing their intentions than predicting their behaviour. This isn't a character flaw. It's a cognitive one. When you ask someone what they would do in a hypothetical, they tell you who they'd like to be. What they actually do under real conditions, with real tradeoffs, is a different dataset entirely.

This matters for product, but it matters more generally.

In product research, it means that self-reported behaviour is a starting point, not evidence. The user who tells you they'd pay for a feature is not lying. They genuinely believe it. They also won't pay. The gap between stated preference and revealed preference is where most product bets go wrong.

In teams, it means that culture is what people do when no one is watching, not what gets written in the values doc. The team that says it prioritises quality ships technical debt under deadline pressure. The team that actually prioritises quality pushes back on the deadline.

In leadership, credibility is built through behaviour over time. A single inconsistency between what someone says matters and what they actually do creates a hole that takes years to fill.

Pay attention to what people do. Take what people say as one input, weighted accordingly. The signal is in the action.`,
    },
  ],

  // ── CONTACT ───────────────────────────────
  contact: {
    email: "chhavi0697@gmail.com",
    links: [
      { key: "LinkedIn", value: "/in/chhavian",   href: "https://www.linkedin.com/in/chhavian/", external: true },
      { key: "Resume",   value: "Download PDF →", href: "resume.pdf", download: "Chhavi_Chauhan_Resume.pdf" },
    ],
  },

  // ── FOOTER ────────────────────────────────
  footer: {
    copy:      "Chhavi Chauhan · Portfolio Vol. I · © 2026",
    typefaces: "Familjen Grotesk, Instrument Serif, JetBrains Mono",
    tagline:   "Made with intention. Co-authored with Claude.",
  },

};
