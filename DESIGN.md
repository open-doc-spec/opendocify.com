# Design System & Theme Specification — opendocify.com

> **Theme Identity:** Precise, calm, documentation-led, and developer-first with a high-contrast monochrome chrome palette elevated by ethereal ambient glow accents (mint and sky blue).

---

## 1. Design Principles & Brand Tone

The visual design system of **Open Document Spec (ODS)** balances high-density technical precision with modern, high-craft aesthetics. It is built on top of the **AstroDeck** architecture with an ODS-specific token layer.

1. **Monochrome Chrome, Vibrant Accents:**
   - The core user interface chrome uses pure zinc neutrals (pure white / deep `#000000` black, `#18181b`, `#27272a`, `#f4f4f5`).
   - Color is reserved for ambient backdrops, data visualizations, status indicators, and syntax highlights.
2. **Local-First & Documentation-Led:**
   - Content and code take precedence. Typography is optimized for long-form readability, technical specifications, and dense code snippets.
3. **Calm Depth & Ethereal Atmospherics:**
   - Soft radial ambient glow blobs and subtle vector wave lines create depth without visual clutter or distraction.
4. **Instant Responsiveness & Fluid Motion:**
   - Micro-interactions on buttons, cards, and navigation items provide crisp tactile feedback using cubic-bezier transitions and CSS hardware acceleration.
5. **Strict Dark Mode Contract:**
   - Dark mode is not an afterthought; both light and dark themes maintain rigorous contrast ratios, distinct surface hierarchies, and theme persistence.

---

## 2. Color System & Design Tokens

The theme supports seamless switching between **Light** and **Dark** modes via the `.dark` class or `html[data-theme='dark']` attribute.

### 2.1 Core Palette Tokens

| Semantic Token | Light Mode Value | Dark Mode Value | Usage / Description |
| :--- | :--- | :--- | :--- |
| `--color-background` / `--color-bg` | `#f4f4f5` (Zinc-100) | `#000000` (Pure Black) | Base page canvas background |
| `--color-foreground` / `--color-text` | `#18181b` (Zinc-900) | `#f4f4f5` (Zinc-100) | Primary typography, headers, main copy |
| `--color-card` / `--color-surface` | `#ffffff` (Pure White) | `#18181b` (Zinc-900) | Default card and surface container background |
| `--color-muted` / `--color-surface-muted`| `#f4f4f5` (Zinc-100) | `#27272a` (Zinc-800) | Nested cards, code blocks, hovered items |
| `--color-muted-foreground` | `#3f3f46` (Zinc-700) | `#a1a1aa` (Zinc-400) | Secondary text, descriptions, subheadings |
| `--color-text-subtle` | `#71717a` (Zinc-500) | `#a1a1aa` (Zinc-400) | Captions, metadata, breadcrumbs, tags |
| `--color-border` | `#e4e4e7` (Zinc-200) | `#27272a` (Zinc-800) | Standard borders, dividers, card outlines |
| `--color-border-strong` | `#a1a1aa` (Zinc-400) | `#3f3f46` (Zinc-700) | Active borders, focused outlines, card hover |
| `--color-primary` / `--action-bg` | `#000000` (Pure Black) | `#ffffff` (Pure White) | Primary CTA buttons, key highlights |
| `--color-primary-foreground` / `--action-fg`| `#ffffff` (Pure White) | `#000000` (Pure Black) | Text on primary CTA buttons |
| `--color-accent` | `#e4e4e7` (Zinc-200) | `#27272a` (Zinc-800) | Active menu backdrops, badge hover |
| `--color-accent-foreground` | `#18181b` (Zinc-900) | `#f4f4f5` (Zinc-100) | Text on accent surfaces |
| `--color-destructive` / `--color-danger` | `#ef4444` (Red-500) | `#ef4444` (Red-500) | Errors, destructive actions, red status dot |
| `--color-ring` | `#18181b` | `#f4f4f5` | Focus ring indicators |

---

### 2.2 Illustration & Ambient Accent Tokens

These accents are reserved for hero backdrops, diagrams, glow blobs, and interactive visual features:

```css
/* Ambient Accent Variables */
--color-mint-light: rgba(187, 247, 208, 0.7);  /* Radial blob mint (Light) */
--color-mint-dark:  rgba(34, 197, 94, 0.22);   /* Radial blob emerald/mint (Dark) */
--color-blue-light: rgba(191, 219, 254, 0.8);  /* Radial blob sky blue (Light) */
--color-blue-dark:  rgba(59, 130, 246, 0.24);  /* Radial blob blue (Dark) */

/* Hero Vector Wave Gradients */
--hero-wave-blue:  #3b82f6 -> #60a5fa -> #10b981;
--hero-wave-mint:  #10b981 -> #34d399 -> #60a5fa;

/* Terminal Window Header Dots */
--dot-red:    #ef806f;
--dot-yellow: #e7be63;
--dot-green:  #10b981;
```

---

## 3. Typography & Font Hierarchy

The entire site uses **Inter** across UI copy, display headlines, code elements, and technical specifications for crisp visual uniformity.

### 3.1 Type Families

- **Sans / Display / Mono:** `'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Font Rendering:** `text-rendering: optimizeLegibility; -webkit-font-smoothing: antialiased;`

### 3.2 Type Scale & Heading Weights

| Element / Class | Size (Fluid / Responsive) | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| `h1` (Display Hero) | `clamp(2.8rem, 7vw, 5.6rem)` | 700 / Bold | `1.08` | `-0.038em` |
| `h1` (Page Title) | `clamp(2.5rem, 6vw, 4.6rem)` | 700 / Bold | `1.12` | `-0.03em` |
| `h2` (Section Title) | `clamp(2.0rem, 4vw, 3.2rem)` | 700 / Bold | `1.12` | `-0.03em` |
| `h3` (Sub-heading) | `clamp(1.25rem, 2vw, 1.65rem)` | 600 / Semi-Bold| `1.20` | `-0.02em` |
| `h4` (Card Header) | `1.0rem` / `16px` | 600 / Semi-Bold| `1.30` | `-0.01em` |
| `.lead` / Subtitles | `clamp(1.05rem, 2vw, 1.25rem)` | 400 / Regular | `1.70` | Normal |
| Body Copy (`p`) | `1rem` / `16px` | 400 / Regular | `1.60` | Normal |
| Small / Captions | `0.875rem` / `14px` | 400 / Regular | `1.50` | Normal |
| Code / Mono Pills | `0.72rem` – `0.88rem` | 500 / Medium | `1.40` | `+0.02em` |

---

## 4. Spacing, Layout & Container Architecture

### 4.1 Spacing Scale

The layout adheres to a progressive 4px / rem spacing system:

```css
--space-1:  0.25rem; /* 4px  */
--space-2:  0.50rem; /* 8px  */
--space-3:  0.75rem; /* 12px */
--space-4:  1.00rem; /* 16px */
--space-5:  1.25rem; /* 20px */
--space-6:  1.50rem; /* 24px */
--space-8:  2.00rem; /* 32px */
--space-10: 2.50rem; /* 40px */
--space-12: 3.00rem; /* 48px */
--space-16: 4.00rem; /* 64px */
--space-20: 5.00rem; /* 80px */
--space-24: 6.00rem; /* 96px */
```

### 4.2 Container Widths

- **Standard Grid Container (`.container`):** `width: min(100% - 2rem, 1160px); margin-inline: auto;`
- **Narrow Content Container (`.container-narrow`):** `width: min(100% - 2rem, 820px); margin-inline: auto;`
- **Documentation Layout (`.docs-layout`):** 3-column grid `220px minmax(0, 1fr) 180px` with `gap: 2rem`.
- **Full-Width Hero Wrappers:** `width: 100%; position: relative; overflow: hidden;`

### 4.3 Corner Radii

- `--radius-sm`: `0.5rem` (`8px` — buttons small, code tags)
- `--radius-md`: `0.85rem` (`12px` — nested cards, mobile menu items)
- `--radius-lg`: `1.25rem` (`20px` — main surface cards, code windows)
- `--radius-xl`: `1.75rem` (`28px` – `32px` — hero containers, callout blocks)
- `--radius-pill`: `9999px` (CTAs, badge pills, navigation active indicator)

---

## 5. Shadows & Elevation

Layering is achieved through crisp borders combined with soft ambient drop shadows:

```css
/* Light Theme Elevation */
--shadow-sm:   0 1px 2px rgb(24 24 27 / 0.06);
--shadow-md:   0 16px 40px rgb(24 24 27 / 0.08);
--shadow-glow: 0 18px 50px rgb(24 24 27 / 0.08);

