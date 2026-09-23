/**
 * Personal details and external profiles.
 * Source of truth: the AI Projects Hub README.
 */
export const site = {
  name: 'Raafat Nagy',
  role: 'AI Engineer',
  email: 'RaafatNagy89@gmail.com',
  githubUrl: 'https://github.com/Raafat-Nagy',
  linkedinUrl: 'https://www.linkedin.com/in/raafat-nagy/',
  /** CV (hosted on Google Drive) — opens in the Drive viewer. */
  cvUrl: 'https://drive.google.com/file/d/1tZ1fRVdFi407XHDUlikEqsmnCbvbqLQU/view',
  /** The AI Projects Hub repository this portfolio is based on. */
  hubUrl: 'https://github.com/Raafat-Nagy/AI-Projects-Hub',
} as const;

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
] as const;
