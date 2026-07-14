import { portfolioData } from './data/portfolioData'
import Hero from './components/Hero'
import About from './components/About'
import StaffRoles from './components/StaffRoles'
import SpecializedSkills from './components/SpecializedSkills'
import Contact from './components/Contact'
import PortfolioLoader from './components/PortfolioLoader'
import DiscordHero from './components/DiscordHero'
import useScrollReveal from './hooks/useScrollReveal'
import useCursorReactive from './hooks/useCursorReactive'
import useSectionSnap from './hooks/useSectionSnap'

export default function App() {
  useScrollReveal()
  useCursorReactive()
  useSectionSnap()

  return (
    <div
      className="site-shell"
      style={{ '--site-background': `url("${portfolioData.discordHero.backgroundImage.src}")` }}
    >
      <PortfolioLoader />
      <main>
        <DiscordHero contact={portfolioData.contact} discordHero={portfolioData.discordHero} />
        <Hero hero={portfolioData.hero} minecraft={portfolioData.minecraft} />
        <About about={portfolioData.about} />
        <StaffRoles availability={portfolioData.availability} pastRoles={portfolioData.pastRoles} />
        <SpecializedSkills intro={portfolioData.skillsIntro} skills={portfolioData.specializedSkills} />
        <Contact contact={portfolioData.contact} />
      </main>
    </div>
  )
}
