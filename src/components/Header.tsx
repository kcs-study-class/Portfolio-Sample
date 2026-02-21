import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

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
