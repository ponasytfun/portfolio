import { useEffect, useMemo, useState } from 'react'

const LOADER_SESSION_KEY = 'glitch-portfolio-loader-seen'

const getInitialMode = () => {
  if (typeof window === 'undefined') {
    return 'full'
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    return 'reduced'
  }

  return window.sessionStorage.getItem(LOADER_SESSION_KEY) === 'true' ? 'compact' : 'full'
}

const modeDurations = {
  compact: 720,
  full: 2600,
  reduced: 260,
}

export default function usePortfolioLoader() {
  const [mode] = useState(getInitialMode)
  const [progress, setProgress] = useState(mode === 'reduced' ? 88 : 0)
  const [phase, setPhase] = useState('boot')
  const [isExiting, setIsExiting] = useState(false)
  const [isActive, setIsActive] = useState(true)

  const duration = useMemo(() => modeDurations[mode], [mode])

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    const startedAt = performance.now()
    let frameId
    let readyTimer
    let exitTimer
    let failsafeTimer
    let completed = false

    root.classList.add('portfolio-loader-active')
    body.classList.add('portfolio-loader-lock')

    const complete = () => {
      if (completed) {
        return
      }

      completed = true
      setProgress(100)
      setPhase('ready')
      window.sessionStorage.setItem(LOADER_SESSION_KEY, 'true')

      readyTimer = window.setTimeout(() => {
        setIsExiting(true)
        exitTimer = window.setTimeout(() => {
          root.classList.remove('portfolio-loader-active')
          body.classList.remove('portfolio-loader-lock')
          setIsActive(false)
        }, mode === 'reduced' ? 120 : 560)
      }, mode === 'reduced' ? 80 : 260)
    }

    const tick = (timestamp) => {
      const elapsed = timestamp - startedAt
      const rawProgress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3)
      const nextProgress = Math.min(100, Math.max(0, Math.round(easedProgress * 100)))

      setProgress((current) => Math.max(current, nextProgress))

      if (rawProgress < 0.18) {
        setPhase('profile')
      } else if (rawProgress < 0.42) {
        setPhase('experience')
      } else if (rawProgress < 0.72) {
        setPhase('discord')
      } else if (rawProgress < 1) {
        setPhase('interface')
      } else {
        complete()
        return
      }

      frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)
    failsafeTimer = window.setTimeout(complete, duration + 1600)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(readyTimer)
      window.clearTimeout(exitTimer)
      window.clearTimeout(failsafeTimer)
      root.classList.remove('portfolio-loader-active')
      body.classList.remove('portfolio-loader-lock')
    }
  }, [duration, mode])

  return {
    isActive,
    isExiting,
    mode,
    phase,
    progress,
  }
}
