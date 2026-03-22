import ResumeTabs from '../../components/ResumeTabs'
import PrintButton from '../../components/PrintButton'
import ResumeProfile from '../../components/ResumeProfile'

export default function Resume(){
  return (
    <section className="container mx-auto py-12 px-4 sm:px-6 md:px-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Resume</h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Tổng quan, kinh nghiệm, học vấn và đường dẫn tải CV.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="/resume/Nguyen-Thoai-TopCV.vn-170326.191238.pdf" download className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-400 to-indigo-600 text-white px-4 py-2 rounded-md shadow hover:scale-105 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 16v-8m0 8l-3.5-3.5M12 16l3.5-3.5M5 20h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Tải CV
          </a>
          <PrintButton />
        </div>
      </div>

      {/* profile moved to top */}
      <div className="mb-6">
        <div className="overflow-hidden rounded-md">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-md shadow split-enter">
            <ResumeProfile />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-md shadow">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Chi tiết hồ sơ</h2>

            <div className="mt-4">
              <div className="resume-viewport" style={{minHeight: 220}}>
                <ResumeTabs />
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white dark:bg-slate-900 p-4 rounded-md shadow">
            <div className="hidden lg:block">
              <embed src="/resume/Nguyen-Thoai-TopCV.vn-170326.191238.pdf#view=FitH" type="application/pdf" width="100%" height="560px" />
            </div>
            <div className="lg:hidden text-sm text-slate-700 dark:text-slate-300">
              <p>Trình duyệt trên di động có thể không nhúng PDF. Bạn có thể tải CV xuống:</p>
              <a href="/resume/Nguyen-Thoai-TopCV.vn-170326.191238.pdf" download className="mt-2 inline-block text-sky-600 dark:text-sky-400">Tải CV (PDF)</a>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        .resume-viewport { max-height: 520px; overflow: auto; padding: 8px; }
        .resume-viewport .p-4 { transform: translateY(24px); opacity: 0; transition: all 400ms ease; }
        .resume-viewport .p-4.in-view { transform: translateY(0); opacity: 1; }

        /* Reveal component base */
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 520ms cubic-bezier(.2,.9,.3,1) var(--reveal-delay, 0ms), transform 520ms cubic-bezier(.2,.9,.3,1) var(--reveal-delay, 0ms); }
        .reveal.reveal--visible { opacity: 1; transform: translateY(0); }
        .reveal.fade-up { }

        /* Split enter */
        .split-enter { position: relative; overflow: hidden; }
        .split-enter::before, .split-enter::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(14,165,233,0.08), rgba(99,102,241,0.06));
          transform: translateX(-100%);
          z-index: 10;
          transition: transform 700ms cubic-bezier(.2,.9,.3,1);
        }
        .split-enter::after { transform: translateX(100%); }
        .split-enter .split-revealed { position: relative; z-index: 20; }
        .split-enter.reveal--visible::before { transform: translateX(0%); }
        .split-enter.reveal--visible::after { transform: translateX(0%); }

        /* card accent */
        .reveal-card { border-left-width: 4px; border-left-color: transparent; }
        .reveal-card.in-view { border-left-color: #06b6d4; }

        /* cleaned: no 3D tilt active */

      `}</style>
    </section>
  )
}
