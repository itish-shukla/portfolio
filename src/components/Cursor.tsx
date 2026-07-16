import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/** Custom cursor: instant ember dot + trailing ring that grows over interactive targets. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
    }
    const onOver = (e: PointerEvent) => {
      const target = (e.target as Element).closest('a, button, [data-cursor]')
      setHover(!!target)
      setLabel(target?.getAttribute('data-cursor-label') ?? '')
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerover', onOver)
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[300] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember"
        style={{ x, y, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className={`pointer-events-none fixed left-0 top-0 z-[299] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ${
          label ? 'bg-ember' : hover ? 'bg-paper/10 backdrop-blur-[2px]' : ''
        } border ${label ? 'border-ember' : 'border-paper/40'}`}
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        animate={{ scale: label ? 2.4 : hover ? 1.8 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        {label && (
          <span className="font-mono text-[7px] font-medium uppercase tracking-widest text-void">{label}</span>
        )}
      </motion.div>
    </>
  )
}
