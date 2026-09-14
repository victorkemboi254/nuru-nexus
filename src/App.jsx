import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Leadership from './components/Leadership'
import Subsidiaries from './components/Subsidiaries'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const companies = [
  {
    name: 'Dltoo',
    line: 'Provides legal services.',
    detail:
      'This is a legal firm in Kenya that provides legal representation and advisory services.',
  },
  {
    name: 'Silda',
    line: 'IT services and consulting company based in Nairobi.',
    detail:
      'Specializes in consultancy-based software development and digital infrastructure. They provide specialized tools like Library Management Systems (such as MyLOFT and RemoteXs).',
  },
  {
    name: 'Jemnet',
    line: 'Licenced Internet Service Provider (ISP) and ICT solutions company.',
    detail:
      'Offers home and business fiber internet packages, CCTV installation, biometric access control, PBX systems, and web design.',
  },
  {
  name: 'Pentapath',
  line: 'technology company that develops software and digital solutions to help businesses and organizations improve their operations through modern technology.',
  detail: 'Pentapath Group is a Kenyan technology company based in Nairobi that focuses on software development, digital solutions, and technology services. The company works on areas such as web and mobile applications, backend systems, cloud technologies, and financial technology solutions.'
  }
]

function App() {
  const [activeCompany, setActiveCompany] = useState(0)

  const handleCompanySelect = (index) => {
    setActiveCompany(index)

    window.setTimeout(() => {
      const section = document.getElementById('subsidiaries')
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' })

      document
        .getElementById(`company-tab-${index}`)
        ?.focus({ preventScroll: true })
    }, 50)
  }

  return (
    <div className="site" id="top">
      <Header
        companies={companies}
        activeCompany={activeCompany}
        onCompanySelect={handleCompanySelect}
      />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Subsidiaries
          companies={companies}
          activeCompany={activeCompany}
          onCompanySelect={handleCompanySelect}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App