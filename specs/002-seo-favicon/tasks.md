# Tasks: SEO Optimization & Favicon

**Input**: Design documents from `/specs/002-seo-favicon/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: Not requested - manual validation via browser testing and online tools.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Project root**: `/` for robots.txt, sitemap.xml, favicon.ico, site.webmanifest
- **Assets**: `/assets/` for favicon PNG files and social image
- **HTML**: `/index.html` for meta tags and structured data

---

## Phase 1: Setup (Asset Generation)

**Purpose**: Generate required favicon assets and social share image

- [x] T001 [P] Generate favicon-16x16.png (16x16) from assets/logo.png to /assets/favicon-16x16.png
- [x] T002 [P] Generate favicon-32x32.png (32x32) from assets/logo.png to /assets/favicon-32x32.png
- [x] T003 [P] Generate favicon.ico (32x32) from assets/logo.png to /favicon.ico (root)
- [x] T004 [P] Generate apple-touch-icon.png (180x180) from assets/logo.png to /assets/apple-touch-icon.png
- [x] T005 [P] Generate android-chrome-192x192.png from assets/logo.png to /assets/android-chrome-192x192.png
- [x] T006 [P] Generate android-chrome-512x512.png from assets/logo.png to /assets/android-chrome-512x512.png
- [x] T007 [P] Create social share image og-image.jpg (1200x630) with GRIT logo on dark background to /assets/og-image.jpg

**Checkpoint**: All favicon and image assets generated and ready for implementation

---

## Phase 2: Foundational (Crawler Infrastructure)

**Purpose**: Create supporting files that enable search engine access

**Note**: These files can be created in parallel as they have no dependencies

- [x] T008 [P] Create robots.txt with sitemap reference at /robots.txt
- [x] T009 [P] Create sitemap.xml with homepage URL at /sitemap.xml
- [x] T010 [P] Create site.webmanifest with app name, icons, and theme colors at /site.webmanifest

**Checkpoint**: Crawler infrastructure ready - meta tag implementation can begin

---

## Phase 3: User Story 1 - Search Engine Discovery (Priority: P1) MVP

**Goal**: Enable search engines to properly index the site with correct metadata and social sharing previews

**Independent Test**:
- Run Google Lighthouse SEO audit (target: 90+)
- Test social sharing with Facebook Sharing Debugger
- Test Twitter Card Validator
- Verify meta tags in browser DevTools

### Implementation for User Story 1

- [x] T011 [US1] Add primary SEO meta tags (title, robots, author, canonical) to /index.html `<head>`
- [x] T012 [US1] Add Open Graph meta tags (og:type, og:url, og:title, og:description, og:image, og:site_name) to /index.html `<head>`
- [x] T013 [US1] Add Twitter Card meta tags (twitter:card, twitter:url, twitter:title, twitter:description, twitter:image) to /index.html `<head>`
- [x] T014 [US1] Add theme-color meta tag for mobile browsers to /index.html `<head>`
- [x] T015 [US1] Audit and ensure proper heading hierarchy (single H1, logical H2-H6) in /index.html
- [x] T016 [US1] Audit and add alt text to any images missing it in /index.html

**Checkpoint**: User Story 1 complete - site should be SEO-ready with proper social sharing previews

---

## Phase 4: User Story 2 - Favicon Recognition (Priority: P2)

**Goal**: Display distinctive GRIT favicon in browser tabs, bookmarks, and mobile home screens

**Independent Test**:
- Open site in Chrome, Firefox, Safari, Edge - verify favicon in tab
- Bookmark the page - verify favicon appears in bookmarks
- Add to iOS home screen - verify Apple Touch Icon
- Add to Android home screen - verify Android icon

### Implementation for User Story 2

- [x] T017 [US2] Add favicon.ico link tag to /index.html `<head>`
- [x] T018 [US2] Add favicon-16x16.png link tag to /index.html `<head>`
- [x] T019 [US2] Add favicon-32x32.png link tag to /index.html `<head>`
- [x] T020 [US2] Add apple-touch-icon link tag to /index.html `<head>`
- [x] T021 [US2] Add web manifest link tag to /index.html `<head>`

**Checkpoint**: User Story 2 complete - favicon displays correctly across all browsers and platforms

---

## Phase 5: User Story 3 - Content Accessibility for Crawlers (Priority: P3)

**Goal**: Provide structured data (JSON-LD) for rich search results and enhanced crawler understanding

**Independent Test**:
- Validate with Google Rich Results Test
- Validate with Schema Markup Validator
- Verify no errors reported

### Implementation for User Story 3

- [x] T022 [US3] Add JSON-LD structured data script with LocalBusiness schema to /index.html `<head>`
- [x] T023 [US3] Include Organization, WebSite, and WebPage schemas in JSON-LD @graph to /index.html
- [x] T024 [US3] Add service catalog (Medical Marketing, Digital Marketing, Multimedia, Creative Production) to structured data in /index.html

**Checkpoint**: User Story 3 complete - structured data validates without errors

---

## Phase 6: Polish & Validation

**Purpose**: Final validation and documentation

- [ ] T025 Run Google Lighthouse SEO audit and verify score 90+ (Manual - see VALIDATION.md)
- [ ] T026 [P] Test favicon in Chrome, Firefox, Safari, Edge (Manual - see VALIDATION.md)
- [ ] T027 [P] Test social sharing preview with Facebook Sharing Debugger (Manual - see VALIDATION.md)
- [ ] T028 [P] Test Twitter Card with Twitter Card Validator (Manual - see VALIDATION.md)
- [ ] T029 [P] Validate structured data with Google Rich Results Test (Manual - see VALIDATION.md)
- [x] T030 Verify robots.txt accessible at /robots.txt
- [x] T031 Verify sitemap.xml accessible at /sitemap.xml
- [ ] T032 Test mobile home screen icon on iOS and Android (Manual - requires devices)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - asset generation can start immediately
- **Foundational (Phase 2)**: No dependencies - can run in parallel with Phase 1
- **User Story 1 (Phase 3)**: Depends on T007 (og-image.jpg for social sharing)
- **User Story 2 (Phase 4)**: Depends on Phase 1 (favicon assets must exist)
- **User Story 3 (Phase 5)**: No dependencies on other user stories
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after og-image.jpg is created (T007)
- **User Story 2 (P2)**: Can start after all favicon PNGs exist (T001-T006)
- **User Story 3 (P3)**: No asset dependencies - can start after Phase 2

### Within Each User Story

- US1: All meta tag additions can be done sequentially in one editing session
- US2: All favicon link tags can be done sequentially in one editing session
- US3: Structured data should be added as a single JSON-LD block

### Parallel Opportunities

**Phase 1 (all parallel)**:
```
T001 || T002 || T003 || T004 || T005 || T006 || T007
```

**Phase 2 (all parallel)**:
```
T008 || T009 || T010
```

**Validation (parallel)**:
```
T026 || T027 || T028 || T029
```

---

## Parallel Example: Setup Phase

```bash
# Launch all asset generation tasks together:
Task: "Generate favicon-16x16.png (16x16) from assets/logo.png"
Task: "Generate favicon-32x32.png (32x32) from assets/logo.png"
Task: "Generate favicon.ico (32x32) from assets/logo.png"
Task: "Generate apple-touch-icon.png (180x180) from assets/logo.png"
Task: "Generate android-chrome-192x192.png from assets/logo.png"
Task: "Generate android-chrome-512x512.png from assets/logo.png"
Task: "Create social share image og-image.jpg (1200x630)"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Generate og-image.jpg (T007 from Phase 1)
2. Create robots.txt and sitemap.xml (Phase 2)
3. Complete Phase 3: User Story 1 (meta tags)
4. **STOP and VALIDATE**: Run Lighthouse SEO audit
5. Site is now SEO-optimized and shareable on social media

