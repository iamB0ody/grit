# Feature Specification: Rebuild GRIT Landing Page

**Feature Branch**: `001-rebuild-landing-page`
**Created**: 2026-01-12
**Status**: Draft
**Input**: Rebuild the GRIT Marketing Solutions landing page correctly - using real HTML text (not full-slide images) with only cropped illustration assets from the PDF slides.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Company Information (Priority: P1)

A visitor lands on the GRIT Marketing Solutions website and wants to learn about the company, its services, and contact information. They should be able to read all content as selectable text, navigate smoothly between sections, and experience a modern, animated interface that matches the brand identity.

**Why this priority**: This is the core purpose of a landing page - presenting company information in an accessible, engaging manner. Without this, the page has no value.

**Independent Test**: Can be fully tested by opening the page and verifying all text is selectable, all sections are present with content matching the PDF verbatim, and the visual design follows brand guidelines.

**Acceptance Scenarios**:

1. **Given** a visitor loads the landing page, **When** the page finishes loading, **Then** they see a hero section with the GRIT logo and brand visual elements on a dark background (#0b0b0b/#111)
2. **Given** a visitor is viewing any section, **When** they try to select text, **Then** all headings and paragraphs are selectable real HTML text (not images)
3. **Given** a visitor scrolls through the page, **When** each section enters the viewport, **Then** the section reveals with a subtle fade/slide animation

---

### User Story 2 - Navigate Between Sections (Priority: P1)

A visitor wants to quickly jump to specific sections of interest (e.g., Services, Contact) without manually scrolling through the entire page.

**Why this priority**: Navigation is essential for usability on a multi-section landing page. Users need efficient access to information.

**Independent Test**: Can be fully tested by clicking each navigation link and verifying smooth scroll to the correct section, with the active link highlighted.

**Acceptance Scenarios**:

1. **Given** a visitor is at any position on the page, **When** they click a navigation link, **Then** the page smoothly scrolls to the corresponding section
2. **Given** a visitor scrolls past different sections, **When** a section becomes the primary viewport content, **Then** the corresponding navigation link becomes highlighted
3. **Given** a visitor is viewing on mobile, **When** they tap the menu toggle, **Then** a mobile navigation menu appears with all section links

---

### User Story 3 - Experience Brand-Consistent Visuals (Priority: P2)

A visitor experiences the page with visual elements that reinforce the GRIT brand identity - including the primary green color (#a1cd40), dark backgrounds, custom illustrations from each slide, and interactive micro-animations.

**Why this priority**: Brand consistency builds trust and professionalism. Visual polish differentiates a professional agency.

**Independent Test**: Can be fully tested by visual inspection against PDF reference, checking color values, verifying illustrations are cropped (not full slides), and testing hover states.

**Acceptance Scenarios**:

1. **Given** any section with a heading, **When** the heading is displayed, **Then** it has a small #a1cd40 underline accent matching the PDF style
2. **Given** any card or interactive element, **When** the visitor hovers over it, **Then** a soft green glow effect (#a1cd40 at low opacity) appears
3. **Given** any bullet list on the page, **When** displayed, **Then** bullets use custom green (#a1cd40) dot styling

---

### User Story 4 - Access on Any Device (Priority: P2)

A visitor accesses the landing page from various devices (desktop, tablet, mobile) and has a fully functional, visually appropriate experience on each.

**Why this priority**: Multi-device access is essential for modern web presence. Many visitors will access via mobile.

**Independent Test**: Can be fully tested by viewing the page at desktop (1920px), tablet (768px), and mobile (375px) widths and verifying layout adapts appropriately.

**Acceptance Scenarios**:

1. **Given** a visitor on desktop, **When** viewing a content section, **Then** text and illustration appear side-by-side (alternating left/right)
2. **Given** a visitor on mobile, **When** viewing a content section, **Then** content stacks vertically with text above/below the illustration
3. **Given** a visitor on any device, **When** images load, **Then** they scale responsively without distortion

---

### Edge Cases

- What happens when JavaScript is disabled? Navigation links should still work as anchor links; animations gracefully degrade
- How does the page handle slow network connections? Images should use lazy loading (except hero); content should remain accessible while images load
- What happens if an illustration image fails to load? Alt text should describe the visual; layout should not break
- How does the page handle users who prefer reduced motion? Animations should respect `prefers-reduced-motion` media query

## Requirements *(mandatory)*

### Functional Requirements

#### Content Requirements
- **FR-001**: Page MUST display all text content from the PDF verbatim, including preserving original spellings (e.g., "Belive" not "Believe", "Agitlity" not "Agility")
- **FR-002**: Page MUST use real HTML text elements for all headings and paragraphs (not text embedded in images)
- **FR-003**: Page MUST include exactly these sections in order:
  1. Hero (cover)
  2. Who We Are
  3. About Us
  4. Our Creative Philosophy
  5. Vision & Mission
  6. We Belive in Agitlity
  7. Our Services (wheel diagram)
  8. Medical Marketing
  9. Digital Marketing
  10. Multimedia & PR
  11. Creative & Production Services
  12. Our Process
  13. Why Clients Choose Us
  14. Contact Information
  15. Thank You footer

#### Visual/Brand Requirements
- **FR-004**: Page MUST use primary accent color #a1cd40 for bullets, heading underlines, buttons, and interactive highlights
- **FR-005**: Page MUST use dark background colors (#0b0b0b or #111) with subtle gradient and noise texture
- **FR-006**: Page MUST display only cropped illustration assets from PDF slides (NOT full-slide screenshots)
- **FR-007**: Each section MUST include the corresponding illustration cropped from its PDF slide:
  - hero.png (page 1 - concentric circles and logo)
  - who-we-are.png (page 2 - question mark graphic)
  - about-us.png (page 3 - team illustration with leaves)
  - creative-philosophy.png (page 4 - lightbulb with gear)
  - vision-mission.png (page 5 - arrow hitting targets)
  - agility.png (page 6 - impossible triangle with businesspeople)
  - services-wheel.png (page 7 - service wheel diagram)
  - medical.png (page 8 - caduceus medical symbol)
  - digital.png (page 9 - digital marketing icons collage)
  - multimedia.png (page 10 - social/multimedia icons)
  - production.png (page 11 - lightbulb illustration)
  - process.png (page 12 - vertical process timeline)
  - why-choose-us.png (page 13 - handshake in circle)
  - contact.png (page 14 - vintage telephone)
- **FR-008**: Page MUST include GRIT logo extracted from PDF

#### Layout Requirements
- **FR-009**: Content sections MUST alternate between text-left/image-right and image-left/text-right layouts
- **FR-010**: Page MUST have a sticky header with navigation links
- **FR-011**: Navigation MUST include smooth scroll behavior when clicking section links
- **FR-012**: Mobile view MUST include a hamburger menu toggle for navigation

#### Animation/Interaction Requirements
- **FR-013**: Page MUST implement scroll-reveal animations (sections fade/slide in when entering viewport)
- **FR-014**: Cards and interactive elements MUST have hover states with soft green glow
- **FR-015**: Buttons MUST have hover lift and sheen effects
- **FR-016**: Navigation links MUST highlight based on current scroll position

#### Technical Requirements
- **FR-017**: Page MUST use HTML, CSS, JavaScript, and jQuery only (no React/Vue/build tools)
- **FR-018**: Page MUST use Tailwind CSS via CDN
- **FR-019**: Images (except hero) MUST use lazy loading (`loading="lazy"`)
- **FR-020**: Page MUST include semantic HTML structure with proper heading hierarchy
- **FR-021**: All images MUST have descriptive alt text
- **FR-022**: Interactive elements MUST have visible keyboard focus styles

### Key Entities

- **Section**: A distinct content block containing a heading, body text, and illustration image corresponding to one PDF slide
- **Navigation Item**: A link in the header that points to a specific section and indicates active state based on scroll position
- **Illustration Asset**: A cropped image extracted from a PDF slide containing only the visual element (not full slide background)
- **Brand Color**: The primary accent color (#a1cd40) used consistently for interactive and decorative elements

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of page text content matches the PDF verbatim (verified by comparison with source-copy.txt)
- **SC-002**: 0 full-slide images used on the page - only cropped illustration assets from extracted-crops/ folder
- **SC-003**: All 14 content sections present and in correct order
- **SC-004**: Primary color #a1cd40 used in all specified locations (bullets, underlines, buttons, hover states)
- **SC-005**: Page achieves responsive layout at 3 breakpoints: mobile (375px), tablet (768px), desktop (1200px+)
- **SC-006**: Navigation smooth-scrolls to correct section within 1 second of click
- **SC-007**: Page loads with no JavaScript console errors
- **SC-008**: All images have non-empty alt attributes
- **SC-009**: All interactive elements (links, buttons) have visible focus indicators when focused via keyboard
- **SC-010**: Scroll-reveal animations trigger when sections enter viewport (or degrade gracefully if JS disabled)

## Assumptions

- The PDF file "Grit Profile 11-12.pdf" is the authoritative source for all content and visual reference
- Tools for PDF-to-PNG conversion (pdftoppm or similar) and image cropping (ImageMagick or similar) are available on the system
- The existing incorrect landing page can be completely replaced
- jQuery CDN and Tailwind CDN will remain available
- No backend functionality is required - this is a static landing page
- Contact form submission (if any) is out of scope - only contact information display is required

## Deliverables

- `site/index.html` - Main landing page
- `site/css/styles.css` - Custom styles
- `site/js/main.js` - jQuery interactions and animations
- `site/assets/extracted-crops/*` - Cropped illustration images
- `site/content/source-copy.txt` - Verbatim text extracted from PDF
- `site/README.md` - Setup instructions and asset mapping

## Content Reference (Verbatim from PDF)

### Page 1 - Hero
- Logo: GRIT MARKETING SOLUTIONS

### Page 2 - Who We Are
**Who We Are**

At GRIT360, we transform ideas into powerful stories.
We combine strategic thinking with creative excellence, serving as a trusted partner for global brands in marketing solutions & event management.

### Page 3 - About Us
**About Us**

GRIT360- is a creative agency built for brands that refuse to blend in. We believe that every brand has a story & every touch point counts to provide unparalleled experience to our clients.
That's what we do best.

We craft ideas with personality: ideas that provoke emotion, spark curiosity, and make audiences stop, feel, and react.

We blend a unique artistic touch with strategic discipline acting as your branding and digital consultant.

The result? Campaigns, visuals, and experiences that elevate brands and connect them to people in meaningful, culturally relevant ways.

### Page 4 - Our Creative Philosophy
**Our Creative Philosophy**

Creativity is more than aesthetics.
For us, it is transformation, the ability of an idea to shift perception, ignite behavior, and shape culture.

Our philosophy is simple:
Strategic clarity inspires bold creativity. Bold creativity fuels brand growth.

Our formula combines artistic vision with strategic insight and deep experience, enabling us to be the trusted strategic partner our clients rely on.

We don't chase trends; we create them.

### Page 5 - Vision & Mission
**Vision & Mission**

**Vision:**
To redefine creative communication by crafting bold ideas that influence culture and transform brands.

**Mission:**
To deliver strategic, expressive, and human-centered creative solutions that help brands rise above the noise, connect deeply, and inspire action.

### Page 6 - We Belive in Agitlity
**We Belive in Agitlity**

**GRIT- 360 was built differently.**
We operate with a high level of agility, enabling seamless, constraint-free collaboration.
Our team can integrate at any stage- creative, design, production, or digital-providing timely, value-driven input to support your objective

Whether we're launching a product, building a brand, or translating scientific data into meaningful communication, we bring creativity, clarity, and craftsmanship to everything we do.

### Page 7 - Our Services
**Our Services**
- Medical Marketing
- Digital Marketing Solutions
- Event Managment
- Multimedia & PR Services
- Creative & Production Services

### Page 8 - Medical Marketing
**Medical Marketing**

When it comes to healthcare and scientific communication, precision is everything, but that shouldn't come at the cost of creativity.
We specialize in transforming complex scientific content into clear, engaging, human-centered stories that resonate with both HCPs and patients.

**Our services include:**
- Content structuring & planning
- Data mining & adaptation
- Data Refinement & Validation
- Data validation & updates
- Reference retrieval & citation
- E-detailing & launch pads
- Mass email & RTE campaigns
- Patient & HCP educational materials
- Professional medical translation
- Advisory board management
- Protocol development
- Consensus meetings
- Scientific workshops

### Page 9 - Digital Marketing
**Digital Marketing**

We create digital strategies that combine storytelling, performance, and data, ensuring your brand reaches the right people, at the right moment, with the right message.

**Our digital services include:**
- Social media strategy & management
- Content calendar creation
- Paid advertising (Meta, Google, TikTok, LinkedIn)
- Copywriting & visual content creation
- Engagement & community management
- Email marketing & automation
- SEO, SEM, and performance analytics
- AR-VR technologies
- Hologram displays

### Page 10 - Multimedia & PR
**Multimedia & PR**

We produce visual content designed to move audiences, emotionally and visually.

From cinematic videos to punchy animated pieces, we craft content that captures attention and elevates your brand's narrative.

**We create:**
- Brand films and commercial videos
- 2D & 3D animated content
- Motion graphics & dynamic visual storytelling
- Photography & product shoots
- Scriptwriting, storyboarding & full production
- Audio branding and podcast production

### Page 11 - Creative & Production Services
**Creative & Production Services**

We bring ideas to life through storytelling, visuals, and bold concepts that shape brand identities and ignite audience engagement.

**Our creative services include:**
- Concept development and campaign platform creation
- Big ideas for ATL, BTL, and digital
- Storytelling and narrative design
- Copywriting and messaging systems
- Art direction and visual conceptualization

Every idea is designed to be memorable, purposeful, and culturally relevant.
Creativity works best when people feel it, and our job is to make them feel something.

Our production Capabilities enable us to support you across the Middle East, Europe, and the United States.

### Page 12 - Our Process
**Our Process**

**Every powerful project begins with a clear process.**

**1. Discovery & Insight**
We dive deep into your brand, audience, and market to identify real challenges and opportunities.

**2. Strategy & Positioning**
We define the narrative, messaging, and direction that will drive the creative work.

**3. Creative Development**
Ideas come to life through concepts, visuals, and storytelling.

**4. Production & Execution**
From design to video to digital content, we build high-quality deliverables ready to launch.

**5. Optimization & Growth**
We track impact, learn, refine, and scale — ensuring long-term brand success.

Our process is collaborative, transparent, and built for results.

### Page 13 - Why Clients Choose Us
**Why Clients Choose Us**

**Brands choose GRIT- 360 because we deliver work that is:**

Bold — creatively expressive

Strategic — grounded in insight

Clear — visually and narratively distinct

Effective — built to perform

We understand industries, but more importantly, we understand people.
We don't just produce content , we create meaning, emotion, and momentum.

Most of all, we act as partners, not vendors.

### Page 14 - Contact Information
**Contact Information**

Let's Build Something Exceptional

info@grit360-.com

www.grit360-.com

Meydan Grandstand, 6th Floor, Meydan Road,
Nad Al Sheba, Dubai, U.A.E.

### Page 16 - Thank You
**Thank You**
