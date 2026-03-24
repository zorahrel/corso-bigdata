export function SlideTitle({ lessonNumber, title, subtitle, showLogos = true, style }) {
  return (
    <section className="slide-title" style={style}>
      {lessonNumber && <span className="lesson-number">Lezione {lessonNumber}</span>}
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {showLogos && (
        <div className="cover-logos">
          <img src="/slides/assets/its-academy-large.png" alt="ITS Academy" />
          <img src="/slides/assets/skills-it.png" alt="Skills.it" />
        </div>
      )}
    </section>
  )
}
