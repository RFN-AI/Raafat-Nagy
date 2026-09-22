/**
 * Small "AI engineer detected" bounding-box overlay stamped on every
 * project thumbnail — a personal signature motif for the portfolio.
 */
export function EyebrowOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-4 top-4 z-10">
      <div className="relative h-[70px] w-[96px]">
        {/* Corner brackets */}
        <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-accent" />
        <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-accent" />
        <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-accent" />
        <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-accent" />
        {/* Monogram */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-black/55 px-1.5 py-0.5 font-mono text-base font-semibold tracking-widest text-white">
          RN
        </span>
        {/* Detection label */}
        <span className="absolute -top-2.5 left-1/2 flex w-max -translate-x-1/2 items-center gap-1 rounded-sm bg-accent px-1.5 font-mono text-[9px] font-semibold leading-4 tracking-wider text-on-accent">
          AI·ENG <span className="opacity-75">1.00</span>
        </span>
      </div>
    </div>
  );
}
