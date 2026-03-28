import React from 'react'
import type { Project } from '../types'

type ProjectsProps = {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const studentProjects = projects.filter((p) => p.category === 'student')
  const proProjects = projects.filter((p) => p.category === 'professional')

  const renderGroup = (title: string, colorClass: string, list: Project[]) => (
    <div className="project-group">
      <h3 className={`project-group-title project-group-title--${colorClass}`}>{title}</h3>
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
            <div className="project-meta">
              <p><strong>Platform</strong> {project.platform}</p>
              <p><strong>期間</strong> {project.period}</p>
              {project.role && <p><strong>役割</strong> {project.role}</p>}
            </div>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            {project.highlights && project.highlights.length > 0 && (
              <div className="project-highlights">
                <p className="project-highlights-label">工夫した点</p>
                <ul>
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
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
      {renderGroup('社会人実績', 'professional', proProjects)}
      {renderGroup('学生実績', 'student', studentProjects)}
    </section>
  )
}

export default Projects
