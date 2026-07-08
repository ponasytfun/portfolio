import { useEffect } from 'react'

export default function useCursorReactive() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (reduceMotion || !finePointer) {
      return undefined
    }

    const targets = Array.from(document.querySelectorAll('[data-cursor-reactive]'))
    const cleanups = []

    targets.forEach((target) => {
      let frameId

      const handlePointerMove = (event) => {
        window.cancelAnimationFrame(frameId)
        frameId = window.requestAnimationFrame(() => {
          const rect = target.getBoundingClientRect()
          const x = (event.clientX - rect.left) / rect.width
          const y = (event.clientY - rect.top) / rect.height

          target.style.setProperty('--card-glow-x', `${x * 100}%`)
          target.style.setProperty('--card-glow-y', `${y * 100}%`)
          target.style.setProperty('--card-tilt-x', `${(y - 0.5) * -3.4}deg`)
          target.style.setProperty('--card-tilt-y', `${(x - 0.5) * 4.2}deg`)
          target.style.setProperty('--card-shift-x', `${(x - 0.5) * 3}px`)
          target.style.setProperty('--card-shift-y', `${(y - 0.5) * 3}px`)
        })
      }

      const handlePointerLeave = () => {
        window.cancelAnimationFrame(frameId)
        target.style.setProperty('--card-glow-x', '50%')
        target.style.setProperty('--card-glow-y', '50%')
        target.style.setProperty('--card-tilt-x', '0deg')
        target.style.setProperty('--card-tilt-y', '0deg')
        target.style.setProperty('--card-shift-x', '0px')
        target.style.setProperty('--card-shift-y', '0px')
      }

      target.addEventListener('pointermove', handlePointerMove)
      target.addEventListener('pointerleave', handlePointerLeave)

      cleanups.push(() => {
        window.cancelAnimationFrame(frameId)
        target.removeEventListener('pointermove', handlePointerMove)
        target.removeEventListener('pointerleave', handlePointerLeave)
      })
    })

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])
}
