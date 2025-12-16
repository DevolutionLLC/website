// Services Section Component
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          icon: "fa-solid fa-gears",
          title: "Workflow Automation",
          description:
            "We map your entire operation and eliminate the bottlenecks. From lead capture to client onboarding—every step runs without you lifting a finger.",
        },
        {
          icon: "fa-solid fa-robot",
          title: "AI Integration",
          description:
            "Smart assistants that handle emails, qualify leads, and generate reports. We implement AI tools that actually make sense for your business—not just buzzwords.",
        },
        {
          icon: "fa-solid fa-cloud",
          title: "Infrastructure & Scale",
          description:
            "Cloud systems that grow with you. We build the technical foundation so your tools talk to each other and nothing breaks when business takes off.",
        },
      ],
    }
  },
  template: `
    <section id="services" class="section services">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What We Do</span>
          <h2 class="section-title">Automation That Actually Works</h2>
          <p class="section-description">
            We've seen too many businesses drown in tools that don't talk to each other. 
            Our job is to connect everything and make it run like clockwork.
          </p>
        </div>
        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
}
