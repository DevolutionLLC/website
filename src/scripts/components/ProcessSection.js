// Process Section Component
export default {
  name: "ProcessSection",
  data() {
    return {
      steps: [
        {
          icon: "fa-solid fa-magnifying-glass",
          number: 1,
          title: "Discovery",
          description: "We dig into how your business actually runs—not how you think it should.",
        },
        {
          icon: "fa-solid fa-compass",
          number: 2,
          title: "Strategy",
          description: "A clear roadmap of what to automate first and why it matters for your bottom line.",
        },
        {
          icon: "fa-solid fa-hammer",
          number: 3,
          title: "Build",
          description: "We implement, test, and refine until everything works seamlessly together.",
        },
        {
          icon: "fa-solid fa-headset",
          number: 4,
          title: "Support",
          description: "Ongoing partnership to optimize, expand, and keep your systems running smooth.",
        },
      ],
    }
  },
  template: `
    <section id="process" class="section process">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Approach</span>
          <h2 class="section-title">Simple Process, Real Results</h2>
          <p class="section-description">
            No endless meetings or confusing jargon. We get in, understand your world, and build what you need.
          </p>
        </div>
        <div class="process-grid">
          <div v-for="step in steps" :key="step.number" class="process-step">
            <div class="process-icon">
              <i :class="step.icon"></i>
            </div>
            <span class="process-number">{{ step.number }}. {{ step.title }}</span>
            <p class="process-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
}
