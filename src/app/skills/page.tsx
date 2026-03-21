import SkillBar from "../../components/SkillBar"
import { skills } from "../../data/skills"

export default function Skills(){
  return (
    <div>
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="mt-4 max-w-md">
        {skills.map(s => <SkillBar key={s.id} name={s.name} level={s.level} />)}
      </div>
    </div>
  )
}
