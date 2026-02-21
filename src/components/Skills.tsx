import React from "react";

const skillGroups = [
  {
    title: "ゲームクライアント",
    items: [
      "Unity",
      "C#",
      "C++",
      "Objective-C",
      "Swift",
      "Java",
      "OpenSiv3D",
      "Direct X",
      "パフォーマンス改善",
    ],
  },
  {
    title: "サーバー・インフラ",
    items: [
      "Golang",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Ruby",
      "React",
      "gRPC",
      "WebSocket",
      "Docker",
      "k8s",
      "AWS",
      "GCP",
      "Azure",
    ],
  },
  {
    title: "開発プロセス",
    items: ["設計", "要件整理", "運用改善", "障害対応", "コードレビュー"],
  },
  {
    title: "ツール・環境",
    items: [
      "Rider",
      "VS Code",
      "Visual Studio",
      "Git",
      "GitHub",
      "GitLab",
      "Notion",
      "BackLog",
    ],
  },
  {
    title: "取得資格",
    items: [
      "MOS Excel 2016",
      "MOS PowerPoint 2016",
    ],
  },
];

const Skills: React.FC = () => (
  <section id="skills">
    <h2>Skills</h2>
    {skillGroups.map((group) => (
      <div className="project" key={group.title}>
        <h3>{group.title}</h3>
        <p>{group.items.join(" / ")}</p>
      </div>
    ))}
  </section>
);

export default Skills;
