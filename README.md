# Raafat Nagy — AI Engineer Portfolio

Personal portfolio website for **Raafat Nagy — AI Engineer**, showcasing practical,
end-to-end AI projects across Computer Vision, NLP / RAG, Deep Learning, Machine
Learning, and Time-Series Forecasting.

The site content is based on the [AI Projects Hub](https://github.com/Raafat-Nagy/AI-Projects-Hub).

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool (static output, no backend)
- **Tailwind CSS 4** — styling (dark-first design with a light-mode toggle)
- **Framer Motion** — subtle animations (respects `prefers-reduced-motion`)

## Project Structure

Static multi-page build (no router needed):

- `index.html` → the homepage: Hero, Featured Projects, Technologies, About,
  Education, Contact.
- `projects/index.html` → the `/projects/` page: the full, filterable
  All Projects explorer (same components, no duplication).
- `cv/index.html` → the `/cv/` page: a standalone full-screen CV viewer.
  Same Drive PDF embed, header, icons, and actions as the in-portfolio
  modal, but a separate entry. It is not linked from the navbar.

These deploy as plain static files, so `/projects/` and `/cv/` work natively
on GitHub Pages (deep links and refreshes included). The Vite `base` path is
unchanged.

```text
src/
├── components/        # UI components (Navbar, Hero, CvViewer, CvModal, …)
├── data/              # Single source of truth: projects, technologies, site info
├── types/             # TypeScript interfaces (Project, ProjectLink, …)
├── animations/        # Shared Framer Motion variants
├── hooks/             # useTheme (dark/light, persisted)
├── utils/             # cn(), links, asset and YouTube thumbnail helpers
├── App.tsx            # homepage shell
├── ProjectsPage.tsx   # /projects page shell
├── CvPage.tsx         # /cv page shell
├── main.tsx           # homepage entry
├── projects-main.tsx  # /projects entry
├── cv-main.tsx        # /cv entry
└── index.css          # Tailwind v4 theme tokens (light + dark palettes)
```

All portfolio content lives in `src/data/` — add or edit a project by updating
`src/data/projects.ts` only; every section renders from that data layer.

Project visuals are handled honestly per project:

- **With a YouTube demo** → the card shows the video's official thumbnail.
- **Without one** → an *image-less card variant*: a category-branded header
  (minimal category icon + technical motif, different for each of the five
  domains) replaces the media slot. No stock images, no fake screenshots, no
  repetitive placeholder artwork — variation comes from the project's real
  category, title, description, and technologies.

### Demo thumbnails & cache busting

Project cards show each demo video's official YouTube thumbnail
(`https://i.ytimg.com/vi/<id>/hqdefault.jpg`). YouTube never changes that URL
when a thumbnail is replaced, so browsers and intermediary caches may keep
showing the old image.

The site therefore appends a `?v=` cache-busting token — `THUMBNAIL_VERSION`
in [`src/utils/youtube.ts`](src/utils/youtube.ts). **After refreshing a
thumbnail on YouTube: bump the constant, commit, redeploy.** Every visitor
then fetches the new image exactly once, and normal caching keeps loading
fast between bumps. Thumbnails load through a cascade of official variants
— `maxresdefault` (HD branded thumbnail) first for videos verified to have
one via `thumbMaxres: true` in `projects.ts`, otherwise `hqdefault` →
`mqdefault`. If every variant genuinely fails for a video, the card
switches to its image-less variant instead of ever showing a broken image.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # type-checks with tsc -b, then bundles into dist/
npm run preview  # serve the production build locally
```

## GitHub Pages Deployment

The site is served from `https://raafat-nagy.github.io/Raafat-Nagy/`, so the Vite
base path defaults to `/Raafat-Nagy/`. Deployment is automated by the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. installs dependencies with `npm ci`,
2. builds with `BASE_PATH=/<repository-name>/` (so forks/renames keep working),
3. publishes `dist/` to GitHub Pages on every push to `main`.

One-time setup in the repository: **Settings → Pages → Source: GitHub Actions**.

To build for a custom domain (root path) or a different base locally:

```bash
BASE_PATH=/ npm run build
```
