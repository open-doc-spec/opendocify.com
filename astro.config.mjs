import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  site: "https://opendocify.com",
  devToolbar: { enabled: false },
  integrations: [
    mdx(),
    react(),
    sitemap({ changefreq: "weekly", priority: 0.7 }),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    port: Number(process.env.PORT ?? 4173),
  },
  // Legacy flat /spec/* paths → multi-spec one-word modules
  redirects: {
    "/spec/spec": "/spec/ods/core",
    "/spec/SPEC": "/spec/ods/core",
    "/spec/profiles": "/spec/ods/profiles",
    "/spec/graph": "/spec/ods/graph",
    "/spec/context": "/spec/ods/context",
    "/spec/indexes": "/spec/ods/indexes",
    "/spec/resources-and-code": "/spec/ods/assets",
    "/spec/validation": "/spec/ods/validation",
    "/spec/non-goals": "/spec/ods/scope",
    "/spec/glossary": "/spec/ods/glossary",
    "/spec/ods/README": "/spec/ods/intro",
    "/spec/ods/readme": "/spec/ods/intro",
    "/spec/ods/agents": "/spec/ods/intro",
    "/spec/ods/AGENTS": "/spec/ods/intro",
    "/specs/ods/agents": "/spec/ods/intro",
    "/specs/ods/AGENTS": "/spec/ods/intro",
    "/specs/spec": "/spec/ods/core",
    "/specs/profiles": "/spec/ods/profiles",
    "/specs/graph": "/spec/ods/graph",
    "/specs/context": "/spec/ods/context",
    "/specs/indexes": "/spec/ods/indexes",
    "/specs/resources-and-code": "/spec/ods/assets",
    "/specs/validation": "/spec/ods/validation",
    "/specs/non-goals": "/spec/ods/scope",
    "/specs/glossary": "/spec/ods/glossary",
    "/specs/ods/README": "/spec/ods/intro",
    "/specs/ods/readme": "/spec/ods/intro",
    "/docs/guide/features": "/docs/features",
    "/docs/guides": "/docs/learn",
    "/docs/guides/README": "/docs/learn",
    "/docs/guides/readme": "/docs/learn",
    "/docs/specs/ods/intro": "/spec/ods/intro",
    "/docs/specs/ods/core": "/spec/ods/core",
    "/docs/specs/ods/keys": "/spec/ods/keys",
    "/docs/specs/ods/validation": "/spec/ods/validation",
  },
});
