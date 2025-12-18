# Banshee.chat Landing Page Concept

## Tagline Options

**Primary:** "Only banshees should be screaming"
**Supporting:** Customer support that doesn't break the bank

**Alt options:**
- "Customer chat without the sticker shock"
- "AI-powered support. Startup-friendly pricing."
- "Talk to customers, not accountants"

## Target Audience

- Solo founders
- Small startups (seed/Series A)
- SMBs tired of Intercom/Zendesk pricing

## Key Messaging

### The Problem (Intercom dig)
Enterprise chat tools charge enterprise prices. You shouldn't need a $500/month tool just to talk to your customers.

### The Solution
Banshee.chat: Lightweight, AI-enhanced customer messaging built for startups and small teams.

### Value Props

1. **Lightweight** — Chat widget under 30KB. Won't slow your site.
2. **AI Translation** — Talk to customers in any language, automatically.
3. **Team Inbox** — Real-time collaboration for your whole team.
4. **Affordable** — Free tier that's actually useful. Paid plans that don't require VC funding.

## Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  NAV: Logo                              [Get Early Access]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO                                                       │
│  ────                                                       │
│  "Only banshees should be screaming"                        │
│                                                             │
│  Customer support shouldn't break the bank.                 │
│  AI-powered chat for startups and small teams.              │
│                                                             │
│  [Get Early Access →]                                       │
│                                                             │
│  ┌─────────────────────────────────────┐                    │
│  │     [Hero illustration/mockup]      │                    │
│  └─────────────────────────────────────┘                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  VALUE PROPS (3-4 cards)                                    │
│  ───────────────────────                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │ Feather  │  │ Globe    │  │ Users    │  │ Wallet   │     │
│  │ Light    │  │ AI Trans │  │ Team     │  │ Afford-  │     │
│  │ weight   │  │ lation   │  │ Inbox    │  │ able     │     │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PRICING TEASER                                             │
│  ──────────────                                             │
│  "Free forever tier. Solo plan at $19/mo."                  │
│  "No per-seat pricing games."                               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FINAL CTA                                                  │
│  ─────────                                                  │
│  "Join the early access list"                               │
│  [Get Early Access →]                                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  FOOTER: © 2025 Banshee.chat                                │
└─────────────────────────────────────────────────────────────┘
```

## Design Direction

- **Dark theme** (matches the app, "banshee" vibe)
- **Accent color:** Electric purple or ghostly teal
- **Typography:** Clean sans-serif, bold headlines
- **Vibe:** Modern SaaS but with personality (not corporate)

---

## AI Image Generation Prompts

### Hero Illustration Option 1: Abstract Banshee

```
A minimalist, stylized banshee figure made of flowing digital particles
and chat bubbles, dark purple and teal gradient background, ethereal
and friendly rather than scary, modern SaaS aesthetic, the banshee
appears to be peacefully helping/guiding rather than screaming,
subtle glow effects, clean vector art style, 16:9 aspect ratio
```

### Hero Illustration Option 2: Chat Widget Mockup Scene

```
Isometric illustration of a modern laptop displaying a clean chat
widget interface, floating chat bubbles with friendly messages around
it, dark mode color scheme with purple and teal accents, small friendly
ghost/spirit characters helping deliver messages, minimalist style,
soft shadows, tech startup aesthetic, white space, 16:9 aspect ratio
```

### Hero Illustration Option 3: "Screaming vs Calm" Contrast

```
Split composition illustration: left side shows a stressed founder
surrounded by expensive price tags and complex dashboards (muted,
chaotic), right side shows a calm founder with a simple clean chat
interface and happy customers (vibrant, organized), dark background
with purple gradient, modern flat illustration style, SaaS marketing
aesthetic, 16:9 aspect ratio
```

### Background Pattern/Texture

```
Seamless dark purple abstract pattern with subtle sound wave ripples
and small floating chat bubble shapes, very low contrast, suitable
for website background, moody but not overwhelming, digital/tech
aesthetic, tileable texture
```

### Icon Set Style Guide

```
Minimal line icons in a consistent style: feather (lightweight),
globe with speech bubble (translation), team of people with chat
(collaboration), wallet with heart (affordable), dark background
with teal/purple gradient strokes, 2px line weight, rounded corners,
modern SaaS icon style, set of 4 icons arranged in a row
```

### Mascot Concept (Optional)

```
Cute friendly ghost/banshee mascot character for a chat software
company, simple geometric shapes, wearing tiny headphones, holding
a chat bubble, purple and teal color palette, kawaii-inspired but
professional enough for B2B SaaS, transparent background, multiple
expressions: happy, thinking, waving
```

---

## Copy Snippets

### Hero
**Headline:** Only banshees should be screaming
**Subhead:** Customer support shouldn't break the bank. AI-powered chat for startups and small teams.
**CTA:** Get Early Access

### Value Props

**Lightweight**
Your chat widget shouldn't outweigh your landing page. Ours is under 30KB.

**AI Translation**
Talk to customers in any language. We translate both ways, automatically.

**Team Inbox**
Real-time collaboration. See who's typing, assign conversations, stay in sync.

**Actually Affordable**
Free tier that works. Paid plans starting at $19/mo. No enterprise sales calls required.

### Pricing Teaser
**Headline:** Pricing that doesn't require a funding round
**Body:** Free forever tier with 100 conversations/month. Solo plan at $19/mo for growing teams. No per-seat games.

### Final CTA
**Headline:** Ready to stop screaming at your support bill?
**CTA:** Get Early Access

---

## Technical Notes

- CTA buttons link to: `https://app.banshee.chat/early-access` (or whatever the Rails app domain is)
- Stack: Astro, Tailwind 4, deployed via Netlify
- No dynamic content needed for launch
