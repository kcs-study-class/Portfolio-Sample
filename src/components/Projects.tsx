import React from 'react'
import type { Project } from '../types'

type ProjectsProps = {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const studentProjects = projects.filter((p) => p.category === 'student')
  const proProjects = projects.filter((p) => p.category === 'professional')

  const renderGroup = (title: string, color: string, list: Project[]) => (
    <div className="project-group" key={title}>
      <h3 style={{ color, borderBottom: `2px solid ${color}` }}>{title}</h3>
      {list.map((project) => (
        <div key={project.title} className="project">
          {project.image ? (
            <img src={project.image} alt={project.title} className="project-thumb" draggable={false} />
          ) : (
            <div className="project-thumb project-thumb-placeholder" aria-label="No image available">
              No Image
            </div>
          )}
          <div className="project-content">
            <h4>{project.title}</h4>
            <p>
              <strong>Platform:</strong> {project.platform}
            </p>
            <p>
              <strong>期間:</strong> {project.period}
            </p>
            <p>
              <strong>使用技術:</strong> {project.tech.join(', ')}
            </p>
            <p>
              <strong>役割:</strong> {project.role}
            </p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {project.gameUrl && (
                <a href={project.gameUrl} target="_blank" rel="noreferrer">
                  Play
                </a>
              )}
              {project.homepage && (
                <a href={project.homepage} target="_blank" rel="noreferrer">
                  HomePage
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      {renderGroup('社会人実績', '#27ae60', proProjects)}
      {renderGroup('学生実績', '#e74c3c', studentProjects)}
    </section>
  )
}

export default Projects
