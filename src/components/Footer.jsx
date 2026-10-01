import './Footer.css'

function Footer({ onNavigate }) {
  const handleNav = (page, anchor) => {
    if (onNavigate) {
      onNavigate(page, anchor)
    }
  }

  return (
    <footer className="site-footer" id="site-footer" aria-label="Site Footer">
      <div className="site-footer__container">
        {/* Main 4-Column Architectural Grid */}
        <div className="site-footer__grid">
          {/* Column 1: Brand, Overview & Speak With Group CTA */}
          <div className="site-footer__col site-footer__col--brand">
            <button
              type="button"
              className="site-footer__brand"
              onClick={() => handleNav('home')}
              aria-label="NuruNexus Holdings Home"
            >
              {/* Red Line-Art Queen/Hourglass Emblem */}
              <svg width="26" height="34" viewBox="0 0 28 36" fill="none" className="site-footer__emblem-svg" aria-hidden="true">
                <circle cx="14" cy="5" r="2.5" stroke="#C8372D" strokeWidth="1.8" />
                <path d="M7 11h14l-7 9-7-9z" stroke="#C8372D" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M7 29h14l-7-8-7 8z" stroke="#C8372D" strokeWidth="1.8" strokeLinejoin="round" />
                <line x1="5" y1="32" x2="23" y2="32" stroke="#C8372D" strokeWidth="1.8" strokeLinecap="round" />
              </svg>

              <div className="site-footer__brand-text">
                <span className="site-footer__brand-name">NuruNexus</span>
                <span className="site-footer__brand-sub">HOLDINGS LTD</span>
              </div>
            </button>

            <p className="site-footer__summary">
              A privately held, Nairobi-headquartered investment holding company operating four businesses in law, education technology, connectivity and software.
            </p>

            <button
              type="button"
              className="site-footer__cta-btn"
              onClick={() => handleNav('contact')}
            >
              SPEAK WITH THE GROUP
            </button>
          </div>

          {/* Column 2: Portfolio Links */}
          <div className="site-footer__col">
            <h3 className="site-footer__col-title">PORTFOLIO</h3>
            <ul className="site-footer__list">
              <li>
                <button type="button" onClick={() => handleNav('portfolio', 'dltoo')}>
                  DLTOO Advocates
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('portfolio', 'silda-edutech')}>
                  SILDA EduTech
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('portfolio', 'jemnet')}>
                  JEMNET
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('portfolio', 'pentapath-group')}>
                  Pentapath Group
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Subpages */}
          <div className="site-footer__col">
            <h3 className="site-footer__col-title">COMPANY</h3>
            <ul className="site-footer__list">
              <li>
                <button type="button" onClick={() => handleNav('about', 'profile')}>
                  Company profile
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('about', 'history')}>
                  Our history
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('about', 'leadership')}>
                  Executive team
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('about', 'governance')}>
                  Board & governance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office */}
          <div className="site-footer__col">
            <h3 className="site-footer__col-title">REGISTERED OFFICE</h3>
            <div className="site-footer__office-info">
              <span className="site-footer__office-name">NuruNexus Holdings Ltd</span>
              <span className="site-footer__office-loc">Nairobi, Kenya</span>
              <a href="mailto:info@nurunexus.com" className="site-footer__office-link">
                info@nurunexus.com
              </a>
              <a href="tel:+254200000000" className="site-footer__office-link">
                +254 (0) 20 000 0000
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privately Held Badge */}
        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © 2026 NuruNexus Holdings Ltd. All rights reserved.
          </p>
          <span className="site-footer__tagline">
            PRIVATELY HELD · NAIROBI, KENYA
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer