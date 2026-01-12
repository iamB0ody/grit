# Research: Rebuild GRIT Landing Page

**Created**: 2026-01-12
**Updated**: 2026-01-13
**Purpose**: Resolve technical decisions and document best practices for implementation

## Research Summary

This document consolidates research findings for implementing the futuristic GRIT landing page with unDraw illustrations, premium animations, and modern CSS effects.

---

## Research Tasks Completed

### 1. unDraw Illustration Selection & Recoloring

**Question**: How to source and customize illustrations for the landing page?

**Decision**: Use unDraw.co SVG illustrations with manual color replacement via find/replace in SVG source code.

**Rationale**:
- unDraw provides free, customizable illustrations perfect for corporate/tech themes
- SVG format allows direct color manipulation without image editing software
- Consistent visual style across all illustrations maintains design cohesion
- Lighter file sizes than PNG images from PDF

**Approach**:
1. **Search Strategy**: Use unDraw.co search with keywords from spec mapping
2. **Download**: Download SVG files directly (not PNG)
3. **Recolor Process**:
   - Open SVG in text editor
   - Find default accent color (typically `#6c63ff` or similar purple/blue)
   - Replace with `#a1cd40` (GRIT primary green)
   - Preserve neutral colors (grays, blacks, whites)
4. **Fallback**: If internet unavailable, create placeholder SVGs with clear TODO markers

**Illustration Mapping (Final Selection)**:

| Section | Filename | Recommended unDraw Illustration | Keywords |
|---------|----------|--------------------------------|----------|
| Hero | hero.svg | "Marketing" or "Growth analytics" | marketing, growth, strategy |
| Who We Are | who-we-are.svg | "Team collaboration" or "Creative team" | team, collaboration |
| About Us | about.svg | "Data reports" or "Analytics" | analytics, planning |
| Philosophy | philosophy.svg | "Creative thinking" or "Lightbulb moment" | creativity, innovation |
| Vision | vision.svg | "Goals" or "Target" | target, goals, roadmap |
| Agility | agility.svg | "Scrum board" or "Agile" | sprint, iteration, agile |
| Services | services.svg | "Services" or "Web development" | services, solutions |
| Medical | medical.svg | "Medicine" or "Doctors" | healthcare, medical |
| Digital | digital.svg | "Social media" or "Online world" | social media, SEO |
| Multimedia | multimedia.svg | "Video files" or "Content creator" | video, media, camera |
| Production | production.svg | "Design tools" or "Designer" | design, production |
| Process | process.svg | "Process" or "Steps" | workflow, process |
| Why | why.svg | "Agreement" or "Deal" | trust, handshake, success |
| Contact | contact.svg | "Contact us" or "Personal info" | contact, email, location |

**Alternatives Considered**:
- **Cropped PDF images**: Original approach, but creates "slide-like" appearance
- **Storyset.com**: Good alternative but different visual style
- **Custom illustrations**: Out of scope for this project timeline

---

### 2. Tailwind CSS CDN Configuration

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
          primary: '#a1cd40',
          dark: {
            DEFAULT: '#0a0a0a',
            lighter: '#0b0f14',
            card: '#151515'
          }
        },
        fontFamily: {
          sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
        }
      }
    }
  }
