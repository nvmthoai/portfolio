"use client"

import AvatarFrame from './AvatarFrame'
import resumeData from '../data/resume'
import Reveal from './Reveal'

export default function ResumeProfile(){
  const personal = resumeData.personal
  const experiences = resumeData.experience || []
  const roles = Array.from(new Set(experiences.map(e => e.role).filter(Boolean)))

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-md shadow flex flex-col md:flex-row items-start gap-6 split-revealed">
      <Reveal animation="split" className="flex-shrink-0 mt-1">
        <div className="split-revealed">
          <AvatarFrame src="/images/avatar.jpg" alt={personal.fullName} size={160} gradientClass="from-teal-400 via-sky-500 to-indigo-600" spinDuration={8} shadowClass="shadow-xl" />
        </div>
      </Reveal>

      <div className="min-w-0 w-full">
        <Reveal animation="fade-up" delay={80}><h2 className="text-2xl font-extrabold leading-tight text-slate-900 dark:text-white">{personal.fullName}</h2></Reveal>
        {personal.address && <Reveal animation="fade-up" delay={120}><div className="mt-1 text-sm text-slate-600 dark:text-slate-400">{personal.address}</div></Reveal>}

        <div className="mt-3 flex flex-wrap gap-2 items-center">
          {roles.map((r, i) => (
            <Reveal key={i} animation="fade-up" delay={160 + i*40}><span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm md:text-base font-semibold text-white bg-gradient-to-r from-teal-400 to-sky-600 shadow-sm">{r}</span></Reveal>
          ))}
        </div>

        <div className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-1">
          {personal.email && <Reveal animation="fade-up" delay={260}><div><strong className="font-medium">Email:</strong> <a className="text-sky-600 dark:text-sky-400" href={`mailto:${personal.email}`}>{personal.email}</a></div></Reveal>}
          {personal.phone && <Reveal animation="fade-up" delay={320}><div><strong className="font-medium">Phone:</strong> <a className="text-sky-600 dark:text-sky-400" href={`tel:${personal.phone}`}>{personal.phone}</a></div></Reveal>}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <Reveal animation="fade-up" delay={380}><a href="/resume/Nguyen-Thoai-TopCV.vn-170326.191238.pdf" download className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-teal-400 to-sky-600 text-white text-sm font-medium shadow hover:scale-105 transition">Tải CV</a></Reveal>
          <Reveal animation="fade-up" delay={440}><a href="/contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/3 transition">Liên hệ</a></Reveal>
        </div>

        {resumeData.objective && (
          <Reveal animation="fade-up" delay={520}><div className="mt-4 text-sm text-slate-700 dark:text-slate-300">{resumeData.objective}</div></Reveal>
        )}
      </div>
    </div>
  )
}
