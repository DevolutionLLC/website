// Hero Section Component
export default {
  name: "HeroSection",
  data() {
    return {
      currentIndex: 0,
      phrases: ["Automated Growth", "Scalable Systems", "Smarter Processes"],
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
      <div class="hero-bg">
        <div class="hero-grid"></div>
      </div>
      
      <div class="container">
        <div class="hero-split">
          <!-- Left: Content -->
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="hero-title-static">We Turn Manual Chaos Into</span>
              <span class="hero-rotating-wrapper">
                <span class="hero-title-accent rotating-text" :class="{ 'fade-out': isAnimating }">{{ currentPhrase }}</span>
              </span>
            </h1>
            
            <p class="hero-description">
              Stop losing hours to repetitive tasks. We build the systems 
              that let you focus on what actually grows your business.
            </p>
            
            <div class="hero-actions">
              <a href="#contact" class="hero-cta hero-btn-equal">
                Start a Conversation
                <i class="fas fa-arrow-right"></i>
              </a>
              <a href="#services" class="hero-cta-secondary hero-btn-equal">
                See What We Do
              </a>
            </div>
          </div>
          
          <!-- Right: Animated Network Visual - hidden on mobile -->
          <div class="hero-visual">
            <div class="network-container">
              <div class="network-hub">
                <i class="fas fa-cogs"></i>
              </div>
              
              <div class="network-orbit orbit-1">
                <div class="network-node node-1">
                  <i class="fas fa-database"></i>
                </div>
                <div class="network-node node-2">
                  <i class="fas fa-cloud"></i>
                </div>
                <div class="network-node node-3">
                  <i class="fas fa-server"></i>
                </div>
              </div>
              
              <div class="network-orbit orbit-2">
                <div class="network-node node-4">
                  <i class="fas fa-code-branch"></i>
                </div>
                <div class="network-node node-5">
                  <i class="fas fa-robot"></i>
                </div>
                <div class="network-node node-6">
                  <i class="fas fa-chart-line"></i>
                </div>
              </div>
              
              <svg class="network-lines" viewBox="0 0 400 400" width="400" height="400" aria-hidden="true">
                <line class="connection-line line-1" x1="200" y1="200" x2="200" y2="60" />
                <line class="connection-line line-2" x1="200" y1="200" x2="320" y2="130" />
                <line class="connection-line line-3" x1="200" y1="200" x2="320" y2="270" />
                <line class="connection-line line-4" x1="200" y1="200" x2="200" y2="340" />
                <line class="connection-line line-5" x1="200" y1="200" x2="80" y2="270" />
                <line class="connection-line line-6" x1="200" y1="200" x2="80" y2="130" />
              </svg>
              
              <div class="pulse-ring ring-1"></div>
              <div class="pulse-ring ring-2"></div>
              <div class="pulse-ring ring-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
}
