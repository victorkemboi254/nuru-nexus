import { useState, useEffect } from 'react'
import queenMark from '../assets/nuru-queen-mark.png'
import OverlayMenu from './OverlayMenu'

function Header({ currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`header ${
          isScrolled || currentPage !== 'home' ? 'header--scrolled' : ''
        } ${
          [
            'about',
            'company-profile',
            'our-history',
            'executive-team',
            'board-of-directors',
            'contact',
          ].includes(currentPage)
            ? 'header--light'
            : ''
        }`}
      >
        <div className="header__inner">
          {/* Left: Brand Identity */}
          <div className="header__left">
            <button
              type="button"
              className="header__brand-btn"
              onClick={() => onNavigate && onNavigate('home')}
              aria-label="NuruNexus Holdings Home"
            >
              <div className="header__brand-identity">
                <img
                  src={queenMark}
                  alt="NuruNexus emblem"
                  className="header__brand-icon"
                />
                <div className="header__brand-copy">
                  <span className="header__brand-title">NuruNexus</span>
                  <span className="header__brand-subtitle">HOLDINGS LTD</span>
                </div>
              </div>
            </button>
          </div>

          {/* Right: Menu Button */}
          <div className="header__right">
            <button
              type="button"
              className="header__menu-toggle-btn"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="header__menu-toggle-text">MENU</span>
              <span className="header__menu-toggle-icon" aria-hidden="true">
                <span className="header__menu-toggle-line" />
                <span className="header__menu-toggle-line" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu matching screenshot */}
      <OverlayMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </>
  )
}

export default Header