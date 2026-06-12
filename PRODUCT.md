# Product

## Register

brand

## Users

**Who:** SME owners, founders, and operations managers running 5–100 person businesses across hospitality, professional services (accounting, legal, consultancy, wellness), security, ecommerce, and logistics. Early traction in Malaysia, the UK, Italy, and Colombia.

**Context when using:** A founder reading the site between calls, late at night, after another week of doing $15/hr admin work themselves. They're skeptical of AI hype, burned by a no-code automation that broke, or paying a VA who still misses leads at 11pm. They want proof, not pitch.

**Jobs to be done:**
1. "Stop losing leads because nobody answers after hours."
2. "Get my team out of spreadsheets and into the actual work."
3. "Make my CRM, email, and calendar talk to each other without manual data entry."
4. "Answer calls and book appointments even when I'm fully booked."
5. "Give me the bandwidth of a bigger team without the hiring cost."

**Decision-makers:** Owner/CEO (primary), Operations Manager (secondary). Both want to evaluate in minutes, not weeks. The site has to qualify itself before they'll book the Friction Audit.

## Product Purpose

Autoflow Solutions is an AI automation agency that ships custom, production-grade workflows for SMEs — replacing repetitive manual work (lead capture, phone answering, invoice processing, CRM data entry) with autonomous systems integrated into the client's existing stack. Done-for-you, not DIY.

The marketing site exists to convert qualified SME owners into Friction Audit calls. Success on this surface looks like:
- Visitors self-qualifying via specific outcome proof (40% fewer no-shows; 20+ hours/week saved; <3s response)
- Free tools (AI Self Audit, ROI Calculator) capturing top-of-funnel leads with low commitment
- Service pages that read as engineering specs, not marketing copy — earning the trust of skeptical operators
- The site itself functioning as proof of capability: fast, sharp, automated-feeling

## Brand Personality

**Voice:** Direct, confident, no-BS. Talks to founders as peers, not prospects.

**Tone:** Technical enough to be credible, accessible enough for non-technical owners. Short, punchy headlines. Clear value statements. Numbers and outcomes over adjectives.

**3-word personality:** Sharp · Pragmatic · Anti-hype.

**Emotional goal:** The reader feels recognized ("they get my problem"), then competent ("they know how to fix it"), then in control ("I own this, no lock-in"). Confidence without arrogance; expertise without jargon.

**Adjectives the brand wears well:** Sharp, efficient, trustworthy, founder-led, anti-hype, results-obsessed, slightly rebellious.

## Anti-references

The site must explicitly NOT look or read like these failure modes:

**Generic SaaS gradient hero.** Purple-pink blob gradients, vague "AI-powered platform" headlines, hero-metric scaffolding (giant number + tiny label + gradient accent). Signals "no point of view." Autoflow's whole positioning is the opposite: specific engines, specific outcomes, specific clients named.

**Enterprise corporate (IBM/SAP register).** Navy + cool gray, stock photos of diverse people in glass offices, "transform your business" copy. Too suit-and-tie for an SME founder reading at 11pm. Autoflow is the founder's automation team, not a vendor with a procurement portal.

**Cream/sand editorial minimal.** Warm-paper backgrounds, big serif headings, magazine-style whitespace. The 2026 saturated AI default. Would dilute the neon-and-black neo-brutalist identity already shipped and read as another "tasteful AI tool" rather than a sharp operator's agency.

**Hype language across the board.** Words to avoid in copy: "revolutionary," "disruptive," "transform," "chatbot" (undersells the systems), "AI experiment," "pilot," "beta." Avoid jargon — LLM, RAG, transformer, embeddings — unless the page is explicitly aimed at technical buyers.

## Design Principles

1. **Show, don't tell.** Every page proves the claim. If the headline says "20+ hrs/week saved," a real client name appears near it. If the section says "production-grade," the page itself loads instantly. Strategic implication: never write "powerful AI" — name what it does and what it returned.

2. **Practice what you preach.** Autoflow sells automation; the site must feel automated — fast, sharp, low-friction. Hesitation, dead links, slow forms, or vague flows would contradict the pitch. Strategic implication: site performance and form UX are brand decisions, not engineering tickets.

3. **Founders talking to founders.** Every line of copy assumes the reader is a busy operator, not a marketing target. Peer-tone. Skip the warm-up. Lead with the specific problem and the specific outcome. Strategic implication: no generic value-prop sections; every hero, sub-head, and CTA is grounded in a job-to-be-done.

4. **Anti-hype credibility.** Sharp typography, neon-on-black confidence, hard edges — the look of a team that ships, not a team that pitches. Avoid the AI-aesthetic clichés (glow orbs, particle networks, gradient brain icons). Strategic implication: visual choices lean operator-grade, not consumer-fantasy.

5. **Ownership is the closing argument.** "You own it" is the line that lands with skeptical founders. The site should reinforce ownership at every objection point: in pricing, in the FAQ, in the proof points. Strategic implication: never hide pricing, never gate the core proof, never imply lock-in.

## Accessibility & Inclusion

**Target:** WCAG 2.2 AA across the public marketing site. Required for the UK market (EAA, June 2025) and a baseline of professional credibility for SME buyers in regulated verticals (healthcare, legal, accounting).

**Specific commitments:**
- Body text contrast ≥4.5:1 against any background; large text ≥3:1. The neon-yellow `#D4FF00` brand color does **not** meet AA against white at body sizes — it is reserved for large display type, solid button surfaces (with near-black text), and decorative accents, never small body copy on white.
- All flows keyboard-navigable end-to-end (forms, navigation, the ROI calculator, the AI Self Audit tool, language switcher).
- `prefers-reduced-motion: reduce` honored everywhere. The cursor-follower glow, card hover tilts, and any scroll-driven motion need reduced alternatives (crossfade or instant).
- Form labels visible (not placeholder-only), error messages tied to inputs with `aria-describedby`, focus states clearly visible against both white and neon surfaces.
- Multilingual support already present (`/ms`, `/my`, `/uk`) — `lang` attribute set per locale; future content needs the same discipline.

**Known constraints:** The brand-defining neon-yellow is low-contrast. Treat it as a *spotlight* color — high-impact, narrow use — and use near-black (`#050505`) for all primary text and most surfaces.
