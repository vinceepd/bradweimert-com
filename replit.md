# bradweimert.com

Standalone static marketing site for www.bradweimert.com, built to replace the current WordPress site. This repo is fully independent: no CMS, no Sanity, no monorepo tooling, no `@workspace/*` packages, no `artifacts/` subfolder. This directory is the project root as far as the GitHub repo is concerned.

## Run & Operate

- `pnpm dev` — run the dev server (reads `$PORT`, falls back to 3001, allows all hosts for the Replit preview iframe)
- `pnpm build` — build the static site to `dist/`
- `pnpm preview` — preview the production build
- `pnpm typecheck` — `astro check`
- No runtime secrets, no server code. The site builds to plain static files.

## Stack

- Astro 5, fully static output (`output: 'static'`)
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- React islands (`@astrojs/react`) only where interactivity is needed
- pnpm, Node.js 24

## GitHub

- Repo: `vinceepd/bradweimert-com`, connected via the Replit GitHub integration.
- `staging` is the working branch. All development happens here; pushing `staging` to a live/production branch is a manual step the site owner controls later.
- Always `git pull` before editing, push to `staging` after committed checkpoints. Never force-push. Never push to any other repo.

## Where things live

- `src/pages/` — Astro pages (file-based routing)
- `src/layouts/` — shared page layout(s)
- `src/components/` — Astro/React components
- `src/styles/global.css` — Tailwind entry point
- `content/` — copy pulled from the live WordPress site, saved as markdown for reference during the redesign
- `public/` — static assets served as-is

## Architecture decisions

- Tailwind is wired in via the Vite plugin (`@tailwindcss/vite`), not `@astrojs/tailwind` — this is the current recommended setup for Tailwind 4 with Astro.
- `astro.config.mjs` reads `process.env.PORT` for the dev server port and sets `vite.server.allowedHosts: true` so the Replit preview iframe (a different origin) can reach the dev server.

## Product

Marketing site for Brad Weimert. Redesign in progress: crawl the live site, extract branding and copy, propose a design direction, then build page by page, mobile-first.

## User preferences

- Zero em dashes in any user-facing copy. Use commas, periods, or parentheses instead.
- Keep the existing brand voice from the live WordPress site unless told otherwise.
- No screenshots as page content: all visuals are hand-coded HTML/CSS/SVG.

## Gotchas

- This project intentionally does not use the surrounding Replit workspace's pnpm-workspace tooling. Run `pnpm install` from inside this directory, not the workspace root.

## Pointers

- Live reference site: https://www.bradweimert.com
