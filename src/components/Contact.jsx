import { useEffect, useRef, useState } from 'react'
import LanyardCard from './LanyardCard'

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

        <LanyardCard
          config={contact.lanyard}
          fallbackUsername={contact.discordUsername}
          profileImage={contact.profileImage}
        />

        <div className="contact-panel contact-actions-panel" data-reveal="card">
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
