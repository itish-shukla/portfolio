import { motion } from 'motion/react'
import { Chars } from './SplitText'
import { EASE } from '../lib/motion'

type SectionHeadingProps = {
  index: string
  label: string
  title: string
}

export default function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className="mb-14 md:mb-20">
      <motion.div
        className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-fog md:text-xs"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className="text-ember">{index}</span>
        <span>{label}</span>
      </motion.div>
      <h2 className="text-[clamp(2.4rem,7vw,6rem)] font-bold uppercase leading-[0.95] tracking-tight">
        <Chars text={title} stagger={0.03} />
      </h2>
      <motion.div
        className="mt-8 h-px w-full origin-left bg-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
      />
    </div>
  )
}
