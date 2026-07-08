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
              data-cursor-reactive
              data-reveal="scale"
              data-skill-label={skill.label}
              key={skill.title}
              style={{
                '--reveal-delay': `${index * 75}ms`,
                '--skill-delay': `${index * 90}ms`,
                '--skill-index': index,
                '--skill-mark-delay': `${index * 60 + 120}ms`,
              }}
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
