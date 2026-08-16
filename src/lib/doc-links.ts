/** Spec collection is stored as `specs` but published under `/spec`. */
export function publicCollectionPath(collection: string): string {
  return collection === "specs" ? "spec" : collection;
}

/** ods-spec learning-track files → published website guides. */
export const GUIDE_ROUTES: Record<string, string> = {
  "": "/docs",
  README: "/docs",
  "00-why-ods": "/docs",
  "01-first-document": "/docs/quickstart",
  "02-pick-a-shape": "/docs/profiles",
  "03-link-documents": "/docs/adoption",
  "04-bind-code-and-files": "/docs/advanced",
  "05-ai-reading-list": "/docs/advanced",
  "06-run-the-workspace": "/docs/tooling",
  "07-extend-ods": "/docs/advanced",
  "decision-cards": "/docs/profiles",
  faq: "/docs/faq",
  mistakes: "/docs/troubleshooting-and-diagnostics",
};

export function rewriteMarkdownHref(
  href: string,
  collectionRoot: string,
  currentDir: string,
): string | null {
  if (!href || /^(https?:|mailto:|tel:)/i.test(href)) return null;
  if (href.startsWith("#")) return null;

  if (href.startsWith("/")) {
    let next = href.replace(/\.mdx?(?=(?:#|$))/i, "");
    next = next.replace(/^\/docs\/guide\//, "/docs/");
    return next === href ? null : next;
  }

  const hashIndex = href.indexOf("#");
  const pathPart = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  if (!pathPart) return null;

  const stripped = pathPart.replace(/\.mdx?$/i, "");
  const segments = currentDir ? currentDir.split("/").filter(Boolean) : [];
  for (const part of stripped.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") segments.pop();
    else segments.push(part);
  }

  let resolved = segments.join("/");
  if (resolved === "README" || resolved.endsWith("/README")) {
    resolved = resolved.replace(/README$/, "intro").replace(/\/$/, "");
  }

  if (resolved === "guides" || resolved.startsWith("guides/")) {
    const name = resolved === "guides" ? "" : resolved.slice("guides/".length);
    return `${GUIDE_ROUTES[name] || "/docs"}${hash}`;
  }

  if (resolved === "specs" || resolved.startsWith("specs/")) {
    const rest = resolved === "specs" ? "" : resolved.slice("specs/".length);
    return rest ? `/spec/${rest}${hash}` : `/spec${hash}`;
  }

  if (!resolved) return `${collectionRoot}${hash}`;
  return `${collectionRoot}/${resolved}${hash}`;
}
