export function SlideClosing({ heading, subtitle, content, author, style }) {
  return (
    <section className="slide-closing" style={style}>
      {heading && <h1>{heading}</h1>}
      {subtitle && <p className="closing-subtitle">{subtitle}</p>}
      {content && <div className="closing-content" dangerouslySetInnerHTML={{ __html: content }} />}
      {author && (
        <div className="closing-author">
          <strong>{author.name}</strong>
          {author.role && <span>{author.role}</span>}
          {author.email && <span>{author.email}</span>}
        </div>
      )}
    </section>
  )
}
