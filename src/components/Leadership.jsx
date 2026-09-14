const leaders = [
  {
    initials: 'LN',
    name: 'Leader Name',
    role: 'Managing Director',
  },
  {
    initials: 'LN',
    name: 'Leader Name',
    role: 'Executive Director',
  },
  {
    initials: 'LN',
    name: 'Leader Name',
    role: 'Operations Director',
  },
]

function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <div className="leadership__intro">
        <div className="leadership__intro-copy">
          <p className="leadership__eyebrow">The people behind the work</p>
          <h2>Leadership</h2>
        </div>
        <p>
          A focused team bringing practical experience, clear thinking, and
          long-term commitment to every business in the Nuru Nexus group.
        </p>
      </div>

      <div className="leadership__grid">
        {leaders.map((leader) => (
          <article className="leader-card" key={`${leader.role}-${leader.initials}`}>
            <div className="leader-card__portrait" aria-label={`${leader.name} photo placeholder`}>
              <span>{leader.initials}</span>
            </div>
            <div className="leader-card__info">
              <span className="leader-card__number">0{leaders.indexOf(leader) + 1}</span>
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
              <div className="leader-card__rule" />
              <span className="leader-card__note">Profile details coming soon</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Leadership
