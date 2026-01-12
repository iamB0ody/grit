# Data Model: Rebuild GRIT Landing Page

**Created**: 2026-01-12
**Updated**: 2026-01-13
**Purpose**: Define content structure and asset organization for static landing page

## Overview

This is a static website with no backend database. The "data model" defines:
1. Content structure (sections and their text)
2. Asset organization (unDraw SVG illustrations)
3. Navigation structure (links and anchors)

---

## Section Entity

Each content section follows a consistent structure:

```typescript
interface Section {
  id: string;                    // URL anchor (e.g., "about-us")
  title: string;                 // Section heading (e.g., "About Us")
  content: string[];             // Array of paragraphs
  bulletList?: BulletList;       // Optional bullet list
  illustration: UnDrawIllustration;
  layout: 'text-left' | 'text-right' | 'centered';
  order: number;                 // Display order (1-15)
  showInNav: boolean;            // Whether to include in header navigation
}

interface BulletList {
  heading?: string;              // Optional list heading (e.g., "Our services include:")
  items: string[];               // Bullet point items
}
```

### Section Instances

| Order | ID | Title | Layout | Has Bullets | In Nav |
|-------|-----|-------|--------|-------------|--------|
| 1 | hero | GRIT Marketing Solutions | centered | No | No |
| 2 | who-we-are | Who We Are | text-right | No | Yes |
| 3 | about-us | About Us | text-left | No | Yes |
| 4 | creative-philosophy | Our Creative Philosophy | text-right | No | Yes |
| 5 | vision-mission | Vision & Mission | text-left | No | Yes |
| 6 | agility | We Belive in Agitlity | text-right | No | Yes |
| 7 | services | Our Services | centered | Yes (5 items) | Yes |
| 8 | medical-marketing | Medical Marketing | text-right | Yes (13 items) | Yes |
| 9 | digital-marketing | Digital Marketing | text-left | Yes (9 items) | Yes |
| 10 | multimedia-pr | Multimedia & PR | text-right | Yes (6 items) | Yes |
| 11 | creative-production | Creative & Production Services | text-left | Yes (5 items) | Yes |
| 12 | process | Our Process | text-right | Yes (5 steps) | Yes |
| 13 | why-choose-us | Why Clients Choose Us | text-left | Yes (4 items) | Yes |
| 14 | contact | Contact Information | text-right | No | Yes |
| 15 | thank-you | Thank You | centered | No | No |

---

## UnDraw Illustration Entity

```typescript
interface UnDrawIllustration {
  filename: string;              // e.g., "about.svg"
  searchKeywords: string[];      // Keywords used to find on unDraw.co
  altText: string;               // Accessibility description
  accentColor: string;           // Recolored accent (always #a1cd40)
  style: 'corporate' | 'tech';   // Must be professional, not cartoonish
}
```

### Illustration Inventory

| Filename | Section ID | Search Keywords | Alt Text |
|----------|------------|-----------------|----------|
| hero.svg | hero | marketing, growth, strategy | Marketing growth and strategy illustration |
| who-we-are.svg | who-we-are | team, collaboration | Team collaboration illustration |
| about.svg | about-us | analytics, planning | Business analytics and planning illustration |
| philosophy.svg | creative-philosophy | creativity, innovation, ideas | Creative thinking and innovation illustration |
| vision.svg | vision-mission | target, goals, roadmap | Goals and target achievement illustration |
| agility.svg | agility | sprint, iteration, agile | Agile development and sprint illustration |
| services.svg | services | services, solutions | Business services and solutions illustration |
| medical.svg | medical-marketing | healthcare, medicine, doctor | Healthcare and medical illustration |
| digital.svg | digital-marketing | social media, SEO, analytics | Digital marketing and social media illustration |
| multimedia.svg | multimedia-pr | video, camera, media | Video production and multimedia illustration |
| production.svg | creative-production | design, studio, production | Design and creative production illustration |
| process.svg | process | workflow, steps, process | Business process and workflow illustration |
| why.svg | why-choose-us | trust, success, handshake | Trust and business success illustration |
| contact.svg | contact | contact, email, location | Contact information and communication illustration |

### SVG Recoloring Rules

1. **Primary accent replacement**: Replace unDraw default color (`#6c63ff`) with GRIT green (`#a1cd40`)
2. **Preserve neutrals**: Keep grays, blacks, whites unchanged
3. **Single accent**: Only one accent color per illustration
4. **Validate XML**: Ensure SVG remains valid after color replacement

---

## Navigation Item Entity

```typescript
interface NavigationItem {
  label: string;                 // Display text (shortened for nav)
  href: string;                  // Anchor link (e.g., "#about-us")
  sectionId: string;             // Corresponding section ID
}
```

### Navigation Structure (Per FR-028)

| Label | Href | Section ID |
|-------|------|------------|
| Who We Are | #who-we-are | who-we-are |
| About | #about-us | about-us |
| Philosophy | #creative-philosophy | creative-philosophy |
| Vision | #vision-mission | vision-mission |
| Agility | #agility | agility |
| Services | #services | services |
| Medical | #medical-marketing | medical-marketing |
| Digital | #digital-marketing | digital-marketing |
| Multimedia | #multimedia-pr | multimedia-pr |
| Production | #creative-production | creative-production |
| Process | #process | process |
| Why Us | #why-choose-us | why-choose-us |
| Contact | #contact | contact |

