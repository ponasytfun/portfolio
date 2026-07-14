import { Bot, Braces, CalendarDays, MessagesSquare, Network, ServerCog, Settings2, UsersRound } from 'lucide-react'

const skillIcons = {
  TEAM: UsersRound,
  OPS: ServerCog,
  DISC: MessagesSquare,
  EVNT: CalendarDays,
  TECH: Braces,
  ARCH: Network,
  BOT: Bot,
  GROW: UsersRound,
  YAML: Settings2,
}

export default function SpecializedSkills({ intro, skills }) {
  return (
    <section className="section-band section-band-muted skills-section" id="skills">
      <div className="section-inner">
        <div className="section-heading section-heading-centered" data-reveal="slide">
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2>{intro.heading}</h2>
          <p>{intro.text}</p>
        </div>
        <div className="specialized-grid">
          {skills.map((skill, index) => {
            const SkillIcon = skillIcons[skill.label] ?? Settings2

            return <article
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
                <SkillIcon size={21} strokeWidth={1.65} />
              </span>
              <small>{skill.label}</small>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
