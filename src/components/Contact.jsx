import { useEffect, useRef, useState } from 'react'

export default function Contact({ contact }) {
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef()

  useEffect(() => {
    return () => window.clearTimeout(copyTimer.current)
  }, [])

  const copyDiscordUsername = async () => {
    try {
      await navigator.clipboard.writeText(contact.discordUsername)
      setCopied(true)
      window.clearTimeout(copyTimer.current)
      copyTimer.current = window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section-band contact-section" id="contact">
      <div className="section-inner contact-inner contact-stack">
        <div className="section-heading section-heading-centered contact-heading" data-reveal="slide">
          <p className="eyebrow">Contact me</p>
          <h2>{contact.heading}</h2>
          <p>{contact.text}</p>
        </div>

        <div className="contact-panel contact-actions-panel" data-reveal="card">
          <div className="social-link-grid" aria-label="Social links">
            {(contact.socials ?? []).map((social) => (
              <a
                className={social.placeholder ? 'social-link-card is-placeholder' : 'social-link-card'}
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target={social.href?.startsWith('http') ? '_blank' : undefined}
              >
                <span className="social-link-icon" aria-hidden="true">{social.icon}</span>
                <span>
                  <strong>{social.label}</strong>
                  <small>{social.handle}</small>
                </span>
              </a>
            ))}
          </div>
          <button
            aria-label={`Copy Discord username ${contact.discordUsername}`}
            className="button contact-button"
            onClick={copyDiscordUsername}
            type="button"
          >
            <span className="button-icon" aria-hidden="true">D</span>
            {copied ? 'Copied username' : contact.discordUsername}
          </button>
        </div>
      </div>
    </section>
  )
}
