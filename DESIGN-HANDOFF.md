# NevTech AI — Website Design Handoff / Design Spec

> **Purpose:** Give a designer everything they need to understand the *current* website before a redesign. This documents the visual system, the components, and every page on the site — plus the inconsistencies we should resolve.
>
> **Brand:** NevTech AI — an AI implementation partner based in **Indianapolis, Indiana** (nevtech.ai). Sells/explains AI voice agents, AI automation, custom AI development, cellular/telecom consulting, and internet/IoT connectivity for businesses.

---

## 1. Project Snapshot

| Item | Detail |
|---|---|
| Product type | Single-page-application marketing site (React + Vite + Tailwind CSS) |
| Language | English |
| Audience | Local Indianapolis + Indiana businesses (logistics, manufacturing, healthcare, legal, home services, construction) |
| Tone | Confident, practical, local & approachable. "We pick up the phone." |
| Domain | nevtech.ai |
| Physical base | Indianapolis, IN · USA |

---

## 2. Current Design Intent (what the site is "trying" to be)

A **light, airy, teal-led corporate-tech look** built on a small set of semantic color roles:

- **Near-white, cool-tinted canvas** with very soft layered panels (no heavy gray).
- **Teal = the brand/conversion color** (buttons, links, highlights, active states).
- **Charcoal = text** (strong headings, readable body).
- **Muted warm-gray** for quiet supporting elements/tags.
- Rounded, soft cards, generous whitespace, gentle floating-keyframe animations (fade/slide up on scroll).

The header starts transparent over the hero and becomes a **frosted white bar** on scroll — a classic marketing pattern.

---

## 3. Color System

The site uses a **5-role "StyleSystem" scale** (each role has 50 → 950 steps). This is what the redesign should keep — it's clean and easy to re-theme.

> ⚠️ Hex values below are **approximate conversions** of the source OKLCH tokens, included to give the designer an intuitive read. Use the role/scale (e.g. `primary-500`) as the source of truth, not exact hex.

### 3.1 Brand anchors (the four you'll reach for most)

| Role / token | Approx. color | Role in the UI |
|---|---|---|
| `background-50` | `#F9FAFC` cool near-white | Page canvas, default large backgrounds |
| `primary-500` | `#1BA6A0` teal | Main CTA, brand moments, links, active states |
| `accent-500` | `#1E807B` deep teal | Secondary theme moments (one accent per section) |
| `secondary-500` | `#9A9588` warm gray | Supporting controls, filters, tags, metadata |

### 3.2 Supporting steps you'll actually see

| Token | Approx. color | Use |
|---|---|---|
| `primary-100` | `#E0F3F1` pale teal | Icon bubbles, pill badges, eyebrow fills |
| `primary-600` | `#0E8F8A` deeper teal | Button hover |
| `primary-300` | `#7CD1CC` light teal | Charts / progress fill |
| `background-100` | `#EFEFF2` light cool panel | Cards, mini-tile panels inside mockups |
| `background-200` | `#E4E6EA` cool line | Borders, dividers |
| `foreground-600` | `#6E7077` mid gray | Muted/secondary text |
| `foreground-700` | `#5A5C63` | Supporting body text |
| `foreground-900` | `#2E3036` charcoal | Main body text |
| `foreground-950` | `#191B21` near-black | Headings, strongest text |
| `secondary-200` | `#E2DFD6` pale warm gray | Small inactive dots |

### 3.3 ⚠️ Inconsistency you MUST flag to the designer (and fix in the redesign)

Some sections **do not use the teal system above** — they use a separate, older palette of **hard black + gray-50 + plain white**. This is the single biggest visual problem in the current build:

| Old palette (inconsistent) | Where it appears |
|---|---|
| `bg-gray-50` section backgrounds | e.g. the home **ServicesOverview** section |
| Pure **black** icon tiles (`bg-black`), black headings, `text-black` links | Same ServicesOverview section and the base `Button` styles |
| Tailwind `teal-500 / gray-600` hardcodes | The reusable `Button.tsx` component |
| `Georgia` (serif) headings vs. the rest | Headings render in serif Georgia |

**Net effect today:** the homepage alternates between *refined teal-on-light* (Hero, Solution Steps, Testimonials) and *heavy black-on-gray* (Services overview), which makes the site feel like two different brands bolted together. The redesign should unify on the teal StyleSystem everywhere.

