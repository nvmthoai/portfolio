import Link from "next/link";

type Props = {
  resumeHref?: string;
  contactHref?: string;
  className?: string;
};

export default function HeroCTAs({
  resumeHref = "/resume/Nguyen-Thoai-TopCV.vn-170326.191238.pdf",
  contactHref = "/contact",
  className = "",
}: Props) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Link
        href={contactHref}
        className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-400 to-indigo-600 text-white font-semibold px-5 py-3 rounded-md shadow-lg hover:scale-105 transform transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400/40"
        aria-label="Liên hệ"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M2 21l20-9L2 3v7l15 2-15 2v7z" fill="currentColor" />
        </svg>
        <span>Liên hệ</span>
      </Link>

      <a
        href={resumeHref}
        download
        aria-label="Download CV"
        className="group inline-flex items-center gap-3 border border-slate-700 text-slate-900 dark:text-white px-5 py-3 rounded-md transition-colors duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500/30 hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-500 hover:text-white"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 16v-8m0 8l-3.5-3.5M12 16l3.5-3.5M5 20h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-white" />
        </svg>
        <span className="transition-colors duration-300 group-hover:text-white">Tải CV</span>
      </a>
    </div>
  );
}
