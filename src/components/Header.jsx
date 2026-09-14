import logo from '../assets/nuru-logo.png'

function Header({ companies, activeCompany, onCompanySelect }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top" className="header__brand" aria-label="Nuru Nexus home">
          <img src={logo} alt="Nuru Nexus Holding Ltd" className="header__logo" />
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          <a href="#about">About us</a>
          <a href="#leadership">Leadership</a>

          <div className="header__dropdown">
            <button type="button" className="header__dropdown-toggle">
              Companies
            </button>
            <div className="header__dropdown-menu" aria-label="Company menu">
              {companies.map((company, index) => (
                <button
                  key={company.name}
                  type="button"
                  className={`header__dropdown-item ${
                    index === activeCompany ? 'header__dropdown-item--active' : ''
                  }`}
                  onClick={() => onCompanySelect(index)}
                >
                  {company.name}
                </button>
              ))}
            </div>
          </div>

          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header