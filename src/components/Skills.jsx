const levelTone = {
  Learning: 'level-learning',
  Comfortable: 'level-comfortable',
  Strong: 'level-strong',
  Advanced: 'level-advanced',
}

export default function Skills({ skillGroups }) {
  return (
    <section className="section-band" id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Skills I am actively building</p>
          <h2>Technical Skills</h2>
          <p>
            Honest skill labels for the tools, languages, and workflows behind the projects.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <article
              className="skill-card"
              key={group.title}
              style={{ '--skill-card-index': groupIndex }}
            >
              <h3>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <li
                    key={`${group.title}-${skill.name}`}
                    style={{ '--skill-index': skillIndex }}
                  >
                    <span>{skill.name}</span>
                    <span className={`level-pill ${levelTone[skill.level]}`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
