import { useState, useEffect, useRef, startTransition } from 'react'
import { DltooLogo, SildaLogo, JemnetLogo, PentapathLogo } from '../CompanyLogos'
import './PortfolioPage.css'

// ============================================================================
// COMPANY BRAND LOGOS - Transparent & Brand Authentic (Replaces chess pieces)
// ============================================================================

export { DltooLogo, SildaLogo, JemnetLogo, PentapathLogo }

// Backward compatibility aliases
export const BishopPiece = DltooLogo
export const RookPiece = SildaLogo
export const KnightPiece = JemnetLogo
export const QueenPiece = PentapathLogo

// ============================================================================
// PORTFOLIO COMPANIES DATASET - Full Fidelity to Lovable Screenshots
// ============================================================================

export const PORTFOLIO_COMPANIES = [
  {
    id: 'dltoo',
    slug: 'dltoo',
    coordinate: 'C1',
    boardCol: 0,
    indexText: '01 / 04',
    name: 'DLTOO Advocates',
    sector: 'LEGAL ADVISORY & CORPORATE GOVERNANCE',
    sectorTitle: 'Legal Advisory & Corporate Governance',
    tagline: 'Counsel that moves on the diagonal — precise, far-sighted, unblocked.',
    description: 'Legal advisory and corporate governance for institutions that cannot afford ambiguity.',
    discipline: 'Legal Advisory',
    focusLabel: 'FOCUS',
    focusValue: 'Corporate & governance',
    base: 'Nairobi',
    website: 'https://dltooadvocates.org',
    overview: [
      'D.L.TOO & Company Advocates provides specialised corporate counsel, commercial dispute litigation, real estate conveyance, and regulatory advisory for modern enterprises.',
      "The practice acts as the group's legal and governance spine, ensuring that contracts, corporate actions, and statutory filings across all subsidiaries operate with institutional rigor.",
    ],
    motto: 'PRECISION. DISCIPLINE. FIDUCIARY RIGOR.',
    capabilities: [
      {
        title: 'Corporate & Commercial Advisory',
        desc: 'Strategic corporate counsel, board governance frameworks, and commercial contract drafting.',
      },
      {
        title: 'Litigation & Dispute Resolution',
        desc: 'Commercial dispute arbitration, court representation, and mediation across complex jurisdictions.',
      },
      {
        title: 'Real Estate & Conveyancing',
        desc: 'Property acquisition, institutional leasing, land registration, and securitisation.',
      },
      {
        title: 'Regulatory Compliance',
        desc: 'Statutory reporting, antitrust, licensing, and corporate secretarial management.',
      },
    ],
    pieceComponent: BishopPiece,
  },
  {
    id: 'silda',
    slug: 'silda-edutech',
    coordinate: 'A1',
    boardCol: 1,
    indexText: '02 / 04',
    name: 'SILDA EduTech',
    sector: 'ACADEMIC & LIBRARY INFRASTRUCTURE',
    sectorTitle: 'Academic & Library Infrastructure',
    tagline: 'The foundation piece — steady, structural, holding the knowledge base open.',
    description: 'Academic and library infrastructure: MyLOFT, RemoteXs and RFID library automation.',
    discipline: 'EduTech',
    focusLabel: 'SERVES',
    focusValue: 'Universities & libraries',
    base: 'Nairobi',
    website: 'https://silda.co.ke',
    overview: [
      'SILDA EduTech operates across academic and institutional infrastructure, delivering digital resource management and physical automation of the library floor.',
      'Deployments combine MyLOFT and RemoteXs remote-access platforms with RFID tagging, self-issue stations, security gates and inventory automation, delivered with training and long-term support.',
    ],
    motto: 'OPEN. ACCESSIBLE. BUILT FOR THE PEOPLE WHO USE THE LIBRARY AT MIDNIGHT.',
    capabilities: [
      {
        title: 'MyLOFT',
        desc: 'Off-campus access to subscribed e-resources with usage analytics.',
      },
      {
        title: 'RemoteXs',
        desc: 'Seamless remote authentication for library collections.',
      },
      {
        title: 'RFID Library Automation',
        desc: 'Tagging, self-service issue and return, security gates, stock verification.',
      },
      {
        title: 'Enablement',
        desc: 'Librarian training, migration support and ongoing technical care.',
      },
      
    ],
    pieceComponent: RookPiece,
  },
  {
    id: 'jemnet',
    slug: 'jemnet',
    coordinate: 'B1',
    boardCol: 2,
    indexText: '03 / 04',
    name: 'JEMNET',
    sector: 'CONNECTIVITY & TURNKEY ICT',
    sectorTitle: 'Connectivity & Turnkey ICT',
    tagline: "The knight's move — reaching places a straight line cannot.",
    description: 'Licensed ISP delivering fiber connectivity and turnkey ICT infrastructure.',
    discipline: 'Connectivity',
    focusLabel: 'SERVES',
    focusValue: 'Enterprises & broadband',
    base: 'Nairobi',
    website: 'https://jemnet.co.ke',
    overview: [
      'JEMNET is a licensed Internet Service Provider (ISP) building and operating owned optical fiber infrastructure across Nairobi and regional economic corridors.',
      'Services range from dedicated enterprise internet and structured local-area networking to smart surveillance, biometric access, and mission-critical communications.',
    ],
    motto: 'HIGH-CAPACITY. OWNED INFRASTRUCTURE. ZERO HOPS.',
    capabilities: [
      {
        title: 'Dedicated Enterprise Fiber',
        desc: 'Symmetric high-speed connectivity with guaranteed SLAs and redundant peering.',
      },
      {
        title: 'Turnkey Structured Networking',
        desc: 'Design, installation, and certification of optical and copper infrastructure.',
      },
      {
        title: 'Surveillance & Physical Security',
        desc: 'Enterprise CCTV, IP cameras, biometric access control, and turnstile systems.',
      },
      {
        title: 'Unified Communications',
        desc: 'Cloud PBX, voice telephony, and managed inter-branch connectivity.',
      },
    ],
    pieceComponent: KnightPiece,
  },
  {
    id: 'pentapath',
    slug: 'pentapath-group',
    coordinate: 'D1',
    boardCol: 3,
    indexText: '04 / 04',
    name: 'Pentapath Group',
    sector: 'SOFTWARE ENGINEERING & AUTOMATION',
    sectorTitle: 'Software Engineering & Automation',
    tagline: 'The piece the whole position protects — systems everything else runs on.',
    description: 'Software engineering, RFID and biometric automation, and cloud platform delivery.',
    discipline: 'Software',
    focusLabel: 'FOCUS',
    focusValue: 'Automation & cloud',
    base: 'Nairobi',
    website: 'https://pentapath.co.ke',
    overview: [
      'Pentapath Group builds the software layer of the group: custom platforms, integrations and automation systems for organisations modernising how they operate.',
      'Work spans bespoke application engineering, RFID and biometric identification systems, and cloud platform architecture — delivered with the engineering discipline that long-lived systems require.',
    ],
    motto: 'TECHNICAL. SHARP. DOCUMENTED.',
    capabilities: [
      {
        title: 'Software Engineering',
        desc: 'Custom platforms, integrations and modernisation programmes.',
      },
      {
        title: 'RFID & Biometrics',
        desc: 'Identification, access and asset-tracking automation.',
      },
      {
        title: 'Cloud Platforms',
        desc: 'Architecture, migration and operations for scalable workloads.',
      },
      {
        title: 'Systems Integration',
        desc: 'Connecting legacy estates to modern services.',
      },
    ],
    pieceComponent: QueenPiece,
  },
]

