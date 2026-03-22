"use client"

import { useEffect, useRef, useState } from 'react'
import resumeData, { Education, Experience } from '../data/resume'
import EducationCard from './resume/EducationCard'
import ExperienceCard from './resume/ExperienceCard'

export default function ResumeTabs(){
  const [tab, setTab] = useState<'education'|'experience'>('education')

  const education: Education[] = resumeData.education || []
  const experiences: Experience[] = resumeData.experience || []

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [visibleIndexes, setVisibleIndexes] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = entry.target.getAttribute('data-idx')
          if (idx) {
            const parts = idx.split('-')
            const num = parseInt(parts[1] ?? '0', 10) || 0
            setTimeout(() => {
              setVisibleIndexes(prev => ({ ...prev, [idx]: true }))
            }, num * 80)
          }
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' })

    const nodes = containerRef.current?.querySelectorAll('.reveal-card') || []
    nodes.forEach((n) => observer.observe(n))

    return () => observer.disconnect()
  }, [tab, education.length, experiences.length])

  // Fallback: if for some reason observer doesn't trigger (small containers), ensure content is visible
  useEffect(() => {
    const keyPrefix = tab === 'education' ? 'edu' : 'exp'
    const count = tab === 'education' ? education.length : experiences.length
    if (count === 0) return
    // Mark all items visible after a short delay so user sees content reliably
    const t = setTimeout(() => {
      setVisibleIndexes(prev => {
        const next = { ...prev }
        for (let i = 0; i < count; i++) next[`${keyPrefix}-${i}`] = true
        return next
      })
    }, 120)
    return () => clearTimeout(t)
  }, [tab, education.length, experiences.length])

  return (
    <div className="mt-6">
      <div className="flex gap-3 border-b border-slate-200 dark:border-slate-700">
        <button
          role="tab"
          aria-selected={tab === 'education'}
          onClick={() => setTab('education')}
          className={`py-2 px-4 -mb-px ${tab === 'education' ? 'text-sky-600 dark:text-sky-300 border-b-2 border-sky-600 dark:border-sky-300' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
        >
          Học vấn
        </button>
        <button
          role="tab"
          aria-selected={tab === 'experience'}
          onClick={() => setTab('experience')}
          className={`py-2 px-4 -mb-px ${tab === 'experience' ? 'text-sky-600 dark:text-sky-300 border-b-2 border-sky-600 dark:border-sky-300' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}`}
        >
          Kinh nghiệm
        </button>
      </div>

      <div className="mt-6 space-y-6" ref={containerRef}>
        {tab === 'education' && (
          <div className="space-y-4">
            {education.map((ed: Education, i: number) => (
              <EducationCard key={i} ed={ed} index={i} visible={visibleIndexes[`edu-${i}`] ?? true} />
            ))}
            {education.length === 0 && <div className="p-6 bg-white dark:bg-slate-900 rounded-md shadow text-sm text-slate-600 dark:text-slate-400">Hiện chưa có mục Học vấn. Bạn có thể thêm thông tin học vấn vào <code>src/data/resume.ts</code>.</div>}
          </div>
        )}

        {tab === 'experience' && (
          <div className="space-y-4">
            {experiences.map((ex: Experience, i: number) => (
              <ExperienceCard key={i} ex={ex} index={i} visible={visibleIndexes[`exp-${i}`] ?? true} />
            ))}
            {experiences.length === 0 && <div className="p-6 bg-white dark:bg-slate-900 rounded-md shadow text-sm text-slate-600 dark:text-slate-400">Hiện chưa có mục Kinh nghiệm. Bạn có thể thêm thông tin kinh nghiệm vào <code>src/data/resume.ts</code>.</div>}
          </div>
        )}

      </div>
    </div>
  )
}
