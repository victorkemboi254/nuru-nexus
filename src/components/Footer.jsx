import queenMark from '../assets/nuru-queen-mark.png'

function Footer({ onNavigate }) {
  const handleNav = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <footer className="footer-dl">
      <div className="footer-dl__container">
        <div className="footer-dl__grid">
          {/* Column 1: Brand & Socials */}
          <div className="footer-dl__col footer-dl__col--brand">
            <div className="footer-dl__logo-box">
              <div className="footer-dl__logo-emblem">
                <img src={queenMark} alt="Nuru Nexus" className="footer-dl__mark" />
              </div>
              <div className="footer-dl__brand-text">
                <span className="footer-dl__brand-title">NURU NEXUS</span>
                <span className="footer-dl__brand-sub">HOLDING LTD</span>
              </div>
            </div>

            <p className="footer-dl__tagline">
              Your strategic partner in growth, driving visionary stewardship
              through operational excellence and sustainable value creation across Africa.
            </p>

            <div className="footer-dl__socials" aria-label="Social media channels">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dl__social-btn"
                aria-label="Facebook"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dl__social-btn"
                aria-label="X (Twitter)"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dl__social-btn"
                aria-label="LinkedIn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dl__social-btn"
                aria-label="Instagram"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dl__social-btn"
                aria-label="TikTok"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.03 3.66.02 7.33-.03 10.99-.11 2.37-1.12 4.67-2.89 6.25-1.78 1.58-4.27 2.4-6.66 2.18-2.61-.22-5.04-1.7-6.42-3.89-1.39-2.18-1.55-5-0.45-7.34 1.09-2.34 3.39-3.95 5.96-4.22.82-.09 1.65-.05 2.46.12v4.23c-.76-.23-1.58-.28-2.35-.12-1.14.22-2.17.95-2.73 1.96-.56 1.01-.59 2.25-.09 3.28.51 1.03 1.52 1.77 2.66 1.95 1.14.18 2.34-.17 3.16-.96.82-.79 1.25-1.93 1.24-3.08V.02h-.08z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-dl__col">
            <h3 className="footer-dl__col-title">Quick Links</h3>
            <ul className="footer-dl__links">
              <li>
                <button type="button" onClick={() => handleNav('home')}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('company-profile')}>
                  Company Profile
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('our-history')}>
                  Our History
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('executive-team')}>
                  Executive Team
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('board-of-directors')}>
                  Board of Directors
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('portfolio')}>
                  Portfolio
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('contact')}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer-dl__col">
            <h3 className="footer-dl__col-title">Contact Us</h3>
            <div className="footer-dl__contact-list">
              <div className="footer-dl__contact-item">
                <svg className="footer-dl__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="footer-dl__contact-text">
                  <a href="tel:+254709622000">+254 709 622 000</a>
                  <a href="tel:+254748381108">+254 748 381 108</a>
                </div>
              </div>

              <div className="footer-dl__contact-item">
                <svg className="footer-dl__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div className="footer-dl__contact-text">
                  <a href="mailto:hello@nurunexus.co.ke">hello@nurunexus.co.ke</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-dl__bottom">
          <p className="footer-dl__copy">
            &copy; {new Date().getFullYear()} Nuru Nexus Holding Ltd. All rights reserved.
          </p>
          {/* <p className="footer-dl__motto">
            Your Strategic Partner in Growth
          </p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer