// ================================================
// DEVOLUTION LLC - Root Application Component
// ================================================

import NavBar from "./components/NavBar.js"
import HeroSection from "./components/HeroSection.js"
import ServicesSection from "./components/ServicesSection.js"
import ProcessSection from "./components/ProcessSection.js"
import CaseStudySection from "./components/CaseStudySection.js"
import AboutSection from "./components/AboutSection.js"
import ClientsSection from "./components/ClientsSection.js"
import CtaSection from "./components/CtaSection.js"
import FooterSection from "./components/FooterSection.js"

export default {
  name: "App",
  components: {
    NavBar,
    HeroSection,
    ServicesSection,
    ProcessSection,
    CaseStudySection,
    AboutSection,
    ClientsSection,
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
        <CaseStudySection />
        <AboutSection />
        <ClientsSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  `,
}
