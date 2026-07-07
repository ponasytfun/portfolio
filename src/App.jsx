import { portfolioData } from './data/portfolioData'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import StaffRoles from './components/StaffRoles'
import SpecializedSkills from './components/SpecializedSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PortfolioLoader from './components/PortfolioLoader'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <PortfolioLoader />
      <Nav brandImage={portfolioData.hero.profileImage} items={portfolioData.navItems} />
      <main>
        <Hero hero={portfolioData.hero} />
        <About about={portfolioData.about} />
        <StaffRoles featuredRoles={portfolioData.featuredRoles} pastRoles={portfolioData.pastRoles} />
        <SpecializedSkills skills={portfolioData.specializedSkills} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer />
    </>
  )
}
