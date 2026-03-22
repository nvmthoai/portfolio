export type SkillItem = {
  name: string
  value: number
  icon?: string
}

export type SkillCategory = {
  category: string
  items: SkillItem[]
}

export type SoftSkill = {
  name: string
  value: number
}

export type Language = {
  name: string
  value: number
  note?: string
}

export type SkillsData = {
  technical_skills: SkillCategory[]
  soft_skills: SoftSkill[]
  languages: Language[]
}

const skillsData: SkillsData = {
  technical_skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "ReactJS", value: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", value: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vue.js", value: 78, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "TypeScript", value: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "TailwindCSS", value: 96, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML/CSS/JS", value: 98, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Redux / Zustand", value: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "React Query / SWR", value: 80, icon: "https://raw.githubusercontent.com/remorses/devicons/master/icons/react-query/react-query-original.svg" }
      ]
    },
    {
      category: "Mobile & Backend",
      items: [
        { name: "React Native", value: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "NestJS", value: 78, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
        { name: "Node.js", value: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL/MySQL", value: 76, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Prisma / ORM", value: 72, icon: "https://raw.githubusercontent.com/remorses/devicons/master/icons/prisma/prisma-original.svg" }
      ]
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git/GitHub", value: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Figma", value: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Vercel/VPS", value: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
        { name: "CI/CD (GitHub Actions)", value: 78, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", value: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS (S3/Lambda)", value: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
      ]
    }
  ],
  soft_skills: [
    { name: "Problem Solving", value: 90 },
    { name: "Team Collaboration (Agile)", value: 95 },
    { name: "Quick Learning", value: 95 },
    { name: "Technical Design", value: 85 },
    { name: "Communication", value: 88 }
  ],
  languages: [
    { name: "English", value: 75, note: "Proficient in reading technical docs" },
    { name: "Vietnamese", value: 100, note: "Native" }
  ]
}

export default skillsData