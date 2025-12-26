// ================================================
// DEVOLUTION LLC - Main Application Entry
// ================================================

import App from "./App.js"

// Defer Vue initialization until after first paint to improve FCP
// This ensures critical render path is not blocked by Vue setup
function initializeApp() {
  const Vue = window.Vue
  if (!Vue) {
    // Vue not loaded yet, retry after short delay
    requestIdleCallback(() => initializeApp(), { timeout: 100 })
    return
  }

  const { createApp } = Vue
  const app = createApp(App)
  app.mount("#app")
}

// Use requestIdleCallback if available, otherwise use setTimeout
if ('requestIdleCallback' in window) {
  requestIdleCallback(initializeApp)
} else {
  setTimeout(initializeApp, 0)
}
