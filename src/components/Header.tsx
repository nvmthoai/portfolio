"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const path = usePathname()
  const nav = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Resume" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="w-full bg-white dark:bg-gray-900/70 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">My Portfolio</Link>
        <nav>
          <ul className="flex gap-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={
                    "px-3 py-1 rounded-md transition-colors " +
                    (path === n.href
                      ? "bg-sky-600 text-white"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800")
                  }
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
