import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cvDownloadUrl, cvEmbedUrl, site } from '../data/site';
import { OPEN_CV_EVENT } from '../utils/cv';
import { DownloadIcon, ExternalLinkIcon, FileTextIcon, XMarkIcon } from './Icons';

/**
 * In-site CV viewer: embeds the Google Drive PDF preview inside a dialog,
 * so visitors never leave the portfolio. The Drive file stays the source of
 * truth — replacing it on Drive updates the embed (and download) automatically.
 *
 * Opened by dispatching OPEN_CV_EVENT (see utils/cv) — no props or context.
 * Full screen on mobile, centered dialog on desktop. Closes via the X button,
 * the Escape key, or clicking the backdrop.
 */
export function CvModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Listen for "open" requests from anywhere in the app.
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_CV_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CV_EVENT, handleOpen);
  }, []);

  // While open: lock page scroll, focus the close button, close on Escape.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Curriculum Vitae"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className="flex h-dvh w-dvw flex-col overflow-hidden bg-surface"
          >
            {/* Dialog header */}
            <div className="flex items-center gap-3 border-b border-line bg-raised/60 px-4 py-3 sm:px-5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-line bg-surface text-accent-strong dark:text-accent">
                <FileTextIcon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  Curriculum Vitae
                </p>
                <p className="truncate text-xs text-muted">{site.name} — AI Engineer</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={cvDownloadUrl}
                  download
                  aria-label="Download CV"
                  className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-3 text-xs font-semibold text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
                >
                  <DownloadIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={site.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open CV in Google Drive"
                  className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line bg-surface px-3 text-xs font-semibold text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong dark:hover:text-accent"
                >
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close CV viewer"
                  className="grid h-8 w-8 place-items-center rounded-md border border-line bg-surface text-muted transition-colors duration-200 hover:border-foreground/30 hover:text-foreground"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Embedded PDF preview (Google Drive) */}
            <iframe
              src={cvEmbedUrl}
              title={`${site.name} — Curriculum Vitae`}
              className="min-h-0 w-full flex-1 bg-raised"
              allow="autoplay"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
