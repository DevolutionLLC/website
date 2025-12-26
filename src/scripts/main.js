// ================================================
// DEVOLUTION LLC - Main Application Entry
// ================================================

import App from "./App.js"

// Defer Vue initialization until browser is truly idle
// This prevents blocking the main thread during page load
function initializeApp() {
  const Vue = window.Vue
  if (!Vue) {
    // Vue not loaded yet, retry after short delay
    requestIdleCallback(() => initializeApp(), { timeout: 50 })
    return
  }

  const { createApp } = Vue
  const app = createApp(App)
  app.mount("#app")
}

// Delay app initialization to let browser handle critical rendering first
// This significantly improves FCP and LCP metrics
if ('requestIdleCallback' in window) {
  // Modern browsers: wait for idle time (typically 2-5 seconds)
  requestIdleCallback(initializeApp, { timeout: 2000 })
} else {
  // Fallback: wait 2 seconds for old browsers
  setTimeout(initializeApp, 2000)
}

// Use requestIdleCallback if available, otherwise use setTimeout
if ('requestIdleCallback' in window) {
  requestIdleCallback(initializeApp)
} else {
  setTimeout(initializeApp, 0)
}
