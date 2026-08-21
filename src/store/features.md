---
# Store content for features.astro

header:
  pillBadge: 'Architecture & Engine Showcase'
  pageTitle: 'Engineered for Deterministic AI Context'
  pageSubtitle: 'Open Document Spec (ODS) turns scattered markdown documentation into a structured, queryable knowledge graph with deterministic linting, binary compliance, and automated bi-directional code linking.'
  quickStats:
    - val: '100%'
      lbl: 'Deterministic Accuracy'
    - val: '0'
      lbl: 'Vector Search Hallucinations'
    - val: '0.1'
      lbl: 'ODS Core Specification'
    - val: '< 5ms'
      lbl: 'Local Context Traversal'

step1_context:
  stepNumber: '01'
  stepCategory: 'Context Engine'
  title: 'Deterministic AI Context Graph'
  description: 'Eliminate token-wasting probabilistic vector search. ODS constructs a deterministic DAG linking code symbols to exact documentation anchors.'
  heroCard:
    badge: 'Context Engine'
    title: 'Precision AI Reading Lists'
    description: 'When an AI agent modifies a function, ODS delivers <strong>exact required reading lists</strong> with zero vector search hallucinations, zero chunking noise, and deterministic relevance.'
    cmd: 'ods context src/auth/jwt.rs'
    codeTitle: 'AI Context Graph Extraction'
    codeContent: |
      $ ods context src/auth/jwt.rs
      → docs/architecture/auth.md (score: 1.0, role: spec)
      → docs/security/tokens.md (score: 0.95, role: policy)
      → tests/jwt_validation_test.rs (score: 0.90, role: test)
      ✓ 3 verified documents delivered in 3.8ms
    metrics:
      - val: '3.8ms'
        lbl: 'Traversal Speed'
      - val: '100%'
        lbl: 'Deterministic Match'
      - val: '0'
        lbl: 'Chunking Noise'
  compareCard:
    badge: 'Accuracy Benchmark'
    title: 'ODS Graph vs Vector Search (RAG)'
    description: 'Compare deterministic DAG traversal against traditional embedding search for codebase documentation.'
    ragLabel: 'Vector Embeddings (RAG)'
    ragText: 'Probabilistic similarity. Misses critical architectural edge-cases, returns noisy chunks, and hallucinates outdated schema definitions.'
    odsLabel: 'ODS Deterministic Graph'
    odsText: 'Explicit symbol-to-spec binding. Always retrieves the exact authoritative documentation, bound test suites, and required ADRs.'
    cmd: 'ods graph --inspect'

step2_binding:
  stepNumber: '02'
  stepCategory: 'Code & Spec Graph'
  title: 'Bi-Directional Code & Specification Linking'
  description: 'Bind documentation pages directly to program functions, data schemas, and test suites so your AI understands both the architectural intent and the actual codebase.'
  codeBindingCard:
    badge: 'Symbol Binding'
    title: 'Connecting Code to Documents'
    description: 'Declare implementation symbols and test files directly inside document frontmatter. The graph automatically discovers related source files.'
    cmd: 'ods context src/storage/db.rs'
    codeTitle: 'docs/architecture/storage.md'
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
  aiToolingCard:
    badge: 'AI Tool Integration'
    title: 'Universal AI Assistant Support'
    description: 'Plugs directly into Claude Code, Antigravity, Cursor, and Windsurf via standard JSON context streams without changing your editor workflow.'
    cmd: 'ods context --json'
    jsonTitle: 'AI Protocol Context Stream'
    jsonContent: |
      {
        "symbol": "init_pool()",
        "doc": "docs/architecture/storage.md",
        "role": "implementation",
        "tests": ["tests/db_test.rs"],
        "verified": true
      }
    chips:
      - name: 'Claude Code'
        icon: 'claude'
      - name: 'Antigravity'
        icon: 'antigravity'
      - name: 'Cursor'
        icon: 'cursor'
      - name: 'Windsurf'
        icon: 'windsurf'

step3_profiles:
  stepNumber: '03'
  stepCategory: 'Standards & Profiles'
  title: 'Structured Document Profiles & Binary Compliance'
  description: 'Eliminate formatting confusion with standardized document profile schemas, required section headings, and a binary compliance validation engine.'
  profilesCard:
    badge: 'Document Profiles'
    title: 'Standard Schema Profiles'
    description: 'Enforce consistent structure across architecture docs, runbooks, PRDs, and ADRs with automated heading validation.'
    profiles:
      - badge: 'architecture'
        title: 'Architecture Spec'
        description: 'Enforces system goals, component requirements, and acceptance criteria.'
        headings: ['## Goal', '## Requirements', '## Acceptance Criteria']
      - badge: 'guide'
        title: 'Runbooks & Guides'
        description: 'Enforces operational overview, prerequisites, and sequential steps.'
        headings: ['## Overview', '## Prerequisites', '## Steps']
      - badge: 'feature'
        title: 'Product PRDs'
        description: 'Enforces user problem statements and explicit acceptance criteria.'
        headings: ['## User Goal', '## Acceptance Criteria']
      - badge: 'decision'
        title: 'ADRs & Decision Notes'
        description: 'Enforces architectural context, chosen decision, and trade-off consequences.'
        headings: ['## Context', '## Decision', '## Consequences']
  ladderCard:
    badge: 'Adoption Pipeline'
    title: 'Binary Compliance Engine'
    description: 'Gradual adoption with zero vendor lock-in. <code>ods lint</code> is binary: compliant (exit 0) or diagnostic failure (exit 1).'
    steps:
      - badge: '01'
        title: 'Plain Markdown'
        description: 'Zero workspace config required. Use standard Markdown as-is.'
      - badge: '02'
        title: 'Root Workspace'
        description: 'Add a root ods.toml (spec = "0.1") to mark repository boundary.'
      - badge: '03'
        title: 'ods lint: Exit 0'
        description: 'Graph connections, schema keys, and profile headings fully valid.'
        active: true
      - badge: '04'
        title: 'Deterministic Diagnostics'
        description: 'Pinpoint exact broken links, missing headings, or stale symbol bindings.'

step4_security:
  stepNumber: '04'
  stepCategory: 'Security & Privacy'
  title: 'Enterprise-Grade Privacy & Secret Shield'
  description: 'Built-in redaction, token isolation, and security controls ensure proprietary credentials, confidential files, and API secrets never leak into external AI prompts.'
  items:
    - icon: 'lock'
      badge: 'File Isolation'
      title: 'Private File Filters'
      description: 'Pages marked with <code>share: private</code> are strictly quarantined and never forwarded to external AI tools or API prompts.'
    - icon: 'eye-off'
      badge: 'Secret Redaction'
      title: 'Inline Secret Blurring'
      description: 'Secrets and keys placed inside encrypted/secret tags are automatically stripped and masked before dispatching to AI assistants.'
    - icon: 'refresh'
      badge: 'Config State'
      title: 'Snapshot & State Restoration'
      description: 'Easily backup, audit, and verify document workspace state before and after AI agent batch refactoring operations.'

step5_dx:
  stepNumber: '05'
  stepCategory: 'Developer DX & Automation'
  title: 'Automated Tooling, Background Healing & Scale'
  description: 'Maintain a pristine documentation repository effortlessly with background link-repair daemons, single-command workspace migration, and team ROI analytics.'
  items:
    - icon: 'link'
      badge: 'Link Integrity'
      title: 'Auto-Healing Link Daemon'
      description: 'Move or rename markdown files freely — background daemons instantly update relative paths and cross-document links across the repository.'
      cmd: 'ods watch'
    - icon: 'rocket'
      badge: 'Instant Onboarding'
      title: '1-Command Folder Adoption'
      description: 'Migrate hundreds of existing markdown files in seconds. <code>ods init --adopt</code> drafts frontmatter and sets up workspace boundaries.'
      cmd: 'ods init . --adopt'
    - icon: 'tools'
      badge: 'Refactoring & ROI'
      title: 'Bulk Tag Refactoring & Analytics'
      description: 'Search, filter, and rename tags across your entire workspace, while calculating annual token savings benchmarks with precision.'
      cmd: 'ods stats'

bottomCTA:
  title: 'Ready to Upgrade Your AI Documentation DX?'
  subtitle: 'Join high-velocity teams using Open Document Spec to eliminate AI hallucinations and automate code-to-spec synchronization.'
  primaryBtnText: 'Read the Quickstart'
  primaryBtnLink: '/docs/quickstart'
  secondaryBtnText: 'Explore the Spec'
  secondaryBtnLink: '/spec'
---
