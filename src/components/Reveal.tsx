"use client"

import React, { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'split-left' | 'split-right' | 'split'
  delay?: number
}

export default function Reveal({ children, className = '', animation = 'fade-up', delay = 0 }: Props){
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === 'undefined') return

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.style.setProperty('--reveal-delay', `${delay}ms`)
          el.classList.add('reveal--visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${animation} ${className}`}> {children} </div>
  )
}

/* Add the component-level css (kept here for simplicity) */
export const css = `
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 520ms cubic-bezier(.2,.9,.3,1) var(--reveal-delay, 0ms), transform 520ms cubic-bezier(.2,.9,.3,1) var(--reveal-delay, 0ms); }
.reveal.reveal--visible { opacity: 1; transform: translateY(0); }
.reveal.fade-up { }

.reveal.split { position: relative; overflow: hidden; }
.reveal.split::before, .reveal.split::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(14,165,233,0.06), rgba(99,102,241,0.04)); transform: translateX(-100%); z-index: 10; transition: transform 700ms cubic-bezier(.2,.9,.3,1); }
.reveal.split::after { transform: translateX(100%); }
.reveal.split.reveal--visible::before { transform: translateX(0%); }
.reveal.split.reveal--visible::after { transform: translateX(0%); }
`
