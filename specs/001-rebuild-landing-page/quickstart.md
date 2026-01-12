# Quickstart: Rebuild GRIT Landing Page

**Created**: 2026-01-12
**Purpose**: Step-by-step guide to implement the landing page rebuild

## Prerequisites

- macOS with Homebrew (tools already installed)
- `pdftoppm` - PDF to image conversion
- `magick` (ImageMagick) - Image cropping
- Modern web browser for testing
- Code editor (VS Code, etc.)

Verify tools:
```bash
which pdftoppm && which magick
# Should output paths to both tools
```

---

## Phase 1: Extract Assets

### Step 1.1: Create Directory Structure

```bash
cd /Users/iamb0ody/Desktop/mine/grit

# Create asset directories
mkdir -p assets/extracted-pages
mkdir -p assets/extracted-crops
mkdir -p content
```

### Step 1.2: Render PDF Pages to PNG

```bash
# Render all PDF pages at 220 DPI
pdftoppm -png -r 220 " Grit Profile 11-12.pdf" "assets/extracted-pages/page"

# Verify output (should have page-01.png through page-16.png)
ls -la assets/extracted-pages/
```

### Step 1.3: Crop Illustrations

Each page needs a specific crop to extract only the illustration. Open each `page-XX.png` in an image viewer to identify bounds, then run:

```bash
# Page 1 - Hero decorative circles (left side)
magick "assets/extracted-pages/page-01.png" -crop 600x700+0+0 +repage "assets/extracted-crops/hero.png"

# Page 1 - Logo (bottom right)
magick "assets/extracted-pages/page-01.png" -crop 300x200+1100+550 +repage "assets/extracted-crops/logo.png"

# Page 2 - Question mark (left side)
magick "assets/extracted-pages/page-02.png" -crop 400x500+100+100 +repage "assets/extracted-crops/who-we-are.png"

# Page 3 - Team illustration (right side)
magick "assets/extracted-pages/page-03.png" -crop 600x500+850+150 +repage "assets/extracted-crops/about-us.png"

# Page 4 - Lightbulb creative (left side)
magick "assets/extracted-pages/page-04.png" -crop 500x550+50+100 +repage "assets/extracted-crops/creative-philosophy.png"

# Page 5 - Arrow targets (right side)
magick "assets/extracted-pages/page-05.png" -crop 500x500+950+50 +repage "assets/extracted-crops/vision-mission.png"

# Page 6 - Impossible triangle (right side)
magick "assets/extracted-pages/page-06.png" -crop 550x600+900+50 +repage "assets/extracted-crops/agility.png"

# Page 7 - Services wheel (center)
magick "assets/extracted-pages/page-07.png" -crop 900x550+280+150 +repage "assets/extracted-crops/services-wheel.png"

# Page 8 - Caduceus (left side)
magick "assets/extracted-pages/page-08.png" -crop 350x550+50+50 +repage "assets/extracted-crops/medical.png"

# Page 9 - Digital icons (right side)
magick "assets/extracted-pages/page-09.png" -crop 700x500+750+100 +repage "assets/extracted-crops/digital.png"

# Page 10 - Multimedia icons (left side)
magick "assets/extracted-pages/page-10.png" -crop 600x500+50+150 +repage "assets/extracted-crops/multimedia.png"

# Page 11 - Production lightbulb (right side)
magick "assets/extracted-pages/page-11.png" -crop 400x550+1050+50 +repage "assets/extracted-crops/production.png"

# Page 12 - Process timeline (right side)
magick "assets/extracted-pages/page-12.png" -crop 350x650+1100+20 +repage "assets/extracted-crops/process.png"

# Page 13 - Handshake (left side)
magick "assets/extracted-pages/page-13.png" -crop 450x450+50+150 +repage "assets/extracted-crops/why-choose-us.png"

# Page 14 - Telephone (right side)
magick "assets/extracted-pages/page-14.png" -crop 500x450+950+250 +repage "assets/extracted-crops/contact.png"
```

**Note**: Crop coordinates are approximate. Adjust based on actual rendered dimensions. Open the page PNG, identify the illustration bounds, and calculate WxH+X+Y.

### Step 1.4: Verify Extractions

```bash
# List all cropped images
ls -la assets/extracted-crops/

# Should have 15 files:
# logo.png, hero.png, who-we-are.png, about-us.png, creative-philosophy.png,
# vision-mission.png, agility.png, services-wheel.png, medical.png,
# digital.png, multimedia.png, production.png, process.png,
# why-choose-us.png, contact.png
```

---

## Phase 2: Extract Content

### Step 2.1: Create Source Copy File

Create `content/source-copy.txt` with verbatim text from PDF. This serves as:
1. Reference during implementation
2. Verification source for QA

```bash
# Create the content directory and file
mkdir -p content
touch content/source-copy.txt
```

Then copy all text content from the spec.md "Content Reference" section into this file.

---

## Phase 3: Build Landing Page

### Step 3.1: HTML Structure

