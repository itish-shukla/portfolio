import { useEffect, useState } from 'react'
import { motion, animate } from 'motion/react'
import { EASE_CURTAIN } from '../lib/motion'

const GREETINGS = ['Hello', 'नमस्ते', 'Bonjour', 'Hola', 'こんにちは', 'Ciao', 'Olá', 'Hallo']

type PreloaderProps = { onDone: () => void }

export default function Preloader({ onDone }: PreloaderProps) {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState(0)

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2.1,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.floor(v)),
      onComplete: () => setTimeout(onDone, 300),
    })
    const cycle = setInterval(() => setWord((w) => (w + 1) % GREETINGS.length), 220)
    return () => {
      controls.stop()
      clearInterval(cycle)
    }
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-void"
      exit={{ y: '-100%', transition: { duration: 0.85, ease: EASE_CURTAIN } }}
    >
      {/* Curved tongue revealed as the curtain lifts */}
      <svg
        className="absolute left-0 top-full h-[12vh] w-full text-void"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          fill="currentColor"
          initial={{ d: 'M0,0 L100,0 C65,13 35,13 0,0 Z' }}
          exit={{ d: 'M0,0 L100,0 C65,0 35,0 0,0 Z', transition: { duration: 0.85, ease: EASE_CURTAIN } }}
        />
      </svg>

      <div className="flex items-center gap-4 font-display text-3xl font-medium md:text-5xl">
        <span className="inline-block h-3 w-3 rounded-full bg-ember" />
        <span key={word}>{GREETINGS[word]}</span>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-6 font-display text-[6rem] font-bold leading-none text-paper/15 tabular-nums md:text-[11rem]">
        {count}
      </div>

      <div className="absolute bottom-8 left-6 font-mono text-[10px] uppercase tracking-[0.25em] text-fog md:left-10">
        Loading portfolio — {count}%
      </div>
    </motion.div>
  )
}
