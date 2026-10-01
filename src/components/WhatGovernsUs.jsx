import './HomeSections.css'

export default function WhatGovernsUs() {
  return (
    <section className="what-governs-section" id="what-governs-us" aria-label="What Governs Us">
      <div className="what-governs-container">
        {/* Eyebrow */}
        <div className="home-eyebrow">
          <span className="home-eyebrow__dash" aria-hidden="true" />
          <span>WHAT GOVERNS US</span>
        </div>

        {/* 3 Perfectly Aligned Horizontal Rows */}
        <div className="what-governs-rows">
          {/* Row 1: Clarity (Bishop) */}
          <div className="what-governs-row">
            <div className="what-governs-row__icon-wrap">
              <svg viewBox="0 0 48 48" fill="none" className="what-governs-row__icon" aria-hidden="true">
                <circle cx="24" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M24 11.5c-5 2.5-8 7.5-8 14 0 5 2.5 8.5 6 11v3.5h4v-3.5c3.5-2.5 6-6 6-11 0-6.5-3-11.5-8-14z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <line x1="21" y1="18" x2="27" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="24" y1="15" x2="24" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16 40h16v3H16z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="what-governs-row__title-group">
              <h3 className="what-governs-row__title">Clarity</h3>
              <p className="what-governs-row__quote">
                We say what a thing is, what it costs, and what it will take.
              </p>
            </div>
            <div className="what-governs-row__desc-wrap">
              <p className="what-governs-row__desc">
                Clarity is a governance instrument. Clear mandates, clear reporting lines and clear commercial terms are what allow four independent businesses to operate at speed without drifting apart.
              </p>
            </div>
          </div>

          {/* Row 2: Integrity (Red Rook) */}
          <div className="what-governs-row">
            <div className="what-governs-row__icon-wrap">
              <svg viewBox="0 0 48 48" fill="none" className="what-governs-row__icon what-governs-row__icon--red" aria-hidden="true">
                <path d="M15 13v-3h4v2.5h3V10h4v2.5h3V10h4v3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path
                  d="M15 13h18v6h-2.5v11c0 3 1.5 5.5 3.5 7v3H14v-3c2-1.5 3.5-4 3.5-7V19H15v-6z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path d="M13 40h22v3H13z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="what-governs-row__title-group">
              <h3 className="what-governs-row__title">Integrity</h3>
              <p className="what-governs-row__quote">
                The position holds because the foundation does not move.
              </p>
            </div>
            <div className="what-governs-row__desc-wrap">
              <p className="what-governs-row__desc">
                Integrity is enforced structurally — through board oversight, defined committees and the legal discipline that runs through every entity in the group.
              </p>
            </div>
          </div>

          {/* Row 3: Momentum (Knight) */}
          <div className="what-governs-row">
            <div className="what-governs-row__icon-wrap">
              <svg viewBox="0 0 48 48" fill="none" className="what-governs-row__icon" aria-hidden="true">
                <path
                  d="M16 40h16v-3c0-2-1.5-4.5-3-6 1-2.5 2.5-5.5 2.5-9.5 0-2.5-.8-5-2.5-7.5l-2.5 1.5c-.8-2.5-3-5-6-6-4.5-.8-7.5 1.5-10 5.5-.8 1.5-1.5 4-.8 5.5l3 1.5c-2.5 1.5-4 4-4 7 0 3 1.5 5.5 4 7v4.5z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="21" cy="18" r="1.2" fill="currentColor" />
                <path d="M14 40h20v3H14z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="what-governs-row__title-group">
              <h3 className="what-governs-row__title">Momentum</h3>
              <p className="what-governs-row__quote">
                Considered movement, sustained — never motion for its own sake.
              </p>
            </div>
            <div className="what-governs-row__desc-wrap">
              <p className="what-governs-row__desc">
                Momentum means each subsidiary compounds: connectivity enables platforms, platforms enable institutions, governance keeps the whole advance deliberate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
