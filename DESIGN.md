---
name: Autoflow Solutions
description: The Operator's Blueprint — a neo-brutalist marketing system for an SME automation agency.
colors:
  highlighter-lime: "#c4ef17"
  press-black: "#050505"
  paper-white: "#FFFFFF"
  gray-dark: "#333333"
  gray-light: "#E5E5E5"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 4vw, 4rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  pill: "999px"
  hard: "4px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "2rem"
  lg: "4rem"
  xl: "8rem"
components:
  button-solid:
    backgroundColor: "{colors.press-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  button-solid-hover:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.press-black}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.press-black}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  button-outline-hover:
    backgroundColor: "{colors.press-black}"
    textColor: "{colors.paper-white}"
  button-neon:
    backgroundColor: "{colors.highlighter-lime}"
    textColor: "{colors.press-black}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  button-neon-hover:
    backgroundColor: "transparent"
    textColor: "{colors.highlighter-lime}"
  ui-card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.press-black}"
    padding: "2rem"
  ui-card-inverse:
    backgroundColor: "{colors.press-black}"
    textColor: "{colors.paper-white}"
    padding: "2rem"
  ui-card-neon:
    backgroundColor: "{colors.highlighter-lime}"
    textColor: "{colors.press-black}"
    padding: "2rem"
  pricing-card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.press-black}"
    padding: "3rem 2rem"
  pricing-card-featured:
    backgroundColor: "{colors.press-black}"
    textColor: "{colors.paper-white}"
    padding: "3rem 2rem"
  tier-badge:
    backgroundColor: "{colors.highlighter-lime}"
    textColor: "{colors.press-black}"
    padding: "4px 12px"
  marquee:
    backgroundColor: "{colors.highlighter-lime}"
    textColor: "{colors.press-black}"
    padding: "1rem 0"
---

# Design System: Autoflow Solutions

## 1. Overview

**Creative North Star: "The Operator's Blueprint."**

This is the visual language of a founder-led automation agency. The whole system reads like a spec sheet annotated by the engineer who built it: blueprint grid backgrounds, monospace process IDs, hand-drawn doodle arrows over rotated UI-card mockups, hard 2–3px black borders, and `12px 12px 0` offset block shadows that don't blur. It is the opposite of the cream-paper editorial SaaS landing page and the opposite of the purple-gradient AI hero. It is the look of a team that ships systems, not a team that pitches them.

The palette is binary: near-black ink on paper-white surface, with `#c4ef17` Highlighter Lime as the single emphatic accent. There are no soft drop-shadows, no glassmorphism, no gradients. Depth is **declared**, not simulated — the offset shadow is a stamp, not a sunbeam. Typography is Inter at 900 weight, tracked tight (`-0.03em`) and set in ALL CAPS at display sizes. Motion is purposeful: a quartic `ease-out` for state changes, a slow `linear` marquee for the brand band, and one ambient cursor-follower glow that pulses behind the hero. Nothing is decorative for its own sake.

Sections vary in voice. The hero is a workshop: floating UI cards rotated -4° / +3° / -2° over a blueprint grid, with a hand-drawn arrow and a "You save 40hrs/wk!" annotation. The marquee that follows is a production-floor conveyor belt of "NO JARGON • JUST ROI • BUILT FOR SMES". Process sections are blueprint cells with monospace IDs in the corners. Pricing cards stand on their own borders, with the featured tier flipping to black-on-black and a lime offset shadow that reads as the only "lit" element on the page. This is not aesthetic monoculture; it is one strong voice spoken at different volumes per section.

**Key Characteristics:**
- **Binary palette, single accent.** Press Black + Paper White + Highlighter Lime. No tertiary color anywhere.
- **Declarative shadows.** Offset block, zero blur. Letterpress logic, not depth simulation.
- **Hard borders are structure.** 2–3px Press Black borders define every container. The border IS the card.
- **Display type at 900, tracked tight.** Inter, uppercase, `-0.03em`, line-height 1.05. Headlines look weighted, not airy.
- **Pill buttons are the only soft shape.** Everything else is hard-cornered. Buttons sell; structure declares.
- **Workshop annotation as voice.** Hand-drawn arrows, monospace process IDs, conversational marquees. The site looks marked-up by a real human.

## 2. Colors

A binary system with one emphatic accent. There is no secondary palette. The single accent is rationed — it carries the brand wherever it lands, so it cannot land everywhere.

