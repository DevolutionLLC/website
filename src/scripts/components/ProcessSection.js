export default {
  name: "ProcessSection",
  data() {
    return {
      situations: [
        {
          icon: "fas fa-link-slash",
          title: "Systems are disconnected",
          description:
            "Your team works across several tools, but the information between them is messy, delayed, or manually copied.",
        },
        {
          icon: "fas fa-gears",
          title: "Too much work is still manual",
          description:
            "People keep doing the same steps by hand because nobody had time to clean up the process properly.",
        },
        {
          icon: "fas fa-server",
          title: "Cloud work needs senior support",
          description:
            "When the problem goes deeper into infrastructure, deployments, or platform work, teams often need experienced hands to step in and move it forward.",
        },
      ],
    }
  },
  template: `
    <section id="process" class="section process">
      <div class="container">
        <div class="section-header">
          <span class="section-label">How We Help</span>
          <h2 class="section-title">When teams usually call us</h2>
          <p class="section-description">
            Usually when work is getting copied around by hand, systems are no longer fitting together properly, or the technical side needs senior support
          </p>
        </div>
        <div class="process-grid process-grid-cards process-grid-cards-3">
          <article v-for="situation in situations" :key="situation.title" class="process-card process-card-compact">
            <div class="process-card-topline">
              <div class="process-card-icon process-card-icon-inline">
                <i :class="situation.icon"></i>
              </div>
              <h3 class="process-card-title process-card-title-inline">{{ situation.title }}</h3>
            </div>
            <p class="process-description">{{ situation.description }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
}
