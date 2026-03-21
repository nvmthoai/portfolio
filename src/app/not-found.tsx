import Link from "next/link"

export default function NotFound(){
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-bold">404 — Page not found</h1>
      <p className="mt-4 text-gray-600">We couldn't find the page you're looking for.</p>
      <div className="mt-6">
        <Link href="/" className="text-sky-600">Go back home</Link>
      </div>
    </div>
  )
}
