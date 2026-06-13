import { useEffect, useState } from 'react'

export default function Gallery({ gallery }) {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    if (!activeImage) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeImage])

  return (
    <section className="section-band section-band-muted" id="screenshots">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Screenshots and previews</p>
          <h2>Gallery</h2>
          <p>
            A place for project captures, UI previews, plugin screens, and technical demos.
          </p>
        </div>

        {gallery.length > 0 ? (
          <div className="gallery-grid">
            {gallery.map((item) => (
              <button
                className="gallery-item"
                key={item.src}
                onClick={() => setActiveImage(item)}
                type="button"
              >
                <img alt={item.alt} loading="lazy" src={item.src} />
                <span>{item.caption}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {activeImage ? (
        <div
          aria-label="Screenshot preview"
          aria-modal="true"
          className="lightbox"
          onClick={() => setActiveImage(null)}
          role="dialog"
        >
          <button
            aria-label="Close screenshot preview"
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            type="button"
          >
            Close
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img alt={activeImage.alt} src={activeImage.src} />
            <figcaption>{activeImage.caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  )
}
