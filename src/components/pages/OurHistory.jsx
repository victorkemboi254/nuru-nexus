function OurHistory({ onNavigate }) {
  const milestones = [
    {
      year: '2016',
      title: 'Foundation laid',
      tag: '01 — NAIROBI',
      description:
        "The first operating business is established in Nairobi, setting the group's delivery culture.",
    },
    {
      year: '2018',
      title: 'Legal practice formalised',
      tag: '02 — DLTOO ADVOCATES',
      description:
        'DLTOO Advocates brings advisory and governance capability in-house.',
    },
    {
      year: '2020',
      title: 'Connectivity licensed',
      tag: '03 — JEMNET ISP',
      description:
        'JEMNET begins operating as a licensed ISP, building owned fiber infrastructure.',
    },
    {
      year: '2022',
      title: 'Institutional platforms',
      tag: '04 — SILDA EDUTECH',
      description:
        'SILDA EduTech scales MyLOFT, RemoteXs and RFID automation across academic institutions.',
    },
    {
      year: '2024',
      title: 'Regional expansion',
      tag: '05 — EAST AFRICA',
      description:
        "Extending the group's infrastructure and platform capability across East Africa.",
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
            <span className="subpage-hero__current">Our History</span>
          </div>
          <h1 className="subpage-hero__title">Our Journey &amp; Milestones</h1>
          <p className="subpage-hero__lead">
            From an ambitious founding vision in Nairobi to a multifaceted holding group
            driving critical legal, educational, telecommunication, and software infrastructure across Kenya.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="history-timeline">
        <div className="subpage-container">
          <div className="subpage-header-center">
            <span className="subpage-eyebrow">Chronology of Growth</span>
            <h2 className="subpage-heading">Key Defining Milestones</h2>
            <p className="subpage-lead-center">
              Each chapter represents our unwavering commitment to enduring value, disciplined execution, and continuous innovation.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline__spine" aria-hidden="true" />
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`timeline__item ${
                  index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'
                }`}
              >
                <div className="timeline__marker">
                  <span className="timeline__marker-dot" />
                  <span className="timeline__year">{item.year}</span>
                </div>
                <div className="timeline__card">
                  <span className="timeline__tag">{item.tag}</span>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="history-stats">
        <div className="subpage-container">
          <div className="history-stats__inner">
            <div className="history-stats__content">
              <span className="subpage-eyebrow">Enduring Track Record</span>
              <h2>Building For The Decades Ahead</h2>
              <p>
                Our history is not just about what we have accomplished—it is about the resilient foundation
                we have engineered to support another decade of sustainable growth, ethical leadership,
                and transformational technological partnerships.
              </p>
            </div>
            <div className="history-stats__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => onNavigate('executive-team')}
              >
                Meet Our Executive Team →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurHistory
