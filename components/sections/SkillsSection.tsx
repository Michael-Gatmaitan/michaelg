import MutedText from "../muted-text"
import SkillList from "../layout/Skills/SkillList"

const frontendSkills = [
  "React & Next.js",
  "Redux",
  "SCSS",
  "TailwindCSS",
  "ShadcnUI",
]

const backendSkills = [
  "Node.js (Express.js)",
  "Prisma",
  "Supabase",
  "PostgreSQL",
]

const programmingLanguages = [
  "TypeScript",
  "C#",
  "Python"
]

const tools = [
  "Figma",
  "Git & Github",
  "Postman",
  "Neovim"
]

const SkillsSection = () => {
  return (
    <section id="skills" className="space-y-6 border-t border-border/60 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <MutedText text="Skills" />
          <h2 className="text-2xl font-semibold">My current tech stack & tools ⚡</h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <SkillList skillTitle="Frontend" skills={frontendSkills} />
        <SkillList skillTitle="Backend" skills={backendSkills} />
        <SkillList skillTitle="Programming Languages" skills={programmingLanguages} />
        <SkillList skillTitle="Tools" skills={tools} />
      </div>
    </section>
  )
}

export default SkillsSection
