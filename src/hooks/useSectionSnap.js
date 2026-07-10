import { useEffect } from 'react'

export default function useSectionSnap() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main > section'))
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (reducedMotion || !finePointer || sections.length < 2) return undefined

    let lockedUntil = 0

    const handleWheel = (event) => {
      if (document.body.classList.contains('portfolio-loader-lock') || Math.abs(event.deltaY) < 8) return

      const now = performance.now()
      if (now < lockedUntil) {
        event.preventDefault()
        return
      }

      const currentIndex = sections.reduce((bestIndex, section, index) => {
        const bestDistance = Math.abs(sections[bestIndex].getBoundingClientRect().top)
        const distance = Math.abs(section.getBoundingClientRect().top)
        return distance < bestDistance ? index : bestIndex
      }, 0)
      const current = sections[currentIndex]
      const rect = current.getBoundingClientRect()
      const direction = event.deltaY > 0 ? 1 : -1
      const isOversized = rect.height > window.innerHeight + 8

      if (isOversized) {
        const canScrollDownInside = direction > 0 && rect.bottom > window.innerHeight + 12
        const canScrollUpInside = direction < 0 && rect.top < -12
        if (canScrollDownInside || canScrollUpInside) return
      }

      const target = sections[currentIndex + direction]
      if (!target) return

      event.preventDefault()
      lockedUntil = now + 900
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])
}
