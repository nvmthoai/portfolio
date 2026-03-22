"use client"

import React from 'react'
import { Experience } from '../../data/resume'

type Props = {
  ex: Experience
  index: number
  visible: boolean
}

export default function ExperienceCard({ ex, index, visible }: Props){
  return (
    <div
      data-idx={`exp-${index}`}
      className={`reveal-card p-4 rounded-md bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transform transition-all duration-500 will-change-transform ${visible ? 'translate-y-0 opacity-100 in-view' : 'translate-y-6 opacity-0'} hover:shadow-2xl hover:-translate-y-1 min-h-[160px]`}
    >
      <div className="md:flex md:items-start md:gap-4">
        <div className="hidden md:flex flex-col items-center w-12">
          <span className="w-1 h-full bg-slate-100 dark:bg-slate-800 rounded-sm" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2 gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">{ex.company}</h3>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{ex.role}</div>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">{ex.start} — {ex.end}</div>
          </div>

          <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
            <ul className="mt-2 space-y-2">
              {(ex.bullets || []).map((b: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs">✓</span>
                  <span className="flex-1">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