### Primary
- **Highlighter Lime** (`#c4ef17`): The brand-defining single accent. Used for: the active-page nav underline, button-neon surfaces, the marquee band, the offset shadow on the featured pricing card, the cursor-follower radial glow, the huge footer brand text, accent dots inside cards, the `feature-item::before` arrow markers. Reserved for emphasis on Press Black or large display contexts. Treat it like a yellow highlighter pen across a contract: precious by rationing.

### Neutral
- **Press Black** (`#050505`): The ink. All body text on white, all primary button surfaces, all card borders, the footer canvas, the inverse `card-2` and featured pricing card. Near-black, not pure `#000` — the slight warmth keeps the typography from buzzing on bright LCDs.
- **Paper White** (`#FFFFFF`): The dominant body surface and the inside of every default card. The blueprint grid sits on this with `#E5E5E5` grid lines at 40px spacing.
- **Gray Dark** (`#333333`): Secondary body text, footer-bottom metadata, the `gray-dark` border state on inverted cards.
- **Gray Light** (`#E5E5E5`): Dividers, the blueprint grid lines in the hero-right, the `feature-item` row separators in pricing, the soft hover bg `#fafafa` derivative for blueprint cells.

### Named Rules

**The Single Accent Rule.** Highlighter Lime is the only chromatic color in the system. There is no secondary accent, no warning red, no info blue. If a state needs to be communicated, communicate it with Press Black weight, border, or copy — not by introducing a new hue. A second color dilutes the first.

**The Spotlight Rule.** Highlighter Lime never carries small body text on Paper White. Its WCAG contrast against white at body sizes is below AA. Use it at display weight, on solid button surfaces with Press Black text, or as a fill on inverted (Press Black) backgrounds where contrast is high. Small lime text on white is the most common drift mode; reject it.

**The Canonical Lime Rule.** The brand neon is `#c4ef17`. The current `variant.css` sets `--neon: #D4FF00`, which is a yellower, more luminous drift. Fix the token to `#c4ef17` so every implementation matches. Do not introduce additional lime variants; one lime, one hex, project-wide.

## 3. Typography

**Display & Body Font:** Inter (with system-ui, -apple-system, sans-serif fallback). Loaded weights: 400, 500, 600, 800, 900.

**Character:** Inter is the project's committed identity — single family, broad weight contrast (400 to 900), tight tracking at display sizes. The voice depends entirely on weight and case discipline. At 900 / uppercase / -0.03em it reads load-bearing; at 400 / lowercase / 1.5 line-height it reads like documentation. Pairing-by-contrast lives inside one family.

### Hierarchy

- **Display** (Inter 900, `clamp(3rem, 6vw, 6rem)`, lh 1.05, ls -0.03em, **uppercase**): Hero headlines and the footer's huge brand text. The "shout" tier. The footer goes further to `clamp(4rem, 10vw, 12rem)` in Highlighter Lime — the only place display type leaves uppercase discipline and grows past the 6rem ceiling, used once per page as a brand stamp.
- **Headline** (Inter 900, `clamp(2rem, 4vw, 4rem)`, lh 1.05, ls -0.03em): Section heads ("What we build.", "Where SME teams lose time and revenue."). Same density as Display, smaller scale.
- **Title** (Inter 800, 1.5rem, lh 1.2, ls -0.01em): Card titles, sub-section heads inside containers. Sentence case.
- **Body LG** (Inter 500, 1.25rem, lh 1.5, ls -0.01em, color Gray Dark): Lead paragraphs immediately under a Headline. Used to summarize before detail.
- **Body** (Inter 400, 1rem, lh 1.5, color Gray Dark): Standard paragraphs. Cap line length at 65–75ch.
- **Label** (Inter 800, 0.65rem, ls 0.05em, **uppercase**, color Gray Dark): The micro-kicker. Used for status chips, card-header process names ("Process 01: Ingestion"), the "For SME Owners" hero pill, footer column headers, badge text. Tracked-out tiny caps; carries the engineering-spec voice. Used as a named system, never as a default scaffold above every section.
- **Mono fragments** (system monospace, 0.7–0.75rem): Specifically for "process ID" affectation — the `cell-id` in blueprint cells, the `API_REQ` / `SUCCESS` chips in the hero card-2. Borrowed from terminal output; reserved for that exact register, never for body or label copy.
- **Hand-script accent** (Gloria Hallelujah, 18px, in SVG only): The hand-drawn doodle annotations ("You save 40hrs/wk!") inside the hero arrow SVG. One instance per page maximum. Voice, not decoration.

### Named Rules

