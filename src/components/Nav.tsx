import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { EASE, EASE_CURTAIN } from '../lib/motion'
import { scrollToId } from '../lib/scroll'
import { LINKS } from '../lib/data'

const NAV_ITEMS = [
  { id: '01', label: 'Work', target: '#work' },
  { id: '02', label: 'About', target: '#about' },
  { id: '03', label: 'Stack', target: '#stack' },
  { id: '04', label: 'Contact', target: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const go = (target: string) => {
    setOpen(false)
    // Let the overlay start closing before the scroll kicks off
    setTimeout(() => scrollToId(target), open ? 250 : 0)
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[100] mix-blend-difference"
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-10">
          <button
            onClick={() => go('#top')}
            className="group relative block h-5 overflow-hidden font-mono text-sm tracking-wide text-paper"
          >
            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
              itish<span className="text-ember">.</span>raj
            </span>
            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
              shukla<span className="text-ember">©</span>26
            </span>
          </button>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.target)}
                  className="link-sweep font-mono text-xs uppercase tracking-[0.2em] text-paper"
                >
                  <span className="mr-1 text-[9px] text-ember">{item.id}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            className="font-mono text-xs uppercase tracking-[0.25em] text-paper md:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] flex flex-col justify-end bg-panel px-6 pb-14 pt-24"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: EASE_CURTAIN }}
          >
            <ul className="space-y-2">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.id} className="overflow-hidden">
                  <motion.button
                    onClick={() => go(item.target)}
                    className="flex items-baseline gap-4 text-5xl font-bold uppercase tracking-tight text-paper"
                    initial={{ y: '110%' }}
                    animate={{ y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.15 + i * 0.07 } }}
                    exit={{ y: '110%', transition: { duration: 0.35, ease: EASE } }}
                  >
                    <span className="font-mono text-xs text-ember">{item.id}</span>
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
            <motion.div
              className="mt-12 flex gap-6 border-t border-line pt-6 font-mono text-xs uppercase tracking-widest text-fog"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={`mailto:${LINKS.email}`}>Email ↗</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
