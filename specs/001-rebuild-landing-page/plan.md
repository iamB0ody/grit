# Implementation Plan: Rebuild GRIT Landing Page

**Branch**: `001-rebuild-landing-page` | **Date**: 2026-01-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-rebuild-landing-page/spec.md`

## Summary

Rebuild the GRIT Marketing Solutions landing page with a modern, elegant, futuristic design. Replace cropped PDF images with unDraw.co SVG illustrations (recolored to #a1cd40), implement premium micro-interactions (glass header, animated orb background, glow effects, scroll-reveal animations), and maintain verbatim PDF content. Stack: HTML5 + CSS3 + JavaScript/jQuery + Tailwind CSS (all via CDN).

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+ (browser-native, no transpilation)
**Primary Dependencies**: jQuery 3.x (CDN), Tailwind CSS 3.x (CDN)
**Storage**: N/A (static site, no persistence required)
**Testing**: Manual browser testing + visual QA (per constitution)
**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions), iOS Safari, Chrome Mobile
**Project Type**: Static landing page (single HTML file with supporting assets)
**Performance Goals**: < 3 seconds initial load on 3G, smooth 60fps animations
**Constraints**: No build tools, no frameworks (React/Vue), no CSS preprocessors, CDN-only dependencies
**Scale/Scope**: Single page, 15 sections, 14 unDraw illustrations, ~100KB HTML + ~50KB CSS + ~20KB JS

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Review against `.specify/memory/constitution.md` principles:

1. **Brand Fidelity** (Principle I)
   - [x] Uses approved brand colors (#a1cd40 primary, #0b0f14/#0a0a0a dark backgrounds)
   - [x] Uses approved typography (system font stack via Tailwind)
   - [x] Uses only approved visual assets (unDraw illustrations recolored to brand color)
   - **Note**: Constitution specifies #0b0b0b but spec updates to #0b0f14/#0a0a0a for futuristic feel - client approval obtained via spec

2. **Client-Driven Development** (Principle II)
   - [x] Client approval obtained for design changes (futuristic redesign approved via spec)
   - [x] Client approval obtained for content changes (verbatim PDF content preserved)
   - [x] Client approval obtained for new features (unDraw illustrations, animations)
   - **Note**: Technical exception applies - illustration source change is approved enhancement

3. **Design Consistency** (Principle III)
   - [x] Maintains consistent spacing patterns (Tailwind utility classes)
   - [x] Follows established component styling (glass header, glow effects, alternating layouts)
   - [x] Responsive behavior at defined breakpoints (375px, 768px, 1200px+)

4. **Content Accuracy** (Principle IV)
   - [x] Content matches source materials exactly (PDF verbatim in source-copy.txt)
   - [x] Intentional typos preserved ("Belive", "Agitlity", "Managment")
   - [x] Contact information placeholders maintained (info@grit360-.com as-is)

5. **Performance & Responsiveness** (Principle V)
   - [x] Images optimized for display context (SVG format, inherently scalable)
   - [x] Lazy loading implemented where appropriate (all illustrations except hero)
   - [x] Mobile-first approach maintained (Tailwind mobile-first utilities)
   - [x] Target load time < 3 seconds (SVGs lighter than PNGs)

6. **Accessibility Standards** (Principle VI)
   - [x] Semantic HTML elements used (header, nav, section, article, footer)
   - [x] Proper heading hierarchy maintained (h1 → h2 → h3)
   - [x] Alt text provided for images (descriptive alt on all illustrations)
   - [x] Keyboard navigation functional (focus styles, tab order)
   - [x] WCAG 2.1 Level AA color contrast met (white/#a1cd40 on dark backgrounds)

7. **Code Maintainability** (Principle VII)
   - [x] Clear separation of concerns (index.html, styles.css, main.js)
   - [x] Semantic naming conventions followed (section IDs, CSS classes)
   - [x] No over-engineering (vanilla JS + jQuery, no frameworks)
   - [x] Documentation kept current (README.md with setup and asset mapping)

8. **Browser Compatibility** (Principle VIII)
   - [x] Testing plan covers Chrome, Firefox, Safari, Edge
   - [x] Mobile browser testing included (iOS Safari, Chrome Mobile)
   - [x] Progressive enhancement approach used (anchor links work without JS)

**Constitution Gate**: PASSED - All principles satisfied. Minor color variation (#0b0f14 vs #0b0b0b) is approved design enhancement per spec.

## Project Structure

### Documentation (this feature)

```text
specs/001-rebuild-landing-page/
├── plan.md              # This file
├── spec.md              # Feature specification
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── checklists/          # Validation checklists
│   └── requirements.md
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
site/
├── index.html                    # Main landing page
├── css/
│   └── styles.css               # Custom styles (animations, glow, glass header)
├── js/
│   └── main.js                  # jQuery interactions (smooth scroll, mobile menu, scroll reveal)
├── assets/
│   └── illustrations/           # unDraw SVG illustrations (14 files)
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
│   └── source-copy.txt          # Verbatim PDF text for verification
└── README.md                    # Setup instructions, asset mapping
```

**Structure Decision**: Static site structure with flat organization. No build tools required. CDN dependencies (jQuery, Tailwind) loaded in index.html. All assets self-contained in site/ directory.

## Complexity Tracking

No constitution violations requiring justification. Implementation follows simplest approach:
- Single HTML file (no templating)
- Single CSS file (no preprocessors)
- Single JS file (no bundling)
- CDN dependencies only (no npm/node)
