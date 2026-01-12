# Feature Specification: Rebuild GRIT Landing Page

**Feature Branch**: `001-rebuild-landing-page`
**Created**: 2026-01-12
**Updated**: 2026-01-13
**Status**: Draft
**Input**: Rebuild the GRIT landing page from scratch with a modern, elegant, futuristic design using unDraw illustrations (SVG, recolored to #a1cd40), dark futuristic base colors, and premium micro-interactions while keeping GRIT branding and verbatim PDF content.

## Clarifications

### Session 2026-01-13
- Q: Which sections should appear in the header navigation? → A: Main content sections only (exclude Hero and Thank You footer)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Company Information (Priority: P1)

A visitor lands on the GRIT Marketing Solutions website and wants to learn about the company, its services, and contact information. They should be able to read all content as selectable text, navigate smoothly between sections, and experience a modern, animated interface that matches the brand identity.

**Why this priority**: This is the core purpose of a landing page - presenting company information in an accessible, engaging manner. Without this, the page has no value.

**Independent Test**: Can be fully tested by opening the page and verifying all text is selectable, all sections are present with content matching the PDF verbatim, and the visual design follows brand guidelines.

**Acceptance Scenarios**:

1. **Given** a visitor loads the landing page, **When** the page finishes loading, **Then** they see a hero section with the GRIT logo, animated gradient orb background, and brand visual elements on a dark futuristic background (#0b0f14 / #0a0a0a)
2. **Given** a visitor is viewing any section, **When** they try to select text, **Then** all headings and paragraphs are selectable real HTML text (not images)
3. **Given** a visitor scrolls through the page, **When** each section enters the viewport, **Then** the section reveals with a smooth scroll-reveal animation (IntersectionObserver-based)
4. **Given** a visitor views any section with an illustration, **When** the illustration loads, **Then** they see an SVG illustration from unDraw with consistent #a1cd40 accent color

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

### User Story 3 - Experience Premium Futuristic Visuals (Priority: P2)

A visitor experiences the page with a modern, elegant, futuristic design that reinforces the GRIT brand identity - including the primary green color (#a1cd40), dark futuristic backgrounds (#0b0f14 / #0a0a0a), abstract/tech-style unDraw SVG illustrations, and premium micro-interactions.

**Why this priority**: Brand consistency and premium visual polish builds trust and differentiates a professional marketing agency. The design must feel alive, not slide-like.

**Independent Test**: Can be fully tested by visual inspection checking color values (#a1cd40 accent, dark backgrounds), verifying illustrations are unDraw SVGs with recolored accent, testing hover states with glow effects, and confirming animated elements.

**Acceptance Scenarios**:

1. **Given** any section with a heading, **When** the heading is displayed, **Then** it uses large, modern typography with comfortable line-height
2. **Given** any card or interactive element, **When** the visitor hovers over it, **Then** a soft green glow effect (#a1cd40 at low opacity) appears with hover lift animation
3. **Given** any bullet list on the page, **When** displayed, **Then** bullets use custom green (#a1cd40) dot styling
4. **Given** the page background, **When** viewed, **Then** an animated gradient orb effect is visible (CSS-only, subtle)
5. **Given** the header, **When** scrolling, **Then** a sticky glass header with backdrop blur effect is visible
6. **Given** any button, **When** hovered, **Then** a neon-ish outline/solid variant effect with hover lift is visible

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
- **FR-004**: Page MUST use primary accent color #a1cd40 for bullets, heading accents, buttons, and interactive highlights
- **FR-005**: Page MUST use dark futuristic background colors (#0b0f14 or #0a0a0a) with subtle gradients and glow accents
- **FR-006**: Page MUST display SVG illustrations from unDraw.co (NOT cropped PDF images)
- **FR-007**: Each section MUST include a thematically-matched unDraw SVG illustration with the following mapping:
  - hero.svg (marketing team / growth / strategy theme)
  - who-we-are.svg (team / collaboration theme)
  - about.svg (analytics / planning theme)
  - philosophy.svg (creativity / ideas / innovation theme)
  - vision.svg (target / goals / roadmap theme)
  - agility.svg (sprint / iteration / fast delivery theme)
  - services.svg (services / solutions theme)
  - medical.svg (healthcare / doctor / medicine theme)
  - digital.svg (social media / SEO / analytics theme)
  - multimedia.svg (video / camera / press / media theme)
  - production.svg (design / production / studio theme)
  - process.svg (workflow / steps / process theme)
  - why.svg (trust / quality / success theme)
  - contact.svg (contact / email / location theme)
- **FR-008**: All unDraw SVG illustrations MUST be recolored to use #a1cd40 as the accent color (replacing default unDraw colors like #6c63ff)
- **FR-009**: Page MUST include GRIT logo (text-based or extracted from brand assets)
- **FR-010**: Illustrations MUST be corporate/professional style (abstract/tech scenes, not cartoonish or playful)

#### Layout Requirements
- **FR-011**: Content sections MUST alternate between text-left/image-right and image-left/text-right layouts
- **FR-012**: Page MUST have a sticky glass header with backdrop blur effect and navigation links
- **FR-013**: Navigation MUST include smooth scroll behavior when clicking section links
- **FR-014**: Mobile view MUST include a hamburger menu toggle with slide-down navigation
- **FR-028**: Header navigation MUST include only main content sections: Who We Are, About Us, Our Creative Philosophy, Vision & Mission, We Belive in Agitlity, Our Services, Medical Marketing, Digital Marketing, Multimedia & PR, Creative & Production Services, Our Process, Why Clients Choose Us, Contact Information (excludes Hero and Thank You)

#### Animation/Interaction Requirements
- **FR-015**: Page MUST implement scroll-reveal animations using IntersectionObserver (sections fade/slide in when entering viewport)
- **FR-016**: Cards and interactive elements MUST have hover states with soft green glow (#a1cd40 at low opacity)
- **FR-017**: Buttons MUST have hover lift effects with neon-ish outline/solid variants
- **FR-018**: Navigation links MUST highlight based on current scroll position (active nav indicator)
- **FR-019**: Page MUST include animated gradient orb background (CSS-only, subtle movement)
- **FR-020**: Heading underlines MUST have subtle animation on hover

#### Technical Requirements
- **FR-021**: Page MUST use HTML, CSS, JavaScript, and jQuery only (no React/Vue/build tools)
- **FR-022**: Page MUST use Tailwind CSS via CDN with inline config defining colors.primary = "#a1cd40"
- **FR-023**: SVG illustrations (except hero) MUST use lazy loading where supported
- **FR-024**: Page MUST include semantic HTML structure with proper heading hierarchy
- **FR-025**: All illustrations MUST have descriptive alt text
- **FR-026**: Interactive elements MUST have visible keyboard focus styles
- **FR-027**: Animations MUST respect `prefers-reduced-motion` media query

### Key Entities

- **Section**: A distinct content block containing a heading, body text, and thematically-matched unDraw SVG illustration
- **Navigation Item**: A link in the glass header that points to a specific section and indicates active state based on scroll position
- **unDraw Illustration**: An SVG illustration from unDraw.co, recolored to use #a1cd40 as the accent color, matching the section's theme
- **Brand Color**: The primary accent color (#a1cd40) used consistently for illustrations, interactive elements, and decorative accents
- **Glass Header**: A sticky navigation header with backdrop blur effect for a premium futuristic feel

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of page text content matches the PDF verbatim (verified by comparison with source-copy.txt)
- **SC-002**: All 14 illustrations are SVGs from unDraw.co with #a1cd40 accent color (no cropped PDF images)
- **SC-003**: All 14 content sections present and in correct order
- **SC-004**: Primary color #a1cd40 used consistently across all specified locations (illustrations, bullets, buttons, hover states, glow effects)
- **SC-005**: Page achieves responsive layout at 3 breakpoints: mobile (375px), tablet (768px), desktop (1200px+)
- **SC-006**: Navigation smooth-scrolls to correct section within 1 second of click
- **SC-007**: Page loads with no JavaScript console errors
- **SC-008**: All SVG illustrations have non-empty alt attributes
- **SC-009**: All interactive elements (links, buttons) have visible focus indicators when focused via keyboard
- **SC-010**: Scroll-reveal animations trigger when sections enter viewport (or degrade gracefully if JS disabled)
- **SC-011**: Page looks modern/futuristic and does not resemble slides (visual verification)
- **SC-012**: Glass header with backdrop blur effect is visible when scrolling
- **SC-013**: Animated gradient orb background is present and subtle
- **SC-014**: All hover effects (glow, lift, underline animations) function correctly

## Assumptions

- The PDF file "Grit Profile 11-12.pdf" is the authoritative source for all text content (text extracted verbatim)
- unDraw.co is available for downloading SVG illustrations (if unavailable, placeholder SVGs with TODO list will be used)
- unDraw SVGs can be recolored by replacing accent colors (e.g., #6c63ff) with #a1cd40
- The existing landing page can be completely replaced
- jQuery CDN and Tailwind CDN will remain available
- No backend functionality is required - this is a static landing page
- Contact form submission (if any) is out of scope - only contact information display is required
- Illustrations should be corporate/professional style, not playful or cartoonish

## Deliverables

- `site/index.html` - Main landing page with futuristic design
- `site/css/styles.css` - Custom styles (animated backgrounds, glow effects, glass header)
- `site/js/main.js` - jQuery interactions and animations (smooth scroll, mobile menu, scroll reveal, active nav)
- `site/assets/illustrations/*.svg` - unDraw SVG illustrations recolored to #a1cd40
- `site/content/source-copy.txt` - Verbatim text extracted from PDF
- `site/README.md` - Setup instructions, section-to-illustration mapping, and unDraw keywords used

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
