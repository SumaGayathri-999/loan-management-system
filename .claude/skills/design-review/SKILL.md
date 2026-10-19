---
name: design-review
description: Read-only audit of frontend UI code against Frontend/DESIGN.md and the accessibility/responsive standards. Use when the user asks to review, audit, or check a page or component for design compliance. Does not edit files.
---

# Design review (read-only)

Do not edit any files. Produce a findings list only.

## Inputs
- Target: the files or feature the user names. If none, review files changed in `git diff` under `Frontend/src/`.
- Read `Frontend/DESIGN.md` and `Frontend/src/index.css` (to know which tokens exist).

## Checks
**Tokens and colour**
- Hard-coded hex/rgb/oklch values in components instead of tokens.
- Status colours (success/warning/error/destructive) used as decoration.
- Arbitrary Tailwind values (`[13px]`, `[#...]`) where a token exists.

**Typography**
- `font-bold`, `font-semibold`, `font-extrabold`, or weights above 500.
- Uppercase text outside eyebrow labels.

**Actions and shape**
- More than one solid `primary` button in the same action group.
- Square corners or hard outlines on action buttons.
- Strong shadows (`shadow-lg`, `shadow-xl`, `shadow-2xl`) in app chrome.
- Nested card stacks, decorative gradients, metric-card grids, oversized banners.

**Responsive**
- Missing mobile layout (desktop-first classes, tables without a stacked mobile alternative below `lg`).
- Fixed widths that overflow at 360px.
- Touch targets under 44px; input text under 16px on mobile.

**Accessibility**
- Icon-only buttons without an accessible name.
- Inputs without labels; errors not linked to fields.
- Removed focus styles; non-semantic clickable elements.
- Missing loading / empty / error states.

## Output
A table or list sorted by severity (High / Medium / Low), each with `file:line`, the issue, and the DESIGN.md section it violates. End with a one-line summary. Offer to fix, but do not fix unless asked.
