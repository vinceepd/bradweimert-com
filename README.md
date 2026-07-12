# bradweimert.com

Standalone marketing site rebuild for www.bradweimert.com, built to eventually replace the current WordPress site. This repo is the source of truth; there is no monorepo tooling, CMS, or server code here.

## Stack

- Astro 5, fully static output (`output: 'static'`)
- Tailwind CSS 4
- React islands for interactive components only
- pnpm, Node.js 24

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the dev server (reads `PORT`, falls back to 3001) |
| `pnpm build` | Build the static site to `dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm typecheck` | Run `astro check` |

## Workflow discipline

- `staging` is the working branch. All development happens here.
- Pushing `staging` to a production/live branch is a manual step the site owner controls.
- Always `git pull` before editing, and push to `staging` after committed checkpoints.
- Never force-push. Never push to any repo other than this one.

## Go-live

The site builds to plain static files in `dist/` via `pnpm build`. Nothing in the codebase assumes a specific host; hosting (Kinsta Static Site Hosting, Netlify, Vercel, etc.) is decided later, once the current WordPress-to-Kinsta migration is complete. The old WordPress site stays live and untouched until DNS is switched.

See `replit.md` for full project context and copy rules.
