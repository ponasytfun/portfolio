function RoleCard({ index, role, tone }) {
  return (
    <article className={`role-card role-card-${tone}`} style={{ '--role-index': index }}>
      <div className="role-card-header">
        <span className="role-icon" aria-hidden="true">
          {role.icon ?? 'STAFF'}
        </span>
        <div>
          <h3>{role.name}</h3>
          <p>{role.role}</p>
        </div>
      </div>
      <p className="role-description">{role.description}</p>
      {role.stats ? (
        <dl className="role-stats">
          {role.stats.map((stat) => (
            <div key={`${role.name}-${stat.label}`}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </article>
  )
}

export default function StaffRoles({ currentRoles, pastRoles }) {
  return (
    <>
      <section className="section-band section-band-muted roles-section" id="current-roles">
        <div className="section-inner">
          <div className="section-heading section-heading-centered">
            <p className="eyebrow">Active work</p>
            <h2>CURRENT STAFF ROLES</h2>
          </div>
          <div className="current-role-grid">
            {currentRoles.map((role, index) => (
              <RoleCard index={index} key={role.name} role={role} tone="current" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band roles-section" id="past-roles">
        <div className="section-inner">
          <div className="section-heading section-heading-centered">
            <p className="eyebrow">Previous teams</p>
            <h2>PAST STAFF ROLES</h2>
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
