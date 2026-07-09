import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav({ brandImage, items }) {
  const [activeItem, setActiveItem] = useState(items[0]?.href ?? '#home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sectionJumpTimer = useRef()

  const triggerSectionJump = () => {
    setIsMenuOpen(false)
    document.documentElement.classList.add('section-jump-active')
    window.clearTimeout(sectionJumpTimer.current)
    sectionJumpTimer.current = window.setTimeout(() => {
      document.documentElement.classList.remove('section-jump-active')
    }, 850)
  }

  useEffect(() => {
    let scrollFrame
    const sectionIds = items
      .map((item) => item.href.replace('#', ''))
      .filter(Boolean)

    const handleScroll = () => {
      const activationOffset = Math.max(180, window.innerHeight * 0.2)
      setIsScrolled(window.scrollY > 28)
      const current = sectionIds.findLast((id) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= activationOffset
      })

      if (current) {
        setActiveItem(`#${current}`)
      }
    }

    const scheduleHandleScroll = () => {
      window.cancelAnimationFrame(scrollFrame)
      scrollFrame = window.requestAnimationFrame(handleScroll)
    }

    handleScroll()
    const initialAnchorCheck = window.setTimeout(handleScroll, 250)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', scheduleHandleScroll)

    return () => {
      window.clearTimeout(initialAnchorCheck)
      window.clearTimeout(sectionJumpTimer.current)
      window.cancelAnimationFrame(scrollFrame)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', scheduleHandleScroll)
    }
  }, [items])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className={`${isScrolled ? 'site-header is-scrolled' : 'site-header'}${isMenuOpen ? ' is-menu-open' : ''}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Glitch portfolio home" onClick={triggerSectionJump}>
          <span className="brand-mark">
            <img alt="" src={brandImage.src} />
          </span>
          <span>Glitch</span>
        </a>
        <button
          aria-controls="primary-navigation-links"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="nav-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div className={isMenuOpen ? 'nav-links is-open' : 'nav-links'} id="primary-navigation-links">
          {items.map((item) => (
            <a
              className={activeItem === item.href ? 'nav-link is-active' : 'nav-link'}
              href={item.href}
              key={item.href}
              onClick={triggerSectionJump}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
