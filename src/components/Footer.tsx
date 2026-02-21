import React from 'react'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {year} Kitsune Creative Studio. All rights reserved.</p>
        <a href="#about" aria-label="プロフィールへ戻る">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer
