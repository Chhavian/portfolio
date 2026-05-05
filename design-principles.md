# Design Principles

---

## The Premise

This site exists at an intersection most people don't expect: rigorous systems thinking and genuine aesthetic intelligence. The design must hold both without apology.

It should feel like something that was **made**, not assembled. Like someone had a point of view and refused to sand it down.

---

## Aesthetic Direction

**Ink and Interruption.**

The canvas is warm white — clean, uncompromising. Black type cuts into it with precision. And then, at deliberate moments, colour arrives like a slap. Not gradient. Not ambient. *Impact.*

The palette is restrained in range and aggressive in application:

| Name | Hex | Usage |
|---|---|---|
| Paper | `#F7F4EF` | Page background — warm white, not sterile |
| Ink | `#0D0D0D` | Primary text — almost black, not quite |
| Ink Soft | `#4A4A4A` | Secondary text, captions, metadata |
| Signal Red | `#E8200C` | Accent 1 — heat, urgency, punctuation |
| Acid Green | `#B4FF00` | Accent 2 — voltage, the unexpected (availability dot) |
| Burnt Orange | `#F56A00` | Accent 3 — warmth with edge |
| Chrome Yellow | `#FFD000` | Accent 4 — light, levity (About section border, pull quote) |

**The rule with colour:** Any one accent colour used alone is striking. Two together is intentional. Three is a statement. Four at once is never allowed.

Colour appears as:
- A thick rule that bleeds off the page (hero bottom: Signal Red)
- The background fill of a word in a headline (hero "thinking.")
- A hover state that snaps in with no easing
- A thin underline, 2px, that draws left to right on hover
- A section border-top (About: Chrome Yellow; Case Studies: Signal Red)

Colour does **not** appear as gradients, shadows, rounded pill buttons, or anything that tries to be "subtle."

---

## Typography

**Implementation uses Google Fonts as close approximations:**

- **Display/Body:** `DM Sans` — geometric grotesque, European character
- **Serif accent:** `DM Serif Display` — for pull quotes and lede text in writing modals
- **Monospace:** `DM Mono` — for labels, tags, section numbers, dates

**Scale (implemented):**
```
Hero display:  clamp(4rem, 10vw, 9rem)  — hero only
H1 (section):  clamp(1.6rem, 3vw, 2.4rem)
Case title:    clamp(1.4rem, 2.5vw, 2rem)
Body:          1.05rem / 1.8 line-height
Caption/label: 0.65–0.7rem, uppercase, tracked +0.10–0.14em
```

**Typographic moves in use:**
- Hero headline: light weight + bold weight on adjacent lines
- "thinking." highlighted with Signal Red background fill
- Section numbers in tiny monospace, top-left, catalogue style
- Pull quote in DM Serif Display, italic, 2–3rem

---

## Layout

Base: 12 columns, max-width 1440px, `max(80px, 6vw)` horizontal margins on desktop.

**Section structure:**
- Work cards: 70/30 grid (content + meta)
- Case studies: 3-column body (Problem / Approach / Outcome) with 4-stat grid above
- About: 7/4 grid (body + sidebar)
- Contact: 50/50 grid

**Margins:**
```
Mobile:   20px horizontal
Tablet:   48px horizontal
Desktop:  max(80px, 6vw)
```

**Horizontal rules as design elements:**
- `1px` ink-soft: default section separators
- `1px` ink: section header underlines
- `6px` Signal Red: hero bottom bleed, case studies section top
- `6px` Chrome Yellow: about section top
- `4px` accent colour: modal accent rule, case study section labels

---

## Motion

Restraint, then surprise.

**What moves:**

*Page arrival:* `.reveal` class — `opacity: 0 → 1`, `translateY(24px → 0)`, 400ms `ease-out`. Stagger: 60ms between siblings.

*Colour hover states:* Snap. Zero easing (`transition: color 0ms`). Nav links, case cards, writing items all snap to Signal Red at 0ms.

*Underline draw:* Hovered links grow an underline left to right, 180ms `ease-in-out`, 2px Signal Red.

*Nav hide/show:* Hides on scroll down past 80px, returns on scroll up. 300ms ease.

*Hero blink:* The status dot blinks cursor-style, 1s `step-end`. Used once. Not repeated.

*Availability dot:* Green blink at 1.8s interval on contact section.

---

## Components (Implemented)

**Buttons:** Two types only.
- Text link with animated underline
- `.btn-outline`: no fill, sharp corners, 1.5px ink border. On hover: background fills with accent, text inverts. Zero easing.

**Case Cards:**
- Flat. `1px solid var(--ink)` border.
- On hover: border snaps to accent, background shifts to `#F0EDE5`. No elevation, no border-radius.
- Cards overlap (`margin-bottom: -1px`) so borders collapse cleanly.

**Tags / Labels:**
- Uppercase, tracked, 0.7rem monospace. Bordered rectangle, sharp. `1px solid var(--ink-soft)`.

**Navigation:**
- Left: name in body font, medium weight.
- Right: four links — Work, Case Studies, About, Writing, Contact.
- Hides on scroll down, returns on scroll up.
- No hamburger on desktop.

**Modals (Case Studies + Writing):**
- Dark overlay `rgba(13,13,13,0.85–0.88)`.
- White content panel, max-width 760–820px.
- Slides up 20px on open, 300ms ease.
- Closes on overlay click or Escape key.

**Dividers:**
- `1px` ink-soft: default
- `2px` accent: CS section labels (inline, display block)
- `6px` accent: section top borders

---

## What This Site Refuses

No purple. No gradients. No stock photos. No skill percentage bars. No dark-mode toggle. No emoji in headings. No animated SVG blobs. No glassmorphism. No Twitter/X links. No "Let's build something great together."

No design element that could have been generated by asking an AI for "a modern portfolio website."

---

## The Test

Before anything is added, ask two questions:

1. *Does this earn its space?*
2. *Would a person with taste — real taste — find this interesting or find it predictable?*

---

## Reference Points

Not to copy. To feel.

- **Bottega Veneta** — restraint that cost something
- **032c magazine** — type as raw material
- **Mschf** — colour as punctuation
- **Rick Owens' site** — total commitment to a position
- **Phaidon monographs** — structure, weight, ink
- **Virgil Abloh's exhibitions** — the quote on the wall, blown up