function PortfolioPage({ initialCompanyId, onNavigate }) {
  const [selectedCompanyId, setSelectedCompanyId] = useState(initialCompanyId || null)
  const [activeBoardIdx, setActiveBoardIdx] = useState(1) // Default to SILDA (idx 1) matching Screenshot 2
  const rafRef = useRef(null)

  const handleHoverPiece = (colIdx) => {
    if (activeBoardIdx === colIdx) return
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    rafRef.current = requestAnimationFrame(() => {
      startTransition(() => {
        setActiveBoardIdx(colIdx)
      })
    })
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  // Synchronize state with window.location.hash
  useEffect(() => {
    const rawHash = window.location.hash.replace(/^#/, '')
    if (rawHash.includes('portfolio/')) {
      const slug = rawHash.split('portfolio/')[1]
      const found = PORTFOLIO_COMPANIES.find(c => c.slug === slug || c.id === slug || slug.includes(c.id))
      if (found) {
        setSelectedCompanyId(found.id)
        window.scrollTo({ top: 0, behavior: 'instant' })
        return
      }
    } else if (rawHash.startsWith('portfolio-')) {
      const slug = rawHash.replace('portfolio-', '')
      const found = PORTFOLIO_COMPANIES.find(c => c.slug === slug || c.id === slug || slug.includes(c.id))
      if (found) {
        setSelectedCompanyId(found.id)
        window.scrollTo({ top: 0, behavior: 'instant' })
        return
      }
    } else if (rawHash === 'portfolio' || rawHash === '') {
      setSelectedCompanyId(null)
    }
    
    if (initialCompanyId) {
      const found = PORTFOLIO_COMPANIES.find(c => c.slug === initialCompanyId || c.id === initialCompanyId || initialCompanyId.includes(c.id))
      if (found) {
        setSelectedCompanyId(found.id)
      }
    }
  }, [initialCompanyId])

  const openCompany = (company) => {
    setSelectedCompanyId(company.id)
    window.location.hash = `portfolio/${company.slug}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const backToBoard = () => {
    setSelectedCompanyId(null)
    window.location.hash = 'portfolio'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeCompany = PORTFOLIO_COMPANIES[activeBoardIdx] || PORTFOLIO_COMPANIES[1]
  const currentDetailCompany = PORTFOLIO_COMPANIES.find(c => c.id === selectedCompanyId)

  // ==========================================================================
  // VIEW A: COMPANY DETAIL PAGE (Screenshots 3, 4, 5)
  // ==========================================================================
  if (currentDetailCompany) {
    const elsewhere = PORTFOLIO_COMPANIES.filter(c => c.id !== currentDetailCompany.id)
    const CurrentPieceSvg = currentDetailCompany.pieceComponent

    return (
      <div className="portfolio-root company-detail-page">
        {/* Top Dark Hero */}
        <section className="company-hero">
          <div className="portfolio-container">
            {/* Watermark header */}
            <div className="portfolio-watermark" aria-hidden="true">
              HOLDINGS LTD
            </div>

            {/* Breadcrumb back navigation */}
            <div className="company-hero-nav-bar">
              <button
                type="button"
                className="company-hero-back-btn"
                onClick={backToBoard}
              >
                <span className="portfolio-eyebrow__dash" aria-hidden="true" />
                <span>PORTFOLIO</span>
              </button>
            </div>

            <div className="company-hero-layout">
              <div className="company-hero-content">
                <div className="company-hero__category">
                  <span className="portfolio-eyebrow__dash" aria-hidden="true" />
                  <span>{currentDetailCompany.sector}</span>
                </div>

                <h1 className="company-hero__title">{currentDetailCompany.name}</h1>
                <p className="company-hero__tagline">{currentDetailCompany.tagline}</p>

                {/* 3-Column Meta Strip */}
                <div className="company-hero-meta">
                  <div className="company-hero-meta-item">
                    <span className="company-hero-meta-label">DISCIPLINE</span>
                    <span className="company-hero-meta-value">{currentDetailCompany.discipline}</span>
                  </div>
                  <div className="company-hero-meta-item">
                    <span className="company-hero-meta-label">{currentDetailCompany.focusLabel || 'FOCUS'}</span>
                    <span className="company-hero-meta-value">{currentDetailCompany.focusValue}</span>
                  </div>
                  <div className="company-hero-meta-item">
                    <span className="company-hero-meta-label">BASE</span>
                    <span className="company-hero-meta-value">{currentDetailCompany.base}</span>
                  </div>
                </div>

                {/* Action Buttons: VISIT WEBSITE (Requested) & RETURN TO BOARD */}
                <div className="company-hero-actions">
                  <a
                    href={currentDetailCompany.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-hero-visit-btn"
                    id={`visit-website-${currentDetailCompany.id}`}
                  >
                    <span>VISIT WEBSITE</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>

                  <button
                    type="button"
                    className="company-hero-board-btn"
                    onClick={backToBoard}
                  >
                    <span>← RETURN TO BOARD</span>
                  </button>
                </div>
              </div>

              {/* Giant Brand Logo on Right (Transparent, Crisp) */}
              <div className="company-hero-piece" aria-hidden="true">
                <CurrentPieceSvg mode="dark" className="company-hero-logo" preserveAspectRatio="xMidYMid meet" />
              </div>
            </div>
          </div>
        </section>

        {/* Clean White Overview & Capabilities Body */}
        <section className="company-body-section">
          <div className="portfolio-container">
            <div className="company-body-grid">
              {/* Left Column: Overview */}
              <div className="company-overview-col">
                <div className="company-col-heading">
                  <span className="portfolio-eyebrow__dash" aria-hidden="true" />
                  <span>OVERVIEW</span>
                </div>

                <div className="company-overview__copy">
                  {currentDetailCompany.overview.map((p, idx) => (
                    <p key={idx} className="company-overview__p">{p}</p>
                  ))}
                  <div className="company-overview__motto">{currentDetailCompany.motto}</div>
                </div>
              </div>

              {/* Right Column: Capabilities */}
              <div className="company-capabilities-col">
                <div className="company-col-heading">
                  <span className="portfolio-eyebrow__dash" aria-hidden="true" />
                  <span>CAPABILITIES</span>
                </div>

                <div className="company-capabilities-list">
                  {currentDetailCompany.capabilities.map((cap) => (
                    <div key={cap.title} className="company-capability-card">
                      <h3 className="company-capability-title">{cap.title}</h3>
                      <p className="company-capability-desc">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Strip: ELSEWHERE ON THE BOARD (Warm Linen/Sand) */}
        <section className="company-elsewhere-section">
          <div className="portfolio-container">
            <div className="company-col-heading">
              <span className="portfolio-eyebrow__dash" aria-hidden="true" />
              <span>ELSEWHERE ON THE BOARD</span>
            </div>

            <div className="company-elsewhere-grid">
              {elsewhere.map((comp) => {
                const CompPiece = comp.pieceComponent
                return (
                  <button
                    key={comp.id}
                    type="button"
                    className="company-elsewhere-card"
                    onClick={() => openCompany(comp)}
                  >
                    <div className="company-elsewhere-icon">
                      <CompPiece mode="light" preserveAspectRatio="xMidYMid meet" />
                    </div>
                    <h3 className="company-elsewhere-name">{comp.name}</h3>
                    <span className="company-elsewhere-sector">{comp.sectorTitle || comp.sector}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    )
  }

  // ==========================================================================
  // VIEW B: MAIN PORTFOLIO PAGE: 1-ROW BOARD WITH BRAND LOGOS (Screenshot 2)
  // ==========================================================================
  return (
    <div className="portfolio-root">
      {/* 1. Dark Showcase Section: 1 ROW of 4 boxes with clean brand logos */}
      <section className="portfolio-hero-section">
        <div className="portfolio-container">
          <div className="portfolio-watermark" aria-hidden="true">
            HOLDINGS LTD
          </div>

          <div className="portfolio-eyebrow">
            <span className="portfolio-eyebrow__dash" aria-hidden="true" />
            <span>PORTFOLIO</span>
          </div>

          <h1 className="portfolio-main-title">Four mandates on one board.</h1>

          <div className="portfolio-board-layout">
            {/* Left: 1 ROW OF THE 4 COMPANY BOXES WITH PURE BRAND LOGOS */}
            <div className="portfolio-chessboard-row" role="tablist" aria-label="Portfolio companies">
              {PORTFOLIO_COMPANIES.map((company, colIdx) => {
                const isSelected = activeBoardIdx === colIdx
                const PieceComponent = company.pieceComponent

                return (
                  <button
                    key={company.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`portfolio-piece-box ${isSelected ? 'portfolio-piece-box--active' : ''}`}
                    onClick={() => openCompany(company)}
                    onMouseEnter={() => handleHoverPiece(colIdx)}
                    onFocus={() => handleHoverPiece(colIdx)}
                    title={`Click to open ${company.name}'s page`}
                    aria-label={`${company.name} (${company.coordinate})`}
                  >
                    <div className="portfolio-piece-box__icon">
                      <PieceComponent mode="dark" preserveAspectRatio="xMidYMid meet" />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right: Company preview dossier & actions */}
            <div className="portfolio-preview-col">
              <div className="portfolio-preview__index">
                <span>{activeCompany.indexText}</span>
                <span>—</span>
                <span>{activeCompany.sector}</span>
              </div>

              <h2 className="portfolio-preview__name">{activeCompany.name}</h2>
              <p className="portfolio-preview__tagline">{activeCompany.tagline}</p>
              <p className="portfolio-preview__desc">{activeCompany.description}</p>

              {/* 3-Column Metadata Strip */}
              <div className="portfolio-meta-strip">
                <div className="portfolio-meta-item">
                  <span className="portfolio-meta-label">DISCIPLINE</span>
                  <span className="portfolio-meta-value">{activeCompany.discipline}</span>
                </div>
                <div className="portfolio-meta-item">
                  <span className="portfolio-meta-label">{activeCompany.focusLabel || 'SERVES'}</span>
                  <span className="portfolio-meta-value">{activeCompany.focusValue}</span>
                </div>
                <div className="portfolio-meta-item">
                  <span className="portfolio-meta-label">BASE</span>
                  <span className="portfolio-meta-value">{activeCompany.base}</span>
                </div>
              </div>

              {/* Action Buttons: OPEN THE FILE & VISIT WEBSITE */}
              <div className="portfolio-preview-actions">
                <button
                  type="button"
                  className="portfolio-open-btn"
                  onClick={() => openCompany(activeCompany)}
                >
                  <span>OPEN THE FILE</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </button>

                <a
                  href={activeCompany.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-visit-link-btn"
                  title={`Visit ${activeCompany.name} official site`}
                >
                  <span>VISIT WEBSITE</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "THE FILES" List Section Below (Screenshot 1) */}
      <section className="portfolio-files-section">
        <div className="portfolio-container">
          <div className="portfolio-eyebrow">
            <span className="portfolio-eyebrow__dash" aria-hidden="true" />
            <span>THE FILES</span>
          </div>

          <div className="portfolio-files-list">
            {PORTFOLIO_COMPANIES.map((company, index) => {
              const RowPiece = company.pieceComponent
              return (
                <button
                  key={company.id}
                  type="button"
                  className={`portfolio-file-row ${activeBoardIdx === index ? 'portfolio-file-row--active' : ''}`}
                  onClick={() => openCompany(company)}
                >
                  <div className="portfolio-file-coord">{company.coordinate}</div>

                  <div className="portfolio-file-icon">
                    <RowPiece mode="light" preserveAspectRatio="xMidYMid meet" />
                  </div>

                  <div className="portfolio-file-identity">
                    <h3 className="portfolio-file-name">{company.name}</h3>
                    <span className="portfolio-file-sector">{company.sector}</span>
                  </div>

                  <p className="portfolio-file-desc">{company.description}</p>
                  <div className="portfolio-file-arrow" aria-hidden="true">→</div>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
