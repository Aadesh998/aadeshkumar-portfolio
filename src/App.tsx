import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import Marquee from './sections/Marquee'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Footer from './sections/Footer'
import FloatingCta from './sections/FloatingCta'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f3f1]">
      <Nav />
      <Hero />
      <Intro />
      <Marquee items={['Projects.', 'Experience.', 'Skills.']} />
      <Projects />
      <Experience />
      <Marquee items={['Go.', 'Python.', 'AWS.', 'GCP.', 'Docker.']} />
      <Skills />
      <Footer />
      <FloatingCta />
    </div>
  )
}
