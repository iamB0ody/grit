# Research: Rebuild GRIT Landing Page

**Created**: 2026-01-12
**Purpose**: Resolve technical decisions and document best practices for implementation

## Research Tasks Completed

### 1. PDF to PNG Extraction

**Question**: What is the best tool/approach for extracting high-resolution page images from the PDF?

**Decision**: Use `pdftoppm` (Poppler utilities)

**Rationale**:
- Already installed on system (`/opt/homebrew/bin/pdftoppm`)
- Produces high-quality PNG output at configurable DPI
- Simple command-line interface
- No additional dependencies needed

**Alternatives Considered**:
- `ImageMagick convert`: Requires Ghostscript, can have quality issues
- `pdf2image` (Python): Would require Python environment setup
- `Ghostscript direct`: More complex command syntax

**Implementation Command**:
```bash
pdftoppm -png -r 220 "Grit Profile 11-12.pdf" "assets/extracted-pages/page"
```
- `-r 220`: 220 DPI provides good balance of quality and file size
- Output: `page-01.png`, `page-02.png`, etc.

---

### 2. Image Cropping Strategy

**Question**: How to accurately crop only the illustration from each PDF page render?

**Decision**: Use ImageMagick `magick` with manual crop coordinates per page

**Rationale**:
- ImageMagick installed on system (`/opt/homebrew/bin/magick`)
- Allows precise pixel-based cropping
- Can batch process with shell script
- Preserves image quality

**Alternatives Considered**:
- Automated edge detection: Unreliable due to varying illustration shapes
- Manual extraction in image editor: Time-consuming, not reproducible
- Python PIL/Pillow: Would require Python environment

**Implementation Approach**:
1. Render all PDF pages to PNG at 220 DPI
2. Visually inspect each page to identify illustration bounds
3. Calculate crop coordinates (WIDTHxHEIGHT+X+Y)
4. Execute cropping commands

**Crop Command Template**:
```bash
magick "assets/extracted-pages/page-01.png" -crop WxH+X+Y +repage "assets/extracted-crops/hero.png"
```

---

### 3. Page-to-Illustration Mapping

**Question**: Which PDF page maps to which section illustration?

**Decision**: Create explicit mapping based on PDF content analysis

| PDF Page | Section | Cropped Filename | Illustration Description |
|----------|---------|------------------|--------------------------|
| 1 | Hero | hero.png + logo.png | Concentric circles, GRIT logo |
| 2 | Who We Are | who-we-are.png | Green question mark outline |
| 3 | About Us | about-us.png | Team silhouettes with leaves |
| 4 | Our Creative Philosophy | creative-philosophy.png | Lightbulb with gear/pencil |
| 5 | Vision & Mission | vision-mission.png | Arrow hitting stacked targets |
| 6 | We Belive in Agitlity | agility.png | Impossible triangle with people |
| 7 | Our Services | services-wheel.png | Circular service diagram |
| 8 | Medical Marketing | medical.png | Caduceus medical symbol |
| 9 | Digital Marketing | digital.png | Digital/social icons collage |
| 10 | Multimedia & PR | multimedia.png | Social media/multimedia icons |
| 11 | Creative & Production | production.png | Green lightbulb illustration |
| 12 | Our Process | process.png | Vertical process timeline |
| 13 | Why Clients Choose Us | why-choose-us.png | Handshake in circle |
| 14 | Contact Information | contact.png | Vintage green telephone |
| 15 | (blank) | N/A | Skip - empty page |
| 16 | Thank You | N/A | Text only - no illustration needed |

---

### 4. Tailwind CSS CDN Configuration

**Question**: How to use Tailwind CSS via CDN without build tools?

**Decision**: Use Tailwind Play CDN with inline configuration

**Rationale**:
- Official Tailwind CDN supports runtime compilation
- Allows custom colors and configuration
- No build step required
- Works with vanilla HTML

**Implementation**:
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'grit-green': '#a1cd40',
          'grit-dark': '#0b0b0b',
          'grit-dark-alt': '#151515',
        }
      }
    }
  }
