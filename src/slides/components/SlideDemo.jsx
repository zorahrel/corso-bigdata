export function SlideDemo({ heading, description, badgeText = 'DEMO LIVE' }) {
  return (
    <section className="slide-demo">
      <span className="demo-badge"><span className="dot"></span> {badgeText}</span>
      <h2>{heading}</h2>
      {description && <p className="demo-description" dangerouslySetInnerHTML={{ __html: description }} />}
    </section>
  )
}
