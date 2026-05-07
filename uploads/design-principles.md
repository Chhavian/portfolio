# Design Principles

---

## The Premise

This site exists at an intersection most people don't expect: rigorous systems thinking and genuine aesthetic intelligence. The design must hold both without apology.

It should feel like something that was **made**, not assembled. Like someone had a point of view and refused to sand it down.

---

## Aesthetic Direction

**Ink and Interruption.**

The canvas is white — cold, clean, uncompromising. Black type cuts into it with precision. And then, at deliberate moments, colour arrives like a slap. Not gradient. Not ambient. *Impact.*

The palette is restrained in range and aggressive in application:

| Name | Hex | Usage |
|---|---|---|
| Paper | `#F7F4EF` | Page background — warm white, not sterile |
| Ink | `#0D0D0D` | Primary text — almost black, not quite |
| Ink Soft | `#4A4A4A` | Secondary text, captions, metadata |
| Signal Red | `#E8200C` | Accent 1 — heat, urgency, punctuation |
| Acid Green | `#B4FF00` | Accent 2 — voltage, the unexpected |
| Burnt Orange | `#F56A00` | Accent 3 — warmth with edge |
| Chrome Yellow | `#FFD000` | Accent 4 — light, levity, highlight |

**The rule with colour:** Any one of these four accent colours used alone is striking. Two together is intentional. Three is a statement. Four at once is never allowed.

Colour appears as:
- A thick rule or border that bleeds off the page
- The background fill of a single word in a headline
- A hover state that snaps in with no easing
- A thin underline, 2px, that draws from left to right
- The background of an entire section — rare, unforgettable

Colour does **not** appear as:
- Gradients
- Shadows
- Rounded pill buttons
- Background texture fills on body sections
- Anything that tries to be "subtle"

---

## Typography

Typography is the architecture. Everything else is furniture.

**Display — `Array` / `Druk Wide` / `Editorial New`**
Big. Structural. Loud when it needs to be, quiet when it's holding space. Headlines should feel like they were *set*, not typed. Alternating weights within a headline (light + bold on the same line) is encouraged. Mix of uppercase and sentence case within the same hierarchy level — not randomly, but with intention.

**Body — `Suisse Int'l` / `Neue Haas Grotesk` / `ABC Diatype`**
Not Inter. Not ever. The grotesque here is European, slightly narrow, with enough personality that you notice it if you're looking. 1.8 line-height minimum. The reading experience should feel like a well-set book, not a web app.

**Accent / Callout — `Canela` / `Freight Display`**
Serif, used sparingly. Pull quotes, single-line case study headers, the occasional sub-heading that needs warmth. This is the texture in an otherwise hard-edged typographic system.

**Monospace — `Berkeley Mono` / `Commit Mono`**
For technical references, stack callouts, dates. Mono should feel deliberate — like it's making a point about precision — not like it wandered in from a dev blog.

**Scale:**
```
Display:   clamp(4rem, 10vw, 9rem)  — Used for hero text only. One or two words.
H1:        clamp(2.5rem, 5vw, 4rem)
H2:        clamp(1.6rem, 3vw, 2.4rem)
H3:        1.4rem — often in a contrasting weight to H2
Body:      1.05rem / 1.8 line-height
Caption:   0.78rem — uppercase, tracked +0.08em
Label:     0.7rem — uppercase, tracked +0.12em, used for categories/tags
```

**Typographic Moves:**
- A single word in a headline highlighted with an accent colour background (like a marker stroke)
- Section numbers in tiny monospace, top-left, like a catalogue
- Running footnotes styled as body text — not superscript
- Pull quotes that break out of the content column entirely, set in the serif, 2rem+
- First letter of a case study dropped — large cap, no flourish

---

## Layout

**The Grid is not the law. It is a starting point.**

Base: 12 columns, 24px gutter, max-width 1440px. But the most interesting moments happen when elements escape it.

**Compositional Principles:**

*Mass and void.* The page should have sections of deliberate density (a case study with tight-set text, a skills matrix, a contact section with two options side by side) and sections of deliberate emptiness (a single sentence floating in 200px of vertical padding, a headline that uses only 40% of the viewport width).