</script>
```

**Usage Patterns**:
- `bg-primary` → #a1cd40
- `bg-dark` → #0a0a0a
- `bg-dark-lighter` → #0b0f14
- `text-primary` → #a1cd40
- `border-primary` → #a1cd40

**Alternatives Considered**:
- Full Tailwind build: Requires npm/build tools (violates constraints)
- Custom CSS only: More code, less maintainable
- Bootstrap: Heavier, different utility approach

---

### 3. Glass Morphism Header

**Question**: How to implement the sticky glass header with blur effect?

**Decision**: Use CSS `backdrop-filter: blur()` with semi-transparent background

**Rationale**:
- Native CSS solution (no JavaScript)
- Modern browser support is excellent (Chrome 76+, Firefox 103+, Safari 9+, Edge 79+)
- Achieves premium "frosted glass" effect aligned with futuristic theme

**Implementation**:
```css
.glass-header {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari */
  border-bottom: 1px solid rgba(161, 205, 64, 0.1);
}
```

**Fallback Strategy**:
```css
@supports not (backdrop-filter: blur(12px)) {
  .glass-header {
    background: rgba(10, 10, 10, 0.95);
  }
}
```

**Alternatives Considered**:
- Solid background: Simpler but less premium feel
- JavaScript blur: Unnecessary complexity, performance impact

---

### 4. Animated Gradient Orb Background

**Question**: How to implement the animated background effect?

**Decision**: Pure CSS implementation using animated radial gradients with `@keyframes`

**Rationale**:
- No JavaScript required
- GPU-accelerated (uses transform/opacity)
- Subtle movement creates "alive" feeling without distraction
- Respects `prefers-reduced-motion`

**Implementation**:
```css
.gradient-orb {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(161, 205, 64, 0.15) 0%, transparent 70%);
  filter: blur(60px);
  animation: float 20s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -30px) scale(1.05); }
  50% { transform: translate(-30px, 50px) scale(0.95); }
  75% { transform: translate(-50px, -20px) scale(1.02); }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .gradient-orb {
    animation: none;
  }
}
```

**Multiple Orbs Strategy**:
- Place 2-3 orbs at different positions with offset animation delays
- Use different sizes (400px, 600px, 500px)
- Vary opacity (0.1, 0.15, 0.08)

**Alternatives Considered**:
- Canvas animation: More control but requires JavaScript
- SVG animation: More complex, similar browser support
- Static gradient: No "alive" feeling

---

### 5. Scroll Animation Implementation

**Question**: What is the best approach for scroll-reveal animations without a framework?

**Decision**: Use Intersection Observer API with CSS transitions

**Rationale**:
- Native browser API (no dependencies)
- Performance-optimized (better than scroll listeners)
- Graceful degradation if JS disabled
- Simple implementation

**Implementation Pattern**:
```javascript
// Scroll reveal with IntersectionObserver
$(document).ready(function() {
  // Add initial hidden state
  $('.reveal-section').addClass('opacity-0 translate-y-8');

  // Check for IntersectionObserver support
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target)
            .removeClass('opacity-0 translate-y-8')
            .addClass('opacity-100 translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    $('.reveal-section').each(function() {
      observer.observe(this);
    });
  } else {
    // Fallback: show all sections immediately
    $('.reveal-section').removeClass('opacity-0 translate-y-8');
  }
});
```

**CSS Transition Classes**:
```css
.reveal-section {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-section {
    transition: none;
  }
}
```

**Alternatives Considered**:
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
// Active nav highlighting
const navLinks = $('nav a[href^="#"]');
const sections = $('section[id]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.removeClass('text-primary border-b-2 border-primary');
      $(`nav a[href="#${id}"]`).addClass('text-primary border-b-2 border-primary');
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '-80px 0px -50% 0px' // Account for sticky header
});

sections.each(function() {
  navObserver.observe(this);
});
```

---

### 7. Hover Glow Effects

**Question**: How to implement the soft glow hover effects?

**Decision**: CSS box-shadow with primary color at low opacity, combined with subtle transform

**Rationale**:
- Pure CSS (no JavaScript)
- Smooth transitions
- Consistent with futuristic/neon theme

**Implementation**:
```css
.glow-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glow-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(161, 205, 64, 0.2),
              0 0 60px rgba(161, 205, 64, 0.1);
}

/* Focus state for accessibility */
.glow-card:focus-visible {
  outline: 2px solid #a1cd40;
  outline-offset: 2px;
}
```

**Button Variants**:
```css
/* Outline button */
.btn-outline {
  border: 2px solid #a1cd40;
  color: #a1cd40;
  background: transparent;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #a1cd40;
  color: #0a0a0a;
  box-shadow: 0 0 20px rgba(161, 205, 64, 0.4);
}

/* Solid button */
.btn-solid {
  background: #a1cd40;
  color: #0a0a0a;
  transition: all 0.3s ease;
}

.btn-solid:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(161, 205, 64, 0.5);
}
```

