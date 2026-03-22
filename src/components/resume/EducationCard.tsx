"use client"

import React from 'react'
import { Education } from '../../data/resume'

type Props = {
  ed: Education
  index: number
  visible: boolean
}

export default function EducationCard({ ed, index, visible }: Props){
  return (
    <div
      data-idx={`edu-${index}`}
      className={`reveal-card p-4 rounded-md bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transform transition-all duration-500 will-change-transform ${visible ? 'translate-y-0 opacity-100 in-view' : 'translate-y-6 opacity-0'} hover:shadow-2xl hover:-translate-y-1 min-h-[120px]`}
    >
      <div className="md:flex md:items-start md:gap-4">
        <div className="hidden md:flex flex-col items-center w-12">
          <span className="w-1 h-full bg-slate-100 dark:bg-slate-800 rounded-sm" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Học vấn</div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">{ed.school}</h3>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{ed.start} — {ed.end}</div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm text-slate-600 dark:text-slate-400">{ed.major}</div>
              {ed.gpa && <div className="hidden sm:inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">GPA: {ed.gpa}</div>}
            </div>

            {ed.details && (
              <ul className="mt-3 space-y-2">
                {(ed.details || []).map((d: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/20 dark:text-sky-300 text-xs">•</span>
                    <span className="flex-1">{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
