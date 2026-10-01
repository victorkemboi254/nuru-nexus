import { useState, useEffect } from 'react'
import './AboutPage.css'

const SECTIONS = [
  { id: 'profile', label: 'Company profile' },
  { id: 'history', label: 'Our history' },
  { id: 'leadership', label: 'Executive team' },
  { id: 'governance', label: 'Board & governance' },
]

const PILLARS = [
  {
    num: '01',
    title: 'Disciplined Capital',
    desc: 'Privately held, patiently funded, and free to take positions measured in decades.',
  },
  {
    num: '02',
    title: 'Operating Depth',
    desc: 'We hold operating businesses, not passive stakes — leadership sits inside the work.',
  },
  {
    num: '03',
    title: 'Compounding Structure',
    desc: "Each subsidiary strengthens the others' offer, delivery capacity and credibility.",
  },
  {
    num: '04',
    title: 'Governed Growth',
    desc: 'Expansion passes through board oversight, legal review and defined risk appetite.',
  },
]

const MILESTONES = [
  {
    year: '2016',
    headline: 'Foundation laid',
    text: "The first operating business is established in Nairobi, setting the group's delivery culture.",
  },
  {
    year: '2018',
    headline: 'Legal practice formalised',
    text: 'DLTOO Advocates brings advisory and governance capability in-house.',
  },
  {
    year: '2020',
    headline: 'Connectivity licensed',
    text: 'JEMNET begins operating as a licensed ISP, building owned fiber infrastructure.',
  },
  {
    year: '2022',
    headline: 'Institutional platforms',
    text: 'SILDA EduTech scales MyLOFT, RemoteXs and RFID automation across academic institutions.',
  },
  {
    year: '2024',
    headline: 'Regional expansion',
    text: "Extending the group's infrastructure and platform capability across East Africa.",
  },
]

const EXECUTIVES = [
  {
    id: 'nn',
    initials: 'NN',
    name: 'Chairman of the Board',
    role: 'CHAIRMAN',
    bio: 'Sets group strategy and chairs the board, holding each subsidiary to a single standard of governance and long-term intent.',
    badges: ['GOVERNANCE', 'NOMINATIONS'],
  },
  {
    id: 'ce',
    initials: 'CE',
    name: 'Group CEO',
    role: 'CHIEF EXECUTIVE OFFICER',
    bio: 'Leads group operations and capital allocation, and is accountable for the performance of all four operating businesses.',
    badges: ['EXECUTIVE', 'RISK'],
  },
]

const DIRECTORS = [
  {
    id: 'gl',
    initials: 'GL',
    name: 'Legal & Compliance',
    role: 'GROUP LEGAL COUNSEL',
    bio: "Owns the group's legal position, regulatory compliance and contracting standards.",
    badges: ['GOVERNANCE', 'AUDIT'],
  },
  {
    id: 'gf',
    initials: 'GF',
    name: 'Finance & Reporting',
    role: 'GROUP FINANCE',
    bio: 'Directs financial reporting, treasury discipline and investment appraisal across the portfolio.',
    badges: ['AUDIT', 'RISK'],
  },
  {
    id: 'gt',
    initials: 'GT',
    name: 'Technology & Delivery',
    role: 'GROUP TECHNOLOGY',
    bio: 'Aligns engineering and infrastructure capability across JEMNET, Pentapath and SILDA.',
    badges: ['EXECUTIVE'],
  },
  {
    id: 'nd',
    initials: 'ND',
    name: 'Independent Director',
    role: 'NON-EXECUTIVE DIRECTOR',
    bio: 'Provides independent challenge on strategy, risk appetite and governance practice.',
    badges: ['AUDIT', 'NOMINATIONS'],
  },
]

const GOVERNANCE_PRINCIPLES = [
  {
    title: 'Separation of duties',
    desc: 'Board oversight, executive management and legal review are held by distinct mandates.',
  },
  {
    title: 'Committee structure',
    desc: 'Audit, Risk, Governance and Nominations committees meet on a fixed calendar.',
  },
  {
    title: 'Documented decisions',
    desc: 'Material decisions are minuted, reviewed and traceable to a mandate.',
  },
  {
    title: 'Independent challenge',
    desc: 'Non-executive voices are built into the board, not consulted after the fact.',
  },
]

