function OurHistory({ onNavigate }) {
  const milestones = [
    {
      year: '2018',
      title: 'The Inception & Founding Thesis',
      tag: 'Foundation',
      description:
        'Nuru Nexus was conceived in Nairobi by seasoned entrepreneurs and professionals who observed that high-potential African enterprises frequently struggled with fragmented capital, inconsistent governance, and siloed technological support. The group was established to create a unified holding ecosystem.',
    },
    {
      year: '2020',
      title: 'Strategic Entry into Legal & Corporate Advisory',
      tag: 'DLTOO Advocates',
      description:
        'Formalized alignment with D.L.TOO & Company Advocates, establishing premier corporate legal representation, commercial dispute arbitration, land conveyancing, and regulatory compliance advisory for enterprises navigating complex African commercial environments.',
    },
    {
      year: '2022',
      title: 'Pioneering Academic & Knowledge Infrastructure',
      tag: 'SILDA EduTech',
      description:
        'Founded SILDA to bridge critical gaps in university and institutional knowledge infrastructure. Partnered with global platforms including MyLOFT and RemoteXs to deliver remote e-resource access and RFID library automation across institutions throughout Kenya and East Africa.',
    },
    {
      year: '2024',
      title: 'Licensed Fiber Connectivity & Turnkey ICT',
      tag: 'JEMNET ISP',
      description:
        'Launched JEMNET as a licensed Internet Service Provider (ISP), rolling out dedicated high-speed optical fiber for commercial enterprises, residential parks, PBX telephony, biometric surveillance, and enterprise structured networking.',
    },
    {
      year: '2025',
      title: 'Intelligent Software & Automation Integration',
      tag: 'PENTAPATH Group',
      description:
        'Welcomed Pentapath Group into the holding umbrella, accelerating proprietary software engineering, automated smart biometric access gates, RFID inventory solutions, and modern cloud database architectures.',
    },
    {
      year: '2026+',
      title: 'Cross-Border Scale & Pan-African Horizons',
      tag: 'Future Vision',
      description:
        'Consolidating cross-subsidiary synergies, expanding operations across the East African Community, and actively exploring clean energy and digital fintech infrastructure to propel the next generation of African commercial leadership.',
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
