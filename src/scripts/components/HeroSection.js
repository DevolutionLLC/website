// Hero Section Component
export default {
  name: "HeroSection",
  data() {
    return {
      currentIndex: 0,
      phrases: [
        "Automated Growth",
        "Scalable Systems",
        "Effortless Workflows",
        "Reliable Operations",
        "Smarter Processes",
      ],
      isAnimating: false,
    }
  },
  computed: {
    currentPhrase() {
      return this.phrases[this.currentIndex]
    },
  },
  mounted() {
    this.startRotation()
  },
  methods: {
    startRotation() {
      setInterval(() => {
        this.isAnimating = true
        setTimeout(() => {
          this.currentIndex = (this.currentIndex + 1) % this.phrases.length
          this.isAnimating = false
        }, 400)
      }, 3000)
    },
  },
  template: `
    <section class="hero">
      <!-- Animated Background -->
      <div class="hero-bg">
        <div class="hero-orb hero-orb-1"></div>
        <div class="hero-orb hero-orb-2"></div>
        <div class="hero-orb hero-orb-3"></div>
        <div class="hero-grid"></div>
        <div class="hero-gradient"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            Enterprise Automation Partners
          </div>
          <h1 class="hero-title">
            We Turn Manual Chaos Into 
            <span class="hero-title-accent rotating-text" :class="{ 'fade-out': isAnimating }">
              {{ currentPhrase }}
            </span>
          </h1>
          <p class="hero-description">
            Your team shouldn't waste time on repetitive tasks. We design and implement 
            end-to-end automation systems that let you focus on what actually moves 
            the needle—closing deals, serving clients, and scaling your business.
          </p>
          <a href="#contact" class="hero-cta">
            Schedule a Discovery Call
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  `,
}
