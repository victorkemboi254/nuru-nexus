import './HomeSections.css'

export default function HomeJourney({ onNavigate }) {
  const handleFullHistory = () => {
    if (onNavigate) {
      onNavigate('about', 'history')
    }
  }

  return (
    <section className="home-journey-section" id="journey" aria-label="Nuru Nexus Journey">
      <div className="home-journey-container">
        {/* Header with Title on Left and Link on Right */}
        <div className="home-journey__header">
          <div>
            <div className="home-eyebrow">
              <span className="home-eyebrow__dash" aria-hidden="true" />
              <span>JOURNEY</span>
            </div>
            <h2 className="home-journey__heading">Moves made, in order.</h2>
          </div>

          <button
            type="button"
            className="home-journey__history-link"
            onClick={handleFullHistory}
            aria-label="View full group history"
          >
            FULL HISTORY &rarr;
          </button>
        </div>

        {/* 3 Milestone Columns with Vertical Dividers */}
        <div className="home-journey__grid">
          {/* Column 1: 2016 */}
          <div className="home-journey__col">
            <div className="home-journey__year">2016</div>
            <h3 className="home-journey__title">Foundation laid</h3>
            <p className="home-journey__text">
              The first operating business is established in Nairobi, setting the group's delivery culture.
            </p>
          </div>

          {/* Column 2: 2018 */}
          <div className="home-journey__col">
            <div className="home-journey__year">2018</div>
            <h3 className="home-journey__title">Legal practice formalised</h3>
            <p className="home-journey__text">
              DLTOO Advocates brings advisory and governance capability in-house.
            </p>
          </div>

          {/* Column 3: 2020 */}
          <div className="home-journey__col">
            <div className="home-journey__year">2020</div>
            <h3 className="home-journey__title">Connectivity licensed</h3>
            <p className="home-journey__text">
              JEMNET begins operating as a licensed ISP, building owned fiber infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
