// src/components/Contact.tsx
import React from 'react'

const Contact: React.FC = () => {
  const email = 'info@kitsune-creative.studio'
  const subject = encodeURIComponent('ポートフォリオを拝見しました')
  const body = encodeURIComponent('お問い合わせ内容：')

  return (
    <>
      <h2>Contact</h2>
      <p>
        お仕事のご相談やお問い合わせは、メールまたは各種SNSからお願いいたします。
      </p>

      <div className="project">
        <h3>Mail</h3>
        <p>
          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
          >
            {email}
          </a>
        </p>
      </div>

      <div className="project">
        <h3>Links</h3>
        <p>
          <a href="https://github.com/kcs-trial-class/Portfolio-Sample" target="_blank" rel="noreferrer">
            GitHub
          </a>{' '}
          /{' '}
          <a href="https://qiita.com/" target="_blank" rel="noreferrer">
            Qiita
          </a>
        </p>
      </div>
    </>
  )
}

export default Contact