/* Dark Theme Elevation */
.dark {
  --shadow-sm:   0 1px 2px rgb(0 0 0 / 0.22);
  --shadow-md:   0 18px 50px rgb(0 0 0 / 0.24);
  --shadow-glow: 0 20px 60px rgb(0 0 0 / 0.28);
}
```

---

## 6. Core Component Patterns

### 6.1 Buttons & Call-to-Actions (CTAs)

#### Primary CTA (`.site-cta`, `.button-primary`, `.btn-primary`)
- Pill-shaped (`rounded-full`), bold high-contrast appearance.
- **Light:** Background `#000000`, text `#ffffff`.
- **Dark:** Background `#ffffff`, text `#000000`.
- **Hover:** `opacity: 0.88` or `transform: translateY(-1px)`.

```html
<a href="/docs" class="site-cta">
  Get Started
  <span aria-hidden="true">→</span>
</a>
```

#### Secondary Button (`.button-secondary`, `.hero-secondary-button`)
- Outlined pill with surface background and subtle border.
- **Light:** Background `#ffffff`, text `#18181b`, border `#e4e4e7`.
- **Dark:** Background `#18181b`, text `#f4f4f5`, border `#27272a`.
- **Hover:** Border color shifts to primary accent.

```html
<a href="/spec" class="button button-secondary">
  View Specification
</a>
```

---

### 6.2 Badges, Eyebrows & Status Indicators

- Mono font (`0.72rem`), pill-shaped border with soft accent background.
- Include an optional pulsing status dot (`.pulse-dot-green`).

```html
<span class="eyebrow">
  <span class="pulse-dot-green"></span>
  SPECIFICATION v1.0
</span>
```

---

### 6.3 Hero Gradient & Ambient Visuals (`HeroGradient.astro`)

The signature atmospheric look combines:
1. **Left Mint Glow Blob:** `filter: blur(95px)` with gentle oscillating keyframe animation (`floatGlowMint`).
2. **Right Sky Blue Blob:** `filter: blur(100px)` with oscillating keyframe animation (`floatGlowBlue`).
3. **Hero Wave SVG Overlay:** Smooth bezier vector paths with linear stroke gradients (`#3b82f6` to `#10b981`).
4. **Bottom Sync Gradient:** Linear blend transition ensuring a seamless fade into the page body canvas.

```html
<div class="hero-visual-gradient-backdrop" aria-hidden="true">
  <div class="hero-glow-blob blob-mint"></div>
  <div class="hero-glow-blob blob-blue"></div>
  <div class="hero-waves-wrapper">
    <!-- SVG Vector Waves -->
  </div>
  <div class="hero-bottom-gradient-sync"></div>
</div>
```

---

### 6.4 Cards & Interactive Surfaces

- Background `var(--color-card)` with `var(--border)` outline and `var(--radius-lg)` rounding.
- Subtle lift on hover: `transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--color-border-strong);`.

```html
<div class="card">
  <div class="card-icon">
    <svg><!-- Icon --></svg>
  </div>
  <h3>Deterministic Discovery</h3>
  <p>AI models read exactly the documents they need, eliminating hallucination.</p>
</div>
```

---

