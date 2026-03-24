import { QrButton } from '../../components/QrOverlay'

export function SlideFooter({ lessonTitle, currentIndex, totalSlides }) {
  return (
    <div className="slide-footer">
      <div className="footer-logos">
        <QrButton size={28} className="footer-qr-btn" />
        <img src="/slides/assets/its-academy-large.png" alt="ITS Academy" />
        <img src="/slides/assets/skills-it.png" alt="Skills.it" />
      </div>
      <div className="footer-center">
        <span className="footer-lesson">{lessonTitle}</span>
        <span className="footer-page">{currentIndex + 1} / {totalSlides}</span>
      </div>
      <span className="footer-text">Big Data &amp; AI &middot; Attilio Cianci</span>
    </div>
  )
}
