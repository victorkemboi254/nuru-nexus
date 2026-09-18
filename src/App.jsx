import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Leadership from './components/Leadership'
import HomeContactCta from './components/HomeContactCta'
import Footer from './components/Footer'

// Dedicated Subpages
import CompanyProfile from './components/pages/CompanyProfile'
import OurHistory from './components/pages/OurHistory'
import ExecutiveTeam from './components/pages/ExecutiveTeam'
import BoardOfDirectors from './components/pages/BoardOfDirectors'
import PortfolioPage from './components/pages/PortfolioPage'
import ContactPage from './components/pages/ContactPage'

import './App.css'

const companies = [
  {
    name: 'Dltoo',
    tabLabel: 'DLTOO',
    sector: 'LEGAL SERVICES',
    headline: 'Advancing Legal Excellence & Corporate Advisory',
    description:
      "Kenya's premier legal practice delivering strategic corporate counsel, commercial dispute litigation, real estate conveyance, and regulatory advisory for modern enterprises.",
    line: 'Provides legal and corporate advisory services.',
    detail:
      'A leading legal firm in Kenya that provides specialized corporate legal representation, commercial dispute resolution, compliance, and strategic advisory services.',
    image: '/dltoo.jpeg',
    website: 'https://dltooadvocates.org',
    ctaText: 'EXPLORE DLTOO',
  },
  {
    name: 'Silda',
    tabLabel: 'SILDA',
    sector: 'EDUTECH & INFRASTRUCTURE',
    headline: 'Empowering Knowledge Through Digital Infrastructure',
    description:
      'Specialized EduTech delivering remote-access platforms like MyLOFT and RemoteXs, RFID library automation, and research solutions for universities and institutions across Africa.',
    line: 'IT services and consulting company based in Nairobi.',
    detail:
      'Specializes in consultancy-based software development, RFID library automation, remote knowledge platforms (such as MyLOFT and RemoteXs), and digital academic infrastructure.',
    image: '/silda.jpg',
    website: 'https://silda.co.ke',
    ctaText: 'EXPLORE SILDA',
  },
  {
    name: 'Jemnet',
    tabLabel: 'JEMNET',
    sector: 'CONNECTIVITY & ICT',
    headline: 'Connecting Communities With Next-Gen Fiber',
    description:
      'Licensed Internet Service Provider delivering high-speed dedicated enterprise fiber, home broadband, CCTV surveillance, biometric access, and turnkey ICT solutions.',
    line: 'Licensed Internet Service Provider (ISP) and ICT solutions company.',
    detail:
      'Offers high-capacity dedicated fiber internet, structured cabling, smart security installations, PBX telephony, biometric access control, and modern web solutions.',
    image: '/jemnet.jpeg',
    website: 'https://jemnet.co.ke',
    ctaText: 'EXPLORE JEMNET',
  },
  {
    name: 'Pentapath',
    tabLabel: 'PENTAPATH',
    sector: 'SOFTWARE & RFID SYSTEMS',
    headline: 'Architecting Digital Solutions & Intelligent Automation',
    description:
      'Kenyan technology firm developing bespoke software architectures, advanced RFID tracking systems, biometric security gates, and cloud fintech solutions.',
    line: 'Technology company that develops software, RFID systems, and digital solutions.',
    detail:
      'Pentapath Group is a Kenyan technology company focusing on bespoke software engineering, RFID hardware integration, turnstile and access automation, and scalable digital architectures.',
    image: '/pentapath.jpeg',
    website: 'https://pentapath.co.ke',
    ctaText: 'EXPLORE PENTAPATH',
  },
]

const VALID_PAGES = [
  'home',
  'company-profile',
  'our-history',
  'executive-team',
  'board-of-directors',
  'portfolio',
  'contact',
]

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return VALID_PAGES.includes(hash) ? hash : 'home'
  })

  // Listen to browser hash changes (back / forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (!hash || hash === 'top' || hash === 'about' || hash === 'leadership') {
        setCurrentPage('home')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '' : page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site" id="top">
      <Header
        companies={companies}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main>
        {currentPage === 'home' && (
          <>
            <Hero companies={companies} />
            <About onNavigate={handleNavigate} />
            <Leadership onNavigate={handleNavigate} />
            <HomeContactCta onNavigate={handleNavigate} />
          </>
        )}

        {currentPage === 'company-profile' && (
          <CompanyProfile onNavigate={handleNavigate} />
        )}

        {currentPage === 'our-history' && (
          <OurHistory onNavigate={handleNavigate} />
        )}

        {currentPage === 'executive-team' && (
          <ExecutiveTeam onNavigate={handleNavigate} />
        )}

        {currentPage === 'board-of-directors' && (
          <BoardOfDirectors onNavigate={handleNavigate} />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App