// ================================================
// DEVOLUTION LLC - Main Application Entry
// ================================================

// Declare the Vue variable
const Vue = window.Vue

import App from "./App.js"

// Create and mount Vue application
const { createApp } = Vue
const app = createApp(App)
app.mount("#app")
