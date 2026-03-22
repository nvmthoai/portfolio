"use client";

import { useState, useRef, useEffect } from "react";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "idle" | "success" | "error">("idle");
  const [modalOpen, setModalOpen] = useState(false)

  const validateEmail = (v: string) => /\S+@\S+\.\S+/.test(v);

  function validateAll(): Errors {
    const e: Errors = {};
    if (!name.trim()) e.name = "Tên bắt buộc.";
    if (!email.trim()) e.email = "Email bắt buộc.";
    else if (!validateEmail(email)) e.email = "Email không hợp lệ.";
    if (!subject.trim()) e.subject = "Chủ đề bắt buộc.";
    if (!message.trim()) e.message = "Nội dung bắt buộc.";
    else if (message.trim().length < 20) e.message = "Nội dung phải có ít nhất 20 ký tự.";
    return e;
  }

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setStatus("idle");

    const e = validateAll();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    // Mock submit — simulate network latency
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      // open success modal
      setModalOpen(true)
      // clear form to indicate success
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
      // auto-hide success after a while
      setTimeout(() => setStatus("idle"), 2500);
    }, 1200);
  };

  return (
    <>
    <form onSubmit={onSubmit} className="w-full max-w-3xl mx-auto" noValidate>
      <div className="relative p-1 rounded-2xl shadow-2xl bg-gradient-to-b from-white/40 to-gray-100/40 dark:from-slate-800/60 dark:to-slate-900/60">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Gửi tin nhắn</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-lg">Bạn có thể hỏi về hợp tác, công việc hoặc đặt câu hỏi — mình sẽ trả lời sớm.</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-xl">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M2 21l20-9L2 3v7l15 2-15 2v7z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-700 dark:text-slate-300">Tên</span>
              <div className={`mt-1 relative rounded-md ${errors.name ? "ring-2 ring-rose-500" : ""}`}>
                <input
                  className="w-full bg-white dark:bg-slate-800 border border-transparent rounded-md px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-0"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tên của bạn"
                  aria-label="Tên"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  required
                />
                <div className="absolute right-2 top-2 text-slate-400 dark:text-slate-400">
                  {/* little icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4z" fill="currentColor" className="text-slate-400" />
                  </svg>
                </div>
              </div>
              {errors.name && <div id="error-name" className="mt-1 text-sm text-rose-500">{errors.name}</div>}
            </label>

            {/* Email */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-700 dark:text-slate-300">Email *</span>
              <div className={`mt-1 relative rounded-md ${errors.email ? "ring-2 ring-rose-500" : ""}`}>
                <input
                  className="w-full bg-white dark:bg-slate-800 border border-transparent rounded-md px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  required
                />
                <div className="absolute right-2 top-2 text-slate-400 dark:text-slate-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              {errors.email && <div id="error-email" className="mt-1 text-sm text-rose-500">{errors.email}</div>}
            </label>

            {/* Subject full width on small, half on md */}
            <label className="flex flex-col md:col-span-2">
              <span className="text-sm text-slate-700 dark:text-slate-300">Chủ đề *</span>
              <div className={`mt-1 relative rounded-md ${errors.subject ? "ring-2 ring-rose-500" : ""}`}>
                <input
                  className="w-full bg-white dark:bg-slate-800 border border-transparent rounded-md px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-0"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Chủ đề"
                  aria-label="Chủ đề"
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "error-subject" : undefined}
                  required
                />
              </div>
              {errors.subject && <div id="error-subject" className="mt-1 text-sm text-rose-500">{errors.subject}</div>}
            </label>

            {/* Message full width */}
            <label className="flex flex-col md:col-span-2">
              <span className="text-sm text-slate-700 dark:text-slate-300">Nội dung *</span>
              <div className={`mt-1 relative rounded-md ${errors.message ? "ring-2 ring-rose-500" : ""}`}>
                <textarea
                  className="w-full bg-white dark:bg-slate-800 border border-transparent rounded-md px-3 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 min-h-[160px] focus:outline-none focus:ring-0 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Viết tin nhắn của bạn..."
                  aria-label="Nội dung"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  required
                />
                <div className="absolute right-3 bottom-3 text-xs text-slate-500 dark:text-slate-400">{message.length}/500</div>
              </div>
              {errors.message && <div id="error-message" className="mt-1 text-sm text-rose-500">{errors.message}</div>}
            </label>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-400 to-indigo-600 text-white font-semibold px-5 py-3 rounded-lg shadow-2xl hover:scale-105 transform transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-sky-400/30"
              disabled={loading}
              aria-disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 00-12 12h4z"></path>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 16v-8m0 8l-3.5-3.5M12 16l3.5-3.5M5 20h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}

              <span>{loading ? "Đang gửi..." : "Gửi tin nhắn"}</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/3 transition"
              onClick={() => {
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                setErrors({});
                setStatus("idle");
              }}
              disabled={loading}
            >
              Reset
            </button>

            <div className="ml-auto">
              {status === "success" && (
                <div role="status" className="flex items-center gap-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-md shadow-inner">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm">Gửi thành công — mình sẽ phản hồi sớm.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
    {/* success modal */}
    <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// Modal markup inserted at the end of the file via component state
// useEffect for modal focus management
export function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }){
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    // focus the modal close button
    const btn = ref.current?.querySelector<HTMLButtonElement>('button[data-close]')
    setTimeout(() => btn?.focus(), 0)

    function onKey(e: KeyboardEvent){ if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); prev?.focus() }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div ref={ref} role="dialog" aria-modal="true" className="relative bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-lg w-full mx-4 p-6">
        <h3 className="text-lg font-semibold">Gửi thành công</h3>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Cảm ơn bạn — tin nhắn đã được gửi. Tôi sẽ phản hồi sớm.</p>
        <div className="mt-4 flex justify-end">
          <button data-close onClick={onClose} className="px-4 py-2 bg-sky-600 text-white rounded-md">Đóng</button>
        </div>
      </div>
    </div>
  )
}
