import SectionHeading from './SectionHeading'
import { FadeUp } from './SplitText'
import { STACK } from '../lib/data'

export default function Skills() {
  return (
    <section id="stack" className="px-6 py-28 md:px-10 md:py-40">
      <SectionHeading index="04" label="Stack" title="Tools of choice" />

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group, gi) => (
          <FadeUp key={group.group} delay={gi * 0.08} amount={0.2}>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
              <span className="text-ember">✦</span>
              {group.group}
            </h3>
            <ul>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="group border-b border-line py-3 text-xl font-medium transition-all duration-300 hover:pl-3 hover:text-ember md:text-2xl"
                >
                  {item}
                  <span className="ml-2 inline-block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
