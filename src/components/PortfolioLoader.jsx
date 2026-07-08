import usePortfolioLoader from '../hooks/usePortfolioLoader'

const loaderLabels = [
  { text: 'INITIALIZING PROFILE', className: 'loader-label loader-label-profile' },
  { text: 'LOADING EXPERIENCE', className: 'loader-label loader-label-experience' },
  { text: 'SYNCING DISCORD', className: 'loader-label loader-label-discord' },
  { text: 'MOUNTING INTERFACE', className: 'loader-label loader-label-interface' },
  { text: 'RENDERING PORTFOLIO', className: 'loader-label loader-label-render' },
]

const loaderParticles = Array.from({ length: 26 }, (_, index) => ({
  delay: `${index * -0.37}s`,
  duration: `${5.4 + (index % 8) * 0.55}s`,
  left: `${7 + ((index * 17) % 86)}%`,
  top: `${8 + ((index * 29) % 82)}%`,
}))

const phaseDots = ['PROFILE', 'EXP', 'DND', 'UI']

export default function PortfolioLoader() {
  const { isActive, isExiting, mode, phase, progress } = usePortfolioLoader()

  if (!isActive) {
    return null
  }

  const phaseLabel = phase === 'ready' ? 'SYSTEM READY' : 'PORTFOLIO INITIALIZATION'
  const progressDashOffset = 679 - (679 * progress) / 100

  return (
    <div
      className={`portfolio-loader portfolio-loader-${mode}${isExiting ? ' is-exiting' : ''}`}
      data-phase={phase}
    >
      <div className="sr-only" role="status" aria-live="polite">
        {phase === 'ready' ? 'Portfolio ready' : 'Loading portfolio interface'}
      </div>

      <div className="loader-panel loader-panel-left" aria-hidden="true" />
      <div className="loader-panel loader-panel-right" aria-hidden="true" />

      <div className="loader-stage" aria-hidden="true">
        <div className="loader-field">
          {loaderParticles.map((particle, index) => (
            <span
              key={index}
              style={{
                '--loader-particle-delay': particle.delay,
                '--loader-particle-duration': particle.duration,
                '--loader-particle-left': particle.left,
                '--loader-particle-top': particle.top,
              }}
            />
          ))}
        </div>

        <div className="loader-sync-lines">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="loader-scanline" />
        <div className="loader-crosshair loader-crosshair-top" />
        <div className="loader-crosshair loader-crosshair-bottom" />

        {loaderLabels.map((label) => (
          <span className={label.className} key={label.text}>
            {label.text}
          </span>
        ))}

        <div className="loader-core-shell">
          <svg className="loader-orbit-svg" viewBox="0 0 260 260">
            <circle className="loader-ring loader-ring-muted" cx="130" cy="130" r="108" />
            <circle
              className="loader-ring loader-ring-progress"
              cx="130"
              cy="130"
              r="108"
              style={{ strokeDashoffset: progressDashOffset }}
            />
            <circle className="loader-ring loader-ring-inner" cx="130" cy="130" r="72" />
            <path className="loader-arc loader-arc-a" d="M56 130a74 74 0 0 1 148 0" />
            <path className="loader-arc loader-arc-b" d="M204 130a74 74 0 0 1-148 0" />
            <g className="loader-ticks">
              {Array.from({ length: 24 }, (_, index) => (
                <line
                  key={index}
                  x1="130"
                  x2="130"
                  y1="18"
                  y2={index % 3 === 0 ? '30' : '25'}
                  transform={`rotate(${index * 15} 130 130)`}
                />
              ))}
            </g>
          </svg>

          <div className="loader-orbit loader-orbit-a">
            <span />
          </div>
          <div className="loader-orbit loader-orbit-b">
            <span />
          </div>
          <div className="loader-orbit loader-orbit-c">
            <span />
          </div>

          <div className="loader-core">
            <span className="loader-core-pulse" />
          </div>
        </div>

        <div className="loader-progress-block">
          <span>{phaseLabel}</span>
          <strong>{progress}%</strong>
        </div>

        <div className="loader-phase-dots">
          {phaseDots.map((dot, index) => (
            <span key={dot} className={index <= Math.floor(progress / 28) ? 'is-lit' : ''}>
              {dot}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
