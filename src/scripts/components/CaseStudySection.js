export default {
  name: "CaseStudySection",
  template: `
    <section class="section case-study" aria-labelledby="case-study-title">
      <div class="container case-study-layout">
        <div class="case-study-content">
          <span class="section-label">Case study</span>
          <h2 id="case-study-title" class="section-title case-study-title">Robodraft</h2>
          <p class="case-study-subtitle">Automation and workflow hub for accounting teams.</p>

          <p class="case-study-text">
            Robodraft started as an invoice processing automation built for real accounting workflows.
          </p>
          <p class="case-study-text">
            Over time it evolved into a small internal hub that combines document processing,
            task management, and integrations with tools like Albtrix Expert and QuickBooks.
          </p>
          <p class="case-study-text">
            It currently runs in production and supports day-to-day work for accounting teams.
          </p>

          <a
            href="https://robodraft.dev/"
            class="case-study-cta"
            target="_blank"
            rel="noopener"
          >
            See the Robodraft project
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>

        <div class="case-study-visual" aria-label="Robodraft interface preview">
          <img
            src="public/robodraft_ui.png"
            alt="Robodraft invoice processing and workflow interface"
            class="case-study-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  `,
}
