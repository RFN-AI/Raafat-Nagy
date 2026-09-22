import { projects } from '../data/projects';
import { site } from '../data/site';
import { ArrowRightIcon } from './Icons';
import { MotionSection } from './MotionSection';
import { SectionHeading } from './SectionHeading';

const FACTS = [
  { label: 'Focus', value: 'End-to-end AI systems' },
  { label: 'Domains', value: 'Computer Vision · NLP / RAG · Deep Learning · ML · Time Series' },
  { label: 'Public projects', value: String(projects.length) },
] as const;

export function About() {
  return (
    <MotionSection
      id="about"
      labelledBy="about-heading"
      className="border-y border-line bg-surface"
    >
      <SectionHeading id="about-heading" eyebrow="About" title="Practical AI, end to end" />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3">
          <p>
            I&apos;m <span className="font-semibold text-foreground">Raafat Nagy</span>, an AI
            Engineer focused on building intelligent systems across Computer Vision, Machine
            Learning, Deep Learning, Time-Series Forecasting, and NLP / RAG.
          </p>
          <p>
            My work covers both <span className="text-foreground">model development</span> and{' '}
            <span className="text-foreground">end-to-end system design</span> — from training and
            evaluating models to exposing them through FastAPI backends, Streamlit dashboards,
            React frontends and Dockerized deployments.
          </p>
          <p>
            I maintain the{' '}
            <a
              href={site.hubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-strong underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent dark:text-accent"
            >
              AI Projects Hub
            </a>{' '}
            as a central index of this work, with new projects and research in machine learning,
            deep learning, computer vision and AI systems integration added over time.
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-xl border border-line bg-raised p-6">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {'// '}At a glance
            </h3>
            <dl className="mt-5 space-y-4">
              {FACTS.map((fact) => (
                <div key={fact.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong transition-colors hover:text-accent dark:text-accent"
            >
              Get in touch
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
