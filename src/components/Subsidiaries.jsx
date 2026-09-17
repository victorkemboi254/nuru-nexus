function Subsidiaries({ companies, activeCompany, onCompanySelect }) {
  const selectedCompany = companies[activeCompany]

  return (
    <section className="subs" id="subsidiaries">
      <h2 className="subs__title">Our companies</h2>

      <div className="subs__tabs" role="tablist" aria-label="Company tabs">
        {companies.map((company, index) => (
          <button
            key={company.name}
            id={`company-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={index === activeCompany}
            aria-controls={`company-panel-${index}`}
            className={`subs__tab ${index === activeCompany ? 'subs__tab--active' : ''}`}
            onClick={() => onCompanySelect(index)}
          >
            {company.name}
          </button>
        ))}
      </div>

      <div
        id={`company-panel-${activeCompany}`}
        className="subs__panel"
        role="tabpanel"
        aria-labelledby={`company-tab-${activeCompany}`}
      >
        <div className="subs__panel-inner">
          <span className="subs__index">0{activeCompany + 1}</span>
          <div className="subs__text">
            <h3>{selectedCompany.name}</h3>
            <p className="subs__line">{selectedCompany.line}</p>
            <p className="subs__detail">{selectedCompany.detail}</p>
            {selectedCompany.website && (
              <a
                href={selectedCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className="subs__website-btn"
              >
                <span>Visit {selectedCompany.name} Website</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subsidiaries