import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'

function AnimatedStatValue({ value }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(() => {
    const match = /^(\d+)(K)?(\+)?$/i.exec(value)
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (match && prefersReducedMotion) {
      return value
    }

    return match ? `0${match[2] ?? ''}${match[3] ?? ''}` : value
  })

  useEffect(() => {
    const match = /^(\d+)(K)?(\+)?$/i.exec(value)

    if (!match) {
      return undefined
    }

    const node = ref.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const target = Number(match[1])
    const unit = match[2] ?? ''
    const suffix = match[3] ?? ''

    if (!node || prefersReducedMotion || !('IntersectionObserver' in window)) {
      const frameId = window.requestAnimationFrame(() => setDisplayValue(`${target}${unit}${suffix}`))
      return () => window.cancelAnimationFrame(frameId)
    }

    let frameId
    let startedAt
    let hasRun = false

    const animate = (timestamp) => {
      if (!startedAt) {
        startedAt = timestamp
      }

      const progress = Math.min((timestamp - startedAt) / 1100, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(`${Math.round(target * eased)}${unit}${suffix}`)

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun) {
          return
        }

        hasRun = true
        frameId = window.requestAnimationFrame(animate)
        observer.unobserve(entry.target)
      },
      { threshold: 0.45 },
    )

    observer.observe(node)

    return () => {
      window.cancelAnimationFrame(frameId)
      observer.disconnect()
    }
  }, [value])

  return <strong ref={ref}>{displayValue}</strong>
}

export default function About({ about }) {
  return (
    <section className="section-band about-section" id="about">
      <div className="section-inner about-layout">
        <div className="section-heading" data-reveal="left">
          <p className="eyebrow">Profile</p>
          <h2>{about.heading}</h2>
          <p className="about-lead">{about.lead}</p>
          <p className="about-copy">{about.text}</p>
          <ul className="about-principles" aria-label="Working principles">
            {about.principles.map((principle) => (
              <li key={principle}><Check aria-hidden="true" size={15} />{principle}</li>
            ))}
          </ul>
        </div>

        <div className="stats-grid" aria-label="Portfolio stats">
          {about.stats.map((stat, index) => (
            <article
              className="stat-card"
              data-cursor-reactive
              data-reveal="scale"
              key={stat.label}
              style={{
                '--reveal-delay': `${index * 75}ms`,
                '--stat-delay': `${index * 90}ms`,
                '--stat-index': index,
              }}
            >
              <AnimatedStatValue value={stat.value} />
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
