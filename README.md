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

```text
src/
├── components/        # UI components (Navbar, Hero, FeaturedProjects, Projects, …)
├── data/              # Single source of truth: projects, technologies, site info
├── types/             # TypeScript interfaces (Project, ProjectLink, …)
├── animations/        # Shared Framer Motion variants
├── hooks/             # useTheme (dark/light, persisted)
├── utils/             # cn(), YouTube thumbnail helper
├── App.tsx
├── main.tsx
└── index.css          # Tailwind v4 theme tokens (light + dark palettes)
```

All portfolio content lives in `src/data/` — add or edit a project by updating
`src/data/projects.ts` only; every section renders from that data layer.
Projects with a YouTube demo automatically use the video thumbnail, stamped with
an "AI engineer detected" computer-vision overlay.

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