**Note**: Hero and Thank You sections are excluded from navigation per clarification.

---

## Brand Color Entity

```typescript
interface BrandColor {
  name: string;
  hex: string;
  tailwindClass: string;
  usage: string[];
}
```

### Color Palette

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| primary | #a1cd40 | `text-primary`, `bg-primary` | Accents, bullets, underlines, hover glow, buttons, illustration accent |
| dark | #0a0a0a | `bg-dark` | Primary background |
| dark-lighter | #0b0f14 | `bg-dark-lighter` | Hero background, gradient base |
| dark-card | #151515 | `bg-dark-card` | Alternate section background, cards |
| white | #ffffff | `text-white` | Body text, headings |
| gray-400 | #9ca3af | `text-gray-400` | Secondary text, muted content |

---

## Content Source Map

Maps each section to its source in the PDF for verification:

```typescript
interface ContentSource {
  sectionId: string;
  pdfPage: number;
  verificationFile: string;      // Reference in source-copy.txt
}
```

| Section ID | PDF Page | Spec Reference |
|------------|----------|----------------|
| hero | 1 | Page 1 - Hero |
| who-we-are | 2 | Page 2 - Who We Are |
| about-us | 3 | Page 3 - About Us |
| creative-philosophy | 4 | Page 4 - Our Creative Philosophy |
| vision-mission | 5 | Page 5 - Vision & Mission |
| agility | 6 | Page 6 - We Belive in Agitlity |
| services | 7 | Page 7 - Our Services |
| medical-marketing | 8 | Page 8 - Medical Marketing |
| digital-marketing | 9 | Page 9 - Digital Marketing |
| multimedia-pr | 10 | Page 10 - Multimedia & PR |
| creative-production | 11 | Page 11 - Creative & Production Services |
| process | 12 | Page 12 - Our Process |
| why-choose-us | 13 | Page 13 - Why Clients Choose Us |
| contact | 14 | Page 14 - Contact Information |
| thank-you | 16 | Page 16 - Thank You |

---

## File Structure Map

```
site/
├── index.html                      # Single page landing
├── css/
│   └── styles.css                  # Custom styles (glass header, orbs, glow)
├── js/
│   └── main.js                     # jQuery + vanilla JS interactions
├── assets/
│   └── illustrations/              # unDraw SVG files (recolored)
│       ├── hero.svg
│       ├── who-we-are.svg
│       ├── about.svg
│       ├── philosophy.svg
│       ├── vision.svg
│       ├── agility.svg
│       ├── services.svg
│       ├── medical.svg
│       ├── digital.svg
│       ├── multimedia.svg
│       ├── production.svg
│       ├── process.svg
│       ├── why.svg
│       └── contact.svg
├── content/
│   └── source-copy.txt             # Verbatim text for verification
└── README.md                       # Documentation
```

---

## State Transitions

### Navigation Active State

```
State: inactive → active → inactive

Trigger: Scroll position enters/exits section threshold (30% viewport)
Visual: nav link text-white → text-primary, add bottom border
```

### Scroll Reveal State

```
State: hidden → visible

Trigger: Section enters viewport (10% threshold)
Visual: opacity-0 translate-y-8 → opacity-100 translate-y-0
Duration: 600ms ease-out
One-time: Section stays visible once revealed
```

### Hover States

```
Glass Header:
  State: normal → scrolled
  Visual: transparent → rgba(10,10,10,0.7) with blur(12px)

Card/Section:
  State: inactive → hovered
  Visual: Add box-shadow with #a1cd40 at 20% opacity, translateY(-4px)

Button (Outline):
  State: inactive → hovered
  Visual: border-primary → bg-primary text-dark, glow shadow

Button (Solid):
  State: inactive → hovered
  Visual: translateY(-2px), enhanced glow shadow
```

### Gradient Orb Animation

```
State: continuous animation

Keyframes:
  0%, 100%: translate(0, 0) scale(1)
  25%: translate(50px, -30px) scale(1.05)
  50%: translate(-30px, 50px) scale(0.95)
  75%: translate(-50px, -20px) scale(1.02)

Duration: 20s ease-in-out infinite
Respect: prefers-reduced-motion → animation: none
```

---

## Validation Rules

1. **Content Match**: All text must match spec.md "Content Reference" section character-for-character (including typos like "Belive", "Agitlity")
2. **Section Order**: Sections must appear in order 1-15 in DOM
3. **Asset Presence**: All 14 SVG illustrations must exist in assets/illustrations/
4. **SVG Color**: All illustrations must use #a1cd40 as accent color (no #6c63ff or other defaults)
5. **Alt Text**: All img elements must have non-empty, descriptive alt attribute
6. **ID Uniqueness**: Each section ID must be unique
7. **Anchor Links**: Each nav href must have corresponding section ID
8. **Navigation Scope**: Only 13 sections in nav (excludes Hero, Thank You)
9. **Responsive**: Layout must adapt at 375px, 768px, 1200px breakpoints
10. **Accessibility**: Focus visible on all interactive elements