### 6.5 IDE / Terminal Code Window (`.code-window`)

- Mac-style window dots (Red `#ef806f`, Yellow `#e7be63`, Green `#10b981`).
- Top header with mono label, bordered preformatted code area.

```html
<div class="code-window">
  <div class="code-window-header">
    <div class="window-dots">
      <i></i><i></i><i></i>
    </div>
    <span>ods.yaml</span>
  </div>
  <pre><code>version: "1.0"
dialect: "ods/core"</code></pre>
</div>
```

---

### 6.6 Header, Navigation & Mobile Drawer

- **Sticky Header:** `position: sticky; top: 0; backdrop-filter: blur(18px); z-index: 40; border-bottom: 1px solid var(--color-border);`.
- **Desktop Nav Items:** Subtle opacity (`0.65`) with active state featuring a bottom pill bar indicator (`.nav-item.is-active::after`).
- **Mobile Drawer:** Full-screen slide-in sheet with backdrop blur overlay and smooth cubic bezier transition.
- **Theme Toggle:** Sun/Moon toggle seamlessly synchronized with localStorage and OS preference.

---

### 6.7 Documentation Shell (`DocShell.astro`)

- **Sticky Left Sidebar:** Grouped hierarchical navigation with mono group headings and active route highlights.
- **Article Container:** Clear typography with anchor link hovers, styled markdown tables, and Shiki code blocks.
- **Sticky Right Outline:** Table of Contents for headings (depth 2 to 4).
- **Mobile Responsive Behavior:** Sidebar condenses into a collapsible `<details>` summary dropdown.

---

## 7. Motion & Animation Contract

The platform utilizes AstroDeck's progressive enhancement animation observer via `data-animate` attributes:

```html
<!-- Supported scroll-in animation variants -->
<div data-animate="fade">...</div>
<div data-animate="slide-left">...</div>
<div data-animate="slide-right">...</div>
<div data-animate="scale">...</div>
```

- **Base State:** `opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;`
- **Active State (`.is-visible`):** `opacity: 1; transform: none;`
- **Accessibility:** `prefers-reduced-motion: reduce` completely disables animations and transitions across all elements.

---

## 8. Tailwind v4 Integration & CSS Architecture

Styles are organized across three primary stylesheets in `src/styles/`:

1. **`globals.css`**: Tailwind v4 configuration (`@import "tailwindcss";`), theme definitions (`@theme`), dark variant mapping (`@custom-variant dark (&:where(.dark, .dark *));`), and base layers.
2. **`global.css`**: Design tokens (`:root`, `.dark`), layout grids, buttons, typography scale, footer, and DocShell styles.
3. **`ods-marketing.css`**: Marketing components, interactive hero showcase, calculator panels, feature matrices, and responsive media rules.

---

## 9. Layouts Matrix

| Layout Component | File Path | Intended Use Case |
| :--- | :--- | :--- |
| `BaseLayout.astro` | `src/layouts/BaseLayout.astro` | Standard content-focused pages with max-width container and SEO wrapper. |
| `FullWidthLayout.astro` | `src/layouts/FullWidthLayout.astro` | Marketing, landing pages, and interactive showcase views. |
| `DocLayout.astro` | `src/layouts/DocLayout.astro` | Technical specification pages and user guides utilizing `DocShell.astro`. |
| `Layout.astro` | `src/layouts/Layout.astro` | High-level site wrapper composing header, footer, animations, and theme scripts. |

---

## 10. Quality Checklist for New UI Additions

When creating or modifying UI components:
- [ ] Ensure full visual fidelity in both **Light** and **Dark** modes.
- [ ] Use semantic tokens (`var(--color-...)` or Tailwind classes) rather than hardcoded ad-hoc hex values.
- [ ] Add `data-animate` to major section blocks for scroll-in enhancement.
- [ ] Ensure buttons and links have accessible `:focus-visible` outlines.
- [ ] Verify responsive layouts down to 320px screen width.
- [ ] Preserve the `.dark` class theme persistence contract.
