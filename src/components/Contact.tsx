import React from 'react'

const Contact: React.FC = () => {
  const email = 'info@kitsune-creative.studio'
  const subject = encodeURIComponent('ポートフォリオを拝見しました')
  const body = encodeURIComponent('ご相談内容をご記入ください。')

  return (
    <>
      <h2>Contact</h2>
      <p>お仕事のご相談やご連絡は、メールからお願いします。</p>

      <div className="project">
        <h3>Mail</h3>
        <p>
          <a href={`mailto:${email}?subject=${subject}&body=${body}`}>{email}</a>
        </p>
      </div>
    </>
  )
}

export default Contact
