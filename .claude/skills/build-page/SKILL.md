---
name: build-page
description: Build a new frontend page or screen (e.g. Customers list, Customer form, Dashboard) end to end — design read-through, file layout proposal, mobile-first implementation, all UI states, and verification. Use when the user asks to create or substantially rebuild a page, screen, or view in Frontend/.
---

# Build a page

Follow these steps in order. Stop and ask at any step where requirements are unclear.

## 1. Understand
- Read `Frontend/DESIGN.md` — at minimum Colors, Typography, Layout/Responsive Strategy, Components, Application shell, Do's and Don'ts.
- Inspect `Frontend/src/` for the existing router, layout/app shell, shared components, and `src/components/ui` primitives that can be reused.
- If the page shows backend data, read the relevant router and schema in `Backend/app/` to learn the real fields and endpoints. Do not invent fields.

## 2. Propose (before writing code)
Give a short proposal:
- Files to create or change (following the folder structure in `Frontend/CLAUDE.md`).
- Components reused vs. new.
- Layout per breakpoint: 360px, 390px, tablet (768px), desktop (1024px+).
- Any new dependency or shadcn component needed, with justification.

Wait for approval if the proposal adds dependencies, new folders, or moves files.

## 3. Implement
- Mobile-first: write base classes for 360px, then add `md:` / `lg:` refinements.
- Use semantic tokens only; no hex values. Light font weights (max 500). One primary button per action group.
- Implement loading, empty, error, disabled, and success states as applicable.
- Accessible names, labels, keyboard support, visible focus, field-linked errors.
- If data comes from the API, use the `connect-api` skill's conventions.

## 4. Verify
- Run the `verify-frontend` skill (lint + build) and fix real failures.
- Walk the responsive checklist and report against it:
  - [ ] 360px: no horizontal overflow, actions not clipped, nav reachable via menu
  - [ ] 390px
  - [ ] 768px: header actions beside title
  - [ ] 1024px+: persistent sidebar; tables only here
  - [ ] Touch targets ≥ 44px, inputs 16px text
- If you could not visually check a breakpoint (no browser available), say so explicitly rather than claiming it passed.

## 5. Report
What changed (files), which checks ran and their results, and anything left open.
