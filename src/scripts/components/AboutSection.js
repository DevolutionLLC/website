export default {
  name: "AboutSection",
  data() {
    return {
      fallbackPhoto: "public/team/avatar-fallback.svg",
      team: [
        {
          name: "Alis Adrović",
          title: "Founder & Platform Engineer",
          bio: "Works across automation, cloud systems, and delivery.",
          email: "alis@devolution.llc",
          linkedin: "https://linkedin.com",
          photo: "public/team/alis.jpg",
        },
        {
          name: "Senad Mustafi",
          title: "Senior Automation Specialist",
          bio: "Builds practical automation and cleaner internal workflows.",
          email: "senad@devolution.llc",
          linkedin: "https://linkedin.com",
          photo: "public/team/senad.jpg",
        },
        {
          name: "Waez Denyel Hadji",
          title: "Operations & Client Success",
          bio: "Keeps outreach, communication, and client follow-through moving.",
          email: "waez@devolution.llc",
          linkedin: "https://linkedin.com",
          photo: "public/team/waez.jpg",
        },
      ],
    }
  },
  methods: {
    handleImageError(event) {
      if (event?.target && !event.target.dataset.fallbackApplied) {
        event.target.dataset.fallbackApplied = "true"
        event.target.src = this.fallbackPhoto
      }
    },
  },
  template: `
    <section id="about" class="section about">
      <div class="container about-simple">
        <div class="section-header about-simple-header">
          <span class="section-label">About</span>
          <h2 class="section-title">Why we built Devolution</h2>
          <p class="section-description about-intro-copy">
            We built Devolution for teams that need real technical help when systems get messy,
            work stays too manual, or cloud delivery starts needing experienced hands.
          </p>
          <div class="about-manifesto" aria-label="How we work">
            <span>Small team</span>
            <span>Direct communication</span>
            <span>Practical work that helps things run better</span>
          </div>
        </div>

        <div class="about-team-section about-team-section-simple">
          <div class="team-grid-compact team-grid-compact-simple">
            <div v-for="member in team" :key="member.name" class="team-card-compact">
              <div class="team-photo-wrap">
                <img
                  :src="member.photo"
                  :alt="member.name"
                  class="team-photo"
                  loading="lazy"
                  @error="handleImageError"
                />
              </div>
              <div class="team-content-compact">
                <div class="team-name-compact">{{ member.name }}</div>
                <div class="team-title-compact">{{ member.title }}</div>
                <div class="team-bio-compact">{{ member.bio }}</div>
              </div>
              <div class="team-contact-compact">
                <a :href="'mailto:' + member.email" class="team-link-compact" title="Email">
                  <i class="fas fa-envelope"></i>
                </a>
                <a :href="member.linkedin" target="_blank" rel="noopener" class="team-link-compact" title="LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
}
