export default {
  name: "TrustedBySection",
  data() {
    return {
      companies: [
        {
          name: "Investeks",
          industry: "Real Estate",
          url: "https://investeks.com/",
          icon: "fas fa-building",
        },
        {
          name: "ViaBusiness",
          industry: "Finance",
          url: "https://viabusiness.org/",
          icon: "fas fa-chart-line",
        },
        {
          name: "Vali Group",
          industry: "Manufacturing",
          url: "https://valifix.com/",
          icon: "fas fa-industry",
        },
        {
          name: "Master Projekt",
          industry: "Construction",
          url: "https://masterprojekt.eu/",
          icon: "fas fa-hard-hat",
        },
        {
          name: "DappRadar",
          industry: "Data & Analytics",
          url: "https://dappradar.com/",
          icon: "fas fa-chart-pie",
        },
        {
          name: "Elba Technologies",
          industry: "Technology",
          url: "https://www.elba-tech.com/",
          icon: "fas fa-code",
        },
      ],
    }
  },
  template: `
    <section id="clients" class="section trusted-by">
      <div class="container">
        <div class="section-header">
          <div class="section-label">Selected Clients</div>
          <h2 class="section-title">Teams we've worked with</h2>
          <p class="section-description">
            Work across real estate, finance, construction, technology, and other operationally heavy environments
          </p>
        </div>

        <div class="companies-grid">
          <a
            v-for="company in companies"
            :key="company.name"
            :href="company.url"
            target="_blank"
            rel="noopener noreferrer"
            class="company-card"
          >
            <div class="company-icon">
              <i :class="company.icon"></i>
            </div>
            <div class="company-info">
              <div class="company-name">{{ company.name }}</div>
              <div class="company-industry">{{ company.industry }}</div>
            </div>
            <div class="company-arrow">
              <i class="fas fa-arrow-up-right-from-square"></i>
            </div>
          </a>
        </div>

        <div class="clients-footer section-header">
          <p>
            Some projects focus on operational automation. Others lean more into integrations,
            cloud infrastructure, or platform work. Most sit somewhere in between.
          </p>
        </div>
      </div>
    </section>
  `,
}
