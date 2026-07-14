import { useEffect, useRef, useState } from 'react'
import { Check, Copy, ExternalLink } from 'lucide-react'
import SocialIcon from './SocialIcon'

export default function Contact({ contact }) {
  const [copied, setCopied] = useState(false)
  const copyTimer = useRef()

  useEffect(() => {
    return () => window.clearTimeout(copyTimer.current)
  }, [])

  const copyDiscordUsername = async () => {
    let didCopy = false

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(contact.discordUsername)
        didCopy = true
      }
    } catch {
      didCopy = false
    }

    if (!didCopy) {
      const fallbackInput = document.createElement('textarea')
      fallbackInput.value = contact.discordUsername
      fallbackInput.setAttribute('readonly', '')
      fallbackInput.style.position = 'fixed'
      fallbackInput.style.opacity = '0'
      document.body.appendChild(fallbackInput)
      fallbackInput.select()
      didCopy = document.execCommand('copy')
      fallbackInput.remove()
    }

    setCopied(didCopy)
    window.clearTimeout(copyTimer.current)
    if (didCopy) copyTimer.current = window.setTimeout(() => setCopied(false), 1800)
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
                <span className="social-link-icon"><SocialIcon label={social.label} /></span>
                <span>
                  <strong>{social.label}</strong>
                  <small>{social.handle}</small>
                </span>
                {!social.placeholder ? <ExternalLink aria-hidden="true" className="social-link-arrow" size={15} /> : null}
              </a>
            ))}
          </div>
          <button
            aria-label={`Copy Discord username ${contact.discordUsername}`}
            className="button contact-button"
            onClick={copyDiscordUsername}
            type="button"
          >
            {copied ? <Check aria-hidden="true" size={17} /> : <Copy aria-hidden="true" size={17} />}
            {copied ? 'Copied username' : contact.discordUsername}
          </button>
        </div>
      </div>
    </section>
  )
}
