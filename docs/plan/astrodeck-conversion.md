# AstroDeck conversion plan

## Objective

Convert the existing `opendocify.com` Astro site to use AstroDeck’s calmer, token-driven starter-kit direction while preserving the Open Document Spec (ODS) product, documentation, specification, install, and SEO content.

This is a visual and structural migration, not a rebrand of the ODS product. AstroDeck is the reference for the site system: navigation rhythm, reusable sections, OKLCH-style design tokens, accessible components, content hierarchy, and AI-friendly project conventions.

References:

- Current site: https://opendocify.com/
- Target design direction: https://www.astrodeck.dev/

## Current state

- Astro site with marketing routes, documentation routes, specification routes, and vendored Markdown content.
- `src/layouts/Layout.astro` owns navigation, metadata, theme switching, footer, and a large global CSS block.
- `src/pages/index.astro` is a long, highly bespoke landing page with inline SVG illustrations, a dark/light theme, and page-specific CSS.
- `src/components/ui/Button.astro`, `Card.astro`, and `Badge.astro` already contain partial AstroDeck-style primitives, but they are not yet the shared system used throughout the site.
- `src/pages/docs/[...slug].astro` and `src/pages/spec/[...slug].astro` must remain content-driven and route-compatible.
- There is no `.openai/hosting.json`; deployment currently runs through Firebase Hosting.

## Target experience

### Brand and content

- Keep ODS naming, claims, install flows, repository links, docs, specs, and pricing status accurate.
- Make the primary message more direct: ODS gives AI a precise, low-cost reading map for documentation.
- Keep proof points, but reduce the number of competing hero claims and decorative diagrams above the fold.

### Information architecture

- Retain the existing public routes and legacy redirects.
- Rework the global navigation into an AstroDeck-like compact system, grouping ODS content under Product, Docs, Spec, and Resources where appropriate.
- Preserve deep links and generated sitemap entries; update labels only where the new hierarchy makes the destination clearer.
- Keep docs/spec shells visually related to the marketing pages without forcing marketing sections into content pages.

### Visual system

- Establish one shared token layer for color, type, spacing, radii, shadows, motion, and light/dark modes.
- Replace scattered hardcoded values and duplicated theme overrides with semantic tokens.
- Use the AstroDeck reference’s restrained layout, readable measure, soft borders, subdued surfaces, and consistent CTA treatment; keep ODS’s emerald/blue accent language where it supports the product identity.
- Treat the existing hero glow/SVG work as optional product storytelling, not as the site-wide visual foundation.

### Component system

- Promote `Button`, `Card`, and `Badge` into the shared primitives used by marketing, docs, and spec surfaces.
- Add or standardize `Container`, `Section`, `Heading`, `Link`, `CodeBlock`, `Callout`, `Stat`, `LogoMark`, and responsive `Header`/`Footer` primitives only when repeated patterns justify them.
- Keep interactive behavior progressively enhanced: theme toggle, mobile navigation, copy buttons, calculators, and assistant switchers should work without blocking static HTML rendering.

## Implementation phases

### Phase 1 — Baseline and contract lock

1. Record the current route inventory, metadata, redirects, sitemap behavior, install links, and key conversion actions.
2. Run the existing build and typecheck before visual changes; save representative screenshots for the homepage, docs index, doc detail, spec index, spec detail, pricing, and changelog.
3. Mark content that is authoritative versus promotional so the visual migration does not introduce unsupported claims.

### Phase 2 — Shared AstroDeck foundation

1. Extract the global token layer from `Layout.astro` into a maintainable global stylesheet or token module.
2. Normalize typography and responsive breakpoints around a small, documented scale.
3. Refactor the header, mobile menu, footer, theme switcher, and page container into reusable components.
4. Update `Button`, `Card`, and `Badge` to use the shared tokens and verify keyboard focus, contrast, hover, and reduced-motion behavior.

### Phase 3 — Homepage conversion

1. Rebuild the homepage around a clear AstroDeck-style sequence: hero, proof metrics, how it works, install/onboarding, use cases, comparison, pricing status, FAQ, and final CTA.
2. Keep only the highest-value ODS visuals; simplify or componentize the current inline SVGs so the page is easier to maintain.
3. Replace page-local style duplication with the shared primitives and tokens.
4. Ensure the primary CTA, direct CLI install, AI skill setup, and documentation paths remain visible and correctly linked.

### Phase 4 — Secondary surfaces

1. Apply the new shell to Features, Examples, Pricing, Download, and Changelog.
2. Give Docs and Spec their own content-first layouts that share the same header, tokens, cards, code treatments, and responsive behavior.
3. Preserve existing generated slugs, frontmatter-driven content, and legacy redirects.

### Phase 5 — Quality and release

1. Run `npm run typecheck` and `npm run build`.
2. Test mobile, desktop, light mode, dark mode, keyboard navigation, reduced motion, copy interactions, and external link behavior.
3. Validate canonical URLs, Open Graph metadata, JSON-LD, favicon/logo paths, robots, sitemap, and `public/llms.txt`.
4. Compare the new screenshots against the baseline and fix layout regressions before deployment.

## Acceptance criteria

- All existing marketing, docs, spec, and legacy redirect routes continue to resolve.
- The homepage visibly follows one coherent AstroDeck-inspired system instead of mixing the current bespoke CSS layers with new primitives.
- Shared tokens and primitives are used across the header, homepage sections, docs, and spec surfaces.
- Light and dark themes remain readable and stable; no page depends on a theme-specific hardcoded color to be legible.
- Primary ODS conversion paths work: docs, AI skill setup, CLI install, GitHub, and pricing/status links.
- Static build, typecheck, metadata checks, and responsive/accessibility smoke tests pass.

## Recommended execution order

Start with the shared shell and token foundation, then migrate the homepage, then roll the same system into secondary marketing pages and finally docs/spec layouts. This keeps the conversion incremental and makes visual regressions easy to isolate.
