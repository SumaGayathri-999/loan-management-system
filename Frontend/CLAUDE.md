# Frontend

Act as a senior engineer experienced in React, TypeScript, and modern frontend architecture and responsive design and responsive design architecture.

> Keep in sync: `.cursor/rules/` holds the same standards for Cursor. When a standard here changes, update the matching Cursor rule too (and vice versa). Never delete the Cursor rules.

## Stack
- React 19, Vite 8, TypeScript 6, Tailwind CSS 4 (via `@tailwindcss/vite`, no `tailwind.config`).
- shadcn/ui with style `base-nova`: components are built on **Base UI (`@base-ui/react`), not Radix**. Config in `components.json`.
- Icons: `lucide-react` only. Font: Geist Variable (`@fontsource-variable/geist`).
- React Router v8 is installed but not wired up yet.
- Not installed: React Hook Form, a direct validation library, a test runner, a formatter. Ask before adding any of them.
- Path alias `@/*` → `src/*` (in `vite.config.ts` and `tsconfig.app.json`).

## Commands (run from `Frontend/`)
- `npm run dev` — dev server
- `npm run build` — `tsc -b` type-check + production build. This is the type-check.
- `npm run lint` — ESLint

## Folder structure
Target layout (not fully built yet; propose before creating new top-level folders, and get approval before moving existing files):

```
src/
  app/                  router, providers, app shell
  features/<feature>/   components/, hooks/, api.ts, types.ts — feature-specific code stays here
  components/ui/        shadcn primitives only
  components/           shared application components (layouts, page header, etc.)
  hooks/                genuinely shared hooks
  lib/                  utilities (cn, formatters, api client)
  index.css             global styles, theme tokens
```

Co-locate tests with the code they test once a test runner exists.

## Domain
- Customer fields mirror `Backend/app/schemas/customer.py`: `name`, `phone` (required); `email`, `address`, `description` (optional); `id`, `created_at` on responses. Do not invent extra financial fields.
- Primary navigation: Dashboard, Customers, Loans, Repayments, Settings.

## Design
`DESIGN.md` is the source of truth for visual design. Read it before creating or significantly changing UI. Design images set structure and layout, not visual values: map what they show to DESIGN.md tokens and existing primitives, and point out conflicts instead of copying values from the image. Path-scoped rules in `.claude/rules/` add design-system and React/TypeScript standards when you edit `src/`.

## Before making changes
- Inspect the relevant source, `package.json`, and configuration before proposing or implementing anything.
- Understand existing conventions before introducing a new pattern. Find the smallest complete solution.
- For significant architectural or design decisions, give the options, trade-offs, and a recommendation before implementing.
- If requirements, design intent, existing behavior, or architecture are unclear in a way that could materially change the result, ask instead of assuming.

## Implementation
- Work only on the requested feature. Break large tasks into small, verifiable steps.
- Do not scaffold, rewrite, or refactor unrelated code. Preserve working behavior unless the task requires a change.
- Do not overwrite or revert the user's work without explicit permission.
- Do not install dependencies, change configuration, or add libraries without explaining why and getting approval.
- Do not build extra features based on assumptions.

## Code quality
- Prefer simple, readable solutions over abstraction. Single responsibility, no duplicated logic, no premature optimization.
- No `any` to silence TypeScript. Do not suppress errors to make the build pass.
- Comments only for non-obvious logic.
- No placeholder implementations, fake data, or empty handlers in production code unless requested.

## Verification
- Review your final diff for regressions and unintended changes.
- Run `npm run lint` and `npm run build` (or the `verify-frontend` skill) after code changes.
- Report what changed, which checks ran, and their real result. Never claim success without running the check; if a command fails, show the actual failure.

## Communication
Be direct and concise. When teaching, explain why a solution fits, not just the code.
