# Open Document Spec site customizations

This project is built on the AstroDeck starter kit. AstroDeck conventions are the default for all new work.

## Product direction

- Preserve ODS routes, documentation collections, specification slugs, install links, and local-first product claims.
- Keep the AstroDeck three-tier architecture: primitives in `src/components/ui/`, full-width blocks in `src/components/sections/`, and route composition in `src/pages/`.
- Use `BaseLayout` for content-focused pages and `FullWidthLayout` for showcase pages.
- Prefer Tailwind utility classes and AstroDeck tokens from `src/styles/globals.css`; add custom CSS only for a reusable ODS pattern that cannot be expressed with existing tokens.

## Brand tokens

- Chrome palette matches the live ODS site: zinc neutrals, black primary in light, white primary in dark, registered through AstroDeck's token layer.
- Product diagrams may still use mint/blue/emerald as illustration accents, not as the site chrome color.
- Tone: precise, calm, local-first, documentation-led.
- Typography: Inter font used across interface copy, display headings, and code.

## Quality gates

- Run `npm run typecheck`, `npm run build`, and `npm run lint` before release.
- Keep dark mode on the `.dark` class contract and preserve the AstroDeck theme persistence script.
- Keep `data-animate` attributes on large sections so the AstroDeck animation observer can progressively enhance them.
