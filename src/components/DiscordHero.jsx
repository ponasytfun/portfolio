import { useEffect, useMemo, useRef } from 'react'
import { Activity, ArrowDown, Radio } from 'lucide-react'
import useLanyard from '../hooks/useLanyard'
import { getActivityDetails, getPresenceView } from '../utils/discordPresence'
import SocialIcon from './SocialIcon'

const heroParticles = Array.from({ length: 22 }, (_, index) => ({
  delay: `${index * -0.58}s`,
  duration: `${7 + (index % 7) * 1.35}s`,
  left: `${8 + ((index * 19) % 84)}%`,
  size: `${2 + (index % 4)}px`,
  top: `${12 + ((index * 23) % 76)}%`,
}))

const orbitNodes = Array.from({ length: 10 }, (_, index) => index)

export default function DiscordHero({ contact, discordHero }) {
  const heroRef = useRef(null)
  const { data, error, errorType, isConfigured, isStale, lastUpdatedAt, status } = useLanyard(
    contact.lanyard?.userId,
    contact.lanyard?.pollIntervalMs,
  )

  const displayName = discordHero.displayName
  const user = data?.discord_user
  const liveDisplayName = user?.global_name || user?.display_name || displayName
  const activityDetails = getActivityDetails(data)
  const presenceView = getPresenceView({
    data,
    errorType,
    isConfigured,
    isStale,
    lastUpdatedAt,
    status,
  })

  const kvItems = (contact.lanyard?.kvKeys ?? [])
    .map((key) => ({ key, value: data?.kv?.[key] }))
    .filter((item) => item.value)

  const detailItems = useMemo(() => {
    const items = [
      {
        label: presenceView.detailLabel,
        value: presenceView.detailValue,
      },
    ]

    if (presenceView.staleText) {
      items.push({ label: 'Updated', value: presenceView.staleText })
    }

    if (activityDetails) {
      items.push(activityDetails)
    }

    kvItems.forEach((item) => {
      items.push({ label: item.key, value: item.value })
    })

    if (error && !data) {
      items.push({ label: 'Connection', value: error })
    }

    return items.slice(0, 4)
  }, [activityDetails, data, error, kvItems, presenceView])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) {
      return undefined
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    if (reduceMotion) {
      return undefined
    }

    let frameId
    let scrollFrameId

    const setPointerVars = (event) => {
      if (!finePointer) {
        return
      }

      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2

        hero.style.setProperty('--discord-bg-x', `${x * -11}px`)
        hero.style.setProperty('--discord-bg-y', `${y * -7}px`)
        hero.style.setProperty('--discord-grid-x', `${x * 8}px`)
        hero.style.setProperty('--discord-grid-y', `${y * 5}px`)
        hero.style.setProperty('--discord-tilt-x', `${y * -3.2}deg`)
        hero.style.setProperty('--discord-tilt-y', `${x * 4.2}deg`)
      })
    }

    const resetPointerVars = () => {
      hero.style.setProperty('--discord-bg-x', '0px')
      hero.style.setProperty('--discord-bg-y', '0px')
      hero.style.setProperty('--discord-grid-x', '0px')
      hero.style.setProperty('--discord-grid-y', '0px')
      hero.style.setProperty('--discord-tilt-x', '0deg')
      hero.style.setProperty('--discord-tilt-y', '0deg')
    }

    const updateScrollVars = () => {
      window.cancelAnimationFrame(scrollFrameId)
      scrollFrameId = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, Math.abs(rect.top) / Math.max(rect.height, 1)))
        hero.style.setProperty('--discord-scroll-y', `${progress * 28}px`)
        hero.style.setProperty('--discord-scroll-fade', String(Math.min(1, progress * 1.8)))
      })
    }

    hero.addEventListener('pointermove', setPointerVars)
    hero.addEventListener('pointerleave', resetPointerVars)
    window.addEventListener('scroll', updateScrollVars, { passive: true })
    updateScrollVars()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.cancelAnimationFrame(scrollFrameId)
      hero.removeEventListener('pointermove', setPointerVars)
      hero.removeEventListener('pointerleave', resetPointerVars)
      window.removeEventListener('scroll', updateScrollVars)
    }
  }, [])

  return (
    <section
      aria-label="Live Discord presence"
      className={`discord-hero discord-hero-${presenceView.statusClass}`}
      id="home"
      ref={heroRef}
      style={{ '--discord-hero-bg': `url("${discordHero.backgroundImage.src}")` }}
    >
      <div className="discord-hero-bg" aria-hidden="true" />
      <div className="discord-hero-ambient" aria-hidden="true" />
      <div className="discord-hero-grid" aria-hidden="true" />
      <div className="discord-hero-scan" aria-hidden="true" />
      <div className="discord-hero-particles" aria-hidden="true">
        {heroParticles.map((particle, index) => (
          <span
            key={index}
            style={{
              '--particle-delay': particle.delay,
              '--particle-duration': particle.duration,
              '--particle-left': particle.left,
              '--particle-size': particle.size,
              '--particle-top': particle.top,
            }}
          />
        ))}
      </div>

      <div className="discord-hero-content">
        <div className="discord-hero-visual">
          <div className="discord-live-label">
            <Radio aria-hidden="true" size={14} />
            <span>{discordHero.label}</span>
          </div>

          <div className="discord-avatar-stage">
            <div className="discord-avatar-orbit" aria-hidden="true">
              {orbitNodes.map((node) => (
                <span key={node} style={{ '--node-angle': `${node * 36}deg` }} />
              ))}
            </div>
            <div className="discord-avatar-frame">
              <img
                alt={contact.profileImage.alt}
                height="188"
                loading="eager"
                src={contact.profileImage.src}
                width="188"
              />
              <span className={`lanyard-status-dot lanyard-status-${presenceView.statusClass}`}>
                <span className="sr-only">{presenceView.statusText}</span>
              </span>
            </div>
          </div>

          <p className="discord-signal"><Activity aria-hidden="true" size={14} /> Lanyard signal connected</p>
        </div>

        <div className="discord-identity">
          <p className="discord-hero-kicker">{discordHero.kicker}</p>
          <h1>{displayName}</h1>
          <p className="discord-hero-location">{discordHero.location}</p>
          <p className="discord-hero-intro">{discordHero.intro}</p>
          <div className="discord-presence-line">
            <span className={`presence-beacon lanyard-status-${presenceView.statusClass}`} aria-hidden="true" />
            <span>
              <small>Live as {liveDisplayName}</small>
              <strong className="discord-hero-status" key={presenceView.statusText} aria-live="polite">
                {presenceView.statusText}
              </strong>
            </span>
          </div>
          <div className="discord-social-row" aria-label="Social links">
            {(contact.socials ?? []).map((social) => (
              <a
                className={social.placeholder ? 'discord-social-link is-placeholder' : 'discord-social-link'}
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target={social.href?.startsWith('http') ? '_blank' : undefined}
              >
                <SocialIcon label={social.label} size={16} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <dl className="discord-hero-data" aria-label="Live Discord details">
          {detailItems.map((item, index) => (
            <div key={`${item.label}-${item.value}`} style={{ '--detail-delay': `${index * 80 + 980}ms` }}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a className="discord-scroll-cue" href={discordHero.scrollTarget}>
        <span>{discordHero.scrollLabel}</span>
        <ArrowDown aria-hidden="true" size={15} />
      </a>
    </section>
  )
}
