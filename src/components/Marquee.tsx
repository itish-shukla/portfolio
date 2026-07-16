type MarqueeProps = {
  items: string[]
  reverse?: boolean
  outline?: boolean
  speed?: string
  className?: string
}

/** Infinite scrolling band of oversized type. Pauses on hover. */
export default function Marquee({ items, reverse = false, outline = false, speed = '30s', className = '' }: MarqueeProps) {
  const row = [...items, ...items, ...items, ...items]

  return (
    <div className={`marquee-group overflow-hidden border-y border-line py-5 ${className}`}>
      <div
        className={`marquee-track flex w-max items-center ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-speed': speed } as React.CSSProperties}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex w-max items-center" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className={`flex items-center whitespace-nowrap px-6 text-5xl font-bold uppercase tracking-tight md:text-7xl ${
                  outline ? 'text-outline' : ''
                }`}
              >
                {item}
                <span className="ml-12 text-2xl text-ember md:text-4xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
