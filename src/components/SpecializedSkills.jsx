export default function SpecializedSkills({ skills }) {
  return (
    <section className="section-band section-band-muted skills-section" id="skills">
      <div className="section-inner">
        <div className="section-heading section-heading-centered" data-reveal="slide">
          <p className="eyebrow">Server toolkit</p>
          <h2>SPECIALIZED SKILLS</h2>
        </div>
        <div className="specialized-grid">
          {skills.map((skill, index) => (
            <article
              className="specialized-card"
              data-reveal="card"
              key={skill.title}
              style={{ '--skill-index': index, '--reveal-index': index }}
            >
              <span className="skill-mark" aria-hidden="true">
                {skill.label}
              </span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
