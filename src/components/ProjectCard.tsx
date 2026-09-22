import { motion } from 'framer-motion';
import type { Project } from '../types/project';
import { ProjectLinks } from './ProjectLinks';
import { ProjectThumb } from './ProjectThumb';

const VISIBLE_TECHNOLOGIES = 4;

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleTech = project.technologies.slice(0, VISIBLE_TECHNOLOGIES);
  const hiddenCount = project.technologies.length - visibleTech.length;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.18 } }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex flex-col overflow-hidden rounded-xl border border-line bg-raised transition-colors duration-300 hover:border-accent/45"
    >
      <ProjectThumb
        title={project.title}
        videoId={project.videoId}
        className="aspect-[16/9] border-b border-line"
      />

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
          {project.category}
        </p>
        <h3 className="mt-2 text-base font-semibold leading-snug text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <li
              key={tech}
              className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10px] font-medium text-foreground/75"
            >
              {tech}
            </li>
          ))}
          {hiddenCount > 0 && (
            <li className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[10px] font-medium text-muted">
              +{hiddenCount}
            </li>
          )}
        </ul>

        <div className="mt-auto pt-5">
          <div className="border-t border-line pt-4">
            <ProjectLinks links={project.links} size="sm" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
