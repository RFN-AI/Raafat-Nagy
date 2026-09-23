import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, site } from '../data/site';
import { navHref } from '../utils/links';
import { FileTextIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/** Slide-down navigation panel for small screens. */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden border-b border-line bg-background/95 backdrop-blur-md md:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={navHref(link.href)}
                    onClick={onClose}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 border-t border-line px-4 py-4">
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:text-foreground"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:text-foreground"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Send an email"
                className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted transition-colors hover:text-foreground"
              >
                <MailIcon className="h-4 w-4" />
              </a>
              <a
                href={site.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-md border border-line px-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                <FileTextIcon className="h-4 w-4" />
                CV
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
