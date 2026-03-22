"use client"

import { useMemo, useState, useRef, useEffect } from 'react'
import { projects, Project, getProjectThumbnail } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ErrorBoundary from '../../../src/components/ErrorBoundary'

export default function Projects(){
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<string | null>(null)
  const [active, setActive] = useState<Project | null>(null)
  const [showAllTags, setShowAllTags] = useState(false)
  const [page, setPage] = useState(1)
  const pageSize = 6
  const modalRef = useRef<HTMLDivElement | null>(null)
  const previousActiveRef = useRef<HTMLElement | null>(null)

  const tags = useMemo(() => {
    const s = new Set<string>()
    projects.forEach(p => p.technologies.forEach(t => s.add(t)))
    return Array.from(s).sort()
  }, [])

  const filtered = useMemo(() => projects.filter(p => {
    const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase())
    const matchesTag = tag ? p.technologies.includes(tag) : true
    return matchesQuery && matchesTag
  }), [query, tag])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, page])

  // If filter/search changes, reset to page 1
  function handleSearch(q: string){ setQuery(q); setPage(1) }

  useEffect(() => {
    if (!active) return

    const node = modalRef.current
    // save previously focused element to restore later
    previousActiveRef.current = document.activeElement as HTMLElement | null

    // collect focusable elements inside modal
    const focusable = node
      ? Array.from(node.querySelectorAll<HTMLElement>("a[href], button, textarea, input, select, [tabindex]:not([tabindex='-1'])"))
      : []

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    // move focus into the modal
    setTimeout(() => first?.focus(), 0)

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.stopPropagation()
        setActive(null)
        return
      }

      if (e.key === 'Tab') {
        if (!focusable.length) {
          e.preventDefault()
          return
        }

        const focused = document.activeElement as HTMLElement
        const idx = focusable.indexOf(focused)

        if (e.shiftKey) {
          // shift+tab
          if (idx === 0 || focused === node) {
            e.preventDefault()
            last?.focus()
          }
        } else {
          // tab
          if (idx === focusable.length - 1) {
            e.preventDefault()
            first?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      // restore focus
      previousActiveRef.current?.focus()
    }
  }, [active])

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Projects</h1>
        <div className="flex items-center gap-3">
          <input value={query} onChange={e => handleSearch(e.target.value)} placeholder="Search projects..." className="px-3 py-2 border rounded-md bg-white dark:bg-slate-900" />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <button onClick={() => { setTag(null); setPage(1) }} className={`px-3 py-1 rounded ${tag===null ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>All</button>
        {(showAllTags ? tags : tags.slice(0, 10)).map(t => (
          <button key={t} onClick={() => { setTag(t); setPage(1) }} className={`px-3 py-1 rounded ${tag===t ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}>{t}</button>
        ))}
        {tags.length > 10 && (
          <button onClick={() => setShowAllTags(s => !s)} className="px-3 py-1 rounded bg-transparent text-slate-500">{showAllTags ? 'Show less' : `+${tags.length - 10} more`}</button>
        )}
      </div>

      <ErrorBoundary>
        {/* responsive grid: 1 col mobile, 2 cols on md (>=768px), 3 cols on lg (>=1024px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paged.map(p => (
            // cards animate from bottom -> up on entry
            <div key={p.id}>
  <ProjectCard project={p} onOpen={(proj) => setActive(proj)} />
</div>
          ))}
        </div>
      </ErrorBoundary>

      {/* Pagination controls */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex gap-2">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1 rounded border disabled:opacity-50">Prev</button>
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-1 rounded border disabled:opacity-50">Next</button>
        </div>

        {/* page numbers visible on sm+ screens */}
        {totalPages > 1 && (
          <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i+1)} className={`px-3 py-1 rounded ${page === i+1 ? 'bg-sky-600 text-white' : 'bg-transparent border'}`} aria-current={page === i+1 ? 'page' : undefined}>{i+1}</button>
            ))}
          </div>
        )}

        {/* compact page indicator for mobile */}
        <div className="sm:hidden text-sm text-slate-600 dark:text-slate-300">Trang {page} / {totalPages}</div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
            <div onClick={() => setActive(null)} className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />

            <motion.div ref={modalRef} role="dialog" aria-modal="true" initial={{ x: 200, scale: 0.98, opacity: 0 }} animate={{ x: 0, scale: 1, opacity: 1 }} exit={{ x: 200, scale: 0.98, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 30 }} className="relative w-full mx-4 bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-2xl max-w-full md:max-w-4xl lg:max-w-5xl">
              <button onClick={() => setActive(null)} className="absolute right-3 top-3 z-20 bg-white/80 dark:bg-slate-800/80 rounded-full p-1">✕</button>

              <div className="relative h-56 md:h-64 lg:h-72">
                <Image src={getProjectThumbnail(active as Project)} alt={(active as Project).title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 800px, 1200px" className="object-cover" loading="eager" priority />
              </div>
              <div className="p-6 md:p-8 lg:p-10">
                <h2 className="text-2xl font-bold">{(active as Project).title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mt-3">{(active as Project).description}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {(active as Project).technologies.map(t => <span key={t} className="px-2 py-1 text-sm bg-slate-100 dark:bg-slate-800 rounded">{t}</span>)}
                </div>

                <div className="mt-6 flex gap-3">
                  {(active as Project).demoUrl ? (
                    <a href={(active as Project).demoUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-sky-600 text-white rounded">View Demo</a>
                  ) : (
                    <button className="px-4 py-2 bg-slate-200 text-slate-500 rounded" title="Chưa triển khai">Chưa triển khai</button>
                  )}
                  <a href={(active as Project).githubUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Source</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
