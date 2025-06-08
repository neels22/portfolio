// Polyfill for URL.canParse for older environments
if (typeof URL !== 'undefined' && typeof URL.canParse === 'undefined') {
  URL.canParse = function(url: string, base?: string): boolean {
    try {
      new URL(url, base)
      return true
    } catch {
      return false
    }
  }
}

export {}; 