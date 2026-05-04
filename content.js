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
  work: [
    {
      // Card
      tags:    ["Consumer", "Mobile", "Growth"],
      title:   "Increasing Experiences feature adoption at Airbnb",
      desc:    "70% of frequent Airbnb travellers had never heard of Experiences. 5% had ever booked one. The feature existed — users just never found it. I mapped the user journey to identify where discovery could actually land.",
      metaLabel1: "Context",  metaValue1: "Airbnb",
      metaLabel2: "Domain",   metaValue2: "Feature discovery",

      // Modal
      modal: {
        problem:  `Airbnb's Experiences feature — local activities hosted by people in a destination — had a severe awareness problem. In a survey of frequent travellers who actively used Airbnb, roughly 70% had never heard of Experiences at all. Only 5% had ever booked one. The feature existed; users just never found it. A tab in the navigation, easy to miss, easy to skip.`,
        approach: `Started with the user journey, not the UI. The insight that mattered: users are most receptive to discovery at a specific moment — when they're already browsing a listing and the trip is starting to feel real. That's when "what will I actually do there?" kicks in. I mapped three potential solutions against RICE scores and ruled out the post-booking itinerary builder (high impact, very high effort) and the interest pop-up flow (too much friction at the top of the funnel). The prioritised solution: surface location-matched Experiences directly on the listing page, as a horizontally scrollable row, visible before a user commits to booking.`,
        outcome:  `Proposed metric framework: awareness layer (unique users scrolling the row, clicks, exploration depth), adoption layer (saves and bookings), and a north star of Experiences booked per day. The key insight that held: feature discoverability isn't a navigation problem — it's a timing problem.`,
        stats: [
          { num: "70%",   label: "Users unaware of Experiences" },
          { num: "5%",    label: "Ever booked one" },
          { num: "3",     label: "Solutions evaluated against RICE" },
        ],
      },
    },

    {
      // Card
      tags:    ["Consumer", "Fintech", "Re-engagement"],
      title:   "Improving product discoverability for returning users at CRED",
      desc:    "CRED's shop had a conversion problem that wasn't visible in the obvious places. Users weren't bouncing — they were leaving to think about it, then coming back and failing to find what they'd already decided to buy.",
      metaLabel1: "Context",  metaValue1: "CRED",
      metaLabel2: "Domain",   metaValue2: "Conversion",

      // Modal
      modal: {
        problem:  `CRED's shop had a conversion problem that wasn't visible in the obvious places. Users weren't bouncing. They were leaving to think about it, then coming back and failing to find what they'd already decided to buy. The app had no search, no history, no wishlist. A UX study with 20 CRED users confirmed it: 18 of 20 who shopped on the platform said they never bought in their first session. The app wasn't built for that behaviour.`,
        approach: `Two solutions evaluated: a wishlist/like button (user-initiated, explicit save) versus an "Explore Again" widget on the homepage (passive, automatic, zero friction). RICE scoring favoured the homepage widget — higher reach because it surfaces on landing with no action required, and critically, it captures intent that users wouldn't have thought to save. The insight: the problem wasn't that users forgot to wishlist things. It's that they didn't expect to have to. Launch plan: phase one to high-intent users (2+ app opens per day), phase two to daily actives after one month.`,
        outcome:  `Primary success metric: conversion rate of returning users who engaged with the Explore Again widget. Secondary: products bought per user over time. The fix was removing the workaround, not adding a new feature.`,
        stats: [
          { num: "20",    label: "Users in UX study" },
          { num: "18/20", label: "Never bought in first session" },
          { num: "2",     label: "Solutions against RICE" },
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
