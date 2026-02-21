import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'BANgBANgStreaming（9人開発、BitSummit）',
    period: '2024年4月〜7月（5ヶ月）',
    tech: ['Unity', 'Physics', 'Networking'],
    role: 'リードプログラマー、物理実装、多人数同期',
    github: 'https://github.com/your/pinball',
    itch: 'https://your.itch.io/game',
    image: '/images/pinball-thumb.jpg',
    category: 'professional'
  },
  {
    title: 'Horse Racing Analyzer（個人開発）',
    period: '2025年〜現在',
    tech: ['Go', 'JavaScript', 'AWS'],
    role: '全般、リアルタイム予測モデル',
    github: 'https://github.com/your/horse-analyzer',
    image: '/images/horse-thumb.jpg',
    category: 'professional'
  },
  {
    title: '学生2Dアクションゲーム',
    period: '2021年3月〜6月（4ヶ月）',
    tech: ['Unity 2D', 'C#'],
    role: 'プログラマー',
    image: '/images/student-game.jpg',
    category: 'student'
  }
]
