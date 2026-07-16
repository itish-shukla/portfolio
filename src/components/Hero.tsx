import { useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { Chars } from './SplitText'
import Magnetic from './Magnetic'
import { EASE } from '../lib/motion'
import { scrollToId } from '../lib/scroll'

type HeroProps = { play: boolean }

export default function Hero({ play }: HeroProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], [0, 260])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Ember spotlight that trails the cursor
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  const onMove = (e: React.PointerEvent) => {
    mx.set(e.clientX - 320)
    my.set(e.clientY - 320)
  }

  return (
    <section
      ref={ref}
      id="top"
      onPointerMove={onMove}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-10 pt-28 md:px-10"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[640px] w-[640px] rounded-full bg-ember/10 blur-[140px]"
        style={{ x: sx, y: sy }}
      />

      <motion.div style={{ y: drift, opacity: fade }} className="flex h-full flex-1 flex-col justify-between">
        <motion.div
          className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-fog md:text-xs"
          initial={{ opacity: 0, y: 16 }}
          animate={play ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
        >
          <span>Bengaluru, India — 12.97°N 77.59°E</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
            Software Engineer @ GigSky
          </span>
        </motion.div>

        <h1 className="my-10 select-none uppercase leading-[0.88] tracking-tight">
          <span className="block text-[clamp(3.2rem,12.5vw,11.5rem)] font-bold">
            <Chars text="ITISH RAJ" play={play} delay={0.35} charClassName="hero-char" />
          </span>
          <span className="block pl-[0.5em] text-[clamp(3.2rem,12.5vw,11.5rem)] font-bold">
            <Chars text="SHUKLA" play={play} delay={0.7} charClassName="hero-char-outline" />
            <motion.span
              className="inline-block text-ember"
              initial={{ scale: 0 }}
              animate={play ? { scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 1.5 }}
            >
              .
            </motion.span>
          </span>
        </h1>

        <div className="flex items-end justify-between gap-6">
          <motion.p
            className="max-w-md text-sm leading-relaxed text-fog md:text-base"
            initial={{ opacity: 0, y: 24 }}
            animate={play ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 1.3 }}
          >
            I design and build fast, animated, production-grade web experiences —
            React, TypeScript and modern AI tooling, obsessed over to the last 16 milliseconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={play ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 1.5 }}
          >
            <Magnetic strength={0.4}>
              <button
                onClick={() => scrollToId('#work')}
                data-cursor-label="Scroll"
                className="group flex h-24 w-24 items-center justify-center rounded-full border border-line font-mono text-[10px] uppercase tracking-[0.2em] text-fog transition-colors duration-500 hover:border-ember hover:text-paper md:h-28 md:w-28"
              >
                <span className="flex flex-col items-center gap-1">
                  Scroll
                  <motion.span
                    aria-hidden
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    ↓
                  </motion.span>
                </span>
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
