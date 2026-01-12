# Data Model: Rebuild GRIT Landing Page

**Created**: 2026-01-12
**Purpose**: Define content structure and asset organization for static landing page

## Overview

This is a static website with no backend database. The "data model" defines:
1. Content structure (sections and their text)
2. Asset organization (images and their usage)
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
  illustration: IllustrationAsset;
  layout: 'text-left' | 'text-right';
  order: number;                 // Display order (1-15)
}

interface BulletList {
  heading?: string;              // Optional list heading (e.g., "Our services include:")
  items: string[];               // Bullet point items
}
```

### Section Instances

| Order | ID | Title | Layout | Has Bullets |
|-------|-----|-------|--------|-------------|
| 1 | hero | GRIT Marketing Solutions | centered | No |
| 2 | who-we-are | Who We Are | text-right | No |
| 3 | about-us | About Us | text-left | No |
| 4 | creative-philosophy | Our Creative Philosophy | text-right | No |
| 5 | vision-mission | Vision & Mission | text-left | No |
| 6 | agility | We Belive in Agitlity | text-right | No |
| 7 | services | Our Services | centered | Yes (5 items) |
| 8 | medical-marketing | Medical Marketing | text-right | Yes (13 items) |
| 9 | digital-marketing | Digital Marketing | text-left | Yes (9 items) |
| 10 | multimedia-pr | Multimedia & PR | text-right | Yes (6 items) |
| 11 | creative-production | Creative & Production Services | text-left | Yes (5 items) |
| 12 | process | Our Process | text-right | Yes (5 steps) |
| 13 | why-choose-us | Why Clients Choose Us | text-left | Yes (4 items) |
| 14 | contact | Contact Information | text-right | No |
| 15 | thank-you | Thank You | centered | No |

---

## Illustration Asset Entity

```typescript
interface IllustrationAsset {
  filename: string;              // e.g., "about-us.png"
  sourcePage: number;            // PDF page number (1-16)
  altText: string;               // Accessibility description
  cropRegion?: CropRegion;       // Pixel coordinates for cropping
}

interface CropRegion {
  width: number;
  height: number;
  x: number;                     // Left offset
  y: number;                     // Top offset
}
```

### Asset Inventory

| Filename | Source Page | Alt Text | Section ID |
|----------|-------------|----------|------------|
| logo.png | 1 | GRIT Marketing Solutions logo | header, hero |
| hero.png | 1 | Decorative concentric circles graphic | hero |
| who-we-are.png | 2 | Stylized question mark outline | who-we-are |
| about-us.png | 3 | Team of three people with green foliage background | about-us |
| creative-philosophy.png | 4 | Lightbulb surrounded by creative tools: gear, pencil, rocket | creative-philosophy |
| vision-mission.png | 5 | Green arrow hitting stacked red targets | vision-mission |
| agility.png | 6 | Impossible triangle optical illusion with business people climbing | agility |
| services-wheel.png | 7 | Circular diagram showing five service categories around GRIT logo | services |
| medical.png | 8 | Green caduceus medical symbol with wings | medical-marketing |
| digital.png | 9 | Collage of digital marketing icons: globe, social media, devices | digital-marketing |
| multimedia.png | 10 | Social media and multimedia icons: camera, phone, chat bubbles | multimedia-pr |
| production.png | 11 | Green lightbulb with creative spark design | creative-production |
| process.png | 12 | Vertical timeline with five process steps and icons | process |
| why-choose-us.png | 13 | Handshake icon inside green circular badge | why-choose-us |
| contact.png | 14 | Vintage rotary telephone in green | contact |

---

## Navigation Item Entity

```typescript
interface NavigationItem {
  label: string;                 // Display text
  href: string;                  // Anchor link (e.g., "#about-us")
  sectionId: string;             // Corresponding section ID
  showInNav: boolean;            // Whether to display in main navigation
}
```

### Navigation Structure

| Label | Href | Show in Nav |
|-------|------|-------------|
| Home | #hero | No (logo click) |
| About | #about-us | Yes |
| Philosophy | #creative-philosophy | Yes |
| Services | #services | Yes |
| Process | #process | Yes |
| Contact | #contact | Yes |

**Note**: Not all sections appear in navigation to keep menu concise. Service detail sections (Medical, Digital, Multimedia, Production) are accessible via scrolling from Services section.

---

## Brand Color Entity

```typescript
interface BrandColor {
  name: string;
  hex: string;
  usage: string[];
}
```

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| grit-green | #a1cd40 | Accents, bullets, underlines, hover states, buttons |
| grit-dark | #0b0b0b | Primary background |
| grit-dark-alt | #151515 | Alternate section background |
| white | #ffffff | Body text, headings |
| gray-300 | #d1d5db | Secondary text |

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

| Section ID | PDF Page | Content Lines in source-copy.txt |
|------------|----------|----------------------------------|
| who-we-are | 2 | 1-5 |
| about-us | 3 | 7-18 |
| creative-philosophy | 4 | 20-30 |
| vision-mission | 5 | 32-40 |
| agility | 6 | 42-52 |
| services | 7 | 54-60 |
| medical-marketing | 8 | 62-78 |
| digital-marketing | 9 | 80-92 |
| multimedia-pr | 10 | 94-106 |
| creative-production | 11 | 108-124 |
| process | 12 | 126-146 |
| why-choose-us | 13 | 148-162 |
| contact | 14 | 164-172 |

---

## File Structure Map

```
/
├── index.html                      # Single page application
├── css/
│   └── styles.css                  # Custom styles
├── js/
│   └── main.js                     # jQuery + vanilla JS interactions
├── assets/
│   ├── extracted-pages/            # Temporary: full page renders (220 DPI)
│   │   ├── page-01.png
│   │   ├── page-02.png
│   │   └── ... (page-16.png)
│   └── extracted-crops/            # Final: cropped illustrations
│       ├── logo.png
│       ├── hero.png
│       ├── who-we-are.png
│       └── ... (14 total)
├── content/
│   └── source-copy.txt             # Verbatim text for verification
└── README.md                       # Documentation
```

---

## State Transitions

### Navigation Active State

```
State: inactive → active → inactive

Trigger: Scroll position enters/exits section threshold (50% viewport)
Visual: nav link text-white → text-grit-green, add underline
```

### Scroll Reveal State

```
State: hidden → visible

Trigger: Section enters viewport (10% threshold)
Visual: opacity 0, translateY(30px) → opacity 1, translateY(0)
Duration: 600ms ease
```

### Hover States

```
Button:
  inactive → hovered
  Visual: Add translateY(-2px), box-shadow with grit-green glow

Card:
  inactive → hovered
  Visual: Add box-shadow with grit-green at 20% opacity
```

---

## Validation Rules

1. **Content Match**: All text must match source-copy.txt character-for-character
2. **Section Order**: Sections must appear in order 1-15 in DOM
3. **Asset Presence**: All 14 illustration assets must exist in extracted-crops/
4. **Alt Text**: All img elements must have non-empty alt attribute
5. **ID Uniqueness**: Each section ID must be unique
6. **Anchor Links**: Each nav href must have corresponding section ID
