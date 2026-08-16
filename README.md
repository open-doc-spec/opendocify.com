# opendocify.com

Marketing and docs site for [Open Document Spec (ODS)](https://github.com/open-doc-spec/ods).

**Private** product site repository. First-cut extract from monorepo `app-web/` plus vendored `docs/guide/` and `specs/` so the site builds standalone.

## Source of truth

| Concern | Repo |
|---------|------|
| Site app (Astro) | **This repo** |
| Guide markdown | Learning track vendored from ods-spec `guides/` via `npm run sync:ods-spec`; product/CLI guides authored here |
| Spec markdown | Vendored `specs/ods/` (SoT: [ods-spec](https://github.com/open-doc-spec/ods-spec) `origin/main`) |
| Engine / CLI | [open-doc-spec/ods](https://github.com/open-doc-spec/ods) |
| Install scripts (canonical) | monorepo `src/scripts/install.{sh,ps1}` — keep `public/install.*` in sync |

## Develop

```bash
git clone -b 35-feat/seed-app-web-from-mono https://github.com/open-doc-spec/opendocify.com.git
cd opendocify.com
npm ci
npm run dev    # http://localhost:4173
npm run build
npm run sync:ods-spec   # after pulling ../ods-spec (or ODS_SPEC_DIR=...)
```

## First-cut policy

Monorepo still mirrors `app-web/` until a later hard-delete PR. This repo is private.
