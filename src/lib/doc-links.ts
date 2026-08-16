/** Spec collection is stored as `specs` but published under `/spec`. */
export function publicCollectionPath(collection: string): string {
  return collection === "specs" ? "spec" : collection;
}

/** ods-spec learning-track files → published website guides. */
export const GUIDE_ROUTES: Record<string, string> = {
  "": "/docs/learn",
  README: "/docs/learn",
  intro: "/docs/learn",
  "00-why-ods": "/docs/00-why-ods",
  "01-first-document": "/docs/01-first-document",
  "02-pick-a-shape": "/docs/02-pick-a-shape",
  "03-link-documents": "/docs/03-link-documents",
  "04-bind-code-and-files": "/docs/04-bind-code-and-files",
  "05-ai-reading-list": "/docs/05-ai-reading-list",
  "06-run-the-workspace": "/docs/06-run-the-workspace",
  "07-extend-ods": "/docs/07-extend-ods",
  "decision-cards": "/docs/decision-cards",
  faq: "/docs/faq",
  mistakes: "/docs/mistakes",
};

/** Heading slugs renamed in later spec revisions. */
export const HASH_ALIASES: Record<string, string> = {
  "3-the-3-tier-metadata-architecture": "3-the-3-tier-layering-architecture",
  "5-unknown-content-behavior": "6-unknown-content-behavior-normative",
  "3-graph-edge-types-depends-vs-related": "3-the-two-graph-edge-types",
  "32-discovery-graph-odsrelated": "3-the-two-graph-edge-types",
  "4-dag-cycle-prevention": "5-dag-validation--cycle-prevention",
  "5-knowledge-graph-purity": "4-knowledge-graph-purity-normative",
  "2-the-4-distinct-subsystems-under-ods": "2-the-5-engine-subsystems-under-ods",
  "3-context-expansion-algorithm": "6-the-context-resolution-algorithm-normative",
  "4-traversal-scoping-max-depth-and-ignore": "6-the-context-resolution-algorithm-normative",
  "5-auxiliary-prompt-fixtures-contextload": "q2-why-is-a-dedicated-contextload-key-necessary",
  "42-pruning-subtrees-contextignore": "6-the-context-resolution-algorithm-normative",
  "4-the-asset-catalog-odsresources": "5-non-markdown-resources-odsresources",
  "5-code-bindings-odscode": "6-source-code-bindings-odscode",
  "52-the-8-standard-code-roles": "7-the-8-standard-code-roles-reference",
  "53-symbol-based-bindings-why-line-numbers-are-forbidden": "8-why-line-numbers-are-strictly-forbidden",
  "5-custom-profile-catalogs": "7-custom-profiles--profile-definition-files",
  "6-heading-aliases-and-synonym-matching": "6-section-heading-alias-matching",
  "7-reusable-packs": "8-ods-packs-reusable-profile-catalogs",
  "4-diagnostic-message-format": "7-diagnostic-message-presentation",
  "42-odsstatus-required-for-formal-docs": "72-odsstatus",
  "43-odsshare-optional": "74-odsshare",
  "3-progressive-discovery-model": "3-progressive-discovery-cli-workflow",
  "711-profile-definition-metadata": "7-custom-profiles--profile-definition-files",
};

const LEARN_SLUGS = [
  "learn",
  "00-why-ods",
  "01-first-document",
  "02-pick-a-shape",
  "03-link-documents",
  "04-bind-code-and-files",
  "05-ai-reading-list",
  "06-run-the-workspace",
  "07-extend-ods",
  "decision-cards",
  "faq",
  "mistakes",
];

export const LEARN_DOC_IDS = new Set([
  ...LEARN_SLUGS,
  ...LEARN_SLUGS.map((slug) => `${slug}.md`),
]);

function applyHashAlias(hash: string): string {
  if (!hash) return hash;
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const mapped = HASH_ALIASES[id];
  return mapped ? `#${mapped}` : hash.startsWith("#") ? hash : `#${hash}`;
}

export function rewriteMarkdownHref(
  href: string,
  collectionRoot: string,
  currentDir: string,
): string | null {
  if (!href || /^(https?:|mailto:|tel:)/i.test(href)) return null;
  if (href.startsWith("#")) {
    const next = applyHashAlias(href);
    return next === href ? null : next;
  }

  if (href.startsWith("/")) {
    let next = href.replace(/\.mdx?(?=(?:#|$))/i, "");
    next = next.replace(/^\/docs\/guide\//, "/docs/");
    const hashIndex = next.indexOf("#");
    if (hashIndex >= 0) {
      next = next.slice(0, hashIndex) + applyHashAlias(next.slice(hashIndex));
    }
    return next === href ? null : next;
  }

  const hashIndex = href.indexOf("#");
  const pathPart = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = applyHashAlias(hashIndex >= 0 ? href.slice(hashIndex) : "");
  if (!pathPart) return hash || null;

  const stripped = pathPart.replace(/\.mdx?$/i, "");
  const segments = currentDir ? currentDir.split("/").filter(Boolean) : [];
  for (const part of stripped.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") segments.pop();
    else segments.push(part);
  }

  let resolved = segments.join("/");

  if (resolved === "guides" || resolved.startsWith("guides/")) {
    const name = resolved === "guides" ? "README" : resolved.slice("guides/".length);
    const key = name === "README" || name === "intro" ? "README" : name;
    return `${GUIDE_ROUTES[key] || "/docs/learn"}${hash}`;
  }

  if (resolved === "specs" || resolved.startsWith("specs/")) {
    let rest = resolved === "specs" ? "" : resolved.slice("specs/".length);
    if (rest === "README" || rest === "learn") rest = "intro";
    return rest ? `/spec/ods/${rest}${hash}` : `/spec${hash}`;
  }

  if (resolved === "README" || resolved.endsWith("/README")) {
    const leaf = collectionRoot === "/docs" ? "learn" : "intro";
    resolved = resolved.replace(/README$/, leaf).replace(/\/$/, "");
  }
  if (resolved === "AGENTS" || resolved === "agents") {
    return `/spec/ods/AGENTS${hash}`;
  }

  if (!resolved) return `${collectionRoot}${hash}`;
  return `${collectionRoot}/${resolved}${hash}`;
}
