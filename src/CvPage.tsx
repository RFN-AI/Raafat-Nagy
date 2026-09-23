import { useEffect } from 'react';
import { cvDownloadUrl, cvEmbedUrl, site } from './data/site';
import { DownloadIcon, ExternalLinkIcon, FileTextIcon, XMarkIcon } from './components/Icons';

/**
 * Standalone /cv page (static entry — no router, not linked from the navbar).
 *
 * Visually the same full-screen viewer as the in-portfolio CvModal: same
 * header, icons, Drive PDF embed, download, and open-in-Drive actions.
 * It does not mount or dispatch to that modal. Close / Escape returns to
 * the portfolio homepage.
 */
export default function CvPage() {
  const homeHref = import.meta.env.BASE_URL || '/';

  // Match the modal: lock page scroll while the viewer fills the viewport.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') window.location.assign(homeHref);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [homeHref]);

  return (
    <div className="flex h-dvh w-dvw flex-col overflow-hidden bg-surface">
      <header className="flex items-center gap-3 border-b border-line bg-raised/60 px-4 py-3 sm:px-5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-surface text-accent-strong dark:text-accent">
          <FileTextIcon className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">CV</p>
          <p className="truncate text-xs text-muted">{site.name} — AI Engineer</p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={cvDownloadUrl}
            download
            aria-label="Download CV"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-3 text-xs font-semibold text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
          >
            <DownloadIcon className="h-4 w-4" />
          </a>
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open CV in Google Drive"
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-3 text-xs font-semibold text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
          <a
            href={homeHref}
            aria-label="Close CV viewer"
            className="grid h-8 w-8 place-items-center rounded-md border border-line bg-surface text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
          >
            <XMarkIcon className="h-4 w-4" />
          </a>
        </div>
      </header>

      <iframe
        src={cvEmbedUrl}
        title={`${site.name} — Curriculum Vitae`}
        className="min-h-0 w-full flex-1 bg-raised"
        allow="autoplay"
      />
    </div>
  );
}
