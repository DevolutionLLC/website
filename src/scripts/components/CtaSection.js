export default {
  name: "CtaSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      submitted: false,
      submitting: false,
      error: null,
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      this.submitting = true
      this.error = null

      try {
        const response = await fetch("https://o8g09g2h69.execute-api.eu-central-1.amazonaws.com/hello", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            message: this.form.message || "",
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to send message")
        }

        this.submitted = true
        this.form = { name: "", email: "", message: "" }
      } catch (err) {
        this.error = "Something went wrong. Please try again or email us directly."
      } finally {
        this.submitting = false
      }
    },
    resetForm() {
      this.submitted = false
      this.error = null
    },
  },
  template: `
    <section id="contact" class="section cta">
      <div class="container">
        <div class="cta-content">
          <div class="cta-header section-header">
            <span class="section-label">Contact</span>
            <h2 class="cta-title">Start with a practical conversation</h2>
            <p class="cta-description">
              Tell us where things feel messy.
              That can be automation, integrations, cloud work, or a mix of all three.
            </p>
          </div>

          <div v-if="submitted" class="form-success">
            <div class="form-success-icon">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <h3 class="form-success-title">Message received</h3>
            <p class="form-success-text">
              Thanks for reaching out. We'll get back to you shortly.
            </p>
            <button @click="resetForm" class="form-success-btn">
              Send Another Message
            </button>
          </div>

          <form v-else class="contact-form" @submit="handleSubmit">
            <div v-if="error" class="form-error">
              <i class="fa-solid fa-circle-exclamation"></i>
              {{ error }}
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  class="form-input"
                  placeholder="John Smith"
                  v-model="form.name"
                  required
                >
              </div>
              <div class="form-group">
                <label class="form-label" for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  class="form-input"
                  placeholder="john@company.com"
                  v-model="form.email"
                  required
                >
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="message">
                Message <span class="optional">(optional)</span>
              </label>
              <textarea
                id="message"
                class="form-textarea"
                placeholder="What are you trying to improve? A messy workflow, tools that don't connect properly, cloud/platform work, or something else."
                v-model="form.message"
              ></textarea>
            </div>

            <button type="submit" class="form-submit" :disabled="submitting">
              <span v-if="submitting">Sending...</span>
              <span v-else>Start the Conversation</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
}
