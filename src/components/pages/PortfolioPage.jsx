import { useEffect } from 'react'

const portfolioData = [
  {
    id: 'dltoo',
    tag: 'D.L.TOO & COMPANY | ADVOCATES',
    motto: 'Your Trusted Legal Partner',
    title: 'Legal Advisory & Corporate Commercial Practice',
    companyName: 'D.L.TOO & Company Advocates',
    description:
      "Kenya's premier legal practice delivering strategic corporate counsel, commercial dispute litigation, real estate conveyance, intellectual property, and regulatory advisory for modern enterprises.",
    capabilities: [
      'Corporate & Commercial Law',
      'Conveyancing & Real Estate',
      'Litigation & ADR',
      'Regulatory Compliance & Governance',
    ],
    image: '/dltoo.jpeg',
    website: 'https://dltooadvocates.org',
    buttonText: 'Visit DLTOO Website',
  },
  {
    id: 'silda',
    tag: 'SILDA ENTERPRISE | EDUTECH & SYSTEMS',
    motto: 'Innovating Education Technology in Africa',
    title: 'Digital Academic Infrastructure & Library Automation',
    companyName: 'SILDA Enterprise Limited',
    description:
      'We are an EduTech company providing process automation in education and research industries. We serve academics, corporates, research, and government institutions across Africa with MyLOFT, RemoteXs, and RFID library automation.',
    capabilities: [
      'Remote Knowledge Gateways',
      'RFID Library Automation',
      'Federated Academic Portals',
      'Campus Information Management',
    ],
    image: '/silda.jpg',
    website: 'https://silda.co.ke',
    buttonText: 'Visit Silda Website',
  },
  {
    id: 'jemnet',
    tag: 'JEMNET | CONNECTIVITY & TELECOM',
    motto: 'Where Innovation Meets Speed in Kenya',
    title: 'Enterprise Fiber & Next-Gen Telecom Solutions',
    companyName: 'JEMNET ISP & ICT Solutions',
    description:
      'From same-day fiber connections to full ICT infrastructure — Jemnet delivers enterprise-grade internet and technology solutions for homes, businesses, and commercial facilities across Kenya with 99.9% uptime and 24/7 dedicated support.',
    capabilities: [
      'Dedicated Enterprise Fiber',
      'High-Speed Broadband',
      'Smart CCTV Surveillance',
      'Structured Cabling & PBX',
    ],
    image: '/jemnet.jpeg',
    website: 'https://jemnet.co.ke',
    buttonText: 'Visit Jemnet Website',
  },
  {
    id: 'pentapath',
    tag: 'PENTAPATH GROUP | RFID & AUTOMATION',
    motto: 'Transforming the Way Africa Thinks About RFID Automation',
    title: 'Intelligent RFID Automation & Bespoke Engineering',
    companyName: 'Pentapath Group Limited',
    description:
      'A forward-thinking Kenyan technology enterprise engineering bespoke cloud architectures, advanced RFID tracking systems, turnstiles, biometric speed gates, and automated physical access security platforms for high-density institutions.',
    capabilities: [
      'RFID Automation & Tracking',
      'Biometric Speed Gates',
      'Bespoke Cloud Architecture',
      'IoT Security Systems',
    ],
    image: '/pentapath.jpeg',
    website: 'https://pentapath.co.ke',
    buttonText: 'Visit Pentapath Website',
  },
]

function PortfolioPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = 'Portfolio Companies | Nuru Nexus Holding Ltd'
  }, [])

  return (
    <div className="subpage portfolio-page">
      {/* Portfolio Hero Banner */}
      <section className="subpage-hero portfolio-hero">
        <div className="subpage-container">
          <div className="subpage-hero__inner">
            <div className="subpage-hero__badge">
              <span className="accent-dot" aria-hidden="true" />
              <span>Investment Portfolio / Strategic Holdings</span>
            </div>
            <h1 className="subpage-hero__title">Our Portfolio Companies</h1>
            <p className="subpage-hero__desc">
              Explore the market-leading enterprises stewarded under Nuru Nexus Holding Ltd,
              each operating with specialized autonomy, distinctive industry leadership,
              and shared technological synergy across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Luminous White Showcase Section */}
      <section className="portfolio-showcase">
        <div className="portfolio-showcase__container">
          <div className="portfolio-list">
            {portfolioData.map((company, index) => (
              <article
                key={company.id}
                className={`portfolio-row portfolio-row--${company.id}`}
                id={`portfolio-${company.id}`}
              >
                {/* Left: Media Thumbnail */}
                <div className="portfolio-row__media">
                  <div className="portfolio-row__img-wrap">
                    <img
                      src={company.image}
                      alt={`${company.companyName} showcase`}
                      className="portfolio-row__img"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="portfolio-row__img-overlay" aria-hidden="true" />
                    <span className="portfolio-row__motto-badge">
                      {company.motto}
                    </span>
                  </div>
                </div>

                {/* Right: Detailed Content */}
                <div className="portfolio-row__content">
                  <div className="portfolio-row__tag">
                    <span>{company.tag}</span>
                  </div>

                  <h2 className="portfolio-row__title">{company.title}</h2>

                  <p className="portfolio-row__desc">{company.description}</p>

                  <div className="portfolio-row__capabilities" aria-label="Key Capabilities">
                    {company.capabilities.map((cap) => (
                      <span key={cap} className="portfolio-row__cap-pill">
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio-row__actions">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-row__visit-btn"
                      title={`Open official ${company.companyName} portal in a new tab`}
                    >
                      <span>{company.buttonText}</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Partnership Callout on White Canvas */}
          <div className="portfolio-callout">
            <div className="portfolio-callout__inner">
              <div className="portfolio-callout__content">
                <span className="portfolio-callout__tag">PARTNERSHIP &amp; INVESTMENT</span>
                <h3>Interested in Exploring Synergies With Our Portfolio?</h3>
                <p>
                  We welcome conversations with institutional investors, strategic partners,
                  and corporate clients seeking collaboration across our holdings.
                </p>
              </div>
              <div className="portfolio-callout__action">
                <button
                  type="button"
                  className="portfolio-callout__btn"
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  <span>Connect With Our Office</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
