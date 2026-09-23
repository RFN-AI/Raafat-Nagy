/**
 * Resolve a path inside `public/` against the Vite base URL so local assets
 * keep working when the site is deployed under a GitHub Pages project path
 * (e.g. /Raafat-Nagy/).
 */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}${path.replace(/^\/+/, '')}`;
}
