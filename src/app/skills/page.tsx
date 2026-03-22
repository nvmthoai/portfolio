"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import skillsData, { SkillItem, SkillCategory } from "../../data/skills"

// TooltipPercent: shows animated tooltip on hover/focus with Framer Motion
function TooltipPercent({ value, children }: { value: number, children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const id = `tooltip-${value}`
  return (
    <div className="relative inline-block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      <div tabIndex={0} aria-describedby={id} className="focus:outline-none">
        {children}
      </div>
      <motion.div
        role="tooltip"
        id={id}
        initial={{ opacity: 0, y: 6 }}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{ duration: 0.14 }}
        className="pointer-events-none absolute -top-10 right-0 bg-slate-900 text-white text-xs px-2 py-1 rounded-md shadow-md"
        aria-hidden={!open}
      >
        {value}%
      </motion.div>
    </div>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } }
}

export default function Skills() {
  const tech = skillsData.technical_skills || [] as SkillCategory[]
  const soft = skillsData.soft_skills || []
  const langs = skillsData.languages || []

  // Helper to find an item by name
  function findSkill(name: string): SkillItem | undefined {
    for (const cat of tech) {
      const it = cat.items.find(i => i.name.toLowerCase() === name.toLowerCase())
      if (it) return it
    }
    return undefined
  }

  const featureA = findSkill('ReactJS')
  const featureB = findSkill('TailwindCSS')
  const medium = ['Next.js','Vue.js','TypeScript'].map(n => findSkill(n)).filter(Boolean) as SkillItem[]
  const tools: SkillItem[] = []
  const toolsCat = tech.find(c => /tool/i.test(c.category) || /devops/i.test(c.category))
  if (toolsCat) tools.push(...toolsCat.items)
  const softDisplay = soft.slice(0, 5)

  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Skills</h1>
      </div>

      <motion.div className="grid gap-6 lg:grid-cols-12" variants={container} initial="hidden" animate="show">
        {/* Left: technical bento grid */}
        <div className="lg:col-span-9 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
            {/* Feature large card: spans 4 cols on md+ */}
            <motion.div variants={item} className="md:col-span-4 col-span-1">
              <div className="rounded-xl p-5 border shadow-sm bg-white dark:bg-slate-900 dark:bg-opacity-60 dark:border-white/10">
                <div className="flex items-center gap-4">
                  {featureA && featureA.icon && (
                    <Image src={featureA.icon} alt={featureA.name} width={56} height={56} className="rounded-lg" />
                  )}
                  <div>
                    <div className="text-sm text-slate-500 dark:text-[#94A3B8]">Top Skill</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{featureA?.name ?? 'ReactJS'}</h3>
                  </div>
                </div>

                <div className="mt-4">
                  <TooltipPercent value={featureA?.value ?? 95}>
                    <div className="relative bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                      <motion.div className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-cyan-400 dark:to-violet-500 shadow-md"
                        // fallback width so bar is visible even if JS/animation doesn't run
                        style={{ width: `${featureA?.value ?? 95}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${featureA?.value ?? 95}%` }}
                        transition={{ duration: 0.8, delay: 0.12 }}
                        role="progressbar"
                        aria-valuenow={featureA?.value ?? 95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${featureA?.name ?? 'ReactJS'} proficiency`}
                     />
                   </div>
                 </TooltipPercent>
               </div>
             </div>
           </motion.div>

            {/* Feature B: Tailwind */}
            <motion.div variants={item} className="md:col-span-4 col-span-1">
              <div className="rounded-xl p-5 border shadow-sm bg-white dark:bg-slate-900 dark:bg-opacity-60 dark:border-white/10">
                <div className="flex items-center gap-4">
                  {featureB && featureB.icon && (
                    <Image src={featureB.icon} alt={featureB.name} width={56} height={56} className="rounded-lg" />
                  )}
                  <div>
                    <div className="text-sm text-slate-500 dark:text-[#94A3B8]">Top Skill</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{featureB?.name ?? 'TailwindCSS'}</h3>
                  </div>
                </div>

                <div className="mt-4">
                  <TooltipPercent value={featureB?.value ?? 95}>
                    <div className="relative bg-slate-100 dark:bg-slate-800 rounded-full h-3 overflow-hidden">
                      <motion.div className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-cyan-400 dark:to-violet-500 shadow-md"
                        style={{ width: `${featureB?.value ?? 95}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${featureB?.value ?? 95}%` }}
                        transition={{ duration: 0.8, delay: 0.24 }}
                        role="progressbar"
                        aria-valuenow={featureB?.value ?? 95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${featureB?.name ?? 'TailwindCSS'} proficiency`}
                       />
                   </div>
                 </TooltipPercent>
               </div>
             </div>
          </motion.div>

            {/* Medium cards: each spans 2 cols */}
            {medium.map((m: SkillItem, i: number) => (
              <motion.div key={m.name} variants={item} className="md:col-span-2 col-span-1">
                <div className="rounded-lg p-6 border shadow-sm bg-white dark:bg-slate-900 dark:bg-opacity-60 dark:border-white/10">
                  <div className="flex items-center gap-3 ">
                    {m.icon && <Image src={m.icon} alt={m.name} width={40} height={36} className="rounded " />}
                    <div>
                      <div className="text-sm text-slate-500 dark:text-[#94A3B8]">Core</div>
                      <div className="font-semibold text-slate-900 dark:text-white">{m.name}</div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <TooltipPercent value={m.value}>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <motion.div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-cyan-400 dark:to-violet-500"
                          style={{ width: `${m.value}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${m.value}%` }}
                          transition={{ duration: 0.8, delay: 0.28 + i * 0.06 }}
                          role="progressbar"
                          aria-valuenow={m.value}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${m.name} proficiency`}
                       />
                     </div>
                   </TooltipPercent>
                    {/* percentage: place inline below the bar and right-aligned to avoid overlap */}
                    <div className="mt-2 flex justify-end text-xs text-slate-700 dark:text-slate-200">{m.value}%</div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Tools as small tags - span remaining cols if any */}
            <motion.div variants={item} className="md:col-span-8 col-span-1">
              <div className="flex flex-wrap gap-3 mt-3">
                {tools.map((t: SkillItem) => (
                  <motion.div key={t.name} variants={item} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-100 dark:bg-slate-800 dark:bg-opacity-30 border dark:border-white/6" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                    {t.icon && <Image src={t.icon} alt={t.name} width={20} height={20} />}
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{t.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: soft skills + languages */}
        <aside className="lg:col-span-3 space-y-6">
          <motion.div variants={item} className="rounded-lg p-4 bg-white shadow-sm dark:bg-slate-900 dark:bg-opacity-60 dark:border-white/10">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Soft Skills</h4>
            <div className="flex flex-wrap gap-3">
              {softDisplay.map((s) => (
                <motion.div key={s.name} variants={item} whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/10 dark:to-cyan-900/10 text-sm font-semibold text-slate-900 dark:text-white">
                  <span className="text-sm">🧩</span>
                  <span>{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-lg p-4 bg-white shadow-sm dark:bg-slate-900 dark:bg-opacity-60 dark:border-white/10">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Languages</h4>
            <div className="flex flex-wrap gap-3">
              {langs.map((l) => (
                <motion.div key={l.name} variants={item} className="px-3 py-2 rounded-md bg-slate-100 dark:bg-slate-800 border dark:border-white/6">
                  <div className="font-semibold text-slate-900 dark:text-white">{l.name}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{l.note}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </aside>
      </motion.div>

      {/* Category breakdown for clarity */}
      <motion.div variants={item} className="lg:col-span-12 mt-6">
        <h4 className="text-lg font-semibold mb-3 text-slate-800 dark:text-white">Technical Skill Categories</h4>
        <div className="grid gap-4 md:grid-cols-3">
          {tech.map((cat) => (
            <div key={cat.category} className="p-3 rounded-md bg-slate-50 dark:bg-slate-900/40 border dark:border-white/6">
              <div className="font-semibold text-sm text-slate-700 dark:text-slate-200 mb-2">{cat.category}</div>
              <div className="space-y-2">
                {cat.items.map(it => (
                  <div key={it.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {it.icon && <Image src={it.icon} alt={it.name} width={20} height={20} />}
                      <div>{it.name}</div>
                    </div>
                    <div className="w-36 ml-4">
                      <div className="bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-cyan-400 dark:to-violet-500" style={{ width: `${it.value}%` }} role="progressbar" aria-valuenow={it.value} aria-valuemin={0} aria-valuemax={100} aria-label={`${it.name} proficiency`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
