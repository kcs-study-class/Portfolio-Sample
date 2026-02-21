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
          <div className="logo">田村 航海のポートフォリオ</div>

          {/* PC用メニュー */}
          <nav className="nav-desktop">
            <ul>
              {menuItems.map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* モバイル用ハンバーガー */}
          <button
            className={`hamburger ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* モバイル用ドロワー */}
      <nav className={`nav-mobile ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
        <ul onClick={e => e.stopPropagation()}>
          {menuItems.map(item => (
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
