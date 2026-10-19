---
paths:
  - "Frontend/src/**/*.{ts,tsx}"
---

# React and TypeScript

> Mirrors `Frontend/.cursor/rules/react-typescript.mdc`. Keep both in sync.

## React
- Functional components and hooks.
- Prefer composition and focused components over large multi-purpose ones.
- Extract custom hooks when they encapsulate reusable behaviour or meaningfully simplify a component.
- Keep business logic separate from presentation when it improves clarity and testability.
- Avoid unnecessary `useEffect`, `useMemo`, `useCallback`, and `React.memo`.
- No abstractions created only to look reusable.
- Named exports, except where a default export is required by a tool or framework.

## TypeScript
- Explicit types for component props, API responses, form values, and domain models.
- Use discriminated unions for states with distinct variants (e.g. `idle | loading | success | error`).
- Avoid `any`, unsafe assertions, and non-null assertions unless justified. Use `unknown` and narrow.
- Optional properties only for genuinely optional values.
- Do not suppress type errors to make the build pass.

## Component architecture
- Follow the folder structure in `Frontend/CLAUDE.md` and keep domain logic close to its feature.
- Extract shared components only for genuine reuse or consistency.
- Avoid prop drilling through unrelated layers; use composition or Context where appropriate.
- No global store or context unless requirements justify it.

## State
- Local state for component-specific interactions.
- Context for state shared across a related component tree.
- URL search params for shareable filters, pagination, and navigation state.
- Keep server data, form state, and transient UI state conceptually separate.
- Do not add Zustand, Redux, TanStack Query, or other state libraries without approval and justification.

## API layer
- Typed fetch functions per feature in `src/features/<feature>/api.ts`, using a shared client in `src/lib/` once it exists.
- Base URL from `import.meta.env.VITE_API_URL`; never hard-code the backend URL.
- Response and request types mirror the Pydantic schemas in `Backend/app/schemas/` (e.g. `CustomerCreate`, `CustomerResponse`). Dates arrive as ISO strings.
- Treat parsed JSON as `unknown` at the boundary or validate it; surface errors to the UI instead of swallowing them.

## React Router (v8)
- Use the installed version and its existing patterns; keep route definitions in one place (`src/app/`).
- Route params and search params for navigation state.
- Handle missing params and unknown routes (not-found page).
- Do not duplicate route paths across components.

## Forms
- React Hook Form is **not installed**. Before building the first multi-field form with validation, propose adding it (with justification) and wait for approval.
- `zod` is present only as a transitive dependency. Ask before adding it as a direct dependency.
- Whatever the approach: explicit form value types, field-level errors shown clearly and linked to the field, disabled submit during submission, consistent defaults and validation.
- Form validation should match backend constraints (e.g. `name` and `phone` required, `email` a valid email when present).

## Naming
- PascalCase for components and component files.
- camelCase for variables, functions, and hooks; hooks start with `use`.
- kebab-case for non-component files where consistent with existing code.
- Follow the ESLint config; do not introduce conflicting style preferences.
