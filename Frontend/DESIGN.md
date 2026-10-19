---
version: alpha
name: Mercury Analysis
description: An analysis of Mercury's design language — a fintech system of quiet type at light weights, one confident action pill, softly rounded cards, and tonal elevation — applied to this loan product with a teal primary and a pale sage canvas.

colors:
  primary: "#176B65"
  primary-hover: "#11524E"
  on-primary: "#FFFFFF"
  canvas: "#F5F7F5"
  surface: "#FFFFFF"
  surface-tint: "#EDF2EF"
  subtle: "#EDF2EF"
  ink: "#1D2928"
  ink-secondary: "#687671"
  border: "#D9E2DD"
  focus: "#2E8B84"
  success: "#247453"
  warning: "#A86F1D"
  error: "#B54747"
  night: "#176B65"
  night-raised: "#11524E"
  on-dark: "#FFFFFF"
  fog: "#D9E2DD"
  slate: "#687671"

typography:
  display:
    fontFamily: arcadiaDisplay
    fontSize: 52px
    fontWeight: 480
    lineHeight: 1.1
    letterSpacing: 0
  stat:
    fontFamily: arcadiaDisplay
    fontSize: 60px
    fontWeight: 480
    lineHeight: 1.1
    letterSpacing: 0
  heading-1:
    fontFamily: arcadiaDisplay
    fontSize: 42px
    fontWeight: 480
    lineHeight: 1.15
    letterSpacing: 0.42px
  heading-2:
    fontFamily: arcadiaDisplay
    fontSize: 28px
    fontWeight: 480
    lineHeight: 1.2
    letterSpacing: 0.42px
  lead:
    fontFamily: arcadiaDisplay
    fontSize: 24px
    fontWeight: 480
    lineHeight: 1.2
    letterSpacing: 0.48px
  body-lg:
    fontFamily: arcadia
    fontSize: 18px
    fontWeight: 360
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: arcadia
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  ui:
    fontFamily: arcadia
    fontSize: 16px
    fontWeight: 420
    lineHeight: 1
    letterSpacing: 0
  ui-sm:
    fontFamily: arcadia
    fontSize: 14px
    fontWeight: 420
    lineHeight: 1
    letterSpacing: 0.07px
  eyebrow:
    fontFamily: arcadia
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.28px
  legal:
    fontFamily: arcadia
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.24px

rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 32px
  pill: 40px
  full: 9999px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  huge: 40px
  section: 80px
  section-lg: 128px

components:
  # ─── Brand-native components (extracted) ───
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: 56px

  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    hoverBackgroundColor: "{colors.primary-hover}"
    typography: "{typography.ui}"
    rounded: "{rounded.xl}"
    padding: "0px 20px"
    height: 40px

  button-glass-dark:
    backgroundColor: "rgba(23, 107, 101, 0.2)"
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-tint-dark:
    backgroundColor: "rgba(255, 255, 255, 0.2)"
    textColor: "{colors.on-dark}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-tint-light:
    backgroundColor: "rgba(23, 107, 101, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-outline-light:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0px 20px"
    height: 40px

  button-small:
    backgroundColor: "rgba(23, 107, 101, 0.1)"
    textColor: "{colors.ink}"
    typography: "{typography.ui-sm}"
    rounded: "{rounded.pill}"
    padding: "0px 16px"
    height: 32px

  button-icon-round:
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"

  text-input:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.xl}"
    padding: "0px 20px"
    height: 46px
    borderColor: "{colors.border}"
    focusColor: "{colors.focus}"

  email-capture:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"

  feature-card-dark:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.on-dark}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"

  feature-card-light:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"

  pricing-card:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-2}"
    rounded: "{rounded.md}"

  pricing-tier-column:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"

  toggle-switch:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.ui}"
    rounded: "{rounded.full}"

  accordion-row:
    textColor: "{colors.ink}"
    typography: "{typography.ui-sm}"
    rounded: "{rounded.none}"
    padding: "10px 0px"

  eyebrow-label:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  stat-block:
    textColor: "{colors.ink}"
    typography: "{typography.stat}"
    rounded: "{rounded.none}"

  quote-block:
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    rounded: "{rounded.none}"

  logo-strip:
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.none}"

  site-footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.legal}"
    rounded: "{rounded.none}"

  # ─── Examples (illustrative, kit-mirror) ───

  ex-pricing-tier:
    description: "Default Pricing tier card. Re-uses feature-card chrome with brand canvas-soft surface."
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-pricing-tier-featured:
    description: "Featured/highlighted tier — polarity-flipped surface (dark fill + light text in light mode, light fill + dark text in dark mode)."
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-product-selector:
    description: "What's Included summary card — re-purposed for SaaS / B2B verticals (NOT a literal product gallery)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  ex-cart-drawer:
    description: "Subscription summary — re-purposed for SaaS / B2B (line items per add-on, not literal cart)."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
    item-divider: "{colors.border}"
  ex-app-shell-row:
    description: "Sidebar nav row inside the App Shell example. Active state uses brand primary as the indicator."
    backgroundColor: "{colors.canvas}"
    activeIndicator: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  ex-data-table-cell:
    description: "Default data-table th + td chrome. Header uses mono-caps eyebrow typography; body uses body-sm."
    headerBackground: "{colors.surface}"
    headerTypography: "{typography.eyebrow}"
    bodyTypography: "{typography.body}"
    cellPadding: "{spacing.sm} {spacing.md}"
    rowBorder: "{colors.border}"
  ex-auth-form-card:
    description: "Sign-in / sign-up card. Re-uses feature-card chrome with text-input primitives inside."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-modal-card:
    description: "Modal dialog surface — same chrome as feature-card with elevated shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xxl}"
  ex-empty-state-card:
    description: "Empty-state illustration frame."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.huge}"
    captionTypography: "{typography.body}"
  ex-toast:
    description: "Toast notification surface — feature-card shape + medium shadow."
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.body}"