**The Two-Weight Spread Rule.** Inter is used at 400, 500, 800, and 900. Never 300, never 700. The brand voice depends on a hard gap between body weight and display weight; mid-weights muddy it.

**The Uppercase Discipline Rule.** Display and Label tiers are uppercase. Headline, Title, Body-LG, and Body are sentence case. Do not mix: an all-caps Title is the saturated AI scaffold ("KEY FEATURES"); a sentence-case Display is timid.

**The 6rem Ceiling Rule.** Display headlines max at 6rem (`clamp(..., ..., 6rem)`). The only exception is the footer brand stamp at `clamp(4rem, 10vw, 12rem)` in Highlighter Lime — used exactly once per page, as a signature.

## 4. Elevation

This system is flat by default and **declarative**, not ambient. There are no soft drop-shadows anywhere — no `blur` greater than 0px, no `rgba(0,0,0,0.1)` haze under cards. Depth is communicated by hard offset blocks and by hard borders, not by simulated light. The metaphor is letterpress, not air: the shadow is a stamp left when a heavy thing pressed against the page.

The one exception is the **cursor-follower glow**, which uses a 30px-blurred radial gradient of Highlighter Lime — but that is ambient *atmosphere*, never structure. It lives behind content, not under it.

### Shadow Vocabulary

- **Block-stamp** (`box-shadow: 12px 12px 0 rgba(0,0,0,0.1)`): The default declarative shadow under UI cards in the hero cluster. Offset down-right, zero blur, faint near-black. Says "this thing has been placed here on purpose."
- **Block-stamp lifted** (`box-shadow: 16px 16px 0 rgba(0,0,0,0.15)`): The hover state of UI cards. Same hue, bigger offset, slightly more density. Reads as the same stamp pressed harder.
- **Block-stamp neon** (`box-shadow: 12px 12px 0 var(--press-black)` on card-3 / `15px 15px 0 var(--highlighter-lime)` on pricing-card.featured): When a card is the focus of attention, the offset shifts to a solid color — Press Black under a lime card, Highlighter Lime under a featured black pricing card. The shadow is now a signal flag.
- **Cursor-follower glow** (`background: radial-gradient(circle, rgba(196,239,23,0.35) 0%, rgba(196,239,23,0.1) 40%, transparent 70%); filter: blur(30px)`): Ambient atmosphere only. Lives at `z-index: 0`, behind all content. Must be suppressed under `prefers-reduced-motion: reduce`.

### Named Rules

**The Declarative Shadow Rule.** Offset, no blur. The shadow's job is to declare presence ("this is a solid object on a page"), not to simulate light falling on it. If a shadow has a `blur-radius` other than the cursor-follower's 30px, it is a drift; remove it.

**The Border IS the Card Rule.** A 2–3px Press Black border defines every card, pricing tier, and content container. The shadow is the second voice; the border is the first. A card with no border is incomplete, even if it has a shadow.

## 5. Components

Component voice: **tactile and declarative.** Every element looks load-bearing. The reader should feel they could grip the page and lift it. Hard borders, offset shadows, big type, pill CTAs — operator-grade, not consumer-fantasy.

### Buttons

