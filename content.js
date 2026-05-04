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
    tagline: `I came to product through systems — engineering, SRE, then PM at an AI-first
company. The through-line: I think in systems. I care about how the parts interact,
where the failure modes live, and what the user experiences when something goes wrong.`,
  },

  // ── WORK — CASE STUDY CARDS ───────────────
  // Each entry = one card on the page + one modal when clicked.
  // pdfUrl: path to the full case study PDF (relative to portfolio.html)
  work: [
    {
      // Card
      tags:    ["Consumer", "Mobile", "Growth"],
      title:   "Increasing Experiences feature awareness at Airbnb",
      desc:    "A survey of 100 frequent Airbnb travellers found 70% had never heard of Experiences — and only 5% had ever booked one. The feature existed. Nobody knew about it. The gap wasn't the product; it was where it was placed.",
      metaLabel1: "Context",  metaValue1: "Airbnb",
      metaLabel2: "Domain",   metaValue2: "Feature discovery",
      pdfUrl: "content/Airbnb_ Increasing Experiences Feature Awareness.pdf",

      // Modal
      modal: {
        problem:  `A survey of 100 frequent Airbnb travellers revealed critically low awareness of the Experiences feature — 70% had never heard of it, and only 5% had ever booked one. The only indicator of the Experiences tab was a subtle underline in the navigation, easily missed by most users. No homepage mention on web or mobile. Experience hosts were left with unsatisfied demand, and Airbnb was leaving revenue on the table. The feature existed; it was just hidden in plain sight.`,
        approach: `I started with the user journey, not the UI. The insight that mattered: users are most receptive to discovery at a specific moment — when they're already browsing a listing and the trip is starting to feel real. That's when "what will I actually do there?" kicks in. I mapped three potential solutions against RICE: location-based Experiences embedded in the listing page (score: 25), an exclusive itinerary for confirmed bookings (score: 12), and an interest pop-up with saved Experiences (score: 12). Solution 1 won on reach and confidence at moderate effort. The recommendation: a horizontally scrollable row of location-matched Experiences surfaced on every listing detail page, before the user commits to booking. Thumbnail interactions also capture implicit preference data to power future recommendations.`,
        outcome:  `Two-layer metric framework proposed. Awareness layer: unique users scrolling the Experiences row, clicks, and unique Experiences explored per session. Adoption layer: saves and Experiences booked per day (the North Star, feeding directly into total Airbnb listings booked). Drop-off rate between Awareness and Adoption tracked to measure funnel conversion. The core insight: discoverability isn't a navigation problem — it's a timing problem. Meeting users on the listing page, before they commit, is the right moment.`,
        stats: [
          { num: "70%", label: "Of 100 users — never heard of Experiences" },
          { num: "5%",  label: "Adoption rate among those who knew it existed" },
          { num: "25",  label: "RICE score — winning solution" },
        ],
      },
    },

    {
      // Card
      tags:    ["Consumer", "Fintech", "Re-engagement"],
      title:   "Improving product discoverability for returning users at CRED",
      desc:    "18 of 20 users studied never bought in their first session. They returned to complete the purchase — but there was no way to find what they'd already seen. Eight steps to re-find something they'd already found once.",
      metaLabel1: "Context",  metaValue1: "CRED",
      metaLabel2: "Domain",   metaValue2: "Conversion",
      pdfUrl: "content/CRED_ Improving Product Discoverability.pdf",

      // Modal
      modal: {
        problem:  `According to a UX study with 20 users, 18 of 20 CRED shoppers never buy in their first session — the decision always happens on a second visit. But when they return, there is no shortcut: zero ways to find a previously viewed product without repeating the full browsing journey from scratch. Eight steps just to relocate something they'd already found. The app had no search, no history, no wishlist. The drop-off wasn't at discovery — it was at re-discovery. Three distinct user personas were identified: The Bill Payer (utility-only), The Discount Hunter (browses then price-compares elsewhere before returning), and The Explorer (daily browser, buys when ready). Personas 2 and 3 were most impacted — they returned to buy but couldn't find what they'd seen.`,
        approach: `Two solutions evaluated against RICE. Solution 1: an "Explore Again" rail on the homepage — a horizontal scroll of previously visited products, surfaced automatically after any mandatory actions, with no user input required (score: 20). Solution 2: a "Like" button wishlist — explicit saves, accessible through a dedicated tab (score: 16). Solution 1 wins on Reach: it's visible to all users on the main page with zero friction. The key insight: the problem wasn't that users forgot to save things — it's that they didn't expect to have to. The fix was removing the workaround, not adding a new feature. Launch plan: Phase 1 A/B test with high-intent users (2+ opens per day), Phase 2 scale to daily actives after one month of tracking.`,
        outcome:  `The new flow reduces return-to-purchase from 8 steps to 2 — a 75% reduction in journey complexity. Primary metric: conversion rate of returning users who engage with the "Explore Again" rail. Secondary: products bought per user over the measurement period. Both tracked for 1 month post-launch per phase before scaling. If the number of products bought per user increases, the user problem is solved — with the additional benefit of increased revenue.`,
        stats: [
          { num: "18/20", label: "Users never buy in their first session" },
          { num: "8 → 2", label: "Steps to re-find a product" },
          { num: "75%",   label: "Reduction in return journey complexity" },
        ],
      },
    },

    {
      // Card
      tags:    ["B2B", "Platform", "Compliance"],
      title:   "Co-brand partner data portal at American Express",
      desc:    "Took over a partner-facing analytics product that was incomplete and, in places, wrong. Rebuilt and automated the onboarding flow, onboarded 40+ partners including renewing Amazon's integration, and made compliance feel like a professional tool.",
      metaLabel1: "Company",  metaValue1: "American Express",
      metaLabel2: "Role",     metaValue2: "Sole PM",

      // Modal
      modal: {
        problem:  `Amex runs co-brand credit cards with airlines, hotel chains, and other partners. Each partner has a legitimate need to see how their card is performing: spend data, transaction volumes, cardholder behaviour tied to their brand. The portal I inherited was supposed to give them that. It didn't work well enough to be trusted. Two user groups with competing needs: external partners who needed clean, accurate data they could act on, and internal Amex stakeholders who needed to control precisely what left the building. Compliance wasn't a feature — it was the load-bearing wall.`,
        approach: `First job: understand the damage — what partners had been promised, what the system was delivering, and where the gaps were creating compliance exposure. The hardest design problem was data access controls: each partner should only ever see data scoped to their co-brand relationship, never another partner's numbers or aggregate Amex data. Getting the data model right required working closely with legal, engineering, and Amex's data governance teams simultaneously. Most stakeholder work was internal — aligning people with strong opinions and real authority before a single line of partner-facing UI changed.`,
        outcome:  `Rebuilt and automated the partner onboarding flow — previously a manual, support-heavy process — and took it from broken to reliable enough to onboard 40+ partners through it, including renewing Amazon's integration. Partner support requests dropped significantly as onboarding stopped generating friction that needed human intervention to resolve.`,
        stats: [
          { num: "40+",           label: "Partners onboarded" },
          { num: "Amazon",        label: "Integration renewed" },
          { num: "Manual → Auto", label: "Onboarding flow" },
        ],
      },
    },
  ],

  // ── ABOUT ─────────────────────────────────
  about: {
    // Each string = one paragraph.
    paragraphs: [
      `I'm Chhavi — a product manager with a background that sits at an intersection most people don't expect. I came to product through systems: first as an engineer who cared deeply about how things broke, then as an SRE obsessed with reliability at scale, then as a PM at an AI-first company where I learned that the hardest problems are rarely technical.`,
      `I've shipped products in consumer, fintech, B2B, and platform contexts. What ties them together: I tend to work on the hard parts — the discoverability problem no one's solved, the compliance layer everyone's scared to touch, the activation flow that looks fine in analytics but breaks at 2am. <strong>I find it interesting to be the person who names the real problem before solving it.</strong>`,
      `Before product, I spent time close to infrastructure — which means I think about uptime, latency, and graceful degradation as product promises, not ops concerns. At an AI-first company I learned that the best AI product work is about surfacing uncertainty honestly, not hiding it behind confident-sounding UI.`,
      `I'm based in Bangalore. I read more than I talk about. I pay attention to craft — in products, in writing, in the things I surround myself with.`,
    ],
    // Sidebar blocks. Each has a label and a list of items.
    sidebar: [
      {
        label: "Currently",
        items: ["Open to new roles", "AI-first &amp; B2B focus", "Bangalore, India"],
      },
      {
        label: "Craft Areas",
        items: ["Product strategy", "Discovery &amp; user research", "AI/ML product integration", "B2B platforms", "Activation &amp; growth"],
      },
      {
        label: "Stack",
        items: ["Python, SQL", "k8s, GCP / AWS", "Figma", "LLM product &amp; RAG"],
      },
      {
        label: "Previously At",
        items: ["American Express"],
      },
    ],
  },

  // ── PULL QUOTE ────────────────────────────
  // The `accent` text is highlighted in Chrome Yellow inside the dark section.
  pullQuote: {
    before: "The interface is the product. Most failures aren't engineering failures — they're ",
    accent: "clarity failures.",
    after:  "",
    attr:   "How I think about product craft",
  },

  // ── WRITING ───────────────────────────────
  // Set href to a real URL when articles are published.
  writing: [
    { title: "How AI products should handle epistemic humility in the UI",            date: "2025", href: "#" },
    { title: "What makes a brand feel considered vs. constructed",                    date: "2025", href: "#" },
    { title: "Feature discoverability isn't a navigation problem — it's a timing problem", date: "2024", href: "#" },
    { title: "Reliability as a product feature, not an ops concern",                  date: "2024", href: "#" },
  ],

  // ── CONTACT ───────────────────────────────
  contact: {
    email:        "chhavi0697@gmail.com",
    availability: "Open to conversations about the right role.",
    links: [
      { label: "LinkedIn", text: "/in/chhavichauhan", href: "#" },
      { label: "Resume",   text: "Download PDF",      href: "#" },
    ],
  },

  // ── FOOTER ────────────────────────────────
  footer: {
    copy:    "© 2026 Chhavi Chauhan",
    tagline: "Made with intention.",
  },

};
