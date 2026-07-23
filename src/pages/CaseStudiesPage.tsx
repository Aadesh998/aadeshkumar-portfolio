import { useEffect } from 'react'
import { useLocation } from 'react-router'
import Nav from '../sections/Nav'
import CaseStudies from '../sections/CaseStudies'
import Footer from '../sections/Footer'

export default function CaseStudiesPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <div className="min-h-screen bg-[#121212]">
      <Nav />
      <CaseStudies />
      <Footer />
    </div>
  )
}
