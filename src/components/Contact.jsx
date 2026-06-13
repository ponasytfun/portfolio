export default function Contact({ contacts }) {
  return (
    <section className="section-band contact-section" id="contact">
      <div className="section-inner contact-inner">
        <div className="section-heading">
          <p className="eyebrow">Contact and links</p>
          <h2>Build Log Open</h2>
          <p>
            Replace the placeholders with real links when GitHub, Discord, or email details
            are ready to share.
          </p>
        </div>
        <div className="contact-grid">
          {contacts.map((contact) => (
            <article className="contact-card" key={contact.label}>
              <h3>{contact.label}</h3>
              <p>{contact.value}</p>
              {contact.href ? (
                <a className="button button-small button-secondary" href={contact.href}>
                  Open
                </a>
              ) : (
                <button className="button button-small button-disabled" disabled type="button">
                  Placeholder
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