---

## 4. Typography

Two type families are in play — and this is *also* a point to decide on in the redesign.

| Role | Family | Usage | Notes |
|---|---|---|---|
| **Headings** | `Georgia`, Times New Roman (serif) | h1–h6, section titles | Loaded via CSS variable `--font-heading` |
| **Body / labels** | `Inter` (sans-serif) | paragraphs, nav, buttons, forms | Loaded via Google Fonts, weights 300–700; `--font-body` / `--font-label` |
| (Loaded but unused) | `Pacifico` (script) | — | Declared in the font import; appears unused — safe to drop or repurpose |

### Size guidance observed in markup

| Element | Rough scale |
|---|---|
| Hero `h1` | `text-4xl` → `text-6xl` (mobile → desktop), bold |
| Section `h2` | `text-4xl`–`text-5xl` on landing blocks |
| Card `h3` | `text-xl`–`text-2xl` |
| Body copy | `text-base`–`text-lg`, relaxed line-height |
| Meta / captions / labels | `text-xs`–`text-sm` |
| Eyebrow labels | `text-xs`, uppercase, letter-spaced, teal |

---

## 5. Shape, Spacing & Motion (design tokens)

| Concept | Value | Notes |
|---|---|---|
| Card radius | `rounded-lg` / `rounded-xl` / `rounded-2xl` | Soft, friendly |
| Buttons / inputs | `rounded-lg` (6–8px feel) | |
| Avatars / pills / icons-in-circles | `rounded-full` | |
| Container | max-width container, `px-4 sm:px-6 lg:px-8`, responsive | Content never exceeds a comfortable reading column |
| Vertical rhythm | Sections `py-16`–`py-24` | Generous breathing room |
| Animation library | fade-in-up, fade-in, scale-in, marquee | 0.5–0.7s ease-out; hover pauses marquee |
| Icon library | Remix Icon (linear) + FontAwesome | Both loaded by CDN |

### Reusable class "recipes" (so the designer knows the building blocks)

- **Primary button:** teal fill, light text, semibold, `rounded-lg`, hover → deeper teal. (`bg-primary-500 text-background-50 … hover:bg-primary-600`)
- **Outline button:** 2px charcoal border, charcoal text; hover inverts to charcoal fill.
- **Ghost / link button:** plain text, subtle hover pill.
- **Eyebrow pill:** pale-teal capsule with teal uppercase letter-spaced text (`bg-primary-100 text-primary-600`).
- **Check row:** small teal check circle preceding benefit text (`text-primary-700`).
- **Step progress bar:** stacked 1px-tall rounded segments — filled segments teal, unfilled `background-200`.

---

## 6. Site-wide Components Inventory

### 6.1 Global Header (fixed)
- **Behavior:** transparent over the hero → on scroll (>20px) becomes frosted white bar (`bg-white/95` + blur + hairline border + subtle shadow).
- **Logo:** rounded teal `N` tile + wordmark **"NevTech AI"** (NevTech bold, "AI" in lighter gray).
- **Desktop nav links:** Home · Services · Rapid MVP · Nova AI · **AI Projects ▾** (flyout) · Fractional CAIO · Products · About · Blog.
- **Flyout menus:** Services and AI Projects open elegant dropdown panels (icon + label + description rows) on hover/click; closes on outside click.
- **Right actions:** "Contact" (ghost) + "Get Started" (teal pill).
- **Mobile:** hamburger → full vertical menu panel.

### 6.2 Global Footer
- **Background:** light `background-100` panel with a top hairline (NOT black — follows brand).
- **Structure:** 5-column grid = Brand (logo + blurb + socials) · Product · Services · Company · (bottom bar).
- **Social icons:** LinkedIn (live link), X/Twitter, Facebook (icons currently `#` placeholders — no real URLs yet).
- **Bottom bar:** © year + Privacy / Terms / Security links.

### 6.3 Buttons
- Two sources exist: semantic classes (`.btn-primary`, `.btn-outline`, `.btn-ghost` — teal system) **and** a `Button.tsx` component that hardcodes old `teal-500/gray-600` Tailwind colors. Redesign should consolidate onto one.

### 6.4 Blog article body (`blog-prose`)
Fully styled rich-text recipe: serif `h2/h3`, relaxed 1.85 line-height body, teal underlined links, disc/decimal lists, teal-accented blockquotes, code blocks, embedded images rounded.

