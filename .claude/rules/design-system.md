---
paths:
  - "Frontend/src/**/*.{ts,tsx,css}"
---

# Design System

> Mirrors `Frontend/.cursor/rules/design-system.mdc`. Keep both in sync.

## Source of truth
- Read `Frontend/DESIGN.md` before creating or significantly changing UI. It defines colour, typography, spacing, radius, elevation, layout, responsive behaviour, and component patterns.
- Inspect existing components and styles before implementing a design. Do not replace the system with generic dashboard or default AI styling.
- If DESIGN.md does not cover a detail, extend the existing system consistently. Ask when the choice could materially affect the overall design.
- If DESIGN.md and the implementation conflict, point out the discrepancy and ask before making consequential changes.

## Tokens
- DESIGN.md colours live as CSS variables in `Frontend/src/index.css` (`--primary`, `--background`, `--foreground`, `--border`, `--ring`, …) and are exposed to Tailwind through `@theme inline`. shadcn components consume these.
- Use semantic tokens (`bg-primary`, `text-muted-foreground`, `border-border`) — never hard-coded hex values in components.
- Inspect the existing CSS variables and `@theme` block before adding or changing a token. Reuse instead of duplicating.
- Add a token only for a meaningful, reusable design decision, and only with a requirement or approval. When a token changes, update its central definition and check affected components.

## Tailwind CSS (v4)
- Use the installed Tailwind version and its CSS-based config (`@theme` in `index.css`; there is no `tailwind.config`).
- Follow the existing spacing scale, typography scale, breakpoints, and variants.
- Avoid arbitrary values, inline styles, and long repeated class strings when tokens or utilities can express the design. Inline styles only for genuinely dynamic values.
- Extract shared styling or variants only when it prevents meaningful duplication. No per-feature styling systems; no extra styling libraries without approval.

## shadcn/ui (Base UI)
- Components use **Base UI primitives (`@base-ui/react`)**, not Radix. Preserve the accessible behaviour they provide.
- Prefer existing shadcn components and compose them for dialogs, menus, forms, tables, and navigation. Check `src/components/ui` before creating a replacement.
- Edit shadcn component source only when customisation is needed, and never overwrite customised components with registry defaults.
- Add new shadcn components or dependencies only when the feature requires them.

## Icons
- `lucide-react` only. No emoji or other icon libraries in application UI.
- Use icons sparingly, where they aid recognition or hierarchy — not on every label, heading, or button. Prefer text when it is clearer.
- Keep sizes and stroke consistent with existing usage.
- Icon-only controls need an accessible name, plus a tooltip when the action is not obvious.

## Responsive design
- Mobile-first. Build for 360px first, then 390px, tablet (768px), desktop (1024px+).
- Verify every page at 360px, 390px, tablet, and desktop. A page is not complete until its mobile layout has been checked.
- No horizontal overflow, clipped actions, or inaccessible mobile navigation.
- Adapt navigation, tables, forms, dialogs, and density per breakpoint — do not shrink desktop layouts onto phones (e.g. stacked rows on mobile, table from `lg`).
- Touch targets at least 44px; inputs keep 16px text on small screens.

## Accessibility
- Semantic HTML and accessible labels; ARIA only when semantics are not enough.
- Keyboard navigation and visible focus states on every interactive element.
- Associate form errors with their fields.
- Maintain readable contrast and respect `prefers-reduced-motion`.
- Keep accessibility intact when customising shadcn components.

## Interaction and visual quality
- Implement loading, empty, error, disabled, and success states where applicable.
- Subtle transitions only when they help. No excessive animation, decorative gradients, unnecessary or nested cards, or clutter.
- Every visible control must do something meaningful.
- Use realistic, feature-appropriate content, not repeated placeholder text.
- Keep related pages visually consistent.
