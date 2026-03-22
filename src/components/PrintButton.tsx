"use client"

import type { MouseEvent } from 'react'

export default function PrintButton(){
  const handlePrint = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.print) window.print()
  }

  return (
    <a href="#" onClick={handlePrint} className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/3 transition">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 9V3h12v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="6" y="13" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      Print
    </a>
  )
}
