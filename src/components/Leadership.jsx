const leaders = [
  {
    initials: 'LN',
    name: 'Leader Name',
    role: 'Managing Director',
    focus: 'Capital Allocation & Strategy',
  },
  {
    initials: 'LN',
    name: 'Leader Name',
    role: 'Executive Director',
    focus: 'Legal Strategy & Commercial Governance',
  },
  {
    initials: 'LN',
    name: 'Leader Name',
    role: 'Operations Director',
    focus: 'Operations & Execution Discipline',
  },
]

function Leadership({ onNavigate }) {
  return (
    <section className="leadership" id="leadership">
      <div className="leadership__intro">
        <div className="leadership__intro-copy">
          <p className="leadership__eyebrow">The people behind the work</p>
          <h2>Leadership</h2>
        </div>
        <div className="leadership__intro-desc">
          <p>
            A focused team bringing practical experience, clear thinking, and
            long-term commitment to every business in the Nuru Nexus group.
          </p>
          {onNavigate && (
            <button
              type="button"
              className="leadership__view-all-btn"
              onClick={() => onNavigate('executive-team')}
            >
              <span>Explore Executive Team</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="leadership__grid">
        {leaders.map((leader, index) => (
          <article className="leader-card" key={`leader-${index}`}>
            <div className="leader-card__portrait" aria-label={`${leader.name} avatar`}>
              <span>{leader.initials}</span>
            </div>
            <div className="leader-card__info">
              <span className="leader-card__number">0{index + 1}</span>
              <h3>{leader.name}</h3>
              <p className="leader-card__role">{leader.role}</p>
              <div className="leader-card__rule" />
              <span className="leader-card__note">{leader.focus}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Leadership
