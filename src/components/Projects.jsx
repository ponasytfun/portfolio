import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  return (
    <section className="section-band" id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Selected development work</p>
          <h2>Projects</h2>
          <p>
            Plugin and tool projects shaped around practical systems, community workflows,
            and clean technical execution.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
