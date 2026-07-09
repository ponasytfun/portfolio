import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <p><span>GLITCH</span> / Community operations portfolio</p>
        <a href="#home">Back to top <ArrowUp aria-hidden="true" size={14} /></a>
      </div>
    </footer>
  )
}
