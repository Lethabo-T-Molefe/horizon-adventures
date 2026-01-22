/**
 * Progressive Enhancement Utilities
 * Ensures the website works without JavaScript
 */

// Check if JavaScript is enabled
export function isJavaScriptEnabled(): boolean {
  return typeof window !== 'undefined'
}

// No-JS fallback class for hiding elements that require JS
export const NO_JS_HIDDEN = 'no-js:hidden'

// Add no-js class to html element for CSS targeting
export function initializeProgressiveEnhancement() {
  if (typeof document !== 'undefined') {
    // Remove no-js class if JavaScript is enabled
    document.documentElement.classList.remove('no-js')
    document.documentElement.classList.add('js')
  }
}

// Form submission without JavaScript (native HTML form)
export function createProgressiveForm(
  action: string,
  method: 'GET' | 'POST' = 'POST'
) {
  return {
    action,
    method,
    encType: 'application/x-www-form-urlencoded',
  }
}

// Image lazy loading with fallback
export function getImageProps(
  src: string,
  alt: string,
  width?: number,
  height?: number
) {
  return {
    src,
    alt,
    width,
    height,
    loading: 'lazy' as const,
    decoding: 'async' as const,
  }
}

// Link prefetching for better performance
export function prefetchRoute(href: string) {
  if (typeof document !== 'undefined' && 'requestIdleCallback' in window) {
    requestIdleCallback(() => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = href
      document.head.appendChild(link)
    })
  }
}
