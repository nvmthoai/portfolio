export default function Footer(){
  return (
    <footer className="w-full border-t mt-12 py-6">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} My Portfolio. Built with Next.js + Tailwind.
      </div>
    </footer>
  )
}
