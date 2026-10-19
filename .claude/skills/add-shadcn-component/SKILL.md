---
name: add-shadcn-component
description: Add a shadcn/ui component to the Frontend correctly (base-nova style on Base UI) and restyle it to DESIGN.md tokens. Use when a feature needs a shadcn component (dialog, select, table, sheet, etc.) that is not yet in the project.
---

# Add a shadcn/ui component

## 1. Check first
- Look in `Frontend/src/components/ui/` (and, until it is cleaned up, the stray `Frontend/@/components/ui/`) for an existing version.
- If it exists, reuse it. Do not re-add it — that would overwrite customisations.
- Confirm the feature actually needs it, and tell the user which component you plan to add and why.

## 2. Pre-flight
- Open `Frontend/tsconfig.json`. The shadcn CLI resolves the `@/` alias from **this** file's `compilerOptions.paths`. If `paths` is missing there, the CLI writes into a literal `Frontend/@/` folder. Stop and tell the user; do not add the component until the alias is fixed (with approval).

## 3. Add
- From `Frontend/`: `npx shadcn@latest add <component>`.
- Never pass `--overwrite` unless the user explicitly asks.
- Review the CLI output: list the files created and any npm packages it installed.

## 4. Confirm placement
- The component must be in `Frontend/src/components/ui/`.
- Its `cn` import comes from the `cn` npm package (published by shadcn; the base-nova registry generates `import { cn } from "cn"`). Do not rewrite it to `@/lib/utils`.
- It must import primitives from `@base-ui/react`, not `@radix-ui/*`.

## 5. Restyle to DESIGN.md
Read the relevant component entry in `Frontend/DESIGN.md` and adjust variants to match, using tokens only:
- Buttons: 40px height, pill/xl radius, `px-5`; primary = solid `primary`, secondary = 10% primary tint.
- Inputs: 46px height, xl radius, `px-5`, `border` colour, `focus` ring, 16px text.
- Cards/surfaces: md radius (12px), tonal separation, no strong shadows.
- Font weights no heavier than 500.

Keep the component's accessibility behaviour intact.

## 6. Verify
Run the `verify-frontend` skill and report the result.
