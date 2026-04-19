# Pruskowski Design System

**Brand:** Michael Pruskowski — Healthcare Brand Strategist  
**Website:** [4n3n2n1.com](https://4n3n2n1.com)  
**Contact:** mpruskowski@gmail.com | +1 (908) 917-0754  
**LinkedIn:** [linkedin.com/in/MpruskowskI](https://linkedin.com/in/MpruskowskI)

---

## About

Michael Pruskowski is a healthcare brand strategist with 20+ years of experience driving revenue, redefining categories, and building organizations that scale. His personal portfolio site (4n3n2n1.com) serves as a professional showcase for his capabilities, case studies, and thought leadership in omnichannel engagement and systems thinking.

**Core service areas:**
- Brand Narrative Leadership (translating clinical complexity into compelling stories)
- Integrated Strategy (HCP, patient, and caregiver audience alignment)
- Patient-Centered Design (rare disease ecosystems, journey mapping)
- Systems Thinking (multi-stakeholder complexity, portfolio optimization)

**Notable brand portfolio:** DUPIXENT, BEYFORTUS, NARCAN, ENTRESTO, AIMOVIG, KEYTRUDA, JARDIANCE, SPIRIVA

---

## Sources

| Source | Path / URL |
|--------|-----------|
| Codebase (local) | `4n3n2n1.com/` (mounted via File System Access API) |
| GitHub repo | `github.com/unseeng33k/4n3n2n1` (branch: master) |
| Live site | https://4n3n2n1.com |
| Hero image | `4n3n2n1.com/images/1773869886083.webp` |
| Resume doc | `4n3n2n1.com/documents/Michael-Pruskowski-2026.docx` |

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **First-person, confident, authoritative.** Michael speaks as "I" — direct ownership of experience and results.
- **Professional but not stiff.** Strategic language without jargon overload.
- **Action-oriented.** Copy drives toward outcomes: "drive revenue," "redefine categories," "move patients from awareness to action."
- **No emoji.** Zero emoji anywhere in the UI. Decoration comes from typography and layout, not iconography glyphs.
- **Minimal punctuation flourishes.** No exclamation marks. Periods and commas. Em dashes for rhythm.

### Casing & Typography Conventions
- **Headings:** Title case for major headings; sentence case for descriptive sub-heads.
- **Labels/tags:** ALL CAPS with wide letter-spacing (Space Mono).
- **Buttons:** ALL CAPS, monospace, compact.
- **No question marks in CTAs.** CTAs are statements or commands: "Let's Talk →" not "Want to talk?"

### Copy Examples
- Hero: *"Brands to Billions."* — short, punchy, aspirational
- Section intro: *"20+ years blending strategy, design, and technology to move patients from awareness to action."*
- Pillar label: *"01 / NARRATIVE"*
- Quote: *"The work isn't done when it ships. It's done when someone, somewhere, quietly trusts it."*
- CTA: *"Let's Talk →"* / *"Download Resume →"*

### Navigation
- Section labels use format: `01 — Capabilities`, `02 — Experience`, `03 — Thought Leadership`
- Right-aligned secondary label adds context: *"What I bring to the table"*

### Arrow Convention
- Links and CTAs end with ` →` (HTML `&rarr;`) to imply forward motion.

---

## VISUAL FOUNDATIONS

### Color System
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#fffafa` | Primary background (warm off-white, not pure white) |
| `--bg2` | `#F5F5F5` | Secondary / hover backgrounds |
| `--text` | `#111111` | Near-black text |
| `--muted` | `rgba(17,17,17,0.42)` | Body copy, descriptions |
| `--rule` | `rgba(17,17,17,0.13)` | All hairline borders |
| `--accent` (`--orange`) | `#D32F2F` | Brand red — section headers, icons, labels, CTA fills, italic accents |
| `--accent-hover` | `#E57373` | Lighter red for hover on filled buttons |

**Logo quad colors** (used only in the 4-square logo mark):  
Blue `#2563eb` · Red `#dc2626` · Yellow `#eab308` · Green `#16a34a`

**Color philosophy:** Near-monochromatic base (warm white + near-black) with a single bold red accent. No gradients in layout except the CTA band (dark photo overlay). No color fills on cards or sections — everything is white/off-white with ruled borders.

### Typography
| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / H1 | Cormorant Garamond | 300 | Serif; italic variant in red for accent words |
| H2 / Sections | Cormorant Garamond | 300 | `clamp(2rem, 3.5vw, 3.5rem)` |
| H3 / Cards | Cormorant Garamond | 300 | `1.7rem` |
| Body | Space Grotesk | 400–500 | `0.88rem`, `line-height: 1.75` |
| Labels / Buttons / Nav | Space Mono | 400/700 | `0.58–0.65rem`, `letter-spacing: 0.18–0.20em`, UPPERCASE |
| Decorative | Great Vibes | 400 | Rare use only |
| Icons | Material Symbols Outlined | wght 300, FILL 0 | Ligature-based icon font from Google |

**Type pairing rule:** Cormorant Garamond (light, elegant, serif) contrasts with Space Mono (tight, clinical, monospace) to create tension between warm/human and technical/precise — mirroring the brand's identity in healthcare strategy.

### Layout & Spacing
- **Full-width grid sections** with `1px solid var(--rule)` borders dividing all regions.
- **No card shadows.** Borders do the work of delineating elements.
- **No border-radius** on buttons, cards, or containers. Only exception: thought leadership article image uses `0.5rem`.
- **Nav height:** 52px, fixed, with `border-bottom`.
- **Section headers:** Full-width `--accent` red bands with white monospace text.
- **Grid system:** 1/2/3/4-column CSS Grid. No bootstrap or utility frameworks.
- **Padding standard:** `2rem` horizontal gutter throughout.

### Backgrounds
- **Primary:** `#fffafa` (slightly warm off-white)
- **Sections:** Same background — divisions made via ruled borders only
- **CTA band:** Full-bleed photo with `rgba(0,0,0,0.6)` overlay + brand red fallback
- **Quote section:** Very subtle `rgba(0,0,0,0.03)` tint
- **No textures, patterns, or gradients** in standard UI

### Animation & Motion
- **Reveal animation:** Elements enter with `opacity: 0 → 1` and `translateY(16px → 0)` over `0.6s ease`. Triggered by IntersectionObserver.
- **Staggered delays:** `.d1` 70ms, `.d2` 140ms, `.d3` 210ms, `.d4` 280ms
- **Marquee:** Two scrolling text strips (brand names + capability tags) via CSS `animation: marquee`.
- **Quote parallax:** Scale `0.7 → 1 → 0.7` + opacity `0.2 → 1 → 0.2` as quote passes through viewport center.
- **Nav menu:** `slideDown` keyframe animation on open.
- **Easing:** Standard `ease` — no spring or bounce physics.

### Hover & Interaction States
- **Links/pills:** `color: var(--text)` (from muted)
- **Buttons (outline):** `background: var(--bg2)`
- **Buttons (fill):** `background: var(--accent-hover)` = lighter red
- **Pillar/service cards:** `background: rgba(255,255,255,0.4)` (subtle brightening)
- **Social icons:** `opacity: 0.8`
- **Pillar links:** `border-bottom: 1px solid var(--orange)` appears on hover + gap increases
- **Client names:** Color brightens from `rgba(17,17,17,0.13)` to `rgba(17,17,17,0.35)`
- **No scale transforms** on hover (except quote parallax scroll effect)

### Borders & Rules
- Universal `1px solid var(--rule)` separates all sections, columns, rows.
- Borders are structural — they replace shadows, rounded cards, and background fills.
- `border-bottom` on nav; `border-top` on footer; sectional borders throughout body.

### Buttons
- **Outline:** `border: 1px solid var(--text)`, transparent bg, monospace uppercase
- **Fill (primary):** Red background `var(--accent)`, white text — used for primary CTAs
- **White outline:** Transparent, `rgba(255,255,255,0.4)` border — used on dark CTA band
- **Shape:** Zero border-radius. Square corners always.

### Imagery
- **Hero image:** Editorial/professional photo (LinkedIn article cover image)
- **CTA band:** Unsplash photo (team meeting) with strong dark overlay
- **Color treatment:** Images are natural/warm — no B&W, no grain filters applied in CSS
- **No illustrations.** No hand-drawn elements, SVG illustrations, or decorative graphics.

### Iconography
- **Font:** Material Symbols Outlined (Google CDN)
- **Style:** `wght 300`, `FILL 0` — outline/thin style, never filled
- **Size:** 22px standard; 18px small variant
- **Color:** Always `var(--accent)` red
- **Usage:** Pillar cards and service cards only — one icon per card, displayed as block above label
- **No PNG icons.** No custom SVG icons (aside from the nav logo mark and social icons embedded inline).

### Logo
- **Mark:** 2×2 grid of colored squares (10×10px SVG) — Blue, Red, Yellow, Green quadrants (Mondrian-inspired)
- **Wordmark:** "Michael Pruskowski" in Space Mono 700, 0.7rem, uppercase, letter-spacing 0.12em
- **Footer variant:** Solid black square replaces the quad-color mark
- **No standalone logomark file exists** — it is generated as inline SVG.

---

## ICONOGRAPHY

**System:** Google Material Symbols Outlined  
**CDN:** `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`  
**Usage:** Ligature-based — element text content is the icon name (e.g. `<span class="icon">legend_toggle</span>`)  
**Variation settings:** `'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24`

Icons used in site:
- `legend_toggle` — Brand Narrative pillar
- `integration_instructions` — Integrated Strategy pillar
- `person_check` — Patient-Centered Design pillar
- `account_tree` — Systems Thinking pillar
- `trending_up` — Growth / Drive Revenue service
- `monitor_heart` — Margins / Maximize ROI service
- `auto_awesome` — Positioning / Radically Differentiate service
- `groups` — Scale / Build Organization service

**Social icons:** Inline SVG for X (Twitter), LinkedIn, GitHub — black circle bg, white icon  
**Emoji:** Never used.  
**Unicode chars as icons:** Arrow `→` used in CTAs and links only.

---

## FILES

| File/Folder | Description |
|-------------|-------------|
| `README.md` | This file — design system overview |
| `colors_and_type.css` | CSS custom properties for all color and type tokens |
| `assets/hero-image.webp` | Hero/article image from portfolio |
| `assets/hero-image.jpeg` | JPEG fallback of hero image |
| `preview/` | Design system card previews (registered in Design System tab) |
| `ui_kits/portfolio/` | UI kit — portfolio website recreation |
| `SKILL.md` | Agent skill definition file |
