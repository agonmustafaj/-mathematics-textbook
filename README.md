# Mathh · Integration textbook prototype

A small digital mathematics textbook UI focused on **Integration**. Students pick a chapter and section, then work through examples one at a time with detailed step-by-step solutions (KaTeX).

Placeholder Integration content is data-driven so real chapters, methods, and examples can replace it later without rewriting the UI.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Where content lives

| Path | Purpose |
|------|---------|
| `src/content/types.ts` | Shared content shape (`Course`, `Chapter`, `Section`, `Example`, `MathStep`) |
| `src/content/integration.ts` | English (`en`) placeholder Integration content |
| `src/content/integration.sq.ts` | Albanian (`sq`) placeholder Integration content (same ids) |
| `src/content/index.ts` | Locale-aware course lookups |
| `src/i18n/` | UI chrome strings + `EN` / `SQ` language toggle |

To swap in real material, edit `integration.ts` / `integration.sq.ts` (keep matching ids). UI labels live in `src/i18n/ui.ts`. Language choice is saved in `localStorage` (`mathh-locale`).

A **Need help?** button (`src/components/HelpButton.tsx`) opens email to `apu.gus.t.13@gmail.com` (see `src/support.ts`). The subject/body include the current place (chapter, section, exercise title + link), e.g. help from *Checking an antiderivative by differentiation*.

## App flow

1. **Course** (`/`) — brand landing + chapter/section tree  
2. **Section** (`/chapter/:chapterId/section/:sectionId`) — ordered example list  
3. **Example** (`/chapter/.../example/:exampleId`) — prompt, multi-step solution, Previous / Next  

Stack: Vite + React + TypeScript, React Router, KaTeX.

## Deploy on Cloudflare Pages

Live site: [https://mathematics-textbook.pages.dev/](https://mathematics-textbook.pages.dev/).

`wrangler.toml` is **Pages-only** (`pages_build_output_dir = "./dist"`). Do not put Workers `[assets]` in that file — Pages treats it as an invalid config and the build can fail before `dist/` exists.

Also ships `public/_redirects` (`/* /index.html 200`) for SPA deep links.

### Dashboard settings (required)

Cloudflare → this Pages project → **Settings** → **Builds** (Build configuration):

| Field | Value |
|------|--------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

Then **Save** → **Retry deployment**.

If Build command is empty, Pages never creates `dist/` (“Output directory dist not found”). If Output is `/`, `.`, or blank, Pages uploads the source tree and the site stays blank with `/src/main.tsx`.

### Verify after deploy

```bash
curl -sL https://mathematics-textbook.pages.dev/ | grep 'script type="module"'
```

Expect `/assets/index-….js`, not `/src/main.tsx`.

### API token warning

If Cloudflare shows a yellow warning about the API token (e.g. `portfolio build token`), update that token to include **`artifacts_read`** and **`artifacts_write`**, or create a new Cloudflare API token with Workers/Pages build permissions that include those scopes. Then retry Deploy.

### Local Pages deploy (optional)

```bash
npm run build
npx wrangler pages deploy
```

## Deploy on Netlify

This repo also includes `netlify.toml` (`npm run build`, publish `dist/`, SPA redirect to `index.html`).

### Connect via Git (recommended)

1. Push this repository to GitHub (already: `github.com/agonmustafaj/-mathematics-textbook`).
2. In [Netlify](https://app.netlify.com): **Add new site → Import an existing project**.
3. Choose GitHub and select this repository.
4. Leave build settings as detected from `netlify.toml` (build command `npm run build`, publish directory `dist`).
5. Deploy. Netlify will rebuild on each push to the connected branch.

After the first deploy, nested routes like `/chapter/.../example/...` work on refresh because of the SPA redirect in `netlify.toml`.

### CLI (optional)

If you use the Netlify CLI locally:

```bash
npm install -g netlify-cli
netlify login
netlify init      # link or create a site
netlify deploy --build --prod
```

A Netlify login / personal access token is required for CLI deploys from this agent environment; the Git-connect flow above needs no token in the repo.
