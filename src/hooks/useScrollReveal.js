import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const targets = Array.from(document.querySelectorAll('[data-reveal]'))

    root.classList.add('reveal-ready')

    if (!targets.length) {
      return undefined
    }

    targets.forEach((target, index) => {
      target.dataset.revealType = target.dataset.reveal || 'fade'

      if (target.dataset.delay && !target.style.getPropertyValue('--reveal-delay')) {
        target.style.setProperty('--reveal-delay', `${target.dataset.delay}ms`)
      }

      if (!target.style.getPropertyValue('--reveal-order')) {
        target.style.setProperty('--reveal-order', index)
      }
    })

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.14,
      },
    )

    targets.forEach((target) => {
      revealObserver.observe(target)
    })

    return () => {
      revealObserver.disconnect()
    }
  }, [])
}
