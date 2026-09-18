function BoardOfDirectors({ onNavigate }) {
  const directors = [
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Chairman of the Board',
      designation: 'Independent Non-Executive Director',
      bio:
        'Distinguished leader with over three decades of public service, judicial oversight, and commercial arbitration experience. Serves as independent chair, ensuring the highest standards of corporate probity and fiduciary care.',
      committees: ['Governance & Nomination Committee (Chair)', 'Investment Committee'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Chair of Audit & Risk Committee',
      designation: 'Independent Non-Executive Director',
      bio:
        'Senior partner with international auditing experience across Sub-Saharan Africa. Directs financial controls, internal audit standards, statutory compliance, and enterprise risk management frameworks across all group entities.',
      committees: ['Audit & Risk Committee (Chair)', 'Finance Committee'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Chair of Technology & Strategy Committee',
      designation: 'Non-Executive Director',
      bio:
        'Telecom executive and infrastructure engineering strategist. Previously advised public and private utilities across East Africa on fiber backbone rollout, data sovereignty, and technology concession models.',
      committees: ['Technology & Strategy Committee (Chair)', 'Audit & Risk Committee'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Managing Director & CEO',
      designation: 'Executive Director',
      bio:
        'Leads executive execution and group strategic planning, serving as the primary liaison between executive management and the Board of Directors. Ensures alignment between board mandates and everyday operational reality.',
      committees: ['Investment Committee', 'Executive Committee'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Legal Counsel & Executive Director',
      designation: 'Executive Director',
      bio:
        'Experienced corporate governance advisor. Provides counsel on board fiduciary duties, commercial acquisitions, joint ventures, and statutory compliance across Kenya.',
      committees: ['Governance & Nomination Committee', 'Investment Committee'],
    },
  ]

  const governancePrinciples = [
    {
      title: 'Fiduciary Duty & Transparency',
      desc: 'Clear separation of executive management from board oversight, ensuring independent verification of corporate outcomes.',
    },
    {
      title: 'Audit & Fiscal Rigor',
      desc: 'Independent external auditing, quarterly internal control reviews, and conservative balance-sheet stewardship.',
    },
    {
      title: 'Stakeholder Stewardship',
      desc: 'Balancing the long-term interests of investors, employees, clients, communities, and partner institutions.',
    },
    {
      title: 'Ethical Leadership',
      desc: 'Zero tolerance for unethical conduct, backed by a whistleblower channel and rigorous anti-corruption policies.',
    },
  ]

  return (
    <div className="subpage">
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero__inner">
          <div className="subpage-hero__badge">
            <span className="subpage-hero__badge-dot"></span>
            <span>About Nuru Nexus</span>
            <span className="subpage-hero__divider">/</span>
            <span className="subpage-hero__current">Board of Directors</span>
          </div>
          <h1 className="subpage-hero__title">Board of Directors</h1>
          <p className="subpage-hero__lead">
            Upholding institutional integrity, strategic direction, and shareholder accountability
            through seasoned independent oversight and rigorous corporate governance.
          </p>
        </div>
      </section>

      {/* Directors Grid */}
      <section className="board-section">
        <div className="subpage-container">
          <div className="subpage-header-center">
            <span className="subpage-eyebrow">Corporate Governance</span>
            <h2 className="subpage-heading">The Board of Directors</h2>
            <p className="subpage-lead-center">
              Our directors combine legal eminency, financial forensic expertise, technology infrastructure acumen, and corporate leadership.
            </p>
          </div>

          <div className="board-grid">
            {directors.map((director, idx) => (
              <article key={`director-${idx}`} className="board-card">
                <div className="board-card__top">
                  <div className="board-card__avatar" aria-label={`${director.name} avatar`}>
                    <span>{director.initials}</span>
                  </div>
                  <div className="board-card__head-meta">
                    <span className="board-card__number">0{idx + 1}</span>
                    <span className="board-card__designation">{director.designation}</span>
                  </div>
                </div>

                <div className="board-card__body">
                  <h3 className="board-card__name">{director.name}</h3>
                  <p className="board-card__role">{director.role}</p>
                  <p className="board-card__bio">{director.bio}</p>

                  <div className="board-card__committees">
                    <span className="board-card__committees-label">Board Committees:</span>
                    <ul className="board-card__committees-list">
                      {director.committees.map((comm) => (
                        <li key={comm}>{comm}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="governance-framework">
        <div className="subpage-container">
          <div className="subpage-header-center">
            <span className="subpage-eyebrow">Institutional Standards</span>
            <h2 className="subpage-heading">Governance Principles</h2>
            <p className="subpage-lead-center">
              How the Board maintains accountability across Nuru Nexus and all portfolio companies.
            </p>
          </div>

          <div className="governance-grid">
            {governancePrinciples.map((prin, i) => (
              <div key={i} className="governance-card">
                <span className="governance-card__icon">✓</span>
                <div>
                  <h4 className="governance-card__title">{prin.title}</h4>
                  <p className="governance-card__desc">{prin.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <div className="subpage-cta__box">
            <div className="subpage-cta__content">
              <h2>Investor &amp; Governance Enquiries</h2>
              <p>For board secretarial matters, institutional investor relations, or statutory disclosures.</p>
            </div>
            <div className="subpage-cta__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onNavigate('contact')}
              >
                Contact Governance Office →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BoardOfDirectors
