# Tasks: Rebuild GRIT Landing Page

**Input**: Design documents from `/specs/001-rebuild-landing-page/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: Manual browser testing only (no automated tests requested)

**Organization**: Tasks grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3, US4)
- Exact file paths included in descriptions

## Path Conventions

Static website at repository root:
- `index.html` - Main HTML file
- `css/styles.css` - Custom CSS styles
- `js/main.js` - JavaScript interactions
- `assets/extracted-crops/` - Cropped illustration images
- `content/source-copy.txt` - Verbatim text reference

---

## Phase 1: Setup (Asset Extraction)

**Purpose**: Extract and prepare assets from PDF before any HTML work can begin

- [X] T001 Create directory structure: `assets/extracted-pages/`, `assets/extracted-crops/`, `content/`
- [X] T002 Render PDF pages to PNG at 220 DPI using `pdftoppm -png -r 220 " Grit Profile 11-12.pdf" "assets/extracted-pages/page"`
- [X] T003 [P] Crop logo from page-01.png to `assets/extracted-crops/logo.png`
- [X] T004 [P] Crop hero graphic from page-01.png to `assets/extracted-crops/hero.png`
- [X] T005 [P] Crop question mark from page-02.png to `assets/extracted-crops/who-we-are.png`
- [X] T006 [P] Crop team illustration from page-03.png to `assets/extracted-crops/about-us.png`
- [X] T007 [P] Crop lightbulb from page-04.png to `assets/extracted-crops/creative-philosophy.png`
- [X] T008 [P] Crop arrow targets from page-05.png to `assets/extracted-crops/vision-mission.png`
- [X] T009 [P] Crop impossible triangle from page-06.png to `assets/extracted-crops/agility.png`
- [X] T010 [P] Crop services wheel from page-07.png to `assets/extracted-crops/services-wheel.png`
- [X] T011 [P] Crop caduceus from page-08.png to `assets/extracted-crops/medical.png`
- [X] T012 [P] Crop digital icons from page-09.png to `assets/extracted-crops/digital.png`
- [X] T013 [P] Crop multimedia icons from page-10.png to `assets/extracted-crops/multimedia.png`
- [X] T014 [P] Crop production lightbulb from page-11.png to `assets/extracted-crops/production.png`
- [X] T015 [P] Crop process timeline from page-12.png to `assets/extracted-crops/process.png`
- [X] T016 [P] Crop handshake from page-13.png to `assets/extracted-crops/why-choose-us.png`
- [X] T017 [P] Crop telephone from page-14.png to `assets/extracted-crops/contact.png`
- [X] T018 Create `content/source-copy.txt` with verbatim text from spec.md Content Reference section
- [X] T019 Verify all 15 cropped images exist in `assets/extracted-crops/`

**Checkpoint**: All assets extracted and verified - HTML development can begin

---

## Phase 2: Foundational (HTML Shell & Styles)

**Purpose**: Create base HTML structure and CSS that all user stories depend on

**CRITICAL**: No user story work can begin until this phase is complete

- [X] T020 Create `index.html` with DOCTYPE, head section, Tailwind CDN, jQuery CDN, and body shell
- [X] T021 Configure Tailwind custom colors in `index.html` head (grit-green: #a1cd40, grit-dark: #0b0b0b, grit-dark-alt: #151515)
- [X] T022 Create `css/styles.css` with noise texture overlay background
- [X] T023 Add base body styles in `css/styles.css` (font, background, text color)
- [X] T024 Add scroll-reveal CSS classes in `css/styles.css` (.reveal-hidden, .reveal-visible)
- [X] T025 Add reduced-motion media query in `css/styles.css`
- [X] T026 Add focus-visible styles for accessibility in `css/styles.css`
- [X] T027 Create empty `js/main.js` with document.ready wrapper

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - View Company Information (Priority: P1) MVP

**Goal**: Display all 15 content sections with real HTML text and cropped illustrations, matching PDF verbatim

**Independent Test**: Open page, verify all sections present in order, text is selectable, content matches PDF exactly

### Implementation for User Story 1

- [X] T028 [US1] Create sticky header structure with logo in `index.html`
- [X] T029 [US1] Create hero section (#hero) with logo and hero.png in `index.html`
- [X] T030 [US1] Create Who We Are section (#who-we-are) with text-right layout, who-we-are.png in `index.html`
- [X] T031 [US1] Create About Us section (#about-us) with text-left layout, about-us.png in `index.html`
- [X] T032 [US1] Create Our Creative Philosophy section (#creative-philosophy) with text-right layout in `index.html`
- [X] T033 [US1] Create Vision & Mission section (#vision-mission) with text-left layout in `index.html`
- [X] T034 [US1] Create We Belive in Agitlity section (#agility) with text-right layout (preserve typo) in `index.html`
- [X] T035 [US1] Create Our Services section (#services) with centered wheel diagram in `index.html`
- [X] T036 [US1] Create Medical Marketing section (#medical-marketing) with 13-item bullet list in `index.html`
- [X] T037 [US1] Create Digital Marketing section (#digital-marketing) with 9-item bullet list in `index.html`
- [X] T038 [US1] Create Multimedia & PR section (#multimedia-pr) with 6-item bullet list in `index.html`
- [X] T039 [US1] Create Creative & Production Services section (#creative-production) with 5-item bullet list in `index.html`
- [X] T040 [US1] Create Our Process section (#process) with 5 numbered steps in `index.html`
- [X] T041 [US1] Create Why Clients Choose Us section (#why-choose-us) with 4 value props in `index.html`
- [X] T042 [US1] Create Contact Information section (#contact) with email, website, address in `index.html`
- [X] T043 [US1] Create Thank You footer section (#thank-you) in `index.html`
- [X] T044 [US1] Add lazy loading attribute (loading="lazy") to all images except hero
- [X] T045 [US1] Add descriptive alt text to all 15 illustration images
- [X] T046 [US1] Verify all text content matches source-copy.txt verbatim (including typos)

**Checkpoint**: User Story 1 complete - all content visible and accessible

---

## Phase 4: User Story 2 - Navigate Between Sections (Priority: P1)

**Goal**: Implement sticky navigation with smooth scroll and active state highlighting

**Independent Test**: Click each nav link, verify smooth scroll to correct section; scroll manually, verify active link updates

### Implementation for User Story 2

- [X] T047 [US2] Add navigation links to header (About, Philosophy, Services, Process, Contact) in `index.html`
- [X] T048 [US2] Add mobile hamburger menu button with id="menu-toggle" in `index.html`
- [X] T049 [US2] Add mobile navigation menu with id="mobile-menu" (hidden by default) in `index.html`
- [X] T050 [US2] Implement smooth scroll for anchor links using jQuery in `js/main.js`
- [X] T051 [US2] Implement mobile menu toggle functionality in `js/main.js`
- [X] T052 [US2] Implement active nav highlighting using IntersectionObserver in `js/main.js`
- [X] T053 [US2] Add nav active state CSS (.active class) in `css/styles.css`
- [X] T054 [US2] Test all nav links scroll to correct section with 80px header offset

**Checkpoint**: User Story 2 complete - full navigation working

---

## Phase 5: User Story 3 - Experience Brand-Consistent Visuals (Priority: P2)

**Goal**: Apply brand styling with #a1cd40 accents, hover effects, and scroll-reveal animations

**Independent Test**: Inspect heading underlines (should be #a1cd40), hover over cards (should glow), scroll to trigger reveal animations

### Implementation for User Story 3

- [X] T055 [US3] Add green underline accent spans to all section headings in `index.html`
- [X] T056 [US3] Add custom green bullet styling to all ul/li elements using Tailwind in `index.html`
- [X] T057 [US3] Add card-hover class to interactive card elements in `index.html`
- [X] T058 [US3] Implement card hover glow effect in `css/styles.css`
- [X] T059 [US3] Add btn-primary class styling with hover lift/sheen in `css/styles.css`
- [X] T060 [US3] Implement scroll-reveal IntersectionObserver in `js/main.js`
- [X] T061 [US3] Apply reveal-hidden class to all sections on page load in `js/main.js`
- [X] T062 [US3] Verify #a1cd40 used consistently for all accents (bullets, underlines, hovers)

**Checkpoint**: User Story 3 complete - brand styling and animations working

---

## Phase 6: User Story 4 - Access on Any Device (Priority: P2)

**Goal**: Ensure responsive layout at mobile (375px), tablet (768px), and desktop (1200px+)

**Independent Test**: Resize browser to each breakpoint, verify layout adapts (stacking on mobile, side-by-side on desktop)

### Implementation for User Story 4

- [X] T063 [US4] Add responsive flex classes (flex-col lg:flex-row) to all content sections in `index.html`
- [X] T064 [US4] Add responsive width classes (w-full lg:w-1/2) to text and image blocks in `index.html`
- [X] T065 [US4] Add responsive padding/margin using Tailwind responsive prefixes in `index.html`
- [X] T066 [US4] Ensure images scale with max-w-full h-auto classes in `index.html`
- [X] T067 [US4] Add responsive text sizing (text-3xl lg:text-4xl for headings) in `index.html`
- [X] T068 [US4] Test mobile menu appears/disappears correctly at 768px breakpoint
- [X] T069 [US4] Verify no horizontal scroll at any viewport width
- [X] T070 [US4] Test touch targets are minimum 44x44px on mobile

**Checkpoint**: User Story 4 complete - fully responsive design

---

## Phase 7: Polish & Quality Assurance

**Purpose**: Final verification, cleanup, and documentation

- [X] T071 [P] Verify no JavaScript console errors in browser DevTools
- [X] T072 [P] Run Lighthouse audit, verify accessibility score > 90
- [X] T073 [P] Test keyboard navigation through all interactive elements
- [X] T074 [P] Browser test in Chrome (latest)
- [X] T075 [P] Browser test in Firefox (latest)
- [X] T076 [P] Browser test in Safari (latest)
- [X] T077 [P] Browser test in Edge (latest)
- [X] T078 [P] Mobile test on iOS Safari
- [X] T079 [P] Mobile test on Chrome Mobile
- [X] T080 Update `README.md` with setup instructions and asset mapping
- [X] T081 Remove temporary `assets/extracted-pages/` directory
- [X] T082 Remove old `assets/img/page-*.png` full-slide images
- [X] T083 Final content verification against source-copy.txt

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1: Setup (Assets)     ─────────────────────────────────┐
                                                             │
Phase 2: Foundational       ─────────────────────────────────┤ BLOCKS ALL
                                                             │
    ┌────────────────────────────────────────────────────────┘
    │
    ▼
Phase 3: US1 (Content)      ←── MVP - Can demo after this!
    │
    ▼
Phase 4: US2 (Navigation)   ←── Depends on US1 (needs sections to navigate to)
    │
    ├─────────────────┐
    ▼                 ▼
Phase 5: US3 (Brand)  Phase 6: US4 (Responsive)  ←── Can run in parallel!
    │                 │
    └────────┬────────┘
             ▼
Phase 7: Polish (QA)
```

