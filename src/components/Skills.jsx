const levelTone = {
  Learning: 'level-learning',
  Comfortable: 'level-comfortable',
  Strong: 'level-strong',
  Advanced: 'level-advanced',
}

const levelScore = {
  Learning: 38,
  Comfortable: 62,
  Strong: 82,
  Advanced: 94,
}

const featuredSkills = [
  { label: 'Main focus', value: 'Community ops' },
  { label: 'Best area', value: 'Player support' },
  { label: 'Support skill', value: 'Configs + logs' },
]

export default function Skills({ skillGroups }) {
  const totalSkills = skillGroups.reduce((total, group) => total + group.skills.length, 0)

  return (
    <section className="section-band skills-section" id="skills">
      <div className="section-inner">
        <div className="skills-header">
          <div className="section-heading">
            <p className="eyebrow">Skills I am actively building</p>
            <h2>Community Skills</h2>
            <p>
              A clearer look at the staff workflows, moderation habits, server
              operations, and technical basics behind my community support work.
            </p>
          </div>

          <div className="skills-summary" aria-label="Skill highlights">
            {featuredSkills.map((item) => (
              <div className="summary-tile" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
            <div className="summary-tile summary-total">
              <span>Tracked skills</span>
              <strong>{totalSkills}</strong>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <article
              className="skill-card"
              key={group.title}
              style={{
                '--skill-card-delay': `${groupIndex * 70}ms`,
                '--skill-card-index': groupIndex,
              }}
            >
              <div className="skill-card-top">
                <span className="skill-card-number">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.summary}</p>
                </div>
              </div>

              <ul className="skill-list">
                {group.skills.map((skill, skillIndex) => (
                  <li
                    key={`${group.title}-${skill.name}`}
                    style={{
                      '--skill-meter-delay': `${groupIndex * 70 + skillIndex * 24 + 240}ms`,
                      '--skill-row-delay': `${groupIndex * 70 + skillIndex * 24 + 140}ms`,
                      '--skill-index': skillIndex,
                      '--skill-level': `${levelScore[skill.level]}%`,
                    }}
                  >
                    <div className="skill-row-main">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`level-pill ${levelTone[skill.level]}`}>
                        {skill.level}
                      </span>
                    </div>
                    <span className="skill-meter" aria-hidden="true">
                      <span />
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
