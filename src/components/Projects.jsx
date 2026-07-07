import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  return (
    <section className="section-band" id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Community support areas</p>
          <h2>Staff Work Interests</h2>
          <p>
            A quick overview of the kinds of staff, moderation, and server support
            areas I care about.
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
