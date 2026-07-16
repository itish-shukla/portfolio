import SectionHeading from './SectionHeading'
import { FadeUp } from './SplitText'
import { EXPERIENCE } from '../lib/data'

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:px-10 md:py-40">
      <SectionHeading index="03" label="Experience" title="Where I've been" />

      <div>
        {EXPERIENCE.map((job, i) => (
          <FadeUp key={job.company} delay={i * 0.06} amount={0.25}>
            <article className="group grid gap-4 border-b border-line py-10 transition-colors duration-500 hover:bg-panel/40 md:grid-cols-[140px_1fr_1.4fr] md:gap-8 md:py-14">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-fog md:pt-2">{job.period}</div>
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-tight transition-all duration-500 group-hover:translate-x-2 group-hover:text-ember md:text-5xl">
                  {job.company}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-fog">{job.role}</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-fog md:text-base">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-[2px] shrink-0 text-ember">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
