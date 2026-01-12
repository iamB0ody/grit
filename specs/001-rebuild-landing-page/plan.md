# Implementation Plan: Rebuild GRIT Landing Page

**Branch**: `001-rebuild-landing-page` | **Date**: 2026-01-12 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-rebuild-landing-page/spec.md`

## Summary

Rebuild the GRIT Marketing Solutions landing page to use real HTML text (selectable, accessible) instead of full-slide images. The page will use cropped illustration assets from each PDF slide while maintaining the brand identity with #a1cd40 accents on a dark #0b0b0b background. Tech stack: HTML/CSS/JS/jQuery with Tailwind via CDN (no build tools).

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+
**Primary Dependencies**: jQuery 3.x (CDN), Tailwind CSS 3.x (CDN)
**Storage**: N/A (static site, no backend)
**Testing**: Manual browser testing (Chrome, Firefox, Safari, Edge), Lighthouse audits
**Target Platform**: Modern web browsers (Chrome, Firefox, Safari, Edge - latest 2 versions)
**Project Type**: Single static web page
**Performance Goals**: < 3 seconds initial load on 3G, smooth 60fps animations
**Constraints**: No build tools (Webpack/Vite), no frameworks (React/Vue), CDN-only dependencies
**Scale/Scope**: Single landing page with 14 content sections

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Review against `.specify/memory/constitution.md` principles:

1. **Brand Fidelity** (Principle I)
   - [x] Uses approved brand colors (#a1cd40, #0b0b0b, #151515)
   - [x] Uses approved typography (system font stack)
   - [x] Uses only approved visual assets from assets/img/ (will use cropped versions from PDF)

2. **Client-Driven Development** (Principle II)
   - [x] Client approval obtained for design changes (rebuilding to fix full-slide image issue)
   - [x] Client approval obtained for content changes (preserving PDF content verbatim)
   - [x] Client approval obtained for new features (scroll animations, hover effects per spec)

3. **Design Consistency** (Principle III)
   - [x] Maintains consistent spacing patterns (Tailwind utility classes)
   - [x] Follows established component styling (cards, buttons, sections)
   - [x] Responsive behavior at defined breakpoints (375px mobile, 768px tablet, 1200px+ desktop)

4. **Content Accuracy** (Principle IV)
   - [x] Content matches source materials exactly (PDF verbatim, including typos)
   - [x] Intentional typos preserved if required ("Belive in Agitlity")
   - [x] Contact information placeholders maintained (info@grit360-.com)

5. **Performance & Responsiveness** (Principle V)
   - [x] Images optimized for display context (cropped illustrations, not full slides)
   - [x] Lazy loading implemented where appropriate (all images except hero)
   - [x] Mobile-first approach maintained
   - [x] Target load time < 3 seconds

6. **Accessibility Standards** (Principle VI)
   - [x] Semantic HTML elements used (header, nav, section, footer)
   - [x] Proper heading hierarchy maintained (h1 > h2 > h3)
   - [x] Alt text provided for images
   - [x] Keyboard navigation functional (focus styles)
   - [x] WCAG 2.1 Level AA color contrast met (#a1cd40 on #0b0b0b achieves 4.5:1+)

7. **Code Maintainability** (Principle VII)
   - [x] Clear separation of concerns (HTML/CSS/JS)
   - [x] Semantic naming conventions followed
   - [x] No over-engineering (vanilla JS + jQuery, no frameworks)
   - [x] Documentation kept current (README.md)

8. **Browser Compatibility** (Principle VIII)
   - [x] Testing plan covers Chrome, Firefox, Safari, Edge
   - [x] Mobile browser testing included
   - [x] Progressive enhancement approach used (works without JS)

**Constitution Check Status**: PASSED - All principles satisfied

## Project Structure

### Documentation (this feature)

```text
specs/001-rebuild-landing-page/
├── spec.md              # Feature specification
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # N/A - static site, no API
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (repository root)

```text
# Static Website Structure
index.html               # Main landing page (rebuild from scratch)
css/
└── styles.css           # Custom styles (Tailwind via CDN in HTML)
js/
└── main.js              # jQuery interactions (smooth scroll, mobile menu, scroll reveal)

assets/
├── img/                 # Current full-page images (to be replaced)
│   └── page-XX.png      # DELETE - these are full-slide screenshots
├── extracted-pages/     # NEW - temporary folder for PDF page renders
│   └── page-XX.png      # High-res renders of each PDF page
└── extracted-crops/     # NEW - cropped illustrations for final use
    ├── logo.png         # GRIT logo
    ├── hero.png         # Hero visual
    ├── who-we-are.png   # Question mark graphic
    ├── about-us.png     # Team illustration
    ├── creative-philosophy.png  # Lightbulb gear
    ├── vision-mission.png       # Arrow targets
    ├── agility.png              # Impossible triangle
    ├── services-wheel.png       # Service wheel diagram
    ├── medical.png              # Caduceus symbol
    ├── digital.png              # Digital icons collage
    ├── multimedia.png           # Social/multimedia icons
    ├── production.png           # Lightbulb illustration
    ├── process.png              # Process timeline
    ├── why-choose-us.png        # Handshake icon
    └── contact.png              # Telephone illustration

content/
└── source-copy.txt      # NEW - verbatim text from PDF for verification

README.md                # Setup instructions and asset mapping
```

**Structure Decision**: Single static website with assets organized by purpose. Cropped illustrations go in `assets/extracted-crops/` to clearly distinguish from the problematic full-page images in `assets/img/`. Content reference stored in `content/source-copy.txt`.

## Complexity Tracking

No violations - the design follows all Constitution principles and uses the simplest possible approach:
- No build tools (CDN dependencies only)
- No JavaScript frameworks (vanilla JS + jQuery)
- No backend/database (static HTML)
- Single HTML file structure
