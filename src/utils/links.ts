const BASE_URL = import.meta.env.BASE_URL || '/';

/** True when running on the standalone /projects page (multi-page build). */
export const isProjectsPage =
  typeof window !== 'undefined' &&
  /\/projects(\/)?(index\.html)?$/.test(window.location.pathname);

/** URL of the dedicated All Projects page (base-aware, GitHub Pages safe). */
export const projectsPageHref = `${BASE_URL}projects/`;

/**
 * Resolve a homepage anchor (#about …) for the current page:
 * stays a local anchor on the homepage, becomes '/<base>/#about'
 * (back to the homepage) when rendered on the projects page.
 */
export function homeHref(anchor: string): string {
  return isProjectsPage ? `${BASE_URL}${anchor}` : anchor;
}

/**
 * Navbar/mobile resolver: the 'Projects' nav entry (#projects sentinel)
 * goes to the dedicated page from anywhere; every other entry is a
 * homepage anchor.
 */
export function navHref(href: string): string {
  return href === '#projects' ? projectsPageHref : homeHref(href);
}