Create `index.html` with:

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
            'grit-green': '#a1cd40',
            'grit-dark': '#0b0b0b',
            'grit-dark-alt': '#151515',
          }
        }
      }
    }
  </script>

  <!-- Custom styles -->
  <link rel="stylesheet" href="css/styles.css">

  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body class="bg-grit-dark text-white">
  <!-- Header with sticky nav -->
  <header class="fixed top-0 w-full z-50 bg-grit-dark/90 backdrop-blur">
    <!-- Navigation content -->
  </header>

  <main>
    <!-- Section 1: Hero -->
    <section id="hero">...</section>

    <!-- Section 2: Who We Are -->
    <section id="who-we-are">...</section>

    <!-- Continue for all 15 sections -->
  </main>

  <!-- Footer -->
  <footer>...</footer>

  <!-- Main JS -->
  <script src="js/main.js"></script>
</body>
</html>
```

### Step 3.2: Section Template

Each content section follows this pattern:

```html
<!-- Text Left, Image Right -->
<section id="section-id" class="py-20 bg-grit-dark">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      <!-- Text Block -->
      <div class="lg:w-1/2">
        <h2 class="text-4xl font-bold mb-4 relative inline-block">
          Section Title
          <span class="absolute bottom-0 left-0 w-16 h-1 bg-grit-green"></span>
        </h2>
        <p class="text-lg text-gray-300 mb-6">
          Paragraph content...
        </p>
        <!-- Optional bullet list -->
        <ul class="space-y-2">
          <li class="flex items-start">
            <span class="w-2 h-2 bg-grit-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Bullet item text</span>
          </li>
        </ul>
      </div>
      <!-- Image Block -->
      <div class="lg:w-1/2">
        <img
          src="assets/extracted-crops/section-image.png"
          alt="Descriptive alt text"
          loading="lazy"
          class="w-full h-auto"
        >
      </div>
    </div>
  </div>
</section>

<!-- Image Left, Text Right (swap flex order) -->
<section id="section-id" class="py-20 bg-grit-dark-alt">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row-reverse items-center gap-12">
      <!-- Same structure, reversed -->
    </div>
  </div>
</section>
```

### Step 3.3: CSS Styles

Create `css/styles.css`:

```css
/* Noise texture overlay */
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
  background-image: url("data:image/svg+xml,..."); /* SVG noise */
}

/* Scroll reveal */
.reveal-hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .reveal-hidden {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

/* Button hover effects */
.btn-primary {
  @apply bg-grit-green text-grit-dark font-semibold px-6 py-3 rounded-lg;
  @apply transition-all duration-300;
  @apply hover:-translate-y-0.5 hover:shadow-lg hover:shadow-grit-green/30;
}

/* Card hover glow */
.card-hover {
  @apply transition-shadow duration-300;
  @apply hover:shadow-lg hover:shadow-grit-green/20;
}

/* Navigation active state */
nav a.active {
  @apply text-grit-green;
}

/* Focus styles */
a:focus-visible, button:focus-visible {
  @apply outline-2 outline-offset-2 outline-grit-green;
}
```

### Step 3.4: JavaScript Interactions

Create `js/main.js`:

```javascript
$(document).ready(function() {
  // Smooth scroll for nav links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 800);
    }
  });

  // Mobile menu toggle
  $('#menu-toggle').on('click', function() {
    $('#mobile-menu').toggleClass('hidden');
  });

  // Scroll reveal with Intersection Observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        entry.target.classList.remove('reveal-hidden');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal-hidden');
    revealObserver.observe(section);
  });

  // Active nav highlighting
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        $('nav a').removeClass('active');
        $(`nav a[href="#${id}"]`).addClass('active');
      }
    });
  }, { threshold: 0.5, rootMargin: '-50% 0px' });

  document.querySelectorAll('section[id]').forEach(section => {
    navObserver.observe(section);
  });
});
```

---

## Phase 4: Testing

### Step 4.1: Local Development

Open `index.html` directly in browser or use a simple HTTP server:

```bash
# Option 1: Python HTTP server
python3 -m http.server 8000

# Option 2: Open directly
open index.html
```

### Step 4.2: Quality Checklist

- [ ] All 14 content sections visible in correct order
- [ ] All text matches source-copy.txt verbatim
- [ ] All images are cropped illustrations (not full slides)
- [ ] Smooth scroll working for all nav links
- [ ] Mobile menu toggle working
- [ ] Scroll reveal animations triggering
- [ ] Nav links highlighting on scroll
- [ ] Responsive at mobile (375px), tablet (768px), desktop (1200px+)
- [ ] No console errors
- [ ] All images have alt text
- [ ] Keyboard navigation working

### Step 4.3: Browser Testing

Test in all target browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] iOS Safari
- [ ] Chrome Mobile

---

## Cleanup

After successful implementation:

```bash
# Remove temporary full-page renders (optional, for space)
rm -rf assets/extracted-pages/

# Remove old full-slide images
rm -rf assets/img/page-*.png
```

---

## Troubleshooting

### Crop coordinates wrong?
Open the page-XX.png in Preview.app, use the selection tool to identify the illustration bounds, note the coordinates from the Info panel.

### Images too large/small?
Adjust the source DPI in pdftoppm command (lower = smaller, higher = larger).

### Tailwind classes not working?
Ensure the Tailwind CDN script loads before your HTML content. Check browser console for errors.

### Smooth scroll not working?
Ensure jQuery loads before main.js. Check that section IDs match href values exactly.
