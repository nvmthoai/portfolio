"use client"

import React from 'react'

type State = { hasError: boolean; error?: Error }

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  constructor(props: React.PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // For now just log; in production you may send to monitoring
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-3xl mx-auto p-6 bg-red-50 dark:bg-red-900/20 rounded-md border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200">
          <h3 className="text-lg font-semibold">Something went wrong</h3>
          <p className="mt-2 text-sm">An unexpected error occurred while rendering this section. Try refreshing the page.</p>
          <div className="mt-4 flex gap-2">
            <button onClick={() => window.location.reload()} className="px-3 py-1 rounded bg-red-600 text-white">Reload</button>
            <button onClick={() => this.setState({ hasError: false, error: undefined })} className="px-3 py-1 rounded border">Dismiss</button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
