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
      // Card — no modal, intro only
      noModal:    true,
      tags:       ["Engineering", "Site Reliability", "American Express"],
      title:      "Engineer & SRE — American Express",
      desc:       "Five years building and keeping systems alive. Wrote code that processed millions of transactions, ran incident response for critical financial infrastructure, and developed the instinct for reliability that now shapes how I think about product.",
      metaLabel1: "Company",  metaValue1: "American Express",
      metaLabel2: "Period",   metaValue2: "Jul 2019 – Dec 2023",
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
  // Set href to a real URL when published. Leave as "#" until then.
  writing: [
    { title: "The user isn't the only one in the room",  date: "2025", href: "#" },
    { title: "Care is not a soft skill",                 date: "2025", href: "#" },
    { title: "Say it plainly",                           date: "2025", href: "#" },
    { title: "Actions over words, always",               date: "2025", href: "#" },
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
    tagline: "Made with intention.",
  },

};
