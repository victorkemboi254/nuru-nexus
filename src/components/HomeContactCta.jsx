function HomeContactCta({ onNavigate }) {
  return (
    <section className="home-contact-cta" id="contact-cta">
      <div className="home-contact-cta__overlay" aria-hidden="true" />
      <div className="home-contact-cta__inner">
        <span className="home-contact-cta__eyebrow">Connect With Excellence</span>
        <h2 className="home-contact-cta__title">
          We are ready to respond with excellence.
        </h2>
        <p className="home-contact-cta__sub">
          Reach out today to discuss strategic partnerships, investment opportunities,
          or inquiries across our portfolio companies.
        </p>
        <div className="home-contact-cta__action">
          <button
            type="button"
            className="home-contact-cta__btn"
            onClick={() => onNavigate('contact')}
          >
            <span>Contact Us</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeContactCta
