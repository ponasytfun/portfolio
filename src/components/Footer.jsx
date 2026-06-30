export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <p>Built by Glitch.</p>
        <div className="footer-links">
          <a href={`${import.meta.env.BASE_URL}website-explanation/index.html`}>Website details</a>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
