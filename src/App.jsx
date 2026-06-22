import { portfolioData } from './data/portfolioData'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import StaffRoles from './components/StaffRoles'
import SpecializedSkills from './components/SpecializedSkills'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav brandImage={portfolioData.hero.profileImage} items={portfolioData.navItems} />
      <main>
        <Hero hero={portfolioData.hero} />
        <About about={portfolioData.about} />
        <StaffRoles currentRoles={portfolioData.currentRoles} pastRoles={portfolioData.pastRoles} />
        <SpecializedSkills skills={portfolioData.specializedSkills} />
        <Gallery
          gallery={portfolioData.gallery}
          intro={portfolioData.galleryIntro}
        />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer />
    </>
  )
}
