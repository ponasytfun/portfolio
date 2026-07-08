import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const targets = Array.from(document.querySelectorAll('[data-reveal]'))
    const sections = Array.from(document.querySelectorAll('main > section, .site-footer'))

    root.classList.add('reveal-ready')

    if (!targets.length && !sections.length) {
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
      sections.forEach((section) => {
        section.classList.add('is-section-active', 'section-has-entered')
      })
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

    const markInitialActiveSections = () => {
      const activationTop = window.innerHeight * 0.18
      const activationBottom = window.innerHeight * 0.72

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()

        if (rect.top <= activationBottom && rect.bottom >= activationTop) {
          section.classList.add('is-section-active', 'section-has-entered')
        }
      })
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-section-active', 'section-has-entered')
            return
          }

          entry.target.classList.remove('is-section-active')
        })
      },
      {
        rootMargin: '0px',
        threshold: 0.32,
      },
    )

    sections.forEach((section) => {
      sectionObserver.observe(section)
    })

    const initialSectionFrame = window.requestAnimationFrame(markInitialActiveSections)

    return () => {
      window.cancelAnimationFrame(initialSectionFrame)
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])
}
