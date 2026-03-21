import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"
import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Home() {
  return (
    <div>
      <section className="py-12">
        <h1 className="text-3xl font-bold">Hi — I'm Developer</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">This is a minimal portfolio scaffold with routes, Tailwind and simple transitions.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/projects" className="bg-sky-600 text-white px-4 py-2 rounded-md">View projects</Link>
          <Link href="/contact" className="border px-4 py-2 rounded-md">Contact</Link>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
