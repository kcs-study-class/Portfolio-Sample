import React from 'react'
import { projects } from './data/projects'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="portfolio">
      <Header />
      <main className="container">
        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
