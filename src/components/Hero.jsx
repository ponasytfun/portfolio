import { ArrowDownRight, BriefcaseBusiness, MessageCircle } from 'lucide-react'
import MinecraftSkinViewer from './MinecraftSkinViewer'
import QuantumOrb from './QuantumOrb'

export default function Hero({ hero, minecraft }) {
  return (
    <section className="hero-section section-band" id="portfolio-intro">
      <QuantumOrb />
      <div className="section-inner hero-inner">
        <div className="hero-copy" data-reveal="slide">
          <p className="eyebrow">{hero.badge}</p>
          <h2 className="hero-name">
            <span>{hero.name}</span>
            <small>Community operations,<br />done properly.</small>
          </h2>
          <p className="hero-title">{hero.title}</p>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-support">{hero.support}</p>
          <div className="hero-actions" aria-label="Portfolio shortcuts">
            <a className="button button-primary button-with-icon" href={hero.primaryAction.href}>
              <MessageCircle aria-hidden="true" size={17} />
              {hero.primaryAction.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryAction.href}>
              <BriefcaseBusiness aria-hidden="true" size={17} />
              {hero.secondaryAction.label}
              <ArrowDownRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
        <MinecraftSkinViewer profile={minecraft} />
      </div>
    </section>
  )
}
