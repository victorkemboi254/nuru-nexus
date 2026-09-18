import queenMark from '../../assets/nuru-queen-mark.png'

function CompanyProfile({ onNavigate }) {
  const pillars = [
    {
      number: '01',
      title: 'Disciplined Capital Allocation',
      description:
        'We deploy capital where fundamentals are strongest, emphasizing sustainable cash flows, operational moat, and compounding returns across market cycles.',
    },
    {
      number: '02',
      title: 'Operational Autonomy',
      description:
        'Our subsidiaries operate with high governance standards and independent executive management, backed by group-level strategy, advisory, and technological synergies.',
    },
    {
      number: '03',
      title: 'Digital & Technological Infrastructure',
      description:
        'From high-speed fiber connectivity and RFID automation to enterprise cloud platforms and specialized legal tech, we invest in foundational digital catalysts.',
    },
    {
      number: '04',
      title: 'Pan-African Value Creation',
      description:
        'Rooted in Nairobi, Kenya, we build resilient businesses designed to scale across the East African Community and wider Sub-Saharan markets.',
    },
  ]

  const metrics = [
    { value: '4+', label: 'Strategic Subsidiaries' },
    { value: '500+', label: 'Enterprise & Institutional Clients' },
    { value: '100%', label: 'Privately Held & Governed' },
    { value: 'Nairobi', label: 'East Africa Group Headquarters' },
  ]

  return (
    <div className="subpage">
      {/* Page Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero__inner">
          <div className="subpage-hero__badge">
            <span className="subpage-hero__badge-dot"></span>
            <span>About Nuru Nexus</span>
            <span className="subpage-hero__divider">/</span>
            <span className="subpage-hero__current">Company Profile</span>
          </div>
          <h1 className="subpage-hero__title">Company Profile</h1>
          <p className="subpage-hero__lead">
            Nuru Nexus Holding Ltd is a premier diversified investment holding company
            headquartered in Nairobi, Kenya, orchestrating sustainable growth across legal
            advisory, educational technology, telecommunications, and intelligent software engineering.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="profile-overview">
        <div className="subpage-container">
          <div className="profile-overview__grid">
            <div className="profile-overview__left">
              <span className="subpage-eyebrow">Our Philosophy</span>
              <h2 className="subpage-heading">The Power of Light &amp; Connection</h2>
              <p className="subpage-text">
                <strong>Nuru</strong> is the Swahili word for light; <strong>Nexus</strong> represents
                a vital connection. Founded on the conviction that disciplined businesses sharing strategic
                synergies can outlast any single enterprise alone, Nuru Nexus provides the stewardship,
                governance, and patient capital needed to thrive in modern African economies.
              </p>
              <p className="subpage-text">
                We do not engage in speculative ventures. We back proven teams, invest in essential
                economic infrastructure, and build long-horizon institutional capability.
              </p>
            </div>
            <div className="profile-overview__card">
              <div className="profile-overview__card-header">
                <img src={queenMark} alt="Nuru Nexus" className="profile-overview__mark" />
                <div>
                  <span className="profile-overview__firm-name">Nuru Nexus Holding Ltd</span>
                  <span className="profile-overview__firm-reg">Incorporated in the Republic of Kenya</span>
                </div>
              </div>
              <div className="profile-overview__divider" />
              <div className="profile-overview__details">
                <div className="profile-overview__item">
                  <span className="profile-overview__label">Operating Sectors</span>
                  <span className="profile-overview__value">Legal, Edutech, Fiber ICT, Bespoke Software</span>
                </div>
                <div className="profile-overview__item">
                  <span className="profile-overview__label">Governance Standard</span>
                  <span className="profile-overview__value">Independent Board Oversight &amp; Audit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="profile-metrics">
        <div className="subpage-container">
          <div className="profile-metrics__grid">
            {metrics.map((item, idx) => (
              <div key={idx} className="profile-metrics__item">
                <span className="profile-metrics__value">{item.value}</span>
                <span className="profile-metrics__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="profile-pillars">
        <div className="subpage-container">
          <div className="subpage-header-center">
            <span className="subpage-eyebrow">Investment &amp; Growth Framework</span>
            <h2 className="subpage-heading">Our Four Strategic Pillars</h2>
            <p className="subpage-lead-center">
              The fundamental tenets guiding our portfolio stewardship and capital allocation.
            </p>
          </div>

          <div className="profile-pillars__grid">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="pillar-card">
                <span className="pillar-card__num">{pillar.number}</span>
                <h3 className="pillar-card__title">{pillar.title}</h3>
                <p className="pillar-card__desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <div className="subpage-cta__box">
            <div className="subpage-cta__content">
              <h2>Discover Our Portfolio &amp; Strategic Vision</h2>
              <p>Learn how our operating subsidiaries lead their respective markets with precision and impact.</p>
            </div>
            <div className="subpage-cta__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onNavigate('contact')}
              >
                Connect With Our Team →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyProfile
