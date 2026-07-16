import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { EASE } from '../lib/motion'

const charVariants: Variants = {
  hidden: { y: '115%', rotate: 8 },
  show: { y: '0%', rotate: 0, transition: { duration: 0.9, ease: EASE } },
}

type CharsProps = {
  text: string
  play?: boolean
  delay?: number
  stagger?: number
  className?: string
  charClassName?: string
}

/** Per-letter masked cascade. Controlled by `play`, or scroll-triggered when `play` is undefined. */
export function Chars({ text, play, delay = 0, stagger = 0.04, className = '', charClassName = '' }: CharsProps) {
  const trigger =
    play === undefined
      ? { whileInView: 'show' as const, viewport: { once: true, amount: 0.6 } }
      : { animate: play ? ('show' as const) : ('hidden' as const) }

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em]" aria-hidden>
          <motion.span variants={charVariants} className={`inline-block ${charClassName}`}>
            {char === ' ' ? ' ' : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

const wordVariants: Variants = {
  hidden: { y: '0.7em', opacity: 0 },
  show: { y: '0em', opacity: 1, transition: { duration: 0.6, ease: EASE } },
}

type WordsProps = {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

/** Per-word rise for paragraphs, triggered on scroll. */
export function Words({ text, className = '', delay = 0, stagger = 0.014 }: WordsProps) {
  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {text.split(' ').map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block will-change-transform" aria-hidden>
          {word}
          {' '}
        </motion.span>
      ))}
    </motion.span>
  )
}

type FadeUpProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  amount?: number
}

/** Generic scroll-triggered rise-and-fade wrapper. */
export function FadeUp({ children, className = '', delay = 0, y = 36, amount = 0.3 }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
