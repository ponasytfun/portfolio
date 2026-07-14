import { ArrowUpRight, Code2, Crown, Radio } from 'lucide-react'

function RoleCard({ index, role, tone }) {
  const RoleIcon = role.role.includes('Developer') ? Code2 : Crown

  return (
    <article
      className={`role-card role-card-${tone}`}
      data-cursor-reactive
      data-reveal={tone === 'past' ? (index % 2 === 0 ? 'left' : 'right') : 'scale'}
      style={{
        '--reveal-delay': `${index * 75}ms`,
        '--role-delay': `${index * 90}ms`,
        '--role-index': index,
        '--role-stat-delay-primary': `${index * 70 + 180}ms`,
        '--role-stat-delay-secondary': `${index * 70 + 250}ms`,
      }}
    >
      <div className="role-card-header">
        <span className="role-icon" aria-hidden="true">
          <RoleIcon size={20} strokeWidth={1.7} />
        </span>
        <div>
          <h3>{role.name}</h3>
          <p>{role.role}</p>
        </div>
      </div>
      <p className="role-description">{role.description}</p>
      <ul className="role-focus" aria-label={`${role.name} focus areas`}>
        {role.focus.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  )
}

export default function StaffRoles({ availability, pastRoles }) {
  return (
    <>
      <section className="section-band availability-section" id="staff-experience">
        <div className="section-inner">
          <div className="section-heading section-heading-centered" data-reveal="slide">
            <p className="eyebrow">{availability.eyebrow}</p>
            <h2>{availability.heading}</h2>
          </div>
          <article className="role-card role-card-featured availability-panel" data-reveal="scale">
            <div className="availability-signal">
              <Radio aria-hidden="true" size={17} />
              <span>Status / independent</span>
            </div>
            <h3>{availability.title}</h3>
            <p>{availability.text}</p>
            <a className="text-link" href={availability.action.href}>
              {availability.action.label}<ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </article>
        </div>
      </section>

      <section className="section-band section-band-muted roles-section" id="past-roles">
        <div className="section-inner">
          <div className="section-heading section-heading-centered" data-reveal="slide">
            <p className="eyebrow">Selected history</p>
            <h2>PAST SERVER EXPERIENCE</h2>
            <p>Four leadership roles, each with a different mix of ownership, development, operations, and community responsibility.</p>
          </div>
          <div className="past-role-grid">
            {pastRoles.map((role, index) => (
              <RoleCard index={index} key={role.name} role={role} tone="past" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
