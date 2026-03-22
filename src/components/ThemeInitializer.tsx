"use client"
import { useEffect } from 'react'
import { getStoredTheme, applyTheme, onSystemThemeChange } from '../lib/theme'

export default function ThemeInitializer() {
  useEffect(() => {
    const stored = getStoredTheme()
    const initial = stored || 'system'
    applyTheme(initial)
    const off = onSystemThemeChange(() => {
      const cur = getStoredTheme() || 'system'
      if (cur === 'system') applyTheme('system')
    })
    return () => off()
  }, [])

  return null
}
