import { useState, useEffect, useRef } from 'react'
import logo from '../assets/nuru-logo.png'

function Header({
  companies = [],
  activeCompany,
  onCompanySelect,
  currentPage = 'home',
  onNavigate,
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false)

  const aboutTimerRef = useRef(null)
  const portfolioTimerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on outside click or escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setAboutDropdownOpen(false)
        setPortfolioDropdownOpen(false)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleNavClick = (page) => {
    setMobileMenuOpen(false)
    setAboutDropdownOpen(false)
    setPortfolioDropdownOpen(false)
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const handleCompanyClick = (index) => {
    setMobileMenuOpen(false)
    setAboutDropdownOpen(false)
    setPortfolioDropdownOpen(false)
    if (onCompanySelect) {
      onCompanySelect(index)
    }
  }

  const isAboutActive = [
    'company-profile',
    'our-history',
    'executive-team',
    'board-of-directors',
  ].includes(currentPage)

  return (
    <header className={`header ${isScrolled || currentPage !== 'home' ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Left: Brand Logo */}
        <div className="header__left">
          <button
            type="button"
            className="header__brand-btn"
            onClick={() => handleNavClick('home')}
            aria-label="Nuru Nexus Home"
          >
            <div className="header__logo-wrap">
              <img src={logo} alt="Nuru Nexus Holding Ltd" className="header__logo" />
            </div>
          </button>
        </div>

        {/* Center: Navigation Links */}
        <nav
          className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          {/* Home */}
          <button
            type="button"
            className={`header__nav-link ${currentPage === 'home' ? 'header__nav-link--active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>

          {/* About Us Dropdown */}
          <div
            className={`header__dropdown ${aboutDropdownOpen ? 'header__dropdown--open' : ''}`}
            onMouseEnter={() => {
              if (aboutTimerRef.current) clearTimeout(aboutTimerRef.current)
              setAboutDropdownOpen(true)
            }}
            onMouseLeave={() => {
              aboutTimerRef.current = setTimeout(() => {
                setAboutDropdownOpen(false)
              }, 120)
            }}
          >
            <button
              type="button"
              className={`header__dropdown-toggle ${isAboutActive ? 'header__nav-link--active' : ''}`}
              aria-haspopup="true"
              aria-expanded={aboutDropdownOpen}
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              <span>About Us</span>
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

            <div
              className={`header__dropdown-menu ${aboutDropdownOpen ? 'header__dropdown-menu--visible' : ''}`}
              role="menu"
              aria-label="About Us submenu"
            >
              <button
                type="button"
                role="menuitem"
                className={`header__dropdown-item ${
                  currentPage === 'company-profile' ? 'header__dropdown-item--active' : ''
                }`}
                onClick={() => handleNavClick('company-profile')}
              >
                <span className="header__dropdown-num">01</span>
                <span className="header__dropdown-name">Company Profile</span>
              </button>

              <button
                type="button"
                role="menuitem"
                className={`header__dropdown-item ${
                  currentPage === 'our-history' ? 'header__dropdown-item--active' : ''
                }`}
                onClick={() => handleNavClick('our-history')}
              >
                <span className="header__dropdown-num">02</span>
                <span className="header__dropdown-name">Our History</span>
              </button>

              <button
                type="button"
                role="menuitem"
                className={`header__dropdown-item ${
                  currentPage === 'executive-team' ? 'header__dropdown-item--active' : ''
                }`}
                onClick={() => handleNavClick('executive-team')}
              >
                <span className="header__dropdown-num">03</span>
                <span className="header__dropdown-name">Executive Team</span>
              </button>

              <button
                type="button"
                role="menuitem"
                className={`header__dropdown-item ${
                  currentPage === 'board-of-directors' ? 'header__dropdown-item--active' : ''
                }`}
                onClick={() => handleNavClick('board-of-directors')}
              >
                <span className="header__dropdown-num">04</span>
                <span className="header__dropdown-name">Board of Directors</span>
              </button>
            </div>
          </div>

          {/* Portfolio Dropdown (formerly Companies) */}
          <div
            className={`header__dropdown ${portfolioDropdownOpen ? 'header__dropdown--open' : ''}`}
            onMouseEnter={() => {
              if (portfolioTimerRef.current) clearTimeout(portfolioTimerRef.current)
              setPortfolioDropdownOpen(true)
            }}
            onMouseLeave={() => {
              portfolioTimerRef.current = setTimeout(() => {
                setPortfolioDropdownOpen(false)
              }, 120)
            }}
          >
            <button
              type="button"
              className="header__dropdown-toggle"
              aria-haspopup="true"
              aria-expanded={portfolioDropdownOpen}
              onClick={() => setPortfolioDropdownOpen(!portfolioDropdownOpen)}
            >
              <span>Portfolio</span>
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
            <div
              className={`header__dropdown-menu ${portfolioDropdownOpen ? 'header__dropdown-menu--visible' : ''}`}
              role="menu"
              aria-label="Portfolio companies menu"
            >
              {companies.map((company, index) => (
                <button
                  key={company.name}
                  type="button"
                  role="menuitem"
                  className={`header__dropdown-item ${
                    currentPage === 'home' && index === activeCompany
                      ? 'header__dropdown-item--active'
                      : ''
                  }`}
                  onClick={() => handleCompanyClick(index)}
                >
                  <span className="header__dropdown-num">0{index + 1}</span>
                  <span className="header__dropdown-name">{company.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Nav Link */}
          <button
            type="button"
            className={`header__nav-link ${currentPage === 'contact' ? 'header__nav-link--active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
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

          <button
            type="button"
            className="header__contact-btn"
            onClick={() => handleNavClick('contact')}
          >
            <span>Contact Us</span>
          </button>

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