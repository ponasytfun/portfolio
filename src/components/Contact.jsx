import { useState } from 'react'

export default function Contact({ contact }) {
  const [copied, setCopied] = useState(false)

  const copyDiscordUsername = async () => {
    try {
      await navigator.clipboard.writeText(contact.discordUsername)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section-band contact-section" id="contact">
      <div className="section-inner contact-inner">
        <div className="section-heading">
          <p className="eyebrow">Discord first</p>
          <h2>{contact.heading}</h2>
          <p>{contact.text}</p>
        </div>
        <div className="contact-panel">
          <button
            aria-label={`Copy Discord username ${contact.discordUsername}`}
            className="button contact-button"
            onClick={copyDiscordUsername}
            type="button"
          >
            <span className="button-icon" aria-hidden="true">D</span>
            {copied ? 'Copied username' : contact.discordUsername}
          </button>
          <a
            aria-label="Open Glitch community invite"
            className="button contact-button contact-button-secondary"
            href={contact.communityHref}
          >
            <span className="button-icon" aria-hidden="true">D</span>
            {contact.communityLabel}
          </a>
          <p className="contact-note">
            The community button is ready for a real Discord invite when one is added.
          </p>
        </div>
      </div>
    </section>
  )
}
