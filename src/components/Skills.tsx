import React from 'react'
import { skillGroups } from '../data/skills'

const Skills: React.FC = () => (
  <div className="skills-section">
    <h2>Skills</h2>
    {skillGroups.map((group) => (
      <div className="project skills-item" key={group.title}>
        <h3 className="skills-title">{group.title}</h3>
        <p className="skills-items">{group.items.join(' / ')}</p>
      </div>
    ))}
  </div>
)

export default Skills
