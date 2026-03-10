import type { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Portfolio サンプル作成',
    platform: 'Web',
    period: '3日',
    tech: ['TypeScript', 'React', 'Codex', 'PhotoShop', 'Cloudflare', 'AWS S3', 'AWS CloudFront'],
    image:'/images/portfolio_thumb.png',
    github:'https://github.com/kcs-trial-class/Portfolio-Sample',
    homepage:'./',
    role: '',
    category: 'professional'
  },
  {
    title: '非公開 (アニメ作画支援ツール)',
    platform: 'iOS',
    period: '2023年10月~2024年9月',
    tech: ['Unity', 'C#'],
    role: 'プログラマー',
    category: 'professional'
  },
  {
    title: 'E-THREE CUP 配信サポートシステム',
    platform: 'PC',
    period: '3日',
    tech: ['Unity', 'C#'],
    role: 'リードプログラマー',
    gameUrl:'https://www.youtube.com/watch?v=7XA3oY80X3Y',
    image:'/images/apex_tool.png',
    category: 'professional'
  },
  {
    title: '非公開 (会話型推理ゲーム)',
    platform: 'PC Steam',
    period: '2022年4月~2023年10月',
    tech: ['Unity', 'C#'],
    role: 'リードプログラマー',
    category: 'professional'
  },
  {
    title: '非公開 (3Dストラテジーゲーム)',
    platform: 'iOS, Android',
    period: '2022年9月~2023年3月',
    tech: ['Unity', 'C#', 'C++', 'Golang', 'gRPC', 'VisualStudio 2022', 'VS Code'],
    role: 'クライアント/サーバープログラマー, インフラ',
    category: 'professional'
  },
  {
    title: '太鼓の達人 ドンダフルフェスティバル',
    platform: 'Nintendo Switch',
    period: '2020年10月～2022年8月',
    tech: ['Unity', 'C#', 'C++', 'Python', 'VisualStudio 2019'],
    role: 'プログラマー, 設計',
    homepage:'https://dondafulfestival-20th.taiko-ch.net/',
    category: 'professional'
  },
  {
    title: 'AIの歌（8人開発、卒業進級制作展 2021）',
    platform: 'iOS, Android',
    period: '2020年4月〜2021年2月（10か月）',
    tech: ['Unity 2D', 'C#', 'VisualStudio 2019'],
    role: 'リードプログラマー',
    image: '/images/ai_songs.png',
    category: 'student'
  },
  {
    title: 'Jumping Bird（卒業進級制作展 2019）',
    platform: 'iOS, Android',
    period: '2019年10月〜2020年2月（5か月）',
    tech: ['Unity 2D', 'C#', 'VisualStudio 2017'],
    role: 'リードプログラマー',
    category: 'student'
  },
  {
    title: 'オルカアタック（TGS2019）',
    platform: 'iOS, Android',
    period: '2019年4月〜2019年9月（5か月）',
    tech: ['Unity 2D', 'C#', 'VisualStudio 2017'],
    role: 'リードプログラマー',
    category: 'student'
  },
  {
    title: 'てくしぃプロジェクト（TGS2018、卒業進級制作展 2018）',
    platform: 'PC (VR)',
    period: '2018年4月〜2019年2月（10か月）',
    tech: ['Unity 2D', 'C#', 'VisualStudio 2017'],
    role: 'プログラマー・機材',
    image: '/images/tech_thumb.png',
    gameUrl: 'https://www.youtube.com/watch?v=25kTSssfiRo',
    category: 'student'
  },
  {
    title: '遅刻魔少女★スクランブル（6人開発、TGS2018）',
    platform: 'PC',
    period: '2018年4月〜2018年9月（5か月）',
    tech: ['Unity 2D', 'C#', 'VisualStudio 2017'],
    role: 'リードプログラマー',
    image: '/images/lategirl_thumb.png',
    category: 'student'
  },
  {
    title: '神剣のメタノイア（TGS2017、卒業進級制作展 2017）',
    platform: 'PC, VR',
    period: '2017年4月〜2018年2月（10か月）',
    tech: ['Unity 2D', 'C#', 'VisualStudio 2017', 'YEBIS', 'CRI ADX2'],
    role: 'プログラマー',
    image: null,
    category: 'student'
  }
]
