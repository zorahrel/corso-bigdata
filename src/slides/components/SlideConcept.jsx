export function SlideConcept({ heading, content, image, footer, centered, children }) {
  const textContent = Array.isArray(content) ? content.join('<br><br>') : content
  const hasImage = image && image.src

  if (centered || (!hasImage && !children)) {
    return (
      <section className="slide-concept" style={{ textAlign: centered ? 'center' : undefined }}>
        <h2 style={centered ? { textAlign: 'center', marginBottom: '32px' } : undefined}>{heading}</h2>
        {textContent && <div className="concept-text" dangerouslySetInnerHTML={{ __html: textContent }} />}
        {children}
        {footer && <p className="concept-text" style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: footer }} />}
      </section>
    )
  }

  return (
    <section className="slide-concept">
      <div className="concept-grid">
        <div>
          <h2>{heading}</h2>
          {textContent && <div className="concept-text" dangerouslySetInnerHTML={{ __html: textContent }} />}
          {footer && <p className="concept-text" style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: footer }} />}
        </div>
        <div className="concept-visual">
          {hasImage && <img src={image.src} alt={image.alt || ''} />}
          {children}
        </div>
      </div>
    </section>
  )
}
