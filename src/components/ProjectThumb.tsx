import { useState } from 'react';
import { cn } from '../utils/cn';
import { youtubeThumbnail } from '../utils/youtube';
import { EyebrowOverlay } from './EyebrowOverlay';

interface ProjectThumbProps {
  title: string;
  videoId?: string;
  className?: string;
  /** Load eagerly for above-the-fold images (featured projects). */
  eager?: boolean;
}

function initials(title: string): string {
  return title
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join('');
}

/** Decorative placeholder art for projects without a demo video. */
function FallbackArt({ title }: { title: string }) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent" />
      <span className="absolute bottom-3 right-4 select-none font-mono text-5xl font-bold tracking-tight text-white/10 sm:text-6xl">
        {initials(title)}
      </span>
    </div>
  );
}

/**
 * Project visual: YouTube demo thumbnail when a demo video exists,
 * otherwise an intentional category/initials-based placeholder.
 * The "AI engineer" detection overlay is applied on top of both.
 */
export function ProjectThumb({ title, videoId, className, eager = false }: ProjectThumbProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(videoId) && !imageFailed;

  return (
    <div
      className={cn(
        'group/thumb relative overflow-hidden bg-[#0b0e13]',
        className,
      )}
    >
      {showImage && videoId ? (
        <>
          <img
            src={youtubeThumbnail(videoId)}
            alt={`${title} — demo preview`}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/thumb:scale-[1.03]"
          />
          {/* readability gradient + play hint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/55 text-white/90 backdrop-blur-sm transition-colors duration-300 group-hover/thumb:border-accent group-hover/thumb:text-accent">
            <PlayGlyph className="ml-0.5 h-3.5 w-3.5" />
          </span>
        </>
      ) : (
        <FallbackArt title={title} />
      )}
      <EyebrowOverlay />
    </div>
  );
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l11.1-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.03 1.03 0 0 0 8 5.14Z" />
    </svg>
  );
}
