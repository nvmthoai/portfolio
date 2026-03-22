"use client"

import Image from 'next/image'
import { Project, getProjectThumbnail, isDeployed } from '../data/projects'

export default function ProjectCard({ project, onOpen }: { project: Project, onOpen?: (p: Project) => void }){
  const titleId = `proj-${project.id}-title`

  function handleActivate(e: React.MouseEvent | React.KeyboardEvent) {
    // if user clicked/pressed inside an interactive element, ignore (links/buttons)
    const target = (e.target as HTMLElement)
    if (target.closest('a,button')) return
    onOpen?.(project)
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleActivate(e)
    }
  }

  return (
    // Project card is accessible: article role=button to avoid nested interactive elements
    <article
      role="button"
      tabIndex={0}
      aria-labelledby={titleId}
      onClick={(e) => handleActivate(e)}
      onKeyDown={onKeyDown}
      className="group text-left w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/30"
    >
      <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-56">
        <Image src={getProjectThumbnail(project)} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 720px" className="object-cover" loading="lazy" />

        {/* gradient overlay + title */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
          <div className="flex items-center justify-between">
            <h3 id={titleId} className="text-lg font-semibold leading-tight truncate" style={{WebkitLineClamp: 1, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{project.title}</h3>
            <span className="text-xs px-2 py-1 rounded bg-white/10 text-white">{project.category}</span>
          </div>
          <p className="text-xs text-white/80 mt-1 truncate" style={{WebkitLineClamp: 1, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{project.technologies.slice(0,3).join(' • ')}</p>
        </div>

        {!isDeployed(project) && (
          <div aria-hidden="true" className="absolute top-3 right-3 z-30 px-2 py-1 text-xs font-medium rounded bg-amber-100 text-amber-800 dark:bg-amber-900/70 dark:text-amber-200 border">Chưa triển khai</div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 truncate" style={{WebkitLineClamp: 3, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{project.description}</p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {project.technologies.map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{t}</span>
            ))}
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 shadow w-full sm:w-auto text-center">Live</a>
            ) : (
              <span className="text-sm px-3 py-2 rounded-md bg-slate-200 text-slate-500 w-full sm:w-auto text-center">Chưa triển khai</span>
            )}

            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md border bg-transparent text-slate-700 dark:text-slate-200 w-full sm:w-auto text-center">Code</a>
          </div>
        </div>
      </div>
    </article>
  )
}
