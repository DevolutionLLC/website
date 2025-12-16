// ================================================
// DEVOLUTION LLC - Root Application Component
// ================================================

import NavBar from "./components/NavBar.js"
import HeroSection from "./components/HeroSection.js"
import ServicesSection from "./components/ServicesSection.js"
import ProcessSection from "./components/ProcessSection.js"
import AboutSection from "./components/AboutSection.js"
import CtaSection from "./components/CtaSection.js"
import FooterSection from "./components/FooterSection.js"

export default {
  name: "App",
  components: {
    NavBar,
    HeroSection,
    ServicesSection,
    ProcessSection,
    AboutSection,
    CtaSection,
    FooterSection,
  },
  template: `
    <div class="app">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  `,
}