---


## Overview

Mercury feels like a private bank that happens to be a software company: quiet, precise and slightly nocturnal. This product keeps that restraint and re-skins only the colour: a sage canvas (`{colors.canvas}` — #F5F7F5), deep pine text (`{colors.ink}` — #1D2928), white surfaces (`{colors.surface}`), and a single saturated teal for action (`{colors.primary}` — #176B65).

One colour carries the actions: `{colors.primary}`. It fills the primary pill, the active nav indicator, and 10% tints behind secondary pills. Hover darkens to `{colors.primary-hover}`. Everything else that is clickable is softer: translucent sage-teal capsules with generous 40px corners. The effect is calm and confident, with one saturated button and everything around it whispering.

Typography stays Mercury's custom family: arcadiaDisplay for headlines and arcadia for text, set at unusually light variable weights (360 for body copy, 420 for UI, 480 for headlines). Nothing on the page is bold in the usual sense. Headlines get presence from size and a hair of extra tracking, not weight. Geist Variable is the open substitute already in this project.

**Key Characteristics:**
- A light product world: `{colors.canvas}` application background, `{colors.surface}` working panels, `{colors.subtle}` tints.
- A single saturated action colour, `{colors.primary}`, on a `{rounded.xl}` pill, with `{colors.primary-hover}` on press/hover.
- Secondary actions as translucent capsules (`{rounded.pill}`) rather than outlines or grey buttons.
- Custom arcadia / arcadiaDisplay type at light variable weights (360–480); Geist Variable in the app.
- Softly rounded cards (`{rounded.md}`) with generous padding and no heavy shadows.
- Application rhythm: compact header (mobile) → persistent sidebar (desktop) → one working column that widens with the viewport.

## Colors

> Source: Mercury design language, with the product palette substituted. Do not mix in a second brand system.

### Brand & Accent
- **Primary** (`{colors.primary}` — #176B65): the single solid action fill — Create customer, Save, and the active nav indicator.
- **Primary hover** (`{colors.primary-hover}` — #11524E): hover and pressed state for primary pills.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): labels on teal.
- **Focus** (`{colors.focus}` — #2E8B84): focus rings on inputs, buttons, and menu controls.

### Surface
- **Canvas** (`{colors.canvas}` — #F5F7F5): application background.
- **Surface** (`{colors.surface}` — #FFFFFF): records, forms, header, and sidebar.
- **Subtle / Surface Tint** (`{colors.subtle}` — #EDF2EF): secondary pill fills, table header wash, selected nav row, and muted regions.

### Text
- **Ink** (`{colors.ink}` — #1D2928): headlines, record names, and form labels.
- **Ink Secondary** (`{colors.ink-secondary}` — #687671): captions, helper text, and eyebrows.
- **Border** (`{colors.border}` — #D9E2DD): 1px rules, input chrome, and row dividers.

### Status
Use only when the meaning applies — never as decoration in chrome.
- **Success** (`{colors.success}` — #247453): confirmed save or healthy record notes.
- **Warning** (`{colors.warning}` — #A86F1D): attention that is not a hard error.
- **Error** (`{colors.error}` — #B54747): validation and failed actions.

Map these tokens in CSS variables (`--primary`, `--background`, `--foreground`, and so on). Do not scatter hex values through components.

## Typography

### Font Family
- **arcadiaDisplay**: Mercury's custom display face for headlines, stats and large quotes, at weight 480 with slight positive tracking at card sizes.
- **arcadia**: the matching text face for body copy (360–400), UI labels and buttons (420), and small uppercase eyebrows (500).

### Hierarchy

| Token | Family | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|---|
| `{typography.stat}` | arcadiaDisplay | 60px | 480 | 1.1 | 0 | Large stat numerals (product mockups only; not dashboard chrome) |
| `{typography.display}` | arcadiaDisplay | 52px | 480 | 1.1 | 0 | Hero headlines |
| `{typography.heading-1}` | arcadiaDisplay | 42px | 480 | 1.15 | 0.42px | Section headlines |
| `{typography.heading-2}` | arcadiaDisplay | 28px | 480 | 1.2 | 0.42px | Page titles, card titles |
| `{typography.lead}` | arcadiaDisplay | 24px | 480 | 1.2 | 0.48px | Lead statements |
| `{typography.body-lg}` | arcadia | 18px | 360 | 1.35 | 0 | Intro copy |
| `{typography.body}` | arcadia | 16px | 400 | 1.4 | 0 | Default body copy, form values |
| `{typography.ui}` | arcadia | 16px | 420 | 1 | 0 | Buttons, nav, inputs |
| `{typography.ui-sm}` | arcadia | 14px | 420 | 1 | 0.07px | Secondary meta, stacked list labels |
| `{typography.eyebrow}` | arcadia | 14px | 500 | 1 | 0.28px | Uppercase eyebrows |
| `{typography.legal}` | arcadia | 12px | 400 | 1.4 | 0.24px | Fine print |

### Principles
- Light weights everywhere: body at 360, UI at 420, headlines at 480. Hierarchy comes from size and colour.
- Headlines get a touch of positive tracking at card sizes instead of the usual negative tightening.
- Uppercase is reserved for small eyebrows.

### Note on Font Substitutes
arcadia and arcadiaDisplay are proprietary. Geist Variable (already installed) is the open-source substitute in this app. Keep the light weights, and add about 0.01em of tracking at display sizes.

## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens**: `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 40px · `{spacing.section}` 80px · `{spacing.section-lg}` 128px.
- Cards pad `{spacing.xl}`–`{spacing.xxl}` and pills pad 20px horizontally.

### Grid & Container
- Mobile working column is the full viewport minus 16px gutters, starting at 360px.
- Tablet uses the extra width for page header actions beside the title, still one column of records.
- Desktop adds a persistent sidebar (~240px) and a wider working area; customer tables may appear from the `lg` breakpoint up.

### Whitespace Philosophy
Generous vertical space and calm page titles. Surfaces separate from the canvas with fill (`{colors.surface}` on `{colors.canvas}`) rather than heavy shadows. Borders are 1px `{colors.border}` when a list needs a rule, not a card outline stack.

### Responsive Strategy

Mobile-first is mandatory. Design the 360px viewport first, then 390px, then tablet, then desktop. Do not shrink a desktop table onto a phone.

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | 360–389px | Compact header, menu button, single-column forms, stacked customer rows, full-width inputs and actions |
| Mobile large | 390–767px | Same structure, slightly more horizontal padding |
| Tablet | 768–1023px | Header actions sit beside the title; still stacked records; menu may remain until desktop |
| Desktop | ≥ 1024px | Persistent sidebar; customer list can become a table; form can use a two-column field grid where labels stay readable |

#### Touch Targets
Pills are 40px tall and text inputs are 46px. On touch devices, pad hit areas to 44px. Body/input text stays at 16px on small screens so fields do not force zoom.

#### Collapsing Strategy
- Nav collapses into an accessible menu on small screens. The current section title stays visible in the header.
- Customer records are stacked rows on mobile (name, phone, email, actions). They become a table only when the viewport can show columns without horizontal overflow.
- Forms stay one column on mobile; optional fields do not hide behind hover.
- Headline sizes are fluid and scale with the viewport.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow; separated by fill colour | Canvas, cards, pills |
| 1 — Soft stack | Very faint layered shadow (≈2–9% ink) | Header, mobile menu panel, occasional elevated dialog |
| 2 — Glow | Not used in application chrome | Marketing art only |

Depth is almost entirely tonal: cards lift by one step of colour, not by shadow. Do not add strong drop shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Table columns |
| `{rounded.xs}` | 4px | Small tags, checkboxes |
| `{rounded.sm}` | 8px | Nav rows, small controls |
| `{rounded.md}` | 12px | Records, forms, regions |
| `{rounded.lg}` | 16px | Larger panels |
| `{rounded.xl}` | 32px | Primary action pill, input corners |
| `{rounded.pill}` | 40px | Secondary and nav pills |
| `{rounded.full}` | 9999px | Round icon buttons, toggles |

## Components

> Only Default states are documented. Variants live as separate `components:` entries.

### Navigation

**`nav-bar`**: a compact surface bar on small screens (56px, 12px × 16px padding) with the product name, current section, and a menu control of at least 44px. On desktop, navigation is persistent in a sidebar using `ex-app-shell-row`.

**`nav-link`**: 40px pills (`{rounded.pill}`, 0 × 20px padding) in `{typography.ui}`. Active state uses `{colors.primary}` as the indicator on `{colors.subtle}`.

Primary destinations: Dashboard, Customers, Loans, Settings.

### Buttons

**`button-primary`**: a `{colors.primary}` pill with a `{colors.on-primary}` `{typography.ui}` label, `{rounded.xl}` corners, 0 × 20px padding and 40px height. Hover uses `{colors.primary-hover}`. One solid primary per action group.

**`button-tint-light`**: a primary wash at 10% opacity with an `{colors.ink}` label. Used for secondary actions (Edit, Cancel).

**`button-outline-light`**: a `{colors.subtle}` pill with `{colors.ink}` label.

**`button-small`**: a 32px-tall tint pill in `{typography.ui-sm}` for inline list actions when 44px row actions are not required.

**`button-icon-round`**: circular icon controls (`{rounded.full}`) for the mobile menu.

### Inputs & Forms

**`text-input`**: `{typography.ui}` text, 20px horizontal padding, 46px height, `{rounded.xl}` corners, `{colors.border}` chrome, `{colors.focus}` ring. Full width on mobile. Keep 16px type on small screens.

Customer form fields match the backend: name, phone (required); email, address, description (optional). Do not invent extra financial fields.

### Cards & Containers

**`feature-card-light`**: `{colors.subtle}` or `{colors.surface}` fill, `{rounded.md}` corners, generous padding, `{typography.heading-2}` title in `{colors.ink}` and `{colors.ink-secondary}` body. Prefer one surface, not nested card stacks.

**`accordion-row`**: full-width row with `{typography.ui-sm}` label, 10px vertical padding and a 1px `{colors.border}` rule. Used for stacked customer records on narrow screens.

### Signature Components

**`eyebrow-label`**: uppercase `{typography.eyebrow}` in `{colors.ink-secondary}`.

**`ex-app-shell-row`**: sidebar or menu row. Active state uses `{colors.primary}` as the indicator.

**`ex-data-table-cell`**: desktop customer table. Header uses eyebrow typography; body uses `{typography.body}`; row border `{colors.border}`. Do not use this layout below the desktop breakpoint.

**`ex-empty-state-card`**: quiet empty list — a short sentence and one primary action. No decorative metric grid.

**`ex-toast`**: confirmation or error, using `{colors.success}` or `{colors.error}` only for meaning.

## Application shell

This is an operations app, not a marketing site. Do not reproduce Mercury's homepage, pricing page, or wordmark.

- **Mobile:** compact header, accessible menu, single working column.
- **Tablet:** same column, more efficient header and spacing, no cramped wrapping of primary actions.
- **Desktop:** persistent sidebar and a wider working area.

Avoid oversized welcome banners, decorative metric-card grids, gradients, and excessive nested cards.

## Do's and Don'ts

### Do
- Use `{colors.primary}` for the single most important action on a view.
- Make secondary actions translucent pills (`{rounded.pill}`).
- Keep type light: body at 360–400, UI at 420, headlines at 480.
- Separate surfaces from the canvas with fill rather than heavy shadows.
- Start at 360px width and scale up.
- Keep colour tokens in CSS variables so components stay consistent.

### Don't
- Don't use more than one solid `{colors.primary}` button in a group.
- Don't set text in heavy bold weights. The brand never goes above 500.
- Don't use hard outlined buttons or square corners on actions.
- Don't add strong drop shadows. Elevation is tonal.
- Don't introduce status greens, ambers, or reds into chrome unless the meaning applies.
- Don't scatter hardcoded hex values through components.
- Don't shrink desktop tables onto mobile, clip actions, or use tiny touch targets.