- **Shape:** Pill (`border-radius: 999px`). Buttons are the only soft shape in the system; everything else is hard-cornered.
- **Padding:** `1rem 2rem` default; `0.8rem 1.5rem` at ≤600px.
- **Transition:** `all 0.2s cubic-bezier(0.16, 1, 0.3, 1)` (a quartic ease-out — the project's standard easing).
- **Solid** (`btn-solid`): Press Black bg, Paper White text, 2px Press Black border. Hover: transparent bg, Press Black text — the button inverts. Primary CTA across the site (audit, calculator, nav).
- **Outline** (`btn-outline`): Transparent bg, Press Black text, 2px Press Black border. Hover: Press Black bg, Paper White text. Secondary CTA, often paired next to a Solid as the "or" option.
- **Neon** (`btn-neon`): Highlighter Lime bg, Press Black text, 2px Highlighter Lime border. Hover: transparent bg, Highlighter Lime border and text. Reserved for the highest-emphasis CTA on a Press Black surface (footer, inverted hero).
- **Focus:** All buttons need a visible focus ring against both Paper White and Highlighter Lime surfaces. Current implementation relies on UA default; tighten to a 2px Press Black outline with 2px offset.

### Cards

The system distinguishes **declarative cards** (heroes, pricing) from **schematic cells** (blueprint grid). The former are heavy and bordered; the latter are wireframe-thin.

#### UI Card (hero cluster only)
- **Shape:** Square corners. 2px Press Black border. Padding `2rem`.
- **Variants:** Paper White (`card-1`, declarative default); Press Black with Paper White text (`card-2`, contrast); Highlighter Lime (`card-3`, focal point).
- **Rotation:** Each card rotates -4° / +3° / -2°. The arrangement is intentional asymmetry; do not align to grid.
- **Shadow:** Block-stamp 12px / 12px / 0; lime card gets Press Black solid shadow.
- **Hover:** Scale 1.02, translateY(-5px), shadow grows to 16px. Reads as the same card pressed harder.
- **Use:** Hero illustration only. Do not repeat the rotated-card cluster elsewhere on the site; it is a hero pattern, not a section grammar.

#### Pricing Card
- **Shape:** Square corners, `var(--border-heavy)` (3px Press Black border). Padding `3rem 2rem`.
- **Default:** Paper White bg, Press Black text, gray-light row separators on features.
- **Featured:** Press Black bg, Paper White text, Highlighter Lime offset shadow (15px / 15px / 0), `.tier-badge` chip in lime at top-right.
- **Hover:** `translateY(-10px)`. Read as a card lifting off the page.
- **Feature markers:** `→` glyph in Highlighter Lime as `::before` on every feature row. The arrow is part of the brand voice, not a generic bullet.

#### Blueprint Cell (process / how-it-works grids)
- **Shape:** Square corners, no card border. Separated from neighbors by 1px Gray Light internal rules; the outer grid is framed by 1px Press Black top/bottom rules.
- **Layout:** `repeat(4, 1fr)` desktop, `repeat(2, 1fr)` tablet, `1fr` mobile.
- **Padding:** `var(--space-lg) var(--space-md)`.
- **Cell ID:** Monospace 0.75rem in Gray Light, absolute top-right corner. The process number ("01", "02", …) earns its place because the cells genuinely are a sequence.
- **Icon box:** 48 × 48px Press Black square with `radius-sm` (4px), centered glyph in Paper White. The only place the small-radius is used outside form inputs.
- **Hover:** Soft `#fafafa` bg lift. No shadow — these are schematic, not declarative.

### Inputs (forms)
- **Style:** 2px Press Black border, square corners (4px max), Paper White bg. Inherit the typographic stack at Body size.
- **Label:** Visible above input, never placeholder-only. Use Label (uppercase 0.65rem) for field name + sentence-case helper text below.
- **Focus:** 2px Press Black outline with 2px offset, retaining the border underneath. No color shift on focus — the focus ring is the signal.
- **Error:** 2px solid Press Black border kept; error message in Press Black body text directly under the field, prefixed by a Press Black `!` or `→` glyph. Do NOT introduce a red — the Single Accent Rule forbids it. Use weight, glyph, and copy to communicate the state.
- **Disabled:** Reduced opacity (0.4), no `cursor: not-allowed` color shift to gray.

### Navigation

- **Layout:** Fixed top, 80px tall, full width, `rgba(255,255,255,0.9)` bg with `backdrop-filter: blur(10px)`. 1px Gray Light bottom border.
- **Logo:** Image at 48px, paired with "Autoflow Solutions" wordmark in Inter 900 1.5rem, letter-spacing -0.04em.
- **Links:** Inter 600 0.9rem, 2px transparent bottom border that transitions to `#c4ef17` on `.active`. Hover state can echo the active border at lower opacity, or stay subtle.
- **Mobile:** Hamburger trigger reveals slide-in menu. The CTA "Start Free AI Audit" stays visible as a button-solid even at narrow widths.
- **Language switcher:** Pill chip group (default → my → ms → uk). Active locale uses button-solid styling; others use button-outline.

### Marquee (production-floor band)

A horizontal scrolling band of brand-voice copy. The "conveyor belt" of the system.

- **Surface:** Highlighter Lime bg, Press Black text. 2px Press Black bottom border.
- **Type:** Inter 900 1.25rem, uppercase, letter-spacing 0.05em.
- **Motion:** `marquee 20s linear infinite` — `translateX(0)` → `translateX(-50%)`. The content string is duplicated so the loop is seamless.
- **Reduced motion:** Pause the animation and render a static row of the message instead. Do not gate visibility on the animation.
- **Use:** Once per page, between hero and the first content section. Never repeated as a section grammar.

### Footer

- **Surface:** Press Black bg, Paper White text. Padding `var(--space-xl) var(--space-md) var(--space-md)`.
- **Brand stamp:** The huge Highlighter Lime display headline at `clamp(4rem, 10vw, 12rem)`, line-height 0.8, letter-spacing -0.05em. The single place display type goes lime and breaks the 6rem ceiling.
- **Links:** 0.9rem in Gray Light → Paper White on hover. Column heads use the Label tier in Gray Dark.
- **Bottom row:** 0.85rem Gray Dark for legal/copyright metadata.

### Cursor-Follower Glow (signature ambient)

A 400px circle that follows the cursor: Highlighter Lime radial gradient, 30px blur, gentle pulse (4s outerPulse + 2s corePulse). It is the only "atmospheric" element in the system — purely mood, never structure. Lives at `z-index: 0`, behind content. **Must respect `prefers-reduced-motion: reduce`** by disabling the pulse and fading to a static, low-opacity dot, or hiding entirely on the homepage's `hero-right` only. Suppress on form-heavy pages (audit, ROI calculator) where it competes with input focus.

## 6. Do's and Don'ts

Concrete guardrails. Many of these encode PRODUCT.md's anti-references directly.

### Do:

- **Do** use `#c4ef17` as the canonical neon. Fix the `--neon: #D4FF00` token in `new_AS_website/src/styles/variant.css` to match.
- **Do** keep Highlighter Lime to ≤10% of any given screen. Its rarity is the point.
- **Do** use 2–3px Press Black borders on every card, pricing tier, and container. The border is the structure.
- **Do** use offset block shadows (`Npx Npx 0`) with zero blur. Letterpress logic.
- **Do** set display type uppercase, Inter 900, letter-spacing -0.03em. Stay at or under the 6rem ceiling everywhere except the footer brand stamp.
- **Do** keep Body line length 65–75ch. Above that the page reads like a wall.
- **Do** use the `→` glyph as the brand's bullet wherever a list calls for one. It is part of the voice.
- **Do** respect `prefers-reduced-motion: reduce` for the cursor-follower glow, the marquee, the hover lifts, and any future scroll-driven choreography. Render a static, content-visible alternative.
- **Do** ship real client names, real numbers, real quotes wherever possible. Specificity is the brand's competitive advantage.

### Don't:

- **Don't** introduce a second accent color. No "info blue," no "warning red," no secondary purple. The Single Accent Rule is the brand. Communicate states with weight, border, and glyph, not hue.
- **Don't** use Highlighter Lime as body text on Paper White. It fails WCAG AA at body sizes. Reserve it for large display type, solid button surfaces with Press Black text, or fills on Press Black surfaces.
- **Don't** soften a shadow. No `blur-radius`, no `rgba(0,0,0,0.05)` haze under cards. Offset block, zero blur, or nothing. The one exception is the cursor-follower glow.
- **Don't** ship a purple-pink gradient hero, a hero-metric template (giant number + tiny label + gradient accent), or a "transform your business" headline. That is the generic SaaS register PRODUCT.md explicitly rejects.
- **Don't** drift into enterprise corporate navy + cool gray, stock-photo-of-diverse-people-in-glass-office territory. Autoflow is a founder's automation team, not a vendor with a procurement portal.
- **Don't** translate the brand into cream / sand / paper-warm editorial minimalism. That is the 2026 saturated AI default. Paper White is `#FFFFFF`, not `oklch(95% 0.02 80)`.
- **Don't** repeat the rotated UI-card cluster outside the hero. It is a hero pattern, not a section grammar. Section-grammar repetition is the AI scaffold tell.
- **Don't** put a tiny tracked uppercase Label above every section as scaffolding. The Label tier is a named system (status chips, card headers, "For SME Owners"); using it as an eyebrow over every section is the saturated AI grammar PRODUCT.md rejects.
- **Don't** add another monospace usage. Mono is reserved for "process IDs" and `API_REQ` / `SUCCESS` style technical chips. Anywhere else it reads as developer-cosplay.
- **Don't** use hype copy: "revolutionary," "disruptive," "transform," "chatbot," "AI experiment," "pilot," "beta." Don't use jargon (LLM, RAG, transformer, embeddings) outside explicitly technical pages.
- **Don't** gate content visibility on a class-triggered reveal animation. The marquee and any scroll-driven motion must enhance an already-visible default — headless renderers and reduced-motion users must still see the content.
- **Don't** mix uppercase tiers: an all-caps Title is the saturated AI tell ("KEY FEATURES"); a sentence-case Display is timid. The Uppercase Discipline Rule is non-negotiable.
- **Don't** introduce mid-weights (300, 600 except for nav, 700) into Inter. The Two-Weight Spread Rule is what makes the voice carry.
