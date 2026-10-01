import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TheBoard from './components/TheBoard'
import WhatGovernsUs from './components/WhatGovernsUs'
import StrategicPillars from './components/StrategicPillars'
import HomeJourney from './components/HomeJourney'
import Footer from './components/Footer'

// Dedicated Subpages
import AboutPage from './components/pages/AboutPage'
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
    image: '/logos/dltoo.png',
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
    image: '/logos/silda.png',
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
    image: '/logos/jemnet.png',
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
    image: '/logos/pentapath.png',
    website: 'https://pentapath.co.ke',
    ctaText: 'EXPLORE PENTAPATH',
  },
]

const VALID_PAGES = [
  'home',
  'about',
  'company-profile',
  'our-history',
  'executive-team',
  'board-of-directors',
  'portfolio',
  'contact',
]

const ABOUT_ALIASES = [
  'about',
  'profile',
  'history',
  'leadership',
  'governance',
  'company-profile',
  'our-history',
  'executive-team',
  'board-of-directors',
]

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const rawHash = window.location.hash.replace(/^#/, '')
    const mainKey = rawHash.split('#')[0].split('/')[0]
    if (ABOUT_ALIASES.includes(mainKey)) return 'about'
    if (rawHash.startsWith('portfolio')) return 'portfolio'
    return VALID_PAGES.includes(mainKey) ? mainKey : 'home'
  })

  const [initialAboutSection, setInitialAboutSection] = useState(() => {
    const rawHash = window.location.hash.replace(/^#/, '')
    if (rawHash.includes('history')) return 'history'
    if (rawHash.includes('leadership') || rawHash.includes('executive')) return 'leadership'
    if (rawHash.includes('governance') || rawHash.includes('board')) return 'governance'
    return 'profile'
  })

  const [portfolioCompanyId, setPortfolioCompanyId] = useState(() => {
    const rawHash = window.location.hash.replace(/^#/, '')
    if (rawHash.startsWith('portfolio/')) {
      return rawHash.replace('portfolio/', '')
    }
    if (rawHash.startsWith('portfolio-')) {
      return rawHash.replace('portfolio-', '')
    }
    return null
  })

  // Listen to browser hash changes (back / forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#/, '')
      const parts = rawHash.split('#')
      const mainKey = parts[0].split('/')[0]
      const subKey = parts[1] || ''

      if (rawHash.startsWith('portfolio')) {
        setCurrentPage('portfolio')
        const companyPart = rawHash.replace(/^portfolio\/?/, '').replace(/^portfolio-/, '')
        setPortfolioCompanyId(companyPart || null)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if (ABOUT_ALIASES.includes(mainKey)) {
        setCurrentPage('about')
        const targetSection =
          subKey ||
          (mainKey === 'history' || mainKey === 'our-history'
            ? 'history'
            : mainKey === 'leadership' || mainKey === 'executive-team'
            ? 'leadership'
            : mainKey === 'governance' || mainKey === 'board-of-directors'
            ? 'governance'
            : 'profile')
        setInitialAboutSection(targetSection)
        setTimeout(() => {
          const el = document.getElementById(targetSection)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      } else if (VALID_PAGES.includes(mainKey)) {
        setCurrentPage(mainKey)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (!mainKey || mainKey === 'top') {
        setCurrentPage('home')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page, anchor) => {
    if (page === 'portfolio') {
      setCurrentPage('portfolio')
      setPortfolioCompanyId(anchor || null)
      window.location.hash = anchor ? `portfolio/${anchor}` : 'portfolio'
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (ABOUT_ALIASES.includes(page)) {
      setCurrentPage('about')
      const targetAnchor =
        anchor ||
        (page === 'history' || page === 'our-history'
          ? 'history'
          : page === 'leadership' || page === 'executive-team'
          ? 'leadership'
          : page === 'governance' || page === 'board-of-directors'
          ? 'governance'
          : 'profile')

      setInitialAboutSection(targetAnchor)
      window.location.hash = `about#${targetAnchor}`
      setTimeout(() => {
        const el = document.getElementById(targetAnchor)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
      return
    }

    setCurrentPage(page)
    window.location.hash = page === 'home' ? '' : page
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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
            <Hero onNavigate={handleNavigate} />
            <TheBoard onNavigate={handleNavigate} />
            <WhatGovernsUs onNavigate={handleNavigate} />
            <StrategicPillars onNavigate={handleNavigate} />
            <HomeJourney onNavigate={handleNavigate} />
          </>
        )}

        {(currentPage === 'about' ||
          currentPage === 'company-profile' ||
          currentPage === 'our-history' ||
          currentPage === 'executive-team' ||
          currentPage === 'board-of-directors') && (
          <AboutPage
            initialSection={initialAboutSection}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            initialCompanyId={portfolioCompanyId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App