function About({ onNavigate }) {
  const values = [
    {
      num: '01',
      title: 'Clarity',
      subtitle: 'Clean Books & Radical Transparency',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
        </svg>
      ),
      text: 'We say what we mean and do what we say. Every enterprise under Nuru Nexus is governed in the open, with disciplined accounting, transparent metrics, and honest reporting at every tier of our operations.',
    },
    {
      num: '02',
      title: 'Integrity',
      subtitle: 'Fiduciary Trust That Endures',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      text: 'Trust is the ultimate currency that compounds over generations. We hold our leadership, subsidiaries, and advisory boards to the highest ethical and legal standards whether in private boardrooms or public markets.',
    },
    {
      num: '03',
      title: 'Momentum',
      subtitle: 'Decisive Speed & Resilient Action',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      text: 'We back agile teams and business operators who move with purpose. In rapidly modernizing African economies, the real cost of hesitation far exceeds the cost of intelligent decisions executed swiftly and refined with discipline.',
    },
  ]

  return (
    <section className="about" id="about" aria-label="About Nuru Nexus and Core Ethos">
      <div className="about__container">
        {/* Intro Header */}
        <div className="about__header">
          <div className="about__header-left">
            <div className="about__eyebrow">
              <span className="accent-dot" aria-hidden="true" />
              <span>THE FOUNDATIONAL ETHOS</span>
            </div>
            <h2 className="about__title">What Holds Us Together</h2>
          </div>
          <div className="about__header-right">
            {/* <p className="about__lead">
              <strong>Nuru</strong> means light — illumination, clarity, and vision.
              <strong> Nexus</strong> represents the vital connection — the disciplined
              holding network uniting diversified enterprises into an enduring African institution.
            </p>
            <p className="about__sublead">
              We started Nuru Nexus on the conviction that a handful of well-run, technology-driven
              businesses, sharing patient capital and commercial governance, compound greater value together
              than any single one could alone.
            </p> */}
          </div>
        </div>

        {/* 3 Core Value Cards Grid */}
        <div className="about__grid">
          {values.map((v) => (
            <div key={v.title} className="about-card">
              <div className="about-card__top">
                <div className="about-card__icon-box">
                  {v.icon}
                </div>
                <span className="about-card__num">{v.num}</span>
              </div>
              <h3 className="about-card__title">{v.title}</h3>
              <p className="about-card__subtitle">{v.subtitle}</p>
              <p className="about-card__text">{v.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Strategic Holding Banner */}
        <div className="about-banner">
          <div className="about-banner__content">
            <span className="about-banner__tag">HOLDING PHILOSOPHY</span>
            <p className="about-banner__quote">
              &ldquo;Disciplined capital allocation, operational autonomy for founders,
              and shared technological synergy across every operating subsidiary.&rdquo;
            </p>
          </div>
          {onNavigate && (
            <div className="about-banner__actions">
              <button
                type="button"
                className="about-banner__btn about-banner__btn--primary"
                onClick={() => onNavigate('company-profile')}
              >
                <span>Company Profile</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                type="button"
                className="about-banner__btn about-banner__btn--secondary"
                onClick={() => onNavigate('our-history')}
              >
                <span>Our History</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About