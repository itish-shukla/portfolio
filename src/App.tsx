import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'motion/react'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { initLenis, startScroll, stopScroll } from './lib/scroll'
import { MARQUEE_STACK } from './lib/data'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
    initLenis()
  }, [])

  useEffect(() => {
    if (loading) stopScroll()
    else startScroll()
  }, [loading])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Cursor />
      <div className="grain" aria-hidden />
      {!loading && <Nav />}

      <main>
        <Hero play={!loading} />
        <Marquee items={MARQUEE_STACK} speed="34s" />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  )
}
