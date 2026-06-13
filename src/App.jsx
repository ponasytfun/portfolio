import { portfolioData } from './data/portfolioData'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav items={portfolioData.navItems} />
      <main>
        <Hero hero={portfolioData.hero} />
        <Projects projects={portfolioData.projects} />
        <Gallery
          gallery={portfolioData.gallery}
        />
        <Skills skillGroups={portfolioData.skillGroups} />
        <Experience items={portfolioData.experience} />
        <Contact contacts={portfolioData.contacts} />
      </main>
      <Footer />
    </>
  )
}