### Incremental Delivery

1. Complete Setup + Foundational → Assets and crawler files ready
2. Add User Story 1 → Test with Lighthouse and social debuggers → Deploy (MVP!)
3. Add User Story 2 → Test favicon across browsers → Deploy
4. Add User Story 3 → Validate structured data → Deploy
5. Each story adds value without breaking previous stories

### Single Developer Strategy

Recommended order for single developer working sequentially:

1. **Asset Generation**: Generate all favicon sizes and og-image in one session
2. **Supporting Files**: Create robots.txt, sitemap.xml, site.webmanifest
3. **HTML Updates**: Edit index.html once to add all meta tags, favicon links, and structured data
4. **Validation**: Run all validation tools

---

## Task Summary

| Phase | Task Count | Parallel Tasks |
|-------|------------|----------------|
| Phase 1: Setup | 7 | 7 (all) |
| Phase 2: Foundational | 3 | 3 (all) |
| Phase 3: US1 - SEO | 6 | 0 |
| Phase 4: US2 - Favicon | 5 | 0 |
| Phase 5: US3 - Structured Data | 3 | 0 |
| Phase 6: Polish | 8 | 4 |
| **Total** | **32** | **14** |

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Asset generation (Phase 1) can use online tools or command-line (see quickstart.md)
- Validation tools are free online services
- All HTML changes are to /index.html `<head>` section
- Commit after each phase for clean git history
