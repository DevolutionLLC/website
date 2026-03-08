export default {
  name: "AboutSection",
  data() {
    return {
      team: [
        {
          name: "Alis Adrović",
          title: "Founder & Platform Engineer",
          bio: "Works across automation, cloud systems, and delivery.",
          email: "alis@devolution.llc",
          linkedin: "https://linkedin.com",
          icon: "fas fa-user",
        },
        {
          name: "Senad Mustafi",
          title: "Senior Automation Specialist",
          bio: "Builds practical automation and cleaner internal workflows.",
          email: "senad@devolution.llc",
          linkedin: "https://linkedin.com",
          icon: "fas fa-user",
        },
        {
          name: "Waez Hadji",
          title: "Operations & Client Success",
          bio: "Keeps projects clear, useful, and moving in the right direction.",
          email: "waez@devolution.llc",
          linkedin: "https://linkedin.com",
          icon: "fas fa-user",
        },
      ],
    }
  },
  template: `
    <section id="about" class="section about">
      <div class="container about-simple">
        <div class="section-header about-simple-header">
          <span class="section-label">About</span>
          <h2 class="section-title">Why we built Devolution</h2>
          <p class="section-description about-intro-copy">
            We built Devolution for teams that need real technical help when systems get messy, work
            stays too manual, or cloud delivery starts needing experienced hands.
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
              <div class="team-icon-compact">
                <i :class="member.icon"></i>
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
