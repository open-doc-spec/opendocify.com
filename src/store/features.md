---
header:
  pillBadge: "Complete Product Capability Showcase"
  pageTitle: "ODS Product Features"
  pageSubtitle: "Discover how Open Document Spec adds simple labels to your text files (.md) and connects them together so AI assistants can find what they need instantly."

heroFeature:
  badge: "Featured Capability"
  title: "Smart AI Reading Lists"
  description: "Gives your AI assistant only the exact documents linked to your files, avoiding massive folder dumps. This speeds up answers and cuts AI usage costs by **up to 94.97%**."
  metrics:
    - val: "~94%"
      lbl: "Lower AI Cost"
    - val: "4,100"
      lbl: "Exact Words Sent"
    - val: "< 5ms"
      lbl: "Document Scan"
  cmd: "$ ods context docs/guide/01-introduction.md"
  codeBoxTitle: "Linked Document Reading List"
  codeContent: |
    Smart Reading List for [01-introduction.md]:
    ├── docs/guide/01-introduction.md (Main page)
    ├── specs/ods/intro.md (linked page)
    ├── docs/guide/05-profiles.md (related page)
    └── src/crates/ods-core/src/graph.rs (connected code)

    ✓ Total Context: 4,120 words (saves 94.97% compared to reading all documents)
    ✓ Annual Savings: 94.97% less cost

rowsGroup1:
  - tag: "Code Connections"
    title: "Connecting Code to Documents"
    description: "Link your text pages directly to specific functions, rules, or testing files inside your program code."
    cmd: "$ ods context src/storage/db.rs"
    visualType: "code"
    codeBoxTitle: "docs/architecture/storage.md"
    codeContent: |
      ---
      description: Storage engine connection pool.
      ods:
        profile: architecture
        status: stable
        code:
          - path: src/storage/db.rs
            symbol: init_pool()
            role: implementation
          - path: tests/db_test.rs
            role: test
      ---
    reverse: false

  - tag: "Open Standard"
    title: "Works with Standard Text Files"
    description: "No hidden databases or complex formats. A root <code>ods.toml</code> marks the workspace. Documents stay plain <code>.md</code> with optional YAML frontmatter. You own your files forever."
    cmd: "$ ods init"
    visualType: "code"
    codeBoxTitle: "Root ods.toml"
    codeContent: |
      # ods.toml — workspace boundary
      spec = "0.1"

      ignore = [
        "node_modules",
        "dist",
      ]
    reverse: true

banner1:
  badge: "Smart Link Repair"
  title: "Automatic Link Repair Background Tool"
  description: "Never break a link when you rename files, restructure folders, or change project layouts."
  items:
    - icon: "link"
      title: "Instant Link Updates"
      description: "Renaming or moving document files automatically updates all connections and links in other files across your folder."
    - icon: "activity"
      title: "Automatic Background Checker"
      description: "A fast helper utility listens to file changes in the background and keeps your links up to date instantly."
    - icon: "shield-check"
      title: "Error Checking on Save"
      description: "Run the checker tool in your save workflow to detect broken document links or missing required sections automatically."

rowsGroup2:
  - tag: "AI Tool Support"
    title: "Works Natively with AI Tools"
    description: "Plugs straight into Claude Code, Antigravity, Cursor, Windsurf, and other AI systems as a helper skill."
    cmd: "$ ods context --json"
    visualType: "ai-chips"
    chips:
      - name: "Claude Code"
        icon: "claude"
      - name: "Antigravity"
        icon: "antigravity"
      - name: "Cursor"
        icon: "cursor"
      - name: "Windsurf"
        icon: "windsurf"
    reverse: false

  - tag: "Gradual Adoption"
    title: "Simple Adoption Steps"
    description: "Start with plain Markdown. Add a root <code>ods.toml</code> when you want a workspace. <code>ods lint</code> is binary: compliant (exit 0) or not (exit 1). There is no Level 0–3 ladder."
    cmd: "$ ods lint"
    visualType: "levels-stack"
    levels:
      - num: "1"
        text: "Plain Markdown files"
      - num: "2"
        text: "Root ods.toml workspace"
      - num: "3"
        text: "ods lint exit 0 or 1"
        active: true
    reverse: true

bannerTemplates:
  badge: "Document Organization"
  title: "ODS Templates: Simple Document Structure"
  description: "Keep your documents consistent and organized without manual formatting debates."
  profiles:
    - badge: "profile: architecture"
      title: "Architecture docs"
      headingsLabel: "Required Headings"
      headings: ["## Goal", "## Requirements", "## Acceptance Criteria"]
    - badge: "profile: guide"
      title: "Runbooks & Guides"
      headingsLabel: "Required Headings"
      headings: ["## Overview", "## Prerequisites", "## Steps"]
    - badge: "profile: feature"
      title: "Product PRDs"
      headingsLabel: "Required Headings"
      headings: ["## User Goal", "## Acceptance Criteria"]
    - badge: "profile: decision"
      title: "ADRs & Decision Notes"
      headingsLabel: "Required Headings"
      headings: ["## Context", "## Decision", "## Consequences"]
  customTemplate:
    badge: "profile: custom-security-audit"
    title: "100% Custom Document Templates"
    headingsLabel: "Custom Required Sections"
    headings: ["## Executive Summary", "## Threat Model", "## Audit Findings"]
  ladder:
    title: "Binary compliance"
    steps:
      - badge: "Plain .md"
        title: "No workspace required"
        description: "Use existing Markdown as-is"
      - badge: "Workspace"
        title: "Root ods.toml"
        description: "spec = \"0.1\" marks the tree"
      - badge: "Compliant"
        title: "ods lint exits 0"
        description: "Graph, keys, and profiles check out"
        active: true
      - badge: "Fix"
        title: "ods lint exits 1"
        description: "Repair diagnostics, then re-lint"

rowsGroup3:
  - tag: "Onboard Existing Folders"
    title: "Import Existing Files in Seconds"
    description: "Import your existing text files in seconds. <code>ods init --adopt</code> writes a root <code>ods.toml</code> and drafts frontmatter so you don't have to edit every file by hand."
    cmd: "$ ods init . --adopt"
    visualType: "code"
    codeBoxTitle: "CLI Terminal Log"
    codeContent: |
      $ ods init . --adopt
      ✓ Wrote root ods.toml (spec = "0.1")
      ✓ Drafted frontmatter on 148 Markdown files
      ✓ Ready for ods lint
    reverse: false

  - tag: "Better Than Vector Search"
    title: "Hallucination-Free Reading Lists"
    description: "Avoid expensive search database hosting and errors. ODS delivers highly accurate reading lists to your AI by using the direct connections you specify."
    cmd: "$ ods graph --format dot"
    visualType: "rag-vs"
    ragBad: "❌ Vector Search: 80,000 words (scrambled snippets)"
    odsGood: "✓ ODS Map: 4,100 words (instant linked pages)"
    reverse: true

bannerSecurity:
  badge: "Privacy & Security"
  title: "Keep Sensitive Data Secure"
  description: "Built-in controls to prevent private data or secret keys from leaking to external AI tools."
  items:
    - icon: "lock"
      title: "Private File Filters"
      description: "Pages marked with <code>share: private</code> are hidden and never sent to AI tools."
    - icon: "eye-off"
      title: "Inline Secret Blurring"
      description: "Secrets placed inside secret labels are automatically stripped out before sending to AI tools."
    - icon: "refresh-cw"
      title: "Settings Backup & Restore"
      description: "Use the backup and restore tools to quickly clean or restore your files before sharing them."

rowsGroup4:
  - tag: "Cost Savings Stats"
    title: "View Your Savings Stats"
    description: "View estimated savings and cost reductions across your team using the built-in stats command."
    cmd: "$ ods bench stats"
    visualType: "code"
    codeBoxTitle: "ods bench stats"
    codeContent: |
      $ ods bench stats
      ✓ Workspace Files: 240 docs
      ✓ Word Savings: 94.97%
      ✓ Estimated Annual Savings: $34,800
    reverse: false

  - tag: "Label Management"
    title: "Update Labels in Bulk"
    description: "Search, filter, and rename labels across all your documents with a single quick command."
    cmd: "$ ods tag rename old-tag new-tag"
    visualType: "code"
    codeBoxTitle: "Bulk Label Rename"
    codeContent: |
      $ ods tag rename deprecated legacy
      ✓ Updated 38 files in 12ms
    reverse: true

bottomCTA:
  title: "Want to see the technical details?"
  subtitle: "All standard labels, properties, and terminal command flags are documented in the developer guides."
  primaryBtnText: "View Developer Dictionary →"
  primaryBtnLink: "/docs/features"
  secondaryBtnText: "GitHub Repository ↗"
---

# ODS Product Features Store

This file stores all text, copy, metrics, feature cards, code blocks, banners, and links for the ODS Product Features page (`/features`).

Edit any field in the YAML frontmatter above to immediately update the live feature page.
