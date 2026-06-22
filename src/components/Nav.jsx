import { useEffect, useState } from 'react'

export default function Nav({ brandImage, items }) {
  const [activeItem, setActiveItem] = useState(items[0]?.href ?? '#home')

  useEffect(() => {
    const sectionIds = items
      .map((item) => item.href.replace('#', ''))
      .filter(Boolean)

    const handleScroll = () => {
      const activationOffset = Math.max(180, window.innerHeight * 0.2)
      const current = sectionIds.findLast((id) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= activationOffset
      })

      if (current) {
        setActiveItem(`#${current}`)
      }
    }

    const scheduleHandleScroll = () => window.requestAnimationFrame(handleScroll)

    handleScroll()
    const initialAnchorCheck = window.setTimeout(handleScroll, 250)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('hashchange', scheduleHandleScroll)

    return () => {
      window.clearTimeout(initialAnchorCheck)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', scheduleHandleScroll)
    }
  }, [items])

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Glitch portfolio home">
          <span className="brand-mark">
            <img alt="" src={brandImage.src} />
          </span>
          <span>Glitch</span>
        </a>
        <div className="nav-links">
          {items.map((item) => (
            <a
              className={activeItem === item.href ? 'nav-link is-active' : 'nav-link'}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
