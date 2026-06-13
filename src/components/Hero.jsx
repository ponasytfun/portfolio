import QuantumOrb from './QuantumOrb'

export default function Hero({ hero }) {
  return (
    <section className="hero-section section-band" id="home">
      <QuantumOrb />
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{hero.badge}</p>
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-support">{hero.support}</p>
          <div className="hero-actions" aria-label="Portfolio shortcuts">
            {hero.actions.map((action) => (
              <a
                className={`button button-${action.variant}`}
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
