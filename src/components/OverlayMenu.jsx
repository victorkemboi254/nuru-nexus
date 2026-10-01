import { useEffect } from 'react'
import queenMark from '../assets/nuru-queen-mark.png'
import { DltooLogo, SildaLogo, JemnetLogo, PentapathLogo } from './CompanyLogos'

function OverlayMenu({ isOpen, onClose, currentPage = 'home', onNavigate }) {
  // Prevent body scrolling while menu is open and close on Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleNav = (page, anchor) => {
    onClose()
    if (onNavigate) {
      onNavigate(page, anchor)
    }
  }

  const isAboutActive = [
    'about',
    'company-profile',
    'our-history',
    'executive-team',
    'board-of-directors',
  ].includes(currentPage)

  return (
    <div
      className={`mega-menu ${isOpen ? 'mega-menu--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="mega-menu__backdrop" onClick={onClose} />

      <div className="mega-menu__sheet">
        {/* Subtle Architectural Grid Lines */}
        <div className="mega-menu__grid-pattern" aria-hidden="true" />

        {/* Top Header Bar inside Menu Overlay */}
        <div className="mega-menu__header">
          <button
            type="button"
            className="mega-menu__brand-btn"
            onClick={() => handleNav('home')}
            aria-label="NuruNexus Holdings Home"
          >
            <div className="mega-menu__brand">
              <img
                src={queenMark}
                alt="NuruNexus emblem"
                className="mega-menu__brand-icon"
              />
              <div className="mega-menu__brand-copy">
                <span className="mega-menu__brand-title">NuruNexus</span>
                <span className="mega-menu__brand-sub">HOLDINGS LTD</span>
              </div>
            </div>
          </button>

          <button
            type="button"
            className="mega-menu__close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <span className="mega-menu__close-text">CLOSE</span>
            <svg
              className="mega-menu__close-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Minimalist Menu Body Columns (Matching Screenshot) */}
        <div className="mega-menu__body">
          {/* Left Column: NAVIGATE */}
          <section className="mega-menu__col mega-menu__col--nav">
            <div className="mega-menu__section-label">NAVIGATE</div>

            <nav className="mega-menu__nav-list" aria-label="Primary site links">
              {/* 1. Home */}
              <button
                type="button"
                className={`mega-menu__nav-link ${
                  currentPage === 'home' ? 'mega-menu__nav-link--active' : ''
                }`}
                onClick={() => handleNav('home')}
              >
                <span className="mega-menu__nav-heading">Home</span>
                <span className="mega-menu__nav-sub">The group at a glance</span>
              </button>

              {/* 2. About (Pure Minimalist, No Sublinks) */}
              <button
                type="button"
                className={`mega-menu__nav-link ${
                  isAboutActive ? 'mega-menu__nav-link--active' : ''
                }`}
                onClick={() => handleNav('about', 'profile')}
              >
                <span className="mega-menu__nav-heading">About</span>
                <span className="mega-menu__nav-sub">
                  Profile, history, board and leadership
                </span>
              </button>

              {/* 3. Portfolio */}
              <button
                type="button"
                className={`mega-menu__nav-link ${
                  currentPage === 'portfolio' ? 'mega-menu__nav-link--active' : ''
                }`}
                onClick={() => handleNav('portfolio')}
              >
                <span className="mega-menu__nav-heading">Portfolio</span>
                <span className="mega-menu__nav-sub">
                  Four operating businesses, one board
                </span>
              </button>

              {/* 4. Contact */}
              <button
                type="button"
                className={`mega-menu__nav-link ${
                  currentPage === 'contact' ? 'mega-menu__nav-link--active' : ''
                }`}
                onClick={() => handleNav('contact')}
              >
                <span className="mega-menu__nav-heading">Contact</span>
                <span className="mega-menu__nav-sub">
                  Reach the holding company directly
                </span>
              </button>
            </nav>
          </section>

          {/* Right Column: THE PORTFOLIO (2x2 Grid with Cross Dividers) */}
          <section className="mega-menu__col mega-menu__col--portfolio">
            <div className="mega-menu__section-label">THE PORTFOLIO</div>

            <div className="mega-menu__portfolio-grid">
              {/* Card 1: DLTOO Advocates */}
              <button
                type="button"
                className="mega-menu__port-card"
                onClick={() => handleNav('portfolio', 'dltoo')}
              >
                <div className="mega-menu__port-icon-wrap">
                  <DltooLogo mode="dark" className="mega-menu__port-logo" />
                </div>
                <h4 className="mega-menu__port-title">DLTOO Advocates</h4>
                <div className="mega-menu__port-sector">
                  LEGAL ADVISORY &amp; CORPORATE GOVERNANCE
                </div>
                <p className="mega-menu__port-desc">
                  Legal advisory and corporate governance for institutions that cannot afford ambiguity.
                </p>
              </button>

              {/* Card 2: SILDA EduTech */}
              <button
                type="button"
                className="mega-menu__port-card"
                onClick={() => handleNav('portfolio', 'silda-edutech')}
              >
                <div className="mega-menu__port-icon-wrap">
                  <SildaLogo mode="dark" className="mega-menu__port-logo" />
                </div>
                <h4 className="mega-menu__port-title">SILDA EduTech</h4>
                <div className="mega-menu__port-sector">
                  ACADEMIC &amp; LIBRARY INFRASTRUCTURE
                </div>
                <p className="mega-menu__port-desc">
                  Academic and library infrastructure: MyLOFT, RemoteXs and RFID library automation.
                </p>
              </button>

              {/* Card 3: JEMNET */}
              <button
                type="button"
                className="mega-menu__port-card"
                onClick={() => handleNav('portfolio', 'jemnet')}
              >
                <div className="mega-menu__port-icon-wrap">
                  <JemnetLogo mode="dark" className="mega-menu__port-logo" />
                </div>
                <h4 className="mega-menu__port-title">JEMNET</h4>
                <div className="mega-menu__port-sector">
                  CONNECTIVITY &amp; TURNKEY ICT
                </div>
                <p className="mega-menu__port-desc">
                  Licensed ISP delivering fiber connectivity and turnkey ICT infrastructure.
                </p>
              </button>

              {/* Card 4: Pentapath Group */}
              <button
                type="button"
                className="mega-menu__port-card"
                onClick={() => handleNav('portfolio', 'pentapath-group')}
              >
                <div className="mega-menu__port-icon-wrap">
                  <PentapathLogo mode="dark" className="mega-menu__port-logo" />
                </div>
                <h4 className="mega-menu__port-title">Pentapath Group</h4>
                <div className="mega-menu__port-sector">
                  SOFTWARE ENGINEERING &amp; AUTOMATION
                </div>
                <p className="mega-menu__port-desc">
                  Software engineering, RFID and biometric automation, and cloud platform delivery.
                </p>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default OverlayMenu
