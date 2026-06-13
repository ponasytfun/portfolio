const particles = Array.from({ length: 18 }, (_, index) => index + 1)

export default function QuantumOrb() {
  return (
    <div className="quantum-field" aria-hidden="true">
      <div className="quantum-grid" />
      <div className="orb-shell">
        <div className="orb-glow" />
        <div className="orb-core" />
        <div className="ring ring-front" />
        <div className="ring ring-horizontal" />
        <div className="ring ring-diagonal" />
        <div className="particle-field">
          {particles.map((particle) => (
            <span className="particle" key={particle} />
          ))}
        </div>
      </div>
    </div>
  )
}
