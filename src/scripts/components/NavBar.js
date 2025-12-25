// Navigation Component with Mobile Menu
export default {
  name: "NavBar",
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMenu() {
      this.mobileMenuOpen = false
    },
  },
  template: `
    <nav class="nav">
      <div class="container nav-inner">
        <!-- Replaced text logo with SVG image -->
        <a href="/" class="nav-logo" aria-label="Devolution home">
          <img
            src="public/devolution-logo-logo-full-dark-bg.svg"
            alt="Devolution"
            class="nav-logo-img"
            style="height:36px; width:auto; display:block;"
            loading="eager"
            decoding="async"
          />
        </a>
        
        <div class="nav-links nav-desktop">
          <a href="#services" class="nav-link">Services</a>
          <a href="#process" class="nav-link">Process</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#contact" class="nav-cta">Let's Talk</a>
        </div>
        
        <button class="nav-mobile-toggle" @click="toggleMenu" :aria-expanded="mobileMenuOpen" aria-label="Toggle menu">
          <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
      
      <div class="nav-mobile" :class="{ 'nav-mobile-open': mobileMenuOpen }">
        <a href="#services" class="nav-mobile-link" @click="closeMenu">Services</a>
        <a href="#process" class="nav-mobile-link" @click="closeMenu">Process</a>
        <a href="#about" class="nav-mobile-link" @click="closeMenu">About</a>
        <a href="#contact" class="nav-mobile-cta" @click="closeMenu">Let's Talk</a>
      </div>
    </nav>
  `,
}
