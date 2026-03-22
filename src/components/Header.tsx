"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from './ThemeToggle'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const path = usePathname()
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)
  const prevActiveRef = useRef<HTMLElement | null>(null)

  const nav = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  // close mobile panel on navigation or outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (open && panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [open])

  // focus management for mobile panel
  useEffect(() => {
    if (!open) return
    // save previously focused element
    prevActiveRef.current = document.activeElement as HTMLElement | null

    // focus first link in panel
    setTimeout(() => firstLinkRef.current?.focus(), 0)

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
      }
      if (e.key === 'Tab') {
        // basic trap inside panel
        const node = panelRef.current
        if (!node) return
        const focusable = Array.from(node.querySelectorAll<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])"))
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement as HTMLElement
        if (!e.shiftKey && active === last) {
          e.preventDefault(); first.focus()
        } else if (e.shiftKey && (active === first || active === node)) {
          e.preventDefault(); last.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      // restore focus
      prevActiveRef.current?.focus()
    }
  }, [open])

  return (
    <header className="w-full backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-white/6 dark:border-gray-800 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md transform transition-transform duration-300 hover:scale-105">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <motion.span key={path} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 220, damping: 22 }} className="font-semibold text-lg text-slate-900 dark:text-white">My Portfolio</motion.span>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <ul className="hidden md:flex gap-1 items-center">
            {nav.map((n) => {
              const isActive = path === n.href
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={"group inline-block px-3 py-1 rounded-md transition-transform transform " + (isActive ? "-translate-y-0.5" : "hover:-translate-y-0.5")}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="relative inline-block">
                      <span className={`text-sm font-medium ${isActive ? 'text-sky-600 dark:text-sky-300' : 'text-gray-700 dark:text-gray-200'}`}>{n.label}</span>
                      <span
                        className={
                          "absolute left-0 -bottom-1 h-[2px] bg-sky-600 dark:bg-sky-400 transition-transform duration-300 transform origin-left group-hover:scale-x-100 " +
                          (isActive ? 'scale-x-100' : 'scale-x-0')
                        }
                      />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* theme toggle */}
          <ThemeToggle />

          {/* mobile: menu button */}
          <div className="md:hidden">
            <button aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(o => !o)} className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform" aria-label="Open menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* mobile panel */}
      <div ref={panelRef} id="mobile-nav" className={`md:hidden ${open ? 'block' : 'hidden'} bg-white dark:bg-gray-900 border-t border-white/6 dark:border-gray-800`}>
        <div className="max-w-5xl mx-auto px-4 py-4">
          <ul className="flex flex-col gap-2">
            {nav.map((n, idx) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} ref={idx === 0 ? firstLinkRef : undefined} className={`block px-3 py-2 rounded-md ${path === n.href ? 'bg-sky-50 dark:bg-sky-900/20 text-sky-600' : 'text-slate-700 dark:text-slate-200'}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
