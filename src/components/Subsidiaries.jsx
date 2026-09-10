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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subsidiaries