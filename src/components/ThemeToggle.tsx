"use client"

import { useEffect, useState } from 'react'
import { setStoredTheme, applyTheme, onSystemThemeChange } from '../lib/theme'

type Theme = 'light' | 'dark' | 'system'

export default function ThemeToggle() {
  // render static placeholder on server to avoid mismatch; enable full UI after mount
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system'
    return (localStorage.getItem('theme') as Theme) || 'system'
  })

  useEffect(() => {
    // schedule mounted state in microtask to avoid synchronous state update in effect
    Promise.resolve().then(() => setMounted(true))
    // apply the current theme immediately on client
    applyTheme(theme)

    const unsubscribe = onSystemThemeChange(() => {
      // if user uses 'system' theme, re-apply when system changes
      if ((localStorage.getItem('theme') as Theme) === 'system') applyTheme('system')
    })
    return () => unsubscribe()
  }, [theme])

  useEffect(() => {
    if (!mounted) return
    applyTheme(theme)
  }, [theme, mounted])

  function cycleTheme() {
    setTheme((t) => {
      const next = t === 'system' ? 'dark' : t === 'dark' ? 'light' : 'system'
      applyTheme(next)
      setStoredTheme(next === 'system' ? null : next)
      return next
    })
  }

  if (!mounted) {
    // neutral placeholder that matches server render
    return (
      <button aria-label="Theme toggle" title="Theme" className="ml-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 ring-0 focus:outline-none" />
    )
  }

  const icon = theme === 'system' ? 'system' : theme === 'dark' ? 'dark' : 'light'
  const label = `Theme: ${theme}`

  return (
    <button
      aria-label={`Theme toggle (current: ${theme})`}
      title={label}
      onClick={cycleTheme}
      className="ml-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform ring-0 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
    >
      {icon === 'dark' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
        </svg>
      )}
      {icon === 'light' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3v2M12 19v2M5 5l1.5 1.5M17.5 17.5L19 19M3 12h2M19 12h2M5 19l1.5-1.5M17.5 6.5L19 5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.6} />
        </svg>
      )}
      {icon === 'system' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 3h18v14H3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 21h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
