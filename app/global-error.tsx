"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCw, AlertTriangle } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error:", error)
  }, [error])

  return (
    <html lang="en-ZA">
      <body className="antialiased overflow-x-hidden">
        <main className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8">
              <AlertTriangle className="w-20 h-20 sm:w-24 sm:h-24 mx-auto text-primary mb-6" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
                Something Went Wrong
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                We're experiencing technical difficulties. Please try again in a few moments or return to the homepage.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-sm tracking-wide uppercase hover:bg-primary/90 transition-all hover:scale-105 shadow-lg rounded-md w-full sm:w-auto"
              >
                <RefreshCw size={20} />
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold text-sm tracking-wide uppercase hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg rounded-md w-full sm:w-auto block sm:inline-block"
              >
                <Home size={20} />
                Return Home
              </Link>
            </div>

            {process.env.NODE_ENV === "development" && error.message && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-xs tracking-widest uppercase text-accent font-bold mb-4">
                  Technical Details (Development Mode)
                </p>
                <div className="bg-muted p-6 rounded-lg text-left">
                  <p className="text-sm text-muted-foreground font-mono break-all">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs text-muted-foreground/70 mt-2 font-mono">
                      Reference: {error.digest}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </body>
    </html>
  )
}
