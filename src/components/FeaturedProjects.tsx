import { motion } from 'framer-motion';
import { featuredProjects } from '../data/projects';
import { cn } from '../utils/cn';
import { ProjectLinks } from './ProjectLinks';
import { ProjectThumb } from './ProjectThumb';
import { SectionHeading } from './SectionHeading';

export function FeaturedProjects() {
  return (
    <section id="featured" aria-labelledby="featured-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="featured-heading"
          eyebrow="Selected work"
          title="Featured projects"
          description="End-to-end AI systems — from model to deployed application — that best represent how I design and ship."
        />

        <div className="space-y-16 sm:space-y-24">
          {featuredProjects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                {/* Media */}
                <a
                  href={project.links[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — open ${project.links[0]?.type === 'demo' ? 'demo' : 'repository'}`}
                  className={cn(
                    'block overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/10 transition-colors duration-300 hover:border-accent/50',
                    reversed && 'lg:order-2',
                  )}
                >
                  <ProjectThumb
                    title={project.title}
                    videoId={project.videoId}
                    eager={index < 2}
                    className="aspect-[16/10]"
                  />
                </a>

                {/* Content */}
                <div className={cn(reversed && 'lg:order-1')}>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                    {String(index + 1).padStart(2, '0')} — {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

                  <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-foreground/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <ProjectLinks links={project.links} className="mt-7" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
