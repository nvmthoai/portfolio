type Props = {
  className?: string;
};

export default function SocialButtons({ className = "" }: Props) {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      {/* GitHub */}
      <a
        href="https://github.com/nvmthoai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
        className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-sky-500/30"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 .297a12 12 0 00-3.797 23.392c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.304.76-1.604-2.665-.303-5.466-1.334-5.466-5.93 0-1.309.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.221 0 4.61-2.803 5.624-5.475 5.921.43.372.816 1.102.816 2.222v3.293c0 .32.216.694.825.576A12 12 0 0012 .297" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/thoai-nguyen-73a56435b"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/30"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8h4.53V24H.24zM8.24 8h4.35v2.16h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V24h-4.53v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.76 1.87-2.76 3.8V24H8.24z" />
        </svg>
      </a>

      {/* Gmail (G-mail style circle with white envelope) */}
      <a
        href="mailto:nvmthoai12@gmail.com"
        aria-label="Email"
        title="Email"
        className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-300/30"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          {/* outer envelope border (stroke only) */}
          <rect x="3" y="5" width="18" height="14" rx="3" stroke="white" strokeWidth="1.4" fill="none" />
          {/* envelope flap */}
          <path d="M4 7.5 L12 13 L20 7.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-[-1px] transition-transform duration-300" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/nvmthoai12"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Facebook"
        className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200/30"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.09 5.66 21.2 10.44 22v-7.04H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62.99 0 2.03.18 2.03.18v2.23h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1V22C18.34 21.2 22 17.09 22 12.07z" />
        </svg>
      </a>
    </div>
  );
}
