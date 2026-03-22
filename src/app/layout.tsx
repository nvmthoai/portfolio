import './globals.css'
import '../style/darkmode.css'
import Header from '../components/Header'
import PageTransition from '../components/PageTransition'
import ScrollToTop from '../components/ScrollToTop'
import LoadingOverlay from '../components/LoadingOverlay'

import ThemeInitializer from '../components/ThemeInitializer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeInitializer />
        <LoadingOverlay />
        <Header />
        <main className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <ScrollToTop />
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  )
}