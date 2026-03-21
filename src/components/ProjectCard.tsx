import Link from "next/link"

export default function ProjectCard({ project }: { project: any }){
  return (
    <article className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={project.image} alt={project.title} loading="lazy" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{project.description}</p>
        <div className="mt-3">
          <Link href={project.href || '#'} className="text-sky-600 hover:underline">View</Link>
        </div>
      </div>
    </article>
  )
}
