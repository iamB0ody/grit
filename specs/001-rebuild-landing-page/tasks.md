# Tasks: Rebuild GRIT Landing Page

**Input**: Design documents from `/specs/001-rebuild-landing-page/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: Manual browser testing only (per plan.md) - no automated test tasks included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Per plan.md project structure:
```
site/
├── index.html
├── css/styles.css
├── js/main.js
├── assets/illustrations/*.svg
├── content/source-copy.txt
└── README.md
```

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and directory structure

- [X] T001 Create project directory structure: site/, site/css/, site/js/, site/assets/illustrations/, site/content/
- [X] T002 [P] Create source-copy.txt with verbatim PDF content in site/content/source-copy.txt
- [X] T003 [P] Create README.md with setup instructions in site/README.md

---

## Phase 2: Assets & Foundational Styles

**Purpose**: Core assets and styling that ALL user stories depend on

**⚠️ CRITICAL**: No content implementation can begin until this phase is complete

### Illustrations

- [X] T004 Download hero.svg from unDraw.co (search: marketing, growth) to site/assets/illustrations/hero.svg
- [X] T005 [P] Download who-we-are.svg from unDraw.co (search: team, collaboration) to site/assets/illustrations/who-we-are.svg
- [X] T006 [P] Download about.svg from unDraw.co (search: analytics, planning) to site/assets/illustrations/about.svg
- [X] T007 [P] Download philosophy.svg from unDraw.co (search: creativity, innovation) to site/assets/illustrations/philosophy.svg
- [X] T008 [P] Download vision.svg from unDraw.co (search: target, goals) to site/assets/illustrations/vision.svg
- [X] T009 [P] Download agility.svg from unDraw.co (search: agile, sprint) to site/assets/illustrations/agility.svg
- [X] T010 [P] Download services.svg from unDraw.co (search: services, solutions) to site/assets/illustrations/services.svg
- [X] T011 [P] Download medical.svg from unDraw.co (search: healthcare, medicine) to site/assets/illustrations/medical.svg
- [X] T012 [P] Download digital.svg from unDraw.co (search: social media, SEO) to site/assets/illustrations/digital.svg
- [X] T013 [P] Download multimedia.svg from unDraw.co (search: video, camera) to site/assets/illustrations/multimedia.svg
- [X] T014 [P] Download production.svg from unDraw.co (search: design, studio) to site/assets/illustrations/production.svg
- [X] T015 [P] Download process.svg from unDraw.co (search: workflow, steps) to site/assets/illustrations/process.svg
- [X] T016 [P] Download why.svg from unDraw.co (search: trust, handshake) to site/assets/illustrations/why.svg
- [X] T017 [P] Download contact.svg from unDraw.co (search: contact, email) to site/assets/illustrations/contact.svg
- [X] T018 Recolor all SVGs: replace #6c63ff with #a1cd40 in site/assets/illustrations/*.svg

### Base Styles

- [X] T019 Create styles.css with base body styles (bg-dark, font-sans) in site/css/styles.css
- [X] T020 [P] Add animated gradient orb styles (.gradient-orb, .gradient-orb-1, .gradient-orb-2, @keyframes float) in site/css/styles.css
- [X] T021 [P] Add glass header styles (.glass-header with backdrop-filter: blur(12px)) in site/css/styles.css
- [X] T022 [P] Add button styles (.btn-outline, .btn-solid with glow effects) in site/css/styles.css
- [X] T023 [P] Add scroll reveal styles (.reveal-section with opacity/transform transitions) in site/css/styles.css
- [X] T024 [P] Add hover glow styles (.glow-hover with box-shadow) in site/css/styles.css
- [X] T025 [P] Add focus styles (a:focus-visible, button:focus-visible with outline) in site/css/styles.css
- [X] T026 [P] Add reduced motion media query (@media prefers-reduced-motion) in site/css/styles.css
- [X] T027 [P] Add active nav link styles (nav a.active with text-primary) in site/css/styles.css

### Base HTML Structure

- [X] T028 Create index.html with DOCTYPE, head (meta tags, Tailwind CDN script, jQuery CDN) in site/index.html
- [X] T029 Add Tailwind inline config script (colors.primary=#a1cd40, dark variants) in site/index.html
- [X] T030 Add gradient orb divs (.gradient-orb-1, .gradient-orb-2) for background decoration in site/index.html

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Company Information (Priority: P1) 🎯 MVP

**Goal**: Display all GRIT company content with selectable text, proper section structure, and brand-consistent illustrations

**Independent Test**: Open site/index.html, verify all 15 sections present with correct content from source-copy.txt, verify all text is selectable, verify illustrations display with #a1cd40 accent color

### Implementation for User Story 1

#### Hero Section
- [ ] T031 [US1] Create hero section with GRIT logo text, tagline, and hero.svg illustration in site/index.html
- [ ] T032 [US1] Add hero section full-height styling (min-h-screen, centered content) in site/index.html

#### Content Sections (Text + Illustrations)
- [ ] T033 [P] [US1] Create "Who We Are" section (id=who-we-are) with text-right layout and who-we-are.svg in site/index.html
- [ ] T034 [P] [US1] Create "About Us" section (id=about-us) with text-left layout and about.svg in site/index.html
- [ ] T035 [P] [US1] Create "Our Creative Philosophy" section (id=creative-philosophy) with text-right layout and philosophy.svg in site/index.html
- [ ] T036 [P] [US1] Create "Vision & Mission" section (id=vision-mission) with text-left layout and vision.svg in site/index.html
- [ ] T037 [P] [US1] Create "We Belive in Agitlity" section (id=agility) with text-right layout and agility.svg in site/index.html
- [ ] T038 [P] [US1] Create "Our Services" section (id=services) with centered layout, 5 bullet items, and services.svg in site/index.html
- [ ] T039 [P] [US1] Create "Medical Marketing" section (id=medical-marketing) with text-right layout, 13 bullet items, and medical.svg in site/index.html
- [ ] T040 [P] [US1] Create "Digital Marketing" section (id=digital-marketing) with text-left layout, 9 bullet items, and digital.svg in site/index.html
- [ ] T041 [P] [US1] Create "Multimedia & PR" section (id=multimedia-pr) with text-right layout, 6 bullet items, and multimedia.svg in site/index.html
- [ ] T042 [P] [US1] Create "Creative & Production Services" section (id=creative-production) with text-left layout, 5 bullet items, and production.svg in site/index.html
- [ ] T043 [P] [US1] Create "Our Process" section (id=process) with text-right layout, 5 numbered steps, and process.svg in site/index.html
- [ ] T044 [P] [US1] Create "Why Clients Choose Us" section (id=why-choose-us) with text-left layout, 4 bold items, and why.svg in site/index.html
- [ ] T045 [P] [US1] Create "Contact Information" section (id=contact) with text-right layout and contact.svg in site/index.html
- [ ] T046 [US1] Create "Thank You" footer section (id=thank-you) with centered text in site/index.html

#### Content Styling
- [ ] T047 [US1] Add section container styling with py-20 padding and container mx-auto classes in site/index.html
- [ ] T048 [US1] Add two-column flex layout (flex-col lg:flex-row) with alternating text-left/text-right pattern in site/index.html
- [ ] T049 [US1] Add bullet list styling with #a1cd40 custom dot markers in site/index.html
- [ ] T050 [US1] Add loading="lazy" attribute to all illustrations except hero.svg in site/index.html
- [ ] T051 [US1] Add descriptive alt text to all 14 illustration img elements in site/index.html

**Checkpoint**: User Story 1 complete - all content visible with illustrations

---

## Phase 4: User Story 2 - Navigate Between Sections (Priority: P1)

**Goal**: Enable smooth navigation between sections via header links with scroll-based active highlighting

**Independent Test**: Click each nav link to verify smooth scroll to correct section; scroll through page to verify active nav highlighting updates correctly

### Implementation for User Story 2

#### Header Navigation
- [ ] T052 [US2] Create glass header with fixed positioning (fixed top-0 w-full z-50) in site/index.html
- [ ] T053 [US2] Add GRIT text logo as home link (href="#hero") in header in site/index.html
- [ ] T054 [US2] Add desktop navigation links (13 sections per FR-028, hidden on mobile) in site/index.html
- [ ] T055 [US2] Add mobile hamburger menu toggle button with id="menu-toggle" and aria-label in site/index.html
- [ ] T056 [US2] Add mobile navigation dropdown menu with id="mobile-menu" (hidden by default) in site/index.html

#### JavaScript Interactions
- [ ] T057 [US2] Create main.js with jQuery $(document).ready() wrapper in site/js/main.js
- [ ] T058 [US2] Implement smooth scroll for nav links using jQuery animate() with 80px header offset in site/js/main.js
- [ ] T059 [US2] Implement mobile menu toggle (slideToggle, aria-expanded update) in site/js/main.js
- [ ] T060 [US2] Implement active nav highlighting using IntersectionObserver (threshold: 0.3) in site/js/main.js
- [ ] T061 [US2] Add close mobile menu on link click behavior in site/js/main.js

**Checkpoint**: User Story 2 complete - navigation fully functional

---

## Phase 5: User Story 3 - Experience Premium Futuristic Visuals (Priority: P2)

**Goal**: Add premium micro-interactions: hover glow effects, scroll-reveal animations, animated background orbs

**Independent Test**: Hover over cards/buttons to verify glow effects; scroll through page to verify sections animate in; verify gradient orbs subtly animate in background

### Implementation for User Story 3

#### Scroll Reveal Animations
- [ ] T062 [US3] Add reveal-section class to all content sections in site/index.html
- [ ] T063 [US3] Implement scroll-reveal IntersectionObserver (adds opacity-100 translate-y-0 on intersect) in site/js/main.js
- [ ] T064 [US3] Add initial hidden state (opacity-0 translate-y-8) to reveal sections via JS on load in site/js/main.js

#### Hover Effects
- [ ] T065 [US3] Add glow-hover class to section illustration containers in site/index.html
- [ ] T066 [US3] Add btn-outline class to outline-style CTA buttons in site/index.html
- [ ] T067 [US3] Add btn-solid class to solid-style CTA buttons in site/index.html

#### Background Animation
- [ ] T068 [US3] Position gradient-orb-1 (top: -200px, right: -100px, 600x600) in site/css/styles.css
- [ ] T069 [US3] Position gradient-orb-2 (bottom: -100px, left: -50px, 400x400) with animation-direction: reverse in site/css/styles.css

**Checkpoint**: User Story 3 complete - premium visual effects active

---

## Phase 6: User Story 4 - Access on Any Device (Priority: P2)

**Goal**: Ensure responsive layout at mobile (375px), tablet (768px), and desktop (1200px+) breakpoints

**Independent Test**: Resize browser to each breakpoint; verify layout adapts: stacked on mobile, side-by-side on desktop

### Implementation for User Story 4

#### Responsive Layout
- [ ] T070 [US4] Ensure flex-col lg:flex-row classes on all section containers in site/index.html
- [ ] T071 [US4] Ensure w-full lg:w-1/2 classes on text and image columns in site/index.html
- [ ] T072 [US4] Add responsive typography (text-3xl md:text-4xl lg:text-5xl) to section headings in site/index.html
- [ ] T073 [US4] Add responsive padding (px-4 md:px-6 lg:px-8) to main containers in site/index.html
- [ ] T074 [US4] Add responsive image sizing (max-w-sm md:max-w-md lg:max-w-lg) to illustrations in site/index.html

#### Mobile Navigation
- [ ] T075 [US4] Ensure hamburger menu visible on mobile (block md:hidden) in site/index.html
- [ ] T076 [US4] Ensure desktop nav hidden on mobile (hidden md:flex) in site/index.html
- [ ] T077 [US4] Style mobile menu dropdown with full-width links and proper spacing in site/index.html

**Checkpoint**: User Story 4 complete - responsive on all devices

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, documentation, and cleanup

- [ ] T078 Verify all text matches source-copy.txt verbatim (including typos: "Belive", "Agitlity", "Managment")
- [ ] T079 Verify all 14 SVG illustrations have #a1cd40 accent color (grep for #6c63ff should return 0)
- [ ] T080 Verify no JavaScript console errors in browser DevTools
- [ ] T081 [P] Test keyboard navigation (Tab through all interactive elements, Enter to activate)
- [ ] T082 [P] Test reduced motion (enable OS setting, verify animations disabled)
- [ ] T083 [P] Test in Chrome (latest desktop version)
- [ ] T084 [P] Test in Firefox (latest desktop version)
- [ ] T085 [P] Test in Safari (latest desktop version)
- [ ] T086 [P] Test in Edge (latest desktop version)
- [ ] T087 [P] Test in iOS Safari (real device or simulator)
- [ ] T088 [P] Test in Chrome Mobile (real device or emulator)
- [ ] T089 Update site/README.md with final section-to-illustration mapping and unDraw keywords

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Assets & Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-6)**: All depend on Phase 2 completion
  - US1 and US2 are both P1 priority but can proceed in parallel
  - US3 and US4 are P2 priority and depend on US1 content structure
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Phase 2 - Needs section IDs from US1 but can work in parallel
- **User Story 3 (P2)**: Depends on US1 section structure being in place for reveal classes
- **User Story 4 (P2)**: Can start after Phase 2 - Works on layout independent of other stories

### Within Each User Story

- Content sections (T033-T046) can all be created in parallel
- Styles (Phase 2) must exist before HTML that uses them
- JavaScript depends on HTML elements existing

### Parallel Opportunities

**Phase 2 (Illustrations - T005-T017):**
```bash
# Download all illustrations in parallel:
Task: "Download who-we-are.svg from unDraw.co..."
Task: "Download about.svg from unDraw.co..."
Task: "Download philosophy.svg from unDraw.co..."
# ... all 13 secondary illustrations can download in parallel
```

**Phase 2 (Styles - T020-T027):**
```bash
# Add all style rules in parallel to styles.css:
Task: "Add animated gradient orb styles..."
Task: "Add glass header styles..."
Task: "Add button styles..."
# ... all style additions can be written in parallel
```

**Phase 3 (Content Sections - T033-T045):**
```bash
# Create all content sections in parallel:
Task: "Create Who We Are section..."
Task: "Create About Us section..."
Task: "Create Our Creative Philosophy section..."
# ... all 13 content sections can be created in parallel
```

**Phase 7 (Browser Testing - T083-T088):**
```bash
# All browser tests can run in parallel:
Task: "Test in Chrome..."
Task: "Test in Firefox..."
Task: "Test in Safari..."
# ... all browser tests in parallel
```

---

## Implementation Strategy

### MVP First (User Stories 1 + 2)

1. Complete Phase 1: Setup
2. Complete Phase 2: Assets & Foundational Styles (CRITICAL)
3. Complete Phase 3: User Story 1 (all content visible)
4. Complete Phase 4: User Story 2 (navigation working)
5. **STOP and VALIDATE**: All content accessible and navigable
6. Deploy/demo if ready

### Full Feature Delivery

1. Complete MVP (Phases 1-4)
2. Add Phase 5: User Story 3 (premium visual effects)
3. Add Phase 6: User Story 4 (responsive polish)
4. Complete Phase 7: Polish & validation
5. Final delivery

---

## Task Summary

| Phase | Description | Task Count |
|-------|-------------|------------|
| Phase 1 | Setup | 3 |
| Phase 2 | Assets & Foundational | 27 |
| Phase 3 | US1 - View Content (P1) | 21 |
| Phase 4 | US2 - Navigation (P1) | 10 |
| Phase 5 | US3 - Visual Effects (P2) | 8 |
| Phase 6 | US4 - Responsive (P2) | 8 |
| Phase 7 | Polish | 12 |
| **Total** | | **89** |

---

## Notes

- [P] tasks = different files, no dependencies - can run in parallel
- [Story] label maps task to specific user story for traceability
- Content text MUST match source-copy.txt exactly (including typos like "Belive", "Agitlity")
- All SVGs MUST use #a1cd40 accent color (replace #6c63ff from unDraw)
- Illustrations MUST be corporate/professional style (not cartoonish)
- Test manually in browser after each checkpoint
- Commit after each task or logical group