---

## 7. Page Inventory

The site is a SPA with **~45 routes**. Grouped by role:

### Core business pages
| Route | Purpose |
|---|---|
| `/` | Home (see section map below) |
| `/services` | Services overview |
| `/about` | About |
| `/contact` | Contact |
| `/pricing` | Pricing |
| `/faq` | FAQ |
| `/use-cases` | Use cases |
| `/blog` + `/blog/:slug` | Blog index + article template |
| `/products` (also aliased `/case-studies`) | Products / Nova + VMS |

### Product / offer landing pages
`/rapid-mvp` · `/receptionist` (Nova AI) · `/fractional-caio` · `/ai-projects` · `/ai-lead-generation` · `/get-leads` · `/tmobile-business`

### Local SEO landing pages (Indiana / Indianapolis keyword pages)
`/ai-indianapolis` · `/ai-services-indiana` · `/ai-consulting-indianapolis` · `/ai-consulting-indiana` · `/ai-automation-indianapolis` · `/ai-automation-indiana` · `/ai-voice-agents-indiana` · `/ai-agent-development-indiana` · `/custom-ai-development-indiana` · `/best-ai-companies-indianapolis` · `/ai-law-firms-indiana` · `/ai-healthcare-indiana` · `/ai-manufacturing-indiana` · `/ai-logistics-indiana` · `/ai-home-services-indiana` · `/ai-construction-indiana` · `/ai-automation-agencies`

> These local-SEO pages mostly share a **single reusable landing template** (`SeoLandingPage`) — one design system drives ~17 pages.

### Editorial / content pages
`/ai-automation-agencies` · `/data-and-ai-consultant-indianapolis` · `/how-we-build-software-now` · `/nevtech-ai-what-a-nevada-ai-receptionist-does-after-hours` · article subpages under `/blog/…`

### Legal, forms & support
`/terms` · `/privacy` · `/compliance` · `/intake-form` · `/support` · (custom 404)

---

## 8. Homepage Section Map

The homepage is built from discrete stacked sections (great reference for the redesign's section library):

1. **Hero** — full-width gradient wash (near-white → pale teal), decorative blurred-teal glows, **two-column**: left = eyebrow + big headline (charcoal with a teal highlight) + subcopy + dual CTAs + trust checklist ("No credit card / No sales call / 15-min assessment"); right = a **built-in-browser dashboard mockup** with floating cards, a 95% retention ring, mini stat tiles, a step tracker, and a savings bar chart. This mockup is pure HTML/CSS — no image.
2. **Logo strip / trust band**
3. **Problem section** — the "adoption gap"
4. **Stats band** — metric counters
5. **Services overview (AI workbench)** — interactive service tiles
6. **ServicesOverview** (⚠️ the *inconsistent* black-on-gray 6-card block: AI Voice Agents, Cellular Consulting, Business Internet, IoT, Website Chat Agents, Workflow Automation)
7. **Benefits**
8. **Advisory** (Fractional CAIO teaser)
9. **Solution steps** (Discover → Build → Deploy)
10. **Testimonials**
11. **CTA band** + **Final CTA**

---

## 9. Redesign Notes & Recommended Decisions

These are the things your designer should nail down:

1. **Pick ONE visual system.** Unify the teal StyleSystem and eliminate the leftover black/gray blocks (esp. home ServicesOverview + the base Button).
2. **Typography identity.** Decide: serif (Georgia) headings vs. a modern sans heading. The current serif/Inter combo is intentional-ish, but it should be a conscious brand choice (and a distinctive Google font is available to swap in).
3. **Confirm the logo.** Site currently uses an "N" tile + wordmark; a proper logo asset (the geometric-teal "N" mark exists as a favicon/OG asset) should be formalized.
4. **Deepen the palette.** The scale is teal + cool-gray + warm-gray + charcoal. Consider whether accent needs more distinct usage so sections don't read as single-color.
5. **Fix dead links.** Footer social X/Facebook point to `#`; route `/case-studies` aliases to Products rather than being its own page.
6. **Local-SEO template scalability.** ~17 keyword pages share one layout; good candidate for a refreshed, higher-converting template design.
7. **Design the dashboard mockup asset** properly if the hero concept (browser dashboard + floating stat cards) is to be kept.

---

*Generated 2026-09-06 as a handoff to a designer for the NevTech AI redesign. Not for public distribution.*