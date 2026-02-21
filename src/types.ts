export type ProjectCategory = 'student' | 'professional'

export interface Project {
  title: string
  period: string
  tech: string[]
  role: string
  github?: string
  itch?: string
  image: string
  category: ProjectCategory
}
