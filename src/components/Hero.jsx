function Hero({ onNavigate }) {
  const scrollToBoard = () => {
    const boardEl = document.getElementById('the-board')
    if (boardEl) {
      boardEl.scrollIntoView({ behavior: 'smooth' })
    } else if (onNavigate) {
      onNavigate('portfolio')
    }
  }

  const handleHoldingCompany = () => {
    if (onNavigate) {
      onNavigate('about', 'profile')
    } else {
      const aboutEl = document.getElementById('about')
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="editorial-hero" aria-label="Hero Introduction">
      <div className="editorial-hero__container">
        {/* Eyebrow with red dash */}
        <div className="editorial-hero__eyebrow">
          <span className="editorial-hero__dash" aria-hidden="true" />
          <span className="editorial-hero__tag">NAIROBI · INVESTMENT HOLDING COMPANY</span>
        </div>

        {/* Serif Headline: Two-tone luxury editorial typography */}
        <h1 className="editorial-hero__title">
          <span className="editorial-hero__title-dark">Four independent pieces.</span>
          <span className="editorial-hero__title-muted">One governing hand.</span>
        </h1>

        {/* Narrative Description */}
        <p className="editorial-hero__desc">
          NuruNexus Holdings Ltd owns and operates four businesses across law,
          academic infrastructure, connectivity and software engineering — each strong
          on its own, each stronger held under a single strategy.
        </p>

        {/* Action Buttons Row */}
        <div className="editorial-hero__actions">
          <button
            type="button"
            className="editorial-hero__btn editorial-hero__btn--primary"
            onClick={scrollToBoard}
            id="hero-enter-board-btn"
          >
            <span>ENTER THE BOARD</span>
            <span className="editorial-hero__btn-arrow" aria-hidden="true">→</span>
          </button>

          <button
            type="button"
            className="editorial-hero__btn editorial-hero__btn--secondary"
            onClick={handleHoldingCompany}
            id="hero-holding-company-btn"
          >
            <span>THE HOLDING COMPANY</span>
          </button>
        </div>

        {/* 4-Column Minimal Metrics Grid */}
        <div className="editorial-hero__stats" aria-label="Key holding metrics">
          <div className="editorial-hero__stat-col">
            <span className="editorial-hero__stat-value">4+</span>
            <span className="editorial-hero__stat-label">SUBSIDIARIES</span>
          </div>

          <div className="editorial-hero__stat-col">
            <span className="editorial-hero__stat-value">500+</span>
            <span className="editorial-hero__stat-label">CLIENTS SERVED</span>
          </div>

          <div className="editorial-hero__stat-col">
            <span className="editorial-hero__stat-value">100%</span>
            <span className="editorial-hero__stat-label">PRIVATELY HELD</span>
          </div>

          <div className="editorial-hero__stat-col">
            <span className="editorial-hero__stat-value editorial-hero__stat-value--serif">
              Nairobi
            </span>
            <span className="editorial-hero__stat-label">HEADQUARTERS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero