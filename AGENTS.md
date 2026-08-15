# AGENTS.md — opendocify.com

## AstroDeck foundation

This site is an ODS customization of the [AstroDeck](https://github.com/holger1411/astrodeck) starter kit. Read `PROJECT.md` before editing UI. Use the AstroDeck three-tier architecture: `src/components/ui/` for primitives, `src/components/sections/` for composed blocks, and `src/pages/` for route composition. Use `BaseLayout.astro` or `FullWidthLayout.astro`; keep Tailwind v4 and the `.dark` theme contract intact.

- Spec collection loads from in-repo `specs/` (nested `ods/`, `okf/`, `skills/`)
- Guide collection loads from in-repo `docs/guide/`
- Default `/spec` entry: **`ods/intro`**
- Nav + sitemap must list new modules; keep redirects in `astro.config.mjs` for legacy flat paths
- DocShell groups specs by dialect folder
- `public/llms.txt` should list intro + keys first for agents
- First-cut extract: content is vendored from monorepo; prefer [ods-spec](https://github.com/open-doc-spec/ods-spec) + monorepo `docs/guide` as authoring SoT until sync is automated
