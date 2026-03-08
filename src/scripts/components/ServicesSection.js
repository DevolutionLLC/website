export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          icon: "fa-solid fa-gears",
          title: "Automation Systems",
          description:
            "We reduce repetitive work by turning fragile manual processes into systems that run more cleanly in the background.",
          examples: "Internal workflows, reporting, recurring admin tasks, operational handoffs.",
        },
        {
          icon: "fa-solid fa-cloud",
          title: "Cloud & Platform Support",
          description:
            "When the problem is deeper than workflow, we help with the cloud, delivery, and platform side that keeps everything stable.",
          examples: "Cloud systems, CI/CD, DevOps support, architecture guidance, production operations.",
        },
        {
          icon: "fa-solid fa-plug-circle-bolt",
          title: "Integrations",
          description:
            "We connect the tools your business already uses so data moves where it should without constant copying, checking, and chasing.",
          examples: "CRM, finance tools, internal APIs, SaaS platforms, custom glue between systems.",
        },
      ],
    }
  },
  template: `
    <section id="services" class="section services">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Services</span>
          <h2 class="section-title">What we usually help with</h2>
          <p class="section-description">
            Most projects sit somewhere between operations and engineering.
            That's usually where things start getting messy.
          </p>
        </div>
        <div class="services-grid">
          <div v-for="service in services" :key="service.title" class="service-card">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <p class="service-examples">{{ service.examples }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
}