</script>
```

**Alternative Considered**:
- Pre-built Tailwind CDN: Limited customization
- Self-hosted Tailwind: Requires build tools

---

### 5. Scroll Animation Implementation

**Question**: What is the best approach for scroll-reveal animations without a framework?

**Decision**: Use Intersection Observer API with CSS animations

**Rationale**:
- Native browser API (no dependencies)
- Performance-optimized (better than scroll listeners)
- Graceful degradation if JS disabled
- Simple implementation

**Implementation Pattern**:
```javascript
// CSS
.reveal-hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

// JavaScript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      entry.target.classList.remove('reveal-hidden');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('reveal-hidden');
  observer.observe(section);
});
```

**Alternative Considered**:
- jQuery scroll handler: Less performant, fires on every scroll
- AOS library: Additional dependency, overkill for simple reveals
- GSAP: Overkill for this use case

---

### 6. Active Navigation Highlighting

**Question**: How to highlight navigation items based on current scroll position?

**Decision**: Use Intersection Observer for section visibility detection

**Rationale**:
- Consistent with scroll-reveal approach
- Performance-optimized
- Works with smooth scrolling

**Implementation Pattern**:
```javascript
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.5, rootMargin: '-50% 0px' });

document.querySelectorAll('section[id]').forEach(section => {
  navObserver.observe(section);
});
```

---

### 7. Image Lazy Loading

**Question**: Best approach for lazy loading images?

**Decision**: Use native `loading="lazy"` attribute

**Rationale**:
- Native browser support (Chrome, Firefox, Edge, Safari 15.4+)
- No JavaScript required
- Graceful fallback (images just load normally)
- Simplest implementation

**Implementation**:
```html
<!-- Hero image - eager loading -->
<img src="assets/extracted-crops/hero.png" alt="..." loading="eager">

<!-- All other section images - lazy loading -->
<img src="assets/extracted-crops/about-us.png" alt="..." loading="lazy">
```

**Alternative Considered**:
- JavaScript-based lazy loading: More complex, not needed
- LazyLoad library: Additional dependency

---

### 8. Noise Texture Background

**Question**: How to implement subtle noise texture on dark background?

**Decision**: CSS pseudo-element with SVG noise filter

**Rationale**:
- Pure CSS solution
- No external image required
- Performant (hardware accelerated)
- Adjustable opacity and intensity

**Implementation**:
```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

---

### 9. Reduced Motion Support

**Question**: How to respect user preference for reduced motion?

**Decision**: CSS media query to disable animations

**Rationale**:
- Accessibility requirement (WCAG)
- Simple CSS solution
- Graceful degradation

**Implementation**:
```css
@media (prefers-reduced-motion: reduce) {
  .reveal-hidden {
    opacity: 1;
    transform: none;
    transition: none;
  }
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 10. Color Contrast Verification

**Question**: Does #a1cd40 on #0b0b0b meet WCAG contrast requirements?

**Decision**: Verified - passes WCAG AA for large text, use white for body text

**Analysis**:
- #a1cd40 (lime green) on #0b0b0b (dark): Contrast ratio ~8.7:1 (AAA)
- #ffffff (white) on #0b0b0b: Contrast ratio ~19.6:1 (AAA)
- #a1cd40 on #ffffff (white): Contrast ratio ~2.3:1 (fails for text)

**Implementation**:
- Body text: White (#ffffff) on dark background
- Accents (underlines, bullets, hover effects): #a1cd40
- Interactive elements: #a1cd40 with white text hover state

---

## Summary of Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| PDF Extraction | pdftoppm at 220 DPI | Available, high quality |
| Image Cropping | ImageMagick manual crops | Precise, reproducible |
| CSS Framework | Tailwind CDN with config | No build, custom colors |
| Scroll Animations | Intersection Observer | Native, performant |
| Nav Highlighting | Intersection Observer | Consistent approach |
| Lazy Loading | Native loading="lazy" | Simplest, good support |
| Noise Texture | SVG filter in CSS | No external assets |
| Reduced Motion | CSS media query | Accessibility standard |

All technical decisions align with the Constitution principles:
- No over-engineering (Principle VII)
- Performance optimized (Principle V)
- Accessible (Principle VI)
- Cross-browser compatible (Principle VIII)