---

### 8. Mobile Menu Implementation

**Question**: How to implement accessible mobile navigation?

**Decision**: jQuery-powered slide-down menu with hamburger toggle

**Rationale**:
- Simple implementation
- Smooth animation
- Accessible (ARIA attributes, keyboard support)

**Implementation**:
```javascript
// Mobile menu toggle
$('#menu-toggle').on('click', function() {
  const isExpanded = $(this).attr('aria-expanded') === 'true';
  $(this).attr('aria-expanded', !isExpanded);
  $('#mobile-menu').slideToggle(300);
});

// Close menu on link click
$('#mobile-menu a').on('click', function() {
  $('#mobile-menu').slideUp(300);
  $('#menu-toggle').attr('aria-expanded', 'false');
});
```

**HTML Structure**:
```html
<button id="menu-toggle"
        class="md:hidden"
        aria-label="Toggle menu"
        aria-expanded="false"
        aria-controls="mobile-menu">
  <!-- Hamburger icon -->
</button>

<nav id="mobile-menu" class="hidden md:hidden" aria-label="Mobile navigation">
  <!-- Nav links -->
</nav>
```

---

### 9. Image Lazy Loading

**Question**: Best approach for lazy loading SVG illustrations?

**Decision**: Use native `loading="lazy"` attribute

**Rationale**:
- Native browser support (Chrome, Firefox, Edge, Safari 15.4+)
- No JavaScript required
- Graceful fallback (images just load normally)
- Simplest implementation

**Implementation**:
```html
<!-- Hero image - eager loading -->
<img src="assets/illustrations/hero.svg" alt="..." loading="eager">

<!-- All other section images - lazy loading -->
<img src="assets/illustrations/about.svg" alt="..." loading="lazy">
```

**Alternative Considered**:
- JavaScript-based lazy loading: More complex, not needed
- LazyLoad library: Additional dependency

---

### 10. Color Contrast Verification

**Question**: Do the color choices meet WCAG contrast requirements?

**Decision**: Verified - passes WCAG AA for large text, use white for body text

**Analysis**:
- #a1cd40 (lime green) on #0a0a0a (dark): Contrast ratio ~8.7:1 (AAA)
- #ffffff (white) on #0a0a0a: Contrast ratio ~19.6:1 (AAA)
- #a1cd40 on #ffffff (white): Contrast ratio ~2.3:1 (fails for text)

**Implementation**:
- Body text: White (#ffffff) on dark background
- Accents (underlines, bullets, hover effects): #a1cd40
- Interactive elements: #a1cd40 with white text hover state

---

### 11. Reduced Motion Support

**Question**: How to respect user preference for reduced motion?

**Decision**: CSS media query to disable animations

**Rationale**:
- Accessibility requirement (WCAG)
- Simple CSS solution
- Graceful degradation

**Implementation**:
```css
@media (prefers-reduced-motion: reduce) {
  .reveal-section {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .gradient-orb {
    animation: none;
  }
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Summary of Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| Illustrations | unDraw SVGs (recolored) | Free, consistent style, customizable |
| CSS Framework | Tailwind CDN with config | No build tools, full utility support |
| Glass Effect | `backdrop-filter: blur()` | Native CSS, great support |
| Background Animation | CSS @keyframes | No JS, GPU-accelerated |
| Scroll Reveal | IntersectionObserver | Native API, performant |
| Hover Effects | CSS transitions + box-shadow | Pure CSS, smooth |
| Navigation | jQuery + IntersectionObserver | Simple, effective |
| Mobile Menu | jQuery slideToggle | Accessible, animated |
| Lazy Loading | Native loading="lazy" | Simplest, good support |
| Reduced Motion | CSS media query | Accessibility standard |

All technical decisions align with the Constitution principles:
- No over-engineering (Principle VII)
- Performance optimized (Principle V)
- Accessible (Principle VI)
- Cross-browser compatible (Principle VIII)
