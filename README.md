# Raafat Nagy — AI Engineer Portfolio

Personal portfolio website of **Raafat Nagy**, an AI Engineer building practical,
end-to-end AI systems — from model development to deployed applications.

The site presents selected work, the full project archive, the technologies behind it,
and a direct way to get in touch. It is a fully static site, built with React and Vite
and deployed on GitHub Pages.

**Live site:** <https://raafat-nagy.github.io/>
**Repository:** <https://github.com/Raafat-Nagy/Raafat-Nagy.github.io>

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool, static output, no backend
- **Tailwind CSS 4** — dark-first design with a light-mode toggle
- **Framer Motion** — subtle animations that respect `prefers-reduced-motion`

## Pages & Sections

| Route | Contents |
| --- | --- |
| `/` | Hero, Featured Projects, Technologies, About, Education, Contact |
| `/projects/` | The complete project archive, filterable by domain |
| `/cv/` | Standalone full-screen CV viewer |

The CV is also available from anywhere on the site through an in-page viewer,
with options to download it or open it in Google Drive.

## AI Areas Represented

The portfolio covers 19 projects across five domains:

- **Computer Vision** — detection, tracking, recognition, segmentation and image retrieval
- **NLP / RAG** — retrieval-augmented assistants
- **Deep Learning** — CNNs, transfer learning, autoencoders
- **Machine Learning** — classification and prediction, including from-scratch implementations
- **Time-Series Forecasting** — forecasting models and applications

Each project links to its public repository, with demo videos and live apps where they exist.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build    # type-checks with tsc, then bundles into dist/
npm run preview  # serve the production build locally
```

## Deployment

The site is deployed as a **GitHub User Pages** site, served from the root of
<https://raafat-nagy.github.io/>.

Deployment is fully automated with **GitHub Actions**
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): every push to `main`
installs dependencies, builds the site, and publishes it to GitHub Pages.
The base path comes from the Pages configuration, so no manual setup is needed
after the one-time repository setting:

> **Settings → Pages → Source: GitHub Actions**

## Contact

- GitHub: <https://github.com/Raafat-Nagy>
- LinkedIn: <https://www.linkedin.com/in/raafat-nagy/>
- Email: RaafatNagy89@gmail.com
