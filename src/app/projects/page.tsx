import { projects } from "../../data/projects"
import ProjectCard from "../../components/ProjectCard"

export default function Projects(){
  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}
