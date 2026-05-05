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

### Page Sections (in order)

| # | Section ID | Content |
|---|---|---|
| — | `#hero` | Name, status, tagline, CTA |
| 01 | `#work` | Three experience cards: Saturn, Amex PM, Amex SRE/Eng |
| 02 | `#case-studies` | Full case studies: Saturn + Amex PM |
| 03 | `#about` | Bio, sidebar (status / craft areas / previously at) |
| — | `#pull-quote` | Full-bleed dark quote section |
| 04 | `#writing` | Four essays (clickable, open in modal) |
| 05 | `#contact` | Email, LinkedIn, resume download, availability status |

---

## Work Section

Three cards, in this order:

### 1. Saturn — First PM (Aug 2025 – Present)
Tags: FinTech · 0→1 · UK Market · Case Study
Clicking opens a modal with full case study.

### 2. American Express — Product Manager (Jan 2024 – Jul 2025)
Tags: Enterprise · Financial Services · Case Study
Clicking opens a modal with full case study.

### 3. American Express — Engineer & SRE (Jul 2019 – Dec 2023)
Tags: Engineering · Site Reliability · American Express
No modal — intro card only. `cursor: default`, `.no-modal` class.

---

## Case Studies Section

Full-width blocks immediately after Work, separated by a horizontal rule. Each has:
- Tags + title + meta row (company / role / period)
- 4-stat grid
- Three-column body: Problem → Approach → Outcome

### Saturn Stats
- £120K+ annual revenue contributed
- 2,000+ monthly active users
- 60% reduction in adviser admin time
- 650+ client firms

### Amex PM Stats
- 40% reduction in manual workflows
- Global enterprise client base
- Multiple accounts managed simultaneously
- 18-month tenure

---

## Writing Section

Four essays, each opens in a modal on click.

| Title | Theme |
|---|---|
| The user isn't the only one in the room | Rationality in product vs. pure user-centricity |
| Care is not a soft skill | Bringing full intent to the work |
| Say it plainly | Clear communication as an act of respect |
| Actions over words, always | Actions as the only reliable signal |

---

## What Claude Should Never Do on This Site

- Write generic bio copy ("passionate about technology and innovation...")
- Use placeholder phrases like "insert case study here" without flagging them clearly
- Invent metrics or outcomes not provided by Chhavi
- Use purple gradients or any other clichéd "tech portfolio" visual language (see `design-principles.md`)
- Add Twitter/X links — not present on this site
