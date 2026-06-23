export default function ProjectCard({ index, project }) {
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
          Read More
        </a>
      </div>
    </article>
  )
}