*The horizontal rule as a design element.* Not just a separator — a moment. A rule can be 1px ink, or 4px Signal Red, or full-bleed and 8px Chrome Yellow. It marks territory.

*Columns that don't match.* A 70/30 split for case studies (long body text + sidebar metadata). A 50/50 that shifts to 60/40 on scroll. Asymmetry is not disorder — it's visual tension kept on purpose.

*Bleeds.* Colour blocks and images should occasionally run full-width, edge to edge. Not because it's trendy — because it changes the room.

**Margins:**
```
Mobile:   20px horizontal
Tablet:   48px horizontal
Desktop:  max(80px, 6vw) horizontal — breathes properly at any size
```

---

## Motion

Restraint, then surprise.

Most of the page is still. Elements arrive once (on scroll) and stay. No constant animation. No elements reacting to mouse position on the main content. The site should not feel nervous.

**What moves:**

*Page arrival:* Content fades up, 400ms, `ease-out`. Stagger within sections: 60ms between items. This is the only moment of orchestration.

*Colour hover states:* Snap. Zero easing. A link goes from ink to Signal Red at 0ms — the instantaneous switch is more alive than a 200ms fade.

*Underline draw:* On hovered links, an underline grows from left to right over 180ms. `ease-in-out`. The line is 2px, in the current accent colour.

*Section transitions:* None. The page scrolls. Sections don't slide or fade between each other. Scroll is enough.

*The one exception:* On the hero, a single text element (a tagline or a status label) may blink — cursor-style, 1s interval — to suggest something live, in-progress. Used once, never repeated elsewhere.

---

## Imagery

Photography is optional. Design is not.

If photography is used:
- High contrast. No soft bokeh portraits. No motivational landscape shots.
- Black and white preferred, with the option to tint with one accent colour as a duotone
- Never stock. If it looks like it came from Unsplash, it shouldn't be here.
- Cropped with intent — faces cut at unexpected points, objects in tight frames

If no photography:
- The typography and colour system are enough. Don't fill space with imagery out of obligation.
- Data, if used, can be visualised as pure type (numbers at large scale, not charts)

---

## Component Reference

**Buttons:**
Two types only. A text link with animated underline. A bordered button with no fill, sharp corners — on hover, background fills with the current accent colour, text inverts to paper. No gradients. No shadows. No rounded corners.

**Cards (for case studies):**
Flat. Border is 1px ink. On hover: border swaps to accent colour (instant), background shifts to `#F0EDE5`. No elevation. No border-radius.

**Tags / Labels:**
Uppercase, tracked, 0.7rem. Bordered rectangle, sharp. Used for: role labels, year ranges, technology stack. Maximum two per card visible before truncation.

**Navigation:**
Left: name or wordmark in the body grotesque, medium weight. Right: three or four links, same typeface, no decoration, hover colour snap. On scroll-down: hides. On scroll-up: returns. No hamburger menu on desktop.

**Dividers:**
Three weights — `1px` ink soft (default section separator), `2px` ink (heavier emphasis), `6px` accent colour (a moment, used once per page maximum).

**Pull Quote:**
Full-width, centred, the serif accent font, 2–3rem. Accent colour on first letter or key phrase only. Offset from the content column with significant top/bottom margin. Feels like a poster inside the page.

---

## What This Site Refuses

No purple. No gradients. No stock photos. No skill percentage bars. No dark-mode toggle as a feature. No emoji in headings. No animated SVG blobs. No glassmorphism. No "Let's build something great together."

No design element that could have been generated by asking an AI for "a modern portfolio website."

---

## The Test

Before anything is added, ask two questions:

1. *Does this earn its space?*
2. *Would a person with taste — real taste — find this interesting or find it predictable?*

If the answer to either is uncertain, the element is not ready.

---

## Reference Points

Not to copy. To feel.

- **Bottega Veneta** — restraint that cost something
- **032c magazine** — type as raw material
- **Mschf** — colour as punctuation
- **Rick Owens' site** — total commitment to a position
- **Phaidon monographs** — structure, weight, ink
- **Virgil Abloh's exhibitions** — the quote on the wall, blown up

The common thread: a clear point of view, held all the way through.
