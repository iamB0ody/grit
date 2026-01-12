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
2. Open `index.html` in your web browser

```bash
open index.html  # macOS
# or
start index.html # Windows
# or
xdg-open index.html # Linux
```

**That's it!** No build process, no dependencies to install. Just open and view.

## 📁 Folder Structure

```
grit/
├── assets/
│   ├── extracted-crops/  # Cropped illustration images from PDF
│   │   ├── logo.png              # GRIT logo
│   │   ├── hero.png              # Hero decorative graphic
│   │   ├── who-we-are.png        # Question mark illustration
│   │   ├── about-us.png          # Team illustration
│   │   ├── creative-philosophy.png  # Lightbulb with tools
│   │   ├── vision-mission.png    # Arrow hitting targets
│   │   ├── agility.png           # Impossible triangle
│   │   ├── services-wheel.png    # Services diagram
│   │   ├── medical.png           # Caduceus symbol
│   │   ├── digital.png           # Digital marketing icons
│   │   ├── multimedia.png        # Multimedia icons
│   │   ├── production.png        # Production lightbulb
│   │   ├── process.png           # Process timeline
│   │   ├── why-choose-us.png     # Handshake icon
│   │   └── contact.png           # Vintage telephone
│   └── extracted-pages/  # Full PDF page renders (temporary)
├── content/
│   └── source-copy.txt   # Verbatim text from PDF
├── css/
│   └── styles.css        # Custom styles
├── js/
│   └── main.js           # jQuery interactions
├── specs/                # Feature specifications
├── .gitignore            # Git ignore file
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

All images are cropped illustrations extracted from the PDF at 220 DPI.

| PDF Page | Cropped Image | Section | Description |
|----------|---------------|---------|-------------|
| 1 | logo.png | Header/Hero | GRIT Marketing Solutions logo |
| 1 | hero.png | Hero | Decorative concentric circles graphic |
| 2 | who-we-are.png | Who We Are | Stylized question mark outline |
| 3 | about-us.png | About Us | Team of three with foliage background |
| 4 | creative-philosophy.png | Philosophy | Lightbulb with creative tools |
| 5 | vision-mission.png | Vision & Mission | Green arrow hitting red targets |
| 6 | agility.png | Agility | Impossible triangle with people |
| 7 | services-wheel.png | Services | Circular service diagram |
| 8 | medical.png | Medical Marketing | Green caduceus medical symbol |
| 9 | digital.png | Digital Marketing | Digital marketing icons collage |
| 10 | multimedia.png | Multimedia & PR | Social media and multimedia icons |
| 11 | production.png | Creative Services | Green lightbulb with spark |
| 12 | process.png | Our Process | Vertical timeline with 5 steps |
| 13 | why-choose-us.png | Why Choose Us | Handshake in green circular badge |
| 14 | contact.png | Contact | Vintage rotary telephone in green |

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
Replace image files in `assets/extracted-crops/` directory. Update references in `index.html` if filenames change.

Note: All images are cropped illustrations extracted from the PDF, not full page images.

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

## 📋 Project Constitution

This project follows a strict constitution that governs all development work. See [`.specify/memory/constitution.md`](.specify/memory/constitution.md) for:

- **8 Core Principles**: Brand fidelity, client-driven development, design consistency, content accuracy, performance, accessibility, maintainability, and browser compatibility
- **Quality Standards**: Visual QA checklist, content review process, and testing approach
- **Change Management**: Client approval process, version control practices, and emergency hotfix procedures
- **Governance**: Amendment process and compliance review requirements

**All contributors must review and follow the constitution before making changes.**

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
