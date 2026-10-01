import { useState, useRef, useEffect, startTransition } from 'react'
import { BishopPiece, RookPiece, KnightPiece, QueenPiece } from './pages/PortfolioPage'

export const boardCompanies = [
  {
    id: 'dltoo',
    indexText: '01 / 04',
    coordinate: 'C1',
    piece: 'bishop',
    pieceName: 'Bishop',
    sector: 'LEGAL ADVISORY & CORPORATE GOVERNANCE',
    name: 'DLTOO Advocates',
    label: 'C1 · DLTOO ADVOCATES',
    tagline: 'Counsel that moves on the diagonal — precise, far-sighted, unblocked.',
    description:
      'Legal advisory and corporate governance for institutions that cannot afford ambiguity.',
    discipline: 'Law',
    roleInGroup: 'Governance spine',
    base: 'Nairobi',
    logoImage: '/logos/dltoo-white.png',
    website: 'https://dltooadvocates.org',
    PieceComponent: BishopPiece,
  },
  {
    id: 'silda',
    indexText: '02 / 04',
    coordinate: 'A1',
    piece: 'rook',
    pieceName: 'Rook',
    sector: 'ACADEMIC & LIBRARY INFRASTRUCTURE',
    name: 'SILDA EduTech',
    label: 'A1 · SILDA EDUTECH',
    tagline: 'The foundation piece — steady, structural, holding the knowledge base open.',
    description:
      'Academic and library infrastructure: MyLOFT, RemoteXs and RFID library automation.',
    discipline: 'EduTech & Infrastructure',
    roleInGroup: 'Academic infrastructure',
    base: 'Nairobi',
    logoImage: '/logos/silda-white.png',
    website: 'https://silda.co.ke',
    PieceComponent: RookPiece,
  },
  {
    id: 'jemnet',
    indexText: '03 / 04',
    coordinate: 'B1',
    piece: 'knight',
    pieceName: 'Knight',
    sector: 'CONNECTIVITY & TURNKEY ICT',
    name: 'JEMNET',
    label: 'B1 · JEMNET',
    tagline: "The knight's move — reaching places a straight line cannot.",
    description:
      'Licensed ISP delivering fiber connectivity and turnkey ICT infrastructure.',
    discipline: 'Connectivity & ICT',
    roleInGroup: 'Connectivity backbone',
    base: 'Nairobi',
    logoImage: '/logos/jemnet-white.png',
    website: 'https://jemnet.co.ke',
    PieceComponent: KnightPiece,
  },
  {
    id: 'pentapath',
    indexText: '04 / 04',
    coordinate: 'D1',
    piece: 'queen',
    pieceName: 'Queen',
    sector: 'SOFTWARE ENGINEERING & AUTOMATION',
    name: 'Pentapath Group',
    label: 'D1 · PENTAPATH GROUP',
    tagline: 'The piece the whole position protects — systems everything else runs on.',
    description:
      'Software engineering, RFID and biometric automation, and cloud platform delivery.',
    discipline: 'Software & RFID Systems',
    roleInGroup: 'Digital architecture',
    base: 'Nairobi',
    logoImage: '/logos/pentapath-white.png',
    website: 'https://pentapath.co.ke',
    PieceComponent: QueenPiece,
  },
]

