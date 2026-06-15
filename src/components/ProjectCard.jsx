export default function ProjectCard({ index, project }) {
  const hasScreenshots = Boolean(project.links?.screenshots)
  const hasCode = Boolean(project.links?.code)

  return (
    <article className="project-card" style={{ '--project-index': index }}>
      <div className="card-topline">
        <h3>{project.name}</h3>
        <span className="status-badge">{project.status}</span>
      </div>
      <p>{project.description}</p>
      <ul className="tech-list" aria-label={`${project.name} technologies`}>
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="card-actions">
        <a className="button button-small button-secondary" href={project.links.details}>
          View Details
        </a>
        {hasScreenshots ? (
          <a className="button button-small button-ghost" href={project.links.screenshots}>
            Screenshots
          </a>
        ) : null}
        {hasCode ? (
          <a
            className="button button-small button-ghost"
            href={project.links.code}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        ) : (
          <button className="button button-small button-disabled" disabled type="button">
            Code soon
          </button>
        )}
      </div>
    </article>
  )
}
