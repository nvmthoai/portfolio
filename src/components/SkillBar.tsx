export default function SkillBar({ name, level }: { name: string; level: number }){
  return (
    <div className="my-2">
      <div className="flex justify-between text-sm mb-1"><span>{name}</span><span>{Math.round(level*100)}%</span></div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">
        <div className="bg-sky-600 h-3 rounded-full" style={{ width: `${level*100}%` }} />
      </div>
    </div>
  )
}
