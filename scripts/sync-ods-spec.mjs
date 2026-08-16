#!/usr/bin/env node
/**
 * Vendor ods-spec specs + learning guides into this site.
 *
 * Usage:
 *   npm run sync:ods-spec
 *   node scripts/sync-ods-spec.mjs --source ../ods-spec
 *   ODS_SPEC_DIR=/path/to/ods-spec npm run sync:ods-spec
 *
 * Copies:
 *   <source>/specs/*.md     → specs/ods/   (README.md → intro.md)
 *   <source>/specs/AGENTS.md or <source>/AGENTS.md → specs/ods/AGENTS.md
 *   <source>/guides/*.md    → docs/guide/  (README.md → learn.md)
 *
 * Does not delete product-only docs (quickstart, tooling, use-cases, …).
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

function argValue(flag, fallback) {
  const idx = process.argv.indexOf(flag);
  if (idx >= 0 && process.argv[idx + 1]) return process.argv[idx + 1];
  return fallback;
}

const source = path.resolve(
  root,
  argValue("--source", process.env.ODS_SPEC_DIR || "../ods-spec"),
);

if (!fs.existsSync(source) || !fs.statSync(source).isDirectory()) {
  console.error(`ods-spec source not found: ${source}`);
  console.error("Pass --source <dir> or set ODS_SPEC_DIR.");
  process.exit(1);
}

const specSrc = path.join(source, "specs");
const guideSrc = path.join(source, "guides");
if (!fs.existsSync(specSrc)) {
  console.error(`Missing ${specSrc}`);
  process.exit(1);
}

function git(cwd, args) {
  try {
    return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

const copied = { specs: [], guides: [] };

if (fs.existsSync(specSrc)) {
  for (const name of fs.readdirSync(specSrc)) {
    if (!name.endsWith(".md")) continue;
    const destName = name === "README.md" ? "intro.md" : name;
    copyFile(path.join(specSrc, name), path.join(root, "specs/ods", destName));
    copied.specs.push(destName);
  }
}

const agentsSrc = [path.join(specSrc, "AGENTS.md"), path.join(source, "AGENTS.md")].find((p) => fs.existsSync(p));
if (agentsSrc) {
  copyFile(agentsSrc, path.join(root, "specs/ods/AGENTS.md"));
  if (!copied.specs.includes("AGENTS.md")) copied.specs.push("AGENTS.md");
}

if (fs.existsSync(guideSrc)) {
  for (const name of fs.readdirSync(guideSrc)) {
    if (!name.endsWith(".md")) continue;
    const destName = name === "README.md" ? "learn.md" : name;
    copyFile(path.join(guideSrc, name), path.join(root, "docs/guide", destName));
    copied.guides.push(destName);
  }
}

const commit = git(source, ["rev-parse", "HEAD"]);
const short = git(source, ["rev-parse", "--short", "HEAD"]);
const branch = git(source, ["rev-parse", "--abbrev-ref", "HEAD"]);
const lock = {
  source: path.relative(root, source) || source,
  commit: commit || null,
  short: short || null,
  branch: branch || null,
  syncedAt: new Date().toISOString(),
  files: copied,
};

fs.writeFileSync(path.join(root, "specs/.ods-spec-lock.json"), `${JSON.stringify(lock, null, 2)}\n`);

console.log(`Synced ods-spec ${short || "(no git)"} → specs/ods (${copied.specs.length}) and docs/guide (${copied.guides.length})`);
console.log(`Lock: specs/.ods-spec-lock.json`);
