# Quickstart: Rebuild GRIT Landing Page

**Created**: 2026-01-12
**Updated**: 2026-01-13
**Purpose**: Step-by-step guide to implement the landing page rebuild

## Prerequisites

- Modern web browser for testing
- Code editor (VS Code recommended)
- Internet access (for unDraw.co and CDNs)

---

## Phase 1: Project Setup

### Step 1.1: Create Directory Structure

```bash
cd /Users/iamb0ody/Desktop/mine/grit

# Create site directory structure
mkdir -p site/css
mkdir -p site/js
mkdir -p site/assets/illustrations
mkdir -p site/content
```

### Step 1.2: Create Base Files

```bash
touch site/index.html
touch site/css/styles.css
touch site/js/main.js
touch site/content/source-copy.txt
touch site/README.md
```

---

## Phase 2: Source unDraw Illustrations

### Step 2.1: Download SVGs from unDraw.co

Visit [unDraw.co/illustrations](https://undraw.co/illustrations) and search for each illustration using the keywords below. Download as SVG format.

| Filename | Search Keywords | Style Notes |
|----------|-----------------|-------------|
| hero.svg | "marketing", "growth analytics" | Abstract/corporate, not cartoonish |
| who-we-are.svg | "team collaboration", "creative team" | Professional team scene |
| about.svg | "data reports", "analytics" | Business/data focused |
| philosophy.svg | "creative thinking", "lightbulb moment" | Innovation theme |
| vision.svg | "goals", "target" | Achievement/goals theme |
| agility.svg | "scrum board", "agile" | Fast/iterative theme |
| services.svg | "services", "web development" | Solutions theme |
| medical.svg | "medicine", "doctors" | Healthcare theme |
| digital.svg | "social media", "online world" | Digital/social theme |
| multimedia.svg | "video files", "content creator" | Media production theme |
| production.svg | "design tools", "designer" | Creative tools theme |
| process.svg | "process", "steps" | Workflow theme |
| why.svg | "agreement", "deal" | Trust/handshake theme |
| contact.svg | "contact us", "personal info" | Communication theme |

### Step 2.2: Recolor SVGs to Brand Color

For each downloaded SVG:

1. Open the SVG file in a text editor
2. Find and replace the default unDraw color (usually `#6c63ff` or similar purple/blue)
3. Replace with GRIT green: `#a1cd40`
4. Save the file

**Example sed command** (run from site/assets/illustrations/):
```bash
# Replace unDraw default purple with GRIT green
sed -i '' 's/#6c63ff/#a1cd40/gi' *.svg
sed -i '' 's/#6C63FF/#a1cd40/gi' *.svg
```

### Step 2.3: Verify Illustrations

```bash
# Check all SVGs exist
ls -la site/assets/illustrations/

# Should have 14 files:
# hero.svg, who-we-are.svg, about.svg, philosophy.svg, vision.svg,
# agility.svg, services.svg, medical.svg, digital.svg, multimedia.svg,
# production.svg, process.svg, why.svg, contact.svg

# Verify color replacement
grep -l "a1cd40" site/assets/illustrations/*.svg | wc -l
# Should return 14
```

---

## Phase 3: Create Source Content File

### Step 3.1: Extract Text from Spec

Copy all content from the spec.md "Content Reference" section into `site/content/source-copy.txt`.

This file serves as:
1. Implementation reference
2. QA verification source

---

## Phase 4: Build HTML Structure

### Step 4.1: Create index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GRIT Marketing Solutions</title>

  <!-- Tailwind CSS CDN -->
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

  <!-- Custom styles -->
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="bg-dark text-white font-sans">
  <!-- Animated gradient orbs (background) -->
  <div class="gradient-orb gradient-orb-1"></div>
  <div class="gradient-orb gradient-orb-2"></div>

  <!-- Glass header with navigation -->
  <header class="glass-header fixed top-0 w-full z-50">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="#hero" class="text-2xl font-bold text-primary">GRIT</a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <!-- Nav links (13 items per FR-028) -->
      </div>

      <!-- Mobile menu toggle -->
      <button id="menu-toggle" class="md:hidden" aria-label="Toggle menu" aria-expanded="false">
        <!-- Hamburger icon -->
      </button>
    </nav>

    <!-- Mobile menu -->
    <nav id="mobile-menu" class="hidden md:hidden px-4 pb-4">
      <!-- Mobile nav links -->
    </nav>
  </header>

  <main>
    <!-- Section 1: Hero -->
    <section id="hero" class="min-h-screen flex items-center">...</section>

    <!-- Section 2-14: Content sections (alternating layout) -->
    <!-- Section 15: Thank You -->
  </main>

  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <!-- Main JS -->
  <script src="js/main.js"></script>
</body>
</html>
```

### Step 4.2: Section Template

**Text Left, Image Right:**
```html
<section id="section-id" class="py-20 reveal-section">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      <!-- Text Block -->
      <div class="lg:w-1/2">
        <h2 class="text-4xl font-bold mb-6 text-white">
          Section Title
        </h2>
        <p class="text-lg text-gray-300 mb-6 leading-relaxed">
          Paragraph content from source-copy.txt...
        </p>
        <!-- Optional bullet list -->
        <ul class="space-y-3">
          <li class="flex items-start">
            <span class="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span class="text-gray-300">Bullet item text</span>
          </li>
        </ul>
      </div>
      <!-- Image Block -->
      <div class="lg:w-1/2">
        <img
          src="assets/illustrations/section.svg"
          alt="Descriptive alt text"
          loading="lazy"
          class="w-full h-auto max-w-md mx-auto"
        >
      </div>
    </div>
  </div>
</section>
```

**Image Left, Text Right (alternate):**
```html
<section id="section-id" class="py-20 bg-dark-card reveal-section">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
      <!-- Same structure, reversed flex direction -->
    </div>
  </div>
</section>
```

---

## Phase 5: Create CSS Styles

### Step 5.1: styles.css

```css
/* Glass header */
.glass-header {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(161, 205, 64, 0.1);
}

@supports not (backdrop-filter: blur(12px)) {
  .glass-header {
    background: rgba(10, 10, 10, 0.95);
  }
}

/* Animated gradient orbs */
.gradient-orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

.gradient-orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(161, 205, 64, 0.15) 0%, transparent 70%);
  top: -200px;
  right: -100px;
  animation: float 20s ease-in-out infinite;
}

