import React, { useState, useEffect } from 'react'
import { projects } from './data/projects'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

type Theme = 'light' | 'dark'

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) ?? 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <div className="portfolio">
      <Header theme={theme} onToggleTheme={toggleTheme} />
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
      <Footer />
    </div>
  )
}

export default App