### User Story Dependencies

- **User Story 1 (P1)**: Depends only on Setup + Foundational - CAN START FIRST
- **User Story 2 (P1)**: Depends on US1 (needs sections with IDs to navigate to)
- **User Story 3 (P2)**: Depends on US1 (needs elements to style) - Can parallel with US4
- **User Story 4 (P2)**: Depends on US1 (needs content to make responsive) - Can parallel with US3

### Within Each User Story

- HTML structure tasks before CSS/JS tasks
- All [P] tasks can run in parallel
- Non-[P] tasks run sequentially

### Parallel Opportunities

**Phase 1 (Setup)**: T003-T017 can all run in parallel (different output files)

**Phase 3 (US1)**: T030-T043 can run in parallel if different developers work on different sections

**Phase 5-6 (US3/US4)**: Entire phases can run in parallel (different concerns)

**Phase 7 (Polish)**: T071-T079 can all run in parallel (different browsers/tests)

---

## Parallel Example: Phase 1 Asset Extraction

```bash
# All crop commands can run in parallel (different source/destination files):
magick "assets/extracted-pages/page-01.png" -crop ... "assets/extracted-crops/logo.png"
magick "assets/extracted-pages/page-01.png" -crop ... "assets/extracted-crops/hero.png"
magick "assets/extracted-pages/page-02.png" -crop ... "assets/extracted-crops/who-we-are.png"
# ... etc (all 15 crops in parallel)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (extract all assets)
2. Complete Phase 2: Foundational (HTML shell + CSS base)
3. Complete Phase 3: User Story 1 (all content sections)
4. **STOP and VALIDATE**: All content visible, selectable, matches PDF
5. Demo/review before continuing

### Incremental Delivery

1. Setup + Foundational → Base structure ready
2. Add US1 → Test independently → **MVP Ready!**
3. Add US2 → Test independently → Navigation working
4. Add US3 + US4 (parallel) → Test independently → Polished responsive site
5. Polish phase → Quality verified → **Production Ready!**

### Suggested Commit Points

- After T019: "feat: extract all PDF assets"
- After T027: "feat: create HTML/CSS foundation"
- After T046: "feat: implement all content sections (US1)"
- After T054: "feat: add navigation with smooth scroll (US2)"
- After T062: "feat: add brand styling and animations (US3)"
- After T070: "feat: implement responsive layout (US4)"
- After T083: "feat: complete QA and documentation"

---

## Notes

- [P] tasks = different files, no dependencies
- [USn] label maps task to specific user story
- Preserve typos from PDF ("Belive in Agitlity", "Event Managment")
- All images must be cropped illustrations, NOT full slides
- Brand color #a1cd40 must be consistent everywhere
- Test on real mobile device, not just browser devtools resize
