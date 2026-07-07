export default function Experience({ items }) {
  return (
    <section className="section-band section-band-muted" id="experience">
      <div className="section-inner experience-layout">
        <div className="section-heading">
          <p className="eyebrow">About me</p>
          <h2>What I Spend Time On</h2>
          <p>
            Some of the things I have worked on and the areas I keep coming back to.
          </p>
        </div>
        <ol className="experience-list">
          {items.map((item, index) => (
            <li
              key={item}
              style={{ '--experience-delay': `${index * 70}ms`, '--experience-index': index }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
