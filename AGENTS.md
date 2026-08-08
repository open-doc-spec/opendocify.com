# AGENTS.md — opendocify.com

- Spec collection loads from in-repo `specs/` (nested `ods/`, `okf/`, `skills/`)
- Guide collection loads from in-repo `docs/guide/`
- Default `/spec` entry: **`ods/intro`**
- Nav + sitemap must list new modules; keep redirects in `astro.config.mjs` for legacy flat paths
- DocShell groups specs by dialect folder
- `public/llms.txt` should list intro + keys first for agents
- First-cut extract: content is vendored from monorepo; prefer [ods-spec](https://github.com/open-doc-spec/ods-spec) + monorepo `docs/guide` as authoring SoT until sync is automated