function TheBoard({ onNavigate }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const rafRef = useRef(null)

  const handleHoverPiece = (index) => {
    if (selectedIndex === index) return
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    rafRef.current = requestAnimationFrame(() => {
      startTransition(() => {
        setSelectedIndex(index)
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

  const active = boardCompanies[selectedIndex] || boardCompanies[0]

  const handleOpenCompany = () => {
    const slugMap = {
      dltoo: 'dltoo',
      silda: 'silda-edutech',
      jemnet: 'jemnet',
      pentapath: 'pentapath-group',
    }
    const targetSlug = slugMap[active.id] || active.id
    if (onNavigate) {
      onNavigate('portfolio', targetSlug)
    } else if (active.website) {
      window.open(active.website, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="board-section" id="the-board" aria-label="The Portfolio Board">
      <div className="board-container">
        {/* Section Header */}
        <header className="board-header">
          <div className="board-eyebrow">
            <span className="board-eyebrow__dash" aria-hidden="true" />
            <span className="board-eyebrow__text">THE PORTFOLIO</span>
          </div>

          <h2 className="board-title">The position, as it stands.</h2>

          <p className="board-subtitle">
            Select a piece to read its file. Each business holds its own square, its own mandate, and its own accountability to the board.
          </p>
        </header>

        {/* 2-Column Board Matrix Showcase */}
        <div className="board-layout">
          {/* Left Column: Adjacent Company Boxes Row + Label Strip */}
          <div className="board-selector-col">
            {/* The single row with adjacent boxes containing clean chess piece logos */}
            <div className="board-boxes-row" role="tablist" aria-label="Portfolio companies">
              {boardCompanies.map((company, index) => {
                const isCurrent = index === selectedIndex
                const PieceSvg = company.PieceComponent

                return (
                  <button
                    key={company.id}
                    id={`board-piece-tab-${company.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isCurrent}
                    aria-controls={`board-piece-panel-${company.id}`}
                    className={`board-box-cell ${isCurrent ? 'board-box-cell--active' : ''}`}
                    onClick={() => {
                      if (selectedIndex === index && onNavigate) {
                        handleOpenCompany()
                      } else {
                        setSelectedIndex(index)
                      }
                    }}
                    onMouseEnter={() => handleHoverPiece(index)}
                    onFocus={() => handleHoverPiece(index)}
                    title={`Click to inspect or open ${company.name}'s file`}
                    aria-label={`${company.name} (${company.coordinate})`}
                  >
                    <div className="board-box-cell__icon">
                      <PieceSvg mode="dark" />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Adjacent Coordinates & Labels Bar below the row of boxes */}
            <div className="board-labels-row" aria-hidden="true">
              {boardCompanies.map((company, index) => {
                const isCurrent = index === selectedIndex
                return (
                  <button
                    key={company.id}
                    type="button"
                    className={`board-label-item ${isCurrent ? 'board-label-item--active' : ''}`}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <span className="board-label-coord">{company.coordinate}</span>
                    <span className="board-label-sep">·</span>
                    <span className="board-label-text">{company.name.toUpperCase()}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Company Dossier Display (Matches Screenshot 2) */}
          <div className="board-dossier-col">
            <article
              id={`board-piece-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`board-piece-tab-${active.id}`}
              className="board-dossier-card"
              key={active.id}
            >
              {/* Sector / Index Tag */}
              <div className="board-dossier__index-tag">
                <span>{active.indexText} — {active.sector}</span>
              </div>

              {/* Company Title */}
              <h3 className="board-dossier__title">{active.name}</h3>

              {/* Tactical Mandate / Tagline */}
              <p className="board-dossier__tagline">{active.tagline}</p>

              {/* Operational Description */}
              <p className="board-dossier__desc">{active.description}</p>

              {/* Spec Meta Grid: 3 Boxes */}
              <div className="board-dossier__specs">
                <div className="board-spec-box">
                  <span className="board-spec-box__label">DISCIPLINE</span>
                  <strong className="board-spec-box__value">{active.discipline}</strong>
                </div>

                <div className="board-spec-box">
                  <span className="board-spec-box__label">ROLE IN GROUP</span>
                  <strong className="board-spec-box__value">{active.roleInGroup}</strong>
                </div>

                <div className="board-spec-box">
                  <span className="board-spec-box__label">BASE</span>
                  <strong className="board-spec-box__value">{active.base}</strong>
                </div>
              </div>

              {/* Actions */}
              <div className="board-dossier__actions">
                <button
                  type="button"
                  onClick={handleOpenCompany}
                  className="board-dossier__btn"
                  id={`open-file-${active.id}`}
                >
                  <span>OPEN THE FILE</span>
                  <svg
                    width="14"
                    height="14"
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

                {active.website && (
                  <a
                    href={active.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="board-dossier__btn-subtle"
                    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    title={`Visit ${active.name} official website`}
                  >
                    <span>VISIT WEBSITE</span>
                    <svg
                      width="12"
                      height="12"
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
                )}

                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate('portfolio')}
                    className="board-dossier__btn-subtle"
                  >
                    <span>View all holdings</span>
                  </button>
                )}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheBoard
