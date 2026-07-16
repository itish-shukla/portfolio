import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'

type CounterProps = {
  to: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

/** Counts from 0 to `to` when scrolled into view. */
export default function Counter({ to, decimals = 0, prefix = '', suffix = '', className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
