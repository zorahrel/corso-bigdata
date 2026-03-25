export function SlideConcept({ heading, headingColor, content, image, footer, centered, children }) {
  const textContent = Array.isArray(content) ? content.join('<br><br>') : content
  const hasImage = image && (image.src || image.html)

  if (centered || (!hasImage && !children)) {
    return (
      <section className="slide-concept" style={{ textAlign: centered ? 'center' : undefined }}>
        <h2 style={centered ? { textAlign: 'center', marginBottom: '32px', color: headingColor || undefined } : { color: headingColor || undefined }}>{heading}</h2>
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
          <h2 style={headingColor ? { color: headingColor } : undefined}>{heading}</h2>
          {textContent && <div className="concept-text" dangerouslySetInnerHTML={{ __html: textContent }} />}
          {footer && <p className="concept-text" style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: footer }} />}
        </div>
        <div className="concept-visual">
          {image && image.src && <img src={image.src} alt={image.alt || ''} />}
          {image && image.html && <div dangerouslySetInnerHTML={{ __html: image.html }} />}
          {children}
        </div>
      </div>
    </section>
  )
}
