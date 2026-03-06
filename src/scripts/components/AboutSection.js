// About Section Component
export default {
  name: "AboutSection",
  data() {
    return {
      values: [
        {
          icon: "fas fa-shield-alt",
          title: "Battle-Tested",
          desc: "A decade of production systems",
        },
        {
          icon: "fas fa-link",
          title: "End-to-End",
          desc: "From strategy to maintenance",
        },
        {
          icon: "fas fa-handshake",
          title: "Partnership First",
          desc: "We grow with your business",
        },
        {
          icon: "fas fa-clock",
          title: "Always On",
          desc: "Systems that run while you sleep",
        },
      ],
      team: [
        {
          name: "Alis Adrović",
          title: "Founder & Platform Engineer",
          bio: "A little bit of everything. Loves building tools that just work.",
          email: "alis@devolution.llc",
          linkedin: "https://linkedin.com",
          icon: "fas fa-user",
        },
        {
          name: "Senad Mustafi",
          title: "Senior Automation Specialist",
          bio: "Expert in building scalable, reliable systems.",
          email: "senad@devolution.llc",
          linkedin: "https://linkedin.com",
          icon: "fas fa-user",
        },
        {
          name: "Waez Hadji",
          title: "Operations & Client Success",
          bio: "Ensures projects run on time and solve real problems.",
          email: "waez@devolution.llc",
          linkedin: "https://linkedin.com",
          icon: "fas fa-user",
        },
      ],
    }
  },
  template: `
    <section id="about" class="section about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Built by Engineers Who Understand Business</h2>
            <p>
              We're not just tech people who speak in acronyms. We've spent years in the trenches 
              building systems for businesses that need things to actually work.
            </p>
            <p>
              We think about the whole picture: how your tools connect, how they scale, and how 
              they keep running when you're not watching. That's the difference between automation 
              that saves you time and automation that creates headaches.
            </p>
          </div>
          <div class="about-values">
            <div v-for="value in values" :key="value.title" class="value-card">
              <div class="value-icon">
                <i :class="value.icon"></i>
              </div>
              <div class="value-content">
                <div class="value-title">{{ value.title }}</div>
                <div class="value-desc">{{ value.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Section Integrated -->
        <div class="about-team-section">
          <div class="about-team-header">
            <h3>The People Behind It</h3>
            <p>Small, focused team of engineers and strategists. No junior developers—just deep expertise.</p>
          </div>
          <div class="team-grid-compact">
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
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
}
