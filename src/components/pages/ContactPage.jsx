import { useState } from 'react'

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    enquiryType: '',
    subsidiary: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      fullName: '',
      organisation: '',
      email: '',
      phone: '',
      enquiryType: '',
      subsidiary: '',
      message: '',
    })
  }

  return (
    <div className="subpage">
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero__inner">
          <div className="subpage-hero__badge">
            <span className="subpage-hero__badge-dot"></span>
            <span>Get In Touch</span>
            <span className="subpage-hero__divider">/</span>
            <span className="subpage-hero__current">Contact Us</span>
          </div>
          <h1 className="subpage-hero__title">Contact Nuru Nexus</h1>
          <p className="subpage-hero__lead">
            Whether you are an institutional investor, prospective partner, corporate client,
            or exploring opportunities across our subsidiaries, our team is ready to respond with excellence.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-page-body">
        <div className="subpage-container">
          <div className="contact-page__grid">
            {/* Left Column: Coordinates */}
            <div className="contact-page__info">
              <span className="subpage-eyebrow">Direct Channels</span>
              <h2 className="contact-page__heading">Group Headquarters &amp; Executive Offices</h2>
              <p className="contact-page__desc">
                Our headquarters coordinates executive strategy,
                legal governance, and technological investment across all subsidiaries.
              </p>

              <div className="contact-page__cards">

                <div className="contact-info-card">
                  <div className="contact-info-card__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-info-card__text">
                    <span className="contact-info-card__label">Telephone Inquiries</span>
                    <a href="tel:+254709622000" className="contact-info-card__link">
                      +254 709 622 000
                    </a>
                    <a href="tel:+254748381108" className="contact-info-card__link">
                      +254 748 381 108
                    </a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-card__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-info-card__text">
                    <span className="contact-info-card__label">Electronic Mail</span>
                    <a href="mailto:hello@nurunexus.co.ke" className="contact-info-card__link">
                      hello@nurunexus.co.ke (General)
                    </a>
                    <a href="mailto:investors@nurunexus.co.ke" className="contact-info-card__link">
                      investors@nurunexus.co.ke (Investors)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="contact-page__form-wrap">
              {submitted ? (
                <div className="contact-success-box">
                  <div className="contact-success-box__icon" aria-hidden="true">✓</div>
                  <h3>Thank You for Reaching Out</h3>
                  <p>
                    Your enquiry has been received by our executive secretariat.
                    A representative from Nuru Nexus will review your note and respond within one business day.
                  </p>
                  <button type="button" className="btn btn--primary" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-page__form" onSubmit={handleSubmit}>
                  <div className="contact-page__form-header">
                    <h3>Send Us an Enquiry</h3>
                    <p>Complete the form below and specify the appropriate sector or subsidiary.</p>
                  </div>

                  <div className="contact__field-row">
                    <div className="contact__field">
                      <label htmlFor="fullName">Full name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact__field">
                      <label htmlFor="organisation">Organisation / Company</label>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        placeholder="e.g. Acme Corp Ltd"
                        value={formData.organisation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="contact__field-row">
                    <div className="contact__field">
                      <label htmlFor="email">Official Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact__field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="contact__field-row">
                    <div className="contact__field">
                      <label htmlFor="enquiryType">Enquiry Type *</label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        required
                        value={formData.enquiryType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select enquiry category</option>
                        <option value="partnership">Strategic Partnership</option>
                        <option value="investor">Investor Relations</option>
                        <option value="legal">Corporate Legal Advisory (DLTOO)</option>
                        <option value="edutech">EduTech &amp; Library Solutions (SILDA)</option>
                        <option value="fiber">Enterprise Fiber &amp; ICT (JEMNET)</option>
                        <option value="software">Software &amp; RFID Systems (PENTAPATH)</option>
                        <option value="media">Media &amp; Press Relations</option>
                        <option value="general">General Corporate Enquiry</option>
                      </select>
                    </div>

                    <div className="contact__field">
                      <label htmlFor="subsidiary">Relevant Subsidiary</label>
                      <select
                        id="subsidiary"
                        name="subsidiary"
                        value={formData.subsidiary}
                        onChange={handleChange}
                      >
                        <option value="">Group Level (General)</option>
                        <option value="DLTOO">DLTOO &amp; Company Advocates</option>
                        <option value="SILDA">SILDA EduTech</option>
                        <option value="JEMNET">JEMNET ISP</option>
                        <option value="PENTAPATH">PENTAPATH Systems</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact__field contact__field--full">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="Please provide details about your inquiry, project requirements, or strategic interest..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="contact__submit btn--primary-submit">
                    <span>Submit Enquiry</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
