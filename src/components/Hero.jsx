import QuantumOrb from './QuantumOrb'

export default function Hero({ hero }) {
  return (
    <section className="hero-section section-band" id="home">
      <QuantumOrb />
      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <div className="profile-frame">
            <img alt={hero.profileImage.alt} src={hero.profileImage.src} />
            <span className="online-dot" aria-label="Online" />
          </div>
          <p className="eyebrow">{hero.badge}</p>
          <h1>{hero.name}</h1>
          <p className="hero-title">{hero.title}</p>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-support">{hero.support}</p>
          <div className="hero-actions" aria-label="Portfolio shortcuts">
            <a className="button button-primary button-with-icon" href={hero.primaryAction.href}>
              <span className="button-icon" aria-hidden="true">D</span>
              {hero.primaryAction.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
