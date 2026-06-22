const particles = Array.from({ length: 30 }, (_, index) => {
  const x = (index * 37) % 100
  const y = (index * 53) % 100
  const drift = 12 + (index % 7) * 5
  const duration = 10 + (index % 6) * 1.4

  return {
    id: index + 1,
    style: {
      '--particle-x': `${x}%`,
      '--particle-y': `${y}%`,
      '--particle-drift': `${drift}px`,
      '--particle-duration': `${duration}s`,
      '--particle-delay': `${index * -0.42}s`,
    },
  }
})

export default function QuantumOrb() {
  return (
    <div className="quantum-field server-field" aria-hidden="true">
      <div className="quantum-grid" />
      <div className="hero-red-glow" />
      <div className="particle-field">
        {particles.map((particle) => (
          <span className="particle" key={particle.id} style={particle.style} />
        ))}
      </div>
    </div>
  )
}
