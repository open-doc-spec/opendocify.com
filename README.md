# opendocify.com

Marketing and docs site for [Open Document Spec (ODS)](https://github.com/open-doc-spec/ods).

**Private** product site repository. First-cut extract from monorepo `app-web/`.

## Source of truth

| Concern | Repo |
|---------|------|
| Site / domain app | **This repo** (SoT after merge) |
| Engine / CLI | [open-doc-spec/ods](https://github.com/open-doc-spec/ods) |
| Install scripts (canonical) | monorepo `src/scripts/install.{sh,ps1}` — keep `public/install.*` in sync |

## Develop

```bash
npm ci
npm run dev
```

See `package.json` for build and deploy scripts. Firebase config: `firebase.json`.

## First-cut policy

Monorepo still mirrors `app-web/` until a later hard-delete PR.
