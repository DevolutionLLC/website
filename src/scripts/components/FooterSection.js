// Footer Section Component
export default {
  name: "FooterSection",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socials: [
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/devolution-llc",
          icon: "fa-brands fa-linkedin-in",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/devolutionllc",
          icon: "fa-brands fa-x-twitter",
        },
        {
          name: "GitHub",
          url: "https://github.com/devolutionllc",
          icon: "fa-brands fa-github",
        },
      ],
    }
  },
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <a href="#" class="footer-logo">Devolution<span>.</span></a>
          
          <p class="footer-copy">&copy; {{ currentYear }} Devolution LLC. All rights reserved.</p>
          
          <div class="footer-social">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.url" 
              :aria-label="social.name"
              class="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
}
