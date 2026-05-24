# CLAUDE.md

## Who This Website Is For

This is the personal portfolio of **Chhavi Chauhan** — a product manager with a technical foundation spanning software engineering, site reliability engineering, and product management, most recently at Saturn and American Express. She is an expert practitioner, not a theorist. She also has a sharp eye for fashion and a genuine sense of taste.

This site speaks directly as Chhavi. When generating or editing content, write in her voice: **confident, precise, warm, and never performative**.

---

## Contact Details

- **Email:** chhavi0697@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/chhavian/
- **Resume:** resume.pdf (placed alongside portfolio.html)

---

## Chhavi's Voice

- **Direct.** She doesn't over-explain. She trusts the reader.
- **Grounded in craft.** She's built things with her hands (technically and creatively). Reference that reality.
- **Opinionated but generous.** She has strong taste and convictions, but she's curious about others' perspectives.
- **No buzzword soup.** Avoid "synergy," "leverage," "move the needle," "disrupt." If a word could appear in a generic LinkedIn post, cut it.
- **Fashion-aware.** She thinks about aesthetics the way a designer thinks — intentionally, with attention to texture, proportion, and context.

---

## Tone by Section

| Section | Tone |
|---|---|
| Hero / About | Warm, declarative, unhurried |
| Work / Case Studies | Precise, evidence-led, confident |
| Writing / Essays | More personal, reflective, exploratory |
| Contact | Simple. No fluff. |

---

## Content Rules

1. **Lead with specificity.** "I shipped the FCA-compliant letter generation workflow that processes 1,000+ monthly documents" beats "I've worked on AI products."
2. **Show the arc.** Engineer → SRE → PM is not a random walk — it's compounding systems thinking. Surface that.
3. **Don't apologize for having taste.** Fashion sensibility is a professional strength for a product builder. Own it.
4. **Avoid first-person overload.** Vary sentence structure. Not every sentence needs to start with "I."

---

## Site Structure

The portfolio is a **single file: `portfolio.html`**. All CSS and JS are inlined. No framework, no build step. Place `resume.pdf` in the same folder for the download link to work.

PDF case studies live in `content/` and are rendered inline using PDF.js (CDN).

### Page Sections (in order)

| # | Section ID | Nav Label | Content |
|---|---|---|---|
| — | `#hero` | — | Name, status, tagline, CTA |
| 01 | `#work` | Work | Three experience cards + Case Studies row below |
| 02 | `#about` | About | Bio, sidebar (status / craft areas / stack / previously at) |
| — | `#pull-quote` | — | Full-bleed dark quote section |
| 03 | `#writing` | Beliefs | "Things I believe in" — four essays, each opens in modal |
| 04 | `#contact` | Contact | Email, LinkedIn, resume download, availability status |

---

## Work Section

Three cards, in this order. **All three open modals on click.**

### 1. Saturn — First PM (Aug 2025 – Apr 2026)
Tags: FinTech · 0→1 · UK Market
Modal: Problem / Approach / Outcome + stats (£120K+ ARR · 2,000+ MAU · 60% admin time reduction · 650+ client firms)

### 2. American Express — Product Manager (Jan 2024 – Jul 2025)
Tags: Enterprise · B2B · Financial Services
Modal: Problem / Approach / Outcome + stats (40% manual workflow reduction · 40+ partners onboarded · Amazon integration renewed · 18mo tenure)

### 3. American Express — Engineer & SRE (Jul 2019 – Dec 2023)
Tags: Engineering · Site Reliability · American Express
Modal: **Multi-section** — three labelled sections (SRE / Cloud Engineer & SRE I & II / Engineer III) + stats (22% incident response reduction · 99.9% uptime · 10K+ daily API requests · 5 yrs)

---

## Case Studies Sub-section

Immediately below the three work cards, inside `#work`. Labelled "Case Studies" with section num "CS".

Two cards. Clicking opens the PDF in a full-screen overlay (PDF.js renders to canvas):

| Title | PDF path |
|---|---|
| Increasing Experiences feature awareness, Airbnb | `content/Airbnb_ Increasing Experiences Feature Awareness.pdf` |
| Improving product discoverability for returning users, CRED | `content/CRED_ Improving Product Discoverability.pdf` |

---

## Writing / "Things I believe in" Section

Section heading: **"Things I believe in"**. Nav link label: **"Beliefs"**. Section ID: `#writing`.

Four essays, each opens in a modal on click. Click handlers use `data-writing` attributes; `e.preventDefault()` stops scroll-to-top.

| Title | Theme |
|---|---|
| The user isn't the only one in the room | Navigating real constraints beyond pure user-centricity |
| Care is not a soft skill | Care as a multiplier on every other skill |
| Say it plainly | Clarity as an act of respect |
| Actions over words, always | Revealed preference vs. stated preference |

---

## What Claude Should Never Do on This Site

- Write generic bio copy ("passionate about technology and innovation...")
- Use placeholder phrases like "insert case study here" without flagging them clearly
- Invent metrics or outcomes not provided by Chhavi
- Use purple gradients or any other clichéd "tech portfolio" visual language (see `design-principles.md`)
- Add Twitter/X links — not present on this site
