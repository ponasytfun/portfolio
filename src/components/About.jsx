export default function About({ about }) {
  return (
    <section className="section-band about-section" id="about">
      <div className="section-inner about-layout">
        <div className="section-heading" data-reveal="slide">
          <p className="eyebrow">Profile</p>
          <h2>{about.heading}</h2>
          <p>{about.text}</p>
        </div>

        <div className="stats-grid" aria-label="Portfolio stats">
          {about.stats.map((stat, index) => (
            <article
              className="stat-card"
              data-reveal="card"
              key={stat.label}
              style={{ '--stat-index': index, '--reveal-index': index }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
