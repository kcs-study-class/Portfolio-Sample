import React, { useState } from 'react'

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false)

  const profile = {
    name: '田村 航海',
    photo: '/images/profile.jpg',
    age: '27',
    education: '東京デザインテクノロジーセンター専門学校',
    selfPr:
      '企画から実装、運用改善までを一貫して進められることが強みです。要件を整理して優先順位を明確にし、短いサイクルで検証しながら品質と速度を両立します。開発中は進捗と課題を可視化し、関係者との認識ずれを防ぎます。新しい技術の検証も継続し、再利用しやすい構成で長期運用に耐える成果物を目指しています。',
    careerAndAwards: [
      '職務経歴を入力してください',
      '受賞歴を入力してください'
    ],
    osAndTools: [
      '使用OS: Windows, Mac, Rocky Linux(RHEL)',
      '使用ツール: Unity, Rider, VS Code, GitHub, AWS, GCP, Azure, Cloudflare, Redmine'
    ],
    phone: '070-2406-xxxx',
    email: 'info@kitsune-creative.studio',
    media: [
      { label: 'GitHub', url: 'https://github.com/kcs-trial-class/Portfolio-Sample' },
      { label: 'Qiita', url: 'https://qiita.com/' }
    ]
  }

  return (
    <section className="about-profile">
      <h2>プロフィール</h2>

      <div className="about-head">
        {!imageError ? (
          <img
            src={profile.photo}
            alt={`${profile.name}の顔写真`}
            className="about-photo"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="about-photo about-photo-placeholder" aria-label="顔写真なし">
            No Image
          </div>
        )}

        <dl className="about-meta">
          <div>
            <dt>氏名</dt>
            <dd>{profile.name}</dd>
          </div>
          <div>
            <dt>年齢</dt>
            <dd>{profile.age}</dd>
          </div>
          <div>
            <dt>最終学歴</dt>
            <dd>{profile.education}</dd>
          </div>
        </dl>
      </div>

      <div className="about-block">
        <h3>自己PR</h3>
        <p>{profile.selfPr}</p>
      </div>

      <div className="about-block">
        <h3>職務経歴・受賞歴</h3>
        <ul>
          {profile.careerAndAwards.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="about-block">
        <h3>使用OS・使用可能ツール</h3>
        <ul>
          {profile.osAndTools.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="about-block">
        <h3>連絡先情報</h3>
        <ul>
          <li>
            電話番号: <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
          <li>
            メールアドレス: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        </ul>
      </div>

      <div className="about-block">
        <h3>SNS・ブログ</h3>
        <ul>
          {profile.media.map((item) => (
            <li key={item.label}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
