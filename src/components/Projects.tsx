import SectionHeading from './SectionHeading'
import { FadeUp } from './SplitText'
import { PROJECTS } from '../lib/data'

export default function Projects() {
  return (
    <section id="work" className="px-6 py-28 md:px-10 md:py-40">
      <SectionHeading index="01" label="Selected work" title="Things I've built" />

      <div className="border-t border-line">
        {PROJECTS.map((project, i) => {
          const Row = project.href ? 'a' : 'div'
          return (
            <FadeUp key={project.index} delay={i * 0.05} amount={0.3}>
              <Row
                {...(project.href ? { href: project.href, target: '_blank', rel: 'noreferrer' } : {})}
                data-cursor-label={project.href ? 'Visit' : undefined}
                className="group relative block overflow-hidden border-b border-line"
              >
                {/* Ember fill rising on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-ember transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
                />
                <div className="relative z-10 grid items-center gap-x-6 gap-y-2 px-1 py-10 transition-colors duration-300 group-hover:text-void md:grid-cols-[70px_1fr_auto] md:py-14">
                  <span className="font-mono text-xs text-fog transition-colors duration-300 group-hover:text-void/70">
                    /{project.index}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.9rem,5.5vw,4.5rem)] font-bold uppercase leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-3">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm text-fog transition-colors duration-300 group-hover:text-void/80 md:text-base">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 md:flex-col md:items-end md:gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-fog transition-colors duration-300 group-hover:text-void/70">
                      {project.year}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-fog transition-colors duration-300 group-hover:border-void/40 group-hover:text-void"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Row>
            </FadeUp>
          )
        })}
      </div>
    </section>
  )
}
