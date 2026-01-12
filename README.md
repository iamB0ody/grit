# GRIT Marketing Solutions - Landing Page

Rebuild of the GRIT Marketing Solutions landing page with a modern, futuristic design featuring unDraw.co SVG illustrations and premium micro-interactions.

## Quick Start

### Local Development

```bash
# Option 1: Python HTTP server
python3 -m http.server 8000
# Open http://localhost:8000

# Option 2: Open directly in browser
open index.html
```

## Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Custom styles with Tailwind CSS via CDN
- **JavaScript ES6+**: Browser-native, no transpilation
- **jQuery 3.x**: DOM manipulation and animations (CDN)
- **Tailwind CSS 3.x**: Utility-first CSS framework (CDN)

## Project Structure

```
./
├── index.html                    # Main landing page
├── css/
│   └── styles.css               # Custom styles (glass header, orbs, glow)
├── js/
│   └── main.js                  # jQuery interactions and animations
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
└── README.md                    # This file
```

## Illustrations

All illustrations are sourced from [unDraw.co](https://undraw.co) and recolored to use GRIT's primary brand color (#a1cd40).

### Illustration Mapping

| Section | Filename | unDraw Search Keywords |
|---------|----------|------------------------|
| Hero | hero.svg | marketing team, growth, strategy |
| Who We Are | who-we-are.svg | team, collaboration |
| About Us | about.svg | analytics, planning |
| Creative Philosophy | philosophy.svg | creativity, ideas, innovation |
| Vision & Mission | vision.svg | target, goals, roadmap |
| Agility | agility.svg | sprint, iteration, fast delivery |
| Our Services | services.svg | services, solutions |
| Medical Marketing | medical.svg | healthcare, doctor, medicine |
| Digital Marketing | digital.svg | social media, SEO, analytics |
| Multimedia & PR | multimedia.svg | video, camera, press, media |
| Creative & Production | production.svg | design, production, studio |
| Our Process | process.svg | workflow, steps, process |
| Why Clients Choose Us | why.svg | trust, quality, success |
| Contact | contact.svg | contact, email, location |

### Recoloring SVGs

All SVGs have been recolored to replace unDraw's default accent color (typically `#6c63ff`) with GRIT's primary green (`#a1cd40`).

To verify all SVGs are properly colored:
```bash
grep -l "a1cd40" assets/illustrations/*.svg | wc -l
# Should return 14
```

## Design Features

### Futuristic Elements

- **Glass Header**: Sticky navigation with backdrop blur effect
- **Animated Gradient Orbs**: Subtle background animation (CSS-only)
- **Hover Glow Effects**: Soft green glow on cards and buttons
- **Scroll Reveal**: Sections fade/slide in using IntersectionObserver
- **Active Nav Highlighting**: Scroll-based navigation indicator

### Brand Colors

- **Primary**: `#a1cd40` (lime green) - Accents, bullets, buttons, hover states
- **Dark**: `#0a0a0a` - Primary background
- **Dark Lighter**: `#0b0f14` - Hero background, gradient base
- **Dark Card**: `#151515` - Alternate section background

### Responsive Breakpoints

- **Mobile**: 375px (single column, stacked content)
- **Tablet**: 768px (transition layout)
- **Desktop**: 1200px+ (two-column alternating layout)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Descriptive alt text on all images
- Keyboard navigation support with visible focus indicators
- WCAG 2.1 Level AA color contrast
- `prefers-reduced-motion` support to disable animations

## Browser Support

Tested and supported in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Chrome Mobile

## Content Accuracy

All text content matches the source PDF verbatim, including intentional typos:
- "Belive" instead of "Believe"
- "Agitlity" instead of "Agility"
- "Managment" instead of "Management"

Reference: `content/source-copy.txt`

## Performance

- SVG format for lightweight illustrations
- Lazy loading on all non-hero images
- GPU-accelerated animations
- CDN-hosted dependencies

## License

© GRIT Marketing Solutions. All rights reserved.
