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
              building systems for businesses that need things to actually work—not just look 
              good on a slide deck.
            </p>
            <p>
              Our background in end-to-end automation means we think about the whole picture: 
              how your tools connect, how they scale, and how they keep running when you're not 
              watching. That's the difference between automation that saves you time and automation 
              that creates new headaches.
            </p>
            <p>
              We work with ambitious teams who are ready to stop doing things the hard way. 
              If that sounds like you, we should talk.
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
      </div>
    </section>
  `,
}
