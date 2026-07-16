import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Chars, FadeUp } from './SplitText'
import Magnetic from './Magnetic'
import Marquee from './Marquee'
import { scrollToId } from '../lib/scroll'
import { LINKS, MARQUEE_CTA } from '../lib/data'

function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Contact() {
  const time = useLocalTime()

  return (
    <section id="contact" className="relative flex min-h-svh flex-col justify-between pt-28 md:pt-40">
      <Marquee items={MARQUEE_CTA} outline speed="22s" />

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center md:px-10">
        <p className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-fog md:text-xs">
          <span className="text-ember">05</span> Contact
        </p>

        <h2 className="select-none uppercase leading-[0.9] tracking-tight">
          <span className="block text-[clamp(3rem,10vw,9rem)] font-bold">
            <Chars text="LET'S WORK" stagger={0.035} charClassName="hero-char" />
          </span>
          <span className="block text-[clamp(3rem,10vw,9rem)] font-bold">
            <Chars text="TOGETHER" stagger={0.035} delay={0.25} charClassName="hero-char-outline" />
          </span>
        </h2>

        <FadeUp delay={0.5} className="mt-14">
          <Magnetic strength={0.45}>
            <motion.a
              href={`mailto:${LINKS.email}`}
              data-cursor-label="Email"
              className="flex h-36 w-36 items-center justify-center rounded-full bg-ember text-center font-mono text-xs uppercase tracking-[0.2em] text-void md:h-44 md:w-44"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              Email me ↗
            </motion.a>
          </Magnetic>
        </FadeUp>

        <FadeUp delay={0.65} className="mt-14">
          <a
            href={`mailto:${LINKS.email}`}
            className="link-sweep font-mono text-sm text-fog transition-colors hover:text-paper md:text-lg"
          >
            {LINKS.email}
          </a>
        </FadeUp>
      </div>

      <footer className="border-t border-line px-6 py-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-fog md:flex-row">
          <span>© 2026 Itish Raj Shukla</span>
          <div className="flex items-center gap-6">
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="link-sweep hover:text-paper">
              GitHub ↗
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="link-sweep hover:text-paper">
              LinkedIn ↗
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="tabular-nums">BLR {time} IST</span>
            <button onClick={() => scrollToId('#top')} className="link-sweep hover:text-paper">
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </section>
  )
}
