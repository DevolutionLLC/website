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
        <a href="#" class="nav-logo">Devolution<span>.</span></a>
        
        <!-- Desktop Navigation -->
        <div class="nav-links nav-desktop">
          <a href="#services" class="nav-link">Services</a>
          <a href="#process" class="nav-link">Process</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#contact" class="nav-cta">Let's Talk</a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="nav-mobile-toggle" @click="toggleMenu" :aria-expanded="mobileMenuOpen" aria-label="Toggle menu">
          <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
      
      <!-- Mobile Navigation Dropdown -->
      <div class="nav-mobile" :class="{ 'nav-mobile-open': mobileMenuOpen }">
        <a href="#services" class="nav-mobile-link" @click="closeMenu">Services</a>
        <a href="#process" class="nav-mobile-link" @click="closeMenu">Process</a>
        <a href="#about" class="nav-mobile-link" @click="closeMenu">About</a>
        <a href="#contact" class="nav-mobile-cta" @click="closeMenu">Let's Talk</a>
      </div>
    </nav>
  `,
}
