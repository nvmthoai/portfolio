"use client"
import { useEffect, useMemo } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function ScrollToTop(){
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const spStr = useMemo(() => (searchParams ? searchParams.toString() : ''), [searchParams])

  useEffect(()=>{
    // If there's a hash anchor (e.g. /page#section), scroll to that element.
    const hash = typeof window !== 'undefined' ? window.location.hash : ''
    const anchor = hash ? hash.slice(1) : ''

    if (anchor) {
      // small timeout to allow content/layout changes to settle
      const idTimeout = setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      }, 60)
      return () => clearTimeout(idTimeout)
    }

    // default: smooth scroll to top after a brief delay (works with page transitions)
    const t = setTimeout(()=> window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 60)
    return ()=> clearTimeout(t)
  },[pathname, spStr])

  return null
}
