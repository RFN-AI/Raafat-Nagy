export type ProjectCategory =
  | 'Computer Vision'
  | 'NLP / RAG'
  | 'Deep Learning'
  | 'Machine Learning'
  | 'Time Series';

export type ProjectLinkType = 'github' | 'demo' | 'live';

export interface ProjectLink {
  type: ProjectLinkType;
  url: string;
}

export interface Project {
  /** Project name as listed in the AI Projects Hub README. */
  title: string;
  /** One-line summary used on cards. */
  tagline: string;
  /** Short paragraph used for featured projects and cards. */
  description: string;
  category: ProjectCategory;
  technologies: string[];
  links: ProjectLink[];
  /** YouTube video id — used to build the demo thumbnail. */
  videoId?: string;
  /** Shown in the Featured section. */
  featured?: boolean;
}

export type ProjectFilter = 'All' | ProjectCategory;
