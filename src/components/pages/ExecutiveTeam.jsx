function ExecutiveTeam({ onNavigate }) {
  const executives = [
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Managing Director & CEO',
      department: 'Executive Leadership',
      bio:
        'Provides overall strategic guidance, capital allocation, and executive stewardship across the Nuru Nexus portfolio.',
      expertise: ['Strategic Growth', 'Capital Allocation', 'Corporate Governance'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Executive Director & Head of Legal Strategy',
      department: 'Corporate & Legal Affairs',
      bio:
        'Oversees group-wide commercial risk, regulatory compliance, and cross-border transactions across group subsidiaries.',
      expertise: ['Commercial Law', 'Regulatory Compliance', 'M&A Advisory'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Chief Technology Officer (CTO)',
      department: 'Technology & Innovation',
      bio:
        'Directs digital architecture, proprietary software engineering, cloud platforms, and cybersecurity across subsidiaries.',
      expertise: ['Cloud Architecture', 'Bespoke Software', 'RFID & IoT Automation'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Chief Operations Officer (COO)',
      department: 'Group Operations',
      bio:
        'Ensures operational rigor, resource synchronization, and execution agility across all group business units.',
      expertise: ['Operational Excellence', 'Supply Chain Management', 'Execution Discipline'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Chief Financial Officer (CFO)',
      department: 'Finance & Treasury',
      bio:
        'Leads financial planning, treasury management, auditing, and investor reporting with disciplined fiscal governance.',
      expertise: ['Financial Governance', 'Treasury & Risk', 'Auditing & Controls'],
    },
    {
      initials: 'LN',
      name: 'Leader Name',
      role: 'Head of People & Corporate Culture',
      department: 'Human Capital',
      bio:
        'Champions talent acquisition, executive development, and ethical culture across the holding group.',
      expertise: ['Talent Stewardship', 'Organizational Design', 'Culture & Ethics'],
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
            <span className="subpage-hero__current">Executive Team</span>
          </div>
          <h1 className="subpage-hero__title">Executive Leadership</h1>
          <p className="subpage-hero__lead">
            A disciplined, hands-on leadership team bringing deep domain expertise, ethical
            governance, and long-term vision to every subsidiary under Nuru Nexus Holding Ltd.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="exec-section">
        <div className="subpage-container">
          <div className="subpage-header-center">
            <span className="subpage-eyebrow">Operational Excellence</span>
            <h2 className="subpage-heading">The Executive Committee</h2>
            <p className="subpage-lead-center">
              Our executive leaders drive cross-portfolio synergy, maintain institutional standards, and empower our operating companies to lead their industries.
            </p>
          </div>

          <div className="exec-grid">
            {executives.map((exec, idx) => (
              <article key={`exec-${idx}`} className="exec-card">
                <div className="exec-card__header">
                  <div className="exec-card__avatar" aria-label={`${exec.name} photo placeholder`}>
                    <span>{exec.initials}</span>
                  </div>
                  <div className="exec-card__meta">
                    <span className="exec-card__num">0{idx + 1}</span>
                    <span className="exec-card__dept">{exec.department}</span>
                  </div>
                </div>

                <div className="exec-card__body">
                  <h3 className="exec-card__name">{exec.name}</h3>
                  <p className="exec-card__role">{exec.role}</p>
                  <p className="exec-card__bio">{exec.bio}</p>

                  <div className="exec-card__tags">
                    {exec.expertise.map((skill) => (
                      <span key={skill} className="exec-card__tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Banner */}
      <section className="subpage-cta">
        <div className="subpage-container">
          <div className="subpage-cta__box">
            <div className="subpage-cta__content">
              <h2>Stewardship &amp; Board Governance</h2>
              <p>
                Our executive committee works in close concert with an independent Board of Directors
                to ensure sound risk oversight, ethical compliance, and shareholder accountability.
              </p>
            </div>
            <div className="subpage-cta__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onNavigate('board-of-directors')}
              >
                View Board of Directors →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExecutiveTeam
