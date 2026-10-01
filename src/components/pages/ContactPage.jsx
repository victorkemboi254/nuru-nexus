import { useState } from 'react'
import './ContactPage.css'

const DIRECT_OPTIONS = [
  { id: 'group', label: 'GROUP ENQUIRY' },
  { id: 'dltoo', label: 'DLTOO ADVOCATES' },
  { id: 'silda', label: 'SILDA EDUTECH' },
  { id: 'jemnet', label: 'JEMNET' },
  { id: 'pentapath', label: 'PENTAPATH GROUP' },
]

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    directTo: 'group',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectDirect = (id) => {
    setFormData((prev) => ({ ...prev, directTo: id }))
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
      directTo: 'group',
      message: '',
    })
  }

  return (
    <div className="contact-page-root">
      <div className="contact-container">
        {/* Eyebrow: — CONTACT */}
        <div className="contact-eyebrow">
          <span className="contact-eyebrow__dash" aria-hidden="true" />
          <span>CONTACT</span>
        </div>

        {/* Main Title */}
        <h1 className="contact-main-title">Open a line to the group.</h1>

        {/* Subtitle / Lead Paragraph */}
        <p className="contact-lead-text">
          Enquiries reach the holding company first and are routed to the right business within one working day.
        </p>

        {/* 2-Column Grid Layout */}
        <div className="contact-layout-grid">
          {/* Left Column: Form */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="contact-success-box" role="alert">
                <div className="contact-success-box__icon" aria-hidden="true">✓</div>
                <h3>Message Dispatched</h3>
                <p>
                  Thank you for reaching out. Your enquiry has been routed to our executive team
                  and the relevant operating business. You will hear back within one working day.
                </p>
                <button
                  type="button"
                  className="contact-reset-btn"
                  onClick={handleReset}
                >
                  <span>SEND ANOTHER MESSAGE</span>
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Row 1: Full Name & Organisation */}
                <div className="contact-form__row">
                  <div className="contact-field-group">
                    <label htmlFor="fullName" className="contact-field-label">
                      FULL NAME
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder=""
                      value={formData.fullName}
                      onChange={handleChange}
                      className="contact-underline-input"
                    />
                  </div>

                  <div className="contact-field-group">
                    <label htmlFor="organisation" className="contact-field-label">
                      ORGANISATION
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      placeholder=""
                      value={formData.organisation}
                      onChange={handleChange}
                      className="contact-underline-input"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="contact-form__row">
                  <div className="contact-field-group">
                    <label htmlFor="email" className="contact-field-label">
                      EMAIL
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder=""
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-underline-input"
                    />
                  </div>

                  <div className="contact-field-group">
                    <label htmlFor="phone" className="contact-field-label">
                      PHONE
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder=""
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-underline-input"
                    />
                  </div>
                </div>

                {/* Row 3: DIRECT TO Pills */}
                <div className="contact-direct-group">
                  <span className="contact-field-label">DIRECT TO</span>
                  <div className="contact-direct-pills" role="radiogroup" aria-label="Direct enquiry to">
                    {DIRECT_OPTIONS.map((opt) => {
                      const isSelected = formData.directTo === opt.id
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`contact-pill-btn ${isSelected ? 'contact-pill-btn--active' : ''}`}
                          onClick={() => handleSelectDirect(opt.id)}
                        >
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Row 4: MESSAGE */}
                <div className="contact-message-group">
                  <label htmlFor="message" className="contact-field-label">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder=""
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-underline-textarea"
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="contact-submit-btn">
                  <span>SEND MESSAGE</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Sidebar Information (Screenshots 1 & 2) */}
          <aside className="contact-info-col" aria-label="Office and contact coordinates">
            {/* Dark Box: REGISTERED OFFICE */}
            <div className="contact-office-card">
              <div className="contact-office-card__label">REGISTERED OFFICE</div>
              <h2 className="contact-office-card__name">NuruNexus Holdings Ltd</h2>
              <p className="contact-office-card__location">Nairobi, Kenya</p>
            </div>

            {/* DIRECT */}
            <div className="contact-direct-card">
              <div className="contact-section-label">DIRECT</div>
              <div className="contact-direct-links">
                <a href="mailto:info@nurunexus.com" className="contact-direct-link">
                  info@nurunexus.com
                </a>
                <a href="tel:+254200000000" className="contact-direct-link">
                  +254 (0) 20 000 0000
                </a>
              </div>
            </div>

            {/* HOURS */}
            <div className="contact-hours-card">
              <div className="contact-section-label">HOURS</div>
              <p className="contact-hours-text">Monday – Friday, 08:30 – 17:30 EAT</p>
            </div>

            {/* Warm Sand Map / Headquarters Anchor Block */}
            <div className="contact-map-block" aria-label="Headquarters map visual">
              <div className="contact-map-content">
                <svg
                  className="contact-map-pin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="contact-map-city">Nairobi Headquarters</div>
                <div className="contact-map-coords">1°17′S 36°49′E · EAT (UTC+3)</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
