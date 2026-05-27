export const portfolioContent = {
  header: {
    name: "Chhavi Chauhan",
    title: "Product Manager",
    subtitle: "Product Manager with engineering and SRE foundation. Based in Bangalore. Open to B2B, FinTech, AI-first roles.",
    navigation: [
      { label: "Work", href: "#work" },
      { label: "Decision Making", href: "#decision-making" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" }
    ]
  },

  work: {
    intro: "Three PM-adjacent roles spanning infrastructure, compliance, and 0 to 1 product.",
    cases: [
      {
        id: "saturn",
        role: "First PM, Saturn",
        period: "Aug 2025 Apr 2026",
        context: "FinTech, B2B, UK Market Entry",
        sections: [
          {
            title: "The Starting Point",
            content: "Saturn is a fintech platform for UK financial advisers. When I joined, product management didn't exist. No discovery. No roadmap. No structure for prioritization. The platform was live, doing real transactions, but growing reactively."
          },
          {
            title: "What I Found",
            content: "15 adviser interviews: 60% of platform time went to three tasks (data entry, report generation, compliance submission). All manual. No templating. Month-1 churn was 30%, concentrated in advisers hitting these friction points."
          },
          {
            title: "The Decision",
            content: "I prioritized these three workflows over growth features because:",
            blocks: [
              {
                type: "decision",
                label: "Why:",
                text: "They consumed the most time (measurable pain). Fixing them addressed month-1 churn (business impact). They shared the same root cause, so one solution improved all three."
              },
              {
                type: "decision",
                label: "What got deferred:",
                text: "Partner-facing analytics, dashboard optimization, advanced reporting. All legitimate. All less urgent than stopping month-1 churn."
              }
            ]
          },
          {
            title: "Results",
            metrics: [
              "Month-1 churn: 30% to 18%",
              "Time on key workflows: 60% reduction",
              "2,100+ monthly active advisers",
              "650+ client firms",
              "£120K+ ARR"
            ]
          }
        ]
      },
      {
        id: "amex-pm",
        role: "Product Manager, American Express",
        period: "Jan 2024 Jul 2025",
        context: "Enterprise B2B, Compliance & Scoping",
        sections: [
          {
            title: "The Problem",
            content: "Partner portal for co-brand credit cards was broken. Legal flagged a data access control risk: partners could potentially see each other's data. Engineering estimated one year to rebuild. Business couldn't wait that long."
          },
          {
            title: "The Decision",
            content: "I had to scope ruthlessly. The question wasn't \"rebuild or don't.\" It was \"what's the minimum architecture that eliminates the compliance exposure?\"",
            blocks: [
              {
                type: "decision",
                label: "What had to happen:",
                text: "Centralized access control layer so all partner data queries go through one place legal could audit. No more distributed access rules across billing, reporting, and onboarding systems."
              },
              {
                type: "decision",
                label: "What got cut:",
                text: "Custom reporting features partners had requested. Self-service partner onboarding interface. Both were nice to have. Neither blocked the compliance fix. I deferred them explicitly and told partners why."
              }
            ]
          },
          {
            title: "Execution",
            content: "Three months instead of one year. Here's what had to align:",
            items: [
              "Engineering had to believe three months was possible (scoped scope helps)",
              "Partners had to understand why we were cutting features (transparency)",
              "Legal had to accept the three-month timeline over their preferred \"rebuild it all\" approach"
            ]
          },
          {
            title: "Results",
            metrics: [
              "Partner onboarding time: 4-6 weeks to 2-3 days",
              "40+ partners through new system",
              "Amazon account renewed",
              "Zero compliance incidents post-launch"
            ]
          }
        ]
      },
      {
        id: "amex-sre",
        role: "Engineer & SRE, American Express",
        period: "Jul 2019 Dec 2023",
        context: "5 years, Infrastructure, Site Reliability",
        sections: [
          {
            title: "Why This Matters for Product",
            content: "I learned that uptime, latency, and graceful degradation aren't ops problems. They're product decisions. Users don't blame the database when a system is slow. They blame the product. When a system fails hard instead of degrading, they blame the product."
          },
          {
            title: "Specific Work",
            items: [
              {
                label: "SRE:",
                text: "Designed alerting for millions of daily payment transactions. Reduced false positives by 70% by being ruthless about what deserves human attention vs what's a trend. Incident response time improved 22% (45 min to 35 min)."
              },
              {
                label: "Cloud Engineer:",
                text: "Built REST APIs handling 10,000+ daily requests at sub-200ms response times. The key decision: accept 200ms as the constraint upfront, design for it, don't hope for 100ms and fail under load."
              },
              {
                label: "Product impact:",
                text: "Built employee onboarding system. Satisfaction scores improved 30%. The real work wasn't the form flow. It was making system health visible in the UI so users could see where things were breaking for them. Making complexity legible is half the product work."
              }
            ]
          }
        ]
      }
    ]
  },

  decisionMaking: {
    title: "How I Work",
    frameworks: [
      {
        title: "Prioritization",
        content: "Find where users spend the most time that frustrates them. Not feature requests. Not leadership opinions. Time leakage is where pain is legible and upside is measurable."
      },
      {
        title: "Stakeholder Alignment",
        content: "Make the decision criteria explicit first. Most alignment failures aren't communication failures. They're clarity failures. Once the model is visible and people agree on criteria, the decision follows naturally."
      },
      {
        title: "Trade-offs",
        content: "Every decision is a choice to not do something else. Name it. You're choosing X over Y because of Z. If Z changes, everyone knows we revisit the decision."
      }
    ]
  },

  about: {
    title: "About",
    sections: [
      {
        title: "What I Bring",
        content: "I understand how systems fail. I understand why compliance matters. I understand what moves business metrics. And I execute."
      },
      {
        title: "What I'm Looking For",
        content: "Problems where the user's pain is clear but the solution isn't. Teams that disagree thoughtfully and make decisions anyway. Compensation that reflects responsibility (non-negotiable)."
      },
      {
        title: "Technical Skills",
        skills: [
          { category: "Languages", value: "Python, SQL" },
          { category: "Infrastructure", value: "Kubernetes, GCP, AWS" },
          { category: "Design Tools", value: "Figma, Miro" },
          { category: "AI/ML", value: "LLM product, RAG systems" }
        ]
      }
    ]
  },

  contact: {
    title: "Let's Talk",
    subtitle: "For roles, conversations, or if you're solving a product problem and want to think through it together.",
    email: "chhavi0697@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/chhavian/" },
      { label: "Resume (PDF)", url: "https://chhavian.github.io/portfolio/resume.pdf" }
    ]
  },

  footer: {
    name: "Chhavi Chauhan",
    year: 2026
  }
};