// Custom geometric background watermarks corresponding to member roles
function AvatarWatermark({ id }) {
  switch (id) {
    case 'nn':
      // Chess Rook / Castle Fortress geometry
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M10 38h28M14 38V22l4-4h12l4 4v16M14 14v-4h5v4h6v-4h5v4h4v8l-4 4H18l-4-4v-8h-4z" />
          <path d="M20 26h8v12h-8z" />
        </svg>
      )
    case 'ce':
      // Crown / Chess Queen geometry
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M8 38h32M10 34l3-20 8 10 3-14 3 14 8-10 3 20H10z" />
          <circle cx="24" cy="8" r="2" />
          <circle cx="13" cy="12" r="1.8" />
          <circle cx="35" cy="12" r="1.8" />
        </svg>
      )
    case 'gl':
      // Scales of Justice / Classical Pillar geometry
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M24 8v32M12 40h24M10 16l14-4 14 4M10 16l-4 12h8l-4-12zM38 16l-4 12h8l-4-12z" />
        </svg>
      )
    case 'gf':
      // Finance / Treasury Vault geometry
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="10" y="10" width="28" height="28" rx="2" />
          <circle cx="24" cy="24" r="8" />
          <path d="M24 16v16M16 24h16M10 24h6M32 24h6" />
        </svg>
      )
    case 'gt':
      // Tech Network / Digital Matrix geometry
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="18" y="18" width="12" height="12" />
          <path d="M24 6v12M24 30v12M6 24h12M30 24h12M12 12l6 6M30 30l6 6M12 36l6-6M30 18l6-6" />
        </svg>
      )
    case 'nd':
      // Governance Compass / Sovereign Star geometry
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="24" cy="24" r="16" />
          <polygon points="24,10 27,21 38,24 27,27 24,38 21,27 10,24 21,21" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="24" cy="24" r="16" />
        </svg>
      )
  }
}

function AvatarMonogram({ id, initials }) {
  return (
    <div className="about-avatar-box" aria-hidden="true">
      <div className="about-avatar-box__watermark">
        <AvatarWatermark id={id} />
      </div>
      <span className="about-avatar-box__initials">{initials}</span>
      <div className="about-avatar-box__accent" />
    </div>
  )
}

