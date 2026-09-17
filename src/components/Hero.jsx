import { useState, useEffect, useRef, useCallback } from 'react'

function Hero({ companies = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const count = companies.length
  const currentCompany = companies[currentIndex] || companies[0]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % count)
  }, [count])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + count) % count)
  }, [count])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-advance slides every 6.5s unless hovered or focused
  useEffect(() => {
    if (isPaused || count <= 1) return

    timerRef.current = setInterval(() => {
      nextSlide()
    }, 6500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, nextSlide, count, currentIndex])

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      nextSlide()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      prevSlide()
    }
  }

  if (!companies || companies.length === 0) return null

  return (
    <section
      className="dl-hero"
      aria-label="Featured companies showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Background Images with crossfade */}
      <div className="dl-hero__backgrounds" aria-hidden="true">
        {companies.map((company, index) => (
          <div
            key={company.name}
            className={`dl-hero__bg-layer ${
              index === currentIndex ? 'dl-hero__bg-layer--active' : ''
            }`}
            style={{ backgroundImage: `url(${company.image})` }}
          />
        ))}
        <div className="dl-hero__overlay" />
      </div>

      <div className="dl-hero__container">
        {/* Left Content Area */}
        <div className="dl-hero__content-wrap">
          <div className="dl-hero__content" key={currentCompany.name}>
            <div className="dl-hero__badge">
              <span className="dl-hero__badge-num">0{currentIndex + 1}</span>
              <span className="dl-hero__badge-divider">/</span>
              <span className="dl-hero__badge-sector">{currentCompany.sector}</span>
            </div>

            <h1 className="dl-hero__title">{currentCompany.headline}</h1>

            <p className="dl-hero__desc">{currentCompany.description}</p>

            <div className="dl-hero__actions">
              <a
                href={currentCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className="dl-hero__cta"
                id={`explore-${currentCompany.name.toLowerCase()}`}
                title={`Visit official website of ${currentCompany.name}`}
              >
                <span>{currentCompany.ctaText || `EXPLORE ${currentCompany.name.toUpperCase()}`}</span>
                <svg
                  className="dl-hero__cta-icon"
                  width="14"
                  height="14"
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
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Vertical Tabs (DL Group Signature) */}
        <aside className="dl-hero__tabs-wrap" aria-label="Company switcher">
          <div className="dl-hero__tabs" role="tablist">
            {companies.map((company, index) => {
              const isActive = index === currentIndex
              return (
                <button
                  key={company.name}
                  id={`hero-tab-${index}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`hero-panel-${index}`}
                  className={`dl-hero__tab ${
                    isActive ? 'dl-hero__tab--active' : ''
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="dl-hero__tab-index">0{index + 1}</span>
                  <span className="dl-hero__tab-name">
                    {company.tabLabel || company.name.toUpperCase()}
                  </span>
                  {isActive && !isPaused && (
                    <span className="dl-hero__tab-progress" aria-hidden="true" />
                  )}
                </button>
              )
            })}
          </div>
        </aside>
      </div>

      {/* Bottom Counter & Nav Controls */}
      <div className="dl-hero__footer">
        <div className="dl-hero__controls">
          <button
            type="button"
            className="dl-hero__nav-btn"
            onClick={prevSlide}
            aria-label="Previous company slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="dl-hero__nav-btn"
            onClick={nextSlide}
            aria-label="Next company slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="dl-hero__counter" aria-live="polite">
          <span className="dl-hero__counter-active">0{currentIndex + 1}</span>
          <span className="dl-hero__counter-slash">/</span>
          <span className="dl-hero__counter-total">0{count}</span>
        </div>
      </div>
    </section>
  )
}

export default Hero