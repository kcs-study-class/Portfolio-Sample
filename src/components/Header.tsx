import React, { useState } from 'react'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="logo">ポートフォリオ</div>

          <nav className="nav-desktop">
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label={theme === 'light' ? 'ダークモードに切替' : 'ライトモードに切替'}
            >
              <span className="theme-toggle-icon">{theme === 'light' ? '☾' : '☀'}</span>
            </button>

            <button
              className={`hamburger ${isOpen ? 'is-open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="メニュー"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`nav-mobile ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
        <ul onClick={(e) => e.stopPropagation()}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