function AboutPage({ initialSection = 'profile' }) {
  const [activeSection, setActiveSection] = useState(initialSection)

  // Scroll to initial section on load if given
  useEffect(() => {
    const hash = window.location.hash
    let target = initialSection
    if (hash.includes('history')) target = 'history'
    else if (hash.includes('leadership') || hash.includes('executive')) target = 'leadership'
    else if (hash.includes('governance') || hash.includes('board')) target = 'governance'
    else if (hash.includes('profile')) target = 'profile'

    setActiveSection(target)
    const el = document.getElementById(target)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
  }, [initialSection])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionId = SECTIONS[i].id
        const el = document.getElementById(sectionId)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setActiveSection(id)
    window.history.replaceState(null, '', `#about#${id}`)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="about-page-root">
      <div className="about-page-layout">
        {/* Sticky Left Sidebar Navigation */}
        <aside className="about-sidebar" aria-label="On this page navigation">
          <div className="about-sidebar__label">ON THIS PAGE</div>
          <nav className="about-sidebar__nav">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                className={`about-sidebar__link ${
                  activeSection === sec.id ? 'about-sidebar__link--active' : ''
                }`}
                onClick={() => scrollTo(sec.id)}
              >
                {sec.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Column */}
        <main className="about-main-content">
          {/* SECTION 01: Profile */}
          <section id="profile" className="about-section">
            <div className="about-section__eyebrow">
              <span className="about-section__eyebrow-dash" aria-hidden="true" />
              <span>01 — PROFILE</span>
            </div>
            <h1 className="about-section__title">
              A privately held group, built to operate.
            </h1>

            <div className="about-profile__copy">
              <p className="about-profile__p">
                NuruNexus Holdings Ltd is a diversified investment holding company
                headquartered in Nairobi. The group owns and operates four
                businesses — DLTOO Advocates, SILDA EduTech, JEMNET and Pentapath
                Group — across legal advisory, academic infrastructure,
                connectivity and software engineering.
              </p>
              <p className="about-profile__p">
                We hold operating companies, not passive stakes. Each subsidiary
                runs with its own leadership and its own market discipline; the
                holding company sets strategy, allocates capital, and holds the
                governance standard constant across all four.
              </p>
              <p className="about-profile__p">
                Being privately held is deliberate. It lets the group take
                positions measured in decades — owned infrastructure, institutional
                relationships and long-cycle platforms — rather than in quarters.
              </p>
            </div>

            {/* 2x2 Architectural Grid */}
            <div className="about-pillar-grid">
              {PILLARS.map((pillar) => (
                <div key={pillar.num} className="about-pillar-cell">
                  <span className="about-pillar-cell__num">{pillar.num}</span>
                  <h3 className="about-pillar-cell__title">{pillar.title}</h3>
                  <p className="about-pillar-cell__desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 02: History */}
          <section id="history" className="about-section">
            <div className="about-section__eyebrow">
              <span className="about-section__eyebrow-dash" aria-hidden="true" />
              <span>02 — HISTORY</span>
            </div>
            <h2 className="about-section__title">Journey &amp; milestones.</h2>

            <div className="about-timeline">
              {MILESTONES.map((item, index) => (
                <div key={item.year} className="about-timeline__item">
                  <div className="about-timeline__rail">
                    <div className="about-timeline__marker" aria-hidden="true" />
                    {index < MILESTONES.length - 1 && (
                      <div className="about-timeline__line" aria-hidden="true" />
                    )}
                  </div>
                  <div className="about-timeline__body">
                    <div className="about-timeline__year">{item.year}</div>
                    <h3 className="about-timeline__headline">{item.headline}</h3>
                    <p className="about-timeline__text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 03: Leadership */}
          <section id="leadership" className="about-section">
            <div className="about-section__eyebrow">
              <span className="about-section__eyebrow-dash" aria-hidden="true" />
              <span>03 — LEADERSHIP</span>
            </div>
            <h2 className="about-section__title">Executive team.</h2>

            <div className="about-cards-grid">
              {EXECUTIVES.map((exec) => (
                <article key={exec.id} className="about-member-card">
                  <AvatarMonogram id={exec.id} initials={exec.initials} />
                  <div className="about-member-card__header">
                    <h3 className="about-member-card__name">{exec.name}</h3>
                    <span className="about-member-card__role">{exec.role}</span>
                  </div>
                  <p className="about-member-card__bio">{exec.bio}</p>
                  <div className="about-member-card__badges">
                    {exec.badges.map((badge) => (
                      <span key={badge} className="about-pill-tag">
                        <span className="about-pill-tag__dot" aria-hidden="true" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* SECTION 04: Board & Governance */}
          <section id="governance" className="about-section">
            <div className="about-section__eyebrow">
              <span className="about-section__eyebrow-dash" aria-hidden="true" />
              <span>04 — BOARD &amp; GOVERNANCE</span>
            </div>
            <h2 className="about-section__title">Board of directors.</h2>

            <div className="about-cards-grid">
              {DIRECTORS.map((dir) => (
                <article key={dir.id} className="about-member-card">
                  <AvatarMonogram id={dir.id} initials={dir.initials} />
                  <div className="about-member-card__header">
                    <h3 className="about-member-card__name">{dir.name}</h3>
                    <span className="about-member-card__role">{dir.role}</span>
                  </div>
                  <p className="about-member-card__bio">{dir.bio}</p>
                  <div className="about-member-card__badges">
                    {dir.badges.map((badge) => (
                      <span key={badge} className="about-pill-tag">
                        <span className="about-pill-tag__dot" aria-hidden="true" />
                        {badge}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {/* 2x2 Governance Principles Box */}
            <div className="about-gov-principles">
              {GOVERNANCE_PRINCIPLES.map((principle) => (
                <div key={principle.title} className="about-gov-principles__cell">
                  <h3 className="about-gov-principles__title">{principle.title}</h3>
                  <p className="about-gov-principles__desc">{principle.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default AboutPage
