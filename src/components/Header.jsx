import { useState, useEffect } from 'react'
import logo from '../assets/nuru-logo.png'

function Header({ companies = [], activeCompany, onCompanySelect }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Left: Brand Logo */}
        <div className="header__left">
          <a href="#top" className="header__brand" aria-label="Nuru Nexus home">
            <div className="header__logo-wrap">
              <img src={logo} alt="Nuru Nexus Holding Ltd" className="header__logo" />
            </div>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav
          className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <a
            href="#top"
            className="header__nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="header__nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#leadership"
            className="header__nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Leadership
          </a>

          <div className="header__dropdown">
            <button
              type="button"
              className="header__dropdown-toggle"
              aria-haspopup="true"
            >
              <span>Companies</span>
              <svg
                className="header__dropdown-chevron"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="header__dropdown-menu" role="menu" aria-label="Company menu">
              {companies.map((company, index) => (
                <button
                  key={company.name}
                  type="button"
                  role="menuitem"
                  className={`header__dropdown-item ${
                    index === activeCompany ? 'header__dropdown-item--active' : ''
                  }`}
                  onClick={() => {
                    onCompanySelect(index)
                    setMobileMenuOpen(false)
                  }}
                >
                  <span className="header__dropdown-num">0{index + 1}</span>
                  <div className="header__dropdown-info">
                    <span className="header__dropdown-name">{company.name}</span>
                    <span className="header__dropdown-sector">
                      {company.sector || company.line}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="header__nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>

        {/* Right: Phone Number & Contact Us CTA */}
        <div className="header__right">
          <a
            href="tel:+254709622000"
            className="header__phone"
            title="Call Nuru Nexus"
          >
            <svg
              className="header__phone-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="header__phone-num">+254 709 622 000</span>
          </a>

          <a href="#contact" className="header__contact-btn">
            <span>Contact Us</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="header__menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header