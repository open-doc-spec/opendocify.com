export interface ChangelogItem {
  label: string;
  text: string;
}

export interface ChangelogEntry {
  tag: string;
  date: string;
  latest?: boolean;
  title: string;
  summary: string;
  items: ChangelogItem[];
}

/**
 * User-facing `ods` CLI history, sourced from ../ods CHANGELOG.md, README, and GitHub tags.
 * Pipeline-only tags stay on GitHub.
 */
export const changelog: ChangelogEntry[] = [
  {
    tag: 'v0.0.28',
    date: 'August 17, 2026',
    latest: true,
    title: 'What you can do with `ods` today',
    summary:
      'This is the current CLI. Install or run `ods update`, then use the commands below. Ask `ods --help` or `ods help <command>` for examples.',
    items: [
      {
        label: 'Start a workspace',
        text: 'Run `ods init` in a folder of Markdown files. Keep the `ods.toml` it writes at the repo root. `ods setup` can add git hooks or editor LSP config.',
      },
      {
        label: 'Check your docs',
        text: '`ods lint` reports broken links and missing profile keys. `ods doctor` checks the workspace. `ods stats` shows health, not a 0–3 “level”.',
      },
      {
        label: 'Find a page',
        text: '`ods overview` is a short snapshot of the workspace. `ods find --tag`, `--status`, `--profile`, or `--key status=draft` searches frontmatter. `ods read <id> --section Overview` prints one heading.',
      },
      {
        label: 'Give AI a small reading list',
        text: '`ods context <id>` follows `depends` and related links instead of dumping the whole repo. Add `--explain` if you want to see why a file was included.',
      },
      {
        label: 'Rename without breaking links',
        text: '`ods mv old.md new.md` rewrites graph links and Markdown references. `ods fmt --migrate` cleans frontmatter and does not delete unknown keys.',
      },
      {
        label: 'Tags and status',
        text: 'Put `tags` next to `title` (not under `ods:`). `ods tag list` / `ods tag show` inspect them. `ods status path.md stable` sets lifecycle; `ods archive` is the same as status archived.',
      },
      {
        label: 'Custom shapes',
        text: '`ods profile init --register` adds a profile under `.ods/profiles/`. `ods profile show <name>` prints required sections and keys.',
      },
      {
        label: 'Optional extras',
        text: 'Google OKF: `ods lint --okf`. Agent skills: `ods init --skills` / `ods lint --skills`. Share a filtered copy: `ods share --out DIR`.',
      },
      {
        label: 'Help is safe',
        text: '`ods fmt --help`, `ods watch --help`, and `ods serve --help` only print usage. They do not format files or start a service.',
      },
    ],
  },
  {
    tag: 'v0.0.26',
    date: 'August 17, 2026',
    title: 'Section aliases are gone',
    summary: 'If lint now complains about headings, the titles in the file must match the profile. There is no alias table anymore.',
    items: [
      {
        label: 'What to do',
        text: 'Open the profile and copy its H2/H3 titles. A `guide` file needs Overview, Prerequisites, Steps, and Troubleshooting.',
      },
      {
        label: 'Do not add back',
        text: '`ods aliases` and `[aliases]` in `ods.toml` were removed.',
      },
    ],
  },
  {
    tag: 'v0.0.25',
    date: 'August 17, 2026',
    title: 'Custom profiles can require keys; `--level` is gone',
    summary: 'A profile can list required, optional, and forbidden frontmatter keys. Old compliance flags no longer exist.',
    items: [
      {
        label: 'Custom profiles',
        text: 'Set `required_keys`, `optional_keys`, and `forbidden_keys` under `ods.custom_profile` (see `ods profile show`).',
      },
      {
        label: 'Scripts',
        text: 'Remove `--level` and `--mode` from any script. A workspace is either compliant or not.',
      },
    ],
  },
  {
    tag: 'v0.0.23',
    date: 'August 14, 2026',
    title: 'Required profile keys are actually checked',
    summary: 'If a profile says a key is required, `ods lint` reports it when the key is missing or empty.',
    items: [
      {
        label: 'What to do',
        text: 'Add the key, or change the profile if you did not mean to require it.',
      },
    ],
  },
  {
    tag: 'v0.0.22',
    date: 'August 13, 2026',
    title: 'Built-in `agent` profile',
    summary: 'Use the `agent` profile for instructions that both people and coding agents should follow.',
    items: [
      {
        label: 'Try it',
        text: '`ods new` (or add `profile: agent` in frontmatter), then `ods lint`.',
      },
    ],
  },
  {
    tag: 'v0.0.20',
    date: 'August 6, 2026',
    title: 'The workspace marker is `ods.toml`',
    summary: 'ODS no longer treats a generated index file as the project root. Discovery is `ods.toml` plus Markdown frontmatter.',
    items: [
      {
        label: 'New repo',
        text: 'Run `ods init` and commit `ods.toml`.',
      },
      {
        label: 'Existing repo',
        text: 'Add `ods.toml` if you still only have an index map. `ods lint --fix` will not write that map.',
      },
    ],
  },
  {
    tag: 'v0.0.18',
    date: 'August 4, 2026',
    title: 'Put `tags` at the top of the file',
    summary: 'Tags belong next to `title` so Obsidian, Hugo, and `ods find --tag` can read them. Nested `ods.tags` was easy to lose.',
    items: [
      {
        label: 'Fix existing files',
        text: 'Run `ods fmt --migrate`. Nested tags move to the root and are not deleted.',
      },
    ],
  },
  {
    tag: 'v0.0.17',
    date: 'August 3, 2026',
    title: 'The binary is named `ods`',
    summary: 'Help, installers, and updates only talk about `ods`. An older `odc` name was retired.',
    items: [
      {
        label: 'What to do',
        text: 'Reinstall, then change aliases and CI from `odc` to `ods`.',
      },
    ],
  },
  {
    tag: 'v0.0.15',
    date: 'August 3, 2026',
    title: 'One-line install finds the real download',
    summary: 'The installer asks GitHub for the versioned archive. Use this if an older script returned 404.',
    items: [
      {
        label: 'Install',
        text: '`curl -fsSL https://opendocify.com/install.sh | bash` — or the PowerShell script on Windows. Add `--force` to replace a broken copy.',
      },
    ],
  },
  {
    tag: 'v0.0.9',
    date: 'August 1, 2026',
    title: 'OKF is a flag, not a second tool',
    summary: 'Bare commands are ODS. Google OKF is opt-in. `ods okf …` was removed.',
    items: [
      {
        label: 'Upgrade',
        text: 'Run `ods update` to replace the binary and refresh shipped skills.',
      },
      {
        label: 'OKF',
        text: 'Use `ods lint --okf` (same pattern on init, context, and related commands).',
      },
    ],
  },
  {
    tag: 'v0.0.5',
    date: 'July 30, 2026',
    title: 'Links still work if filename case differs',
    summary: 'A Markdown link to `Guide.md` still finds `guide.md` on a case-sensitive disk.',
    items: [
      {
        label: 'Authors',
        text: 'You do not have to recase every relative link for ODS to resolve it.',
      },
    ],
  },
  {
    tag: 'v0.0.1',
    date: 'July 19, 2026',
    title: 'First public `ods` CLI',
    summary: 'First tagged build: installers, `ods setup`, and bounded `ods context` lists.',
    items: [
      {
        label: 'Today',
        text: 'Install `v0.0.28`. This tag is history, not the current product.',
      },
    ],
  },
];