.gradient-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(161, 205, 64, 0.1) 0%, transparent 70%);
  bottom: -100px;
  left: -50px;
  animation: float 25s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, -30px) scale(1.05); }
  50% { transform: translate(-30px, 50px) scale(0.95); }
  75% { transform: translate(-50px, -20px) scale(1.02); }
}

/* Scroll reveal */
.reveal-section {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* Hover glow effect */
.glow-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glow-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(161, 205, 64, 0.2),
              0 0 60px rgba(161, 205, 64, 0.1);
}

/* Button styles */
.btn-outline {
  border: 2px solid #a1cd40;
  color: #a1cd40;
  background: transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #a1cd40;
  color: #0a0a0a;
  box-shadow: 0 0 20px rgba(161, 205, 64, 0.4);
}

.btn-solid {
  background: #a1cd40;
  color: #0a0a0a;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-solid:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(161, 205, 64, 0.5);
}

/* Focus styles */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #a1cd40;
  outline-offset: 2px;
}

/* Active nav link */
nav a.active {
  color: #a1cd40;
  border-bottom: 2px solid #a1cd40;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .gradient-orb {
    animation: none;
  }
  .reveal-section {
    transition: none;
  }
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Phase 6: Create JavaScript Interactions

### Step 6.1: main.js

```javascript
$(document).ready(function() {
  // Smooth scroll for nav links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80 // Account for fixed header
      }, 800);
    }

    // Close mobile menu if open
    $('#mobile-menu').addClass('hidden');
    $('#menu-toggle').attr('aria-expanded', 'false');
  });

  // Mobile menu toggle
  $('#menu-toggle').on('click', function() {
    const isExpanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !isExpanded);
    $('#mobile-menu').toggleClass('hidden');
  });

  // Scroll reveal with Intersection Observer
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $(entry.target)
            .removeClass('opacity-0 translate-y-8')
            .addClass('opacity-100 translate-y-0');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    $('.reveal-section').each(function() {
      $(this).addClass('opacity-0 translate-y-8');
      revealObserver.observe(this);
    });
  }

  // Active nav highlighting
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          $('nav a').removeClass('active');
          $(`nav a[href="#${id}"]`).addClass('active');
        }
      });
    }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

    $('section[id]').each(function() {
      navObserver.observe(this);
    });
  }
});
```

---

## Phase 7: Testing

### Step 7.1: Local Development

```bash
# Option 1: Python HTTP server
cd site
python3 -m http.server 8000
# Open http://localhost:8000

# Option 2: Open directly (some features may not work)
open site/index.html
```

### Step 7.2: Quality Checklist

**Content:**
- [ ] All 15 sections visible in correct order
- [ ] All text matches source-copy.txt verbatim (including typos)
- [ ] Navigation has exactly 13 links (excludes Hero, Thank You)

**Visual:**
- [ ] All 14 illustrations are SVGs with #a1cd40 accent color
- [ ] Glass header with blur effect visible
- [ ] Animated gradient orbs in background
- [ ] Dark background (#0a0a0a / #0b0f14)
- [ ] Primary color #a1cd40 consistent throughout

**Interactions:**
- [ ] Smooth scroll for all nav links
- [ ] Mobile menu toggle working
- [ ] Scroll reveal animations triggering
- [ ] Nav links highlighting on scroll
- [ ] Hover glow effects on cards/buttons

**Responsive:**
- [ ] Mobile (375px): Single column, stacked content
- [ ] Tablet (768px): Transitions smoothly
- [ ] Desktop (1200px+): Two-column alternating layout

**Accessibility:**
- [ ] All images have descriptive alt text
- [ ] Keyboard navigation working (Tab, Enter)
- [ ] Focus indicators visible
- [ ] Reduced motion preference respected

**Technical:**
- [ ] No console errors
- [ ] All assets loading (no 404s)
- [ ] SVGs rendering correctly

### Step 7.3: Browser Testing

Test in all target browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Chrome Mobile

---

## Troubleshooting

### unDraw illustrations not found?
- Try alternative search keywords
- Select illustrations with similar themes
- Ensure corporate/tech style, not cartoonish

### SVG colors not replaced?
- Check for uppercase hex codes (#6C63FF vs #6c63ff)
- Some SVGs use `fill="currentColor"` - add color via CSS
- Verify the SVG isn't using inline styles

### Glass header not blurring?
- Check browser support for `backdrop-filter`
- Verify fallback solid background is working
- Safari requires `-webkit-backdrop-filter` prefix

### Animations not respecting reduced motion?
- Check `prefers-reduced-motion` media query
- Verify CSS is not being overridden
- Test in OS accessibility settings

### Tailwind classes not working?
- Ensure CDN script loads before content
- Check browser console for script errors
- Verify custom config syntax is correct
