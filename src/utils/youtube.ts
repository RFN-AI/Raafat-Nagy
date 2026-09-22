/**
 * Project thumbnails come from each demo video's official YouTube image:
 *
 *   https://i.ytimg.com/vi/<videoId>/hqdefault.jpg
 *
 * Caching caveat: when a video owner REPLACES a thumbnail on YouTube, this URL
 * does not change (same video id -> same URL). Any cache holding an old copy —
 * browser disk cache, intermediary HTTP caches — keys on that exact URL and can
 * keep serving the stale image with no in-band signal that the content changed.
 *
 * YouTube ignores unknown query parameters and still serves the current image,
 * so a version token is all a static site needs to break stale caches: bumping
 * it produces a brand-new URL that every cache treats as a new resource, while
 * normal caching keeps working between bumps (fast loads, no runtime cost).
 *
 * MAINTENANCE: after refreshing a demo video's thumbnail on YouTube, bump
 * THUMBNAIL_VERSION (1 -> 2 -> 3 ...) and redeploy. Visitors fetch the 8 small
 * JPEGs once more, then cache normally. One constant to remember — here.
 */
const THUMBNAIL_VERSION = 1;

/** Build a cache-safe YouTube thumbnail URL from a video id. */
export function youtubeThumbnail(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg?v=${THUMBNAIL_VERSION}`;
}
