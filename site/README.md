# GRIT Marketing Solutions - Landing Page

A modern, responsive landing page for GRIT-360 Marketing Solutions, built with HTML, CSS, JavaScript, jQuery, and Tailwind CSS.

## 🎨 Project Overview

This single-page website showcases GRIT Marketing Solutions' services, philosophy, and approach. The design features a dark theme with lime green (#a1cd40) accents, matching the brand's visual identity from the source PDF.

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Custom CSS** - Brand-specific styles
- **JavaScript (ES6)** - Modern JavaScript
- **jQuery 3.7.1** - DOM manipulation and animations

## 🚀 Quick Start

### Local Development

1. Clone or download this repository
2. Navigate to the `site` directory
3. Open `index.html` in your web browser

```bash
cd site
open index.html  # macOS
# or
start index.html # Windows
# or
xdg-open index.html # Linux
```

**That's it!** No build process, no dependencies to install. Just open and view.

## 📁 Folder Structure

```
site/
├── assets/
│   └── img/              # Extracted PDF images (16 pages)
│       ├── page-01.png   # Hero/Cover (GRIT logo)
│       ├── page-02.png   # Who We Are (question mark)
│       ├── page-03.png   # About Us (team illustration)
│       ├── page-04.png   # Philosophy (lightbulb)
│       ├── page-05.png   # Vision & Mission (target)
│       ├── page-06.png   # Agility (stairs)
│       ├── page-07.png   # Services Overview
│       ├── page-08.png   # Medical Marketing
│       ├── page-09.png   # Digital Marketing
│       ├── page-10.png   # Multimedia & PR
│       ├── page-11.png   # Creative Services
│       ├── page-12.png   # Our Process
│       ├── page-13.png   # Why Choose Us
│       ├── page-14.png   # Contact Info
│       └── page-16.png   # Thank You
├── css/
│   └── styles.css        # Custom styles
├── js/
│   └── main.js           # jQuery interactions
├── index.html            # Main landing page
└── README.md             # This file
```

## 🎯 Features

### Design Features
- ✅ Dark theme (#0b0b0b background)
- ✅ Brand color (#a1cd40) used consistently
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern, clean layout
- ✅ High-quality images from PDF

### Interactive Features
- ✅ Smooth scrolling navigation
- ✅ Sticky header with scroll effects
- ✅ Mobile-responsive menu
- ✅ Active section highlighting
- ✅ Scroll-triggered animations
- ✅ Lazy image loading
- ✅ Hover effects on buttons and cards

### Content Sections
1. **Hero** - Brand introduction with CTA
2. **Who We Are** - Company overview
3. **About Us** - Detailed agency description
4. **Our Creative Philosophy** - Creative approach
5. **Vision & Mission** - Company vision and mission
6. **We Belive in Agitlity** - Agility statement (typo preserved as per source)
7. **Our Services** - 4 service categories:
   - Medical Marketing
   - Digital Marketing
   - Multimedia & PR
   - Creative & Production Services
8. **Our Process** - 5-step process
9. **Why Clients Choose Us** - Value proposition
10. **Contact Information** - Contact details
11. **Footer** - Thank you message

## 📋 Asset Mapping

| PDF Page | Image File | Section | Description |
|----------|-----------|---------|-------------|
| 1 | page-01.png | Hero | GRIT logo with circular design |
| 2 | page-02.png | Who We Are | Large question mark graphic |
| 3 | page-03.png | About Us | Team illustration |
| 4 | page-04.png | Philosophy | Lightbulb with gears |
| 5 | page-05.png | Vision & Mission | Target/dart illustration |
| 6 | page-06.png | Agility | Stairs with flag |
| 7 | page-07.png | Services | Services overview diagram |
| 8 | page-08.png | Medical Marketing | Medical caduceus symbol |
| 9 | page-09.png | Digital Marketing | Social media icons |
| 10 | page-10.png | Multimedia & PR | Multimedia icons |
| 11 | page-11.png | Creative Services | Lightbulb illustration |
| 12 | page-12.png | Our Process | Process steps diagram |
| 13 | page-13.png | Why Choose Us | Handshake illustration |
| 14 | page-14.png | Contact | Phone illustration |
| 16 | page-16.png | Footer | Thank You |

## 🎨 Brand Guidelines

### Colors
- **Primary**: `#a1cd40` (Lime Green) - Used for accents, bullets, buttons, links
- **Background Dark**: `#0b0b0b` - Main background
- **Background Light**: `#151515` - Alternating sections
- **Text**: `#ffffff` - White for readability

### Typography
- **Font Stack**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif)
- **Headings**: Bold, large sizes (3rem for main headings)
- **Body Text**: 1.125rem (18px) for readability

## 🔧 Customization

### Changing Brand Color
To change the brand color throughout the site:

1. **HTML** (Tailwind config in `<head>`):
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'grit-green': '#YOUR_COLOR',
            }
        }
    }
}
```

2. **CSS** (styles.css):
Replace all instances of `#a1cd40` with your color

### Adding New Sections
1. Add HTML section in `index.html`
2. Add navigation link in header
3. Style in `styles.css`
4. Add smooth scroll handling in `main.js`

### Modifying Images
Replace image files in `assets/img/` directory. Update references in `index.html` if filenames change.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 1024px (mixed layout)
- **Desktop**: > 1024px (full two-column layouts)

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ Proper heading hierarchy
- ✅ Alt text on all images
- ✅ ARIA labels on interactive elements
- ✅ Focus states for keyboard navigation
- ✅ High contrast text
- ✅ Readable font sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Notes

### Important: Preserved Typo
The section "We Belive in Agitlity" contains intentional typos as they appear in the source PDF:
- "Belive" instead of "Believe"
- "Agitlity" instead of "Agility"

This was preserved as per the requirement to maintain exact content from the PDF.

### Contact Information
The contact details contain placeholder dashes:
- Email: info@grit360-.com
- Website: www.grit360-.com

Update these in `index.html` when the actual domain is available.

## 🚧 Future Enhancements

Potential additions for future versions:
- [ ] Multi-page structure (separate pages for each service)
- [ ] Blog section
- [ ] Portfolio/case studies
- [ ] Client testimonials carousel
- [ ] Contact form with backend integration
- [ ] Google Maps integration
- [ ] Social media feed integration
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Performance optimization (WebP images)

## 📄 License

All rights reserved © 2026 GRIT Marketing Solutions

## 🤝 Credits

- Design based on "Grit Profile 11-12.pdf"
- Built with Tailwind CSS
- Icons and graphics extracted from source PDF
- jQuery for smooth interactions

## 📞 Support

For questions or support, contact:
- Email: info@grit360-.com
- Website: www.grit360-.com
- Location: Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.

---

**Built with ❤️ and GRIT**
