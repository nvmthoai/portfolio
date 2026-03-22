export type Theme = 'light' | 'dark' | 'system'

export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  return (localStorage.getItem('theme') as Theme) || null
}

export function setStoredTheme(theme: Theme | null) {
  if (typeof window === 'undefined') return
  if (theme) localStorage.setItem('theme', theme)
  else localStorage.removeItem('theme')
}

export function getSystemPrefersDark(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function applyTheme(theme: Theme) {
  if (typeof window === 'undefined' || !document) return
  const isDark = theme === 'dark' || (theme === 'system' && getSystemPrefersDark())
  document.documentElement.classList.toggle('dark', !!isDark)
}

export function onSystemThemeChange(cb: (isDark: boolean) => void) {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {}
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = (e: MediaQueryListEvent) => cb(e.matches)

  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', handler)
  } else if (typeof (mq as MediaQueryList).addListener === 'function') {
    // older browsers
    (mq as MediaQueryList).addListener(handler)
  }

  return () => {
    if (typeof mq.removeEventListener === 'function') {
      mq.removeEventListener('change', handler)
    } else if (typeof (mq as MediaQueryList).removeListener === 'function') {
      (mq as MediaQueryList).removeListener(handler)
    }
  }
}
