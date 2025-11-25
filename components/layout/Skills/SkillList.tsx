import MutedText from '@/components/muted-text'
import { Badge } from '@/components/ui/badge'

interface SkillListProps {
  skillTitle: string,
  skills: string[]
}

const SkillList = ({ skillTitle, skills }: SkillListProps) => {
  return (
    <div className="space-y-3">
      <MutedText text={skillTitle} />
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="rounded-full bg-secondary/50 px-4 py-1 text-sm border-gray-600/50"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default SkillList
