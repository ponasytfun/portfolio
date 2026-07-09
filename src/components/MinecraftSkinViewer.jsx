import { useEffect, useRef, useState } from 'react'
import { Box, Rotate3D } from 'lucide-react'

function supportsWebGl() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export default function MinecraftSkinViewer({ profile }) {
  const canvasRef = useRef(null)
  const stageRef = useRef(null)
  const [state, setState] = useState('loading')

  useEffect(() => {
    const canvas = canvasRef.current
    const stage = stageRef.current

    if (!canvas || !stage || !supportsWebGl()) {
      setState('fallback')
      return undefined
    }

    let disposed = false
    let viewer
    let resizeObserver
    let visibilityObserver

    const resize = () => {
      if (!viewer || disposed) return
      const width = Math.max(220, Math.min(390, stage.clientWidth))
      const height = Math.max(320, Math.min(500, stage.clientHeight))
      viewer.setSize(width, height)
    }

    const mountViewer = async () => {
      try {
        const skinview = await import('skinview3d')
        if (disposed) return

        viewer = new skinview.SkinViewer({
          canvas,
          width: 320,
          height: 440,
        })
        viewer.background = null
        viewer.animation = new skinview.WalkingAnimation()
        viewer.animation.speed = 0.45
        viewer.controls.enableRotate = true
        viewer.controls.enableZoom = false
        viewer.autoRotate = true
        viewer.autoRotateSpeed = 0.55
        viewer.zoom = 0.82

        resize()
        await viewer.loadSkin(profile.skinUrl)
        if (!disposed) setState('ready')

        resizeObserver = new ResizeObserver(resize)
        resizeObserver.observe(stage)

        visibilityObserver = new IntersectionObserver(
          ([entry]) => {
            if (viewer && !viewer.disposed) viewer.renderPaused = !entry.isIntersecting
          },
          { rootMargin: '120px 0px', threshold: 0.01 },
        )
        visibilityObserver.observe(stage)
      } catch {
        if (!disposed) setState('fallback')
      }
    }

    mountViewer()

    return () => {
      disposed = true
      resizeObserver?.disconnect()
      visibilityObserver?.disconnect()
      try {
        viewer?.dispose()
      } catch {
        // The viewer may already be disposed during a failed dynamic import.
      }
    }
  }, [profile.skinUrl])

  const showFallback = state === 'fallback'

  return (
    <div className="minecraft-showcase" data-cursor-reactive data-reveal="scale">
      <div className="minecraft-showcase-header">
        <span><Box aria-hidden="true" size={15} /> {profile.label}</span>
        <strong>{profile.username}</strong>
      </div>

      <div className="minecraft-stage" ref={stageRef}>
        <div className="minecraft-glow" aria-hidden="true" />
        {showFallback ? (
          <img
            alt={profile.fallbackImage.alt}
            className="minecraft-fallback"
            src={profile.fallbackImage.src}
          />
        ) : (
          <canvas
            aria-label={`Interactive Minecraft skin for ${profile.username}`}
            className={state === 'ready' ? 'minecraft-canvas is-ready' : 'minecraft-canvas'}
            ref={canvasRef}
          />
        )}
        {state === 'loading' ? <span className="minecraft-loading">Loading skin</span> : null}
      </div>

      <div className="minecraft-showcase-footer">
        <Rotate3D aria-hidden="true" size={15} />
        <span>{showFallback ? 'Static profile fallback' : 'Drag to rotate'}</span>
      </div>
    </div>
  )
}
