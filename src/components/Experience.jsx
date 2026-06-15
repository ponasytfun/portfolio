export default function Experience({ items }) {
  return (
    <section className="section-band section-band-muted" id="experience">
      <div className="section-inner experience-layout">
        <div className="section-heading">
          <p className="eyebrow">What I have done</p>
          <h2>Experience</h2>
          <p>
            Practical development work across plugins, server tooling, debugging, and UI
            concepts.
          </p>
        </div>
        <ol className="experience-list">
          {items.map((item, index) => (
            <li key={item} style={{ '--experience-index': index }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
