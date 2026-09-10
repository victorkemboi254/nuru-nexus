function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__copy">
          <p className="contact__eyebrow">Get in touch</p>
          <h2>Connect with Nuru Nexus</h2>
          <p className="contact__intro">
            Whether you are an investor, journalist, potential partner, or
            prospective employee — our team is available to assist with enquiries
            across all sectors and geographies.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__label">Group Headquarters</span>
              <a href="tel:+254709622000">+254 709 622 000</a>
            </div>

            <div className="contact__detail">
              <span className="contact__label">General Enquiries</span>
              <a href="mailto:hello@nurunexus.co.ke">hello@nurunexus.co.ke</a>
            </div>

            <div className="contact__detail">
              <span className="contact__label">Investor Relations</span>
              <a href="mailto:investors@nurunexus.co.ke">
                investors@nurunexus.co.ke
              </a>
            </div>

            <div className="contact__detail">
              <span className="contact__label">Headquarters</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__field-row">
            <div className="contact__field">
              <label htmlFor="full-name">Full name</label>
              <input id="full-name" type="text" placeholder="Your full name" />
            </div>

            <div className="contact__field">
              <label htmlFor="organisation">Organisation</label>
              <input
                id="organisation"
                type="text"
                placeholder="Company / Institution"
              />
            </div>
          </div>

          <div className="contact__field contact__field--full">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="your@email.com" />
          </div>

          <div className="contact__field contact__field--full">
            <label htmlFor="enquiry">Enquiry type</label>
            <select id="enquiry" defaultValue="">
              <option value="" disabled>
                Select enquiry type
              </option>
              <option>Investor Relations</option>
              <option>Partnership</option>
              <option>General Enquiry</option>
              <option>Media &amp; Press</option>
            </select>
          </div>

          <div className="contact__field contact__field--full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="How can we help?"
            />
          </div>

          <button type="submit" className="contact__submit">
            Send message <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
