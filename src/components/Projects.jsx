import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  return (
    <section className="section-band" id="projects">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">What I like building</p>
          <h2>Build Interests</h2>
          <p>
            A quick overview of the kinds of systems, tools, and experiments I enjoy
            working on.
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
